# HeartStrings: Project Foundation

This is the document that should have existed before any work started. It defines the environment, the source of truth, the build workflow, and the anti-slop model. Read it first in the new session. Everything else builds on it.

The root cause of the previous two days: work kept happening in Remote (cloud) sessions that could not reach the local machine or the GitHub repo, while looking almost identical to local sessions. Every blocker (403s, stranded files, the empty 0-byte file, "file not found", the research file trapped twice) traces to that one confusion. This document removes it by fixing one environment (local terminal), one source of truth (the repo), and a clear way to tell Local from Remote.

---

## 1. Environment law (non-negotiable)

There is ONE place work happens:

**Local Claude Code, started from the repo folder in a terminal (PowerShell):**
```
cd ~/pipeline-artifacts
claude
```

That is the only environment that is wired to the real files and the real git, so it can read, write, commit, and push with no proxy and no 403. This was proven repeatedly: every push from here worked first time.

THE CORE TRAP (this caused two days of pain): the SAME work surface can run in two modes that look almost identical.
- LOCAL: runs on the machine, sees the real files, can push. Good.
- REMOTE / Claude Code on the web: runs in an Anthropic cloud Linux container. It CANNOT reach the local C: drive or the GitHub repo. It 403s on every git operation and strands any file it makes. Banned.

How to tell them apart, every time, before doing anything:
- The terminal running `claude` from the repo folder is LOCAL. The prompt is `>` with "? for shortcuts".
- The browser tab at claude.ai/code is REMOTE. Banned.
- The DESKTOP APP is the dangerous one: it can show BOTH. A session there labelled "Remote" (top of the window) is the cloud container, banned. The desktop app can also run local sessions, but the label is the only tell, and it is easy to miss. Because of this ambiguity, prefer the terminal, where there is no mode to get wrong.

Things that do NOT rescue a stranded Remote session (all tried, all failed):
- Installing the GitHub App: does not retro-fix a session that was already started; the Remote container still 403s.
- `git fetch` / `git merge` of the Remote branch from local: the branch only exists in the cloud container, not on origin, so there is nothing to fetch.
- `/teleport` or `claude --teleport`: returned "no sessions found" / "not available in this environment". Does not work for these Remote sessions.
- Asking local Code to copy from the Remote commit hash: the commit is not in the local repo, so it cannot be found.

The ONE thing that DOES get a file out of a stranded Remote session: the session offers the file as a downloadable ATTACHMENT (a file box showing its size, e.g. "46.8 KB"). Click it and download it to C:\Users\Ben\Downloads, then move it into the repo locally. This is the only reliable bridge from a cloud session to the machine. (Note: a file pasted as text into chat is only partial if the session truncated it; the attachment is the complete file.)

Design is still used (see the anti-slop model below), but ONLY for designing the look. Its output is taken as a DOWNLOADED bundle, never "Sent to Claude Code Web".

If a file ever seems missing, stranded, or 403s: the cause is that something ran in a Remote session. The fix is always to return to local Claude Code (the terminal) in the repo folder.

---

## 2. Source of truth

The GitHub repo (benjaminiannotta/pipeline-artifacts), reached only through the one local clone at `~/pipeline-artifacts`, is the single source of truth.

- All work lands there by local commit and push (git push works from the local clone; it has been proven).
- GitHub Pages serves the live artifacts from it.
- Any future automation runs against the same repo.

There is never a second copy of the project anywhere. No cloud container clones, no handoff bundles treated as the project, no separate working folders. One repo, one clone, one truth.

---

## 3. Instruction discipline (prevents the "wrong window" loss)

Three terminals look almost identical and this caused repeated confusion:
- Raw PowerShell (prompt: `PS C:\...>`)
- Local Claude Code (prompt: `>` with "? for shortcuts" beneath)
- The browser/cloud Code tab (BANNED)

Rule for the new session: every instruction is labelled with its exact target, either **POWERSHELL** or **CODE**. No instruction is given without its label. If the label is missing, do not run it.

Quick check of where you are: if the prompt says `PS C:\...>` it is PowerShell; if it says `>` with "? for shortcuts", Claude Code is running.

---

## 4. The anti-slop model (the part that actually makes the work good)

Slop is the average of training data. It appears whenever the content or the look is freestyled with no specific, human-driven intent. The previous sessions proved this directly: the brand (driven by Ben's taste at the Design canvas) came out good; everything freestyled by the assistant came out as slop.

So the division of labour is fixed:

- **Taste is human.** Ben drives the Design canvas for the look, and Ben is the gut-gate on whether copy and visuals are slop. The assistant never overrides this.
- **The brief carries content intent**, not a freestyled finished payload. It states the goal, the emotion, the structure, and the standard of proof, not the assistant's guess at the answer.
- **Code builds.** It implements faithfully from the brief and the brand system.
- **The assistant does not generate the creative payload.** Its job is structure, research grounding, briefs, and keeping the workflow clean, not inventing the words or the look.

Hard constraint on all build work (carried from the project): a single self-contained index.html, vanilla HTML/CSS/JS only, no libraries, no frameworks, no network, no build step, no storage.

---

## 5. The build workflow (cut down, one path)

For each post:

1. Talk through the idea (here, in chat). The creative direction is Ben's; the assistant helps shape and research it.
2. The brief is written into the repo (briefs/brief-NN-slug.md). It carries content intent and the definition of done, not a freestyled payload.
3. In **CODE** (local), build the artifact into artifacts/<slug>/index.html, write the test that defines done, run it until green, regenerate the landing page.
4. Open the file in the browser. Ben eyeballs it. This is the taste-gate; the test proves logic, only Ben judges feel.
5. If good, commit and push from local (works, no 403). If slop, back to step 1 or 2; never ship unseen.

Design pass (optional, for look-heavy posts): Ben drives the Design canvas, exports the bundle as a DOWNLOAD, and it informs the build. Never sent to Code Web.

---

## 6. What to carry into the new session

1. This document, as the foundation. Read first.
2. The HeartStrings brand, already built and live: the strung-heart signature, the locked wordmark (Newsreader serif), the 12 mood palettes, the variable-thread rule, the pairing rule (mood colour and thread state move together). This is real and good and does not need redoing. It lives in the repo (HEARTSTRINGS-BRAND.md and the heartstrings-signature artifact).
3. The research master, NOW SAFELY IN THE REPO as HEARTSTRINGS-PROJECT.md (394 lines, committed and pushed to main). It governs every post: the anti-slop voice rules, the visual and motion system with real parameters, the winning-post formula, and a definition-of-done checklist. When a post and this file disagree, the file wins. The load-bearing findings:
   - Reach is driven by sends-per-reach (a post quietly sent to one person), not likes. This matches the brand goal ("make them think of one specific person") exactly.
   - "Quiet" is the production aesthetic, NOT the emotion. The emotion must be activating (awe, tenderness, nostalgia, gratitude, bittersweet recognition). The jolt test, not the sigh test. Flat sadness loses.
   - The concrete anti-slop BUILD parameters (these are why earlier builds read as dead, and they override any vaguer instruction):
     - Trails: do NOT clearRect each frame. Paint the GROUND colour at low alpha (about 0.05) each frame so trails layer into a painted texture. Use the ground colour, not black.
     - Density comes from long trails plus additive overlap of FEW particles, not thousands of dots. Additive blending (globalCompositeOperation = "lighter") for glow where strands cross.
     - Grain/dither on the dark ground (about 3 percent) to kill banding. This is the single biggest "premium" tell; without it the ground reads flat and sterile.
     - Colour: one muted hue family, up to ~3 values plus one accent; the accent occupies <= ~20% of any field; NEVER paired with teal/cyan. Rust (#b75f3c) sits one nudge from "AI orange", so keep it muted.
     - Composition: off-centre, not centred-hero, no card grid, no accent left-border. One tinted shadow max, or none.
     - Motion: lines reveal one at a time, rise 8 to 16px, 600 to 900ms, ease-out-cubic (cubic-bezier(0.215,0.61,0.355,1)), stagger/dwell ~1200ms tuned for reading, then HOLD 1.5 to 3s in silence. Sub-pixel organic idle with phase offsets. No bounce, no snap, no everything-at-once. transform and opacity only. prefers-reduced-motion handled.
   The full detail, with citations and PROVEN/PRINCIPLE tags, is in the file itself. Read it before building any post.

---

## 7. The one rule that prevents a repeat

Before doing anything in the new session, confirm: am I in local Claude Code, started from ~/pipeline-artifacts, writing to the real repo? If yes, proceed. If the work is happening anywhere else (browser Code, a handoff container, a download folder treated as the project), stop and return to the local repo. Almost every problem of the previous two days was a violation of this one rule.
