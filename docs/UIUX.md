# UIUX.md — Earp Street Park

**Status:** DRAFT v1, reconstructed from the shipped `index.html` (one
self-contained file, no build step) and the owner's rulings of record. The
governing law in §1 is the owner's, carried over verbatim. Everything else is
a rendering inventory for the owner to amend — until the owner corrects it in
review, treat it as descriptive, not prescriptive.

**How to read this with the other records.** `PRD.md` says what the site is
and who it is for; this document says what it renders and in what values — it
is the **rendering authority**: every hex, size, radius, duration, and
contrast-relevant pairing lives here and nowhere else. `DECISIONS.md` is the
binding record of owner rulings; where a ruling supersedes something here, it
says so by number. Cite with the document prefix (`UIUX §2`, not bare `§2`).

---

## §1 Governing law

> **If you have to think about the interface, it failed.
> Every pixel earns its place.**

And its corollary, which governs this site's whole material language:

> **Identity comes from structure — frame, scratch-out, surface tone — never
> costume.**

*Source:* the owner's governing design law, stated in
`AlastairZeved/TheBoards` `docs/UIUX.md` §1 and carried over verbatim at the
owner's direction (chat, 2026-10-05). It governs this site the same way: the
board IS a wooden fence, and everything on it is a physical object — a paper
sheet, a strip of tape, a photo print, a marker. A texture, border, or
ornament that exists because interfaces have them is costume (see B5's
forbidden fixes and B8's rejected red lines).

---

## §2 Color

Every hex in the shipped file — 18 distinct values. The palette's roles come
from the tokens' own comments in `index.html` (`:root`, quoted in the right
column).

### §2.1 Light-mode tokens

| Token | Value | Role (token comment, verbatim) |
|---|---|---|
| `--paper` | `#f4efe3` | "the notice sheet" |
| `--paper-shade` | `#eae3d2` | "ruled/fill-in areas" |
| `--ink` | `#2b2a28` | body ink on paper |
| `--ink-faded` | `#66625a` | "archive entries — older = faded" |
| `--rule` | `#b9b3a4` | dashed entry rules |
| `--rust` | `#a34a1a` | "marker ink: dates, lead words, the pin" |
| `--fence` | `#6b6055` | "day cedar, sun-silvered — #31" |

### §2.2 Dark-mode tokens (`prefers-color-scheme: dark` remap)

| Token | Value | Comment (verbatim) |
|---|---|---|
| `--paper` | `#3a3329` | "dim paper — the fliers are still paper" |
| `--paper-shade` | `#322c24` | "ruled/fill-in areas, a shade below the sheet" |
| `--ink` | `#ede5d3` | "light ink" |
| `--ink-faded` | `#b5ac9b` | "archive entries — older = faded" |
| `--rule` | `#6b6355` | — |
| `--rust` | `#dd8a4a` | "marker ink, lifted to hold AA on dark paper" |
| `--fence` | `#2e2921` | "the same boards at dusk — darker, NOT black" |

### §2.3 Hard-coded surfaces (re-toned in dark)

| Value | Light role | Dark value |
|---|---|---|
| `#fffdf6` | the photo mat (`.cmp`), checkbox fills (`.punch li::before`), form inputs, the phone snapshot print | `#2b2720` ("the white checkbox fills/inputs go dusk-dark") |
| `#ece1c8` | phone-only scrap stock (`.note--plan .need`) | `#332c20` |

### §2.4 Shadows and tape

| Value | Where |
|---|---|
| `rgba(0,0,0,.35)` | h1 / `.say-hi` text-shadow |
| `rgba(0,0,0,.4)` | `.note` sheet shadow (`0 8px 20px`), hero text-shadow (`0 1px 3px`) |
| `rgba(0,0,0,.45)` | snapshot print shadow (`0 7px 18px`), window mat shadow (`0 6px 18px`) |
| `rgba(0,0,0,.2)` | tape and print small shadows (`0 1px 3px`), scrap |
| `rgba(0,0,0,.12)` | phone scrap shadow |
| `rgba(236,227,199,.78)` | **tape — the only non-black rgba; tape is warm cream at 78%** |

**No danger color exists.** The accent role is `--rust`: submit hover, entry
dates, focus outlines.

### §2.5 The fence tile

`--fence-tile` holds one of two inline 512×512 seamless weathered-cedar WebP
data URIs (light / dark), repeated both axes. `background-color:
var(--fence)` shows through gap pixels and while the tile decodes. The board
IS the fence; no other background treatment exists.

---

## §3 Typography

### §3.1 Families (system stacks only; no font files, no `<link>`)

| Token | Stack |
|---|---|
| `--font-body` | `-apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` |
| `--font-display` | `Georgia, "Iowan Old Style", "Times New Roman", serif` |
| `--font-stub` | `"SFMono-Regular", Consolas, "Liberation Mono", monospace` |

### §3.2 Weight map — B9's law, amended by B12

Body text is **plain weight (400)**; bold belongs to headers, titles, and the
Send button (B12 — supersedes B9's entry-date exception). Shipped as one
grouped rule
(`.entry p, .note-face, .punch li, .need li, .need .materials li,
.archive-head, .fine { font-weight: 400 }`) plus `label`,
`.hero-line`, `.smallprint`, and `.punch .what`/`.need .what` all at 400.

**Bold (700) appears only on:** `button[type=submit]`, and the
computed h2 default behind `.note-title`/`.say-hi.flier`.

### §3.3 Sizes

| Element | Size |
|---|---|
| Body base | `16px / 1.5` |
| `h1` | Georgia, `clamp(1.45rem, 3.4vw, 2.1rem)`, nowrap, line-height 1.1 |
| `.note-title` | serif, `clamp(1rem, 1.6vw, 1.2rem)`, uppercase, letter-spacing 0.07em, 2px solid ink underline |
| `.note-face` | `clamp(0.9rem, 1.3vw, 1rem)` (phone `0.85rem`) |
| `.hero-line` | `0.85rem` flat at every viewport (#73), weight 400, max-width 72em |
| `.entry-date` | `--font-stub`, 400 (B12), `--rust`, letter-spacing 0.04em |
| `.smallprint` | `0.78rem` (phone `0.72rem`) |
| `.say-hi.flier` | same treatment as `.note-title` verbatim (B5: "there was no reason it should have been different") |

---

## §4 The sheet species

Everything on the board is one of three physical objects. When adding an
element, it joins an existing species — same values verbatim, no invented
texture (B5).

### §4.1 The `.note` paper sheet (week, plan, stories, and the Come Say Hi flier)

`background: var(--paper)`, `box-shadow: 0 8px 20px rgba(0,0,0,.4)`,
`padding: var(--space-3)`, `z-index: 2`, **two tape strips** via
`::before`/`::after`: 5.5rem × 1.7rem, `rgba(236,227,199,.78)`,
`0 1px 3px rgba(0,0,0,.2)`, `top: -0.8rem`, left 9% rotate(−4°) / right 9%
rotate(+3°), `pointer-events: none`, z-index 3. The tape recipe is duplicated
verbatim on `.head-lines` (B5); phone values: 4.6rem × 1.5rem, `top: -0.65rem`,
left/right 8%. Tilts (desktop): week −0.5°, plan +0.5°, stories −0.3°, Come
Say Hi −0.5°.

Face anatomy: `.note-title` (§3.3) + optional `.note-face` intro + content
panel. Week holds `.entry` items (dashed `--rule` bottom border, rust mono
dates); plan holds the `.punch` checkbox list (1.05rem square, 2px ink
border, `#fffdf6` fill). Header items (h1, hero, rule) are NOT paper — cream
serif and ink directly on the fence with text-shadow.

### §4.2 The photo print in a mat

`.cmp`: `#fffdf6` mat, `padding: var(--space-2)`,
`0 6px 18px rgba(0,0,0,.35)`, rotate 0.35°, `height: calc(100% - 2.1rem)`.
The photo letterboxes via `object-fit: contain` — the whole 1.61-aspect
photograph, never cropped (#75); drag/selection/pointer-events disabled. One
static print of the lot as it stands — "no comparison, no second angle" (#64).
No border lines of any kind (B8: "let the white space live"). The phone
`.snapshot` print is the same photograph, cover-cropped to 140px, one tape
strip, rotate −0.8°.

### §4.3 The flier

The Come Say Hi block is a `.note` sheet in all respects — B5 is its ruling.
Its values duplicate §4.1 verbatim; it carries no extra treatment.

---

## §5 Layout — the board

One spatial board: `body { overflow: hidden }` on desktop — one viewport, no
document scroll in any direction. `.board` is `100vh/100dvh`; the `.field`
children are absolutely pinned by percentage. Position encodes meaning
(the file's own architecture comment, verbatim): "**left = what happened**
(What We've Done), **center = the lot as it stands** (one pinned photo, #64),
**right = what's planned and needed** (What We'd Like To Do), **bottom center
= your turn** (Stories & Suggestions)."

### §5.1 Desktop pins

| Element | Pin |
|---|---|
| `.note--week` | `left: 1.2%; top: 2%; width: 20.5%; height: 96%` (#92: yields width to the center column) |
| `.window` | `left: 23.75%; top: 2%; width: 52.5%; height: calc(96% - var(--stories-block))`, z-index 1 (B15: centered on the board, equal 2.05% gaps to the week and plan sheets) |
| `.note--plan` | `left: 78.3%; top: 2%; width: 20.5%; height: calc(96% - clamp(194px, 470px - 19.2vw, 324px))` — B15 re-derived the pin and width (the week sheet's 20.5%; right edge stays 98.8%); the clamp reserves headroom for the flier's re-wrap, re-measured at #92 for the narrowed column (flier measures 299px at 761vw … 174px at 1440vw) and re-checked at B15 for the 20.5% wrap; the file notes these bounds are "agent-derived from the measured re-wrap; they are not an owner ruling" |
| `.note--stories` | `left: 23.75%; bottom: 2%; width: 52.5%` — never a scroll region, height content-driven (B15: centered on the board) |
| `.head-lines` | `right: 1.2%; bottom: 2%; width: 20.5%` (the plan sheet's own column, #63 pin, B5: "leave exactly where they are"; width follows B15's 20.5% plan column) |

Sheet clearances are computed, never eyeballed: `--stories-block: 19.25rem`
(the compacted #92 form's measured 308px height) and the plan sheet's clamp
are calc tokens, not guesses. #92's measured split at the issue's 1247×956
viewport: photo pane 55.3% of the middle pane's vertical space, stories
sheet 40.6% — B13 records why the 70-80/20-30 ask cannot go lower without
touching a ruled floor.

### §5.2 Scroll regions

Exactly two on desktop: `#panel-week` and `#panel-plan` —
`flex: 1 1 auto; min-height: 0; overflow-y: auto; overflow-x: hidden;`
(vertical only), each `tabindex="0"` `role="group"` with an aria-label, so
keyboard users can scroll them. On phone (≤760px, the only breakpoint) the
page scrolls instead — sheets print full-length in flow, `overflow: visible`
(Tinkerbell ruling t_599fbaee).

### §5.3 Phone (≤760px)

Single-column grid, areas `lines / snap / week / plan / stories`; `.window`
hidden, `.snapshot` shown; the lead becomes a real paper sheet with its own
tape; page-level scrolling with `overflow-x: clip` (horizontal scroll
forbidden everywhere).

---

## §6 Interaction

- **Zero JavaScript.** No `<script>` tags, no event handlers, no framework.
  Every behavior is CSS/HTML. Do not introduce JS unless the owner asks.
- **One external service:** the form POSTs to Formspree
  (`https://formspree.io/f/mbglkalb`). Everything else is data-URI inlined —
  zero other external requests.
- **Form:** name (optional), email (optional), story (required); `_gotcha`
  honeypot (CSS-hidden, `tabindex="-1"`, `aria-hidden="true"`); button "Send"
  (B4); textarea `min-height: 4rem` — three visible lines, scrollbar beyond
  (B6). **Never add a Referrer-Policy of `no-referrer`/`same-origin`** — B1's
  landmine: it gets real submissions marked as spam.
- **Focus:** scroll panels and inputs/button get `outline: 3px solid
  var(--rust)` (`outline-offset: 2px` panels / `1px` inputs) on
  `:focus-visible`.

---

## §7 Motion

The only transitions in the file live on `.note` — the "pin moves" that
animate sheet reflow between viewports:
`left .45s ease, top .45s ease, width .45s ease, height .45s ease, transform
.45s ease, opacity .3s ease`. Nothing else transitions, animates, or
keyframes. `prefers-reduced-motion: reduce` kills them (`transition: none`).
## §8 Radii and spacing

One radius in the entire file: `border-radius: 0` on form inputs —
everything is square. Spacing tokens: `--space-1: 0.35rem`,
`--space-2: 0.75rem`, `--space-3: 1.25rem`; deviations are declared raw
values with ruling comments in `index.html` (e.g. the flier's
`var(--space-3) 0.85rem 0.6rem` paper margin from B5's spec).

## §9 The favicon (B14)

One inline SVG data URI on `<link rel="icon">`, embedded in `index.html` —
the repo ships no icon files. The drawing is a picnic bench side profile on a
rounded-square field (rx 6 of 32): the field is the `--paper` tone, the
tabletop and bench-seat planks `--fence`, the legs `--rust` — the owner's
palette choice on issue #99: paper background, fence-brown bench, rust
accents. The seat plank overhangs the legs; the legs pass behind it to the
ground. An internal `@media (prefers-color-scheme: dark)` block inside the
SVG applies the §2.2 remaps (`--paper #3a3329`, `--ink-faded #b5ac9b` for
the planks — the dark `--fence` value is too close to the dark paper to
survive 16px, so the planks take the dark faded-ink tan instead — and
`--rust #dd8a4a`), so the icon re-tones with the browser's scheme. The SVG
ships only hexes the tokens already declare — no new values enter the §2
census.

---

*The rendered reference is the shipped `index.html` itself — there is no
separate specimen. Where this document and the render disagree, the render is
the earlier authority and the disagreement is a defect here.* (DRAFT: the
owner's amendment stands above this rule.)
