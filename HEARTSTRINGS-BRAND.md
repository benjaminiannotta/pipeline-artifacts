# DESIGN.md — Pipeline House Style

Purpose: this file seeds Claude Design (and Claude Code) on every run so output does not default to the training-data average. Without a design system, Design guesses, and the guess is slop. This is the guard.

The core rule is not a fixed palette. It is a method: derive the look from the specific post's subject, ban the known defaults, and spend boldness in exactly one place.

---

## The one rule that prevents slop

Every artifact has a SIGNATURE: one memorable element, derived from that specific post's subject, that the piece is remembered by. Everything else stays quiet and disciplined around it.

Slop is what happens when there is no signature and the look is a template applied regardless of subject. The fix is not "more polish." It is "one real choice made for this brief, derived from this content."

Before building anything, name the signature for this specific post. If the signature would be the same for any other post, it is not a signature, it is a default. Revise it.

---

## Banned looks (the slop list)

Do not produce any of these. They are defaults, not choices, and they appear regardless of subject.

1. Generic gradient + glassy / frosted SaaS look. No purple-to-blue gradients, no glassmorphism, no floating frosted cards. (Hard ban.)
2. Sad white text fading on pure black. The brief-04 failure. (Hard ban for emotional posts specifically.)
3. The three AI-default clusters:
   - Warm cream background (~#F4F1EA) + high-contrast serif display + terracotta accent.
   - Near-black background + a single bright acid-green or vermilion accent.
   - Broadsheet layout: hairline rules, zero border-radius, dense newspaper columns.
4. Stocky inspirational-quote-over-photo.

These are banned only when they would be a DEFAULT. If a specific post's subject genuinely calls for one of them as a deliberate, justified choice, that is allowed, but the justification has to be about THIS post's content, not "it looks nice."

---

## How to derive the look (the method, not a fixed style)

The look comes from the post's own world: its materials, its vernacular, the concrete thing it is about. Work through four tokens before building:

1. Color: 4 to 6 named hex values, chosen for THIS post's subject, not a house palette. Describe why each belongs to this content.
2. Type: at least two roles. A characterful display face used with restraint, plus a complementary body face (and a utility face for captions/data only if needed). Not the families you would reach for on any post. The type treatment is part of the design, not a neutral delivery vehicle.
3. Layout: a one-sentence layout concept plus a rough wireframe. Structure should encode something true about the content (numbering only if the content really is a sequence; dividers/labels only if they mean something).
4. Signature: the single memorable element (see the rule above).

Then check the four tokens against the brief: if any part reads like the generic default you would produce for any similar post, revise it and say what changed and why.

---

## Restraint (so the signature lands)

- Spend boldness in ONE place: the signature. Keep everything else quiet.
- Match complexity to the vision: minimal directions need precision in spacing and type; maximal directions need elaborate execution. Either is fine; half-committed is not.
- Cut one thing before shipping. If a piece has a decoration that does not serve the post, remove it.
- Motion is deliberate, not scattered. One orchestrated moment beats many small effects. Extra animation is a top signal of AI-generated feel; when in doubt, less.

---

## Quality floor (always, never announced)

- Responsive down to mobile.
- Visible keyboard focus.
- Reduced-motion respected (prefers-reduced-motion).
- Readable contrast.

---

## Copy rules (words are design material)

- Words exist to make the piece easier to understand, not to decorate.
- Plain verbs, sentence case, no filler. Specific beats clever.
- For emotional posts: no invented statistics, no fabricated percentages, no guilt-tripping. The piece is permission, not accusation. (Carried from brief-04's integrity constraints.)
- Active voice. An element does exactly one job.

---

## How this file is used in the pipeline

1. This DESIGN.md is the design-system seed. It is handed to Claude Design at the start of a run (or committed to the repo so Code's handoff inherits it).
2. The per-post BRIEF carries the CONTENT and INTENT (what the post is about, who it is for, the feeling, the structure). It does NOT pre-write the final look.
3. Design generates against (this house style) + (the brief), so it has a real system to work from instead of guessing.
4. Ben refines at the canvas with sliders and inline comments (taste pass).
5. Handoff bundle to Code, which builds faithfully because the look is already decided.

The division: DESIGN.md owns the METHOD and the bans. The brief owns the CONTENT. Ben owns the TASTE pass. Code owns faithful execution. None of these is "Claude freestyles the look," which is what produced slop.

---

## The HeartStrings signature (LOCKED, the one fixed thing on every post)

The brand is HeartStrings. Every post carries this signature. It is the fixed mark; everything else about a post (colour, motion, layout, content) is derived fresh per-post.

The mark: a heart strung like an instrument, set into the word "HeartStrings" at the junction between the two words. The strings that draw the heart sit between "Heart" and "Strings" so the word and the mark are one object. Wordmark type is Newsreader serif (400/500 weight). Monochrome, works on light or dark.

The canonical heart SVG (96x96 viewBox, recolour the stroke to suit the post):

```
<svg viewBox="0 0 96 96"><g fill="none" stroke="CURRENTCOLOR" stroke-linecap="round" stroke-linejoin="round">
<polyline points="48,90 22,53 8,33 10,19 20,9 32,10 43,19 48,27 53,19 64,10 76,9 86,19 88,33 74,53 48,90" stroke-width="1.4"/>
<line x1="29" y1="26" x2="29" y2="50" stroke-width="0.9"/>
<line x1="36" y1="20" x2="36" y2="64" stroke-width="0.9"/>
<line x1="43" y1="17" x2="43" y2="76" stroke-width="0.9"/>
<line x1="48" y1="25" x2="48" y2="84" stroke-width="0.9"/>
<line x1="53" y1="17" x2="53" y2="76" stroke-width="0.9"/>
<line x1="60" y1="20" x2="60" y2="64" stroke-width="0.9"/>
<line x1="67" y1="26" x2="67" y2="50" stroke-width="0.9"/>
</g></svg>
```

Three uses of the signature:
- Full lockup: "Heart [strung heart] Strings" at large size. For brand moments and final frames.
- Corner signoff: the same lockup small, in a corner of a post (light-bg and dark-bg versions). The fixed thing on every post.
- Standalone mark / app icon: the strung heart alone, no words. For avatars.

## The variable thread (the per-emotion rule)

The strung heart stays recognisably the same mark, but the tension of its strings shifts with the emotion of the post. Same heart shape, different string state:
- Tension: strings pulled taut, hard bend under load.
- Loss: strings frayed or broken at one end.
- Relief: strings slack, the tension released.
- Warmth: a gentle resonant wave.
- Longing: strings stretched thin, reaching.

The reader never decodes this; they feel that a post about loss sits differently from one about relief.

## The colour systems (twelve moods, LOCKED)

Colour is NOT fixed house-wide. Each post gets a palette tuned to its emotion. Twelve established mood systems, deep and warm, never loud. Each is background / text / thread-accent, plus the string-state the thread carries. Recolour the canonical heart SVG stroke to the thread accent.

| Mood | Emotion | Background | Text | Thread accent | String state |
|---|---|---|---|---|---|
| Storm | Tension | #1b2436 | #ece3d3 | #e3a23a | taut |
| Ash | Loss | #2c302e | #d9d3c5 | #a9b0a2 | frayed |
| Sage | Relief | #e6e1d2 | #28352b | #4f8451 | slack |
| Hearth | Warmth | #2a1b14 | #f1e1cd | #e2894a | resonant wave |
| Dusk | Longing | #2a2237 | #ddd0dd | #bd6e9c | stretched thin |
| Ember | Pride | #3a1417 | #f3ddc8 | #dd633d | taut |
| Daybreak | Hope | #123430 | #e6e9d6 | #ecb348 | slack |
| Sepia | Nostalgia | #ece0c9 | #473423 | #b07a3a | resonant wave |
| Bloom | Tenderness | #efe0d8 | #3a2826 | #c67c6b | slack |
| Harvest | Gratitude | #392c10 | #f1e5c5 | #d9a838 | resonant wave |
| Tide | Loneliness | #19262f | #d5dce0 | #6d93a7 | stretched thin |
| Rust | Regret | #2d1c17 | #e7d5c4 | #b75f3c | frayed |

Type is Newsreader serif throughout (the locked wordmark face). A post picks the mood that fits its feeling. If none fits, derive a fresh palette in the same spirit: deep, warm, restrained, one confident accent on the thread.

## Pairing rule (LOCKED)

Colour and thread-shape move together, always. Each mood is a fixed pairing of palette and thread state: a loss post is the Ash palette with the frayed thread, a regret post is Rust with frayed, a relief post is Sage with slack, and so on per the mood table above. You pick the mood; the palette and the thread state come as one unit. This keeps the whole set coherent and removes a per-post decision.
