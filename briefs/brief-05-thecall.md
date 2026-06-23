# brief-05 — THE CALL

## Slug
the-call

## Type
Emotional text post. Single screen, slow reveal, one quiet gut-punch that lands and then resolves on something that isn't despair. Built to be screenshotted and shared.

## Concept (one line)
The phone call you keep meaning to make, shown as the gap between "I'll call them this weekend" and the weekend that runs out.

## The spine (what it does to the reader)
1. Hook: an ordinary, almost boring line. The kind of thing everyone has said.
2. Ache: the realisation underneath it, that "later" is a quiet bet you assume you'll win.
3. Truth: the turn. Said plainly, no melodrama. The reader feels it in their chest, not because it's loud, but because it's true.
4. Resolve: it does NOT end on despair or guilt. It ends on the thing the reader can still do. The door is open, not shut.

## The words (this is the payload, lock these)
Reveal these in sequence, one beat at a time. Exact text:

1. "You said you'd call them this weekend."
2. "You said that last weekend too."
3. "There is a number in your phone you could press right now."
4. "And one day there won't be."
5. "But that day is not today."
6. "Today it still rings."

(Beat 4 is the gut-punch. Beat 5 is the catch, it pulls back from the edge. Beat 6 is the open door. The piece MUST end on 6, on the fact that it still rings, i.e. on the thing they can still do. Never end on beat 4.)

## Success state
The reader reaches beat 6, sits for a second, and thinks of a specific person. That's the whole win. No score, no interaction beyond the reveal.

## Output (the shareable thing)
The final frame (beat 6, "Today it still rings.") is the screenshot. It has to stand alone as an image that means something even to someone who didn't see the build-up.

## Visual style and mood
Brand: HeartStrings (see DESIGN.md). This post uses the **Rust** mood (Regret): background #2d1c17, text #e7d5c4, thread accent #b75f3c, with the thread in its **frayed** string-state. The strung-heart signature appears per the brand rules.

The look is decided at the Design canvas using the HeartStrings system, but the floor is:
- Still and unhurried. The pacing is the emotion.
- Not a generic "sad words fading on black" template.
- Beat 6 must read as warm/open, not bleak. The Rust ground is warm, not black; lean into that at the end.
- The frayed thread suits the regret of beats 1 to 4. At beat 5 to 6 (the catch, the open door), the thread may ease from frayed toward whole, the visual lift that matches "it still rings."

## Integrity constraints (hard, from brief-04's lessons)
- No invented statistics. No "X% of people regret..." No fake numbers anywhere.
- No guilt-tripping. The piece is permission, not accusation. Beat 5 and 6 exist to make sure of this.
- Must end on the open door (beat 6), never on the loss (beat 4).
- No reference to any specific cause of death, illness, or method. It's about the call, not the ending.

## Motion spec (how it moves, for Code)

Format: build as 9:16 vertical, 1080 x 1920, 30fps. This is the master that covers Reels, TikTok, Shorts, and Stories from one build. Portrait, full-screen mobile.

Safe zones (the platform UI covers the edges, so respect these):
- All text and the signature stay in the CENTRE band. Nothing critical in the top ~14% or bottom ~20% of the frame.
- The six lines render centred, both axes, in that safe middle band.
- The signature sits in the safe area, not a corner the UI would cover.
- Line 1 must be fully legible within the first ~3 seconds (most of a clip's value is seen in the first 3 seconds).

This is a moving post. The motion IS the pacing, and the pacing is the emotion. Build it as a timed reveal, not all-at-once.

Governing principle (this is the brand): the motion should be FELT, not SEEN. If a viewer notices the animation, it has failed. HeartStrings whispers, it does not shout. The text should arrive the way a carefully set table looks: considered, without calling attention to the effort.

The reveal style (the "refined reveal", for restraint-and-craft brands):
- Each line enters with a simple fade-in PLUS a very slight upward translate (a few pixels rising into place). Not opacity alone, the small rise is what reads as crafted rather than flat. Nothing overshoots, nothing bounces.
- Easing is EASE-OUT on everything: motion starts briskly and settles gently. NEVER linear. Linear fades are the single biggest tell of cheap, amateur kinetic text. This is a hard rule.

Timing and reveal:
- One beat visible at a time, centred. The previous beat fades out (ease-out) as the next rises and fades in (ease-out), a held breath between lines. Default is one-at-a-time; the Design pass may refine.
- Each beat: fade/rise in over about 1.2 to 1.6s, hold fully readable for about 2.8s, fade out over about 1.0s. Slow. The reader must sit with each line. (Floor: any line must stay readable for at least 0.5s after it settles, or the motion has failed. 2.8s clears this easily.)
- A longer pause (about 1.5s of near-empty frame) between beat 4 and beat 5. Beat 4 is the gut-punch; let the silence sit before the catch (beat 5) arrives.
- Beat 6 ("Today it still rings.") rises/fades in and STAYS. It does not fade out. END ON STILLNESS: let beat 6 sit silently, held, with the signature visible. The silence is what signals "this matters." This is the shareable final frame.

The thread (the signature animation):
- The strung-heart thread starts in its frayed state (Rust mood, regret).
- Across beats 1 to 4 the thread stays frayed, faint, present in a corner or beneath the text.
- From beat 5 into beat 6, the frayed thread gently mends toward whole (the strings re-tension). Subtle, slow, not a flashy animation. It is the visual echo of "it still rings", the connection is not broken yet.
- Optional: on the final frame, one faint pulse along the mended thread, like a string still ringing. One pulse, not a loop. Restraint.

Controls and respect:
- prefers-reduced-motion: if set, skip fades and the thread animation; show beats as a simple sequence the reader advances, or show all beats stacked statically ending on beat 6. No motion forced on anyone.
- Tap / click / spacebar advances to the next beat early (do not trap the reader in the timing). Reaching the end always lands on beat 6 held.

Quality floor: responsive to mobile (this will be viewed on phones), readable contrast (Rust text #e7d5c4 on #2d1c17 passes), visible focus if any control is focusable.

## Build notes for Code (stage 3, after the Design pass)
- Single self-contained index.html, vanilla JS, no libraries, no build step, no network calls, no storage.
- The six beats reveal in order, timed, slow, per the Motion spec above. The look comes FROM THE DESIGN HANDOFF BUNDLE.
- Wrap the core logic in <script id="the-call-core"> so the test can extract it.
- Include <title> and a <meta name="description">.

## Definition of done (the test, written before the build)
test/thecall.test.js must assert:
1. All six beats are present, in this exact order.
2. The final beat rendered is beat 6 ("Today it still rings."), i.e. the piece ends on the open door.
3. Beat 4 is NOT the last beat shown.
4. No digit-percentage pattern (no fabricated stats) appears anywhere in the beat text.
5. The string "cigarette" does not appear (brief-04 guard, carried forward).
6. No network calls (no fetch, no XMLHttpRequest, no external src).
7. Beat 6 is the terminal state and does NOT fade out (it stays held as the final frame).
8. A reduced-motion code path exists (prefers-reduced-motion is handled), so motion is not forced.
