# PRD.md — Earp Street Park

**Status:** DRAFT v1 of the specification, written after the fact — the site
was built first, and this document reconstructs its product reality from the
shipped `index.html` and the owner's rulings in `DECISIONS.md`. It describes
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

It is a **single self-contained `index.html`** (~950KB): no framework, no
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

## §3 The board (§UIUX 5)

The site is one spatial board, and the board IS the wooden fence — the
file's architecture comment, verbatim: "Position encodes meaning: left = what
happened (What We've Done), center = the lot as it stands (one pinned photo,
#64), right = what's planned and needed (What We'd Like To Do), bottom center
= your turn (Stories & Suggestions). Every sheet prints its content at rest;
the week and plan sheets are the board's only scroll regions (vertical
only)."

One viewport on desktop — no document scroll in any direction. On phone the
page scrolls and the sheets print full-length. Work performed stays visible:
the week sheet is a dated log of what was done (weeding, planted bushes,
dug-up planters), not a marketing page.

## §4 The five surfaces

1. **Header** — "Earp Street Park" in cream serif on the fence, a double
   rule, and the hero passage ("Hey, we're Rob and Brian. …") printed
   directly on the fence. On phone the hero becomes a paper sheet of its own.
2. **The Come Say Hi! flier** (bottom right) — a real paper flier (B5): tape,
   sheet shadow, left-anchored, inviting conversation in person ("come say
   hi!").
3. **What We've Done** (left sheet) — the dated work log; one of the two
   scroll regions.
4. **The lot photo** (center window) — one static print of the lot as it
   stands, whole, letterboxed on its white mat (#64: no comparison, no second
   angle; #75: contain, never crop; B8: no border lines).
5. **What We'd Like To Do** (right sheet) — the wish list as a checkbox
   list, alone (B7: no intro statement, no materials list); it is the second
   scroll region.
6. **Give me a shout!** (bottom center) — the contact form: name and email
   optional, story required, "Send" (B4), three visible lines with a
   scrollbar beyond (B6), posting to Formspree with a `_gotcha` honeypot.
   This is the site's one interactive act and its one external request.

## §5 What the site is not (observed reality)

No accounts, no comments, no analytics, no tracking, no cookies, no images
loaded from anywhere (both photographs and both fence tiles are inlined data
URIs), no favicon, no `<link>` tags, no JavaScript. The form is the only
write path, and it goes to a third-party form service, not a database. The
security posture is the owner's ruling, not an omission: four findings are
accepted risks with recorded reasons (B1) — including no branch lock on the
branch the site deploys from, and no security headers, with B1's standing
caution never to add a Referrer-Policy that would mark real neighbours'
submissions as spam.

## §6 Delivery and truth-in-artifact

The repository root IS the site; deploying is publishing `main`. The file is
self-documenting by comment convention: CSS blocks cite their ruling numbers
(#16, #22, #31, #64, #70, #75, #81, #86, …), distinguish "owner ruling" from
"agent-derived", and `STUB:` markers name deploy-time fill-in points (the
most recent workday's date and body are honest stubs — "nothing done yet: the
honest start"). Deploy previews on Netlify are KEPT by ruling (B1): every
proposed change is publicly reviewable before it is accepted. A declared
GitHub Pages workflow (`.github/workflows/pages.yml`) makes the deploy a
visible, checkable run rather than a silent one.

## §7 How this specification changes

Product changes are owner rulings first: they land as issues, get transcribed
into `DECISIONS.md` verbatim with a `Source:` line (never authored by an
agent), and any `UIUX.md` sections they name move in the same PR. The history
of the `AI Slop`-labeled issues (#68, #69, #70, #81, #82, #84, #86) is the
record of what happens when agents improvise instead of transcribing — the
corrected patterns (plain-weight body text, the flier species, "Send", the
checkbox list alone, no invented borders) are now pinned in `UIUX.md` and
this file.
