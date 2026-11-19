import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocument } from "@/components/legal-document";

export const metadata = {
  title: "Privacy Policy",
  description: "How SkillDink handles your account, payment, and course information.",
} satisfies Metadata;

export default function PrivacyPage() {
  return (
    <LegalDocument title="Privacy Policy">
      <section>
        <h2>1. Who we are</h2>
        <p className="mt-3">
          SkillDink is operated by 2xGen LLC, Albuquerque, New Mexico, USA. For privacy requests,
          email <a href="mailto:matthijs@2xgen.com">matthijs@2xgen.com</a>. This policy covers
          skilldink.com.
        </p>
      </section>
      <section>
        <h2>2. Information we use</h2>
        <ul className="mt-3">
          <li>Account details you give us: name, email address, and password if you create one.</li>
          <li>A Google account identifier if you choose Google sign-in.</li>
          <li>A purchase record: that your account paid for Pickleball Foundations, and the Stripe checkout reference.</li>
          <li>Messages you send through the contact form, if you include them.</li>
          <li>
            Page views of the public site, counted by Vercel Web Analytics. That count does not use
            a cookie and is not tied to your account.
          </li>
        </ul>
        <p className="mt-3">
          We do not ask for a playing history, a date of birth, or payment card numbers. Stripe
          collects card details on its own checkout page.
        </p>
      </section>
      <section>
        <h2>3. Why we use it</h2>
        <ul className="mt-3">
          <li>To create and secure your account.</li>
          <li>To know whether that account has bought the course and to open the paid lessons.</li>
          <li>To complete the payment and keep a record of it.</li>
          <li>To reply if you contact us, and to send operational messages about your account or payment.</li>
          <li>To see which public pages are visited.</li>
        </ul>
        <p className="mt-3">
          The legal bases are performance of the contract (your account and course) and our
          legitimate interest in keeping the site secure and understanding how the public pages are
          found in search. Where a law requires consent, we ask for it.
        </p>
      </section>
      <section>
        <h2>4. Who processes it</h2>
        <ul className="mt-3">
          <li>Supabase stores the account and the purchase record. The project region is eu-west-2.</li>
          <li>Google handles Google sign-in if you choose it.</li>
          <li>Stripe processes the payment. Stripe is the controller of the card data it collects.</li>
          <li>Vercel counts page views. It does not receive your account or payment details for that count.</li>
        </ul>
        <p className="mt-3">
          We do not sell your personal information. We do not use it for advertising profiles.
        </p>
      </section>
      <section>
        <h2>5. Search Console and Bing Webmaster Tools</h2>
        <p className="mt-3">
          We use Google Search Console and Bing Webmaster Tools to see how skilldink.com appears in
          search: indexed pages, queries, and crawl messages. Those tools report on the site. They
          are not used to follow an individual learner around the course. Details are on the{" "}
          <Link href="/cookies">cookie page</Link>.
        </p>
      </section>
      <section>
        <h2>6. How long we keep it</h2>
        <p className="mt-3">
          We keep the account and the purchase record until you delete the account, or until we must
          keep a payment record for tax or accounting. After you delete the account, the purchase
          record tied to it is removed and course access ends.
        </p>
      </section>
      <section>
        <h2>7. Your rights</h2>
        <p className="mt-3">
          You can ask for a copy of your account data, a correction of your name or email, or
          deletion. You can delete the account yourself from your profile. Deletion is permanent and
          removes course access, as described in the <Link href="/terms">Terms of Service</Link>.
        </p>
        <p className="mt-3">
          If you are in the European Economic Area or the United Kingdom, you can also object to
          certain processing, ask us to restrict it, and lodge a complaint with your local data
          protection authority. You can contact us first at{" "}
          <a href="mailto:matthijs@2xgen.com">matthijs@2xgen.com</a>.
        </p>
      </section>
      <section>
        <h2>8. Children</h2>
        <p className="mt-3">
          SkillDink is not directed at children under 16. Do not create an account if you are under
          16.
        </p>
      </section>
    </LegalDocument>
  );
}
