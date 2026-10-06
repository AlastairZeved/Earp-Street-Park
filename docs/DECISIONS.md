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
