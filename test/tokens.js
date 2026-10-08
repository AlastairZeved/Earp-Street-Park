#!/usr/bin/env node
// tokens.js — the design contract.
//
// UIUX.md is the rendering authority: every hex, token, and weight rule the
// site draws with lives there and nowhere else. This suite recomputes UIUX
// §2/§3's tables from the shipped index.html and fails when the two drift:
// a new color, a changed token value, or a broken weight map (B9) stops the
// PR before it merges.
//
// Browserless, stdlib only, no package.json (B2's spirit: no stray files).

'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const HTML = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const UIUX = fs.readFileSync(path.join(ROOT, 'docs', 'UIUX.md'), 'utf8');

let failures = 0;
const fail = (msg) => { failures++; console.error('  FAIL ' + msg); };
const pass = (msg) => console.log('  ok   ' + msg);

// --- helpers -------------------------------------------------------------
// Strip data URIs BEFORE any hex scan: base64 payloads contain hex-looking
// runs (the fence tiles and both photos) that are not CSS colors.
const htmlNoData = HTML.replace(/data:[a-z]+\/[a-z0-9.+-]+;base64,[A-Za-z0-9+/=]+/g, 'data:STRIPPED');

function extractRootBlock(src, anchor) {
  // Returns the custom-property declarations of the block containing `anchor`.
  const idx = src.indexOf(anchor);
  if (idx === -1) return null;
  const start = src.indexOf('{', idx);
  const end = src.indexOf('}', start);
  if (start === -1 || end === -1) return null;
  const body = src.slice(start + 1, end);
  const vars = {};
  for (const m of body.matchAll(/(--[a-z0-9-]+)\s*:\s*([^;]+);/g)) vars[m[1]] = m[2].trim();
  return vars;
}

// :root (light) block and the dark remap block.
const light = extractRootBlock(htmlNoData, ':root');
const darkMatch = htmlNoData.match(/@media\s*\(prefers-color-scheme:\s*dark\)/);
const dark = darkMatch ? extractRootBlock(htmlNoData, darkMatch[0]) : null;

// --- [1] tokens declared vs UIUX §2.1/§2.2 tables ------------------------
function uiuxTokenTable(tableHeading, nextHeading) {
  const start = UIUX.indexOf(tableHeading);
  const end = nextHeading ? UIUX.indexOf(nextHeading) : UIUX.length;
  if (start === -1 || end === -1 || end <= start) return {};
  const rows = {};
  const section = UIUX.slice(start, end);
  for (const m of section.matchAll(/^\|\s*`(--[a-z0-9-]+)`\s*\|\s*`([^`]+)`/gm)) {
    rows[m[1]] = m[2].trim();
  }
  return rows;
}

const uiuxLight = uiuxTokenTable('### §2.1 Light-mode tokens', '### §2.2');
const uiuxDark = uiuxTokenTable('### §2.2 Dark-mode tokens', '### §2.3');

const COLOR_TOKENS = ['--paper', '--paper-shade', '--ink', '--ink-faded', '--rule', '--rust', '--fence', '--rail'];
// #141 (B36 as amended, v5): --rail joins the list — the anthracite cap rail +
// post hardware set is CSS hardware, not bitmap pixels, so it is a hex token.
// The --fence value rewrite (near-black slat-gap backing) is also deliberate.
// #141 (B36): the B35 gradient tokens --post-edge/--post-mid/--post-sheen are
// REMOVED — the post's finish now lives inside the --post-tile bitmap's
// pixels, and bitmap pixels are not hex tokens (the same convention as
// --fence-tile, which is not in this list either). Deliberate assertion
// rewrite; noted in the commit message.

console.log('[1] UIUX §2.1/§2.2 token tables vs shipped :root values');
if (!light) fail('could not extract the :root block from index.html');
if (!dark) fail('could not extract the dark-mode remap block from index.html');
for (const t of COLOR_TOKENS) {
  const shippedLight = light && light[t];
  const shippedDark = dark && dark[t];
  const docLight = uiuxLight[t];
  const docDark = uiuxDark[t];
  if (!docLight) fail(t + ' missing from UIUX §2.1');
  else if (docLight !== shippedLight) fail('UIUX §2.1 ' + t + '=' + docLight + ' but index.html ships ' + shippedLight);
  if (!docDark) fail(t + ' missing from UIUX §2.2');
  else if (docDark !== shippedDark) fail('UIUX §2.2 ' + t + '=' + docDark + ' but index.html ships ' + shippedDark);
}
if (failures === 0) pass('all ' + COLOR_TOKENS.length + ' color tokens match in both themes');

// --- [2] hex census: every hex shipped is documented, every documented hex is shipped
console.log('[2] hex census — UIUX.md documents every hex index.html ships');
const shipped = new Set();
for (const m of htmlNoData.matchAll(/#[0-9a-fA-F]{6}\b/g)) shipped.add(m[0].toLowerCase());
// rgba table values in §2.4 are documented as rgba(); hex roles live in §2.1–2.3.
const documented = new Set();
for (const m of UIUX.matchAll(/#[0-9a-fA-F]{6}\b/g)) documented.add(m[0].toLowerCase());

for (const hex of shipped) {
  if (!documented.has(hex)) fail('index.html ships ' + hex + ' but UIUX.md does not document it');
}
for (const hex of documented) {
  if (!shipped.has(hex)) fail('UIUX.md documents ' + hex + ' but index.html does not ship it');
}
pass('census: ' + shipped.size + ' shipped hexes, all documented and all present');

// --- [3] weight map (B9 + B12) --------------------------------------------
console.log('[3] weight map — B12: body text 400, bold only on titles/headers and the Send button');
const grouped = /\.entry p,\s*\.note-face,\s*\.punch li[^{]*\{\s*font-weight:\s*400;/.test(HTML);
if (!grouped) fail('the B9 grouped body-weight-400 rule is missing from index.html');
const bodyBold = /\.note-face[^{}]*\{[^}]*font-weight:\s*(?!400)[1-9]/.test(HTML);
if (bodyBold) fail('.note-face must not carry a bold weight (B9)');
const datesPlain = /\.entry-date\s*\{[^}]*font-weight:\s*400(?:\s|;|$)/.test(HTML);
if (!datesPlain) fail('.entry-date must be plain weight 400 (B12: dates go plain)');
const sendBold = /button\[type=["']?submit["']?\]\s*\{[^}]*font-weight:\s*700/.test(HTML);
if (!sendBold) fail('button[type=submit] lost its 700 weight (the owner ruled the Send button stays bold)');
if (failures === 0) pass('B12 weight map intact: 400 body rule present, dates plain, Send bold');

// --- [4] hard-coded surfaces documented (§2.3) ----------------------------
console.log('[4] hard-coded surfaces — §2.3 documents the values beyond the tokens');
for (const hex of ['#fffdf6', '#ece1c8', '#2b2720', '#332c20']) {
  if (!shipped.has(hex) && !documented.has(hex)) continue; // gone from both sides: fine
  if (shipped.has(hex) && !documented.has(hex)) fail('surface ' + hex + ' shipped but not in UIUX §2.3');
}

console.log('');
if (failures) {
  console.error('tokens.js: ' + failures + ' failure(s) — the design contract (UIUX §2/§3) and the shipped file have drifted. Fix index.html or amend UIUX.md with an owner ruling.');
  process.exit(1);
}
console.log('tokens.js: design contract holds — UIUX §2/§3 recomputed from the shipped file.');
