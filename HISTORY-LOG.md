# HISTORY-LOG.md

The measured record of what actually happened in this pipeline. Reality is measured, not narrated. Every brief, research run, build, pass, fail, and ship is logged here with a timestamp. This is the source of truth for what the machine has done, not what it claimed.

## How to log

Append a dated entry for every event. Never rewrite history; if something was wrong, add a correcting entry. Each entry records: timestamp, what happened, the outcome (and whether it was PROVEN by a test or only CLAIMED), and any link (brief ID, artifact slug, research topic, PR, commit).

Event types: BRIEF CREATED · RESEARCH DONE · RESEARCH SKIPPED (with reason) · BUILD STARTED · TEST PASS · TEST FAIL · SHIPPED · ENGINE RUN · FAILURE · NOTE.

---

## Log

### 2026-06 — Hand-run phase (pipeline proving)

**Artifact 01 — DRIFT LOCK (game)**
- BRIEF CREATED: brief.md (id 01), one-button timing game, deterministic verdict ladder.
- RESEARCH SKIPPED: not applicable — pure interactive toy, asserts nothing about the real world.
- BUILD + TEST PASS: 26 assertions. SHIPPED to artifacts/drift-lock/. PROVEN live.

**Artifact 02 — LAST TEXT (post)**
- BRIEF CREATED: brief-02-lasttext.md (id 02), type last-texted name → one deterministic unsettling-but-true line.
- RESEARCH SKIPPED at the time (hand-run, pre-protocol). NOTE: under the new protocol this borderline case (claims about feeling) would warrant a light research check.
- BUILD + TEST PASS. SHIPPED to artifacts/last-text/. PROVEN live.

**Artifact 03 — PASTE CLEAN (tool)**
- BRIEF CREATED: brief-03-pasteclean.md (id 03), fully client-side text cleaner.
- RESEARCH SKIPPED: not applicable — pure utility, asserts nothing about the real world (correct skip under protocol Step 0).
- BUILD: ultracode. Hit a real Unicode-escape bug mid-build; fixed at source (built special chars via String.fromCharCode), not bodged. Adversarial verification found + fixed 2 further real bugs.
- TEST PASS: 35 assertions, exact-string + exact-count. Grep-confirmed zero network/storage calls (privacy promise verified, not asserted). SHIPPED to artifacts/paste-clean/. PROVEN live.

### 2026-06 — Engine built

- NOTE: CLAUDE.md written and committed (repo rules + definition of done).
- ENGINE CREATED: routine "Build and ship artifact" — repo pipeline-artifacts, schedule trigger (daily 09:00 BST), unrestricted push OFF (forced onto claude/ branch + PR for first runs, per watch-first-trust-later).
- ENGINE RUN (manual, safe first test): PROVEN. Cloud run cloned repo, found newest brief (03), ran the test suite, saw paste-clean already built and passing, correctly reported "nothing new to build" and stopped. Read path PROVEN. Build/PR path still UNPROVEN at this point.

### 2026-06 — Research protocol adopted

- NOTE: RESEARCH-PROTOCOL.md adopted. Every claim-making brief now requires a deep dig (dig till dry, disconfirming pass) banked as a topic-named research paper in research/, reusable across briefs. Every brief gets ID + description. This log started.

**Artifact 04 — THE LAST THING (post)**
- BRIEF CREATED: brief-04-thelast.md (id 04), cinematic emotional Instagram post grounded in real findings; arc mandated to end on hope (shareable shape).
- RESEARCH DONE: reference-04-thelast.md → to be banked as research/research-regret-and-connection.md. Four primary pillars (Ware regrets; Harvard Study of Adult Development; Berger & Milkman sharing mechanism; Holt-Lunstad connection/mortality). One contested claim (15-cigarettes) correctly flagged not asserted.
- NOTE: this was the first research run. It met Steps 1–2 and partially Step 3 (one disconfirming catch). Under the full protocol it should have a complete disconfirming pass across all four pillars before being marked done. STATUS: research CLAIMED solid, not yet fully PROVEN to protocol bar — disconfirming pass to be completed.
- BUILD: NOT YET RUN. This is the intended first test of the engine's build/PR path.
- TEST: pending build.
- SHIPPED: no.

---

*Next expected entry: ENGINE RUN on brief-04 — first test of the build-and-ship (write) path. Watch the transcript, not the green dot. Expect: builds artifacts/the-last/, writes test/thelast.test.js, test passes, opens a PR against main (does not push direct).*
