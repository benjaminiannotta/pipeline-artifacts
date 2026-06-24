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
Brand: HeartStrings (see HEARTSTRINGS-BRAND.md). This post uses the **Rust** mood (Regret): background #2d1c17, text #e7d5c4, thread accent #b75f3c, with the thread in its **frayed** string-state. The strung-heart signature appears per the brand rules.

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

THE VISUAL SUBJECT (this is the fix for slop, read carefully):
The post is NOT text on a plain ground with a small logo. The whole frame is a living field. The text sits quiet inside it. The field is the visual subject, and it must carry the emotion even with the sound off and even if the viewer does not read every word. If you stripped the words out, the motion alone should still feel like regret softening into "it still rings". That is the test.

The field (fills the entire frame, behind and around the text):
- A field of fine drifting THREADS (the heartstrings, literal) woven with finer DUST/PARTICLES. Threads carry the meaning; particles carry the atmosphere and depth. Rust palette throughout: threads in the thread accent #b75f3c at low opacity, particles fainter, all over the warm #2d1c17 ground (radial, never flat black).
- Motion is a NOISE FLOW FIELD, not random scatter and not mouse-driven. Use a small simplex/Perlin noise function (write it inline, no library): sample noise at each element's position and time, turn it into a flow angle, move the element along that invisible current. This is what reads as organic and alive rather than mechanical. Slow, ambient, non-intrusive: it gives depth, it never competes with the words.
- SELF-DRIVING. This is recorded as a video, so there is NO cursor and NO interaction to rely on. All motion is autonomous, driven by time and by the story beats below. Do not build mouse-reactive behaviour as the main effect.

The field REACTS to the six beats (this is what makes it a story, not a screensaver):
- Beats 1 to 2 (the ordinary opening): calm, slow drift. The field breathes.
- Beats 3 to 4 (the realisation, then the gut-punch): the threads draw tauter and tense, the flow tightens, faint strings pull toward breaking. The field feels strained by beat 4.
- The silence after beat 4: the field nearly STILLS. Motion almost stops. Held breath. This is the most important moment; let it go quiet.
- Beats 5 to 6 (the catch, the open door): the strung-heart signature, which lives within this same field, mends from frayed toward whole; the threads settle and warm; the particles ease into a gentle resonant drift. The field lifts. On the final held frame (beat 6), one faint single pulse travels along the mended strings, like a string still ringing. One pulse, not a loop.

The strung-heart signature is part of this field, not a separate logo bolted to the bottom. It is the focal knot the threads resolve into by the end. It still carries the per-emotion state (frayed at the start, whole by beat 6) per HEARTSTRINGS-BRAND.md.

Controls and respect:
- prefers-reduced-motion: if set, drop the flow-field animation entirely; show the six beats as a simple static sequence on the Rust ground ending held on beat 6, with the strung-heart shown whole. No motion forced on anyone.
- Performance: keep the element count sane (a few hundred at most) so it holds 30fps on a phone. Skip rendering anything off-frame. This must be smooth when screen-recorded.
- Tap / click / spacebar advances to the next beat early (do not trap the reader in the timing). Reaching the end always lands on beat 6 held.

Quality floor: built for 9:16 mobile, readable contrast (Rust text #e7d5c4 on #2d1c17 passes), the text always legible ABOVE the field (the field must never make the words hard to read; dim the field locally behind the text if needed).

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
9. A noise flow field exists in the source: an inline noise function (simplex/Perlin, no external library) drives the motion of the threads/particles. (Assert the noise function and a canvas/animation loop are present in the core; assert NO external script src and NO library import.)
10. The field reacts to the story: the source references beat-driven state changes for the field (calm at the open, tense by beat 4, near-still in the silence, settling/warming by beat 6). At minimum assert the field's behaviour is keyed to the beat index, not a single constant animation.
11. The strung-heart signature is present and resolves to its whole/mended state by the final beat (carried from the brand file).
