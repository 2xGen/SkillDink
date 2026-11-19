import Link from "next/link";
import { ArrowIcon, ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import {
  CheckIcon,
  LessonCardIcon,
  LessonsIcon,
  ModulesIcon,
  PaddleIcon,
  PriceIcon,
  QuizCardIcon,
} from "@/components/icons";
import { course } from "@/lib/course";

const courseHref = "/courses/pickleball-foundations";
const freeLessonHref = "/learn/how-a-rally-works";

const modules = [
  {
    number: "01",
    title: "Meet the game",
    body: "Get familiar with pickleball, the court, the equipment, and how a rally works.",
  },
  {
    number: "02",
    title: "Rules",
    body: "Understand the two-bounce rule, the kitchen, common faults, and situations you will encounter during play.",
  },
  {
    number: "03",
    title: "Scoring",
    body: "Learn how points are earned, how to call the score, and who serves next.",
  },
  {
    number: "04",
    title: "Essential shots",
    body: "Meet the serve, return, forehand and backhand drive, dink, and volley. Get an introduction to the drop, lob, and overhead.",
  },
  {
    number: "05",
    title: "Footwork & positioning",
    body: "Build a ready position, move with better balance, and understand how to cover the court with a partner.",
  },
  {
    number: "06",
    title: "Simple strategy",
    body: "Recognise opportunities to move towards the kitchen, communicate with your partner, and choose safer shots.",
  },
  {
    number: "07",
    title: "Practice",
    body: "Follow a simple 20-minute plan and use repeatable drills to track your progress.",
  },
  {
    number: "08",
    title: "Ready to play",
    body: "Prepare for your first games, check your foundations, and choose your next practice goal.",
  },
];

const stats = [
  { label: "8 modules", icon: ModulesIcon },
  { label: "25 lessons", icon: LessonsIcon },
  { label: `$${course.price} one-time payment`, icon: PriceIcon },
];

const ways = [
  {
    title: "Understand what matters",
    body: "Clear explanations and original illustrations help you make sense of the game, one lesson at a time.",
    icon: LessonCardIcon,
  },
  {
    title: "Take it onto the court",
    body: "Practical exercises give you something specific to try with a paddle, a ball, and a partner.",
    icon: PaddleIcon,
  },
  {
    title: "Check your understanding",
    body: "Short quizzes and explained answers help you spot what you understand and what needs another look.",
    icon: QuizCardIcon,
  },
];

const included = [
  "All 8 modules and 25 lessons",
  "Visual explanations of rules, shots, and positioning",
  "Practical exercises and repeatable drills",
  "Lesson quizzes with explained answers",
  "A final foundations check and a plan for your next goal",
];

const questions = [
  {
    question: "Is this course for complete beginners?",
    answer:
      "Yes. It starts with the court, equipment, and how the game works. It is also useful if you have played a few games but still feel unsure about rules, scoring, or positioning.",
  },
  {
    question: "Is this a video course?",
    answer:
      "No. Lessons use written explanations and illustrations, alongside practical exercises and quizzes. You can work through the material at your own pace.",
  },
  {
    question: "Do I need a court to take the course?",
    answer:
      "You can study the lessons and complete the knowledge checks without one. You will need access to a court and equipment to try the on-court exercises. Some drills also need a partner.",
  },
  {
    question: "Will this give me a playing rating or coaching qualification?",
    answer:
      "No. This is a beginner learning course. The checks help you review your understanding and choose what to practise; they do not award an official rating or coaching qualification.",
  },
];

export default function HomePage() {
  return (
    <>
      <Container className="grid items-center gap-8 pb-4 pt-2 lg:grid-cols-[minmax(0,1.28fr)_minmax(0,0.8fr)] lg:gap-2 lg:pt-3">
        <div>
          <h1 className="font-display text-[clamp(2.7rem,4.5vw,4.05rem)] font-extrabold italic leading-[0.98] tracking-[-0.04em] text-forest">
            Understand the game.
            <br />
            Play with confidence.
          </h1>
          <div className="mt-5 max-w-xl space-y-4 text-lg leading-relaxed text-forest/80">
            <p>
              New to pickleball? Learn the rules, make sense of scoring, and understand the
              shots and positioning that help you get started.
            </p>
            <p>
              Pickleball Foundations brings it together in clear visual lessons, practical
              exercises, and quick knowledge checks.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <ButtonLink href={courseHref}>
              Explore the course
              <ArrowIcon />
            </ButtonLink>
            <Link
              href={freeLessonHref}
              className="text-[15px] font-semibold underline decoration-forest/40 underline-offset-4 hover:decoration-forest"
            >
              Try a free lesson
            </Link>
          </div>
        </div>
        <img
          src="/hero-court.png"
          alt="A doubles court labelled with the opponents, your team, the kitchen (non-volley zone), and the baseline."
          width={1024}
          height={521}
          className="h-auto w-full"
        />
      </Container>

      <Container>
        <ul className="grid overflow-hidden rounded-[1.4rem] bg-pale sm:grid-cols-3 sm:divide-x sm:divide-forest/10">
          {stats.map((item) => (
            <li
              key={item.label}
              className="flex items-center justify-center gap-3 border-b border-forest/10 px-4 py-4 last:border-b-0 sm:border-b-0"
            >
              <item.icon className="size-7" />
              <span className="text-[15px] font-semibold">{item.label}</span>
            </li>
          ))}
        </ul>
      </Container>

      <Container className="py-14 lg:py-16">
        <section className="rounded-[1.4rem] bg-pale px-6 py-7 sm:px-8">
          <h2 className="font-display text-4xl italic leading-[1.02] tracking-[-0.03em] sm:text-[2.75rem]">
            Less guessing. More understanding.
          </h2>
          <p className="mt-4 text-lg font-semibold leading-relaxed">
            Who serves next? When can you step into the kitchen? What should you do after the return?
          </p>
          <p className="mt-3 text-base leading-relaxed text-forest/80">
            Learn the answers—and how to use them when you play. Whether you are picking up a
            paddle for the first time or have played a few games and still feel unsure, start with
            a foundation you can build on.
          </p>
        </section>
      </Container>

      <Container className="pb-14 lg:pb-16">
        <section className="rounded-[1.7rem] border border-forest/10 px-5 py-7 sm:px-8 sm:py-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <h2 className="font-display text-4xl italic leading-[1.02] tracking-[-0.03em] sm:text-[2.75rem]">
                Meet Pickleball Foundations
              </h2>
              <p className="mt-3 text-base leading-relaxed text-forest/80">
                One beginner course covering the game from your first serve to your next practice
                session.
              </p>
            </div>
            <ButtonLink href={courseHref} className="shrink-0">
              See the full course
              <ArrowIcon />
            </ButtonLink>
          </div>
          <ol className="mt-6 grid gap-x-8 sm:grid-cols-2">
            {modules.map((item) => (
              <li key={item.number} className="border-t border-forest/10 py-3.5">
                <h3 className="text-[15px] font-bold">
                  <span className="mr-2 font-semibold text-forest/40">{item.number}</span>
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-forest/75">{item.body}</p>
              </li>
            ))}
          </ol>
        </section>
      </Container>

      <Container className="pb-14 lg:pb-16">
        <section className="rounded-[1.7rem] bg-pale px-5 py-8 sm:px-8 sm:py-10">
          <h2 className="font-display text-4xl italic leading-[1.02] tracking-[-0.03em] sm:text-[2.75rem]">
            Learn it. Try it. Check it.
          </h2>
          <ul className="mt-6 grid gap-4 lg:grid-cols-3">
            {ways.map((way) => (
              <li key={way.title} className="rounded-[1.2rem] bg-white px-5 py-6">
                <way.icon className="size-16" />
                <h3 className="mt-4 text-[15px] font-bold">{way.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-forest/75">{way.body}</p>
              </li>
            ))}
          </ul>
        </section>
      </Container>

      <Container className="pb-14 lg:pb-16">
        <div className="flex flex-col gap-5 border-y border-forest/10 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl italic leading-[1.05] tracking-[-0.03em] sm:text-4xl">
              Take a look before you start.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-forest/80">
              Try{" "}
              <Link
                href={freeLessonHref}
                className="font-bold text-forest underline decoration-forest/30 underline-offset-4"
              >
                “How a rally works”
              </Link>{" "}
              for free. Follow the serve, the return, and the two required bounces. Then check
              your understanding with a short question.
            </p>
          </div>
          <ButtonLink href={freeLessonHref} className="shrink-0">
            Try the free lesson
            <ArrowIcon />
          </ButtonLink>
        </div>
      </Container>

      <Container className="pb-14 lg:pb-16">
        <h2 className="font-display text-4xl italic leading-[1.02] tracking-[-0.03em] sm:text-[2.75rem]">
          Build your foundations for ${course.price}.
        </h2>
        <article className="mt-6 rounded-[1.7rem] bg-forest px-6 py-7 text-white sm:px-8 sm:py-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="flex-1">
              <h3 className="font-display text-[2rem] italic leading-[1.02] tracking-[-0.03em] sm:text-4xl">
                Pickleball Foundations
              </h3>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-white/75">
                Clear guidance for understanding the game and practising with purpose.
              </p>
            </div>
            <div className="hidden w-px self-stretch bg-white/15 sm:block" />
            <div className="sm:w-60 sm:shrink-0 sm:text-center">
              <p className="text-5xl font-bold tracking-tight">${course.price} USD</p>
              <p className="mt-1 text-sm text-white/70">One-time payment. No subscription.</p>
              <ButtonLink href="/login" className="mt-4">
                Get Pickleball Foundations
                <ArrowIcon />
              </ButtonLink>
            </div>
          </div>
          <ul className="mt-6 grid gap-2.5 border-t border-white/15 pt-5 sm:grid-cols-2">
            {included.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-snug text-white/90">
                <CheckIcon className="mt-0.5 size-4 shrink-0 text-lime" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </Container>

      <Container className="pb-14 lg:pb-16">
        <div className="max-w-3xl">
          <h2 className="font-display text-4xl italic leading-[1.02] tracking-[-0.03em] sm:text-[2.75rem]">
            A few things you might be wondering
          </h2>
          <div className="mt-2">
            {questions.map((item) => (
              <article key={item.question} className="border-t border-forest/10 py-5">
                <h3 className="text-lg font-bold">{item.question}</h3>
                <p className="mt-2 text-base leading-relaxed text-forest/75">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>

      <Container className="pb-8">
        <section className="flex flex-col gap-5 rounded-[1.6rem] bg-forest px-6 py-7 text-white sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl italic leading-[1.05] tracking-[-0.03em] sm:text-4xl">
              Make your next game feel more familiar.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white/75">
              Understand the rules. Know your options. Step onto the court with a clearer plan.
            </p>
          </div>
          <div className="flex shrink-0 flex-col items-start gap-3 sm:items-end">
            <ButtonLink href={courseHref}>
              Explore Pickleball Foundations
              <ArrowIcon />
            </ButtonLink>
            <Link
              href={freeLessonHref}
              className="text-[15px] font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
            >
              Try a free lesson
            </Link>
          </div>
        </section>
      </Container>
    </>
  );
}
