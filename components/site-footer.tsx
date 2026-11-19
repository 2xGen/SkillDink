import { Suspense } from "react";
import Link from "next/link";
import { ManageCookiesButton } from "@/components/cookie-banner";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { PaymentMarks } from "@/components/payment-marks";
import { getCurrentUser } from "@/lib/session";

const links = [
  { href: "/courses/pickleball-foundations", label: "The course" },
  { href: "/guides", label: "Free guides" },
  { href: "/for-coaches", label: "For coaches & clubs" },
  { href: "/about", label: "About" },
];

const legal = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookies" },
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
            <Suspense fallback={<AccountPlaceholder />}>
              <FooterAccount />
            </Suspense>
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
            <ManageCookiesButton className="text-sm font-semibold text-forest/60 hover:text-forest" />
          </nav>
        </div>
      </Container>
      <Container className="mt-8 border-t border-forest/10 pt-6">
        <PaymentMarks />
      </Container>
    </footer>
  );
}

function AccountPlaceholder() {
  return <span className="inline-block h-5 w-16" aria-hidden="true" />;
}

function AccountLinkFallback() {
  return (
    <Link href="/login" className="text-sm font-semibold text-forest/80 hover:text-forest">
      Log in
    </Link>
  );
}

async function FooterAccount() {
  const user = await getCurrentUser();
  if (!user) return <AccountLinkFallback />;

  return (
    <Link href="/profile" className="text-sm font-semibold text-forest/80 hover:text-forest">
      Profile
    </Link>
  );
}
