# AGENTS.md

Guidance for any AI coding agent working in this repository (Hermes, Claude
Code, Codex, Cursor, …). Humans should read the governing records instead.

## What this is

Earp Street Park — the community-engagement website for one neighbor's work
restoring an abandoned lot. The published site has one `site/index.html`
(1,188,407 bytes) and two self-hosted font files under `site/fonts/` (B26): a
fixed spatial board styled as a wooden fence, everything on it a physical
object (paper sheets, tape, photo prints, marker ink). **No frameworks, no
build step, no package manager, no dependencies, no backend, no JavaScript.**
The one external request is the stories form's POST to Formspree. Keep it
that way — do not introduce a bundler, a framework, a `<script>`, a server,
or any new file type unless the owner explicitly asks for one.

## Read before you change anything

Three documents under `docs/` outrank code comments **and this file**:

| File | Answers | Wins on | Cited as |
|---|---|---|---|
| `docs/PRD.md` | what the site is, who it is for | product intent | `PRD §x` |
| `docs/UIUX.md` | what it renders, and in what values | **rendering** | `UIUX §x` |
| `docs/DECISIONS.md` | every owner ruling, in order | the later ruling wins | `B<n>` |

**Grep `DECISIONS.md` first.** A prior ruling has very likely already
answered your question — often to forbid exactly what you're about to do
(the Come Say Hi block alone was corrected three times before B5 rebuilt it
as a flier). A PR that changes copy, the flier, the form, the lot photo, body
weight, or the repository's contents without a `B<n>` entry where a ruling
was made will be asked to add one.

**Cite with the document prefix** (`UIUX §2.1`, not bare `§2.1`).

`UIUX.md` is the rendering authority: every hex, contrast-relevant pairing,
size, radius, and duration lives there and nowhere else. The design system's
rendered reference is the shipped `site/index.html` itself — measure the render,
don't re-derive the design from prose.

## Commands

Serve and open the published site:
```
python3 -m http.server 8000 --directory site   # then visit http://localhost:8000
```

Run the regression suite (browserless; no test runner/framework — whole
files only, each is one linear scenario):
```
node test/tokens.js           # design contract: UIUX §2 recomputed from shipped hexes
node test/records.js          # record contract: DECISIONS.md B<n> space + Source lines
node test/publish.js          # public-file boundary: Netlify publishes site/ only
```

There is no lint/build/typecheck command — the project has none. The
repository keeps no `package.json`; the suites use Node stdlib only.

## Architecture: facts that explain most of `site/index.html`

1. **One logical page, one viewport (desktop).** `body { overflow: hidden }`
   at >760px; four elements are pinned by percentage as direct children of
   `.field`: `.note--stories`, `.note--week`, `.window`, and `.middle-row`.
   `.note--plan` is pinned inside `.middle-row`. The only scrolling surfaces
   on desktop are `#panel-week` and `#panel-plan` (`overflow-y: auto;
   overflow-x: hidden; tabindex="0"`).
   On phone (≤760px, the single breakpoint) the page scrolls and sheets
   print full-length.
2. **Sheet clearances are computed, never eyeballed.**
   `--stories-row: clamp(240px, 462px - 12vw, 365px)` (B25) sizes the middle
   row against the lot window. Its bounds are agent-derived, not an owner
   ruling — re-measure before changing them.
3. **The sheet species is one recipe.** A paper sheet = `.note` background +
   sheet shadow + two tape strips (values duplicated verbatim on
   `.head-lines` per B5 — "no invented texture") + a small tilt. A new
   element joins an existing species with its exact values; it does not get
   its own treatment. B8 is the standing example: an invented border on the
   photo mat was ruled out — "let the white space live."
4. **Weight map is law (B9, amended by B12).** Body text is 400, including
   entry dates. Bold remains on the Send button and headings, plus the title-
   flier and pop-up h1s and `.popup-close`. If new body text renders bold, the
   change is wrong.
5. **Zero JavaScript.** Every behavior is CSS/HTML. A change that needs JS
   needs an owner ruling first.
6. **The form is load-bearing and fragile in one specific way (B1's
   landmine):** never add `Referrer-Policy: no-referrer`/`same-origin` —
   Formspree marks those submissions as spam, i.e. every real neighbour's
   note.
7. **Dormant CSS exists by design-remnant, not invitation.** `.need`,
   `.materials`, `.entry--archive`, `.archive-head`, `.plan-sub` are declared
   with no markup using them (B7 deleted the materials list's content).
   `.fine` is live in the B35 banner (`<span class="fine">` in
   `site/index.html`). Do not wire dormant blocks up to "use" them, and do
   not cite their presence as a feature. The full dormant-CSS inventory is
   tracked in Cleanup 8/11 (issue #167).

## Shipping discipline (every `site/index.html` change)

The site publishes only `site/` on Netlify (`netlify.toml`, B39, issue #170)
from the `deploy` branch (B10, issue #89) — a
merge to `main` is no longer a publish. `main` remains the working branch;
B31's title states: “Deploy is main — always; promotion is the `main:deploy`
push and nothing else; no merge commits ever land on deploy and deploy never
diverges from main.”
`.github/workflows/ci.yml` runs both suites on every PR. When `main` is
deploy-ready, the owner promotes it manually — a fast-forward push:

```
git push origin main:deploy
```

Netlify listens for `deploy` branch updates and publishes `site/` only;
repository docs, tests, and agent instructions stay outside the publish
directory. Docs-only
changes skip nothing here — promotion is manual either way. If your change
moves a value `test/tokens.js` pins, you rewrite that assertion deliberately
— say so in the commit message.

## Commits and PRs

- Subject: short, imperative, the outcome, with driving issue refs —
  `fix: remove red line borders from lot photo mat (issue #84)`.
- All three suites pass. A change that pins what a suite asserts rewrites that
  assertion deliberately.
- A behavior change ships with its ruling: a new `B<n>` entry in
  `DECISIONS.md` (append-only — supersede, never edit away), plus the
  `UIUX.md`/`PRD.md` section edits it names, in the same PR.
- Work generally traces to a GitHub issue; check for one before assuming a
  change is unscoped.
- Security findings → a security issue to the owner for a ruling (see B1's
  precedent), never a silent fix.

## Never do (product law — DRAFT, derived from the issue history; the owner corrects this list in review)

- No `.py` files, and no new file types at all beyond what a ruling adds
  (B2: "the repo gets no `.py` file").
- No JavaScript, no frameworks, no build step, no `package.json`.
- No bold body text (B9), no red/colored border lines on the photo mat
  (B8), no intro statement or materials list on the plan sheet (B7), no
  "Come Say Hi" chip-impostor — it is a flier (B5), no button label other
  than "Send" (B4).
- No `Referrer-Policy: no-referrer`/`same-origin` (B1's landmine).
- No invented textures, tape variants, or frame treatments: an element joins
  an existing species with its verbatim values (B5's forbidden fixes).
- No analytics, tracking, accounts, comments, or new external requests
  beyond the Formspree endpoint.
- Do not touch the `STUB:` fill points or the dormant CSS (fact 7) without
  an owner instruction.

## Never do (record law — source of record: owner direction in chat, 2026-10-05)

`docs/DECISIONS.md` is law, and law is stated by the owner, never authored by
an agent. Agents transcribe owner decisions; they do not make them. Every
entry in DECISIONS.md must carry a `Source:` line quoting the owner's
statement verbatim (issue, PR comment, or chat quote the owner confirmed),
with a link when the source is linkable. For chat-sourced entries with no
linkable source, use the owner's dated attribution convention:
`chat, YYYY-MM-DD`; keep any existing issue/PR links. An entry without a
source line is not law — it is an agent
invention and any QA pass may delete it on sight. Agents never author, amend,
or supersede rulings except to transcribe an owner statement. `test/records.js`
enforces the citation space in CI.
