import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How SkillDink handles information you share.",
};

export default function PrivacyPage() {
  return (
    <Container className="py-12 sm:py-16">
      <div className="max-w-3xl">
        <h1 className="font-display text-5xl italic leading-[0.98] tracking-[-0.03em]">Privacy</h1>
        <p className="mt-6 text-lg leading-relaxed text-forest/80">
          The contact form stays in your browser and does not send your details. Demo sign-in
          checks the email and password on the server and stores a sign-in cookie in your browser.
          It does not create a saved account. This page will describe how information is handled
          when accounts and payments are connected.
        </p>
      </div>
    </Container>
  );
}
