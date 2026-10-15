#!/usr/bin/env node
// publish.js — the public-file boundary contract for Netlify.
//
// The deployment must publish only the explicit site/ allowlist; private repo
// records, tests, instructions, and workflows must remain outside it (issue #170).

'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SITE = path.join(ROOT, 'site');
const expectedSiteEntries = ['_headers', 'fonts', 'index.html', 'robots.txt', 'sitemap.xml'];
const expectedFonts = ['MontserratAlternates-400.woff2', 'MontserratAlternates-700.woff2'];
let failures = 0;
const fail = (message) => { failures++; console.error('  FAIL ' + message); };
const pass = (message) => console.log('  ok   ' + message);

console.log('[1] Netlify publish directory');
const configLines = fs.readFileSync(path.join(ROOT, 'netlify.toml'), 'utf8').split(/\r?\n/);
const buildStart = configLines.indexOf('[build]');
const buildEnd = configLines.findIndex((line, index) => index > buildStart && /^\s*\[/.test(line));
const buildLines = buildStart === -1
  ? []
  : configLines.slice(buildStart + 1, buildEnd === -1 ? undefined : buildEnd);
const publishLine = buildLines.find((line) => /^\s*publish\s*=/.test(line));
const publishDir = publishLine && publishLine.match(/^\s*publish\s*=\s*["']([^"']+)["']\s*(?:#.*)?$/);
if (!publishDir || publishDir[1] !== 'site') {
  fail('netlify.toml must configure site/ as the publish directory');
} else {
  pass('netlify.toml publishes site/');
}

console.log('[2] public site allowlist');
const siteEntries = fs.readdirSync(SITE).sort();
if (JSON.stringify(siteEntries) !== JSON.stringify(expectedSiteEntries)) {
  fail('site/ entries must be exactly: ' + expectedSiteEntries.join(', '));
} else {
  pass('site/ contains only the five approved public entries');
  for (const entry of expectedSiteEntries) {
    const stat = fs.lstatSync(path.join(SITE, entry));
    const validType = entry === 'fonts' ? stat.isDirectory() : stat.isFile();
    if (!validType) fail('site/' + entry + ' must be a regular ' + (entry === 'fonts' ? 'directory' : 'file'));
  }
}

const fontsDir = path.join(SITE, 'fonts');
const fonts = fs.readdirSync(fontsDir).sort();
if (JSON.stringify(fonts) !== JSON.stringify(expectedFonts)) {
  fail('site/fonts/ entries must be exactly: ' + expectedFonts.join(', '));
} else {
  pass('site/fonts/ contains only the two approved font files');
  for (const font of expectedFonts) {
    if (!fs.lstatSync(path.join(fontsDir, font)).isFile()) fail('site/fonts/' + font + ' must be a regular file');
  }
}

console.log('[3] private repository paths stay outside the publish directory');
for (const privatePath of ['AGENTS.md', 'docs', 'test', '.github']) {
  if (fs.existsSync(path.join(SITE, privatePath))) fail('site/' + privatePath + ' must not be published');
}
if (failures === 0) pass('agent instructions, docs, tests, and workflows are not published');

if (failures) {
  console.error('publish.js: ' + failures + ' failure(s) — the public-file boundary has drifted.');
  process.exit(1);
}
console.log('publish.js: public-file boundary holds.');
