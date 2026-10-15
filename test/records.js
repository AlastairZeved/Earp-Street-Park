#!/usr/bin/env node
// records.js — the record contract.
//
// docs/DECISIONS.md is law, and law is stated by the owner, never authored
// by an agent (AGENTS.md, record law). This suite guards the citation space
// so an agent-invented or malformed entry cannot merge:
//   - `### B<n>` headings exist, are unique, and ascend from B1 with no gaps
//   - every entry carries a verbatim `Source:` line with a link or dated chat
//     attribution, either in the first Source paragraph or an addendum
// The analogue of TheBoards' records.js (their issue #272), adapted here.

'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const FILE = path.join(ROOT, 'docs', 'DECISIONS.md');

let failures = 0;
const fail = (msg) => { failures++; console.error('  FAIL ' + msg); };
const pass = (msg) => console.log('  ok   ' + msg);

let src;
try {
  src = fs.readFileSync(FILE, 'utf8');
} catch (e) {
  console.error('  FAIL docs/DECISIONS.md is missing — the record of owner rulings must exist.');
  process.exit(1);
}

// --- [1] append-only citation space --------------------------------------
console.log('[1] DECISIONS.md append-only `### B<n>` space');
const entries = [...src.matchAll(/^### (B(\d+))\./gm)].map((m) => ({ id: m[1], n: Number(m[2]), index: m.index }));

if (entries.length === 0) fail('no `### B<n>.` entries found — seeded rulings are missing');

const seen = new Map();
for (const e of entries) {
  if (seen.has(e.n)) fail(e.id + ' appears more than once (duplicate entry at index ' + seen.get(e.n) + ')');
  seen.set(e.n, e.index);
}
const ns = entries.map((e) => e.n);
for (let i = 1; i < ns.length; i++) {
  if (ns[i] !== ns[i - 1] + 1) fail('citation space is not contiguous ascending: ' + 'B' + ns[i - 1] + ' is followed by B' + ns[i] + ' (append-only: new rulings take the next number)');
}
if (ns.length && ns[0] !== 1) fail('the record starts at B' + ns[0] + ', not B1');
if (failures === 0) pass(entries.length + ' entries, B1..B' + ns[ns.length - 1] + ', unique, contiguous, and ascending (append-only)');

// --- [2] every entry carries a Source citation ----------------------------
console.log('[2] every entry has a linked or dated chat source citation');
for (let i = 0; i < entries.length; i++) {
  const body = src.slice(entries[i].index, i + 1 < entries.length ? entries[i + 1].index : src.length);
  const srcLine = body.match(/^\*\*Source:\*\*/m);
  if (!srcLine) { fail(entries[i].id + ' has no **Source:** line — an entry without a source is not law (record law)'); continue; }
  const sourceStart = srcLine.index + srcLine[0].length;
  const firstBlank = body.indexOf('\n\n', sourceStart);
  const sourceParagraph = body.slice(sourceStart, firstBlank === -1 ? body.length : firstBlank);
  const addenda = [...body.matchAll(/^\*\*Source addendum:\*\*[ \t]*(.+)$/gm)].map((m) => m[1]);
  const citations = [sourceParagraph, ...addenda].join('\n');
  const link = /https:\/\/github\.com\/AlastairZeved\/Earp-Street-Park\/(issues|pull)\/\d+/.test(citations);
  const datedChat = /\bchat,\s+\d{4}-\d{2}-\d{2}\b/.test(citations);
  if (!link && !datedChat) fail(entries[i].id + ' has no linked source or dated chat attribution in its Source paragraph/addendum');
}
if (failures === 0) pass('every entry cites a linkable source or dated chat attribution');

console.log('');
if (failures) {
  console.error('records.js: ' + failures + ' failure(s) — fix DECISIONS.md before merging. Law is transcribed from an owner statement, never authored.');
  process.exit(1);
}
console.log('records.js: record contract holds — B1..B' + ns[ns.length - 1] + ' unique, contiguous, all sourced.');
