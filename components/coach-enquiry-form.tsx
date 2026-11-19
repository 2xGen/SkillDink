"use client";

import { useState } from "react";
import { sendCoachEnquiry } from "@/app/for-coaches/actions";

const fieldClass =
  "mt-1.5 w-full rounded-2xl border border-forest/15 bg-white px-4 py-3 font-normal outline-none focus:border-forest";

const interests = [
  { id: "group", label: "Group access" },
  { id: "education", label: "Coach education" },
  { id: "collaboration", label: "Collaboration" },
] as const;

const sizes = ["1–10", "11–25", "26–50", "More than 50", "Not sure yet"];

export function CoachEnquiryForm({ interest = "group" }: { interest?: string }) {
  const initial = interests.some((item) => item.id === interest) ? interest : "group";
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  if (status === "sent") {
    return (
      <div className="rounded-[1.5rem] bg-pale p-6" role="status">
        <p className="font-bold">Thanks. Your enquiry is with SkillDink.</p>
        <p className="mt-2 text-sm leading-relaxed text-forest/80">
          Matthijs will reply to the email address you entered.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-4"
      onSubmit={async (event) => {
        event.preventDefault();
        setStatus("sending");
        setError("");
        const result = await sendCoachEnquiry(new FormData(event.currentTarget));
        if (result.ok) {
          setStatus("sent");
          return;
        }
        setStatus("error");
        setError(result.error);
      }}
    >
      <fieldset>
        <legend className="text-sm font-semibold">I am interested in</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-3">
          {interests.map((item) => (
            <label
              key={item.id}
              className="flex cursor-pointer items-center gap-2 rounded-2xl border border-forest/15 bg-white px-3 py-3 text-sm font-semibold"
            >
              <input
                type="radio"
                name="interest"
                value={item.id}
                defaultChecked={item.id === initial}
                className="size-4 accent-lime"
                required
              />
              {item.label}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="block text-sm font-semibold" htmlFor="coach-name">
        Name
        <input id="coach-name" name="name" required autoComplete="name" maxLength={120} className={fieldClass} />
      </label>
      <label className="block text-sm font-semibold" htmlFor="coach-email">
        Email
        <input
          id="coach-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          maxLength={200}
          className={fieldClass}
        />
      </label>
      <label className="block text-sm font-semibold" htmlFor="coach-organisation">
        Organisation
        <input
          id="coach-organisation"
          name="organisation"
          required
          autoComplete="organization"
          maxLength={160}
          placeholder="Your name, club, or association"
          className={fieldClass}
        />
      </label>
      <label className="block text-sm font-semibold" htmlFor="coach-size">
        Approximate group size
        <select id="coach-size" name="groupSize" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Choose a range
          </option>
          {sizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-sm font-semibold" htmlFor="coach-note">
        Anything else? <span className="font-normal text-forest/55">Optional</span>
        <textarea
          id="coach-note"
          name="note"
          rows={3}
          maxLength={1000}
          placeholder="When your programme begins, or what you teach."
          className={fieldClass}
        />
      </label>
      {status === "error" ? (
        <p className="text-sm font-semibold text-court" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-lime px-5 py-3 text-[15px] font-semibold text-forest hover:bg-[#b6e62a] disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
