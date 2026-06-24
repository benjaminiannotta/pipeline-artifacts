# HEARTSTRINGS - PROJECT MASTER

> The single authoritative brief for the HeartStrings project. It encodes three systems - the Winning-Post Formula, the Anti-Slop Voice System, and the Anti-Slop Visual System - as concrete rules a coding agent can build from. Synthesized from five deep-research strands (cinematic vanilla technique, premium motion, anti-slop visuals, anti-slop voice, and engagement data). This document is plain ASCII by design.

## How to read this file

- Every substantive claim is tagged:
  - [PROVEN - source] = backed by data, a study, or authoritative documentation (cited).
  - [PRINCIPLE] = craft judgment / synthesis, not a measured fact. A strong default; override with reason.
- Parameter values are given as ranges with a recommended default called out.
- Code sketches are illustrative and vanilla-only; starting points, not drop-in libraries.
- Full source list is at the end, grouped by strand.

---

## 0. THE PRIME DIRECTIVE (non-negotiable)

Every HeartStrings post ships as ONE self-contained index.html. Vanilla HTML/CSS/JS only. No libraries, no frameworks, no network calls, no build step, no external assets, no storage. Fonts, art, motion, and logic are all inline. Anything that cannot be done within that ceiling is out of scope by definition.

This is not a limitation to work around; it is the brand's spine. The visual and motion toolkit below was researched specifically against this ceiling and works inside it. [PRINCIPLE]

What the ceiling can deliver at 60fps (proven achievable in pure Canvas2D/SVG/CSS): noise-driven flow fields, layered parallax depth, soft additive glow, persistent trails, dithered warm grounds, cinematic line-by-line motion. What it genuinely cannot do (needs WebGL, therefore out of scope): true full-frame per-pixel post-processing every frame, tens of thousands of independently-styled particles, live full-resolution fluid/shader effects. [PROVEN - svggenie SVG-vs-Canvas-vs-WebGL; Mozilla canvas-filter bug #1498291/#925025] The good news: HeartStrings is quiet, so it never needs them.

---

## 1. WHAT HEARTSTRINGS IS

A series of short, quiet, emotionally true posts. 9:16 vertical. One mood palette per post. A fine-lined strung-heart signature mark and the HeartStrings wordmark are the only fixed elements. The job of a post: make someone stop, feel something real, and think of one specific person - then quietly send it to that person.

It is not melodramatic, not greeting-card, not preachy, not "inspirational quote." Restraint is the brand. The signature must never compete with the post; it is a maker's mark you notice second. [PRINCIPLE - brand brief]

The central design tension, resolved. Virality research says high-arousal emotion spreads and low-arousal sadness does not, yet HeartStrings is "quiet." The resolution governs everything downstream: "quiet" is a production aesthetic (soft visuals, few words, nothing that shouts); the emotion underneath must still be activating. Awe, tenderness, nostalgia, gratitude, and bittersweet recognition are high-arousal or self-transcendent emotions in soft clothing. Flat, wallowing sadness is the one failure mode to avoid. [PROVEN basis - Berger and Milkman 2012; Piff/Keltner 2015; BuzzSumo 100M]

---

## 2. PART I - THE WINNING-POST FORMULA

What actually earns engagement, and specifically SHARES, for short emotional content. Source strand E.

### 2.1 The metric that matters: sends, not likes

- Instagram's most influential ranking signals (per Adam Mosseri, public statements 2024-2025) are watch time, sends-per-reach (DM shares), and likes-per-reach. Mosseri framed sends-per-reach as one of the most important: "create something people want to send to a friend." [PROVEN - Mosseri 2024-2025]
- Sends (private DM shares) are weighted far more heavily than likes for reaching non-followers; industry reporting cites roughly 3-5x the weight of likes for unconnected reach (treat the multiple as approximate). Likes help with existing followers; sends drive discovery. [PROVEN as reported - Mosseri 2024-2025; 3-5x is industry-reported]
- Therefore: design every post to be privately sent to one person. This is also exactly what the brand wants emotionally (the "think of a specific person" reflex). The aesthetic goal and the algorithmic goal are the same target. [PRINCIPLE]

### 2.2 Pick a quiet-but-high-arousal emotion

The science of sharing, with figures:
- Anger was the strongest content predictor in Berger and Milkman: +1 SD of anger raised the odds of making the NYT most-emailed list by a factor of 1.5 (about 2.9 extra hours as lead story). High-arousal. Not the HeartStrings register, but it proves arousal drives sharing. [PROVEN - Berger and Milkman 2012, JMR 49:192-205, n~7,000]
- Awe was second strongest: +1 SD of awe raised the odds by a factor of 1.4. Awe is high-arousal POSITIVE and can feel quiet (wonder, the "small self"). This is the strongest on-brand driver. [PROVEN - Berger and Milkman 2012, factor 1.4]
- Independent corroboration: BuzzSumo/OkDork coded the most-shared of 100M articles; top emotions were awe 25%, laughter 17%, amusement 15%, all positive/high-arousal; sadness and anger together only ~7%. [PROVEN - BuzzSumo/OkDork 100M]
- Awe is prosocial: across 5 studies it diminishes the sense of self and increases generosity and helping - it makes people act outward and share. [PROVEN - Piff, Dietze, Feinberg, Stancato, Keltner 2015, JPSP]
- Nostalgia increases social connectedness, self-continuity, and meaning, with connectedness as the mediating mechanism; it makes people feel closer to specific others - ideal for "this made me think of you." [PROVEN - Sedikides and Wildschut; van Tilburg et al. 2019 EJSP]
- Positivity alone moves the needle only weakly (about +1.2 lead-story hours vs anger's 2.9): arousal matters more than valence. [PROVEN - Berger and Milkman 2012]

Avoid: flat sadness. It is low-arousal/deactivating and was negatively related to sharing. [PROVEN - Berger and Milkman 2012]

The jolt test (rule of thumb): does the post produce a jolt - chest-tighten, goosebumps, the urge to text someone - or just a soft sigh? The jolt is arousal and it shares. The sigh is the failure mode. [PRINCIPLE]

### 2.3 Why people share (identity and relationships)

From the NYT Customer Insight Group "Psychology of Sharing" (2011, n > 2,500 sharers):
- 94% carefully consider how the information will be useful to the recipient (sharing is recipient-directed). [PROVEN - NYT 2011]
- 68% share to give people a better sense of who they are and what they care about (identity/self-presentation). [PROVEN - NYT 2011]
- 78% share to stay connected to people they may not otherwise keep in touch with; 73% to connect with others who share their interests. [PROVEN - NYT 2011]
- 84% share to support a cause/issue they care about; 49% to inform/influence others. [PROVEN - NYT 2011]
- Six sharer personas (Altruists, Careerists, Hipsters, Boomerangs, Connectors, Selectives); no reliable public per-persona percentage split exists. HeartStrings is built for Connectors and Altruists, who share to nurture one relationship. [PROVEN - NYT 2011 personas; PRINCIPLE - no public split]

### 2.4 Structure (anatomy of a high-share post)

1. Hook in the first 1-2 lines: a specific image, a question, or an unfinished thought. It must land before the caption truncates (~125 chars) and before the ~2-second scroll decision. [PROVEN - IG ~125-char "...more"; short-form 2-second retention rule]
2. Hyper-specific anchor, not universal abstraction: one concrete detail a viewer can map onto one real person. Specificity is the send trigger. [PRINCIPLE - NYT recipient-directed sharing]
3. A turn/payoff at the end: a small reveal or gut-punch line that makes the feeling land. No payoff -> no share. STEPPS "Stories": ideas wrapped in a small narrative arc travel further. [PROVEN - Berger STEPPS; PRINCIPLE for the turn]
4. Optional soft closer: a genuine "send this to the person you thought of" works as a payoff on already-relatable content, never as a crutch on thin content. [PRINCIPLE]

### 2.5 Length and on-screen text numbers

- On-image text: 3-7 words per line, 2-3 short lines, never a block. (HeartStrings standard: up to six lines, revealed one at a time.) [PROVEN - short-form caption best practice]
- Caption: keep the hook within the first ~125 characters (IG feed truncates there). Engagement sweet spots are ultra-short (~1-50 chars) or short (~138-150 chars); long captions suit education, not emotional posts. IG hard limit 2,200 chars. [PROVEN - IG truncation; caption-length studies]
- Hashtags: 3-5 relevant tags as classification, not a generic pile (IG allows up to 30, but 3-5 is the recommended count). [PROVEN - current industry consensus]
- If video: weak hooks keep only 30-40% past 3 seconds, strong hooks 70-90%; the first ~2 seconds drive ~70% of retention; a hook in second 1 yields ~41% higher retention. Clips under 15s reach ~92% completion; ~21-34s is a completion sweet spot; 31-60s can win total watch time if retention stays above ~60%. [PROVEN - short-form retention/length studies 2025-2026]

### 2.6 What fails (delete on sight)

Flat sadness with no turn; generic inspirational/motivational quotes (vanity likes, no sends, reach people who already follow the genre); preachy/toxic positivity; over-long text or a hook past ~125 chars; no specific anchor (no one to send it to); melodrama; a weak or slow hook. [PROVEN - Berger and Milkman (sadness); retention/truncation data; PRINCIPLE for the rest]

---

## 3. PART II - THE ANTI-SLOP VOICE SYSTEM

What makes short emotional text read as human and true vs AI/greeting-card slop. Source strand D.

### 3.1 The governing law

Sentimentality is unearned emotion: the writer naming the feeling and instructing the reader to have it. True feeling is evoked through concrete specific detail, then left alone. Show the evidence; let the reader feel the conclusion. [PROVEN - show-don't-tell craft; Writers.com]

Hemingway's iceberg is the technical basis: if a writer knows enough and omits what he knows, "the reader will have a feeling of those things as strongly as though the writer had stated them." The caveat that separates iceberg from slop: omit what you know, not what you don't - "a writer who omits things because he does not know them only makes hollow places." ("Hills Like White Elephants" never says the word.) [PROVEN - Hemingway, Death in the Afternoon; Iceberg theory]

Every rule below serves one axis: stage the object, omit the feeling.

### 3.2 Slop tells (with bad examples)

- "It's not X, it's Y" / "not just X but Y" - explicit antithesis as a formula. The single most-cited AI tell. BAD: "Grief isn't the absence of someone. It's the love with nowhere to go." [PROVEN - Gorrie, Dead Language Society; Slate]
- Tricolon / rule-of-three overuse. The problem is the abuse, not the device. BAD: "She taught me to be brave, to be kind, to be myself." [PROVEN - Gorrie]
- Saturated/symmetrical parallelism (every clause mirrored, one rhythm). BAD: "We laughed in the good years. We held on through the hard ones." [PROVEN - Gorrie]
- Em-dash cadence (one dramatic aside per line). The dash is innocent; the relentless rhythm is the tell. BAD: "He never said much - but he didn't have to - the look said it all." [PROVEN - Slate; languagehat]
- Hollow profundity / pseudo-deep aphorism (every line a pull-quote, no connective tissue). BAD: "In the end, the people we lose never really leave; they just learn to live inside us." [PROVEN - JD Meier, synthetic profundity]
- Abstraction instead of concrete detail. BAD: "The bond between a parent and child is one of life's most precious gifts." [PROVEN - JD Meier; Ogilvy on "big empty words"]
- Sentimentality that tells you how to feel. BAD: "It was the most heartbreaking, beautiful moment, and it filled my soul with love." [PROVEN - show-don't-tell]
- Cliche/idiom doing the work. BAD: "Watching her walk down the aisle tugged at my heartstrings." [PROVEN - Bookfox; cliche lists]
- Generic universal "we/you." BAD: "We never realize how much our parents sacrificed until we're parents ourselves." [PROVEN - copywriting specificity]
- Adjectives/adverbs doing the work ("quietly," "deeply," "truly"). BAD: "She quietly, lovingly placed the deeply worn photograph back in the drawer." [PROVEN - Carver "No tricks"; tropes.fyi]
- Tidy moral resolution / a bow. BAD: "I never got to say goodbye, but I know now that love never really ends." [PROVEN - flash-fiction resonance craft]
- Genre vocabulary as payload: soul, journey, embrace, cherish, warmth, bittersweet, forever. [PRINCIPLE; cliche-list craft]
- Hedging ("sometimes," "maybe," "in some ways"). BAD: "Maybe, in some small way, we never really stop missing the ones we loved." [PRINCIPLE]

### 3.3 True-voice techniques (with good rewrites)

- Telling detail / objective correlative: give the emotion an object. "I still miss my dad" -> "His reading glasses are still on the windowsill. Nobody will move them." [PROVEN - Eliot's objective correlative; Carver]
- Show, don't tell (Chekhov's glint of light on broken glass). "She was so nervous waiting" -> "She kept the phone face-up and turned the ringer up twice." [PROVEN - Chekhov 1886 letter]
- The iceberg / omission. The six-word model: "For sale: baby shoes, never worn." The loss is never stated; the reader supplies it. [PROVEN - Hemingway; six-word-story craft; SmokeLong]
- White space / the unsaid. "He finally forgave his father" -> "At the funeral he wore his father's watch. He kept checking the time he didn't need to know." [PROVEN - Kathy Fish on white space and resonance]
- The small thing carrying the big feeling. "Losing my mother left a hole nothing fills" -> "I still cook for two. I scrape the second plate into the bin and tell myself tomorrow I'll learn." [PROVEN - flash-fiction resonance]
- Specific over universal. "Grandparents leave us memories we treasure" -> "My grandmother licked her thumb to fix my hair. I still feel it some mornings." [PROVEN - copywriting specificity]
- Restraint / understatement. "My heart shattered the day you left" -> "You left a Tuesday. I noticed the milk would go off before anyone drank it." [PROVEN - Carver minimalism]
- The turn. "She saved every voicemail I left. I found out the day I went to delete hers." [PROVEN/PRINCIPLE - flash volta]
- Sensory anchor / fresh seeing. "Home smelled like love" -> "Home smelled like burnt toast and my father's aftershave. I'd know it in the dark." [PROVEN - Mary Oliver; Chekhov]
- Implication / subtext. "He was lonely after she passed" -> "He still says 'we' at the grocery store. The cashier has stopped correcting him." [PROVEN - Carver]

### 3.4 Lint rules - banned vs preferred (encodeable as copy tests)

BANNED PHRASINGS / CONSTRUCTIONS (auto-fail):
- "It's not [X], it's [Y]" and "not just X but Y" (explicit antithesis). [PROVEN - Gorrie; Slate]
- More than one tricolon, or any rule-of-three of abstractions, in a six-line post. [PROVEN - Gorrie]
- Em dash used more than once, or any em dash where a period works. (In this brand, the ASCII output never uses an em dash anyway.) [PROVEN - Slate; languagehat]
- Mirrored/symmetrical clauses back to back ("We did X. We did Y."). [PROVEN - Gorrie]
- Universal openers: "We all...", "There's something about...", "In a world where...", "Isn't it funny how...". [PRINCIPLE]
- Stated emotion words: heartbreaking, beautiful, precious, bittersweet, devastated, "filled with love/joy." [PROVEN - show-don't-tell]
- Cliche idioms: "tugs at the heartstrings," "hole in my heart," "love that knows no bounds," "a million pieces," "say goodbye," "no longer with us." [PROVEN - Bookfox]
- Genre vocabulary: soul, journey, embrace, cherish, warmth, blessed, treasure, forever. [PRINCIPLE]
- Intensifier adverbs: quietly, deeply, truly, incredibly, simply, "just" as a softener. [PROVEN - Carver; tropes.fyi]
- Hedges: maybe, sometimes, "in some ways," "a part of me," somehow. [PRINCIPLE]
- A closing moral/lesson ("and that's when I learned...", "love never dies"). [PROVEN - flash resonance]
- Naming the core emotion outright (sad, lonely, proud) instead of staging it. [PROVEN - show-don't-tell]

PREFERRED MOVES (require at least these):
- One concrete physical object or action carrying the feeling (objective correlative). [PROVEN - Eliot; Carver]
- One specific, particularized detail (a real day, place, mug, habit) instead of a category noun. [PROVEN - specificity]
- At least one sensory anchor (smell, sound, texture) seen freshly. [PROVEN - Oliver; Chekhov]
- The core emotion left unnamed, implied not stated (iceberg). [PROVEN - Hemingway; Carver]
- A last-line turn, or a gap the reader closes (white space). [PROVEN - Kathy Fish]
- Plain words; precise nouns and verbs; vary sentence length deliberately (break the balanced rhythm). [PROVEN - Carver; Gorrie]
- Commit; no hedging, no instruction on how to feel. [PRINCIPLE]

One-line test: Could a greeting card have printed this? If yes, it is slop. Does it name a feeling, or hand the reader an object and let them feel it? Only the second pulls the string.

---

## 4. PART III - THE ANTI-SLOP VISUAL AND MOTION SYSTEM

How to build cinematic, restrained, un-sloppy visuals and motion inside the vanilla ceiling. Sources strands A (technique), C (anti-slop), B (motion).

### 4.1 The core insight about slop

Slop is the absence of decisions: AI/template tools converge on the statistical average (the default unedited output where no one owns a decision at the system level). Restraint without specificity reads as default; restraint with a fingerprint reads as crafted. The anti-slop move is always the same shape: replace a default with a specific, deliberate, slightly-off-center parameter you can defend. Judge by emotional impact, not technical cleverness; a piece should cohere such that "the removal of any one component would be harmful." [PROVEN - Developers Digest; Tyler Hobbs on long-form generative art]

### 4.2 Palette discipline (mood system)

Each post uses ONE mood palette: a deep warm ground, a soft text tone, one muted accent. Reference mood Rust/Regret: bg #2d1c17, text #e7d5c4, accent #b75f3c. [PROVEN - HeartStrings mood spec]

Rules:
- One hue family. Up to ~3 ground/text values plus ONE muted accent. Pull saturation down. Build shades on a fixed scale, not on-the-fly lighten/darken; re-tune HSL saturation as lightness moves away from 50% to avoid muddy or washed colors. Greys carry the warm hue (e.g. hsl(20, 8%, L)), never pure #888. [PROVEN - Refactoring UI]
- WARNING: Rust sits one nudge from "AI orange." #b75f3c is adjacent to the AI orange/teal default bias. So keep the accent muted, never pair it with teal/cyan, let the accent occupy only ~10-20% of any field, and always dither the ground (4.4). [PROVEN - AI-image color-bias discourse]

### 4.3 Slop tells -> fixes (visual lint)

- "AI purple/indigo-to-blue gradient" hero, or any generic gradient: BANNED. Use the one warm palette as flat or near-flat fields; if any tonal shift, lock hue and keep lightness travel under ~12%, never cross warm-to-cool, and always dither. [PROVEN - prg.sh purple-gradient; Developers Digest]
- shadcn "three rounded cards + lucide icons" layout, centered everything: HeartStrings is a single 9:16 post; avoid card grids. Intentional asymmetry: place the mark and text off optical center (anchor near ~38% from a margin), balance by visual weight, one dominant whitespace. Keep a stable grid with one asymmetric accent. [PROVEN - prg.sh; WebFX/LogRocket on asymmetry]
- Colored left-border accent stripe on cards: "almost as reliable a tell as em-dashes for text." Do not use; if a divider is needed, a 1px hairline in a tinted neutral (e.g. #3a261f), not pure black. [PROVEN - Developers Digest; impeccable.style/slop]
- Over-even spacing / mechanical rhythm: use a non-linear spacing scale (e.g. 8/12/20/32/56px), vary gaps to group meaning, give the composition one dominant breathing space. [PROVEN - Tyler Hobbs uniform-vs-structured; PRINCIPLE]
- Banding on flat color / gradients and sterile flat fills: overlay fine grain via SVG feTurbulence (4.4). [PROVEN - CSS-Tricks Grainy Gradients; PiWebPress]
- Drop-shadow overuse / one big black blur: prefer 2-3 stacked, hue-tinted shadows on a single light source (shadow color pulled toward #2d1c17, never rgba(0,0,0,x)), or no shadow at all; commit to EITHER a hairline edge OR soft elevation, not both. [PROVEN - Josh Comeau, Designing Beautiful Shadows]
- Glassmorphism / frosted panels: BANNED. Depth comes from grain plus one tinted shadow, never translucency/blur. [PROVEN - NN/g; Creative Boom 2026]
- Default fonts at default metrics (Inter/Geist/Space Grotesk untouched): choose a face with character, or take control of metrics - display letter-spacing about -0.01em to -0.02em (optically, never destructively), line-height ~1.3-1.45 for the quiet line, a defined scale. [PROVEN - impeccable.style/slop; Figr typography]
- Oversaturated / multi-accent palettes: one mood palette only; one or two core colors plus tinted neutrals (4.2). [PROVEN - Refactoring UI]
- AI-image tells (waxy smoothing, flat even glow erasing form, too-perfect symmetry): prefer drawn vector (the fine-lined strung-heart) over generated raster; if any imagery, use a single directional light with real asymmetric shadow plus visible grain. [PROVEN - AI-image-tells consensus]
- Corporate Memphis / Alegria flat vector (bendy figures, unDraw/Humaaans): no stock illustration; the mark is a single crafted line heart, "made by humans." [PROVEN - Eye on Design; Creative Bloq; Wikipedia]
- Cliche/cartoon hearts, greeting-card, inspirational-quote framing: BANNED by brand. Quiet over declaration; nothing shouts. [PRINCIPLE]

Crafted vs default, at the parameter level: the SAME element is slop or craft depending on parameters. Color: default linear-gradient(135deg,#6366f1,#3b82f6) vs a single #2d1c17 field with feTurbulence grain at opacity ~0.08 and the accent used once. Greys: #888 vs a warm-tinted neutral. Shadow: 0 4px 12px rgba(0,0,0,.25) vs 0 1px 2px rgba(45,28,23,.2), 0 4px 8px rgba(45,28,23,.16). Type: Inter at normal metrics vs a deliberate face at -0.015em / line-height 1.4. Layout: centered/equal-padding vs off-center on a stable grid. [PROVEN - sources above]

### 4.4 The cinematic vanilla toolkit (with parameters)

All achievable in Canvas2D/SVG/CSS at 60fps on mid mobile. [PROVEN - strand A sources]

- fBm noise (vanilla, no lib): sum octaves of value/simplex noise. Industry-standard "1/f" numbers are gain (persistence) 0.5 and lacunarity 2.0, octaves 4-6. Sample the base octave at a long wavelength (e.g. x*0.002 on a 1080px canvas) so shapes are big and calm. Animate by scrolling a third noise coordinate slowly (z += ~0.002), never by re-seeding (re-seeding pops = slop). A full vanilla simplex+fBm fits in ~550 bytes. [PROVEN - Book of Shaders ch.13; Inigo Quilez fBM; attilabuti/SimplexNoise]
- Flow field + particle advection (the structural backbone, the Fidenza engine): a grid of angles (about 100 cells across, built a few cells past the edges) fed by noise; particles read the nearest cell angle and step. Forward Euler with a small step (1-3px) is visually identical to RK4 here and 4x cheaper - the lever is step size, not method. Hundreds of steps per curve. Run FEWER, longer, thinner strokes in one palette and leave the dark ground mostly empty (restraint is a parameter). [PROVEN - Tyler Hobbs Flow Fields; VisCircuit Euler-vs-RK4]
- Curl noise (optional, for fluid-true motion): take the curl of a noise potential so the field is divergence-free (no pile-up). 2D form: curl(x,y) = (dN/dy, -dN/dx) via finite differences. Use slow and sparse. [PROVEN - Bridson SIGGRAPH 2007]
- Color ramp mapped to the field (the biggest anti-slop lever): use Inigo Quilez cosine palette color(t)=a+b*cos(2*pi*(c*t+d)) with c < 1 so it never completes a rainbow; or an explicit 3-stop ramp from the mood palette (ground -> accent -> light). Stay within one hue family, ease non-linearly, clamp saturation. Generic-gradient slop = full-hue mapping, high c, and rgb-space lerps that mud through grey. [PROVEN - Inigo Quilez Palettes]
- Additive glow (Canvas2D): ctx.globalCompositeOperation='lighter' adds overlapping color so density blooms to light; draw glow sprites at low alpha (0.02-0.15) tinted toward the accent (not white). 'screen' self-limits at 1.0 if 'lighter' blows out. Draw the dark ground first; always reset to 'source-over'. [PROVEN - MDN globalCompositeOperation]
- Persistent trails (alpha-fade): instead of clearRect, paint the GROUND color at low alpha each frame: ctx.fillStyle='rgba(45,28,23,0.05)'; ctx.fillRect(...). Range 0.02 (long, dreamy) to 0.20 (snappy); ~0.05 is the cinematic default. Use the actual ground color, not black. The fade must run under 'source-over', so keep feedback and additive layers on separate stacked canvases. [PROVEN - Growing with the Web; Kirupa]
- Bloom/blur without WebGL: prefer downsample -> blur -> upsample - draw the bright layer to a quarter-res offscreen canvas, blur there (cheap), composite back with 'lighter'. Avoid per-frame full-screen ctx.filter='blur()' (slow; ~19x worse on Firefox than Chrome). Cheapest full-screen soft glow: put the glow content in its own canvas and blur it via CSS filter (GPU compositor, near-zero rAF cost). Keep bloom localized to genuinely bright nodes; uniform full-screen bloom reads as a cheap glow filter. [PROVEN - LearnOpenGL bloom; MDN; Mozilla bug #1498291]
- Layering / depth / vignette: stack absolutely-positioned canvases (static ground+vignette drawn once and never repainted; slow far layer; sharp near layer; glow; grain on top). Parallax = far layers move ~0.3x the near layer and are dimmer/blurrier. Vignette = one radial gradient to the ground color at the edges, drawn once (a darkening vignette is not the banned "gradient slop"). [PROVEN - MDN Optimizing canvas; PRINCIPLE]
- Grain / dither to kill banding (the single biggest "premium" detail on a dark ground): add low-amplitude noise; ~3% is a good balance, max ~5% spatial noise (about +/- 1-3 levels out of 255). Triangular-distributed (TPDF) or ordered (Bayer) dither is cleaner than uniform noise. Pre-render a tiled grain texture once and overlay at low opacity (CSS background or a static canvas), rather than recomputing per pixel; keep it static or barely animated (flickering full-strength noise = codec garbage, and heavy grain hurts H.264 export). SVG route: feTurbulence type='fractalNoise' baseFrequency 0.65-0.9 numOctaves 3-4, rendered at opacity ~0.05-0.15 with mix-blend-mode overlay/soft-light. [PROVEN - frost.kiwi; anisopteragames; SVGator; CSS-Tricks; MDN feTurbulence]

### 4.5 The motion system (with values)

Premium vs cheap motion is almost never the effect; it is easing, duration, stagger, and whether anything settles. The throughline for HeartStrings: deep ease-out, longer-than-you-think durations, generous stagger and dwell, sub-pixel organic idle, a single soft settle, and silence at the end. Never bounce, never snap, never everything-at-once. [PROVEN - Josh Comeau; Val Head; Material Design]

- Easing: replace every default with an explicit ease-out curve. linear and the browser default ease read as mechanical/draft-quality; use linear only for continuous loops. Premium = steep early slope, long flat tail (the second control point pinned near y=1). Tokens:
```css
:root{
  --e-out-cubic: cubic-bezier(0.215,0.61,0.355,1);  /* calm, best fit for HeartStrings */
  --e-out-quart: cubic-bezier(0.165,0.84,0.44,1);   /* stronger decel, still elegant */
  --e-out-expo:  cubic-bezier(0.19,1,0.22,1);        /* dramatic settle, hero only */
  --e-emph-dec:  cubic-bezier(0.05,0.7,0.1,1);       /* Material 3 emphasized decelerate */
  --e-std:       cubic-bezier(0.4,0,0.2,1);          /* Material standard, safe default */
  --e-in-accel:  cubic-bezier(0.4,0,1,1);            /* EXITS offscreen only */
}
```
ease-out for entrances/arrivals (default), ease-in only for exits offscreen, ease-in-out only for moves between two on-screen positions. Use asymmetric in/out (snap in, relax out). [PROVEN - Material Design; easings.net; Josh Comeau]
- Duration anchors: ~100ms = "instant" (micro-feedback target); ~400ms (Doherty Threshold) = stay under it for interactive feedback or flow breaks; ~1s+ needs deliberate cinematic intent. Buckets: micro 100-150ms; small 150-200ms; medium entrance 200-300ms; large/full-screen 300-400ms (~375ms); cinematic hero 600-1000ms+ (one per post). Scale duration with distance/area so felt speed stays constant; exits shorter than entrances. [PROVEN - Doherty and Thadani 1982; Material Design]
- The core interaction - six lines revealed one at a time, then held in silence:
  - Per line: opacity 0 -> 1 with translateY(8-16px) -> 0 (small distance = restraint; >20-24px reads as a slide/banner); duration 600-900ms; ease-out (use --e-out-cubic or --e-emph-dec). Optional filter blur(6px) -> 0 (paint-heavy; short text only).
  - Stagger between line starts (the reading rhythm): 80-150ms reads as connected-but-sequential for lines (character-level work uses 14-50ms; lines want more room). For a contemplative post, dwell longer so each line is readable before the next arrives.
  - Ending held in silence: after the last line lands, hold 1.5-3s of stillness before any loop/exit. The absence of motion after motion is what makes it land; looping or fading immediately kills the moment. Keep any motion under ~5s to avoid discomfort. [PROVEN - Codrops/Motion stagger; web.dev/W3C reduced-motion upper bound; PRINCIPLE - Disney staging/timing + brand]
```js
const lines = document.querySelectorAll('.line');
const EASE = 'cubic-bezier(0.215,0.61,0.355,1)'; // easeOutCubic
const DWELL = 1200; // ms between line starts; raise for a slower, quieter post
lines.forEach((el, i) => el.animate(
  [{ opacity:0, transform:'translateY(12px)' },
   { opacity:1, transform:'translateY(0)'   }],
  { duration: 800, delay: i*DWELL, easing: EASE, fill: 'both' }));
// after the last line lands, HOLD in silence before any loop.
```
WAAPI gives fill:'both', per-keyframe easing, and .finished chaining, with no library. [PROVEN - MDN WAAPI]
- Layered parallax: map layer offset to a depth factor (background ~4px, mid ~10px, foreground ~20px of travel). Drive from a single rAF that writes only transform; never read layout (getBoundingClientRect/offsetTop) in the write phase (avoids forced synchronous reflow). [PROVEN - web.dev animations guide]
- Organic / "alive" idle (the strung-heart's life): keep amplitude tiny and frequency slow - sub-pixel is what separates "alive" from "vibrating." Sine idle y(t)=A*sin(2*pi*f*t+phase) with A ~2-6px and f ~0.2-0.4 Hz; give each element a different phase and slightly different period so they breathe out of sync (lockstep = mechanical). Follow-through: a dependent element (shadow, thread tail) lags 40-120ms behind the primary settle - the single most "professional" organic touch. Overshoot, if any, tiny (e.g. cubic-bezier(0.2,1.2,0.4,1)), never a bounce. [PROVEN - Disney 12 principles via IxDF/Val Head; PRINCIPLE for values]
```js
function idle(el, amp, freqHz, phase){
  const start = performance.now();
  (function frame(now){
    const t = (now - start)/1000;
    el.style.transform = `translate3d(0, ${(amp*Math.sin(2*Math.PI*freqHz*t + phase)).toFixed(2)}px, 0)`;
    requestAnimationFrame(frame);
  })(start);
}
idle(heart, 4, 0.3, 0); idle(thread, 3, 0.3, 0.4); // trail: smaller amp + phase offset
```
- Spring vs tween: use cubic-bezier/WAAPI for time-bound, non-interruptible reveals (cheaper, compositor-friendly). Use a JS spring only for interrupted/redirected motion (drag-release, value chasing). Spring params: stiffness ~100-170, damping ~10-26, mass 1; for this brand prefer near-critical (one whisper of overshoot, e.g. stiffness 170 / damping 26 / mass 1), or the two-parameter model duration+bounce with bounce 0.05-0.15. Integrate with semi-implicit Euler and a clamped dt. [PROVEN - Josh Comeau; Motion/Popmotion defaults; Maxime Heckel]

### 4.6 Performance and accessibility budget

- Animate only transform and opacity (compositor thread, skips layout and paint). Never animate width/top/margin/box-shadow/filter per frame. Frame budget ~16.7ms. Batch DOM reads then writes (no read/write interleaving). [PROVEN - web.dev animations guide; Motion performance tier list]
- will-change: transform only just before animating; remove after (global use blows the GPU layer budget and causes jank). [PROVEN - web.dev]
- requestAnimationFrame always (syncs to refresh, throttles in background tabs); never setInterval. Create the canvas context with { alpha:false } when the ground is opaque; Math.floor() drawImage coordinates (sub-pixel coords force AA resampling); batch draws by fillStyle; avoid shadowBlur; pre-render static content offscreen. [PROVEN - MDN Optimizing canvas]
- devicePixelRatio is the biggest fillrate lever: phones report DPR 2-4 and cost scales with DPR^2. Cap DPR at 2 for animated/blurred layers (Math.min(devicePixelRatio,2)); give the sharp strung-heart/text layer full DPR, give glow/grain layers DPR 1. [PROVEN - web.dev High-DPI Canvas; flot FPS measurements]
- Element ceilings (~1080x1920, mid phone): Canvas2D is the right tool around 3,000-5,000 dynamic elements; for additive trailed particles keep it in the low thousands; density should come from long trails + additive overlap of FEW particles, not tens of thousands of dots. Crossover to needing WebGL ~3,000-5,000 dynamic elements or any full-frame per-pixel effect. [PROVEN - svggenie]
- prefers-reduced-motion: reduce is required. Do not nuke everything; reduce - kill parallax/large slides/idle float, keep gentle opacity fades so the line-reveal sequence still reads, shorten durations (use 0.01ms rather than 0 so JS animationend/transitionend events still fire). Gate JS idle/parallax loops behind the media query. [PROVEN - MDN; web.dev; W3C WCAG C39]
```css
@media (prefers-reduced-motion: reduce){
  *,*::before,*::after{
    animation-duration:0.01ms !important; transition-duration:0.01ms !important;
    animation-iteration-count:1 !important;
  }
}
```

---

## 5. PART IV - DEFINITION OF DONE (build-from checklist)

A post is done when ALL of the following hold:

Concept and voice
- [ ] Emotion is quiet-but-activating (awe / tenderness / nostalgia / gratitude / bittersweet recognition); passes the jolt test, not a sigh. [PROVEN basis]
- [ ] Up to 6 lines, 3-7 words/line; hook in line 1; a turn/payoff at the end. [PROVEN]
- [ ] One concrete, specific anchor a viewer can map to one real person; the core emotion is staged, not named; no moral/bow. [PROVEN/PRINCIPLE]
- [ ] Passes the voice lint (3.4): zero banned phrasings/constructions; no "it's not X it's Y"; at most one tricolon; no em-dash cadence; no hedges; varied sentence length.

Visual
- [ ] 9:16. One muted mood palette (one hue family, up to ~3 values + 1 accent); accent occupies <= ~20% of any field; never paired with teal/cyan. [PROVEN]
- [ ] Ground is dithered/grained (no banding, not sterile). Off-center composition (not centered-hero, no card grid, no accent left-border). One shadow max (tinted, single light source) or none. Opinionated, optically-tracked type. No glass, no emoji-as-icon, no generic gradient, no stock illustration. [PROVEN]
- [ ] Strung-heart mark present, hand-tuned line, secondary to the post. [PRINCIPLE]

Motion
- [ ] Lines reveal one at a time, ease-out, 600-900ms, rise 8-16px, stagger/dwell tuned for reading; ends held in silence 1.5-3s. [PROVEN/PRINCIPLE]
- [ ] Sub-pixel organic idle with phase offsets; no bounce/snap/everything-at-once. [PRINCIPLE]
- [ ] transform/opacity only; 60fps on mid mobile; DPR capped on heavy layers; prefers-reduced-motion handled. [PROVEN]

Technical (Prime Directive)
- [ ] Single self-contained index.html; vanilla only; no libs / no network / no build / no storage; fonts and art inline. [PRIME DIRECTIVE]

Distribution
- [ ] Engineered to be privately sent to one person (the send, not the like); optional genuine soft closer; caption hook within ~125 chars; 3-5 classification hashtags. [PROVEN]

---

## 6. SOURCES (grouped by strand)

### Strand A - Cinematic vanilla technique
- Tyler Hobbs - Flow Fields: https://www.tylerxhobbs.com/words/flow-fields
- Keith Peters (bit101) - Flow Fields Part II: https://medium.com/@bit101/flow-fields-part-ii-f3c24c1b777d
- gorillasun - Perlin Noise Flow Fields: https://www.gorillasun.de/blog/perlin-noise-flow-fields-in-processing-part-i/
- sighack - Perlin Noise Fields: https://sighack.com/post/getting-creative-with-perlin-noise-fields
- The Book of Shaders ch.13 (fBm): https://thebookofshaders.com/13/
- Inigo Quilez - fBM: https://iquilezles.org/articles/fbm/  |  Palettes: https://iquilezles.org/articles/palettes/
- attilabuti/SimplexNoise (vanilla, ~550 bytes): https://github.com/attilabuti/SimplexNoise
- Bridson - Curl-Noise for Procedural Fluid Flow (SIGGRAPH 2007): https://www.cs.ubc.ca/~rbridson/docs/bridson-siggraph2007-curlnoise.pdf
- VisCircuit - Euler vs Runge-Kutta: https://medium.com/@viscircuit/euler-vs-runge-kutta-methods-de34565bf0cf
- MDN - globalCompositeOperation: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
- MDN - canvas filter: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter
- MDN - Optimizing canvas: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas
- MDN - devicePixelRatio: https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio
- Growing with the Web - trail effect: https://www.growingwiththeweb.com/2012/10/creating-trail-effect-with-canvas.html
- Kirupa - Motion Trails: https://www.kirupa.com/canvas/creating_motion_trails.htm
- LearnOpenGL - Physically Based Bloom: https://learnopengl.com/Guest-Articles/2022/Phys.-Based-Bloom
- Mozilla bug #1498291 (canvas blur slow): https://bugzilla.mozilla.org/show_bug.cgi?id=1498291  |  #925025: https://bugzilla.mozilla.org/show_bug.cgi?id=925025
- frost.kiwi - fixing color banding: https://blog.frost.kiwi/GLSL-noise-and-radial-gradient/
- Anisoptera Games - dithering: https://www.anisopteragames.com/how-to-fix-color-banding-with-dithering/
- SVGator - color banding fixes: https://www.svgator.com/blog/color-banding-gradient-animation/
- SVG Genie - SVG vs Canvas vs WebGL: https://www.svggenie.com/blog/svg-vs-canvas-vs-webgl-performance-2025
- flot PR #943 - DPR FPS measurements: https://github.com/flot/flot/pull/943/files

### Strand B - Premium motion
- Material Design 3 - Easing and duration: https://m3.material.io/styles/motion/easing-and-duration/tokens-specs
- Material Design 1 - Duration and easing: https://m1.material.io/motion/duration-easing.html  |  M2 Speed: https://m2.material.io/design/motion/speed.html
- easings.net: https://easings.net/
- MDN - easing-function: https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function
- MDN - Using the Web Animations API: https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API
- Slider Revolution - Ease-In vs Ease-Out: https://www.sliderrevolution.com/design/ease-in-vs-ease-out/
- Laws of UX - Doherty Threshold: https://lawsofux.com/doherty-threshold/  |  UX-UI Principles: https://uxuiprinciples.com/en/principles/doherty-threshold
- Codrops - Stagger Reveal Animations for Text: https://tympanus.net/codrops/2020/06/17/making-stagger-reveal-animations-for-text/
- Motion - splitText: https://motion.dev/docs/split-text  |  spring: https://motion.dev/docs/spring
- web.dev - High-performance CSS animations: https://web.dev/articles/animations-guide
- Motion - Web Animation Performance Tier List: https://motion.dev/magazine/web-animation-performance-tier-list
- Josh Comeau - Spring physics: https://www.joshwcomeau.com/animation/a-friendly-introduction-to-spring-physics/  |  Springs/bounces in native CSS: https://www.joshwcomeau.com/animation/linear-timing-function/
- Maxime Heckel - physics behind spring animations: https://blog.maximeheckel.com/posts/the-physics-behind-spring-animations/
- kvin.me - two-parameter spring: https://www.kvin.me/posts/effortless-ui-spring-animations
- IxDF - Disney's 12 principles for UI: https://www.interaction-design.org/literature/article/ui-animation-how-to-apply-disney-s-12-principles-of-animation-to-ui-design
- Val Head - What Does Disney Know About Interface Animation: https://valhead.com/2016/01/18/what-does-disney-know-about-interface-animation-anyway/
- VDODNA - Overshoot: https://www.vdodna.com/blog/overshoot-the-missing-animation-principle/  |  Mt. Mograph - Bounce and Overshoot: https://mtmograph.com/blogs/tools/the-bounce-and-overshoot-animation-trick-every-motion-designer-should-know
- MDN - prefers-reduced-motion: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion  |  web.dev: https://web.dev/articles/prefers-reduced-motion  |  W3C WCAG C39: https://www.w3.org/WAI/WCAG22/Techniques/css/C39

### Strand C - Anti-slop visuals
- prg.sh - Why Your AI Keeps Building the Same Purple Gradient Website: https://prg.sh/ramblings/Why-Your-AI-Keeps-Building-the-Same-Purple-Gradient-Website
- Developers Digest - AI Design Slop: 16 Patterns: https://www.developersdigest.tech/blog/ai-design-slop-and-how-to-spot-it
- Impeccable - Slop: https://impeccable.style/slop/  |  Designing: https://impeccable.style/designing/
- Tyler Hobbs - Rise of Long-Form Generative Art: https://www.tylerxhobbs.com/words/the-rise-of-long-form-generative-art  |  QQL design philosophy: https://www.tylerxhobbs.com/words/the-design-philosophy-of-the-qql-algorithm  |  Fidenza: https://www.tylerxhobbs.com/words/fidenza
- AIGA Eye on Design - Corporate Memphis: https://eyeondesign.aiga.org/what-the-think-pieces-about-corporate-memphis-tell-us-about-the-state-of-illustration/
- Creative Bloq - Corporate Memphis is dead: https://www.creativebloq.com/news/corporate-memphis-style-is-dead  |  2026 illustration trends: https://www.creativebloq.com/art/illustration/messy-meaningful-and-made-by-humans-the-biggest-illustration-trends-for-2026
- Wikipedia - Corporate Memphis: https://en.wikipedia.org/wiki/Corporate_Memphis
- NN/g - Glassmorphism: https://www.nngroup.com/articles/glassmorphism/
- Creative Boom - 10 trends creatives are over in 2026: https://www.creativeboom.com/insight/10-trends-creatives-are-so-over-in-2026/
- Josh Comeau - Designing Beautiful Shadows in CSS: https://www.joshwcomeau.com/css/designing-shadows/
- Refactoring UI - Building Your Color Palette: https://refactoringui.com/previews/building-your-color-palette/
- CSS-Tricks - Grainy Gradients: https://css-tricks.com/grainy-gradients/  |  Codrops feTurbulence: https://tympanus.net/codrops/2019/02/19/svg-filter-effects-creating-texture-with-feturbulence/  |  MDN feTurbulence: https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/feTurbulence
- PiWebPress - CSS Banding: https://piwebpress.com/css-banding/
- WebFX - Symmetry in Design: https://www.webfx.com/blog/web-design/symmetry-design/  |  LogRocket - balance: https://blog.logrocket.com/ux-design/symmetrical-asymmetrical-balance-web-design/
- Figr - Tracking/Typography: https://figr.design/blog/tracking-design-typography-differences

### Strand D - Anti-slop voice
- Colin Gorrie - Why ChatGPT writes like that: https://www.deadlanguagesociety.com/p/rhetorical-analysis-ai
- Slate - A.I. is making your writing worse: https://slate.com/technology/2025/08/chatgpt-artificial-intelligence-shaming-paranoia-writing.html
- languagehat - ChatGPT and the Em Dash: https://languagehat.com/chatgpt-and-the-em-dash/
- JD Meier - synthetic profundity: https://jdmeier.com/synthetic-profundity/
- AI writing tropes (tropes.fyi gist): https://gist.github.com/ossa-ma/f3baa9d25154c33095e22272c631f5a1
- Iceberg theory (Wikipedia): https://en.wikipedia.org/wiki/Iceberg_theory
- Raymond Carver, On Writing (Wikiquote): https://en.wikiquote.org/wiki/Raymond_Carver  |  minimalism (Manik Bal): https://manikbal.com/the-art-of-minimalism-a-deep-dive-into-raymond-carvers-writing-style/
- For sale: baby shoes (Wikipedia): https://en.wikipedia.org/wiki/For_sale:_baby_shoes,_never_worn  |  SmokeLong - Anatomy of a Six-Word Story: https://www.smokelong.com/baby-shoes-anatomy-of-a-six-word-story/
- Kathy Fish - On Resonance: https://artofflashfiction.substack.com/p/on-resonance  |  Absence, Negation, White Space: https://artofflashfiction.substack.com/p/absence-negation-and-white-space
- Quote Investigator - Chekhov's glint of light: https://quoteinvestigator.com/2013/07/30/moon-glint/
- Objective correlative (Thinking Through Our Fingers): https://thinkingthroughourfingers.com/2015/06/05/writing-with-emotion-the-objective-correlative/  |  Show Don't Tell (Blurbbio): https://app.blurbbio.com/blog/show-dont-tell-writing-guide
- Mary Oliver, A Poetry Handbook (Bookey summary): https://www.bookey.app/book/a-poetry-handbook
- Bookfox - avoid cliches: https://thejohnfox.com/2016/06/avoid-cliches-in-writing/
- Ogilvy copywriting lessons (Reads to Leads): https://www.readstoleads.com/blog-article/what-copywriters-can-learn-from-david-ogilvy

### Strand E - What wins (engagement data)
- Berger and Milkman, What Makes Online Content Viral? (JMR 2012, SAGE): https://journals.sagepub.com/doi/10.1509/jmr.10.0353  |  working paper PDF (MSI 10-114): https://thearf-org-unified-admin.s3.amazonaws.com/MSI/2020/06/MSI_Report_10-114.pdf
- Social Science Space - retrospective: https://www.socialsciencespace.com/2023/05/a-viral-paper-on-determining-what-makes-online-content-viral/
- Knowledge at Wharton - Contagious / STEPPS: https://knowledge.wharton.upenn.edu/article/contagious-jonah-berger-on-why-things-catch-on/  |  Unruly STEPPS: https://unruly.co/blog/article/2015/10/26/jonah-berger-6-key-stepps-to-creating-contagious-content/
- NYT Psychology of Sharing (Business Wire 2011): https://www.businesswire.com/news/home/20110713005971/en/  |  six personas (Gigaom): https://gigaom.com/2011/07/13/419-nyt-on-the-psychology-of-sharing-e-mail-still-rules/
- BuzzSumo/OkDork - 100M articles (HuffPost): https://www.huffpost.com/entry/why-content-goes-viral-wh_b_5492767  |  Smart Insights emotion breakdown: https://www.smartinsights.com/content-management/content-marketing-creative-and-formats/social-media-emotions/
- Piff, Dietze, Feinberg, Stancato, Keltner - Awe, the Small Self, and Prosocial Behavior (JPSP 2015, APA PDF): https://www.apa.org/pubs/journals/releases/psp-pspi0000018.pdf  |  PubMed: https://pubmed.ncbi.nlm.nih.gov/25984788/
- van Tilburg, Sedikides, Wildschut - nostalgia and social connectedness (EJSP 2019, PDF): https://www.southampton.ac.uk/~crsi/Van%20Tilburg,%20Sedikides,%20Wildschut,%20&%20Vingerhoets,%202019,%20EJSP.pdf
- Buffer - Instagram algorithm: https://buffer.com/resources/instagram-algorithms/  |  Hootsuite: https://blog.hootsuite.com/instagram-algorithm/  |  Influencer Marketing Hub - Sends per Reach: https://influencermarketinghub.com/instagram-sends-per-reach-playbook/
- Later - caption/hashtag guidance: https://later.com/blog/how-instagram-algorithm-works/  |  Glow Social - caption length 2026: https://glowsocial.com/blog/social-media-caption-length
- OpusClip - TikTok length/retention: https://www.opus.pro/blog/tiktok-length-format-retention-data  |  TTS Vibes - first 3 seconds: https://insights.ttsvibes.com/tiktok-first-3-seconds-hook-retention-rate/
- Giraffe Social - inspirational quotes underperform: https://www.giraffesocialmedia.co.uk/instagram-inspirational-quotes-engagement/

---

End of master. This file governs every HeartStrings post. When a post and this file disagree, this file wins, or this file is wrong and should be revised deliberately, not bypassed.
