import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon, ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { course } from "@/lib/course";

export const metadata: Metadata = {
  title: "Courses",
  description: "Pickleball courses from SkillDink, starting with Foundations.",
};

export default function CoursesPage() {
  return (
    <Container className="py-12 sm:py-16">
      <p className="text-sm font-semibold text-forest/60">
        <Link href="/" className="hover:text-forest">
          Home
        </Link>
        <span> / Courses</span>
      </p>
      <h1 className="mt-4 max-w-xl font-display text-5xl italic leading-[0.98] tracking-[-0.03em]">
        Courses
      </h1>
      <p className="mt-4 max-w-lg text-lg leading-relaxed text-forest/80">
        Visual lessons for players who want to understand the game before they
        rely on instinct.
      </p>
      <article className="mt-10 grid max-w-4xl gap-6 rounded-[1.7rem] bg-forest p-6 text-white sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
        <div>
          <p className="text-xs font-bold tracking-[0.16em] text-lime uppercase">
            Beginner
          </p>
          <h2 className="mt-2 font-display text-4xl italic tracking-[-0.03em]">
            {course.title}
          </h2>
          <p className="mt-3 max-w-md text-white/75">{course.tagline}</p>
        </div>
        <div className="flex flex-col items-start gap-3 sm:items-end">
          <p className="text-4xl font-bold">${course.price}</p>
          <ButtonLink href="/courses/pickleball-foundations">
            View course
            <ArrowIcon />
          </ButtonLink>
        </div>
      </article>
    </Container>
  );
}
