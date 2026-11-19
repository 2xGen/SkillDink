"use client";

import Link from "next/link";
import { useState } from "react";

type OutlineModule = {
  number: number;
  title: string;
  summary: string;
  lessons: { slug: string; title: string }[];
};

export function Curriculum({
  modules,
  freeLessonSlug,
  unlocked = false,
}: {
  modules: OutlineModule[];
  freeLessonSlug: string;
  unlocked?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="rounded-[1.6rem] border border-forest/10 bg-white p-3 sm:p-4">
      <h2 className="px-3 pb-2 pt-2 font-display text-[1.65rem] italic leading-none tracking-[-0.03em]">
        Course curriculum
      </h2>
      <ol>
        {modules.map((courseModule) => {
          const expanded = open === courseModule.number;
          return (
            <li key={courseModule.number} className="border-t border-forest/10 first:border-t-0">
              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left font-semibold hover:bg-pale/70"
                aria-expanded={expanded}
                onClick={() =>
                  setOpen((current) =>
                    current === courseModule.number ? null : courseModule.number,
                  )
                }
              >
                <span className="w-5 shrink-0 text-forest/70">{courseModule.number}.</span>
                <span className="flex-1">{courseModule.title}</span>
                <svg
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  className={`size-4 shrink-0 transition ${expanded ? "rotate-180" : ""}`}
                >
                  <path
                    d="M3.5 6 8 10.5 12.5 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {expanded ? (
                <div className="space-y-2 px-3 pb-4 pl-11">
                  <p className="text-sm leading-relaxed text-forest/75">{courseModule.summary}</p>
                  <ul className="space-y-1.5">
                    {courseModule.lessons.map((lesson) => {
                      const free = lesson.slug === freeLessonSlug;
                      const linked = unlocked || free;
                      return (
                        <li key={lesson.slug} className="text-sm leading-snug">
                          {linked ? (
                            <Link
                              href={`/learn/${lesson.slug}`}
                              className="font-semibold underline decoration-forest/30 underline-offset-4 hover:decoration-forest"
                            >
                              {lesson.title}
                              {free && !unlocked ? (
                                <span className="ml-2 text-xs font-bold tracking-wide text-court uppercase">
                                  Free
                                </span>
                              ) : null}
                            </Link>
                          ) : (
                            <span className="text-forest/80">{lesson.title}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : null}
            </li>
          );
        })}
      </ol>
      <p className="border-t border-forest/10 px-3 py-3 text-sm text-forest/75">
        {unlocked ? (
          <Link
            href="/learn/assessment"
            className="font-semibold underline decoration-forest/30 underline-offset-4 hover:decoration-forest"
          >
            Course assessment
          </Link>
        ) : (
          "Course assessment is included with the full course."
        )}
      </p>
    </section>
  );
}
