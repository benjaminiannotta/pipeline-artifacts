# CLAUDE.md — pipeline-artifacts

This repo is an autonomous content pipeline. Each artifact is a single self-contained web page built from a brief, tested, and shipped to GitHub Pages. The pipeline is the product; the artifacts are payloads. You are the build-and-ship engine. Your job is mechanical and identical every run: take a brief, build it into the repo structure below, prove it works, ship it. Nothing about your job is payload-specific. All payload-specific detail lives in the brief.

## Repo structure (never deviate)

- `briefs/brief-NN-slug.md` — every brief lives here. NN is a two-digit number, slug is the artifact name.
- `artifacts/<slug>/index.html` — every artifact is one self-contained file in its own folder.
- `scripts/generate-index.js` — scans `artifacts/`, reads each artifact's `<title>` and `<meta name="description">`, writes the root landing page. NEVER hand-edit the root `index.html`; always regenerate it with this script.
- `test/<slug>.test.js` — one test per artifact. The test extracts the artifact's own `<script id="<slug>-core">` block and runs it, so the test can never drift from what ships.
- root `index.html` — generated landing page listing all artifacts. Generated only, never edited by hand.

## The build job (fixed sequence, every brief)

1. If the brief is at the repo root, move it into `briefs/` with `git mv`.
2. Build `artifacts/<slug>/index.html` as a single self-contained file: vanilla JS, no build step, no external libraries, no localStorage, no network calls, no AI API, nothing leaves the browser. Add a `<title>` and a `<meta name="description">` so the landing page picks it up.
3. Put the artifact's pure, DOM-free logic in a `<script id="<slug>-core">` block so the test can reuse the exact same source.
4. Write `test/<slug>.test.js` that extracts that core block and asserts correctness on a known fixture. The test must assert actual correct values (exact expected output and exact counts), not merely that something is present.
5. Regenerate the landing page: `node scripts/generate-index.js`.
6. Commit everything and push to `main`.

## Definition of done (non-negotiable)

A task is NOT done until a test has run on real output and you have shown its output. "Should work", "deployed", and "built" are not "works". Before claiming done:
- The artifact's test passes, and you have shown the test output (not just asserted it passed).
- The existing artifacts' tests still pass (do not break drift-lock, last-text, paste-clean, or any shipped artifact).
- For any artifact whose value depends on being client-side and private, grep the file to confirm there are zero network/storage calls (`fetch`, `XMLHttpRequest`, `sendBeacon`, `WebSocket`, `localStorage`, `sessionStorage`, `indexedDB`, external `src=http`, external `<script src>`), and confirm it before claiming the privacy promise holds.

## Hard rules

- Fix the source, not the symptom. If a test fails, fix the code that produces the wrong output. NEVER edit the expected output or backfill a value to make a check pass. A result that only holds because of a patch that would not survive a clean rebuild is not fixed.
- Never overwrite or break an existing artifact. New work goes in a new `artifacts/<slug>/` folder.
- The root `index.html` is generated only. If it needs to change, change `scripts/generate-index.js` or the artifact's metadata and regenerate.
- On failure, stop and report the error. Do not push broken code. Do not claim success you have not proven.
- Distinguish proven from claimed. State what a test verified versus what you intend or expect. Flag when you are guessing.

## Environment notes (hard-won, do not relearn)

- Default to Python for standalone scripts run locally; the repo's own tooling (`scripts/`, tests) is Node and stays Node.
- When writing special/invisible Unicode characters into source, build them from numeric code points (`String.fromCharCode(0x….)`) rather than typing glyphs or `\uXXXX` escapes; in this setup those get written as literal characters and a literal line-separator (U+2028/U+2029) will break a regex literal.
- GitHub Pages rebuilds asynchronously after a push (~1–2 minutes). The pushed source is correct immediately; the live CDN lags. Verify the pushed source via the raw URL, and note CDN lag rather than reporting a stale live page as a failure.
- `gh` (GitHub CLI) is not installed in this environment. Do not rely on it. Report expected live URLs directly.

## Live URLs

- Landing: https://benjaminiannotta.github.io/pipeline-artifacts/
- Each artifact: https://benjaminiannotta.github.io/pipeline-artifacts/artifacts/<slug>/
