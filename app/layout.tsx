import type { Metadata } from "next";
import { Suspense } from "react";
import { Barlow, Inter } from "next/font/google";
import { CookieBanner } from "@/components/cookie-banner";
import { HeaderGate } from "@/components/header-gate";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["700", "800"],
  style: ["normal", "italic"],
  variable: "--font-barlow",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SkillDink — Understand the game. Play with confidence.",
    template: "%s · SkillDink",
  },
  description:
    "SkillDink is a visual pickleball course for new players. Learn the game with clear lessons, on-court practice, and quick knowledge checks.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-lime focus:px-4 focus:py-2 focus:font-semibold"
        >
          Skip to content
        </a>
        <Suspense fallback={<SiteHeader />}>
          <HeaderGate />
        </Suspense>
        <main id="content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <CookieBanner />
      </body>
    </html>
  );
}
