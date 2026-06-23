"use strict";
// Test for LAST TEXT (lasttext.html).
// Extracts the EXACT core logic from the HTML so the test cannot drift from the page,
// then asserts the three Definition-of-Done properties from the brief.

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const htmlPath = path.join(__dirname, "..", "artifacts", "last-text", "index.html");
const html = fs.readFileSync(htmlPath, "utf8");

// Pull out the <script id="lasttext-core"> ... </script> block verbatim.
const m = html.match(/<script id="lasttext-core">([\s\S]*?)<\/script>/);
if (!m) {
  console.error("FAIL: could not find <script id=\"lasttext-core\"> in lasttext.html");
  process.exit(1);
}

// Evaluate the core in a sandbox with a fake `window` (the core attaches LastText to it).
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(m[1], sandbox, { filename: "lasttext-core" });
const LT = sandbox.window.LastText;

let failures = 0;
function ok(cond, msg) {
  if (cond) {
    console.log("  PASS  " + msg);
  } else {
    failures++;
    console.log("  FAIL  " + msg);
  }
}

console.log("LAST TEXT — core logic test\n");
console.log("Verdict bank size: " + LT.VERDICTS.length + "\n");

// ---------------------------------------------------------------------------
// (a) Same name returns the identical verdict across repeated calls.
// ---------------------------------------------------------------------------
console.log("(a) Determinism — same name, repeated calls:");
{
  const names = ["Sarah", "alex", "Jordan", "mom", "Devon", "你好", "Jean-Luc", "O'Brien"];
  let allStable = true;
  for (const n of names) {
    const first = LT.verdictFor(n);
    for (let i = 0; i < 1000; i++) {
      if (LT.verdictFor(n) !== first) { allStable = false; break; }
    }
  }
  ok(allStable, "every name returns the same verdict across 1000 repeated calls");
}

// ---------------------------------------------------------------------------
// (b) Case and surrounding whitespace do not change the verdict.
// ---------------------------------------------------------------------------
console.log("\n(b) Normalisation — case & whitespace:");
{
  const variantGroups = [
    ["Sarah", "sarah ", "SARAH", "  sArAh  ", "\tSarah\n", "sa rah".replace(" ", "")],
    ["Alex", "  alex", "ALEX  ", "aLeX"],
    ["Mary Jane", "  mary jane ", "MARY   JANE", "Mary    Jane"]
  ];
  let allEqual = true;
  for (const group of variantGroups) {
    const base = LT.verdictFor(group[0]);
    for (const v of group) {
      if (LT.verdictFor(v) !== base) {
        allEqual = false;
        console.log("        mismatch: " + JSON.stringify(v) + " !== " + JSON.stringify(group[0]));
      }
    }
  }
  ok(allEqual, '"Sarah" == "sarah " == "SARAH" (and other case/whitespace variants)');

  // explicit check of the brief's exact trio
  ok(
    LT.verdictFor("Sarah") === LT.verdictFor("sarah ") &&
    LT.verdictFor("sarah ") === LT.verdictFor("SARAH"),
    'brief trio exact: verdictFor("Sarah") === verdictFor("sarah ") === verdictFor("SARAH")'
  );
}

// ---------------------------------------------------------------------------
// (c) Every index the hash can produce maps to a real, non-empty sentence.
// ---------------------------------------------------------------------------
console.log("\n(c) Coverage — no out-of-range, no blank:");
{
  // The bank itself: every entry is a real non-empty string.
  let bankClean = true;
  LT.VERDICTS.forEach(function (s, i) {
    if (typeof s !== "string" || s.trim() === "") {
      bankClean = false;
      console.log("        bank entry " + i + " is empty/invalid");
    }
  });
  ok(bankClean, "all " + LT.VERDICTS.length + " bank entries are non-empty strings");

  // hash % length is always within 0..length-1, and each such index is valid.
  let indexValid = true;
  for (let i = 0; i < LT.VERDICTS.length; i++) {
    const s = LT.VERDICTS[i];
    if (typeof s !== "string" || s.length === 0) { indexValid = false; }
  }
  ok(indexValid, "indices 0.." + (LT.VERDICTS.length - 1) + " all map to a valid sentence");

  // Sweep a large deterministic set of generated names: every result must be a
  // real verdict from the bank (proves hash % length never escapes the array).
  const bankSet = new Set(LT.VERDICTS);
  const hitIdx = new Set();
  let sweepOk = true;
  let total = 0;
  for (let i = 0; i < 20000; i++) {
    const name = "name_" + i + "_" + (i * 2654435761 >>> 0).toString(36);
    const v = LT.verdictFor(name);
    total++;
    if (v === null || !bankSet.has(v) || v.trim() === "") {
      sweepOk = false;
      console.log("        bad result for " + JSON.stringify(name) + ": " + JSON.stringify(v));
      break;
    }
    hitIdx.add(LT.hashString(LT.normalizeName(name)) % LT.VERDICTS.length);
  }
  ok(sweepOk, "swept " + total + " distinct names — every result is a real, non-empty bank verdict");
  console.log("        (sweep reached " + hitIdx.size + " of " + LT.VERDICTS.length + " distinct verdicts)");

  // Empty / whitespace-only input is a clean no-op (null), never a blank verdict.
  ok(
    LT.verdictFor("") === null &&
    LT.verdictFor("   ") === null &&
    LT.verdictFor("\t\n ") === null &&
    LT.verdictFor(null) === null &&
    LT.verdictFor(undefined) === null,
    "empty / whitespace-only / null input returns null (no blank verdict)"
  );
}

console.log("\n" + (failures === 0
  ? "ALL TESTS PASSED"
  : failures + " TEST(S) FAILED"));
process.exit(failures === 0 ? 0 : 1);
