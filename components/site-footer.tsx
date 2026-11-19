import Link from "next/link";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";

const links = [
  { href: "/courses/pickleball-foundations", label: "The course" },
  { href: "/guides", label: "Free guides" },
  { href: "/about", label: "About" },
  { href: "/login", label: "Log in" },
];

const legal = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="pb-10 pt-4">
      <Container className="flex flex-col gap-6 border-t border-forest/10 pt-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Logo />
          <p className="mt-2 text-sm text-forest/70">Developing Insight, Nurturing Knowledge.</p>
        </div>
        <div className="flex flex-col gap-3">
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-forest/80 hover:text-forest"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Legal">
            {legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-forest/60 hover:text-forest"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
