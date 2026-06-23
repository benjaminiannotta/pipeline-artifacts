/* ============================================================
   DRIFT LOCK — verdict ladder + miss-freeze tests
   Run: node test/verdict.test.mjs
   The grading functions below are byte-for-byte identical to the
   ones shipped in ../index.html (PURE GRADING LOGIC block).
   ============================================================ */

/* ---- PURE GRADING LOGIC (kept identical to index.html) ---- */
function computeVerdict(locks, flinches){
  let word;
  if (locks <= 3)       word = 'TWITCHY';
  else if (locks <= 7)  word = 'STEADY';
  else if (locks <= 11) word = 'SHARP';
  else if (locks <= 16) word = 'COLD';
  else                  word = 'SURGICAL';

  const clean = flinches === 0;
  if (clean && locks >= 12) return { word: 'DEADEYE', modifier: '' };
  return { word, modifier: clean ? '· NO FLINCH' : '' };
}
function verdictString(locks, flinches){
  const v = computeVerdict(locks, flinches);
  return v.modifier ? v.word + ' ' + v.modifier : v.word;
}
function shareString(locks, flinches){
  return 'DRIFT LOCK — ' + locks + ' locks, ' + flinches +
         (flinches === 1 ? ' flinch: ' : ' flinches: ') +
         verdictString(locks, flinches) + '. Beat it.';
}
/* ----------------------------------------------------------- */

/* ---- Minimal deterministic state machine mirroring index.html fire()
        decision logic, to prove a miss freezes + produces the end card. ---- */
function makeRun(){
  return { state:'run', locks:0, flinches:0, zoneHalf:0.6, grace:0.16, card:null };
}
// shotKind: 'lock' (inside zone), 'flinch' (inside grace), 'miss' (outside)
function applyShot(S, kind){
  if (S.state !== 'run') return;
  if (kind === 'lock'){ S.locks++; }
  else if (kind === 'flinch'){ S.flinches++; S.locks++; }
  else { // miss
    S.state = 'dead';            // ring freezes
    const v = computeVerdict(S.locks, S.flinches);
    S.card = {                    // end card payload
      frozen: true,
      locks: S.locks,
      flinches: S.flinches,
      verdict: v.word,
      modifier: v.modifier,
      share: shareString(S.locks, S.flinches)
    };
  }
}

/* ---- Tiny assert harness ---- */
let pass=0, fail=0;
function eq(actual, expected, name){
  const ok = actual === expected;
  if (ok){ pass++; console.log('  PASS  '+name); }
  else   { fail++; console.log('  FAIL  '+name+'\n        expected: '+JSON.stringify(expected)+'\n        actual:   '+JSON.stringify(actual)); }
}
function truthy(v, name){
  if (v){ pass++; console.log('  PASS  '+name); }
  else  { fail++; console.log('  FAIL  '+name+'  (expected truthy, got '+JSON.stringify(v)+')'); }
}

console.log('\nDRIFT LOCK — verdict ladder tests\n');

/* CASE 1: 14 locks + 0 flinches -> exactly "DEADEYE" (no modifier) */
console.log('Case 1: 14 locks, 0 flinches');
eq(verdictString(14, 0), 'DEADEYE', '14L/0F verdict string is exactly "DEADEYE"');
eq(computeVerdict(14,0).word, 'DEADEYE', '14L/0F word is DEADEYE');
eq(computeVerdict(14,0).modifier, '', '14L/0F has NO modifier appended');

/* CASE 2: 6 locks + 1 flinch -> "STEADY", no NO FLINCH modifier */
console.log('\nCase 2: 6 locks, 1 flinch');
eq(verdictString(6, 1), 'STEADY', '6L/1F verdict string is exactly "STEADY"');
eq(computeVerdict(6,1).word, 'STEADY', '6L/1F word is STEADY');
eq(computeVerdict(6,1).modifier, '', '6L/1F has NO "NO FLINCH" modifier');

/* CASE 3: a miss freezes the ring and shows the end card with correct data */
console.log('\nCase 3: miss freezes + end card');
const S = makeRun();
// play a run: 8 clean locks, then 1 flinch, then a miss
for (let i=0;i<8;i++) applyShot(S,'lock');
applyShot(S,'flinch');           // now locks=9, flinches=1
applyShot(S,'miss');             // the fatal shot
eq(S.state, 'dead', 'state is "dead" after miss');
truthy(S.card, 'end card was produced');
truthy(S.card && S.card.frozen, 'end card marks ring frozen');
eq(S.card.locks, 9, 'card locks = 9');
eq(S.card.flinches, 1, 'card flinches = 1');
eq(S.card.verdict, 'SHARP', 'card verdict word = SHARP (8-11 band)');
eq(S.card.modifier, '', 'card has no modifier (had a flinch)');
eq(S.card.share, 'DRIFT LOCK — 9 locks, 1 flinch: SHARP. Beat it.', 'card share string is exact');
// shots after death are ignored (ring stays frozen)
applyShot(S,'lock');
eq(S.locks, 9, 'shots after miss are ignored (locks unchanged)');

/* ---- Extra ladder boundary coverage (belt-and-suspenders) ---- */
console.log('\nLadder boundaries');
eq(verdictString(0,3),  'TWITCHY',            '0L band');
eq(verdictString(3,0),  'TWITCHY · NO FLINCH','3L clean (below DEADEYE threshold) keeps modifier');
eq(verdictString(4,2),  'STEADY',             '4L band');
eq(verdictString(7,0),  'STEADY · NO FLINCH', '7L clean');
eq(verdictString(8,1),  'SHARP',              '8L band');
eq(verdictString(11,0), 'SHARP · NO FLINCH',  '11L clean (just below DEADEYE)');
eq(verdictString(12,0), 'DEADEYE',            '12L/0F is the DEADEYE threshold');
eq(verdictString(12,1), 'COLD',               '12L with a flinch is COLD, not DEADEYE');
eq(verdictString(16,0), 'DEADEYE',            '16L/0F DEADEYE');
eq(verdictString(17,3), 'SURGICAL',           '17L band');
eq(verdictString(20,0), 'DEADEYE',            '20L/0F DEADEYE (overrides SURGICAL)');

console.log('\n----------------------------------------');
console.log('  '+pass+' passed, '+fail+' failed');
console.log('----------------------------------------\n');
process.exit(fail === 0 ? 0 : 1);
