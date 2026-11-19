import type { Metadata } from "next";
import Link from "next/link";
import { ManageCookiesButton } from "@/components/cookie-banner";
import { LegalDocument } from "@/components/legal-document";

export const metadata = {
  title: "Cookies",
  description: "The cookies SkillDink uses, and the search tools that do not follow you around the course.",
} satisfies Metadata;

export default function CookiesPage() {
  return (
    <LegalDocument title="Cookies">
      <section>
        <h2>1. What this page covers</h2>
        <p className="mt-3">
          This page describes the cookies on skilldink.com and the search tools we use to operate
          the public site. It is here so you can see what runs in your browser. A wider description
          of personal data is in the <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </section>
      <section>
        <h2>2. Cookies we set</h2>
        <p className="mt-3">
          When you log in, Supabase stores a session cookie in your browser. The cookie name starts
          with <span className="font-semibold">sb-</span>. It keeps you signed in and lets the site
          tell whether your account has bought the course. It is strictly necessary for the account.
          It is not an advertising cookie.
        </p>
        <p className="mt-3">
          If you accept the Terms while creating an account with Google, the site may set a
          short-lived cookie named <span className="font-semibold">skilldink-terms</span> so that
          acceptance can be saved when Google sends you back. It expires within a few minutes.
        </p>
        <p className="mt-3">
          The cookie banner stores your choice in{" "}
          <span className="font-semibold">skilldink-consent</span>. That cookie is necessary so the
          banner can stay closed until you open it again.
        </p>
      </section>
      <section>
        <h2>3. Stripe</h2>
        <p className="mt-3">
          Checkout opens on Stripe’s website. Stripe may set its own cookies there to process the
          payment and reduce fraud. Those cookies are controlled by Stripe, under Stripe’s privacy
          policy, and only apply when you go to pay.
        </p>
      </section>
      <section>
        <h2>4. Google Search Console and Bing Webmaster Tools</h2>
        <p className="mt-3">
          We use Google Search Console and Bing Webmaster Tools to operate the public site. They
          tell us which pages are indexed, which queries show the site, and whether a search engine
          had trouble crawling a page. We use them to keep skilldink.com available in search.
        </p>
        <p className="mt-3">
          Those tools do not place an advertising or analytics cookie on you while you read a lesson.
          They do not build a profile of your course progress. Verification of the site, when used,
          is a file or a meta tag for the search engine, not a tracker in your account.
        </p>
        <p className="mt-3">
          The site does not use Google Analytics, Google Ads, or a Bing advertising tag.
        </p>
      </section>
      <section>
        <h2>5. Your choices</h2>
        <p className="mt-3">
          A banner asks you to accept or reject optional cookies the first time you visit.
          Necessary cookies stay on either way. Your choice is stored in a cookie named{" "}
          <span className="font-semibold">skilldink-consent</span> for six months. Manage cookies,
          in the footer and here, opens that banner again so you can change it.
        </p>
        <p className="mt-3">
          <ManageCookiesButton className="font-semibold underline underline-offset-4" />
        </p>
        <p className="mt-3">
          You can also block or delete cookies in your browser. If you block the session cookie,
          you can still read the free guides and the free lesson, and you will need to log in again
          to open a bought course.
        </p>
      </section>
      <section>
        <h2>6. Contact</h2>
        <p className="mt-3">
          Questions about cookies: <a href="mailto:matthijs@2xgen.com">matthijs@2xgen.com</a>.
        </p>
      </section>
    </LegalDocument>
  );
}
