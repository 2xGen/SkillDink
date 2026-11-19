import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocument } from "@/components/legal-document";

export const metadata = {
  title: "Terms of Service",
  description: "The terms for using SkillDink and buying Pickleball Foundations.",
} satisfies Metadata;

export default function TermsPage() {
  return (
    <LegalDocument title="Terms of Service">
      <section>
        <h2>1. Agreement</h2>
        <p className="mt-3">
          These Terms of Service (“Terms”) govern your use of skilldink.com and the Pickleball
          Foundations course offered by 2xGen LLC (“SkillDink,” “we,” “us”). By creating an account
          or paying for the course, you agree to these Terms and the{" "}
          <Link href="/privacy">Privacy Policy</Link>. Account creation and checkout require you to
          accept them. If you do not agree, do not create an account or pay.
        </p>
      </section>
      <section>
        <h2>2. Who we are</h2>
        <p className="mt-3">
          2xGen LLC is registered in Albuquerque, New Mexico, USA, and operates SkillDink. Questions
          about these Terms: <a href="mailto:matthijs@2xgen.com">matthijs@2xgen.com</a>.
        </p>
      </section>
      <section>
        <h2>3. The course</h2>
        <p className="mt-3">
          Pickleball Foundations is a beginner learning course: lessons, practice ideas, checks, and
          an assessment. It is sold as-is. It does not award a playing rating, a coaching
          qualification, or a promise that your game will improve. Guides on the site can be read
          without buying the course. One lesson, How a rally works, is free. The rest of the course
          opens only for the account that paid.
        </p>
      </section>
      <section>
        <h2>4. Accounts</h2>
        <p className="mt-3">
          You can create an account with Google or with your name, email, and password. You are
          responsible for activity under your account and for keeping access to that email or Google
          account secure. The name and email you give us must be yours.
        </p>
      </section>
      <section>
        <h2>5. Fees and no refunds</h2>
        <p className="mt-3">
          Pickleball Foundations is a one-time payment of $19 USD, unless a different price is shown
          at checkout. Payments are processed by Stripe. The payment is for immediate access to the
          digital course on the account you used at checkout. A valid coach or associate code can
          unlock the same course on your account without a charge, up to the number of accounts set
          for that code. The course is still supplied as-is.
        </p>
        <p className="mt-3">
          All sales are final. The fee is non-refundable, including if you stop using the course,
          delete your account, or do not finish the lessons, except where mandatory law requires
          otherwise. By paying, you ask us to supply the course immediately and you acknowledge that
          you lose any statutory right to withdraw from the purchase once access begins, where the
          law allows that waiver.
        </p>
      </section>
      <section>
        <h2>6. Deleting your account</h2>
        <p className="mt-3">
          You can delete your account from your profile. Deletion removes the account and the
          purchase record tied to it. You lose access to the paid course. Creating a new account
          later, including with the same email, does not restore that purchase. Deletion cannot be
          undone.
        </p>
      </section>
      <section>
        <h2>7. Acceptable use</h2>
        <p className="mt-3">
          Do not share your login so other people can use a course you bought, copy the lessons for
          sale, attempt unauthorised access, or interfere with the site. We may suspend an account
          that breaks these Terms. Suspension does not create a refund.
        </p>
      </section>
      <section>
        <h2>8. Intellectual property</h2>
        <p className="mt-3">
          SkillDink keeps all rights in the site, the lessons, the illustrations, the name, and the
          course structure. Paying for access does not transfer ownership of the course. You receive
          a personal, non-transferable right to use the course while your account holds a valid
          purchase.
        </p>
      </section>
      <section>
        <h2>9. Third-party services</h2>
        <p className="mt-3">
          The site relies on Google for sign-in, Supabase for accounts and purchase records, and
          Stripe for payment. Their outages or policy changes can affect sign-in or checkout. We are
          not those companies and we do not control them.
        </p>
      </section>
      <section>
        <h2>10. Disclaimers and liability</h2>
        <p className="mt-3">
          The course is provided “as is” and “as available.” To the maximum extent permitted by law,
          we disclaim warranties of merchantability, fitness for a particular purpose, and
          non-infringement. To the maximum extent permitted by law, our total liability for claims
          arising out of these Terms or the course is limited to the amount you paid us for the
          course. We are not liable for indirect, incidental, special, consequential, or lost-profit
          damages. Mandatory rights you have as a consumer are unaffected.
        </p>
      </section>
      <section>
        <h2>11. Privacy and cookies</h2>
        <p className="mt-3">
          Personal data is described in the <Link href="/privacy">Privacy Policy</Link>. Cookies are
          described on the <Link href="/cookies">cookie page</Link>.
        </p>
      </section>
      <section>
        <h2>12. Changes</h2>
        <p className="mt-3">
          We may update these Terms. The “Last updated” date will change when we do. Continued use
          after the update means you accept the Terms for ongoing use. A price already paid stays
          the price of that purchase.
        </p>
      </section>
      <section>
        <h2>13. Governing law</h2>
        <p className="mt-3">
          These Terms are governed by the laws of the State of New Mexico, USA, without regard to
          conflict-of-law rules, except where mandatory consumer protections in your place of
          residence apply.
        </p>
      </section>
      <section>
        <h2>14. Contact</h2>
        <p className="mt-3">
          Questions about these Terms: <a href="mailto:matthijs@2xgen.com">matthijs@2xgen.com</a>.
          This page explains the product. It is not personal legal advice.
        </p>
      </section>
    </LegalDocument>
  );
}
