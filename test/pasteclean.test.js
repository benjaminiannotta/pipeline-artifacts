"use strict";
// Test for PASTE CLEAN (artifacts/paste-clean/index.html).
// Extracts the EXACT cleaning core from the shipped HTML and runs it, so the test
// can never drift from what the page does. Asserts the brief's Definition of Done:
// a known-messy fixture cleans to an exact string AND the reported counts match.
//
//   node test/pasteclean.test.js
//
// All special characters are built with String.fromCharCode (named by code point)
// rather than pasted literally, so this file stays ASCII-only and unambiguous —
// you can read precisely which invisible/curly chars the fixture contains.

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const htmlPath = path.join(__dirname, "..", "artifacts", "paste-clean", "index.html");
const html = fs.readFileSync(htmlPath, "utf8");

const m = html.match(/<script id="pasteclean-core">([\s\S]*?)<\/script>/);
if (!m) {
  console.error('FAIL: could not find <script id="pasteclean-core"> in paste-clean/index.html');
  process.exit(1);
}
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(m[1], sandbox, { filename: "pasteclean-core" });
const PC = sandbox.window.PasteClean;

// ---- tiny assert harness (same shape as the other tests in this repo) ----
let failures = 0;
function ok(cond, msg) {
  if (cond) { console.log("  PASS  " + msg); }
  else { failures++; console.log("  FAIL  " + msg); }
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

const C = String.fromCharCode;
const CR = C(13), LF = C(10), DQ = C(34), SQ = C(39);

console.log("PASTE CLEAN — cleaning pipeline test\n");

// ---------------------------------------------------------------------------
// The known-messy fixture (every required case from the brief, named explicitly):
//   - a URL carrying utm_source AND fbclid (plus a legit id= that must survive)
//   - a zero-width space (U+200B), a BOM (U+FEFF), a soft hyphen (U+00AD)  [invisible]
//   - a non-breaking space (U+00A0)                                        [punctuation]
//   - smart double quotes (U+201C/U+201D), an em-dash (U+2014),
//     a curly apostrophe (U+2019), an ellipsis (U+2026)                    [punctuation]
//   - a CRLF line ending (U+000D U+000A)                                   [line breaks]
//   - triple+ spaces and 4 blank lines                                     [whitespace]
// ---------------------------------------------------------------------------
const fixture =
  "Read this:  https://example.com/post?utm_source=newsletter&fbclid=IwAR42&id=7  here" + CR + LF +
  LF + LF + LF + LF +                                              // -> 4 blank lines
  "She wrote " + C(0x201C) + "yes" + C(0x201D) + " " + C(0x2014) + " it" + C(0x2019) + "s done" + C(0x2026) + LF +
  "in" + C(0x200B) + "visible" + C(0xFEFF) + " soft" + C(0x00AD) + "hyphen and a" + C(0x00A0) + "gap." + "   ";

// The hand-derived, genuinely-correct clean output (NOT copied from the code's own result).
const expected =
  "Read this: https://example.com/post?id=7 here" + LF +
  LF +
  "She wrote " + DQ + "yes" + DQ + " - it" + SQ + "s done..." + LF +
  "invisible softhyphen and a gap.";

// ---- (1) the core Definition-of-Done: exact string + exact counts ----
console.log("(1) Messy fixture -> exact clean string + exact counts:");
const r = PC.clean(fixture);
eq(r.text, expected, "cleaned output exactly equals the expected clean string");
eq(r.stats.tracking, 2, "tracking params removed == 2  (utm_source + fbclid; id= kept)");
eq(r.stats.invisible, 3, "invisible chars removed == 3  (ZWSP + BOM + soft hyphen)");
eq(r.stats.punctuation, 6, "smart punctuation fixed == 6 (2 quotes + em-dash + apostrophe + ellipsis + nbsp)");
eq(r.stats.linebreaks, 1, "line breaks fixed == 1       (one CRLF)");
eq(r.stats.whitespace, 8, "whitespace chars removed == 8 (collapsed spaces, trailing, blank lines)");
ok(r.changed === true, "changed === true for a messy fixture");

// the visible junk is provably gone from the output
ok(r.text.indexOf("utm_source") === -1 && r.text.indexOf("fbclid") === -1, "no tracking params remain in output");
ok(r.text.indexOf(C(0x200B)) === -1 && r.text.indexOf(C(0xFEFF)) === -1 && r.text.indexOf(C(0x00AD)) === -1,
   "no invisible characters remain in output");
ok(r.text.indexOf(C(0x201C)) === -1 && r.text.indexOf(C(0x2014)) === -1 && r.text.indexOf(C(0x00A0)) === -1,
   "no smart quotes / em-dash / nbsp remain in output");
ok(r.text.indexOf("   ") === -1, "no run of 3 spaces remains in output");
ok(r.text.indexOf(LF + LF + LF) === -1, "never more than one blank line in output");

// ---- (2) determinism: same input -> identical output and counts, every time ----
console.log("\n(2) Determinism:");
let stable = true;
for (let i = 0; i < 500; i++) {
  const x = PC.clean(fixture);
  if (x.text !== expected || JSON.stringify(x.stats) !== JSON.stringify(r.stats)) { stable = false; break; }
}
ok(stable, "500 repeated cleans of the fixture give identical text and counts");

// ---- (3) "already clean": cleaning clean text is a no-op with zero counts ----
console.log('\n(3) Already-clean text:');
const r2 = PC.clean(expected);
eq(r2.text, expected, "clean(expected) returns it unchanged");
ok(r2.changed === false, "changed === false for already-clean text");
eq(JSON.stringify(r2.stats), JSON.stringify({ tracking:0, invisible:0, punctuation:0, whitespace:0, linebreaks:0 }),
   "all counts are zero for already-clean text");
eq(PC.formatStats(r2, true), "already clean", 'stats line reads "already clean" (not zeros)');

// ---- (4) empty / nullish input is a safe no-op ----
console.log("\n(4) Empty & nullish input:");
eq(PC.clean("").text, "", 'clean("") returns empty string');
ok(PC.clean("").changed === false, 'clean("") is not "changed"');
eq(PC.formatStats(PC.clean(""), false), "Paste something to clean.", "empty stats line prompts for input");
ok(PC.clean(null).text === "" && PC.clean(undefined).text === "", "clean(null)/clean(undefined) do not throw, return empty");

// ---- (5) URL edge cases: only-a-URL, and multiple URLs ----
console.log("\n(5) URL edge cases:");
const only = PC.clean("https://x.com/?utm_source=a");
eq(only.text, "https://x.com/", "URL whose only params are tracking -> trailing '?' dropped");
eq(only.stats.tracking, 1, "only-a-URL: one tracking param counted");

const multi = PC.clean("a https://s.com/p?utm_source=x&keep=1 b http://t.io/q?fbclid=z c");
eq(multi.text, "a https://s.com/p?keep=1 b http://t.io/q c", "two URLs both cleaned, legit param kept");
eq(multi.stats.tracking, 2, "multiple URLs: tracking count spans both links");

const dq1 = PC.clean("https://example.com/p??utm_source=x");
eq(dq1.text, "https://example.com/p", "malformed doubled '??' (all-tracking): cleaned to bare path");
eq(dq1.stats.tracking, 1, "malformed doubled '??': tracker still counted");
const dq2 = PC.clean("https://example.com/p??utm_source=x&id=1");
eq(dq2.text, "https://example.com/p?id=1", "malformed doubled '??': tracker stripped, well-formed output, legit param kept");

// ---- (6) each operation is independently toggleable (default ON) ----
console.log("\n(6) Per-operation toggles:");
const noPunct = PC.clean(fixture, { punctuation: false });
ok(noPunct.stats.punctuation === 0 && noPunct.text.indexOf(C(0x201C)) !== -1,
   "punctuation:false -> smart quotes survive and punctuation count is 0");
const noTrack = PC.clean(fixture, { tracking: false });
ok(noTrack.stats.tracking === 0 && noTrack.text.indexOf("utm_source") !== -1,
   "tracking:false -> tracking params survive and tracking count is 0");
const noWs = PC.clean(fixture, { whitespace: false });
ok(noWs.stats.whitespace === 0 && noWs.text.indexOf("   ") !== -1,
   "whitespace:false -> triple spaces survive and whitespace count is 0");
const noInvis = PC.clean(fixture, { invisible: false });
ok(noInvis.stats.invisible === 0 && noInvis.text.indexOf(C(0x200B)) !== -1,
   "invisible:false -> zero-width space survives and invisible count is 0");
const noLb = PC.clean("a" + CR + LF + "b", { linebreaks: false, whitespace: false });
ok(noLb.stats.linebreaks === 0 && noLb.text.indexOf(CR) !== -1,
   "linebreaks:false -> CR survives and linebreaks count is 0");

// ---- (7) the exact stats line shown for the fixture ----
console.log("\n(7) Stats line text:");
eq(PC.formatStats(r, true),
   "2 tracking params " + C(0x00B7) + " 3 invisible chars " + C(0x00B7) + " 6 smart punctuation " + C(0x00B7) + " whitespace tidied",
   "fixture stats line is exact");
// a pure line-ending fix must NOT claim "whitespace tidied" (it removed no whitespace)
const lbOnly = PC.clean("a" + CR + LF + "b");
eq(JSON.stringify(lbOnly.stats), JSON.stringify({ tracking:0, invisible:0, punctuation:0, whitespace:0, linebreaks:1 }),
   "line-ending-only input: linebreaks=1, whitespace=0");
eq(PC.formatStats(lbOnly, true), "line breaks fixed",
   'line-breaks-only summary reads "line breaks fixed", not "whitespace tidied"');

console.log("\n" + (failures === 0 ? "ALL TESTS PASSED" : failures + " TEST(S) FAILED"));
process.exit(failures === 0 ? 0 : 1);
