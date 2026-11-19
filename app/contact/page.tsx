import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact SkillDink about the course.",
};

export default function ContactPage() {
  return (
    <Container className="py-12 sm:py-16">
      <div className="max-w-xl">
      <h1 className="font-display text-5xl italic leading-[0.98] tracking-[-0.03em]">
        Contact
      </h1>
      <p className="mt-4 leading-relaxed text-forest/80">
        Questions about the course, a club, or using SkillDink with a group.
      </p>
      <div className="mt-8">
        <ContactForm />
      </div>
      </div>
    </Container>
  );
}
