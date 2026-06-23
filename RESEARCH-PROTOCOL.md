# RESEARCH-PROTOCOL.md

How research is done for every brief in this pipeline. This is a rule, not a suggestion. The point is that every artifact making a claim about the real world stands on real, traced, tested evidence, never on invention or a quick look. "Looks researched" is not "is researched." This protocol defines when research is actually done.

## Who does it, for now

For now: a human-watched session does the research (you watch every search and source as it happens). Later, the autonomous engine may do its own research, but only once this protocol is proven by hand AND the engine is made to show its full working (every search, every source, marked) so it can be checked for fabrication. Unwatched research is where fake sources hide. Do not let the engine research alone until that check exists.

## Step 0 — Does this brief need research?

Every brief gets an ID number and a plain description.

Then ask: does the artifact make any claim about the real world (facts, studies, history, what people feel, how things work)?
- YES → run the full protocol below. No exceptions.
- NO (a pure tool that asserts nothing, e.g. a text cleaner) → no deep dig needed; record in the history log that research was not applicable and why.

If unsure, treat it as YES.

## Step 1 — Map the claim-domains

Before searching, break the brief into every distinct thing it will assert or rest on. Write them down. This list is the table of contents of the research paper, and it is what makes "done" definable: done means every domain is saturated, not "I got tired."

Example (THE LAST THING): four domains — regrets of the dying, what makes a good life, why content is shared, cost of disconnection.

## Step 2 — Saturate each domain to PRIMARY source

For each domain, searching is not finished when you have a source. It is finished when:
- The claim is traced back to its origin — the actual study, paper, dataset, or first-hand account — and that origin is read, not a blog about it, and
- New searches stop surfacing new primary material and only return restatements of what you already have.

The saturation test (checkable): if the last two searches in a domain returned nothing you did not already have, that domain is saturated. If they are still turning up new primary sources, keep going. Dig till dry.

Primary beats secondary every time. A marketing blog restating a study is not the study. Mark every source [PRIMARY], [SECONDARY], or [WEAK].

## Step 3 — Disconfirming pass (mandatory)

This is the step that turns a pile of supporting links into real research, and the easiest one to skip. For every load-bearing claim, actively search for what contradicts or complicates it:
- What is the strongest case against this?
- What do critics say? Has it been replicated, or challenged?
- Who disagrees, and on what grounds?

A claim that survives this is grounded and can be marked PROVEN or CONTESTED honestly. A claim that has not faced it is only asserted, and must be marked as such. Include the disconfirming evidence in the paper. Do not bury it. (This is how the "loneliness = 15 cigarettes" claim was correctly flagged as contested rather than stated as fact.)

## Step 4 — Write the research paper (the MD file)

Output a reference MD structured like an academic paper:
- Each claim-domain as a section.
- Every claim marked PROVEN / CONTESTED / WEAK.
- Primary sources listed separately from secondary.
- The disconfirming evidence included, not hidden.
- An explicit "What is NOT established" section naming the gaps.
- A map from evidence to the artifact's beats (which finding grounds which part).
- An honest sourcing note: how many sources, how weighted, what is weak.

## Banking and reuse

- Research papers are named by TOPIC, not by brief: e.g. `research/research-regret-and-connection.md`. So they are findable and reusable.
- They live in the `research/` folder in the repo, banked with the project. The engine can reach them later.
- Reuse rule: when a new brief comes in, FIRST check `research/` by topic. If a matching research paper already exists, call it up and reuse it instead of re-digging. If it is a new topic, do a fresh deep dig and bank a new paper.
- A brief records which research paper(s) it stands on (topic name + the brief's own ID), so brief ↔ evidence is traceable both ways.
- Over time this builds a library: a shelf of briefs (each with ID + description) and a shelf of research papers (each by topic). New work on an old topic becomes cheap.

## Definition of done (non-negotiable)

Research is NOT done, and must not be called done, unless ALL of these are true:
1. Every claim-domain from Step 1 is saturated to primary source (Step 2 saturation test met).
2. Every load-bearing claim has had a disconfirming search run against it (Step 3).
3. Every claim in the final paper is marked (PROVEN/CONTESTED/WEAK) and sourced; nothing load-bearing rests on a restatement.
4. The paper names its own gaps ("What is NOT established").

If any of the four is not true, say so plainly. Do not hand over a paper that looks finished but is not. Quitting early and calling it done is the exact failure this protocol exists to prevent.

## Every brief and every research run is logged

Every brief created, every research paper produced (or skipped, with reason), every build, pass, fail, and ship is recorded in `HISTORY-LOG.md` with a timestamp. The log is the measured record of what actually happened, not what was intended.
