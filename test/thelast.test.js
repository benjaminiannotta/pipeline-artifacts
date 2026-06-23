"use strict";
// Test for THE LAST (artifacts/the-last/index.html).
// Extracts the <script id="thelast-core"> block and asserts the four integrity
// properties specified in the brief's Definition of Done.
//
//   node test/thelast.test.js

const fs   = require("fs");
const path = require("path");
const vm   = require("vm");

const htmlPath = path.join(__dirname, "..", "artifacts", "the-last", "index.html");
const html = fs.readFileSync(htmlPath, "utf8");

const m = html.match(/<script id="thelast-core">([\s\S]*?)<\/script>/);
if (!m) {
  console.error('FATAL: no <script id="thelast-core"> found in artifacts/the-last/index.html');
  process.exit(1);
}

const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(m[1], sandbox, { filename: "thelast-core" });
const TL = sandbox.window.TheLast;
if (!TL) {
  console.error("FATAL: thelast-core did not set window.TheLast");
  process.exit(1);
}
const { beats, composeShareText } = TL;

let failures = 0;
function ok(cond, msg) {
  if (cond) { console.log("  PASS  " + msg); }
  else       { failures++; console.log("  FAIL  " + msg); }
}
function eq(actual, expected, msg) {
  if (actual === expected) { console.log("  PASS  " + msg); }
  else {
    failures++;
    console.log("  FAIL  " + msg +
      "\n        expected: " + JSON.stringify(expected) +
      "\n        actual:   " + JSON.stringify(actual));
  }
}

console.log("\nTHE LAST — build integrity tests\n");

// (a) beats array present, non-empty, every beat has required fields
console.log("(a) beats array structure");
ok(Array.isArray(beats),      "beats is an array");
ok(beats.length > 0,          "beats is non-empty");
const requiredFields = ["text", "section", "timing"];
ok(beats.every(function(b){ return requiredFields.every(function(f){ return f in b; }); }),
  "every beat has text, section, and timing fields");
ok(beats.every(function(b){ return typeof b.text === "string" && b.text.trim().length > 0; }),
  "every beat has a non-empty text string");
ok(beats.every(function(b){ return typeof b.timing === "number" && b.timing > 0; }),
  "every beat has a positive numeric timing value");
const validSections = new Set(["hook", "ache", "truth", "hope"]);
ok(beats.every(function(b){ return validSections.has(b.section); }),
  "every beat has a valid section value (hook|ache|truth|hope)");

// (b) arc order: opening beat exists, all ache before all hope, final beat is hope
console.log("\n(b) arc order");
ok(beats.length > 0, "sequence has an opening beat");
const acheIdxs = beats.map(function(b,i){ return b.section === "ache" ? i : -1; }).filter(function(i){ return i >= 0; });
const hopeIdxs = beats.map(function(b,i){ return b.section === "hope" ? i : -1; }).filter(function(i){ return i >= 0; });
ok(acheIdxs.length > 0, "at least one ache beat");
ok(hopeIdxs.length > 0, "at least one hope beat");
var lastAche  = Math.max.apply(null, acheIdxs);
var firstHope = Math.min.apply(null, hopeIdxs);
ok(lastAche < firstHope, "all ache beats precede all hope beats");
eq(beats[beats.length - 1].section, "hope", "final beat is a hope beat (ends on hope, not grief)");

// (c) no contested or fabricated statistics
console.log("\n(c) integrity guards -- no fabricated stats");
var fullText = beats.map(function(b){ return b.text; }).join(" ");
ok(!/\d+\s*%/.test(fullText),
  "no standalone percentage figure in copy");
ok(fullText.toLowerCase().indexOf("cigarette") === -1,
  "no 'cigarette' in copy");

// (d) Ware framed as testimony, not research data
console.log("\n(d) Ware framing -- testimony, not data");
var lc = fullText.toLowerCase();
ok(lc.indexOf("studies show") === -1 && lc.indexOf("research shows") === -1,
  "copy contains no 'studies show' or 'research shows'");
ok(lc.indexOf("nurse") !== -1 || lc.indexOf("carer") !== -1 || lc.indexOf("sat with") !== -1,
  "copy frames Ware content as testimony ('nurse', 'carer', or 'sat with')");

console.log("\n----------------------------------------");
console.log("  " + (failures === 0 ? "ALL TESTS PASSED" : failures + " TEST(S) FAILED"));
console.log("----------------------------------------\n");
process.exit(failures === 0 ? 0 : 1);
