"use client";

import { useState } from "react";
import { ArrowIcon, ButtonLink } from "@/components/button-link";
import { LightbulbIcon } from "@/components/icons";
import type { LessonCheck as LessonCheckData } from "@/lib/course";

function choiceMessage(count: number) {
  if (count <= 1) return "Choose an answer first.";
  if (count === 2) return "Answer both questions first.";
  const words = ["three", "four", "five", "six"];
  return `Answer all ${words[count - 3] ?? String(count)} questions first.`;
}

export function LessonCheck({
  checks,
  continueHref,
  continueLabel = "Mark complete and continue",
}: {
  checks: LessonCheckData[];
  continueHref?: string;
  continueLabel?: string;
}) {
  const [selected, setSelected] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);
  const [needsChoice, setNeedsChoice] = useState(false);
  const unanswered = checks.some((_, index) => !selected[index]);

  return (
    <section className="mt-8 rounded-[1.4rem] border border-forest/10 p-5">
      <h2 className="text-sm font-bold tracking-[0.14em] text-forest/60 uppercase">
        Check your understanding
      </h2>
      {checks.map((check, index) => {
        const choice = selected[index];
        const answer = check.options.find((option) => option.id === check.answerId);
        const isCorrect = checked && choice === check.answerId;
        return (
          <fieldset key={check.prompt} className="mt-6">
            <legend className="text-lg font-bold leading-snug">
              {checks.length > 1 ? `${index + 1}. ${check.prompt}` : check.prompt}
            </legend>
            <div className="mt-4 space-y-2.5">
              {check.options.map((option) => {
                const active = choice === option.id;
                const wrong = checked && active && option.id !== check.answerId;
                return (
                  <label
                    key={option.id}
                    className={`flex cursor-pointer items-start gap-3 rounded-2xl px-3 py-3 ${
                      wrong
                        ? "bg-red-50 text-red-800 ring-1 ring-red-500"
                        : active
                          ? "bg-pale"
                          : "hover:bg-pale/60"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`lesson-check-${index}`}
                      value={option.id}
                      checked={active}
                      onChange={() => {
                        setSelected((current) => ({ ...current, [index]: option.id }));
                        setChecked(false);
                        setNeedsChoice(false);
                      }}
                      className="sr-only"
                    />
                    <span
                      className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border ${
                        wrong
                          ? "border-red-600 bg-red-100"
                          : active
                            ? "border-forest bg-lime"
                            : "border-forest/30 bg-white"
                      }`}
                      aria-hidden="true"
                    >
                      {active ? (
                        <span className={`size-2 rounded-full ${wrong ? "bg-red-700" : "bg-forest"}`} />
                      ) : null}
                    </span>
                    <span className="text-[15px] leading-snug font-medium">{option.label}</span>
                  </label>
                );
              })}
            </div>
            {checked ? (
              <div className="mt-4 flex gap-4 rounded-[1.2rem] bg-pale p-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-lime text-forest">
                  <LightbulbIcon />
                </span>
                <div>
                  {isCorrect ? null : (
                    <p className="font-bold">The stronger answer is: {answer?.label}</p>
                  )}
                  <p
                    className={`text-sm leading-relaxed text-forest/80 ${isCorrect ? "" : "mt-1"}`}
                  >
                    {check.explanation}
                  </p>
                </div>
              </div>
            ) : null}
          </fieldset>
        );
      })}
      <div className="mt-5 flex justify-end">
        {checked && continueHref ? (
          <ButtonLink href={continueHref}>
            {continueLabel}
            <ArrowIcon />
          </ButtonLink>
        ) : (
          <button
            type="button"
            onClick={() => {
              if (unanswered) {
                setNeedsChoice(true);
                return;
              }
              setChecked(true);
            }}
            className="inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-[15px] font-semibold text-forest hover:bg-[#b6e62a]"
          >
            Check answer
            <ArrowIcon />
          </button>
        )}
      </div>
      {needsChoice && unanswered ? (
        <p className="mt-3 text-right text-sm font-semibold">
          {choiceMessage(checks.length)}
        </p>
      ) : null}
    </section>
  );
}
