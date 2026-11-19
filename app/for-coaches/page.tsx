import type { Metadata } from "next";
import { Suspense } from "react";
import { ArrowIcon, ButtonLink } from "@/components/button-link";
import { CoachEnquiryForm } from "@/components/coach-enquiry-form";
import { Container } from "@/components/container";

const pageUrl = "https://skilldink.com/for-coaches";

export const metadata: Metadata = {
  title: { absolute: "Pickleball Resources for Coaches & Clubs | SkillDink" },
  description:
    "Support your pickleball lessons with visual learning, quizzes, and practical exercises. Explore group course access and upcoming SkillDink coach education.",
  alternates: { canonical: pageUrl },
  robots: "index, follow",
  openGraph: {
    title: "Support Your Pickleball Lessons with SkillDink",
    description:
      "Give players a clearer understanding before they step on court—and useful guidance to revisit after the lesson.",
    type: "website",
    url: pageUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Support Your Pickleball Lessons with SkillDink",
    description:
      "Give players a clearer understanding before they step on court—and useful guidance to revisit after the lesson.",
  },
};

const foundations = [
  "The court, equipment, and rally.",
  "Rules and kitchen situations.",
  "Scoring and serving order.",
  "Essential shots.",
  "Footwork and positioning.",
  "Simple doubles strategy.",
  "Practice routines and repeatable drills.",
  "Preparing for games and choosing a next goal.",
];

const moments = [
  {
    title: "Before the lesson",
    body: "Suggest a relevant topic so players arrive familiar with the terminology, rule, or shot you will introduce.",
  },
  {
    title: "During the lesson",
    body: "Use that shared understanding as a starting point for demonstrations, exercises, and feedback.",
  },
  {
    title: "After the lesson",
    body: "Point players back to the explanation, help them identify what needs practice, and agree on a next step.",
  },
];

const settings = [
  {
    title: "Independent coaches",
    body: "Give pupils a reference between lessons and connect their practice to a specific topic.",
  },
  {
    title: "Clubs",
    body: "Introduce new members to common rules, terminology, and expectations before or alongside beginner sessions.",
  },
  {
    title: "Associations and programme organisers",
    body: "Discuss group access for introductory programmes and explore opportunities to develop further learning resources.",
  },
];

const coming = [
  {
    title: "A structured coaching course",
    body: "Planned topics include lesson organisation, introducing skills, managing groups, giving feedback, and adapting activities to different abilities.",
  },
  {
    title: "Drill and session resources",
    body: "Practical activities with clear objectives, setup instructions, teaching cues, and easier or harder variations.",
  },
  {
    title: "Focused development courses",
    body: "Shorter courses exploring specific teaching topics and common challenges on court.",
  },
];

const questions = [
  [
    "Can we buy course access for several players?",
    "Yes. Contact us with your expected group size and programme dates so we can discuss an appropriate group offer.",
  ],
  [
    "Can players study before attending a session?",
    "Yes. You can recommend relevant course topics beforehand, then revisit them through on-court practice.",
  ],
  [
    "Can I use this alongside my own teaching approach?",
    "Yes. You choose what to teach and how to organise your lessons. The beginner course provides explanations and exercises you can refer players to.",
  ],
  [
    "Is the coaching course available now?",
    "Not yet. Pickleball Foundations is currently available. Coach education and additional teaching resources are in development.",
  ],
  [
    "Will the coaching certificate provide licence credits?",
    "No licence credits or governing-body recognition are currently being claimed. Any future recognition will be described clearly for the specific course and organisation concerned.",
  ],
  [
    "Can we discuss a club or association programme?",
    "Yes. Tell us about your audience, programme, and learning needs. We can discuss current group access and potential future resources.",
  ],
];

export default function ForCoachesPage({
  searchParams,
}: {
  searchParams: Promise<{ interest?: string | string[] }>;
}) {
  return (
    <Container className="py-12 sm:py-16">
      <article className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold text-forest/60">
          For independent coaches · Clubs · Associations
        </p>
        <h1 className="mt-3 font-display text-5xl italic leading-[0.98] tracking-[-0.03em]">
          Give your players more to take onto the court.
        </h1>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-forest/80">
          <p>
            Support your pickleball lessons with clear explanations, visual learning, and practical
            exercises players can revisit in their own time.
          </p>
          <p>
            SkillDink helps coaches, clubs, and associations connect what players learn online with
            what they practise on court.
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/for-coaches?interest=group#enquire">
            Ask about group access
            <ArrowIcon />
          </ButtonLink>
          <ButtonLink href="/courses/pickleball-foundations" variant="outline">
            Preview the beginner course
          </ButtonLink>
        </div>

        <section className="mt-14">
          <h2 className="font-display text-3xl italic leading-[1.05] tracking-[-0.03em]">
            Before the lesson. On the court. Afterwards.
          </h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-forest/80">
            <p>
              A player may understand an explanation during a lesson and still struggle to remember
              it next time.
            </p>
            <p>
              Give them a resource they can return to—and a clearer idea of what they are working
              towards.
            </p>
          </div>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {moments.map((item) => (
              <li key={item.title} className="rounded-[1.2rem] bg-pale px-5 py-6">
                <h3 className="text-[15px] font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-forest/75">{item.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-3xl italic leading-[1.05] tracking-[-0.03em]">
            Start with Pickleball Foundations
          </h2>
          <h3 className="mt-4 text-xl font-bold">Group access to our beginner course</h3>
          <p className="mt-3 text-lg leading-relaxed text-forest/80">
            Give your pupils or members a structured introduction to the game alongside your
            on-court teaching.
          </p>
          <p className="mt-4 font-semibold">Pickleball Foundations covers:</p>
          <ul className="mt-3 space-y-2 text-forest/80">
            {foundations.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm font-semibold text-forest/70">
            8 modules · 25 lessons · Visual explanations · Knowledge checks
          </p>
          <p className="mt-4 text-lg leading-relaxed text-forest/80">
            Use it alongside an introductory programme, recommend it to new members, or offer it as
            additional learning between sessions.
          </p>
          <ButtonLink href="/for-coaches?interest=group#enquire" className="mt-6">
            Discuss access for your group
            <ArrowIcon />
          </ButtonLink>
          <p className="mt-3 text-sm text-forest/60">
            Tell us roughly how many players you want to support and when your programme begins.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-3xl italic leading-[1.05] tracking-[-0.03em]">
            One topic. A clearer connection to your lesson.
          </h2>
          <h3 className="mt-4 text-xl font-bold">Example: introducing the dink</h3>
          <ul className="mt-4 space-y-3 text-lg leading-relaxed text-forest/80">
            <li>
              <span className="font-semibold text-forest">Before:</span> Ask players to review what
              a dink is and how the kitchen rules apply.
            </li>
            <li>
              <span className="font-semibold text-forest">On court:</span> Demonstrate the shot,
              organise cooperative practice, and give individual feedback.
            </li>
            <li>
              <span className="font-semibold text-forest">After:</span> Refer players back to the
              visual explanation and choose a simple practice target together.
            </li>
          </ul>
          <p className="mt-4 text-lg leading-relaxed text-forest/80">
            You stay in charge of the lesson. SkillDink provides supporting material.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-3xl italic leading-[1.05] tracking-[-0.03em]">
            Built for different teaching settings
          </h2>
          <ul className="mt-6 grid gap-4">
            {settings.map((item) => (
              <li key={item.title} className="rounded-[1.2rem] border border-forest/10 px-5 py-5">
                <h3 className="text-[15px] font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-forest/75">{item.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-3xl italic leading-[1.05] tracking-[-0.03em]">
            Coming next: education for coaches
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-forest/80">
            We are developing resources for people who teach pickleball, with an emphasis on
            planning, explaining, adapting, and reviewing lessons.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {coming.map((item) => (
              <li key={item.title} className="rounded-[1.2rem] bg-pale px-5 py-6">
                <h3 className="text-[15px] font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-forest/75">{item.body}</p>
              </li>
            ))}
          </ul>
          <ButtonLink href="/for-coaches?interest=education#enquire" className="mt-6">
            Register your interest in coach education
            <ArrowIcon />
          </ButtonLink>
          <p className="mt-3 text-sm text-forest/60">
            Tell us what you teach, who you work with, and which resources would help you most.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-3xl italic leading-[1.05] tracking-[-0.03em]">
            A SkillDink certificate of completion
          </h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-forest/80">
            <p>
              Our planned coaching course will include a <strong className="font-semibold text-forest">SkillDink certificate of completion</strong>, subject to its published completion and assessment requirements.
            </p>
            <p>
              This will document completion of SkillDink’s own course. It will not represent a
              governing-body coaching licence or accredited qualification unless recognition is
              explicitly confirmed.
            </p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-3xl italic leading-[1.05] tracking-[-0.03em]">
            Help shape resources you would actually use
          </h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-forest/80">
            <p>We welcome feedback from coaches and clubs willing to try the material with their players.</p>
            <p>We want to understand:</p>
          </div>
          <ul className="mt-3 space-y-2 text-forest/80">
            {[
              "Which explanations players need before a lesson.",
              "What they struggle to remember afterwards.",
              "Which drills need clearer progressions.",
              "What makes online material useful within a real teaching programme.",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <ButtonLink href="/for-coaches?interest=collaboration#enquire" className="mt-6">
            Talk to Matthijs about your programme
            <ArrowIcon />
          </ButtonLink>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-3xl italic leading-[1.05] tracking-[-0.03em]">
            Questions from coaches and clubs
          </h2>
          <div className="mt-6 space-y-6">
            {questions.map(([question, answer]) => (
              <div key={question}>
                <h3 className="text-[15px] font-bold">{question}</h3>
                <p className="mt-2 leading-relaxed text-forest/80">{answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-3xl italic leading-[1.05] tracking-[-0.03em]">
            Bring the learning into your next programme.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-forest/80">
            Start with group access to Pickleball Foundations, or help shape the coaching resources
            we develop next.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/for-coaches?interest=group#enquire">
              Ask about group access
              <ArrowIcon />
            </ButtonLink>
            <ButtonLink href="/for-coaches?interest=education#enquire" variant="outline">
              Register interest in coach education
            </ButtonLink>
          </div>
        </section>

        <section id="enquire" className="mt-14 scroll-mt-28 rounded-[1.4rem] bg-pale px-5 py-7 sm:px-8">
          <h2 className="font-display text-3xl italic leading-[1.05] tracking-[-0.03em]">
            Tell us about your group
          </h2>
          <p className="mt-3 leading-relaxed text-forest/75">
            One enquiry covers group access, coach education, or a collaboration. We will reply by
            email.
          </p>
          <div className="mt-6">
            <Suspense fallback={<div className="h-80 rounded-[1.2rem] bg-white/70" />}>
              <Enquiry searchParams={searchParams} />
            </Suspense>
          </div>
        </section>
      </article>
    </Container>
  );
}

async function Enquiry({
  searchParams,
}: {
  searchParams: Promise<{ interest?: string | string[] }>;
}) {
  const params = await searchParams;
  const interest = Array.isArray(params.interest) ? params.interest[0] : params.interest;
  return <CoachEnquiryForm key={interest ?? "group"} interest={interest} />;
}
