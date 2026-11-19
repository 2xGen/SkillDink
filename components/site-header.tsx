"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowIcon, ButtonLink } from "@/components/button-link";
import { Logo } from "@/components/logo";

const links = [
  { href: "/courses/pickleball-foundations", label: "The course" },
  { href: "/guides", label: "Free guides" },
  { href: "/about", label: "About" },
];

export function SiteHeader({ userName }: { userName?: string | null }) {
  const accountPending = userName === undefined;
  const signedIn = Boolean(userName);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 border-b bg-ivory ${
        scrolled ? "border-forest/10" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[76rem] items-center justify-between px-5 py-4 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-semibold text-forest hover:text-court"
            >
              {link.label}
            </Link>
          ))}
          {accountPending ? (
            <span className="inline-block size-11" aria-hidden="true" />
          ) : signedIn ? (
            <ProfileLink />
          ) : (
            <Link
              href="/login"
              className="text-[15px] font-semibold text-forest hover:text-court"
            >
              Log in
            </Link>
          )}
          <ButtonLink href="/courses/pickleball-foundations" className="px-4 py-2">
            Explore the course
            <ArrowIcon />
          </ButtonLink>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          {signedIn ? <ProfileLink /> : null}
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-forest"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex w-4 flex-col gap-1.5" aria-hidden="true">
            <span
              className={`h-0.5 bg-forest transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`h-0.5 bg-forest transition ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-0.5 bg-forest transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
        </div>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-forest/10 px-5 py-4 md:hidden"
          aria-label="Mobile"
        >
          <div className="mx-auto flex max-w-[76rem] flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-2 py-3 text-base font-semibold"
              >
                {link.label}
              </Link>
            ))}
            {accountPending ? (
              <span className="mx-2 my-3 inline-block h-6 w-28" aria-hidden="true" />
            ) : signedIn ? (
              <Link
                href="/profile"
                onClick={() => setOpen(false)}
                className="rounded-xl px-2 py-3 text-base font-semibold"
              >
                Profile
              </Link>
            ) : (
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="rounded-xl px-2 py-3 text-base font-semibold"
              >
                Log in
              </Link>
            )}
            <ButtonLink
              href="/courses/pickleball-foundations"
              className="mt-3 w-fit"
              onClick={() => setOpen(false)}
            >
              Explore the course
              <ArrowIcon />
            </ButtonLink>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

function ProfileLink() {
  return (
    <Link
      href="/profile"
      aria-label="Profile"
      className="grid size-11 place-items-center rounded-full border border-forest text-forest transition hover:bg-pale"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5">
        <circle cx="12" cy="8" r="3.25" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M5.2 19.25c1.45-3.05 3.9-4.5 6.8-4.5s5.35 1.45 6.8 4.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </Link>
  );
}
