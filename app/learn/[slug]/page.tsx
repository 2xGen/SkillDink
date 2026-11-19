import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArrowIcon, ButtonLink } from "@/components/button-link";
import { InfoIcon } from "@/components/icons";
import { CoursePaywall } from "@/components/course-paywall";
import { LearnShell } from "@/components/learn-shell";
import { LessonCheck } from "@/components/lesson-check";
import {
  allLessons,
  freeLessonSlug,
  getLesson,
  neighbors,
  type LessonBlock,
} from "@/lib/course";
import { hasCourseAccess } from "@/lib/session";

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={index} className="font-bold text-forest">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={index}>{part}</span>
    ),
  );
}

function LessonBody({ blocks }: { blocks: LessonBlock[] }) {
  return (
    <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-forest/80">
      {blocks.map((block, index) => {
        if (block.type === "h") {
          const className =
            block.level === 3
              ? "pt-2 font-display text-2xl italic leading-none tracking-[-0.03em] text-forest"
              : "pt-4 font-display text-3xl italic leading-none tracking-[-0.03em] text-forest";
          return block.level === 3 ? (
            <h3 key={`${index}-${block.text}`} className={className}>
              {block.text}
            </h3>
          ) : (
            <h2 key={`${index}-${block.text}`} className={className}>
              {block.text}
            </h2>
          );
        }
        if (block.type === "steps") {
          return (
            <ol key={index} className="list-decimal space-y-2 pl-5">
              {block.items.map((item) => (
                <li key={item}>
                  <RichText text={item} />
                </li>
              ))}
            </ol>
          );
        }
        if (block.type === "bullets") {
          return (
            <ul key={index} className="space-y-2">
              {block.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true">•</span>
                  <span>
                    <RichText text={item} />
                  </span>
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === "table") {
          return (
            <div key={index} className="overflow-x-auto">
              <table className="w-full min-w-[28rem] border-collapse text-sm leading-relaxed">
                <thead>
                  <tr className="bg-pale text-left text-forest">
                    {block.headers.map((header) => (
                      <th key={header} className="px-3 py-2 font-bold">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row) => (
                    <tr key={row[0]} className="border-t border-forest/10">
                      {row.map((cell) => (
                        <td key={cell} className="px-3 py-2 align-top">
                          <RichText text={cell} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        if (block.type === "figure") {
          const framed = block.panels?.every((panel) => panel.src);
          return (
            <figure key={block.src} className={block.wide ? "py-2" : "mx-auto max-w-lg py-2"}>
              {block.kicker ? (
                <p className="mb-3 text-center text-sm font-bold sm:text-base">{block.kicker}</p>
              ) : null}
              {framed ? (
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {block.panels?.map((panel) => (
                    <div key={panel.title} className="overflow-hidden rounded-[1.15rem] bg-forest p-1.5">
                      <p className="px-2 py-2 text-center text-sm font-bold text-white sm:text-base">
                        {panel.title}
                      </p>
                      <div className="relative overflow-hidden rounded-[0.7rem]">
                        <img
                          src={panel.src}
                          alt={panel.alt ?? panel.title}
                          width={511}
                          height={634}
                          className="h-auto w-full"
                        />
                        {panel.detail ? (
                          <span
                            className={`absolute flex flex-col ${
                              panel.callout === "end"
                                ? "top-[12%] right-[4%] items-end"
                                : "top-[14%] left-[4%] items-start"
                            }`}
                          >
                            <span className="rounded-lg bg-ivory px-1.5 py-1 text-center text-[10px] leading-tight font-bold whitespace-pre-line text-forest sm:text-xs">
                              {panel.detail}
                            </span>
                            <svg
                              viewBox="0 0 36 44"
                              aria-hidden="true"
                              className={`-mt-0.5 h-9 w-7 text-ivory sm:h-11 sm:w-8 ${
                                panel.callout === "end" ? "-scale-x-100" : "ml-3"
                              } ${panel.callout === "end" ? "mr-3" : ""}`}
                            >
                              <path
                                d="M6 4c12 2 18 12 16 32"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.6"
                                strokeLinecap="round"
                              />
                              <path d="M12 28.5 22 38 24 26" fill="currentColor" />
                            </svg>
                          </span>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  {block.panels ? (
                    <div
                      className={`mb-2 grid gap-3 text-center ${
                        block.panels.length === 2 ? "grid-cols-2" : ""
                      }`}
                    >
                      {block.panels.map((panel) => (
                        <div key={panel.title} className="rounded-full bg-forest px-3 py-2 text-white">
                          <p className="font-bold">{panel.title}</p>
                          {panel.detail ? (
                            <p className="text-sm text-white/80">{panel.detail}</p>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  ) : null}
                  <img
                    src={block.src}
                    alt={block.alt}
                    width={block.width ?? 1024}
                    height={block.height ?? 682}
                    className="h-auto w-full rounded-[1.2rem]"
                  />
                </>
              )}
              {block.cues ? (
                <ul className="mt-3 flex flex-wrap justify-center gap-2">
                  {block.cues.map((cue) => (
                    <li
                      key={cue}
                      className="rounded-full bg-forest px-3 py-2 text-center text-xs font-bold text-white sm:px-4 sm:text-sm"
                    >
                      {cue}
                    </li>
                  ))}
                </ul>
              ) : null}
              {block.line ? (
                <p className="mt-3 rounded-full bg-lime px-3 py-2.5 text-center text-sm font-bold sm:text-base">
                  {block.line}
                </p>
              ) : null}
              {block.note ? (
                <p className="mt-2 text-center text-sm font-semibold">{block.note}</p>
              ) : null}
            </figure>
          );
        }
        return (
          <p key={index}>
            <RichText text={block.text} />
          </p>
        );
      })}
    </div>
  );
}

type LessonPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allLessons().map((lesson) => ({ slug: lesson.slug }));
}

export async function generateMetadata({
  params,
}: LessonPageProps): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) return { title: "Lesson" };
  if (slug !== freeLessonSlug) {
    return {
      title: lesson.title,
      description: `${lesson.title} is part of Pickleball Foundations.`,
    };
  }
  return {
    title: lesson.title,
    description: lesson.summary,
  };
}

export default function LessonPage({ params }: LessonPageProps) {
  return (
    <Suspense fallback={<LessonFallback />}>
      <LessonContent params={params} />
    </Suspense>
  );
}

function LessonFallback() {
  return (
    <div className="mx-auto w-full max-w-[76rem] px-5 py-10 sm:px-8">
      <div className="h-8 w-56 rounded-full bg-pale" />
      <div className="mt-8 h-72 rounded-[1.4rem] bg-pale" />
    </div>
  );
}

async function LessonContent({ params }: LessonPageProps) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) notFound();

  const { previous, next, index, total } = neighbors(slug);
  const progress = Math.max(4, Math.round((index / total) * 100));
  const checks = lesson.checks ?? [lesson.check];
  const hasAccess = await hasCourseAccess();
  const open = hasAccess || slug === freeLessonSlug;
  const continueHref = next ? `/learn/${next.slug}` : "/learn/assessment";

  if (!open) {
    return (
      <LearnShell activeSlug={slug} completedCount={0} progress={0} locked>
        <p className="text-sm font-semibold text-forest/65">
          {`Module ${lesson.moduleNumber}: ${lesson.moduleTitle}`}
        </p>
        <div className="mt-4">
          <CoursePaywall lessonTitle={lesson.title} />
        </div>
      </LearnShell>
    );
  }

  return (
    <LearnShell
      activeSlug={slug}
      completedCount={hasAccess ? index : 0}
      progress={progress}
      preview={!hasAccess}
      unlocked={hasAccess}
    >
      <p className="text-sm font-semibold text-forest/65">
        <Link href="/courses/pickleball-foundations" className="hover:text-forest">
          Pickleball Foundations
        </Link>
        {` / Module ${lesson.moduleNumber}: ${lesson.moduleTitle} / Lesson ${index + 1}`}
      </p>
      <h1 className="mt-3 font-display text-4xl italic leading-[1.02] tracking-[-0.03em] sm:text-5xl">
        {lesson.title}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed">
        <span className="font-bold">Learning objective. </span>
        <span className="text-forest/80">{lesson.objective}</span>
      </p>

      {lesson.body ? (
        <LessonBody blocks={lesson.body} />
      ) : (
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-forest/80">{lesson.summary}</p>
      )}

      <div
        className={`mt-6 grid gap-4 ${
          lesson.practice.length > 0 && !lesson.body ? "md:grid-cols-2" : ""
        }`}
      >
        <article className="rounded-[1.4rem] bg-pale p-5">
          <div className="flex items-center gap-2 font-bold">
            <span className="grid size-8 place-items-center rounded-full bg-white">
              <InfoIcon className="size-4" />
            </span>
            Keep this in mind
          </div>
          <p className="mt-3 text-sm leading-relaxed whitespace-pre-line text-forest/80">
            <RichText text={lesson.takeaway} />
          </p>
        </article>
        {lesson.practice.length > 0 ? (
          <article className="rounded-[1.4rem] bg-pale p-5">
            <p className="font-bold">Try this on court</p>
            {lesson.practiceIntro ? (
              <p className="mt-3 text-sm leading-relaxed text-forest/80">{lesson.practiceIntro}</p>
            ) : null}
            {lesson.practiceOrdered ? (
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-forest/80">
                {lesson.practice.map((item) => (
                  <li key={item}>
                    <RichText text={item} />
                  </li>
                ))}
              </ol>
            ) : (
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-forest/80">
                {lesson.practice.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true">•</span>
                    <span className="whitespace-pre-line">
                      <RichText text={item} />
                    </span>
                  </li>
                ))}
              </ul>
            )}
            {lesson.practiceNote ? (
              <p className="mt-3 text-sm leading-relaxed whitespace-pre-line text-forest/80">
                <RichText text={lesson.practiceNote} />
              </p>
            ) : null}
          </article>
        ) : null}
      </div>

      <LessonCheck
        checks={checks}
        continueHref={hasAccess ? continueHref : undefined}
        continueLabel={next ? "Mark complete and continue" : "Continue to the assessment"}
      />

      {lesson.ending ? (
        <section className="mt-10 max-w-2xl">
          <h2 className="font-display text-3xl italic leading-none tracking-[-0.03em] text-forest">
            {lesson.ending.title}
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-forest/80">
            {lesson.ending.paragraphs.map((paragraph) => (
              <p key={paragraph}>
                <RichText text={paragraph} />
              </p>
            ))}
          </div>
        </section>
      ) : null}

      {lesson.closing ? (
        <aside className="mt-8 rounded-[1.4rem] bg-forest px-5 py-5 text-white">
          <p className="text-xs font-bold tracking-[0.14em] text-lime uppercase">Your takeaway</p>
          <p className="mt-2 text-lg leading-snug font-semibold">{lesson.closing}</p>
        </aside>
      ) : null}

      {hasAccess ? (
        <>
          {next ? (
            <p className="mt-6 text-sm font-semibold">
              Next lesson:{" "}
              <Link href={continueHref} className="underline decoration-forest/40 underline-offset-4">
                {next.title}
              </Link>
            </p>
          ) : null}
          <div className="mt-8 flex flex-col-reverse items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            {previous ? (
              <ButtonLink href={`/learn/${previous.slug}`} variant="outline" size="sm">
                <ArrowIcon className="size-3.5 rotate-180 sm:size-4" />
                Previous lesson
              </ButtonLink>
            ) : (
              <span />
            )}
            <ButtonLink href={continueHref} className="w-full sm:w-auto">
              {next ? "Mark complete and continue" : "Continue to the assessment"}
              <ArrowIcon />
            </ButtonLink>
          </div>
        </>
      ) : (
        <div className="mt-8">
          <CoursePaywall afterFreeLesson />
        </div>
      )}
    </LearnShell>
  );
}
