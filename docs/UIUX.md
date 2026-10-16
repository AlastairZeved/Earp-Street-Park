# UIUX.md — Earp Street Park

**Status:** DRAFT v1, reconstructed from the shipped `site/index.html` (one
HTML file with two same-origin self-hosted font requests, no build step) and the owner's rulings of record. The
governing law in UIUX §1 is the owner's, carried over verbatim. Everything else is
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
from the tokens' own comments in `site/index.html` (`:root`, quoted in the right
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
| `#fffdf6` | the photo mat (`.photo-mat`) and phone snapshot print stay this color in dark mode; form inputs and the What We Need flier's checkbox squares (B23) re-tone | `#2b2720` for the inputs and checkbox squares only (B23); the photo mats stay `#fffdf6` |

### §2.4 Shadows and tape

| Value | Where |
|---|---|
| `rgba(0,0,0,.4)` | `.note` sheet shadow (`0 8px 20px`), hero text-shadow (`0 1px 3px`) |
| `rgba(0,0,0,.45)` | snapshot print shadow (`0 7px 18px`) |
| `rgba(0,0,0,.35)` | h1 text-shadow (`0 2px 4px`), `.photo-mat` window mat shadow (`0 6px 18px`) |
| `rgba(0,0,0,.2)` | tape and print small shadows (`0 1px 3px`) |
| `rgba(236,227,199,.78)` | tape — warm cream at 78% |
| `rgba(20,17,12,.62)` | the B36 pop-up backdrop — dims the board while the flier takes over |
| `rgba(0,0,0,.55)` | the B36 pop-up card shadow (`0 24px 60px`) |

**No danger color exists.** The accent role is `--rust`: submit hover, entry
dates, focus outlines.

### §2.5 The fence tile

`--fence-tile` holds one of two inline 512×512 seamless weathered-cedar WebP
data URIs (light / dark), repeated both axes. `background-color:
var(--fence)` shows through gap pixels and while the tile decodes. The board
IS the fence; no other background treatment exists.

---

## §3 Typography

### §3.1 Families — Montserrat Alternates everywhere, self-hosted (B26; supersedes B24's Fira Sans stack and this section's old "system stacks only" rule)

One family renders the entire page: **Montserrat Alternates**, handrolled
Latin-subset woff2 committed in `site/fonts/` (400 and 700 — the weights the
weight map uses), self-hosted `@font-face` with `font-display: swap`, no CDN,
no API call, no dependency (issue #124; the handroll is transcribed from
TheBoards, the owner's named reference). All three tokens lead with it:

| Token | Stack |
|---|---|
| `--font-body` | `"Montserrat Alternates", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` (B26) |
| `--font-heading` | `"Montserrat Alternates", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` (B42 — heading role; same family as body) |
| `--font-entry-date` | `"Montserrat Alternates", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` (B42 — entry-date role; same family as body) |

The fallbacks stand only for systems where the font files fail to load.

### §3.2 Weight map — B9's law, amended by B12

Body text is **plain weight (400)**; bold belongs to headers, titles, and the
Send button (B12 — supersedes B9's entry-date exception). Shipped as one
grouped rule
(`.entry p, .note-face, .punch li, .needs-list li, .fine { font-weight: 400 }`)
plus `label`, `.hero-line`, and `.smallprint` all at 400.

**Bold (700) appears on:** `button[type=submit]`, `.flier-banner .flier--title h1`,
`.popup-flier--title h1`, and `.popup-close`; the computed h2 default behind
`.note-title`/`.needs-heading` and the header `<h1>` browser default are bold too.

**B24 — the body stack leads with Fira Sans.** *(Superseded by B26 —
Montserrat Alternates everywhere, self-hosted; retained for the record.)*
On machines where the only
installed Roboto face is Bold, `font-weight: 400` fell back to the Bold face
and every sans element on the page rendered bold (issue #114's render, the
third bold complaint: the weight map was already correct — the family stack
delivered a Bold-only family). Fira Sans exists with Regular + Bold, so the
Send button keeps its true bold and every 400 element renders a true regular.
The serif (`.note-title`, `h1`) and mono (`.entry-date`) species are unchanged
*(B26 later replaced those species' families too — see UIUX §3.1)*.

### §3.3 Sizes

| Element | Size |
|---|---|
| Body base | `16px / 1.5` |
| `h1` | `--font-heading` (Montserrat Alternates, B26), `clamp(1.45rem, 3.4vw, 2.1rem)`, nowrap, line-height 1.1, no added right margin (B42 R4: glyph-to-flier clearance 159.6/453.3/727.1px at 900/1200/1440×900) |
| `.note-title` | `--font-heading` (Montserrat Alternates, B26), `clamp(1rem, 1.6vw, 1.2rem)`, uppercase, letter-spacing 0.07em, 2px solid ink underline |
| `.note-face` | `clamp(0.9rem, 1.3vw, 1rem)` (phone `0.85rem`) |
| `.hero-line` | `0.85rem` flat at every viewport (#73), weight 400, max-width 72em, `margin-right: 50%` (B35, issue #151 — the hero wraps at the header's halfway line) |
| `.entry-date` | `--font-entry-date`, 400 (B12), `--rust`, letter-spacing 0.04em |
| `.smallprint` | `0.78rem`; only `.needs-flier .smallprint` is `0.72rem` on phone, while the stories-sheet smallprint stays `0.78rem` |
| `.needs-heading` | same treatment as `.note-title` verbatim (B5: "there was no reason it should have been different") |

---

## §4 The sheet species

Everything on the board is one of three physical objects. When adding an
element, it joins an existing species — same values verbatim, no invented
texture (B5).

### §4.1 The `.note` paper sheet (week, plan, stories)

`background: var(--paper)`, `box-shadow: 0 8px 20px rgba(0,0,0,.4)`,
`padding: var(--space-3)`, `z-index: 2`, **two tape strips** via
`::before`/`::after`: 5.5rem × 1.7rem, `rgba(236,227,199,.78)`,
`0 1px 3px rgba(0,0,0,.2)`, `top: -0.8rem`, left 9% rotate(−4°) / right 9%
rotate(+3°), `pointer-events: none`, z-index 3. B43 groups this desktop tape
recipe once across `.note`, `.needs-flier`, `.flier-banner .flier`, and
`.popup-flier`; the rendered values remain verbatim. On phone, `.note` and
`.needs-flier` share the 4.6rem × 1.5rem, `top: -0.65rem`, left/right 8%
override; the lead sheet and snapshot keep their distinct tape variants.
Tilts (desktop): week −0.5°, plan +0.5°, stories −0.3°.
(The Come Say Hi flier, a −0.5° member of the species through B30, was
removed by B32 — issue #142.)

Face anatomy: `.note-title` (UIUX §3.3) + optional `.note-face` intro + content
panel. Week holds `.entry` items (dashed `--rule` bottom border, rust dates
at weight 400 per B12); plan holds the `.punch` bullet list (disc bullets, 1.1rem indent; #113
replaced the checkbox squares). Header items (h1, hero, rule) are NOT paper — cream ink
directly on the fence with text-shadow. Montserrat Alternates is the only
font family throughout (B26).

### §4.2 The photo print in a mat

`.photo-mat`: `#fffdf6` mat, `padding: var(--space-2)`,
`0 6px 18px rgba(0,0,0,.35)`, rotate 0.35°. The mat hugs the print (#101): it
is as wide as the largest uncropped print the window pane can show — the
print's own 1600/995 aspect (the shipped photograph's natural size) measured
against the pane's height via its `container-type: size` (100cqh), capped by
the pane's width — and the print fills it edge to edge
(`.photo-mat-stage` carries `aspect-ratio: 1600 / 995`; `object-fit: contain`
coincides with full-bleed at that ratio), so no white mat margin is
introduced at any window shape. When the pane is narrower than the
height-derived mat (very tall windows) the width cap takes over and the mat
centers vertically in the pane instead. Browsers without container-query
support (below the site's dvh floor in a few Firefox/Safari versions) fall
back to the pre-#101 full-pane mat — photo letterboxed, #75 intact — rather
than a missing photo. The whole photograph, never cropped
(#75); drag/selection/pointer-events disabled. One static print of the lot as
it stands — "no comparison, no second angle" (#64). No border lines of any
kind (B8: "let the white space live"). The phone `.snapshot` print is the
same photograph, cover-cropped to 140px, one tape strip, rotate −0.8°.

### §4.3 The flier

The Come Say Hi block was a `.note` sheet in all respects — B5 was its
ruling; it was **removed by B32 (issue #142)**, its copy with it, and the
board's freed space goes to the Palooza board. Its species survives in the
**What We Need** flier (B23, issue
#110), which swaps into the middle pane's lower right under B25: the same
`.needs-flier` species verbatim (paper, tape, `0 8px 20px rgba(0,0,0,.4)`
shadow, −0.5° tilt, `.needs-heading` title), now the right half of
`.middle-row` (`margin-left: 50.5%; width: 49.5%`) and the bottom row's
height-setter. Its desktop tape declarations share the grouped B43 rule with
the paper sheets, header banner, and pop-up fliers; its phone values share the
`.note` override. The header title flier's attachment-specific CSS and markup
remain separate from the pop-up title flier's independent transcription (B43).
Its face is a checkbox list — the plan sheet's
retired checkbox squares (2.1rem indent, 1.05rem square, 2px `--ink` border,
`#fffdf6` fill; `#2b2720` dusk fill in dark), reinstated verbatim for this
flier's list only by the owner's in-chat ruling; the plan sheet stays the B22
disc-bullet list. The face prints at the `.smallprint` size (UIUX §3.3 — the
flier species' own body size, the size Come Say Hi's face printed; the
owner's in-chat size ruling). The list is not a scroll region. The right
pane's stack since B35 (issue #151) is GIVE US A SHOUT! alone: the **Park
Party Palooza flier board** — the Come Say Hi! flier before it, the story
flier, the seven small fliers, and every emoji — is removed entirely, and
the stories sheet returns to its own B25 pins (`right: 1.2%; bottom: 2%;
width: 20.5%`). The title-only flier moves up into the **header pane**
(B35, issue #151, the owner's attached banner cut transcribed):
`.flier-banner`, absolutely positioned in `.board-head`, `top: 0; bottom: 0`
— the header's own height, page-top line to the `.head-rule` border line —
`right: calc(1.2vw + 0.976 * clamp(0.75rem, 2vw, 1.75rem))` (the B25
column's shared right edge), `width: 0` as an anchor line, `z-index: 2`.
Its title-flier definition remains separate from the pop-up title's
independent attachment transcription; only their desktop tape declarations
are shared (B43).
The flier keeps the attachment's 700px width and −1° tilt
(`transform-origin: 100% 0`), its tape top edge on the header's top line
(the 0.8rem tape overhang is the flier's own top offset), and scales to fit
the header's height by ONE uniform factor —
`scale(tan(atan2(calc(100cqh - 0.8rem), 294px)))`, 294px the flier's
measured natural height at its 700px width in the shipped render — gated in
the file's `@supports (container-type: size)` pattern with the file's
hidden-fallback for browsers without container queries. The owner's rulings
of record: uniform scale off header height only, no width cap; the hero
paragraph wraps at the header's halfway line — `.hero-line` takes
`margin-right: 50%` (B35's superseding note; was B30's 21.7%), measured so
no hero glyph line runs under the flier at any sampled width ≥900vw (the
clearing bands are 49–52% at 900, 43–65% at 1000, 31–75% from 1200 up); at
761–880vw no wrap boundary clears (each extra wrap line grows the flier
~48px while the text retreats ~24px — measured exhaustively) and some line
ends still run under there; likewise
the tilted paper's bottom-left corner dips ~4.6px below the border line at
1440×1000 — "I accept the rotation of the tilted paper if it overlaps the
header border line a scoche." Interior values transcribe from the
attachment verbatim (paddings, type sizes, the pumpkins JPEG, the tape
strips) except the standing
adaptations: fonts through UIUX §3.1's single family (B26), the smallprint's
`text-shadow: none`, the h1's own ink (the header h1's cream
ink/shadow/nowrap must not ride along). On phone (≤760px) the banner joins
the header grid as its own row under the lead, full-width at the flier's
own 700/294 aspect, width-scaled by one `tan(atan2(100cqw, 700px))` factor
(origin 0 0) — "the flier should be stacked underneath the header and
header paragraph."

### §4.4 The on-load pop-up (B36)

A fixed overlay shows the Park Party Palooza flier on page load and is
dismissed by one CSS-only control (B16: zero JS). `.popup-overlay` —
`position: fixed; inset: 0; z-index: 1000`, backdrop `rgba(20,17,12,.62)` —
centres the `.popup` card: 480×535, `background: var(--paper)`,
`border: 6px solid var(--ink)`, `outline: 2px solid var(--rust)` at
`outline-offset: -11px`, `box-shadow: 0 24px 60px rgba(0,0,0,.55)`,
`overflow: hidden`. The close control `.popup-close` (40×40, `--rust` fill,
`--paper` ✕, `border-radius: 0 0 0 6px`) and the full-bleed `.popup-backdrop`
label are both `<label for="popup-toggle">` for a visually-hidden checkbox;
`.popup-toggle:checked ~ .popup-overlay { display: none }`. `.popup-stage`
(850×876, the mockup's own board composition) is centred and cover-fit by
`transform: translate(-50%,-50%) scale(0.611)`. Inside it the `.popup-flier`
species (`.note` paper, `0 8px 20px rgba(0,0,0,.4)` shadow, the two tape
strips `rgba(236,227,199,.78)` and their tilts) carries the title flier
(700px, −1°), the story flier, and seven small fliers whose sizes —
16/20/23/26/28/30/32px, all distinct — are, under UIUX §3.1's single font,
re-spaced to zero bounding-box overlap (B34's standing no-overlap ruling).
The pop-up title flier's CSS and markup remain separate from the header
banner's independent attachment transcription; only their desktop tape
declarations are shared (B43).
Emoji ride on the fliers (`.popup-tag-emoji`) and two perch on the title's
tape (`.popup-tape-emoji`); the palette is 🎃 👻 🍂 only. Fonts resolve through
UIUX §3.1 (B26); the chrome introduces no new hex (the attachment's darker-rust
hover shade is dropped, B36). **Desktop only**: `.popup-overlay` is
`display: none` at ≤760px (the owner's ruling).

---

## §5 Layout — the board

One spatial board: `body { overflow: hidden }` on desktop — one
viewport, no document scroll in any direction. `.board` is `100vh/100dvh`; the `.field`
children are absolutely pinned by percentage. Position encodes meaning
(the file's architecture comment describes the board this way): "**left = what happened**
(What We've Done), **center = the lot as it stands** (one pinned photo, #64)
above your turn and the ask (What We'd Like To Do beside WHAT WE NEED,
#122/B25 — the middle pane's bottom row), right = the
GIVE US A SHOUT! sheet alone in the right pane (#122, B25). The Palooza
board is gone: B35 removes its small fliers and emojis and moves the
title flier into the header pane, anchored top right above the
.head-rule border line, scaled to the header's height. The stories
sheet keeps the pane (B25's pins restored)."

### §5.1 Desktop pins

| Element | Pin |
|---|---|
| `.note--week` | `left: 1.2%; top: 2%; width: 20.5%; height: 96%` (B15: the side panes are equally sized; B18 supersedes B17's pane split: the plan is now 49.5% of `.middle-row`) |
| `.window` | `left: 22%; top: 2%; width: 56%; height: calc(96% - var(--needs-row))`, z-index 1, `container-type: size`, flex-centered (#101: the mat inside it hugs the print, UIUX §4.2; B18: the photo takes the middle pane's full width and the top of its stack) |
| `.popup-overlay` | (B36, UIUX §4.4) `position: fixed; inset: 0; z-index: 1000` — the on-load pop-up; not a `.field` child, desktop only |
| `.middle-row` | `left: 22%; bottom: 2%; width: 56%` — B18: the middle pane's bottom row; B25: holding `.note--plan` and the WHAT WE NEED flier as equal halves (49.5% each, 1% fence air between them). Dissolves to `display: contents` on phone |
| `.note--plan` | inside `.middle-row`: `position: absolute; left: 0; top: 0; bottom: 0; width: 49.5%` — B18: the row's left half, filling the height-setter's height exactly (B25: the WHAT WE NEED flier's natural height); `#panel-plan` keeps the sheet's vertical scrollbar. B15's right-pane pin and B17's photo-beside-plan pin are both superseded; the B15/#102 flier-headroom clamp is retired |
| `.needs-list` | inside `.middle-row` (B25): in flow, `position: relative; margin-left: 50.5%; width: 49.5%` — B23 created the flier pinned `top: 2%` in the right pane; B25 (issue #122) swaps it into the middle pane's lower right, the stories sheet's old slot and old job as the row's height-setter (#56 pattern: content-driven height, no scroll region). Same flier species as Come Say Hi (UIUX §4.3) |
| `.note--stories` | a direct `.field` child, pinned `right: 1.2%; bottom: 2%; width: 20.5%` (B25; B35 removed `.party-pane`). It keeps the `.note` species, −0.3° tilt, and #56's no-scroll rule; the form prints full-length inside the paper. B37 (issue #155): the Send button prints underneath the story field, which takes the form's full inner width; the sheet grows vertically to fit (content-driven height — +60px measured: button 48.4 + the rendered 11.5px gap) |


Sheet clearances are computed, never eyeballed: `--needs-row:
clamp(240px, 462px - 12vw, 365px)` (B25, re-measured for the new
height-setter — the WHAT WE NEED flier's natural re-wrap: 359.6px at 761vw,
~304px at 850–950vw, a flat ~288–291px band to 1350vw, ~235px at 1400vw and
above; the window yields the row's measured height at every sampled width —
measured air of 6.3px at 761vw, 10.7px at 1350vw, 6.2px at 1920vw,
over-reserving 35–61px where the flat re-wrap steps under the linear
preferred term, so the tape there prints over fence, not over the photo).
These are calc tokens, not guesses. #92's measured split at the issue's
1247×956
viewport: photo pane 55.3% of the middle pane's vertical space, stories
sheet 40.6% — B13 records why the 70-80/20-30 ask cannot go lower without
touching a ruled floor. Issue #101 changed the render B13 shipped: the mat
hugs the print now (UIUX §4.2), and no ruled floor is touched —
the B6 textarea floor and #75's never-crop all stand.
Issue #102 re-derived the pins (B15): the side panes are equally sized
(20.5% each), the middle pane is larger (56%) and centered between them —
0.3% fence air each side, the middle column's center at exactly 50% of the
field. Issue #109 moved the plan sheet into the middle pane (B17: the pane
split, photo beside plan); the owner's chat amendment of 2026-10-06 stacked
it instead (B18): the photo takes the pane's top at full 56% width, and the
plan and stories sheets share the pane's bottom row as equal halves — plan
left, stories right. Issue #122 (B25) swaps the fliers: WHAT WE NEED takes
the stories sheet's old right half of the bottom row, and the GIVE US A
SHOUT! sheet moves to the right pane. B32 (issue #142) removes the Come
Say Hi! flier; B35 (issue #151) removes the Palooza board and moves its
title-only flier into the header pane.

### §5.2 Scroll regions

Exactly two on desktop: `#panel-week` and `#panel-plan` —
`flex: 1 1 auto; min-height: 0; overflow-y: auto; overflow-x: hidden;`
(vertical only), each `tabindex="0"` `role="group"` with an aria-label, so
keyboard users can scroll them. On phone (≤760px, the only breakpoint) the
page scrolls instead — sheets print full-length in flow, `overflow: visible`
(Tinkerbell ruling t_599fbaee).

### §5.3 Phone (≤760px)

Single-column grid, areas `needs / snap / week / plan / stories`
(B23 adds the needs flier to the run; B32 (issue #142) removes the Come Say
Hi! flier and its `lines` grid row; B35 (issue #151) removes the Palooza
board and its `party` grid row);
`.window`
hidden, `.snapshot` shown; the lead becomes a real paper sheet with its own
tape; page-level scrolling with `overflow-x: clip` (horizontal scroll
forbidden everywhere).

---

## §6 Interaction

- **Zero JavaScript.** No `<script>` tags, no event handlers, no framework.
  Every behavior is CSS/HTML. Do not introduce JS unless the owner asks.
- **One external service:** the form POSTs to Formspree
  (`https://formspree.io/f/mbglkalb`). The two self-hosted Montserrat Alternates
  WOFF2 files are same-origin requests; there are no other external requests.
- **Form:** name (optional), email (optional), story (required); `_gotcha`
  honeypot (CSS-hidden, `tabindex="-1"`, `aria-hidden="true"`); button "Send"
  (B4), printing **underneath** the story field at the form's full inner
  width (B37, issue #155 — the #74 beside-arrangement is superseded); the
  button keeps its natural box (left aligned, `margin-top: var(--space-2)`)
  — the phone recipe at both breakpoints; textarea `min-height: 4rem` — three
  visible lines, scrollbar beyond
  (B6). **Never add a Referrer-Policy of `no-referrer`/`same-origin`** — B1's
  landmine: it gets real submissions marked as spam.
- **Focus:** scroll panels get `outline: 3px solid var(--rust)` with
  `outline-offset: 2px` on `:focus-visible`; inputs and the textarea use
  `:focus` with a 1px offset, while the button uses `:focus-visible`.
- **The on-load pop-up (B36).** Dismissed by CSS only: one visually-hidden
  `#popup-toggle` checkbox whose checked state sets `.popup-overlay` to
  `display: none`; the ✕ (`.popup-close`) and the backdrop (`.popup-backdrop`)
  are its `<label>`s. No JS, so Escape-to-close does not exist; the checkbox
  is the keyboard control and shows the rust focus ring on the ✕.

---

## §7 Motion

The only transitions in the file live on `.note` — the "pin moves" that
animate sheet reflow between viewports:
`left .45s ease, top .45s ease, width .45s ease, height .45s ease, transform
.45s ease, opacity .3s ease`. Nothing else transitions, animates, or
keyframes. `prefers-reduced-motion: reduce` kills them (`transition: none`).
## §8 Radii and spacing

CSS radii: `border-radius: 0` on form inputs, plus the B36 pop-up close
control's `0 0 0 6px` corner; everything else is square. The favicon SVG
also uses `rx="6"` and `rx="0.8"`. Spacing tokens: `--space-1: 0.35rem`,
`--space-2: 0.75rem`, `--space-3: 1.25rem`; deviations are declared raw
values with ruling comments in `site/index.html` (e.g. the flier's
`var(--space-3) 0.85rem 0.6rem` paper margin from #76).

## §9 The favicon (B14)

One inline SVG data URI on `<link rel="icon">`, embedded in `site/index.html` —
the repo ships no icon files. The drawing is a picnic bench side profile on a
rounded-square field (rx 6 of 32): the field is the `--paper` tone, the
tabletop and bench-seat planks `--fence`, the legs `--rust` — the owner's
palette choice on issue #99: paper background, fence-brown bench, rust
accents. The seat plank overhangs the legs; the legs pass behind it to the
ground. An internal `@media (prefers-color-scheme: dark)` block inside the
SVG applies the UIUX §2.2 remaps (`--paper #3a3329`, `--ink-faded #b5ac9b` for
the planks — the dark `--fence` value is too close to the dark paper to
survive 16px, so the planks take the dark faded-ink tan instead — and
`--rust #dd8a4a`), so the icon re-tones with the browser's scheme. The SVG
ships only hexes the tokens already declare — no new values enter the UIUX §2
census.

---

*The rendered reference is the shipped `site/index.html` itself — there is no
separate specimen. Where this document and the render disagree, the render is
the earlier authority and the disagreement is a defect here.* (DRAFT: the
owner's amendment stands above this rule.)
