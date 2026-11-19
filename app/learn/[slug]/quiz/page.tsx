import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { CoursePaywall } from "@/components/course-paywall";
import { LearnShell } from "@/components/learn-shell";
import { QuizCard } from "@/components/quiz-card";
import { getLesson, neighbors, sampleQuiz } from "@/lib/course";
import { hasCourseAccess } from "@/lib/session";

type QuizPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [{ slug: "understanding-the-kitchen" }];
}

export const metadata: Metadata = {
  title: "Knowledge check",
  description: "Knowledge checks are included with Pickleball Foundations.",
};

export default function QuizPage({ params }: QuizPageProps) {
  return (
    <Suspense
      fallback={
        <div className="mx-auto w-full max-w-[76rem] px-5 py-10 sm:px-8">
          <div className="h-8 w-56 rounded-full bg-pale" />
          <div className="mt-8 h-72 rounded-[1.4rem] bg-pale" />
        </div>
      }
    >
      <QuizContent params={params} />
    </Suspense>
  );
}

async function QuizContent({ params }: QuizPageProps) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson || slug !== "understanding-the-kitchen") notFound();

  const unlocked = await hasCourseAccess();
  if (!unlocked) {
    return (
      <LearnShell activeSlug={slug} completedCount={0} progress={0} locked>
        <CoursePaywall lessonTitle={lesson.title} />
      </LearnShell>
    );
  }

  const { next, index, total } = neighbors(slug);

  return (
    <LearnShell
      activeSlug={slug}
      completedCount={index + 1}
      progress={Math.round(((index + 1) / total) * 100)}
      unlocked
    >
      <QuizCard
        quiz={sampleQuiz}
        continueHref={next ? `/learn/${next.slug}` : "/courses/pickleball-foundations"}
      />
    </LearnShell>
  );
}
