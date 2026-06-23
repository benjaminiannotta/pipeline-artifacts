# brief.md — Pipeline Hand-Run, Artifact 01

**Working title:** DRIFT LOCK

## 1. Concept (one line)
A one-button browser game where you fire a single shot at a spinning, accelerating target ring and the game grades not just whether you hit, but how cold-blooded your timing was, ending on a one-word verdict about your nerve that begs a "beat this" reply.

## 2. Core mechanic / function
- One screen. One input: tap, click, or spacebar. Nothing else.
- A marker orbits a circular ring at speed. Somewhere on the ring is a target arc (the "lock zone"). The marker is always moving; the player never moves anything.
- The single input fires a shot at the marker's current position. That is the entire control scheme.
- Each successful lock does three things at once, and this triple-tightening is the mechanic, not a difficulty slider bolted on:
  1. Rotation speed increases.
  2. The lock zone arc shrinks.
  3. The marker's spin direction has a chance to reverse without warning on the next round (introduced only after round 4, so the early game teaches the rhythm before it breaks it).
- A miss ends the run instantly. One mistake, fully yours, no luck blamable. This is the proven viral-loop spine (Flappy, Snake, Breakout): one clear input, escalating pressure, death by a single owned error.
- A near-miss inside a tightening grace window does NOT end the run but is recorded as a "flinch" and visibly marked. Flinches are the social hook (see scoring): a clean run with zero flinches is the flex.

## 3. Success / win state
- There is no terminal win. The win state is a personal-best streak plus a flinch count, the way Wordle's win state is really "what's your streak."
- A run is "clean" if it ends with zero flinches. Clean runs unlock a verdict tier (below). The aspirational state a stranger chases is a high-lock clean run, because that is the screenshot worth posting.
- Soft milestone callouts at locks 5 / 10 / 15 / 20 to give the run a sense of chapters, each milestone briefly changing the ring's accent colour so progress is legible in a single screenshot.

## 4. Scoring / output
The output is engineered to be screenshotted and replied to. On run end, one card shows:
- **LOCKS:** the number of consecutive hits (the headline number).
- **FLINCHES:** count of near-misses survived (lower is colder; 0 is the brag).
- **VERDICT:** a single word earned from the lock-and-flinch combination, drawn from a fixed ladder so the same performance always earns the same word (no randomness, the verdict is a fact about the run):
  - 0–3 locks: TWITCHY
  - 4–7: STEADY
  - 8–11: SHARP
  - 12–16: COLD
  - 17+: SURGICAL
  - Modifier: any clean run (0 flinches) appends "· NO FLINCH" and any run of 12+ with 0 flinches overrides the word to DEADEYE. DEADEYE is the rare top-tier screenshot, deliberately hard, so it carries status.
- A one-line shareable string auto-composed for paste: e.g. `DRIFT LOCK — 14 locks, 0 flinches: DEADEYE. Beat it.` plus a copy-string button. (No backend, no leaderboard for v1: the social layer is the human posting the card, which matches the pipeline's "you post" final stage.)

## 5. Visual style and mood
- **Mood:** cold precision instrument, not arcade clutter. The feeling of a targeting reticle settling. Tense, clean, a little clinical. Think aircraft HUD meets a high-end watch face, not neon and explosions.
- **Palette:** near-black background (#0A0C10). Single dominant accent that shifts by milestone tier: ice-cyan (#3FE0D0) at start → amber (#F2A93B) mid → hot magenta (#FF3D7F) at the top tiers. Lock zone arc rendered in the live accent; the orbiting marker is a small bright high-contrast dot with a faint motion trail.
- **Typography:** one monospace face for all numerics (locks, flinches, verdict) so the output card reads like an instrument readout. The verdict word is the largest element on the end card, set in heavy weight, full-width. Everything else is quiet around it.
- **Motion:** the ring is the only busy element. On a successful lock, a crisp tick: a brief flash on the lock zone, a short haptic-style scale pulse, a clean sine blip. On a miss, the ring freezes, desaturates to grey, and the end card slides up. No screen shake, no particle storm. The restraint is the brand: the drama comes from the shrinking zone, not from effects.
- **Sound (procedural Web Audio, no asset files):** a low steady orbit hum that rises in pitch as rotation speed climbs (so the player *hears* the pressure mounting), a sharp blip on lock, a dull thunk on miss. All synthesised, no files.
- **Layout:** dead-centre ring, generous negative space, single readout line above and the input hint below ("tap to lock") that fades after the first successful lock. Works identically at 320px mobile and desktop. The end card is the same on both.

## Build notes for Code (carry verbatim)
- Single self-contained `index.html`, vanilla JS + Canvas, no build step, no external libraries.
- Implement: the orbit + shrink + reverse-after-round-4 mechanic; the flinch grace window; the fixed verdict ladder exactly as specified (verdict is deterministic from locks + flinches, never random); the auto-composed share string with a copy button.
- Procedural Web Audio for all sound. Mobile touch + spacebar + click all fire the shot. No localStorage (in-session state only).
- The end card must be visually clean enough to screenshot as-is: that card is the product's distribution mechanism.
- Definition of done (build this check first): a run that hits 14 locks with 0 flinches displays exactly `DEADEYE`; a run of 6 locks with 1 flinch displays `STEADY` (no NO FLINCH modifier); a single miss at any point freezes the ring and shows the end card with the correct locks/flinches/verdict. Assert these three cases produce the exact specified strings before calling the build done.
