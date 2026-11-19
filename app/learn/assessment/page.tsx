import type { Metadata } from "next";
import { Suspense } from "react";
import { CourseAssessment } from "@/components/course-assessment";
import { CoursePaywall } from "@/components/course-paywall";
import { LearnShell } from "@/components/learn-shell";
import { courseAssessment, lessonCount } from "@/lib/course";
import { hasCourseAccess } from "@/lib/session";

export const metadata: Metadata = {
  title: "Course assessment",
  description: "The course assessment is included with Pickleball Foundations.",
};

export default function AssessmentPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto w-full max-w-[76rem] px-5 py-10 sm:px-8">
          <div className="h-8 w-56 rounded-full bg-pale" />
          <div className="mt-8 h-72 rounded-[1.4rem] bg-pale" />
        </div>
      }
    >
      <AssessmentContent />
    </Suspense>
  );
}

async function AssessmentContent() {
  const unlocked = await hasCourseAccess();

  if (!unlocked) {
    return (
      <LearnShell activeSlug="assessment" completedCount={0} progress={0} locked>
        <CoursePaywall lessonTitle="The course assessment" />
      </LearnShell>
    );
  }

  return (
    <LearnShell
      activeSlug="assessment"
      completedCount={lessonCount}
      progress={100}
      unlocked
    >
      <CourseAssessment questions={courseAssessment} />
    </LearnShell>
  );
}
