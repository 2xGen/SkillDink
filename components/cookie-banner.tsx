"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const COOKIE = "skilldink-consent";
const MAX_AGE = 60 * 60 * 24 * 180;
const MANAGE_COOKIES_EVENT = "skilldink-manage-cookies";

type Choice = "essential" | "all";

function readChoice(): Choice | null {
  const match = document.cookie.match(/(?:^|; )skilldink-consent=(essential|all)(?:;|$)/);
  return match?.[1] === "all" || match?.[1] === "essential" ? match[1] : null;
}

function writeChoice(choice: Choice) {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${COOKIE}=${choice}; Path=/; Max-Age=${MAX_AGE}; SameSite=Lax${secure}`;
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(MANAGE_COOKIES_EVENT));
}

export function ManageCookiesButton({ className = "" }: { className?: string }) {
  return (
    <button type="button" onClick={openCookieSettings} className={className}>
      Manage cookies
    </button>
  );
}

export function CookieBanner() {
  const panelRef = useRef<HTMLDivElement>(null);
  const focusOnOpen = useRef(false);
  const [visible, setVisible] = useState(false);
  const [managing, setManaging] = useState(false);
  const [optional, setOptional] = useState(false);

  useEffect(() => {
    if (!readChoice()) setVisible(true);

    function open() {
      const current = readChoice();
      setOptional(current === "all");
      setManaging(true);
      setVisible(true);
      focusOnOpen.current = true;
    }

    window.addEventListener(MANAGE_COOKIES_EVENT, open);
    return () => window.removeEventListener(MANAGE_COOKIES_EVENT, open);
  }, []);

  useEffect(() => {
    if (!visible || !focusOnOpen.current) return;
    focusOnOpen.current = false;
    panelRef.current?.focus();
  }, [visible, managing]);

  function save(choice: Choice) {
    writeChoice(choice);
    setOptional(choice === "all");
    setManaging(false);
    setVisible(false);
  }

  function close() {
    setManaging(false);
    if (readChoice()) setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 p-3 sm:p-5">
      <div
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-labelledby="cookie-banner-title"
        className="mx-auto max-w-3xl rounded-[1.6rem] bg-forest px-5 py-5 text-white shadow-[0_24px_60px_-24px_rgba(18,59,50,0.75)] outline-none sm:px-6"
      >
        <p className="text-xs font-bold tracking-[0.14em] text-lime uppercase">Cookies</p>
        <h2
          id="cookie-banner-title"
          className="mt-2 font-display text-2xl italic tracking-[-0.03em]"
        >
          {managing ? "Manage cookies" : "Your cookie choice"}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-white/80">
          Necessary cookies keep you signed in and remember this choice. Optional cookies stay off
          unless you allow them. Details are on the{" "}
          <Link href="/cookies" className="font-semibold underline underline-offset-4">
            cookie page
          </Link>
          .
        </p>
        {managing ? (
          <div className="mt-4 space-y-3">
            <div className="rounded-2xl bg-white/10 px-4 py-3">
              <div className="flex items-center justify-between gap-3">
                <p className="font-semibold">Necessary</p>
                <span className="text-xs font-bold tracking-[0.12em] text-lime uppercase">
                  Always on
                </span>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-white/75">
                Signs you in, stores this choice for six months, and keeps a short-lived cookie if
                you accept the Terms with Google.
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 px-4 py-3">
              <div className="flex items-center justify-between gap-3">
                <p className="font-semibold">Optional</p>
                <input
                  type="checkbox"
                  checked={optional}
                  onChange={(event) => setOptional(event.target.checked)}
                  aria-label="Allow optional cookies"
                  className="size-4 shrink-0 accent-lime"
                />
              </div>
              <p className="mt-1 text-sm leading-relaxed text-white/75">
                SkillDink does not set analytics or advertising cookies. Google Search Console and
                Bing Webmaster Tools do not place a cookie in your browser. This switch records
                whether you allow optional cookies.
              </p>
            </div>
          </div>
        ) : null}
        <div className="mt-4 flex flex-wrap gap-2">
          {managing ? (
            <>
              <button
                type="button"
                onClick={() => save(optional ? "all" : "essential")}
                className="rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-forest hover:bg-[#b6e62a]"
              >
                Save
              </button>
              <button
                type="button"
                onClick={close}
                className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold hover:bg-white/10"
              >
                Close
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => save("all")}
                className="rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-forest hover:bg-[#b6e62a]"
              >
                Accept
              </button>
              <button
                type="button"
                onClick={() => save("essential")}
                className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold hover:bg-white/10"
              >
                Reject optional
              </button>
              <button
                type="button"
                onClick={() => {
                  setOptional(readChoice() === "all");
                  setManaging(true);
                }}
                className="rounded-full px-5 py-2.5 text-sm font-semibold underline underline-offset-4 hover:text-lime"
              >
                Manage
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
