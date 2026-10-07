# DECISIONS.md — Earp Street Park

Where `docs/PRD.md` / `docs/UIUX.md` make a statement about the site, it is
followed exactly. This file records choices the site's history has already
settled: every entry is a **transcription of an owner ruling**, quoted
verbatim from its issue of record, never authored or paraphrased by an agent.

---

> ## Record law (source of record: owner direction in chat with the site's
> owner, 2026-10-05, reproduced in AGENTS.md "Never do (record law)")
>
> `docs/DECISIONS.md` is law, and law is stated by the owner, never authored
> by an agent. Agents transcribe owner decisions; they do not make them.
> Every entry in this file carries a `Source:` line quoting the owner's
> statement verbatim, with a link to the issue (or PR comment) it came from.
> An entry without a source line is not law — it is an agent invention, and
> any QA pass may delete it on sight. Agents never author, amend, or
> supersede rulings except to transcribe an owner statement.
>
> **Append only.** An entry is superseded by a later ruling, never edited
> away. New rulings continue here as `B10`+, in ascending order. `test/records.js`
> guards this file's citation space in CI: unique ascending `### B<n>`
> headings, and a `Source:` line on every entry.
>
> **Grep this file before changing copy, the flier, the form, the lot photo,
> body-text weight, or the repository's contents.** A prior ruling has very
> likely already answered the question — several of the entries below exist
> precisely because the same correction had to be made more than once.

---

## B. Seeded rulings of record

The entries below are the owner rulings from this repository's issue history
that carry an explicit marker of owner authority — the `AI Slop` label (the
owner's own tag for corrections to agent work) or an explicit owner-ruling
title — transcribed verbatim. Earlier design corrections without that marker
are not recorded here; they remain visible in the issue tracker.

### B1. Four security findings are accepted risks, not defects — no branch lock, no security headers, the dev script stays deletable history, authorship stays unsigned; PR previews are KEPT and an owned domain is NOT NOW (issue #45, the owner's rulings of record; supersedes the standing "disclosed defects are repaired to zero" standard for exactly these four items; waives nothing else)

**Source:** issue #45 (owner, ruling of record), transcribed verbatim: "Four security findings from the 2026-09-28 audit of this repository are accepted without a fix. Each is recorded with the reason it was accepted, because the standing standard in this project is that a disclosed defect gets repaired to zero rather than noted. This is the first ruling the other way, so this issue exists to say why it is different — not merely that it is." — https://github.com/AlastairZeved/Earp-Street-Park/issues/45

The four accepted findings, in the ruling's own words:

1. **`main` has no lock** — "*Reason accepted:* this is a neighbourhood park site, and the owner ruled that this record may be rewritten. Making the repository public instead would have published the issue history and the owner's email address, which appears in 21 commits."
2. **The site sends no security headers** — "*Reason accepted:* nothing exploits it, and the page offers almost nothing to exploit." — carrying the ruling's standing caution, verbatim: "**Standing caution — the landmine.** If a security-header pass is ever done, do **not** add `Referrer-Policy: no-referrer` or `same-origin`. Either one stops the browser sending the `Referer` header, and Formspree's documentation states plainly that submissions will then be **marked as spam** — every real neighbour's note. `strict-origin-when-cross-origin` is the strictest setting that is safe here, and doing nothing is already equivalent to it in current browsers."
3. **The dev script is served publicly** — "*Reason accepted:* nothing in the file is worth having, and moving the site into a subfolder would rewrite the relative paths that script itself depends on. More risk than the disclosure is worth." (The script was subsequently deleted entirely by B2.)
4. **Authorship is spoofable** — "*Reason accepted:*" signing was "Considered and declined… Recorded here so the gap is on the record rather than half-defended."

The owner's follow-up comment on the same issue ruled, verbatim: "**Pull-request previews: KEPT.** Every proposed change to the site is published at its own public address (`deploy-preview-<N>--earp-street-park.netlify.app`) before it is accepted. The owner ruled to keep them: the finished page is public and always will be, so a preview only exposes an unapproved draft, and the preview is how a change gets looked at before it is accepted." and "**A domain of the owner's own: NOT NOW.** … Deferred rather than dismissed: the lot is early and nothing is public-facing yet."

**The record.** Closed with no code change. The audit trail the ruling cites lives in issues #43 (findings) and #44 (Actions).

### B2. No `.py` files in this repository — `check_plan_titles.py` deleted (issue #54, owner ruling)

**Source:** issue #54 (owner ruling), transcribed verbatim: "`check_plan_titles.py` is a 19 KB playwright test harness (binds [IP_ADDRESS], serves `index.html` to a headless browser, asserts layout laws for #43–#50). Owner ruling, chat 2026-09-29: the repo gets no `.py` file — delete it." — https://github.com/AlastairZeved/Earp-Street-Park/issues/54

**The record.** Merged via PR #55 (`3a6d655`), leaving `index.html` as the only tracked file on `main` at the time. The ruling's own acceptance criteria: "`check_plan_titles.py` absent from `origin/main`"; "Tracked tree = `index.html` only"; "Zero references to `check_plan_titles` anywhere in the repo."

### B3. The plan sheet's header reads "WHAT WE'RE ON THE HUNT FOR", not "WHAT IT NEEDS", and the People section is deleted (issue #68, AI Slop correction)

**Source:** issue #68 (owner, AI Slop label), transcribed verbatim: "1. Replace the header title "WHAT IT NEEDS" with the title "WHAT WE'RE ON THE HUNT FOR" 2. Delete the entire section "People / If anyone wants to help out, I'll put together a day we can all go out and clean up the debris, weed the perimeter, maybe plant some things, maybe work on the table and benches, just let me know! I'd be grateful for any help - it's a big lot!"" — https://github.com/AlastairZeved/Earp-Street-Park/issues/68

**The record.** Merged via PR #72 (`08f2422`), verified by grep on the new tip: the new title present, `What it needs` absent, the People `<li>` and its paragraph gone, the Materials `<li>` intact at that time.

### B4. The submit button reads "Send", not "Share your story about this old lot!" (issue #69, AI Slop correction)

**Source:** issue #69 (owner, AI Slop label), transcribed verbatim: "Change the button's title in the formspree form from "Share your story about this old lot!" to "Send"" — https://github.com/AlastairZeved/Earp-Street-Park/issues/69

**The record.** Merged via PR #72 (`08f2422`), verified by grep: `>Send<` present, the old label absent, form action / honeypot / fields untouched.

### B5. The "Come Say Hi!" section IS a flier — the same paper sheet as every other flier: paper background, taped up, "Come Say Hi!" anchored to the left; the section is the sheet, not a title chip (issue #70, AI Slop correction, the design ruling of record)

**Source:** issue #70 (owner, AI Slop label), transcribed verbatim: "I've instructed this three times, make the "Come Say Hi!" section a flier in the bottom right corner. It should have paper background, taped up, with "Come Say Hi!" anchored to the left." And the owner's acceptance frame, verbatim: "every other flier renders in dark mode perfectly fine. "Come Say Hi!" is the only "flier" that's different than the rest???" — https://github.com/AlastairZeved/Earp-Street-Park/issues/70

The issue's own words on what carries authority: "Both sentences are the law; everything below is scaffolding that exists only to make them checkable." The checkable spec in the issue pins: the sheet surface (`var(--paper)`, the `.note` shadow `0 8px 20px rgba(0,0,0,.4)`, the week sheet's −0.5° tilt, `text-align: left`), the two tape strips reusing `.note::before/::after`'s values verbatim (5.5rem × 1.7rem, `rgba(236,227,199,.78)`, −4°/+3°, top −0.8rem; phone 4.6rem × 1.5rem at −0.65rem), the chip deleted from the title, the passage printing in `var(--ink)` with no text-shadow, the width taken from the plan sheet's own column (23.2%), the plan sheet's height reserve (150px), the phone seam (22px), and the retirement of the dark-only fence ruling. Its forbidden fixes: any `--paper` change or dark-mode paper override for this block; "just add tape" to the chip; moving the placement (#63 pin and #46 grid-area stand).

**The record.** Merged via PR #72 (`08f2422`); the owner's closing comment verifies all 8 clauses by grep on the new tip, "No token changed, no new dark-mode paper value added." The shipped `.head-lines` comment records the standing convention: "the flier carries the same two tape strips as every other sheet — .note's own values, verbatim (no invented texture)."

### B6. The story field shows three visible lines with a scrollbar beyond that, and the freed height goes to the lot photo (issue #81, AI Slop correction)

**Source:** issue #81 (owner, AI Slop label), transcribed verbatim: "1. Reduce the vertical size of the "What's on your mind?" section of the form so it allows for three lines of visible text. If a user writes more than 3 lines, a scrollbar should handle viewing the additional lines - but only if more than 3 lines of text are input. 2. Give that vertical space back to the image of the park and make an on-brand frame for the left and right sides of the image so it's not just white space." — https://github.com/AlastairZeved/Earp-Street-Park/issues/81

**The record.** Merged via PR #83. The shipped CSS carries the height accounting as a token: `--stories-block: 18rem` ("#75 convention, re-measured for #81… 18rem holds clearance") with the desktop textarea at `min-height: 4rem` (three visible lines). Note: the "on-brand frame" clause was subsequently narrowed by B8 — the owner rejected the red-line frame that was shipped for it and ruled the white space stays.

### B7. The plan sheet is the checkbox list alone — no intro statement, no materials list (issue #82, AI Slop correction)

**Source:** issue #82 (owner, AI Slop label), transcribed verbatim: "1. Delete the text statement from the "What We'd Like To Do" section entirely: "A fence, a sign, new boards, trees in the planters — and the people and materials to make it happen." The section should only have the checkbox style list once complete. Do not try to save the statement or reimplement its text somewhere; delete it. 2. Delete the entire section that reads: "What we're on the hunt for … Materials … Pressure treated lumber … Paint and paint brushes (no specific color, we'll take what we can get and make it work!) … Wood pallets … Bollard caps" 3. Once both are deleted, only the current checkbox style list should be remaining. No materials list, no intro statement; they should both be deleted entirely." — https://github.com/AlastairZeved/Earp-Street-Park/issues/82

**The record.** Merged via PR #85 — the intro statement and the materials list removed; the `.punch` checkbox list is what remains. (This supersedes the materials-list retention noted in B3's record; the `.need`/`.materials` CSS left behind by it is dormant — declared, with no markup using it.)

### B8. No red line borders on the lot photo — the white space lives (issue #84, AI Slop correction)

**Source:** issue #84 (owner, AI Slop label), transcribed verbatim: "There are 2 red lines bordering the image. Remove them. I instructed designing a frame for the image to fill the white space and instead got 2 red lines. Just remove the red lines and let the white space live." — https://github.com/AlastairZeved/Earp-Street-Park/issues/84

**The record.** Merged via PR #87 — the red border lines removed from the photo mat. The mat is the plain `#fffdf6` print surface with its shadow; no invented frame treatment stands in for one.

### B9. Body text is plain weight — paragraphs, lists, fine print; headers and titles stay bold (issue #86, AI Slop correction)

**Source:** issue #86 (owner, AI Slop label), transcribed verbatim: "Headers and Titles are bold which is the correct formatting, but the paragraphs and lists text should not be bolded. Remove the bold from all body text - leave the headers and titles alone." — https://github.com/AlastairZeved/Earp-Street-Park/issues/86

**The record.** Merged via PR #88. Shipped as one grouped rule, `font-weight: 400` on `.entry p, .note-face, .punch li, .need li, .need .materials li, .archive-head, .fine`, with the CSS comment "#86: body text — paragraphs, list descriptions, fine print — plain weight". Bold remains only where it was already correct: entry dates (`--font-stub`, 700), the Send button (700), and headings. `docs/UIUX.md` §3 records the resulting weight map as the rendering authority.

### B10. The site deploys from the `deploy` branch on Netlify, not from `main` — `main` stays the working branch, promotion to `deploy` is manual once deploy-ready, and the GitHub Pages workflow is removed (issue #89, the owner's rulings of record; supersedes the "deploys from `main` / a merge IS a publish" discipline and the pages.yml deploy)

**Source:** issue #89 (owner), transcribed verbatim: "Netlify will listen for deploy branch updates, not main. Main is still main branch to be worked on, but must be promoted to deploy once deploy-ready manually." And the owner's follow-up rulings in chat, 2026-10-05, verbatim: "Remove pages.yml in this PR (Netlify is now the production host)" and "Deploy branch + docs update with documented `git push origin main:deploy`." — https://github.com/AlastairZeved/Earp-Street-Park/issues/89

**The record.** Opened as PR #91 (merge pending owner review). `.github/workflows/pages.yml` deleted — GitHub Pages no longer publishes the site; Netlify is the production host, and its production branch is the `deploy` branch (the branch setting itself lives in the Netlify dashboard). The `deploy` branch is created at the tip of `main`. Promotion is the documented fast-forward `git push origin main:deploy`. The "a merge IS a publish" wording in AGENTS.md and docs/PRD.md §6 is superseded accordingly; B1's PR previews remain KEPT.

### B11. The header hero paragraph is replaced entirely with the owner's new copy (issue #94)

**Source:** issue #94 (owner), transcribed verbatim: "In the header, we're replacing this paragraph entirely … And instead will use this copy: 'Hey, we're Rob and Brian. We've been on the block a few years and we try to keep the the old park on our block clean, whether it's picking up trash, weeding, or trying to get 311 to pick up the darn mattresses. We love this park and we love that our little block has a place like this for kids to play, so we'd like to pitch in a little more. This page is what we're working on, what we're hoping to do, and what materials we're on the hunt for to get it done. If you have suggestions, ideas, or wanna help us out, feel free to give us a shout if you see us or drop us a message with the form on this page (we're still itching to learn the history of those cement planters!).'" And the owner's follow-up ruling in chat, 2026-10-05, verbatim: "it should read \"we try to keep this old park\"" — https://github.com/AlastairZeved/Earp-Street-Park/issues/94

**The record.** Opened as PR #95 (merge pending owner review). Only the text inside `.hero-line` is replaced; the class, the pinned `0.85rem`/weight-400 treatment (UIUX §3), and the `STUB:hero-line` comment above it are untouched. The issue body's literal "keep the the old park" is superseded by the in-chat ruling to "keep this old park", quoted above.

### B12. Entry dates go plain weight — bold remains only on titles, headers, and the Send button (issue #93; supersedes B9's entry-date exception)

**Source:** issue #93 (owner, AI Slop label), transcribed verbatim: "No bolded body text, just normal weight text. The only text that should be bolded are titles and headers. Nothing else." And the owner's follow-up rulings in chat, 2026-10-05, verbatim: "Button stays bold, dates go plain." — https://github.com/AlastairZeved/Earp-Street-Park/issues/93

**The record.** Opened as PR #97 (merge pending owner review). `.entry-date` drops from 700 to 400 — B9's exception for entry dates is superseded; they are body text, not titles or headers. The Send button keeps its 700 weight per the owner's in-chat ruling above. Headers, titles, and the B9 grouped body-weight-400 rule are untouched. `docs/UIUX.md` §3 records the resulting weight map as the rendering authority. `test/tokens.js`'s date assertion is rewritten deliberately: it previously pinned `.entry-date` at 700 (B9) and now pins it at 400 (B12).

### B13. The lot photo and the stories form re-scale: the photo takes ~70-80% of the middle pane vertically and the form the bottom 20-30%, the photo widens to ~55-60%, and the form's chrome compacts to its measured minimum (issue #92, AI Slop correction; supersedes #81's proportions)

**Source:** issue #92 (owner, AI Slop label), transcribed verbatim: "Again, fix the scaling so that the image of the lot is 70-80% of any desktop viewport and the form is the bottom 20-30% of the viewport." And the owner's follow-up rulings in chat, 2026-10-05, verbatim: "Huh? Something is lost in translation. Not like the entire viewport, the viewport of its middle pane as its width already is today. 70-80% vertically." plus the owner's chat choices to "Compact the form's internal chrome (padding, heading, Send spacing) to its measured minimum and re-derive --stories-block from that measurement" and "Also widen the photo (~55-60%) so the enlarged print fills more of the board" — https://github.com/AlastairZeved/Earp-Street-Park/issues/92

**The record.** Opened as PR pending owner review. The center column widens 49% -> 52.5% (bounded by the week sheet's right edge at 21.7% and the plan sheet's column at 78.2%; the side sheets narrow to 20.5% / 20.6% to yield it, the flier shares the plan column and its headroom clamp is re-derived for the 20.6% wrap). The form's chrome compacts one space-step (form padding/margins --space-3 -> --space-2, .field-row--send gap --space-2); inputs, the B6 4rem textarea floor, the #74 Send row, and the sheet species are untouched. --stories-block re-measured to 19.25rem (the sheet prints 308px flat across desktop widths). Measured outcome at the issue's 1247x956 viewport: photo pane 55.3% of the middle pane's vertical space, stories sheet 40.6% — the 70-80/20-30 target is NOT fully met, because the form's no-scroll, first-paint floor (B6/#56) plus its family title/padding put its minimum at ~300px, which cannot shrink below ~40% of the pane at common desktop heights; the numbers are recorded here so the owner can rule on which law gives (textarea floor, title, or pinned arrangement) if the split must go lower.

### B14. Favicons: a picnic bench drawn in the site's browns, implemented in the codebase (issue #99)

**Source:** issue #99 (owner), transcribed verbatim: "Make favicons of a picnic bench, using the same browns from the site as the color scheme, and implement them in the codebase." — https://github.com/AlastairZeved/Earp-Street-Park/issues/99

**The record.** Shipped as PR pending owner review. The favicon is one inline
SVG data URI on `<link rel="icon">` in `index.html` — no new files, no new
file types, the repo stays a single self-contained page. The drawing is a
picnic bench side profile: paper-toned rounded square behind, the tabletop
and seat plank in `--fence` with the seat overhanging the legs, the legs in
`--rust` (UIUX §9). The SVG carries a `prefers-color-scheme: dark` media
query applying the §2.2 remaps (`--paper #3a3329`, `--rust #dd8a4a`), with
the planks taking the dark `--ink-faded` tan `#b5ac9b` — the dark `--fence`
value measured too close to the dark paper to survive 16px. The SVG ships
only hexes the tokens already declare.

### B15. The panes re-derive: the left and right panes are equally sized, the middle pane is the larger pane and centered between them (issue #102, the owner's ruling of record)

**Source:** issue #102, the owner's ruling of record, and the owner's chat
sentence of 2026-10-06, transcribed verbatim: "the left and right panes
should be equally sized. the middle pane is the larger pane and centered
between them" — https://github.com/AlastairZeved/Earp-Street-Park/issues/102

**The record.** The pins are re-derived within the layout law, not bypassed
(the issue's own ruling comment: the layout law, UIUX §5.1 / B13 percentages,
is not bypassed — the pins are re-derived within it). The board derives from
symmetric 1.2% outer margins, equal side panes of 20.5% each, 0.3% fence air
each side, and the middle pane larger and centered: `.note--week` stays
`left 1.2% / width 20.5%`; the middle column (`.window` and `.note--stories`
together) moves to `left 22% / width 56%`; `.note--plan` moves to
`left 78.3% / width 20.5%` (equal to the week sheet's width); `.head-lines`
keeps the plan sheet's own column at 20.5%. The middle pane's 56% width
keeps B13's recorded ~55-60% and PR #104's shipped pane; the middle column
centers at exactly 50% of the field (measured 50.00% at 761/1000/1220/1440
vw). The plan sheet's flier headroom clamp is re-derived for the 0.1%-narrower
column: the flier's wrap (299px at 761vw … 174px at 1440vw) is 19px taller at
761vw than the #92 measurement, so the reserve rises to
`clamp(194px, 488px - 19.2vw, 342px)` — the same clearance `main` held (the
761-band overlap itself pre-exists on main, issue #78's band; not this
ruling's scope). Derived numbers here are agent-derived from the
owner-confirmed chat choices (middle 56%, sides 20.5% each, gaps 0.3%); the
ruling's own words above are the owner's.

### B16. A CSP ships as a Netlify `_headers` file — the first security-header change; B1's "no security headers" acceptance is superseded for headers only, the Referrer-Policy landmine is respected, and the issue's JS/sanitization items are ruled not-applicable (issue #105, the owner's rulings of record)

**Source:** issue #105 (owner, ruling of record, delivered in the owner's session chat 2026-10-06 in answer to the measured conflicts presented there), transcribed verbatim: "Add _headers with the strong CSP above (supersedes B1's no-headers acceptance, transcribed as B16)"; on the issue's "prefer external .js files" item: "Rule it not-applicable — keep zero-JS law untouched"; on the issue's "sanitize/encode user-supplied content" item: "Rule it not-applicable — nothing renders user input"; and on the duplicate issue #106: "I deleted issue #106 as duplicate. No need to do anything. Work #105." — https://github.com/AlastairZeved/Earp-Street-Park/issues/105

**The record.** The `_headers` file ships at the repository root (Netlify reads it from the `deploy` branch per B10) with the ruled policy, verbatim from the ruling:

```
default-src 'none'; img-src data:; style-src 'unsafe-inline'; form-action https://formspree.io; frame-ancestors 'none'; base-uri 'none'
```

plus `Referrer-Policy: strict-origin-when-cross-origin` — the exact value B1's standing caution names as the strictest setting that is safe for Formspree. `style-src 'unsafe-inline'` is unavoidable while the design system lives in one inline `<style>`; `img-src data:` covers the inlined photo prints and favicon. B1's "no security headers" acceptance is superseded **for headers only** — its other three accepted findings (no branch lock, the deleted dev script, unsigned authorship) stand untouched, as does the Referrer-Policy landmine. The issue's remaining items are ruled out by the owner: the page ships zero `<script>` tags (the "prefer external .js" ask is already the page's steady state, and repo law bans JavaScript regardless), and the page renders no user-supplied content — the form POSTs straight to Formspree, which renders submissions in its own dashboard.

### B17. The plan sheet moves into the middle pane, beside the lot photo at equal size; the form prints below both; the right pane keeps only the Come Say Hi flier, and the empty space left behind is not filled (issue #109, the owner's ruling of record; supersedes B15's right-pane pin of the plan sheet and retires the #76/#92/#102 flier-headroom clamp)

**Source:** issue #109 (owner, ruling of record), transcribed verbatim: "The middle pane is too large for just one image stacked on top of one form.

Move the \"What We'd Like to Do\" component to the middle pane, on the right side of the image and at the same height and width so they're equally sized (scaled where the image scales, maintaining the vertical scroll bar in the \"WHAT WE'D LIKE TO DO\" component).

Once complete, the middle pane should read:

\"IMAGE\" | \"WHAT WE'D LIKE TO DO\"
       CONTACT FORM


Once complete, the right pane should only contain the \"COME SAY HI!\" component. Do not move it, do not resize it, do not fill in the empty space left behind." — https://github.com/AlastairZeved/Earp-Street-Park/issues/109

**The record.** Shipped as PR pending owner review. The middle pane splits
into two equal halves: the lot window takes `left: 22% / width: 27.5%` and
`.note--plan` moves to `left: 50.5% / width: 27.5%` — equal widths, 1% of
fence air between them, both at `height: calc(96% - var(--stories-block))`
so they scale together as the window scales; the plan sheet's own
`#panel-plan` vertical scrollbar stands (`overflow-y: auto` unchanged), and
the sheet species is untouched (same `.note` paper, tape, shadow, +0.5°
tilt). The stories sheet (`left: 22% / width: 56%`, bottom 2%) prints below
both, untouched. `.head-lines` (Come Say Hi!) is unmoved (`right: 1.2%,
bottom: 2%, width: 20.5%`) and is now the right pane's only resident; the
empty space above it is left as the ruling directs. With the plan sheet out
of the right pane, the flier-headroom clamp
(`clamp(194px, 488px - 19.2vw, 342px)`, #76/#92/#102) is retired — nothing
shares the flier's column anymore. B15's plan-sheet pin (`left: 78.3% /
width: 20.5%`) is superseded for the plan sheet only; B15's side panes and
the centered 56% middle column stand. `docs/UIUX.md` §5/§5.1 and
`docs/PRD.md` §3/§4 are amended by this ruling in the same PR; no token or
hex changes, so `test/tokens.js` needs no assertion rewrite.

**Measured outcome.** Desktop viewports sampled with the shipped pins:
`#panel-plan`'s scroll region stays live in the narrower column — scrollHeight
2728px against a 300px client at 761vw, 1024/330 at 1247vw, 784/278 at
1440vw — and the plan sheet clears the stories sheet below it at every
sampled width (6.5px at 761vw, 0.5px at 1247vw, both bounding-box readings
of the tilted sheets; the tape-printing-over convention holds). The lot
print inside the narrower window pane takes the pane's width cap and centers
vertically (the §4.2 mechanic, unchanged); the phone grid is untouched.

### B18. The middle pane stacks instead: the lot photo takes the top of the pane at full width, and What We'd Like To Do and Give Me A Shout! share the row beneath it — plan on the left, stories on the right (the owner's chat amendment to issue #109, 2026-10-06; supersedes B17's photo-beside-plan render and retires `--stories-block`)

**Source:** the owner's amendment to issue #109, stated in chat with the
site's agent, 2026-10-06, transcribed verbatim: "Actually, we're going to
make a different layout swap as an amendment to the issue now that I've seen
the middle pane visually with three components in it. The image will stay at
the top of the stack, but underneath it will be both \"WHAT WE'D LIKE TO
DO\" AND \"GIVE ME A SHOUT!\" side by side. \"WHAT WE'D LIKE TO DO\" section
belongs on the left and \"GIVE ME A SHOUT!\" belongs on the right. Does that
make sense?" The agent confirmed and read the ruling back (photo on top at
the pane's full 56% width; plan left / stories right beneath it; the right
pane still only the Come Say Hi! flier, empty space standing) before
implementing; the owner's review of this PR is the confirmation of record.
The amendment is of record on issue #109, the issue it amends —
https://github.com/AlastairZeved/Earp-Street-Park/issues/109

**The record.** Same PR as B17. The middle pane is a stack: `.window`
returns to the pane's full `width: 56%` and takes `height: calc(96% -
var(--stories-row))`; a `.middle-row` wrapper (absolute, `left: 22% / bottom:
2% / width: 56%`) holds the two sheets as equal halves — `.note--plan`
(`left` half, absolute, `top: 0 / bottom: 0`, width 49.5%) and
`.note--stories` (in flow, the row's height-setter per #56, `margin-left:
50.5% / width: 49.5%`). 1% fence air sits between the halves. The plan
sheet's `#panel-plan` scrollbar stands. `--stories-row: clamp(308px, 524px -
19.8vw, 373px)` replaces `--stories-block` (19.25rem): the half-width form
re-wraps taller in the narrow column — measured 372.6px at 761vw (the
Name/Email labels re-wrap), 348.7 at 800, 324.8 at 900, 325 at 1000, 303.5
at 1100, then flat 306–307px above 1100; the clamp clears the measurement at
every sampled width (bounds agent-derived, not an owner ruling; measured
air runs 0.9px at 761vw and 1.8px at 1000vw, widening to 17–22px across the
800–1100vw band where the linear preferred term over-predicts the non-linear
re-wrap — the tape prints over fence there, not over the photo). On phone
the wrapper dissolves (`display: contents`) and the sheets return to their
grid areas, their phone values re-pinned at `.field`-prefixed specificity so
the desktop row rules cannot out-rank them. B17's equal-size law carries over unchanged —
it now binds the plan and stories halves rather than the photo and the plan
sheet. `docs/UIUX.md` §5/§5.1 and `docs/PRD.md` §3/§4 are amended in the
same PR.

### B19. The hero paragraph loses its final parenthetical; the preceding sentence ends with the period (issue #108, owner ruling; amends B11's transcribed copy)

**Source:** issue #108 (owner ruling), transcribed verbatim: "Remove just this text line: (we're still itching to learn the history of those cement planters!)

Make sure the previous line still ends with the period." — https://github.com/AlastairZeved/Earp-Street-Park/issues/108

**The record.** The hero paragraph's closing sentence now reads "...drop us a message with the form on this page." — the parenthetical "(we're still itching to learn the history of those cement planters!)" is deleted and the sentence carries the period. Everything else in the paragraph stands exactly as transcribed in B11 (with B11's chat amendment, "this old park"). `docs/UIUX.md` needs no edit; `docs/PRD.md` §3 quotes no hero copy.

### B20. The form sheet's title reads "GIVE US A SHOUT!", not "GIVE ME A SHOUT!" (issue #111, owner ruling)

**Source:** issue #111 (owner ruling), transcribed verbatim: "The section "GIVE ME A SHOUT!" needs an edit to: "GIVE US A SHOUT!"" — https://github.com/AlastairZeved/Earp-Street-Park/issues/111

**The record.** The stories sheet's `.note-title` markup becomes "Give us a shout!" — the CSS uppercase render produces "GIVE US A SHOUT!". `docs/PRD.md` §3 item 6 is amended in the same PR.

### B21. The standalone "Lots of weeding!" line is removed from the What We've Done sheet (issue #112, owner ruling)

**Source:** issue #112 (owner ruling), transcribed verbatim: "Remove this entire line from the "WHAT WE'VE DONE" section:

"Lots of weeding! I didn’t realize how quickly it can get overgrown across the fencing and in the planters."" — https://github.com/AlastairZeved/Earp-Street-Park/issues/112

**The record.** The `.note-face` line directly under the sheet's title is deleted. The identical sentence opening the 9/2/2026 entry — a different, dated line that continues into tree-planting copy — stays, per the owner's confirmed scope (standalone line only; entry untouched).

### B22. The plan sheet is replaced with a five-item bullet list — bullet style instead of checkbox style, the owner's new copy verbatim (issue #113, owner ruling; supersedes B7's "checkbox list alone" render)

**Source:** issue #113 (owner ruling), transcribed verbatim: "The "WHAT WE'D LIKE TO DO" section needs several copy edits. Right now it reads: " A fence along the street edge Finding some sort of fencing we can rig onto the metal fence posts. I’m thinking wood pallets could do the job nicely (and free!)
A “No Dumping” sign Our block captain can request one for free, but if we don’t have a captain then I’ll keep an eye on Facebook marketplace for one.
Fresh slats on the picnic table and benches We need some new wood for the benches and picnic table. They’re easy to replace and the current wood is too damaged to repair easily. Then we can paint them and get them looking nice! That’s 18 pieces of 2”x6” pressure treated lumber I’m looking for.
Trees in the existing planters Until I can get the Redevelopment Authority’s “permission” to do work restoring this lot as a park, we can’t request a tree from PHS. I’m working on getting “permission”, but until then if anyone knows of some free Fig trees or shade trees, let me know! " We are replacing this with a bullet point style instead of checkbox style and updating the copy to read: "- Put up a fence but not a tall fence, maybe hip height wood fence to help stop the dumping there
- Put up a "No Dumping" sign (our Block Captain can request a free one)
- Replace the wood slats for the picnic table and two benches, then paint/seal the wood so they last
- Plant some container trees in the planters. Something that can provide some shade in the summer, but not large trees that can't fit in a planter
- Repair the cracked pavement across the lot (working on getting some grant money to pay for it)"" — https://github.com/AlastairZeved/Earp-Street-Park/issues/113

**The record.** The `.punch` list prints the five lines above, verbatim, with no title spans, no generated colon, and no `STUB:nextup-*` fill points (the ruling replaces the section's copy entirely, so the fill points go with the copy they were waiting to fill). The checkbox squares (`.punch li::before`, 1.05rem bordered box) are retired and the list joins the site's existing disc-bullet species (`.need .materials`: `list-style: disc`, 1.1rem indent) per the owner's confirmed choice — no invented marker. B7's record stands as history ("only the checkbox style list should be remaining"); B22 supersedes its rendered form: the sheet is the list alone, now in bullet style. The dark-mode checkbox-fill rule is amended to cover form inputs only. `docs/UIUX.md` §2.3/§3 and `docs/PRD.md` §3 are amended in the same PR.

### B23. A new flier, "WHAT WE NEED", joins the right pane above the Come Say Hi! flier — a checkbox list; the checkbox squares return for this flier's list only; the third item's parenthesis closes (issue #110, the owner's ruling of record, with three in-chat rulings; amends B17's "right pane keeps only the Come Say Hi flier" render)

**Source:** issue #110 (owner, ruling of record), transcribed verbatim: "Need a new flier component added to the right-most pane, above the section "COME SAY HI!".

This component is titled:
"WHAT WE NEED"

The body should be a checkbox style list that reads:
"- 18 pressure-treated slats, 2x6 10' long
- Paint
- A "No Dumping" sign (our Block Captain can request it"
- Hip height fencing (maybe wood pallets would work?)
- Container trees (trees that don't have sprawling roots)"


The flier should be styled like all of the other flier components, no new styles, fonts, colors, or components are to be introduced.

Once complete, the right pane should read:

WHAT WE NEED
COME SAY HI!


Both components stacked on top of each other, with the top of "WHAT WE NEED" section aligned with the top of the other two panes, below the header. No scrollbar should be needed." — https://github.com/AlastairZeved/Earp-Street-Park/issues/110

And the owner's three rulings in chat with the site's agent, 2026-10-06, on the questions the issue's text left open, transcribed verbatim: on the third list item, whose parenthesis the issue body leaves unclosed — "Close the paren: (our Block Captain can request it)"; on the list style, against B22's site-wide retirement of the checkbox squares — "Reinstate the retired checkbox squares for this flier's list only"; and on the list's text size, in answer to the measured conflict that at body 16px the two right-pane fliers overlap by 297px at the 761vw desktop floor while at the flier species' own `.smallprint` face size the pair clears at every sampled width — "List at .smallprint 0.78rem — the flier species' own body size; fits at every desktop width". The owner's review of this PR is the confirmation of record (the B18 pattern).

**The record.** The new flier joins the Come Say Hi flier's own species
(`.head-lines`): paper surface, note shadow, −0.5° tilt, the two tape strips,
the `.say-hi.flier` title treatment (#76: "there was no reason it should have
been different") — no new styles, fonts, colors, or components. Its only new
values are its pin's top and bottom: `top: 2%` / `bottom: auto` — the right
edge (`right: 1.2%`) and the 20.5% column are the base `.head-lines` values,
inherited — the same
top line as `.note--week` and `.window`, below the header, exactly as the
ruling directs. The Come Say Hi flier keeps its `bottom: 2%` pin untouched
(B5: "leave exactly where they are"); the two fliers stack in the pane, and
the fence air between them is whatever the content leaves. The list prints
the retired checkbox species verbatim — the pre-#113 `.punch` squares
(2.1rem indent, 1.05rem square, 2px `--ink` border, `#fffdf6` fill), with
their dark-mode dusk fill (`#2b2720`) restored alongside the form inputs'
§2.3 remap — for this flier's list only; the plan sheet stays the B22
disc-bullet list, and the list items carry plain weight per the B9/B12 body
rule. The list's face prints at the `.smallprint` size (§3.3 — the flier
species' own body size, the size Come Say Hi's face prints), per the owner's
in-chat size ruling above. The list is not a scroll region ("No scrollbar
should be needed") — it
prints in full like every other flier's face. On phone the flier takes its
own row at the top of the flier run, above the Come Say Hi flier (the #46
top-of-flow pin is not moved — the needs flier stacks above it, the desktop
reading order), re-pinned at `.field` specificity so the desktop top pin
cannot leak (the B18 pattern). No token or hex change: `#fffdf6` and
`#2b2720` are already shipped and documented (UIUX §2.3). `docs/UIUX.md`
§2.3/§3/§4.3/§5 and `docs/PRD.md` §3/§4 are amended in the same PR.

**Measured outcome.** Agent-derived measurements at 956px viewport height
(the issue family's reference height): the needs flier's top line matches
`.note--week`'s bounding-box top to 0.1px at 761/1000/1247/1440vw, and the
air between the two fliers' bounding boxes runs +3.1px at 761vw, +39px at
800vw, +110px at 900vw, +164px at 1000vw, +247px at 1247vw, +285px at 1440vw
— the same clearance standard B17 accepted (0.5px). The minimum (+3.1px at
the 761px floor) is less than one line of the `.smallprint` face, and the fit
is height-dependent: at desktop windows shorter than ~950px the two fliers
overlap with no scroll fallback (the list is not a scroll region, per the
ruling). The numbers are recorded here so a future copy edit or a shorter
fit envelope can be ruled on with the render measured, not eyeballed. Come
Say Hi's own bounding box is unchanged by this ruling (bottom 2% pin,
field-relative, verified at every sampled width).

### B24. The body font stack leads with Fira Sans — every sans element on the page renders in Fira Sans, not just the body paragraphs; the Bold-only Roboto install that made all 400 text render bold is routed around (issue #114, owner ruling in chat with the site's agent, 2026-10-06)

**Source:** the owner's ruling in chat with the site's agent, 2026-10-06,
transcribed verbatim: "Use Fira Sans and update the font so it's consistent
throughout the page, not just the body texts." — https://github.com/AlastairZeved/Earp-Street-Park/issues/114

**The record.** `--font-body` becomes `"Fira Sans", -apple-system, "Segoe UI",
Roboto, "Helvetica Neue", Arial, sans-serif` — Fira Sans leads, the previous
system fallbacks stand behind it. Measured root cause of #114: the shipped
weight map already put every body element at 400 (B9/B12 verified live), but
on the owner's machine the stack's first present family, Roboto, existed as a
single Bold face (`~/.local/share/fonts/Roboto-Bold.ttf`, no Regular), so the
browser drew weight 400 with the Bold face — every sans element on the page
rendered bold while the monospace dates (a separate stack, landing on a
regular face) printed thin beside them. The agent rendered the same paragraph
at 400 and 700 and measured them pixel-identical (median stroke 5.0px, ink
fraction 0.167 at 2x, platform font reported as Roboto for both) before
presenting the conflict; the owner's screenshot letterforms match Roboto Bold.
"Consistent throughout the page" is read as every element that uses the body
stack — entries, lists, the hero, form labels, the button — one family. The
serif species (`.note-title`, `h1`, Georgia stack) and the mono species
(`.entry-date`, `--font-stub`) are separate pinned stacks and are unchanged.
Fira Sans carries Regular and Bold on the owner's machine, so the Send
button's 700 keeps a true bold. `docs/UIUX.md` §3.1 is amended in the same
PR; no token or hex changes, so `test/tokens.js` needs no assertion rewrite.

### B25. The fliers swap places — WHAT WE NEED takes the middle pane's lower right (the stories slot), and GIVE US A SHOUT! joins the right pane BELOW the Come Say Hi! flier (issue #122, owner instruction; supersedes B23's right-pane arrangement and B18's stories-right render)

**Source:** issue #122 (owner), transcribed verbatim: "Swap the placement of
the flier "GIVE US A SHOUT!" with the flier "WHAT WE NEED" so that "WHAT WE
NEED" is in the middle pane, lower right, and the "GIVE US A SHOUT!" flier is
in the right pane - but put the "GIVE US A SHOUT!" flier BELOW the "COME SAY
HI!" flier instead of above it." —
https://github.com/AlastairZeved/Earp-Street-Park/issues/122

**The record.** Opened as PR pending owner review. WHAT WE NEED keeps the
`.head-lines` flier species wholesale (B23: no new styles, fonts, colors, or
components) and takes the stories sheet's old slot: the right half of
`.middle-row` (`margin-left: 50.5%; width: 49.5%`), in flow, and the row's
height-setter — the stories sheet's old #56 job; the plan sheet stretches to
meet it as before. GIVE US A SHOUT! keeps its own `.note` paper-sheet species
untouched (−0.3° tilt, full-length form, #56: never a scroll region) and joins
the fliers' 20.5% column: `right: 1.2%; bottom: 2%`, the pin WHAT WE NEED held
under B23. The Come Say Hi! flier takes the top pin (`top: 2%`) — B23's "keeps
its `bottom: 2%` pin untouched" is superseded by this ruling; the two
right-pane sheets stack Come Say Hi! above GIVE US A SHOUT!, exactly as the
ruling directs. `--stories-row` is re-derived for the new height-setter (the
needs flier's natural re-wrap: 359.6px at 761vw, ~304 at 850–950, a flat
~288–291 band to 1350, ~235 at 1400 and above): `clamp(240px, 462px - 12vw,
365px)`, measured air positive at every sampled width (6.3px at 761vw,
10.7px at 1350, 6.2px at 1920) — the calc token is agent-derived, not an
owner ruling. The phone render keeps its structure (grid-areas unchanged; the
phone flier run still reads WHAT WE NEED above Come Say Hi!, the sheets keep
their phone rows), and the base phone `.head-lines` rule re-pins
`top`/`right` to auto — the desktop 2%-pin family had begun leaking onto the
phone fliers when B25 moved Come Say Hi! to the top pin; the run now prints
at its true flow position (measured ~3px lower than the shipped render, the
old bottom-pin leak removed). Measured fit envelope, recorded so the owner
can rule with the render measured (the B13/B23 pattern): the right pane's
two sheets fit down
to ~723px of viewport height at 1247vw (air 8.5px) and 720px at 1280vw
(5.6px); below that the GIVE US A SHOUT! sheet rides over the Come Say Hi!
flier with no scroll fallback (176px of overlap at 761×720, where Come Say
Hi!'s face re-wraps to 299px) — the list and the form are both non-scroll
regions by ruling, so no fix exists inside the current law.
`docs/UIUX.md` §4.3/§5 and `docs/PRD.md` §3/§4 are amended in the same PR; no
hex or token changes, so `test/tokens.js` needs no assertion rewrite.

### B26. Montserrat Alternates everywhere — the entire page renders in the handrolled self-hosted Montserrat Alternates; the serif and mono species' families are replaced with it; no other font is used anywhere; the bold roles keep literal 700 via a handrolled 700 face (issue #124, owner ruling; supersedes B24's Fira Sans stack and amends UIUX §3.1's "no font files" rule)

**Source:** issue #124 (owner, ruling of record), transcribed verbatim: "The
font used throughout the entire website needs to be Montserrat Alternative.
It is currently already being used in the repo AlastairZeved/TheBoards where
it was handrolled. Handroll it for this repo as well - do not use an API call
or introduce dependencies; add the font file(s) here in-repo and then ensure
it's being used throughout the entire page. no other font should be used
anywhere." — https://github.com/AlastairZeved/Earp-Street-Park/issues/124

**The record.** The owner's reference implementation is TheBoards' handroll:
Latin-subset woff2 committed in `fonts/`, self-hosted `@font-face`, no CDN,
no API call at runtime, no dependency (TheBoards styles.css §13.1, B50 there).
The 400 face is byte-identical to TheBoards'
`fonts/MontserratAlternates-400.woff2` (same md5) — the same handroll source;
the 700 face is handrolled by the same pipeline because ESP's weight map
(B9/B12) pins its bold roles at literal 700 (the Send button, the computed
h2 default behind `.note-title`/`.say-hi.flier`) and TheBoards ships only
400/600/800. Two faces ship: 400 and 700 — the weights the weight map uses;
no unused face files are added. `font-display: swap` is transcribed from the
TheBoards handroll the owner named. All three family tokens lead with
`"Montserrat Alternates"` — `--font-body`, `--font-display` (the serif
species' Georgia stack is replaced; sizes, uppercase, letter-spacing, the 2px
ink underline are unchanged), and `--font-stub` (`.entry-date` keeps weight
400 per B12, `--rust` and letter-spacing 0.04em unchanged). B24's Fira Sans
stack is superseded. `docs/UIUX.md` §3 is amended in the same PR.

### B27. The CSP gains `font-src 'self'` — the B26 handrolled woff2 faces load wherever `_headers` ships; without the directive `default-src 'none'` refuses them and production silently renders system fallbacks (issue #128, owner ruling; amends B16's pinned policy)

**Source:** issue #128 (owner, ruling of record), transcribed verbatim: "Measured
fix: append `font-src 'self';` to the CSP in `_headers`." — the owner's session
chat confirms the delivery as one PR: "Yes — transcribe the ruling, append it to
DECISIONS.md, edit _headers, all in one PR" and keeps the scope to "only the CSP
directive and the DECISIONS.md record amendment" — https://github.com/AlastairZeved/Earp-Street-Park/issues/128

**The record.** B16's policy was pinned verbatim without `font-src`, so under
`default-src 'none'` the two self-hosted `fonts/` woff2 files from B26 are
refused wherever the header ships (Netlify reads `_headers` from `deploy` per
B10) — production rendered system fallbacks while every local test and render
passed. The policy becomes `default-src 'none'; img-src data:; font-src 'self';
style-src 'unsafe-inline'; form-action https://formspree.io; frame-ancestors
'none'; base-uri 'none'`. B16's other directives are unchanged — in particular
the Referrer-Policy landmine (B1) is untouched. No hex, token, or UIUX value
changes, so `test/tokens.js` needs no assertion rewrite.

### B28. The `_headers` policy gains `Strict-Transport-Security: max-age=31536000; includeSubDomains` and `X-Content-Type-Options: nosniff` — the hardened static-site pair; both are belt-and-suspenders under `default-src 'none'` (issue #118, owner ruling in chat with the site's agent, 2026-10-07; amends B16's pinned policy)

**Source:** issue #118 (owner, ruling of record), transcribed from the owner's
session chat 2026-10-07 in answer to the measured conflicts presented there:
on which additions to rule in, the owner chose "Both — HSTS +
X-Content-Type-Options"; on the HSTS value, the owner chose
"max-age=31536000; includeSubDomains" (the issue's proposal, no `preload`).

- https://github.com/AlastairZeved/Earp-Street-Park/issues/118

**The record.** B16's policy ships two new lines in `_headers`: the HSTS line
rules in the issue's exact value `Strict-Transport-Security:
max-age=31536000; includeSubDomains` — HTTPS forced for every future visit
after the first, so a downgrade/sslstrip attempt against a return visitor
fails — and `X-Content-Type-Options: nosniff` stops the browser MIME-sniffing
a response into something executable the CSP did not allow. Neither closes a
live hole under `default-src 'none'`; the owner ruled them in as the standard
hardened pair a static site carries. B16's other directives are unchanged — in
particular the Referrer-Policy landmine (B1) is untouched. No hex, token, or
UIUX value changes, so `test/tokens.js` needs no assertion rewrite.
