"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CheckIcon } from "@/components/icons";

type OutlineModule = {
  number: number;
  title: string;
  lessons: { slug: string; title: string }[];
};

const lessonIndex = (modules: OutlineModule[]) => {
  const index = new Map<string, number>();
  let running = 0;
  for (const courseModule of modules) {
    for (const lesson of courseModule.lessons) {
      index.set(lesson.slug, running);
      running += 1;
    }
  }
  return index;
};

function LockIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="size-3.5 text-forest/55">
      <rect
        x="3.2"
        y="7"
        width="9.6"
        height="6.2"
        rx="1.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M5.3 7V5.2a2.7 2.7 0 0 1 5.4 0V7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LessonSidebar({
  activeSlug,
  completedCount,
  modules,
  freeLessonSlug,
  unlocked = false,
}: {
  activeSlug?: string;
  completedCount: number;
  modules: OutlineModule[];
  freeLessonSlug: string;
  unlocked?: boolean;
}) {
  const indexBySlug = lessonIndex(modules);
  const activeModule = modules.find((courseModule) =>
    courseModule.lessons.some((lesson) => lesson.slug === activeSlug),
  );
  const currentModule = activeModule?.number ?? (activeSlug === "assessment" ? 8 : 1);
  const [openModules, setOpenModules] = useState<number[]>([
    Math.max(1, currentModule - 1),
    currentModule,
  ]);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    const current = nav?.querySelector<HTMLElement>('[aria-current="page"]');
    if (!nav || !current || nav.scrollHeight <= nav.clientHeight) return;
    const delta =
      current.getBoundingClientRect().top -
      nav.getBoundingClientRect().top -
      nav.clientHeight / 2 +
      current.offsetHeight / 2;
    nav.scrollTop += delta;
  }, [activeSlug]);

  function toggle(moduleNumber: number) {
    setOpenModules((current) =>
      current.includes(moduleNumber)
        ? current.filter((value) => value !== moduleNumber)
        : [...current, moduleNumber],
    );
  }

  return (
    <nav
      ref={navRef}
      aria-label="Course contents"
      className="max-h-[min(32rem,70dvh)] overflow-y-auto overscroll-y-contain rounded-[1.4rem] bg-pale/80 p-3 lg:max-h-[calc(100dvh-7.5rem)]"
    >
      <ol className="space-y-1">
        {modules.map((courseModule) => {
          const expanded = openModules.includes(courseModule.number);
          return (
            <li key={courseModule.number}>
              <button
                type="button"
                className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-sm font-semibold"
                aria-expanded={expanded}
                onClick={() => toggle(courseModule.number)}
              >
                <span className="flex-1">
                  Module {courseModule.number}: {courseModule.title}
                </span>
                <svg
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  className={`size-3.5 shrink-0 transition ${expanded ? "rotate-180" : ""}`}
                >
                  <path
                    d="M3.5 6 8 10.5 12.5 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              {expanded ? (
                <ul className="mb-2 space-y-0.5 pl-1">
                  {courseModule.lessons.map((lesson) => {
                    const index = indexBySlug.get(lesson.slug) ?? 0;
                    const current = lesson.slug === activeSlug;
                    const done = index < completedCount;
                    const locked = !unlocked && lesson.slug !== freeLessonSlug;
                    return (
                      <li key={lesson.slug}>
                        <Link
                          href={`/learn/${lesson.slug}`}
                          className={`flex items-start gap-2 rounded-lg px-2 py-1.5 text-sm leading-snug ${
                            current ? "bg-lime font-semibold" : "hover:bg-white/70"
                          }`}
                          aria-current={current ? "page" : undefined}
                        >
                          <span className="mt-0.5 grid size-4 shrink-0 place-items-center">
                            {locked ? (
                              <LockIcon />
                            ) : done ? (
                              <CheckIcon className="size-3.5 text-court" />
                            ) : current ? (
                              <span className="ml-0.5 inline-block size-0 border-y-[5px] border-l-[7px] border-y-transparent border-l-forest" />
                            ) : (
                              <span className="size-3 rounded-full border border-forest/35" />
                            )}
                          </span>
                          <span>{lesson.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </li>
          );
        })}
      </ol>
      <Link
        href="/learn/assessment"
        className={`mt-2 flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-semibold ${
          activeSlug === "assessment" ? "bg-lime" : "hover:bg-white/70"
        }`}
        aria-current={activeSlug === "assessment" ? "page" : undefined}
      >
        {unlocked ? null : <LockIcon />}
        Course assessment
      </Link>
    </nav>
  );
}
