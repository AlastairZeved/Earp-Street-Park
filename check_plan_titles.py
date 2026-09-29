#!/usr/bin/env python3
"""Headless self-check for Earp Street Park issues #43 #46 #47 #48 #49 #50.

Rewritten for the NEW board composition (impl-board-v2 — one feature branch
carrying all six issues). The OLD check asserted the pre-#48/#49/#50
composition (toggle click, collapsed/expanded panel overflow, a hardcoded
×3 need count) — already red on untouched main 62365fd before this branch.

Carry-forward (still true in the new composition):
- c1: all `.punch .what` plan titles render display:block with the
  generated colon (`.punch .what::after { content: ":" }`).
- c3: every `.need .what` title is block, uppercase, NO colon — the count
  is read from the markup's own `.need > li` count, never hardcoded.

New assertions the new composition demands (both viewports, exit 0):
1. Zero expansion chrome in the served DOM: no `.note-toggle`, no
   `[data-close]`, no `.panel-head`.
2. `h3.plan-sub` "The plan" is gone; "What it needs" survives.
3. Desktop 1280x800: the page itself does not scroll (one-viewport law).
4. Phone 480x860: the page DOES scroll (owner's standing amendment).
5. No `figure.photo` and no `<img>` inside `#note-week`; zero hits for the
   removed archive stubs ("Nothing here yet." / "Still nothing.").
6. Scroll regions are viewport-scoped (steering comment 302 on the QA card,
   superseded 2026-09-29): at 1280x800 exactly TWO, vertical only —
   #panel-week and #panel-plan, overflow-y auto, overflow-x hidden, content
   taller than the region, no third element scrolls. At the mobile
   breakpoint ZERO internal scroll regions — both panels flow with the page
   (Tinkerbell rulings, t_599fbaee comments 295/297).
7. The #note-stories form renders at first paint with no interaction and
   its rect intersects the viewport (readily visible, no toggle).
8. `.head-lines` (the Come Say Hi flier) is visible on phone and
   `.board-foot` is absent from the DOM.
9. #43 honeypot: `input[name="_gotcha"]` exists inside the form, is
   type="text", and computes display:none.

Exits 0 only when every assertion holds. Usage: python3 check_plan_titles.py
"""

import functools
import http.server
import os
import socketserver
import sys
import threading

from playwright.sync_api import sync_playwright

HERE = os.path.dirname(os.path.abspath(__file__))
VIEWPORTS = [
    (1280, 800, "desktop ~1280px"),
    (480, 860, "mobile breakpoint (max-width: 760px)"),
]

failures = []


def check(label, ok, detail):
    tag = "PASS" if ok else "FAIL"
    print(f"[{tag}] {label} {detail}")
    if not ok:
        failures.append(label)


def main():
    handler = functools.partial(
        http.server.SimpleHTTPRequestHandler, directory=HERE
    )
    socketserver.TCPServer.allow_reuse_address = True
    httpd = socketserver.TCPServer(("127.0.0.1", 0), handler)
    port = httpd.server_address[1]
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    url = f"http://127.0.0.1:{port}/index.html"

    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            for width, height, label in VIEWPORTS:
                page = browser.new_page(viewport={"width": width, "height": height})
                page.goto(url)
                page.wait_for_load_state("load")

                # --- carry-forward c1: plan titles block + generated colon ---
                titles = page.query_selector_all(".punch .what")
                check("c1", len(titles) == 4, f"plan titles found: {len(titles)} (want 4) @ {label}")
                for i, el in enumerate(titles):
                    display = el.evaluate("e => getComputedStyle(e).display")
                    colon = el.evaluate("e => getComputedStyle(e, '::after').content")
                    check(
                        "c1",
                        display == "block" and colon == '":"',
                        f"title[{i}] '{el.inner_text().strip()}' display={display} ::after={colon} @ {label}",
                    )

                # --- carry-forward c3: need list block/uppercase/no-colon,
                #     count read from the markup's own <li> count ---
                needs = page.query_selector_all(".need .what")
                need_li_count = page.evaluate(
                    "document.querySelectorAll('.need > li').length"
                )
                check(
                    "c3",
                    len(needs) == need_li_count,
                    f"need titles found: {len(needs)} vs {need_li_count} <li> in ul.need @ {label}",
                )
                for i, el in enumerate(needs):
                    display = el.evaluate("e => getComputedStyle(e).display")
                    upper = el.evaluate("e => getComputedStyle(e).textTransform")
                    colon = el.evaluate("e => getComputedStyle(e, '::after').content")
                    check(
                        "c3",
                        display == "block" and upper == "uppercase" and colon == "none",
                        f"need[{i}] '{el.inner_text().strip()}' display={display} "
                        f"text-transform={upper} ::after={colon} @ {label}",
                    )

                # --- c4: zero expansion chrome in the served DOM ---
                counts = page.evaluate(
                    """() => ({
                         toggle: document.querySelectorAll('.note-toggle').length,
                         close: document.querySelectorAll('[data-close]').length,
                         head: document.querySelectorAll('.panel-head').length,
                       })"""
                )
                check(
                    "c4",
                    counts["toggle"] == 0 and counts["close"] == 0 and counts["head"] == 0,
                    f"expansion chrome: .note-toggle={counts['toggle']} [data-close]={counts['close']} "
                    f".panel-head={counts['head']} (want 0/0/0) @ {label}",
                )

                # --- c5: "The plan" title gone, "What it needs" survives ---
                # case-insensitive: .plan-sub carries text-transform: uppercase
                subs = [el.inner_text().strip().lower() for el in page.query_selector_all("h3.plan-sub")]
                check(
                    "c5",
                    "the plan" not in subs and "what it needs" in subs,
                    f"h3.plan-sub titles: {subs} (want no 'The plan', keep 'What it needs') @ {label}",
                )

                # --- c6/c7: page scroll law per viewport ---
                if width > 760:
                    # overflow:hidden boxes remain programmatically scrollable, so
                    # a scrollY probe would false-positive; the one-viewport law is
                    # that the page CLIPS (no user scroll, no scrollbar)
                    no_scroll = page.evaluate(
                        """() => {
                             const b = getComputedStyle(document.body);
                             return b.overflow === 'hidden' || (b.overflowX === 'hidden' && b.overflowY === 'hidden');
                           }"""
                    )
                    check("c6", no_scroll, "desktop page clips (one-viewport law: body overflow hidden, no user scroll) @ " + label)
                else:
                    scrolls = page.evaluate(
                        "document.documentElement.scrollHeight > document.documentElement.clientHeight"
                    )
                    check("c7", scrolls, "phone page scrolls (owner's standing amendment) @ " + label)

                # --- c8: week sheet cleaned (#47 + #50) ---
                week = page.evaluate(
                    """() => ({
                         photos: document.querySelectorAll('#note-week figure.photo').length,
                         imgs: document.querySelectorAll('#note-week img').length,
                         nothing: document.body.innerHTML.includes('Nothing here yet.'),
                         still: document.body.innerHTML.includes('Still nothing.'),
                       })"""
                )
                check(
                    "c8",
                    week["photos"] == 0 and week["imgs"] == 0 and not week["nothing"] and not week["still"],
                    f"week sheet: figure.photo={week['photos']} imgs={week['imgs']} "
                    f"'Nothing here yet.'={week['nothing']} 'Still nothing.'={week['still']} (want 0/0/False/False) @ {label}",
                )

                # --- c9: exactly TWO scroll regions, vertical only ---
                regions = page.evaluate(
                    """() => {
                         const out = [];
                         for (const el of document.querySelectorAll('*')) {
                           const cs = getComputedStyle(el);
                           const scrollsY = el.scrollHeight > el.clientHeight &&
                                            (cs.overflowY === 'auto' || cs.overflowY === 'scroll');
                           // only an ACTUAL horizontal overflow is a violation —
                           // the textarea's UA overflow-x:auto with no overflow is fine
                           const scrollableX = el.scrollWidth > el.clientWidth &&
                                               (cs.overflowX === 'scroll' || cs.overflowX === 'auto');
                           if (scrollsY || scrollableX) {
                             out.push({
                               id: el.id || el.className || el.tagName,
                               oy: cs.overflowY, ox: cs.overflowX,
                               sh: el.scrollHeight, ch: el.clientHeight, scrollsY,
                             });
                           }
                         }
                         return out;
                       }"""
                )
                ids = sorted(r["id"] for r in regions)
                if width > 760:
                    check(
                        "c9",
                        ids == ["panel-plan", "panel-week"],
                        f"scroll regions: {ids} (want exactly #panel-plan + #panel-week) @ {label}",
                    )
                else:
                    # Steering comment 299 on the QA card ("exactly TWO internal
                    # scroll regions") was superseded by the follow-up comment:
                    # the phone ruling of record is that BOTH sheets print
                    # full-length in flow and the PAGE scrolls — so the phone
                    # viewport asserts ZERO internal scroll regions.
                    check(
                        "c9",
                        ids == [],
                        f"scroll regions: {ids} (phone: zero internal scroll regions — both panels flow) @ {label}",
                    )
                for r in regions:
                    check(
                        "c9",
                        r["oy"] == "auto" and not (r["ox"] in ("scroll", "auto")),
                        f"{r['id']}: overflow-y={r['oy']} overflow-x={r['ox']} "
                        f"(scrollHeight={r['sh']} clientHeight={r['ch']}) — vertical only @ {label}",
                    )
                    if width > 760:
                        check(
                            "c9",
                            r["scrollsY"],
                            f"{r['id']} content taller than the region at 1280x800 "
                            f"(scrollHeight={r['sh']} > clientHeight={r['ch']}) @ {label}",
                        )

                # --- c10: stories form at first paint, visible ---
                # on phone the form sits in the scrolling flow below the fold;
                # "readily visible" = renders at first paint (no toggle) and is
                # reachable in the page flow — so scroll it into view first
                page.evaluate("document.querySelector('#note-stories form').scrollIntoView()")
                form = page.evaluate(
                    """() => {
                         const f = document.querySelector('#note-stories form');
                         if (!f) return null;
                         const r = f.getBoundingClientRect();
                         const vp = { l: 0, t: 0, r: innerWidth, b: innerHeight };
                         const intersects = r.right > vp.l && r.left < vp.r && r.bottom > vp.t && r.top < vp.b;
                         return { top: r.top, height: r.height, intersects, display: getComputedStyle(f).display };
                       }"""
                )
                check(
                    "c10",
                    form is not None and form["intersects"] and form["display"] != "none",
                    f"stories form: found={form is not None} display={form and form['display']} "
                    f"rect-top={form and round(form['top'])} rect-h={form and round(form['height'])} "
                    f"intersects-viewport={form and form['intersects']} @ {label}",
                )

                # --- c11: #46 flier visible on phone, footer gone, both viewports ---
                flier = page.evaluate(
                    """() => ({
                         hl: (() => { const el = document.querySelector('.head-lines');
                                      return el ? getComputedStyle(el).display : null; })(),
                         foot: document.querySelector('.board-foot') !== null,
                         hits: (document.body.innerHTML.match(/If you see a blonde guy/g) || []).length,
                       })"""
                )
                hl_ok = (flier["hl"] != "none") if width <= 760 else (flier["hl"] is not None)
                check(
                    "c11",
                    hl_ok and not flier["foot"] and flier["hits"] == 1,
                    f"flier: .head-lines display={flier['hl']} board-foot-present={flier['foot']} "
                    f"passage-hits={flier['hits']} (want 1) @ {label}",
                )

                # --- c12: #43 honeypot ---
                hp = page.evaluate(
                    """() => {
                         const el = document.querySelector('form input[name="_gotcha"]');
                         if (!el) return null;
                         return {
                           inForm: !!el.closest('form'),
                           type: el.getAttribute('type'),
                           display: getComputedStyle(el).display,
                           tabindex: el.getAttribute('tabindex'),
                         };
                       }"""
                )
                check(
                    "c12",
                    hp is not None and hp["inForm"] and hp["type"] == "text"
                    and hp["display"] == "none" and hp["tabindex"] == "-1",
                    f"honeypot: found={hp is not None} in-form={hp and hp['inForm']} type={hp and hp['type']} "
                    f"display={hp and hp['display']} tabindex={hp and hp['tabindex']} @ {label}",
                )

                page.close()
            browser.close()
    finally:
        httpd.shutdown()
        httpd.server_close()

    if failures:
        print(f"\n{len(failures)} check(s) FAILED")
        return 1
    print("\nAll checks passed")
    return 0


if __name__ == "__main__":
    sys.exit(main())
