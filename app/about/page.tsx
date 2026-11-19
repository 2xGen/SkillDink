import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon, ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { course, lessonCount } from "@/lib/course";

const aboutUrl = "https://skilldink.com/about";
const aboutImage = {
  url: "https://skilldink.com/matthijs-van-reek.jpg",
  width: 819,
  height: 1024,
  alt: "Matthijs van Reek, founder of SkillDink, on a pickleball court.",
};

export const metadata: Metadata = {
  title: { absolute: "About SkillDink & Founder Matthijs van Reek" },
  description:
    "Meet Matthijs van Reek, founder of SkillDink. Discover the coaching background and practical approach behind its visual pickleball lessons and beginner guides.",
  alternates: { canonical: aboutUrl },
  robots: "index, follow",
  openGraph: {
    title: "About SkillDink | Matthijs van Reek",
    description:
      "Clear explanations, visual lessons, and practical exercises. Discover why Matthijs van Reek created SkillDink.",
    type: "website",
    url: aboutUrl,
    images: [aboutImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "About SkillDink | Matthijs van Reek",
    description:
      "Clear explanations, visual lessons, and practical exercises. Discover why Matthijs van Reek created SkillDink.",
    images: [aboutImage.url],
  },
};

const steps = [
  {
    title: "Understand the idea",
    body: "Clear explanations and illustrations break down the game without assuming you already know the terminology.",
  },
  {
    title: "Take it onto the court",
    body: "Exercises connect the explanation to an action: a target to aim for, a movement to rehearse, or a decision to notice during a rally.",
  },
  {
    title: "Check your understanding",
    body: "Short questions with explained answers help you identify what makes sense and what deserves another look.",
  },
];

export default function AboutPage() {
  return (
    <Container className="py-12 sm:py-16">
      <article className="mx-auto max-w-3xl">
        <h1 className="font-display text-5xl italic leading-[0.98] tracking-[-0.03em]">
          About SkillDink
        </h1>

        <section className="mt-8">
          <h2 className="font-display text-3xl italic leading-[1.05] tracking-[-0.03em]">
            A clearer way to understand pickleball
          </h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-forest/80">
            <p>
              SkillDink helps you understand what happens on a pickleball court—and gives you
              something practical to work on when you play.
            </p>
            <p>
              Through visual lessons, beginner guides, exercises, and quizzes, we explain the
              rules, shots, positioning, and decisions that can feel confusing at first.
            </p>
            <p>
              The aim is simple: <strong className="font-semibold text-forest">understand the game, practise with purpose, and build confidence through playing.</strong>
            </p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-3xl italic leading-[1.05] tracking-[-0.03em]">
            Created by Matthijs van Reek
          </h2>
          <div className="mt-6 grid items-start gap-6 sm:grid-cols-[15rem_minmax(0,1fr)] sm:gap-8">
            <img
              src="/matthijs-van-reek.jpg"
              alt={aboutImage.alt}
              width={aboutImage.width}
              height={aboutImage.height}
              className="mx-auto w-56 rounded-[1.4rem] sm:mx-0 sm:w-full"
            />
            <div className="space-y-4 text-lg leading-relaxed text-forest/80">
              <p>I’m Matthijs, the founder of SkillDink.</p>
              <p>
                Racket sports have been part of my life for as long as I can remember. My father,
                sister, and uncle are tennis coaches, and my cousin is a professional pickleball
                player.
              </p>
              <p>
                I also have experience giving lessons and running drills. That has shaped how I
                approach the material: explain the purpose, make the task understandable, and give
                the player a useful way to practise it.
              </p>
              <p>
                With pickleball, there is plenty to take in beyond making contact with the ball.
                Scoring, serving order, kitchen restrictions, and knowing when to move can all
                interrupt a beginner’s confidence.
              </p>
              <p>
                I created SkillDink to bring those foundations together in a format players can
                explore at their own pace and return to between sessions.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-3xl italic leading-[1.05] tracking-[-0.03em]">
            Understand it. Try it. Check it.
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {steps.map((step) => (
              <li key={step.title} className="rounded-[1.2rem] bg-pale px-5 py-6">
                <h3 className="text-[15px] font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-forest/75">{step.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-lg leading-relaxed text-forest/80">
            The lessons support your time on court. Playing, practising, and receiving useful
            feedback are how you learn to apply them.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-3xl italic leading-[1.05] tracking-[-0.03em]">
            Start with Pickleball Foundations
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-forest/80">
            Our first course takes beginners through{" "}
            <strong className="font-semibold text-forest">
              eight modules and {lessonCount} lessons:
            </strong>
          </p>
          <ol className="mt-4 grid gap-x-8 sm:grid-cols-2">
            {course.modules.map((item) => (
              <li key={item.number} className="border-t border-forest/10 py-3">
                <p className="text-[15px] font-bold">
                  <span className="mr-2 font-semibold text-forest/40">{item.number}</span>
                  {item.title}
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-forest/80">
            <p>
              Work through the lessons in order, or revisit a topic when something comes up during
              a game.
            </p>
            <p>
              You can also explore the{" "}
              <Link
                href="/guides"
                className="font-semibold text-forest underline decoration-forest/30 underline-offset-4"
              >
                free pickleball guides
              </Link>{" "}
              or{" "}
              <Link
                href="/learn/how-a-rally-works"
                className="font-semibold text-forest underline decoration-forest/30 underline-offset-4"
              >
                try a free lesson
              </Link>{" "}
              before buying.
            </p>
          </div>
          <ButtonLink href="/courses/pickleball-foundations" className="mt-6">
            {`Explore Pickleball Foundations — $${course.price}`}
            <ArrowIcon />
          </ButtonLink>
          <p className="mt-3 text-sm text-forest/60">One-time payment · No subscription</p>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-3xl italic leading-[1.05] tracking-[-0.03em]">
            What does SkillDink mean?
          </h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-forest/80">
            <p>
              <strong className="font-semibold text-forest">
                DINK stands for Developing Insight, Nurturing Knowledge.
              </strong>
            </p>
            <p>
              It reflects the approach behind SkillDink: help players understand a little more, put
              it into practice, and keep building from there.
            </p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-3xl italic leading-[1.05] tracking-[-0.03em]">
            Help us make the explanations better
          </h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-forest/80">
            <p>
              If a lesson leaves you unsure, an illustration is unclear, or you notice something
              that needs correcting, I want to hear about it.
            </p>
            <p>
              Specific feedback helps make SkillDink more useful for the next player learning the
              game.
            </p>
          </div>
          <ButtonLink href="/contact" variant="outline" className="mt-6">
            Contact SkillDink
            <ArrowIcon />
          </ButtonLink>
        </section>
      </article>
    </Container>
  );
}
