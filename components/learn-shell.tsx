import Link from "next/link";
import { Container } from "@/components/container";
import { LessonSidebar } from "@/components/lesson-sidebar";
import { course, courseOutline, freeLessonSlug } from "@/lib/course";

export function LearnShell({
  activeSlug,
  completedCount,
  progress,
  locked = false,
  preview = false,
  unlocked = false,
  children,
}: {
  activeSlug?: string;
  completedCount: number;
  progress: number;
  locked?: boolean;
  preview?: boolean;
  unlocked?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Container className="pb-16 pt-2">
      <div className="flex flex-col gap-3 border-b border-forest/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/courses/pickleball-foundations" className="font-bold hover:text-court">
          Pickleball Foundations
        </Link>
        {locked ? (
          <p className="text-sm font-semibold">Full course · ${course.price}</p>
        ) : preview ? (
          <p className="text-sm font-semibold">Free lesson</p>
        ) : (
          <div className="flex items-center gap-3">
            <div
              className="h-2.5 w-40 overflow-hidden rounded-full bg-pale sm:w-48"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Course progress"
            >
              <div className="h-full rounded-full bg-lime" style={{ width: `${progress}%` }} />
            </div>
            <p className="text-sm font-semibold whitespace-nowrap">{progress}% complete</p>
          </div>
        )}
      </div>
      <div className="mt-6 grid items-start gap-8 lg:grid-cols-[270px_minmax(0,1fr)]">
        <div className="lg:sticky lg:top-24">
          <LessonSidebar
            activeSlug={activeSlug}
            completedCount={completedCount}
            modules={courseOutline}
            freeLessonSlug={freeLessonSlug}
            unlocked={unlocked}
          />
        </div>
        <div>{children}</div>
      </div>
    </Container>
  );
}
