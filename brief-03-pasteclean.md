# brief.md — Pipeline Hand-Run, Artifact 03 (TOOL type)

**Working title:** PASTE CLEAN

## 1. Concept (one line)
A single-screen, instant, fully client-side tool where you paste any text and it strips out every bit of hidden junk (tracking parameters in URLs, invisible unicode, smart-quote and em-dash mangling, double spaces, weird line breaks) and gives you back clean, safe, plain text you can copy in one click, with zero login, zero upload, and nothing leaving your browser.

## 2. Core function (the one thing the user does)
- One screen. A large paste box at the top, a clean-output box below (or the same box transforms in place), and a copy button.
- The user pastes messy text, the tool cleans it instantly (live, as they paste or type, no "process" button needed), and they hit copy.
- The cleaning is a fixed, deterministic pipeline of transformations applied in order. The user can see WHAT got cleaned (a small live count: "3 tracking parameters removed, 2 invisible characters stripped, 4 smart quotes fixed") so the value is visible, not invisible.
- The specific cleaning operations (the developer implements all of these, each toggle-able with sensible defaults ON):
  1. **Strip URL tracking parameters**: remove utm_*, fbclid, gclid, igshid, mc_eid, ref, and the common tracking-param set from any URLs found in the text, leaving the clean link.
  2. **Remove invisible/zero-width characters**: zero-width spaces, zero-width joiners, the BOM, soft hyphens, directional marks, and other invisible unicode that breaks pasting and can hide tracking.
  3. **Normalise smart punctuation**: convert curly/smart quotes to straight quotes, em/en dashes to hyphens, ellipsis character to three dots, non-breaking spaces to normal spaces (these are the things that break code, forms, and plain-text systems).
  4. **Collapse whitespace**: turn runs of multiple spaces into one, strip trailing spaces on each line, collapse 3+ blank lines down to a maximum of one blank line.
  5. **Fix line breaks**: normalise mixed/weird line endings to standard newlines.
- Each operation has a small toggle so a power user can turn one off, but the defaults clean everything. The toggles persist only in-session (no storage).

## 3. Success state (what "good" looks like)
- There is no win or lose. The success state is the user pasting something messy, instantly seeing clean text plus a count of what was removed, hitting copy, and thinking "I'm bookmarking this."
- The "stop scrolling" bar for a TOOL is utility: a stranger who lands on it, pastes one thing, and sees it actually work keeps the tab. The recurring need (everyone pastes links and text constantly) is what brings them back.
- Secondary share moment: the live count of junk removed ("47 invisible characters stripped") is mildly shareable on its own, the "I had no idea my text was full of this" reaction.

## 4. Output (the result)
- The cleaned text in the output area, updating live.
- A small, quiet stats line showing what was cleaned, e.g.: "2 tracking params · 5 invisible chars · 3 smart quotes · whitespace tidied". If nothing was found, it says "already clean" rather than zeros.
- A prominent COPY button that copies the cleaned text and confirms ("Copied"). 
- Optionally a tiny "what got removed?" expandable that lists specifics for the curious, but the default view stays simple.
- No score, no account, no history. Paste, clean, copy, gone.

## 5. Visual style and mood
- **Mood:** calm, trustworthy, utilitarian-but-pleasant. The feeling of a precise, quiet utility that respects you. NOT playful, NOT the cold-instrument of DRIFT LOCK, NOT the intimate-dark of LAST TEXT. This one is light, clean, and reassuring, it must FEEL safe and private, because "nothing leaves your browser" is the selling point and the design has to communicate trust. Deliberately a third distinct aesthetic to stress-test the pipeline.
- **Palette:** light background (off-white / very pale grey, e.g. #F7F7F5), dark readable text (#1A1A1A), one calm accent for buttons and the active state (a trustworthy muted green or teal, e.g. #2E8B7A, signalling "clean/safe/go"). Subtle, not loud. The two text areas gently distinguished (input slightly inset, output on a faint card).
- **Typography:** a clean, neutral, highly readable sans for the UI and labels (system sans is fine). The text areas themselves in a monospace so the user can clearly see characters, spacing, and that the junk is actually gone, monospace makes invisible-character removal legible and trustworthy. The stats line small and quiet.
- **Motion:** minimal and smooth. The stats count can tick up briefly when cleaning happens. The copy button gives a soft confirm. No bounce, no confetti. Calm and instant is the brand.
- **Sound:** none.
- **Layout:** clean vertical stack, generous padding, comfortable on mobile and desktop. Paste box, output, stats, copy button. A short reassuring one-liner near the top: "Cleans your text in your browser. Nothing is uploaded." That line is doing real work, it's the trust signal. No scrolling needed for the core flow.

## Build notes for Code (carry verbatim)
- Single self-contained `index.html`, vanilla JS, no build step, no external libraries, no localStorage, no network calls, no AI API, nothing leaves the browser. (This is not just a constraint, it is the PRODUCT, the whole value is that it's fully client-side and private. Any network call would betray the core promise.)
- Implement all five cleaning operations as a deterministic pipeline, each with a default-ON toggle. Order matters: do URL-param stripping and invisible-char removal before whitespace collapse so counts are accurate.
- The cleaning must run live (on input/paste), not behind a button. The stats line and output update as the user types or pastes.
- Counts must be accurate: count what each operation actually removed/changed, and show "already clean" when nothing was found.
- Copy button copies the cleaned output and confirms.
- The output monospace area must make it visibly obvious the junk is gone (e.g. the user can see spacing normalised).
- Definition of done (build this check first, before declaring done): a test that feeds in a known-messy fixture string containing (a) a URL with utm_source and fbclid, (b) at least one zero-width space and one non-breaking space, (c) smart quotes and an em-dash, (d) triple spaces and 4+ blank lines, and asserts the cleaned output exactly equals the expected clean string AND the reported counts exactly match (e.g. tracking params removed == 2, invisible chars == N, etc). Run it and show the output before saying it works. The transformation functions must be pure and identical between the test and the page (same source), so the test can't drift from what ships.
- Edge cases to handle: empty input (shows nothing / "paste something"), input with no junk (shows "already clean"), text with multiple URLs, text that is ONLY a URL, very long pastes (must stay responsive).
