import type { Metadata } from "next";
import { ArrowIcon, ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "About",
  description:
    "SkillDink teaches pickleball with visual lessons, short practice, and knowledge checks.",
};

export default function AboutPage() {
  return (
    <Container className="py-12 sm:py-16">
      <div className="max-w-3xl">
      <h1 className="font-display text-5xl italic leading-[0.98] tracking-[-0.03em]">
        About SkillDink
      </h1>
      <div className="mt-6 space-y-4 text-lg leading-relaxed text-forest/80">
        <p>
          SkillDink is a pickleball course for people who want the game to make
          sense before they step on the court. Lessons are visual, short, and
          tied to something you can practice.
        </p>
        <p>
          The first course, Pickleball Foundations, covers the court, the rules,
          scoring, the shots you actually use, and a simple plan for where to
          stand. Quizzes check the idea, not your memory of a long video.
        </p>
        <p>
          Course access keeps a player&apos;s place in the lessons. You can walk
          through one free lesson before that is connected.
        </p>
      </div>
      <ButtonLink href="/courses/pickleball-foundations" className="mt-8">
        Explore the course
        <ArrowIcon />
      </ButtonLink>
      </div>
    </Container>
  );
}
