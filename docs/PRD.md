# PRD.md — Earp Street Park

**Status:** DRAFT v1 of the specification, written after the fact — the site
was built first, and this document reconstructs its product reality from the
shipped `site/index.html` and the owner's rulings in `DECISIONS.md`. It describes
what the site **is**; it states no forward-looking design position. The owner
amends this document in review; until then it is descriptive.

**How to read this with the other records.** `UIUX.md` is the rendering
authority (every visual value; cited `UIUX §x`). `DECISIONS.md` is the
binding, append-only record of owner rulings (cited `B<n>`); where it
supersedes something here, it wins. Sections are numbered for citation.

---

## §1 What this is

Earp Street Park is the community-engagement website for one neighbor's work
restoring an abandoned lot on Earp Street. The meta description states the
whole product, verbatim: "One neighbor is fixing up the Earp Street lot — no
group, no committee — so the kids who already play here have somewhere worth
being. Follow the work, see what's next, and share your stories of the lot."

It is one `site/index.html` (1,066,797 bytes), alongside two self-hosted
Montserrat Alternates font files under `site/fonts/` (B26): no framework, no
build step, no package manager, no backend of its own, zero JavaScript, zero
external requests except one form endpoint. Keep it that way — do not
introduce a bundler, a framework, a script, a server, or a `.py`/test-harness
file unless the owner explicitly asks (B2 ruled the repo gets no `.py` file).

## §2 Who it is for

Neighbors on the block — people who might walk past the lot, see Rob (or
Brian) working, wonder what's happening, have lumber or paint or a fig tree
to offer, or carry a story about the lot. Non-technical by assumption: the
interface asks nothing, explains itself with physical metaphors (a fence, a
taped-up sheet), and works in light and dark and on a phone.

## §3 The board (UIUX §5)

The site is one spatial board — the file's architecture comment reads:
"The site is a spatial board: one desktop viewport; on phone, the document
scrolls (AGENTS.md fact 1). The stories form posts to Formspree; the two
self-hosted font files load from this site. There is no JavaScript and no
third-party asset request. Position encodes meaning:
left = what happened (What We've Done), center = the lot as it stands (one
pinned photo, #64) above your turn and the ask (What We'd Like To Do beside
WHAT WE NEED, #122/B25 — the middle pane's bottom row), right = the
GIVE US A SHOUT! sheet alone in the right pane (#122, B25). The Palooza
board is gone: B35 removes its small fliers and emojis and moves the
title flier into the header pane, anchored top right above the
.head-rule border line, scaled to the header's height. The stories
sheet keeps the pane (B25's pins restored). Every sheet prints its
content at rest; the week and plan sheets are the board's only scroll
regions (vertical only).
No JavaScript, no framework, no build step."

One viewport on desktop — no document scroll in any direction. On phone the
page scrolls and the sheets print full-length. Work performed stays visible:
the week sheet is a dated log of what was done (weeding, planted bushes,
dug-up planters), not a marketing page.

## §4 The surfaces

1. **Header** — "Earp Street Park" in Montserrat Alternates everywhere
   (B26), a double rule, and the hero passage ("Hey, we're Rob and Brian. …")
   printed directly on the fence. The title-only Park Party Palooza flier
   (`.flier-banner`) sits in the header pane above the border line (B35). On
   phone the hero becomes a paper sheet of its own.
2. **Give us a shout!** (right pane, alone since B35) — the contact form's
   `.note` paper sheet, in the fliers' 20.5% column; not a scroll region (#56).
3. **What We've Done** (left sheet) — the dated work log; one of the two
   scroll regions.
4. **The lot photo** (center window, the middle pane's top of stack — B18) —
   one static print of the lot as it
   stands, whole, letterboxed on its white mat (#64: no comparison, no second
   angle; #75: contain, never crop; B8: no border lines).
5. **What We'd Like To Do** (middle pane's bottom row, LEFT half — #109 as
   amended in chat, B18) — the wish list as a bullet
   list, alone (B7: no intro statement, no materials list); it is the second
   scroll region.
6. **What We Need** (middle pane's bottom row, RIGHT half, beside What
   We'd Like To Do — B25, swapping in from the right pane) — the checkbox
   flier (B23): materials wanted (slats, paint, a No Dumping sign, hip-height
   fencing, container trees); not a scroll region.
7. **Give us a shout!** (right pane, alone since B35) — a line above the
   form reading "If you see
   two guys out there working on stuff, come say hi! If not, drop us a
   message below." (B32, issue #142 — the removed Come Say Hi! flier's
   invitation, transplanted here by the owner), then the contact form: name
   and email optional, story required, "Send" (B4) underneath the story
   field (B37, issue #155), three visible lines with
   a scrollbar beyond (B6), posting to Formspree with a `_gotcha` honeypot.
   The form is the site's only external request.

## §5 What the site is not (observed reality)

No accounts, no comments, no analytics, no tracking, no cookies, no images
fetched from anywhere (both photographs and both fence tiles are inlined data
URIs), and no JavaScript. The inline-SVG favicon uses `<link rel="icon">`
(B14). The form is the only write path, and it goes to a third-party form
service, not a database. The
security posture is the owner's ruling, not an omission: B16's CSP, B27's
`font-src 'self'`, and B28's HSTS and `nosniff` headers supersede B1's
accepted no-security-headers risk. B1's standing caution never to add a
Referrer-Policy that would mark real neighbours' submissions as spam remains.

## §6 Delivery and truth-in-artifact

The published site lives in `site/`; `netlify.toml` sets that directory as
Netlify's publish directory (B39). Repository documentation, tests, and agent
instructions are outside the published site. The site deploys from the
`deploy` branch on Netlify (B10): `main` is the working branch, and the owner promotes it to
`deploy` manually, once deploy-ready, with the fast-forward
`git push origin main:deploy`. The file is self-documenting by comment
convention: CSS blocks cite their ruling numbers (#16, #22, #31, #64, #70,
#75, #81, #86, …), distinguish "owner ruling" from "agent-derived", and
`STUB:` markers name deploy-time fill-in points; the workday sheet contains
three real entries.
Deploy previews on Netlify are KEPT by ruling (B1): every proposed change is
publicly reviewable before it is accepted.

## §7 How this specification changes

Product changes are owner rulings first: they land as issues, get transcribed
into `DECISIONS.md` verbatim with a `Source:` line (never authored by an
agent), and any `UIUX.md` sections they name move in the same PR. The history
of the `AI Slop`-labeled issues (#68, #69, #70, #81, #82, #84, #86, #92,
#93) is the
record of what happens when agents improvise instead of transcribing — the
corrected patterns (plain-weight body text, the flier species, "Send", the
B22 disc-bullet plan list, B23's checkbox list on WHAT WE NEED, no invented
borders) are now pinned in `UIUX.md` and this file.
