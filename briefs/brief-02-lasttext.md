# brief.md — Pipeline Hand-Run, Artifact 02 (POST type)

**Working title:** LAST TEXT

## 1. Concept (one line)
A single-screen web page where you type the first name of the last person you texted, and it returns one cold, specific, slightly-too-accurate sentence about what that says about you right now, formatted as a screenshot-ready card that begs the reply "ok this is unsettling, do mine."

## 2. Core function (the one thing the user does)
- One screen. One input: a text field for a single first name. Nothing else. No login, no settings, no "AI is thinking" spinner.
- The user types a name, presses one button (or Enter), and gets one verdict sentence on a card.
- The verdict is NOT random and NOT a generic horoscope. It is computed deterministically from the input so the SAME name always returns the SAME verdict (this is critical: it makes the result feel like a fixed truth about you, and lets two people with the same last-texted name compare and confirm it "works"). The mapping is from a fixed, hand-written bank of verdict sentences, selected by a deterministic hash of the lowercased name.
- The verdicts are written in a specific voice: second person, present tense, observational, a little knowing, never cruel, never flattering. They read like a stranger glanced at your phone and said one true thing. Examples of the VOICE (the developer writes ~40 of these into a fixed array; these show the register, do not just reuse these five):
  - "You texted them because the silence was getting loud, not because you had something to say."
  - "They are the person you talk to instead of the person you should be talking to."
  - "You already know what they'll reply. You sent it anyway."
  - "This is the name you'd panic-text first. That tells you where you actually live."
  - "You keep this conversation warm on purpose. You're not done with it."
- The bank must be large enough (~40) that it doesn't feel repetitive when friends compare, but every sentence holds the same unsettling-but-true register.

## 3. Success state (what "good" looks like)
- There is no win or lose. The success state is the reaction: the user reads their sentence and feels *seen*, the "how does it know that" jolt. That jolt is the entire product.
- The shareable moment is the card. A user who gets a verdict that lands will screenshot it and send it to the exact person it's about, or post it with "do this." That share IS the success.
- Secondary: a friend who tries it with the same name and gets the same sentence confirms it's "real," which deepens the share loop.

## 4. Output (the screenshottable result)
The card, engineered to be screenshotted and replied to:
- Small label at top: LAST TEXT
- The name the user typed, shown small and quiet (e.g. "re: Sarah") so the card is personal but the name isn't the focus.
- The verdict sentence as the dominant element: large, set tight, the thing the eye lands on.
- A quiet prompt line at the bottom: "type a name. it knows." plus the input, so a screenshot still tells a stranger what the page does and makes them want to try it.
- No score, no number, no "share" button needed for v1: the user screenshots the card themselves (matches the pipeline's "you post" ending). Optionally a small "COPY" button that copies a share string like: `LAST TEXT — "your verdict sentence here" → lasttext.[url]`.

## 5. Visual style and mood
- **Mood:** intimate, quiet, a little exposing. The feeling of a single line of truth on a dark screen at 1am. NOT clinical-instrument like DRIFT LOCK; this one is softer, warmer-dark, more like a private message than a HUD. Deliberately different register from artifact 01, to stress-test the pipeline on a different aesthetic.
- **Palette:** very dark warm background (near-black with a faint warmth, e.g. #0E0B0D, not the cold blue-black of the game). One muted accent for the name and the prompt line: a dim warm rose or ember (e.g. #C97B84, low saturation, never neon). The verdict sentence itself in a soft off-white (#ECE6E4), high readability, the quietly dominant element.
- **Typography:** the verdict sentence in a serif or a humanist font with some warmth and personality (NOT monospace, NOT a cold geometric sans), set large with comfortable line height so a two-line sentence breathes. The label and prompt line in a small, quiet sans or small-caps. The contrast between the warm serif verdict and the tiny quiet label is the whole typographic mood.
- **Motion:** minimal and gentle. When the verdict appears, a soft fade-up over ~400ms, not a snap. A barely-there cursor blink on the input. No bounce, no confetti, no shake. The restraint makes the sentence feel weighed, not generated.
- **Sound:** none. Silence suits the intimacy; a sound effect would cheapen it. (This also differs from artifact 01, another deliberate pipeline stress-test.)
- **Layout:** dead-centre, narrow column, enormous negative space around the sentence so it feels isolated and considered. Identical at 320px mobile and desktop. The card and the input live in the same centred view, no scrolling.

## Build notes for Code (carry verbatim)
- Single self-contained `index.html`, vanilla JS, no build step, no external libraries, no localStorage, no network calls, no AI API. The verdict bank is a hardcoded array in the file. (This must work fully offline and instantly; any "calling an API" feel kills it.)
- Implement: a fixed array of ~40 verdict sentences in the specified voice; a deterministic hash of the lowercased, trimmed input name that maps to one verdict (same name → same verdict, always); the fade-up reveal; the copy-string button.
- Input handling: typing a name + Enter OR clicking the button both produce the verdict. Empty input does nothing (or a gentle nudge). Handle whitespace and case so "Sarah", "sarah ", and "SARAH" all map to the same verdict.
- The card must be visually clean enough to screenshot as-is on a phone: that card is the product's entire distribution mechanism.
- Definition of done (build this check first, before declaring done): a test asserting that (a) the same name returns the identical verdict across repeated calls, (b) case and surrounding whitespace do not change the verdict ("Sarah" == "sarah " == "SARAH"), and (c) every index the hash can produce maps to a real non-empty sentence in the bank (no out-of-range, no blank). Run it and show the output before saying it works.
- Content guardrail: every sentence in the bank must be observational and a little knowing, never cruel, never sexual, never naming a real trait that could read as an insult about appearance, race, etc. The register is "a stranger said one true thing about your situation," not "an app judged you." Keep it the safe side of sharp.
