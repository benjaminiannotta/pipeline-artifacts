"use strict";
// Test for THE CALL (artifacts/the-call/index.html).
// Extracts the <script id="the-call-core"> block and runs it, then asserts the
// eleven properties in brief-05's Definition of Done. The core block ships in
// the artifact and is reused verbatim here, so the test cannot drift from it.
//
//   node test/thecall.test.js

const fs   = require("fs");
const path = require("path");
const vm   = require("vm");

const htmlPath = path.join(__dirname, "..", "artifacts", "the-call", "index.html");
const html = fs.readFileSync(htmlPath, "utf8");

const m = html.match(/<script id="the-call-core">([\s\S]*?)<\/script>/);
if (!m) {
  console.error('FATAL: no <script id="the-call-core"> found in artifacts/the-call/index.html');
  process.exit(1);
}
const coreSrc = m[1];

// Run the core with a window stub and NO document — the field renderer must not
// execute under test; only the pure exports are exercised.
const sandbox = { window: {}, Math: Math };
vm.createContext(sandbox);
vm.runInContext(coreSrc, sandbox, { filename: "the-call-core" });
const TC = sandbox.window.TheCall;
if (!TC) {
  console.error("FATAL: the-call-core did not set window.TheCall");
  process.exit(1);
}

let failures = 0;
function ok(cond, msg) {
  if (cond) { console.log("  PASS  " + msg); }
  else      { failures++; console.log("  FAIL  " + msg); }
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

console.log("\nTHE CALL — build integrity tests (living-field rebuild)\n");

const EXPECTED = [
  "You said you'd call them this weekend.",
  "You said that last weekend too.",
  "There is a number in your phone you could press right now.",
  "And one day there won't be.",
  "But that day is not today.",
  "Today it still rings."
];

const beats = TC.beats;
const sched = TC.schedule();

// (1) all six beats present, in this exact order
console.log("(1) the six beats, exact text and order");
ok(Array.isArray(beats), "beats is an array");
eq(beats.length, 6, "exactly six beats");
EXPECTED.forEach(function (text, i) { eq(beats[i], text, "beat " + (i + 1) + " is exact"); });
ok(sched.length === 6 && sched.every(function (s, i) { return s.text === EXPECTED[i]; }),
  "schedule reveals all six beats in order");

// (2) the final beat rendered is beat 6 (the open door)
console.log("\n(2) ends on beat 6 (the open door)");
const last = sched[sched.length - 1];
eq(last.text, "Today it still rings.", "final scheduled beat is beat 6");
eq(TC.finalText, "Today it still rings.", "finalText is beat 6");
ok(last.isFinal === true, "final beat is flagged isFinal");

// (3) beat 4 is NOT the last beat shown
console.log("\n(3) beat 4 is not the terminal beat");
ok(last.text !== "And one day there won't be.", "last beat is not beat 4");
eq(beats.indexOf("And one day there won't be."), 3, "beat 4 sits at index 3, before beats 5 and 6");

// (4) no fabricated statistics
console.log("\n(4) no fabricated stats");
const fullText = beats.join(" ");
ok(!/\d+\s*%/.test(fullText), "no NN% percentage pattern in beat text");
ok(!/\d/.test(fullText), "no digits at all in beat text");

// (5) carried-forward content guard
console.log("\n(5) carried-forward content guard");
ok(fullText.toLowerCase().indexOf("cigarette") === -1, "no 'cigarette' in copy");

// (6) no network calls anywhere in the shipped file
console.log("\n(6) no network / external resource calls");
[
  ["fetch(",                /\bfetch\s*\(/],
  ["XMLHttpRequest",        /XMLHttpRequest/],
  ["sendBeacon",            /sendBeacon/],
  ["WebSocket",             /WebSocket/],
  ["EventSource",           /EventSource/],
  ["localStorage",          /localStorage/],
  ["sessionStorage",        /sessionStorage/],
  ["indexedDB",             /indexedDB/],
  ["external src=http",     /\bsrc\s*=\s*["']https?:/i],
  ["external <script src>", /<script[^>]+src\s*=/i],
  ["@import url(http",      /@import\s+url\(\s*["']?https?:/i]
].forEach(function (pair) { ok(!pair[1].test(html), "file contains no " + pair[0]); });

// (7) beat 6 is the terminal state and does NOT fade out
console.log("\n(7) beat 6 is held, never fades out");
eq(last.fadeOut, 0, "final beat fadeOut is 0 (it stays)");
ok(sched.slice(0, -1).every(function (s) { return s.fadeOut > 0; }),
  "every non-final beat fades out (only beat 6 is held)");
ok(sched.every(function (s, i) { return i === 4 ? s.pauseBefore > 0 : s.pauseBefore === 0; }),
  "the longer pause sits only between beat 4 and beat 5 (the silence)");

// (8) a reduced-motion code path exists
console.log("\n(8) reduced-motion respected");
ok(/prefers-reduced-motion/.test(html), "file handles prefers-reduced-motion");
ok(/matchMedia\(\s*["']\(prefers-reduced-motion: reduce\)["']\s*\)/.test(html),
  "JS branches on prefers-reduced-motion");

// (9) a noise flow field exists: inline noise fn + canvas/animation loop, no library
console.log("\n(9) noise flow field is inline (no library)");
ok(typeof TC.noise3 === "function", "core exports a noise function (noise3)");
// the noise is real: produces values in [-1,1], varies with position, deterministic
const n0 = TC.noise3(0, 0, 0);
const nA = TC.noise3(3.7, 1.2, 0.5);
const nB = TC.noise3(3.7, 1.2, 0.5);
ok(typeof n0 === "number" && n0 >= -1.0001 && n0 <= 1.0001, "noise output is bounded in [-1,1]");
ok(nA !== TC.noise3(8.1, 2.9, 0.5), "noise varies with input position (not constant)");
eq(nA, nB, "noise is deterministic (same input -> same output)");
ok(/function\s+noise3\s*\(/.test(coreSrc), "an inline noise3 function is defined in the core");
ok(/simplex/i.test(coreSrc), "core documents the noise as simplex");
ok(/getContext\(/.test(coreSrc), "core obtains a canvas 2d context");
ok(/requestAnimationFrame/.test(coreSrc), "core runs a requestAnimationFrame loop");
ok(/<canvas\b/i.test(html), "the page contains a <canvas> element for the field");
// no external library / module loading anywhere
ok(!/<script[^>]+src\s*=/i.test(html), "no external <script src> (no library)");
ok(!/\bimport\s+[^;]*from\s+["']/.test(html) && !/\brequire\s*\(/.test(coreSrc),
  "no ES import / require of any library");

// (10) the field reacts to the story — beat-keyed state, not one constant animation
console.log("\n(10) field reactivity is keyed to the beat");
ok(typeof TC.fieldState === "function", "core exports fieldState(beatIndex)");
const f = [0,1,2,3,4,5].map(TC.fieldState);
const speeds = f.map(function (s) { return s.speed; });
ok(new Set(speeds).size > 1, "field speed differs across beats (not a single constant)");
ok(f[3].tension > f[0].tension, "the field tenses toward beat 4 (tension rises)");
ok(f[3].speed > f[0].speed, "the flow tightens/quickens by beat 4");
ok(TC.silenceState && TC.silenceState.speed < f[0].speed && TC.silenceState.speed < f[3].speed,
  "the silence after beat 4 nearly stills the field (slowest of all)");
ok(f[5].warmth > f[3].warmth, "the field warms by beat 6 (warmth rises)");
ok(f[5].attract > f[0].attract, "threads resolve into the focal knot by beat 6 (attract rises)");

// (11) the strung-heart signature is present and mends to whole by the final beat
console.log("\n(11) strung-heart signature mends frayed -> whole");
ok(/points="48,90 22,53 8,33/.test(html), "the canonical strung-heart SVG is present");
ok(typeof TC.threadProgress === "function" && typeof TC.stringExtent === "function",
  "core exposes the mend (threadProgress / stringExtent)");
eq(TC.threadProgress(0), 0, "beats 1-4 frayed (mend 0)");
eq(TC.threadProgress(3), 0, "beat 4 still frayed");
ok(TC.threadProgress(4) > 0 && TC.threadProgress(4) < 1, "beat 5 begins to mend");
eq(TC.threadProgress(TC.finalIndex), 1, "beat 6 is fully whole");
ok(TC.stringExtent(0, 0) < TC.stringExtent(0, 1), "a string grows toward whole as it mends");
eq(TC.stringExtent(0, 1), 1, "a fully mended string is whole (extent 1)");

console.log("\n----------------------------------------");
console.log("  " + (failures === 0 ? "ALL TESTS PASSED" : failures + " TEST(S) FAILED"));
console.log("----------------------------------------\n");
process.exit(failures === 0 ? 0 : 1);
