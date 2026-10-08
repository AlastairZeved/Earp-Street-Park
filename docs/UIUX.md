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
| `--post-tile` | inlined WebP data URI (§2.6) | "authored square galvanized steel post tile (600x512, vertically seamless; left 100px a transparent contact-shadow ramp, right 500px the post face) — day — #141 (B36)" |

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
| `--post-tile` | inlined WebP data URI (§2.6) | "the same post at dusk — #141 (B36)" |

### §2.3 Hard-coded surfaces (re-toned in dark)

| Value | Light role | Dark value |
|---|---|---|
| `#fffdf6` | the photo mat (`.cmp`), form inputs, the phone snapshot print, the What We Need flier's checkbox squares (B23) | `#2b2720` ("form inputs go dusk-dark"; the checkbox squares go with them, B23) |
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
The board IS the fence; no other background treatment exists.

### §2.6 The square galvanized steel post — one built fence (B36; supersedes B35's render)

The right pane's background is not a stripe on the fence — it is ONE built
fence (B36, issue #141; the owner rejected B35's gradient as "you just took
the same background and slapped a new component on it and called it
'pole'"). The body's plank tile (§2.5, retained) stays the field, and an
authored square galvanized steel tube post rises over it at the pane's left
edge: the planks visibly butt into the post — they run right up to its left
edge, the post overlaps them with a contact shadow, so the fence reads as
built onto the post. The post's form is the owner's ruling verbatim: a
"square galvanized steel tube post (the 4x4-style steel post real wood
fences rig onto) — flat faces with edge highlights, reads unmistakably as
metal." The rendering is also the owner's choice: an authored bitmap WebP
tile ("more photoreal, but a new invented texture" — sanctioned by the
choice).

`--post-tile` (§2.1/§2.2) is one 600×512 vertically-seamless WebP data URI
per theme (day / dusk). Left to right: a 100px transparent zone carrying a
baked rightward-increasing contact-shadow gradient (it darkens the planks
beneath it), then the post face — a flat front face with distinct left and
right side planes, vertical edge highlight/shadow lines at each plane
boundary, subtle vertical brushed/rolling streak variation so it never
reads as a flat CSS gradient, and NO bolts, hardware, or top/bottom caps
(the post runs the full viewport height, B35's extent ruling standing). The
palette is cool NEUTRAL grey — clearly LIGHTER than the cedar and
temperature-separated from it, so the post reads unmistakably as galvanized
steel, not wood (day front face ~`rgb(154 160 165)` against cedar
`#6b6055`, specular edge highlights ~`rgb(196 201 205)`, dark edge lines
~`rgb(109 115 120)`; dusk face ~`rgb(86 91 96)` against `#2e2921`,
highlights ~`rgb(123 129 134)`, edges ~`rgb(58 63 68)`) — no warm or brown
cast anywhere in the face; the hexes live inside the bitmap's pixels and
are not tokens (the same convention as `--fence-tile`).

Layering: `.party-pane::before` paints the face — `position: fixed;
top: 0; bottom: 0; right: 0`, width `calc(21.7vw + 0.566 *
clamp(0.75rem, 2vw, 1.75rem))` (the pane's own width PLUS its right margin
— the same anchor arithmetic the pane uses, since the pane is fixed and
the pseudo's geometry is viewport-relative), with the tile's 500px face
columns scaled onto that width exactly (×1.2, anchored right), so the
post's left edge lands on the pane's left edge and its right edge is the
viewport's — a terminal post at the fence's far right, no planks right of
it. `.party-pane::after` paints the contact-shadow strip: its right edge at
the post's left edge (`right:` the same calc), `clamp(36px, 3.4vw, 56px)`
wide, the tile's 100px shadow columns scaled onto it (×6). Both layers
`repeat-y` at 512px — the tile's vertical seamlessness means no horizontal
seam shows across the full height. Both paint at `z-index: -1` inside the
pane's stacking context: above the fence, below every pane child. Desktop
only — on phone the pane dissolves to `display: contents` and both
pseudo-elements are suppressed with it.

---

## §3 Typography

### §3.1 Families — Montserrat Alternates everywhere, self-hosted (B26; supersedes B24's Fira Sans stack and this section's old "system stacks only" rule)

One family renders the entire page: **Montserrat Alternates**, handrolled
Latin-subset woff2 committed in `fonts/` (400 and 700 — the weights the
weight map uses), self-hosted `@font-face` with `font-display: swap`, no CDN,
no API call, no dependency (issue #124; the handroll is transcribed from
TheBoards, the owner's named reference). All three tokens lead with it:

| Token | Stack |
|---|---|
| `--font-body` | `"Montserrat Alternates", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` (B26) |
| `--font-display` | `"Montserrat Alternates", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` (B26 — the Georgia serif stack is replaced) |
| `--font-stub` | `"Montserrat Alternates", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` (B26 — the mono stack is replaced) |

The fallbacks stand only for systems where the font files fail to load.

### §3.2 Weight map — B9's law, amended by B12

Body text is **plain weight (400)**; bold belongs to headers, titles, and the
Send button (B12 — supersedes B9's entry-date exception). Shipped as one
grouped rule
(`.entry p, .note-face, .punch li, .head-lines--needs li, .need li, .need
.materials li, .archive-head, .fine { font-weight: 400 }`) plus `label`,
`.hero-line`, `.smallprint`, and `.need .what` all at 400.

**Bold (700) appears only on:** `button[type=submit]`, and the
computed h2 default behind `.note-title`/`.say-hi.flier`.

**B24 — the body stack leads with Fira Sans.** *(Superseded by B26 —
Montserrat Alternates everywhere, self-hosted; retained for the record.)*
On machines where the only
installed Roboto face is Bold, `font-weight: 400` fell back to the Bold face
and every sans element on the page rendered bold (issue #114's render, the
third bold complaint: the weight map was already correct — the family stack
delivered a Bold-only family). Fira Sans exists with Regular + Bold, so the
Send button keeps its true bold and every 400 element renders a true regular.
The serif (`.note-title`, `h1`) and mono (`.entry-date`) species are unchanged
*(B26 later replaced those species' families too — see §3.1)*.

### §3.3 Sizes

| Element | Size |
|---|---|
| Body base | `16px / 1.5` |
| `h1` | `--font-display` (Montserrat Alternates, B26), `clamp(1.45rem, 3.4vw, 2.1rem)`, nowrap, line-height 1.1 |
| `.note-title` | `--font-display` (Montserrat Alternates, B26), `clamp(1rem, 1.6vw, 1.2rem)`, uppercase, letter-spacing 0.07em, 2px solid ink underline |
| `.note-face` | `clamp(0.9rem, 1.3vw, 1rem)` (phone `0.85rem`) |
| `.hero-line` | `0.85rem` flat at every viewport (#73), weight 400, max-width 72em, `margin-right: 21.7%` (B30, issue #138 — the header text block's right boundary is the flier column's left edge, the owner's pane map; `.board-head h1` carries the same margin) |
| `.entry-date` | `--font-stub`, 400 (B12), `--rust`, letter-spacing 0.04em |
| `.smallprint` | `0.78rem` (phone `0.72rem`) |
| `.say-hi.flier` | same treatment as `.note-title` verbatim (B5: "there was no reason it should have been different") |

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
rotate(+3°), `pointer-events: none`, z-index 3. The tape recipe is duplicated
verbatim on `.head-lines` (B5); phone values: 4.6rem × 1.5rem, `top: -0.65rem`,
left/right 8%. Tilts (desktop): week −0.5°, plan +0.5°, stories −0.3°.
(The Come Say Hi flier, a −0.5° member of the species through B30, was
removed by B32 — issue #142.)

Face anatomy: `.note-title` (§3.3) + optional `.note-face` intro + content
panel. Week holds `.entry` items (dashed `--rule` bottom border, rust mono
dates); plan holds the `.punch` bullet list (disc bullets joining the
`.need .materials` species — 1.1rem indent; #113 replaced the checkbox
squares). Header items (h1, hero, rule) are NOT paper — cream
serif and ink directly on the fence with text-shadow.

### §4.2 The photo print in a mat

`.cmp`: `#fffdf6` mat, `padding: var(--space-2)`,
`0 6px 18px rgba(0,0,0,.35)`, rotate 0.35°. The mat hugs the print (#101): it
is as wide as the largest uncropped print the window pane can show — the
print's own 1600/995 aspect (the shipped photograph's natural size) measured
against the pane's height via its `container-type: size` (100cqh), capped by
the pane's width — and the print fills it edge to edge
(`.cmp-stage` carries `aspect-ratio: 1600 / 995`; `object-fit: contain`
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
`.head-lines` species verbatim (paper, tape, `0 8px 20px rgba(0,0,0,.4)`
shadow, −0.5° tilt, `.say-hi.flier` title), now the right half of
`.middle-row` (`margin-left: 50.5%; width: 49.5%`) and the bottom row's
height-setter.
Its face is a checkbox list — the plan sheet's
retired checkbox squares (2.1rem indent, 1.05rem square, 2px `--ink` border,
`#fffdf6` fill; `#2b2720` dusk fill in dark), reinstated verbatim for this
flier's list only by the owner's in-chat ruling; the plan sheet stays the B22
disc-bullet list. The face prints at the `.smallprint` size (§3.3 — the
flier species' own body size, the size Come Say Hi's face printed; the
owner's in-chat size ruling). The list is not a scroll region. The right
pane's stack since B32 is the **Park Party Palooza flier board** (issue
#132) above GIVE US A SHOUT! (B32, issue #142, removing the Come Say Hi!
flier that B29 placed between them) — one flex column,
`.party-pane`, whose fit region is the column
itself from the very top of the page down to just above the GIVE US A
SHOUT! sheet: the board scale-to-fits that region (never wider than the column,
never clipped, never overlapping the photo or the header text), centered
horizontally in it, anchored to the TOP of the page (the owner's ruling:
"the park party flier should anchor to the top of the page") — the scaled
board hangs from the page top and grows downward, stopping above GIVE US A
SHOUT! without overlapping it — so the board
lies both above and below the `.head-rule` divider line wherever its
scaled height reaches it (B29's overlap ruling, extended to the page top
by B30; the owner's annotated screenshot rules the region — the Come Say
Hi column, page top to its top edge, the flier centered within). The
header text block wraps within the field's left 78.3% (`margin-right:
21.7%` on `.board-head h1` and `.hero-line` — the owner's pane map rules
its right boundary at the column's left edge), so the board never covers
the title or paragraph at any sampled viewport. The
pane's gap is the family `--space-3`, so the issue's
"just above, without overlapping" clearances hold in flow with nothing
measured. The Palooza board is the owner's attached mockup transcribed
wholesale: an 850×876 `.stage` holding nine fliers (the title flier with
its pumpkins JPEG art, rust "Palooza" span, where/when lines, and italic
rain-date fine print; the story flier; Baked Goods; Bobbing for Apples; Hot
Chocolate; Good Tunes; Face Painting; Mulch the Planters; Candy for the
Kids), every px value the updated attachment (#146, B34) unmodified except the
small fliers, which the owner re-spaced in chat 2026-10-08 (the site's
Montserrat Alternates sets wider than the mockup's Georgia and three pairs
collided at the attachment's own positions; B34's record holds the final
measured positions/sizes, seven distinct faces 19–32px, zero overlaps at
every sampled desktop viewport), scaled
by one `min(tan(atan2(100cqw, 850px)), tan(atan2(100cqh, 876px)))` transform
factor (container-query units — agent-derived mechanic), origin `50% 0`
(B30: anchored to the page top), `overflow: clip` (the mockup's own crop —
its bottom emoji row sits past y=876 and was never visible in the
attachment). The emojis ride ON the fliers (`.tag-emoji`) and two perch on
the title's tape (`.tape-emoji`) — the fifteen scattered fence emojis are
gone with the fence (B34, issue #146). The stage is TRANSPARENT (B34, issue
#146 — the owner's updated attachment removes the fence; supersedes B29's
issue #135 superseding note, "background included"): no `background-color`,
no `background-image` — the board sits on the site and the site's own fence
shows through. Behind the whole run, the pane's own background is the
**square galvanized steel post** (B36, issue #141, §2.6; supersedes B35's
gradient): an authored steel-post tile whose face covers the pane's width
plus its right margin — full viewport height, left edge on the pane's left
edge, right edge at the viewport's — painted below the fliers, with the
planks butting into it under a baked contact shadow — the sheets' existing
tape strips read as taping the Palooza board and GIVE US A SHOUT! to the
post.
Its fonts resolve through
§3.1's single family (B26: the mockup's Georgia/system stacks never ship);
its paper, tape, and shadow are the §4.1 species' own values. The scaling is gated in the
file's own `@supports (container-type: size)` pattern (the .window/.cmp
block's), with a hidden-stage fallback for browsers without container
queries — otherwise the cqw/cqh units would resolve against the viewport
and the board would paint several times too large. B25's measured pair
envelope (~723px of viewport height at 1247vw) and B29's fit envelope
(≈930px at 761vw) are both superseded by B30: the fit region starts at
the page top, so the former zero-render band is gone — the board scales
down continuously with the space and renders at every sampled desktop
viewport (measured: 144×149px at 761×960 where B29 recorded 9.7px; 119×123
at 1200×800 where B29 recorded 0.0px).

---

## §5 Layout — the board

One spatial board: `body { overflow: hidden }` on desktop — one viewport, no
document scroll in any direction. `.board` is `100vh/100dvh`; the `.field`
children are absolutely pinned by percentage. Position encodes meaning
(the file's own architecture comment, verbatim): "**left = what happened**
(What We've Done), **center = the lot as it stands** (one pinned photo, #64)
above your turn and the ask (What We'd Like To Do beside WHAT WE NEED,
#122/B25 — the middle pane's bottom row), right = the Come Say Hi! flier
with the GIVE US A SHOUT! sheet below it, stacked in the pane (#122, B25).
#132: the right pane's run gains the Park Party Palooza flier board (the
owner's attachment, transcribed) above the stories sheet; the run reaches
up into the header pane to the .head-rule and scale-to-fits the space.
#142 (B32): the Come Say Hi! flier is removed — the board takes its space,
and the run is board above GIVE US A SHOUT!."

### §5.1 Desktop pins

| Element | Pin |
|---|---|
| `.note--week` | `left: 1.2%; top: 2%; width: 20.5%; height: 96%` (B15: the side panes are equally sized; B17: the plan sheet leaves the right pane at 27.5%, so the two sheets' widths no longer match — the week sheet's 20.5% stands) |
| `.window` | `left: 22%; top: 2%; width: 56%; height: calc(96% - var(--stories-row))`, z-index 1, `container-type: size`, flex-centered (#101: the mat inside it hugs the print, §4.2; B18: the photo takes the middle pane's full width and the top of its stack) |
| `.middle-row` | `left: 22%; bottom: 2%; width: 56%` — B18: the middle pane's bottom row; B25: holding `.note--plan` and the WHAT WE NEED flier as equal halves (49.5% each, 1% fence air between them). Dissolves to `display: contents` on phone |
| `.note--plan` | inside `.middle-row`: `position: absolute; left: 0; top: 0; bottom: 0; width: 49.5%` — B18: the row's left half, filling the height-setter's height exactly (B25: the WHAT WE NEED flier's natural height); `#panel-plan` keeps the sheet's vertical scrollbar. B15's right-pane pin and B17's photo-beside-plan pin are both superseded; the B15/#102 flier-headroom clamp is retired |
| `.head-lines--needs` | inside `.middle-row` (B25): in flow, `position: relative; margin-left: 50.5%; width: 49.5%` — B23 created the flier pinned `top: 2%` in the right pane; B25 (issue #122) swaps it into the middle pane's lower right, the stories sheet's old slot and old job as the row's height-setter (#56 pattern: content-driven height, no scroll region). Same flier species as Come Say Hi (§4.3) |
| `.note--stories` | inside `.party-pane` (B29): in flow, the column's bottom sheet — the pane carries the `right: 1.2%; bottom: 2%; width: 20.5%` pins B25 set here (issue #122; keeps the `.note` species, −0.3° tilt, #56: never a scroll region, the form prints full-length inside the paper). B18's middle-row right-half pin is superseded |
| `.head-lines` | the Come Say Hi flier's species — removed from the board by B32 (issue #142); the rules now serve the WHAT WE NEED flier (B23) only, which lives in `.middle-row` (row above). B29's party-pane re-pin is removed with it |
| `.party-pane` | B30 (issue #138): `position: fixed; top: 0; right: calc(1.2vw + 0.976 * clamp(0.75rem, 2vw, 1.75rem)); width: calc(20.5vw - 0.41 * clamp(0.75rem, 2vw, 1.75rem)); bottom: calc(clamp(0.5rem, 1.4vh, 1rem) + 2vh - 4px)` — the right pane as one flex column whose fit region is the Come Say Hi column itself from the very top of the page down to just above the pane's last flier, GIVE US A SHOUT! since B32 (issue #142; the B29 re-derivation at viewport scale: `.field` spans 100vw minus body's side padding, `clamp(0.75rem, 2vw, 1.75rem)` a side, so `right` = padding + 1.2% of the field's width and `width` = 20.5% of it — a flat-margin first draft came out up to 5.3px narrow at 761vw; `bottom` keeps the field's 2% pin — body's bottom padding `clamp(0.5rem, 1.4vh, 1rem)` + 2% of field height, the field's top edge 183.5–238.4px down across the desktop band making its 2% a ~4px constant, measured residual ≤0.4px against main). Holding the Palooza board and GIVE US A SHOUT! in flow (Come Say Hi! removed by B32), gap `var(--space-3)`. Dissolves to `display: contents` on phone — and its own `::before`/`::after` post layers, the square steel post (B36, §2.6), are suppressed with it |
| `.party-stage` | inside `.party-pane`: `flex: 1 1 0; min-height: 0; container-type: size; overflow: clip` (both gated in `@supports (container-type: size)` — the file's own .window/.cmp pattern; a browser without container queries gets `display: none` on the stage rather than a viewport-scaled board) — B29, fit region re-anchored by B30 (issue #138): the Palooza board takes the column from the page top down to whatever the pane's last flier leaves (GIVE US A SHOUT! since B32, issue #142 — the removed Come Say Hi! flier's space goes to the board); its `.stage` (the mockup's 850×876 composition, transcribed wholesale) scales by `min(tan(atan2(100cqw, 850px)), tan(atan2(100cqh, 876px)))`, origin `50% 0` — centered horizontally in the column (never wider than it), anchored to the TOP of the page (the owner's ruling: "the park party flier should anchor to the top of the page"), hanging from the page top and growing downward, stopping above GIVE US A SHOUT! without overlapping it. On phone, its own grid row (`party`, above the stories sheet) at `aspect-ratio: 850/876`, inline-size container, width-scaled, origin `0 0` |

Sheet clearances are computed, never eyeballed: `--stories-row:
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
hugs the print now (§4.2), and no ruled floor is touched —
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
SHOUT! sheet moves to the right pane below the Come Say Hi! flier.

### §5.2 Scroll regions

Exactly two on desktop: `#panel-week` and `#panel-plan` —
`flex: 1 1 auto; min-height: 0; overflow-y: auto; overflow-x: hidden;`
(vertical only), each `tabindex="0"` `role="group"` with an aria-label, so
keyboard users can scroll them. On phone (≤760px, the only breakpoint) the
page scrolls instead — sheets print full-length in flow, `overflow: visible`
(Tinkerbell ruling t_599fbaee).

### §5.3 Phone (≤760px)

Single-column grid, areas `party / needs / snap / week / plan / stories`
(B29 adds the Palooza board at the top of the flier run, above Come Say Hi —
the desktop stacking order, its own grid row at the stage's own 850/876
aspect ratio; B23 adds the needs flier next in the run — the #46
top-of-flow pin is not moved; B32 (issue #142) removes the Come Say Hi!
flier and its `lines` grid row, the run reading needs / party / stories);
`.window`
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
