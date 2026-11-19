"use client";

import { useState } from "react";
import { ArrowIcon, ButtonLink } from "@/components/button-link";
import { LightbulbIcon } from "@/components/icons";

type AssessmentQuestion = {
  prompt: string;
  options: { id: string; label: string }[];
  answerId: string;
  explanation: string;
};

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

export function CourseAssessment({ questions }: { questions: AssessmentQuestion[] }) {
  const courseAssessment = questions;
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [needsChoice, setNeedsChoice] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const question = courseAssessment[index];
  const answer = question?.options.find((option) => option.id === question.answerId);
  const isCorrect = checked && selected === question?.answerId;

  function checkAnswer() {
    if (!selected || !question) {
      setNeedsChoice(true);
      return;
    }
    if (!checked) {
      if (selected === question.answerId) setCorrectCount((count) => count + 1);
      setChecked(true);
    }
  }

  function nextQuestion() {
    if (index === courseAssessment.length - 1) {
      setFinished(true);
      return;
    }
    setIndex((current) => current + 1);
    setSelected(null);
    setChecked(false);
    setNeedsChoice(false);
  }

  if (finished) {
    return (
      <div>
        <p className="text-sm font-semibold text-forest/70">
          Pickleball Foundations / Course assessment
        </p>
        <h1 className="mt-3 max-w-xl font-display text-4xl italic leading-[1.02] tracking-[-0.03em] sm:text-5xl">
          You finished the foundations.
        </h1>
        <p className="mt-4 text-lg font-semibold">
          {correctCount} of {courseAssessment.length} answers matched the stronger choice.
        </p>
        <ul className="mt-6 space-y-3">
          {courseAssessment.map((item) => (
            <li key={item.prompt} className="rounded-[1.2rem] bg-pale p-4">
              <p className="font-bold">{item.prompt}</p>
              <p className="mt-1 text-sm leading-relaxed whitespace-pre-line text-forest/80">
                <RichText text={item.explanation} />
              </p>
            </li>
          ))}
        </ul>
        <ButtonLink href="/courses/pickleball-foundations" className="mt-6">
          Back to the course
          <ArrowIcon />
        </ButtonLink>
      </div>
    );
  }

  return (
    <div>
      <p className="text-sm font-semibold text-forest/70">
        Pickleball Foundations / Course assessment
      </p>
      <h1 className="mt-3 max-w-xl font-display text-4xl italic leading-[1.02] tracking-[-0.03em] sm:text-5xl">
        Check your foundations.
      </h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-forest/80">
        Six situations from across the course. Work through the score, the kitchen, the
        shots, and where you move next.
      </p>
      <p className="mt-4 text-sm font-semibold">
        Question {index + 1} of {courseAssessment.length}
      </p>
      <fieldset className="mt-6">
        <legend className="text-xl font-bold leading-snug">{question.prompt}</legend>
        <div className="mt-4 space-y-2.5">
          {question.options.map((option) => {
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
                  name="assessment"
                  value={option.id}
                  checked={active}
                  onChange={() => {
                    if (checked) return;
                    setSelected(option.id);
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
            onClick={checked ? nextQuestion : checkAnswer}
            className="inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-[15px] font-semibold text-forest hover:bg-[#b6e62a]"
          >
            {checked
              ? index === courseAssessment.length - 1
                ? "See your results"
                : "Next question"
              : "Check answer"}
            <ArrowIcon />
          </button>
        </div>
        {needsChoice && !selected ? (
          <p className="mt-3 text-sm font-semibold">Choose an answer first.</p>
        ) : null}
      </fieldset>
      {checked ? (
        <div className="mt-6 flex gap-4 rounded-[1.4rem] bg-pale p-5">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-lime text-forest">
            <LightbulbIcon />
          </span>
          <div>
            {isCorrect ? null : (
              <p className="font-bold">The stronger answer is: {answer?.label}</p>
            )}
            <p
              className={`text-sm leading-relaxed whitespace-pre-line text-forest/80 ${isCorrect ? "" : "mt-1"}`}
            >
              <RichText text={question.explanation} />
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
