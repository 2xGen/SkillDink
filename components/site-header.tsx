"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { signOut } from "@/app/login/actions";
import { ArrowIcon, ButtonLink } from "@/components/button-link";
import { Logo } from "@/components/logo";

const links = [
  { href: "/courses/pickleball-foundations", label: "The course" },
  { href: "/guides", label: "Free guides" },
  { href: "/about", label: "About" },
];

export function SiteHeader({ signedIn = false }: { signedIn?: boolean }) {
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
          {signedIn ? (
            <form action={signOut}>
              <button
                type="submit"
                className="text-[15px] font-semibold text-forest hover:text-court"
              >
                Log out
              </button>
            </form>
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
        <button
          type="button"
          className="grid size-11 place-items-center rounded-full border border-forest md:hidden"
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
            {signedIn ? (
              <form action={signOut}>
                <button
                  type="submit"
                  className="rounded-xl px-2 py-3 text-left text-base font-semibold"
                >
                  Log out
                </button>
              </form>
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
