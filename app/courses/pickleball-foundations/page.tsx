import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowIcon, ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { Curriculum } from "@/components/curriculum";
import { CheckIcon } from "@/components/icons";
import { course, courseOutline, freeLessonSlug } from "@/lib/course";
import { hasCourseAccess } from "@/lib/session";

export const metadata: Metadata = {
  title: "Pickleball Foundations",
  description: course.pitch,
};

export default function CoursePage() {
  return (
    <Container className="py-8 sm:py-10">
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-10">
        <div>
          <p className="text-sm font-semibold text-forest/60">
            <Link href="/" className="hover:text-forest">
              Home
            </Link>
            {" / "}
            <Link href="/courses" className="hover:text-forest">
              Courses
            </Link>
            {" / "}
            <span className="text-forest">Pickleball Foundations</span>
          </p>
          <h1 className="mt-4 max-w-xl font-display text-[clamp(2.4rem,4.5vw,3.5rem)] italic leading-[1.02] tracking-[-0.03em]">
            Your foundation for better pickleball.
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-forest/80">
            {course.pitch}
          </p>
          <img
            src="/hero-court.png"
            alt="Pickleball court showing opponents, your team, the kitchen, and the baseline."
            width={1024}
            height={521}
            className="mt-2 h-auto w-full"
          />
          <div className="flex flex-col gap-4 rounded-[1.4rem] bg-pale px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
            <div className="flex items-center gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-forest text-lime">
                <svg viewBox="0 0 20 20" aria-hidden="true" className="size-5">
                  <path d="M7 5.2v9.6L15.2 10 7 5.2Z" fill="currentColor" />
                </svg>
              </span>
              <div>
                <p className="font-bold">Try a sample lesson</p>
                <p className="text-sm text-forest/75">
                  Get a feel for the course with a short, free lesson.
                </p>
              </div>
            </div>
            <Link
              href={`/learn/${freeLessonSlug}`}
              className="inline-flex items-center gap-2 text-[15px] font-semibold whitespace-nowrap hover:text-court"
            >
              Try the free lesson
              <ArrowIcon />
            </Link>
          </div>
        </div>

        <div className="space-y-4 lg:sticky lg:top-24">
          <aside className="rounded-[1.6rem] bg-forest p-6 text-white">
            <p className="text-xs font-bold tracking-[0.14em] text-lime uppercase">
              Pickleball Foundations
            </p>
            <p className="mt-3 text-5xl font-bold tracking-tight">${course.price}</p>
            <p className="mt-1 text-sm text-white/70">One-time payment</p>
            <ButtonLink href="/login" className="mt-5 w-full">
              Get course access
              <ArrowIcon />
            </ButtonLink>
            <p className="mt-6 text-sm font-bold">What&apos;s included</p>
            <ul className="mt-3 space-y-2.5">
              {course.included.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm leading-snug text-white/90">
                  <CheckIcon className="mt-0.5 size-4 shrink-0 text-lime" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
          <Suspense
            fallback={<Curriculum modules={courseOutline} freeLessonSlug={freeLessonSlug} />}
          >
            <CourseCurriculum />
          </Suspense>
        </div>
      </div>
    </Container>
  );
}

async function CourseCurriculum() {
  const unlocked = await hasCourseAccess();
  return (
    <Curriculum modules={courseOutline} freeLessonSlug={freeLessonSlug} unlocked={unlocked} />
  );
}
