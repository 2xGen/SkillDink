import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Terms",
  description: "How you can use SkillDink.",
};

export default function TermsPage() {
  return (
    <Container className="py-12 sm:py-16">
      <div className="max-w-3xl">
        <h1 className="font-display text-5xl italic leading-[0.98] tracking-[-0.03em]">Terms</h1>
        <p className="mt-6 text-lg leading-relaxed text-forest/80">
          Pickleball Foundations is a beginner learning course. The checks help you review your
          understanding. They do not award a playing rating or a coaching qualification. Payments
          and course access are not yet connected on this site.
        </p>
      </div>
    </Container>
  );
}
