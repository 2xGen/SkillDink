"use client";

import { useState } from "react";
import { sendContactMessage } from "@/app/contact/actions";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  if (status === "sent") {
    return (
      <div className="rounded-[1.5rem] bg-pale p-6" role="status">
        <p className="font-bold">Thanks, your message is with SkillDink.</p>
        <p className="mt-2 text-sm leading-relaxed text-forest/80">
          We will reply to the email address you entered.
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
        const result = await sendContactMessage(new FormData(event.currentTarget));
        if (result.ok) {
          setStatus("sent");
          return;
        }
        setStatus("error");
        setError(result.error);
      }}
    >
      <label className="block text-sm font-semibold" htmlFor="name">
        Name
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          maxLength={120}
          className="mt-1.5 w-full rounded-2xl border border-forest/15 bg-white px-4 py-3 font-normal outline-none focus:border-forest"
        />
      </label>
      <label className="block text-sm font-semibold" htmlFor="email">
        Email
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          maxLength={200}
          className="mt-1.5 w-full rounded-2xl border border-forest/15 bg-white px-4 py-3 font-normal outline-none focus:border-forest"
        />
      </label>
      <label className="block text-sm font-semibold" htmlFor="message">
        Message
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={4000}
          className="mt-1.5 w-full resize-y rounded-2xl border border-forest/15 bg-white px-4 py-3 font-normal outline-none focus:border-forest"
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
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
