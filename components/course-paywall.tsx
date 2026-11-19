import Link from "next/link";
import { BuyCourseButton } from "@/components/buy-course-button";
import { CheckIcon } from "@/components/icons";
import { course, freeLessonSlug } from "@/lib/course";

export function CoursePaywall({
  lessonTitle,
  afterFreeLesson = false,
}: {
  lessonTitle?: string;
  afterFreeLesson?: boolean;
}) {
  const Heading = afterFreeLesson ? "h2" : "h1";

  return (
    <section className="rounded-[1.6rem] bg-forest px-6 py-7 text-white sm:px-8">
      <p className="text-xs font-bold tracking-[0.14em] text-lime uppercase">
        Pickleball Foundations
      </p>
      <Heading className="mt-3 max-w-xl font-display text-4xl italic leading-[1.02] tracking-[-0.03em]">
        {afterFreeLesson ? "Continue with the full course" : "This lesson is in the full course"}
      </Heading>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-white/80">
        {afterFreeLesson
          ? "How a rally works is free to try. The other lessons, the on-court exercises, and the assessment come with Pickleball Foundations."
          : `${lessonTitle ?? "This lesson"} is part of Pickleball Foundations. How a rally works is free to try. Everything else unlocks with the full course.`}
      </p>
      <p className="mt-5 text-5xl font-bold tracking-tight">${course.price}</p>
      <p className="mt-1 text-sm text-white/70">One-time payment. No subscription.</p>
      <BuyCourseButton className="mt-5">Get Pickleball Foundations</BuyCourseButton>
      <ul className="mt-6 space-y-2.5">
        {course.included.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm leading-snug text-white/90">
            <CheckIcon className="mt-0.5 size-4 shrink-0 text-lime" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {afterFreeLesson ? null : (
        <p className="mt-6 text-sm font-semibold">
          <Link
            href={`/learn/${freeLessonSlug}`}
            className="text-lime underline decoration-lime/40 underline-offset-4"
          >
            Back to the free lesson
          </Link>
        </p>
      )}
    </section>
  );
}
