"use client";

import { useState } from "react";
import { ArrowIcon, ButtonLink } from "@/components/button-link";
import { CourtDiagram } from "@/components/court-diagram";
import { LightbulbIcon } from "@/components/icons";

type SampleQuiz = {
  questionNumber: number;
  totalQuestions: number;
  prompt: string;
  options: { id: string; label: string; correct?: boolean }[];
  correctTitle: string;
  correctBody: string;
  retryTitle: string;
  retryBody: string;
};

export function QuizCard({
  quiz,
  continueHref,
}: {
  quiz: SampleQuiz;
  continueHref: string;
}) {
  const sampleQuiz = quiz;
  const [selected, setSelected] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [needsChoice, setNeedsChoice] = useState(false);
  const correct = sampleQuiz.options.find((option) => option.correct);
  const isCorrect = checked && selected === correct?.id;

  return (
    <div>
      <p className="text-sm font-semibold text-forest/70">
        Pickleball Foundations / Knowledge check
      </p>
      <h1 className="mt-3 max-w-xl font-display text-4xl italic leading-[1.02] tracking-[-0.03em] sm:text-5xl">
        Put your knowledge into play.
      </h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-forest/80">
        Quick, practical questions to check your understanding and reinforce what
        you&apos;ve learned.
      </p>
      <p className="mt-4 text-sm font-semibold">
        Question {sampleQuiz.questionNumber} of {sampleQuiz.totalQuestions}
      </p>

      <div className="mt-6 grid items-center gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <CourtDiagram variant="return" />
        <fieldset>
          <legend className="text-xl font-bold leading-snug">
            {sampleQuiz.prompt}
          </legend>
          <div className="mt-4 space-y-2.5">
            {sampleQuiz.options.map((option) => {
              const active = selected === option.id;
              return (
                <label
                  key={option.id}
                  className={`flex cursor-pointer items-start gap-3 rounded-2xl px-3 py-3 ${
                    active ? "bg-pale" : "hover:bg-pale/60"
                  }`}
                >
                  <input
                    type="radio"
                    name="answer"
                    value={option.id}
                    checked={active}
                    onChange={() => {
                      setSelected(option.id);
                      setChecked(false);
                      setNeedsChoice(false);
                    }}
                    className="sr-only"
                  />
                  <span
                    className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border ${
                      active ? "border-forest bg-lime" : "border-forest/30 bg-white"
                    }`}
                    aria-hidden="true"
                  >
                    {active ? <span className="size-2 rounded-full bg-forest" /> : null}
                  </span>
                  <span className="text-[15px] leading-snug font-medium">{option.label}</span>
                </label>
              );
            })}
          </div>
          <div className="mt-5 flex justify-end">
            <button
              type="button"
              onClick={() => {
                if (!selected) {
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
          </div>
          {needsChoice && !selected ? (
            <p className="mt-3 text-sm font-semibold">Choose an answer first.</p>
          ) : null}
        </fieldset>
      </div>

      {checked ? (
        <div className="mt-6 flex gap-4 rounded-[1.4rem] bg-pale p-5">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-lime text-forest">
            <LightbulbIcon />
          </span>
          <div>
            <p className="font-bold">
              {isCorrect ? sampleQuiz.correctTitle : sampleQuiz.retryTitle}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-forest/80">
              {isCorrect ? sampleQuiz.correctBody : sampleQuiz.retryBody}
            </p>
            {isCorrect ? (
              <ButtonLink href={continueHref} className="mt-4">
                Continue
                <ArrowIcon />
              </ButtonLink>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
