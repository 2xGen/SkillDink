import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon, ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { course, lessonCount } from "@/lib/course";
import { guides } from "@/lib/guides";

const guidesUrl = "https://skilldink.com/guides";
const guidesImage = {
  url: "https://skilldink.com/guides-og.jpg",
  width: 1200,
  height: 630,
  alt: "SkillDink free pickleball guides covering rules, scoring, shots, and strategy.",
};

export const metadata: Metadata = {
  title: { absolute: "Free Pickleball Guides for Beginners | SkillDink" },
  description:
    "Learn pickleball with free beginner guides to rules, scoring, the kitchen, essential shots, strategy, and practice. Clear explanations and helpful visuals.",
  alternates: { canonical: guidesUrl },
  robots: "index, follow",
  openGraph: {
    title: "Free Pickleball Guides for Beginners | SkillDink",
    description:
      "Make sense of pickleball’s rules, scoring, shots, and strategy. Explore free visual guides to help you understand the game and start playing.",
    type: "website",
    url: guidesUrl,
    images: [guidesImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Pickleball Guides for Beginners | SkillDink",
    description:
      "Make sense of pickleball’s rules, scoring, shots, and strategy. Explore free visual guides to help you understand the game and start playing.",
    images: [guidesImage],
  },
};

const comparison = [
  ["A useful overview of one topic", "A structured sequence of 25 lessons"],
  ["Key explanations and selected illustrations", "Detailed visual explanations"],
  ["One practical takeaway", "Exercises, drills, and practice plans"],
  ["Read whichever topic you need", "Lesson quizzes, progress, and a final check"],
];

export default function GuidesPage() {
  return (
    <Container className="py-12 sm:py-16">
      <div className="max-w-3xl">
        <h1 className="font-display text-5xl italic leading-[0.98] tracking-[-0.03em]">
          Free pickleball guides for beginners
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-forest/80">
          Learn how to play pickleball with clear explanations of the rules, scoring, kitchen,
          essential shots, and court positioning. Explore beginner strategies, practical drills,
          and tips for your first game.
        </p>
        <p className="mt-3 text-lg leading-relaxed text-forest/80">
          Choose a guide below, or follow a structured learning path with Pickleball Foundations.
        </p>
        <ButtonLink href="/courses/pickleball-foundations" className="mt-6">
          Explore Pickleball Foundations
          <ArrowIcon />
        </ButtonLink>
      </div>

      <div className="mt-12 overflow-hidden rounded-[1.4rem] border border-forest/10">
        <table className="w-full border-collapse text-left text-sm leading-relaxed">
          <thead>
            <tr className="bg-forest text-white">
              <th className="px-4 py-3 font-bold sm:px-5">Free guides</th>
              <th className="px-4 py-3 font-bold sm:px-5">${course.price} course</th>
            </tr>
          </thead>
          <tbody>
            {comparison.map((row) => (
              <tr key={row[0]} className="border-t border-forest/10">
                <td className="px-4 py-3 align-top text-forest/80 sm:px-5">{row[0]}</td>
                <td className="bg-pale/60 px-4 py-3 align-top font-semibold sm:px-5">{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="border-t border-forest/10 px-4 py-3 text-sm text-forest/70 sm:px-5">
          {course.modules.length} modules · {lessonCount} lessons · One-time payment
        </p>
      </div>

      <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <li key={guide.slug}>
            <Link
              href={`/guides/${guide.slug}`}
              className="flex h-full flex-col rounded-[1.4rem] bg-pale p-5 hover:bg-[#e4edcf]"
            >
              <p className="text-xs font-bold tracking-[0.14em] text-court uppercase">
                {guide.topic}
              </p>
              <h2 className="mt-2 text-xl font-bold">{guide.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-forest/75">{guide.summary}</p>
              <span className="mt-4 text-sm font-semibold underline underline-offset-4">
                Read guide
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
