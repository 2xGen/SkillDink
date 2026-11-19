"use client";

import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-[1.5rem] bg-pale p-6" role="status">
        <p className="font-bold">Thanks, your note is recorded in this preview.</p>
        <p className="mt-2 text-sm leading-relaxed text-forest/80">
          Messages are not sent yet. This form is ready to connect when the site
          has a backend.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <label className="block text-sm font-semibold" htmlFor="name">
        Name
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          className="mt-1.5 w-full rounded-2xl border border-forest/15 bg-white px-4 py-3 font-normal outline-none"
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
          className="mt-1.5 w-full rounded-2xl border border-forest/15 bg-white px-4 py-3 font-normal outline-none"
        />
      </label>
      <label className="block text-sm font-semibold" htmlFor="message">
        Message
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1.5 w-full resize-y rounded-2xl border border-forest/15 bg-white px-4 py-3 font-normal outline-none"
        />
      </label>
      <button
        type="submit"
        className="rounded-full bg-lime px-5 py-3 text-[15px] font-semibold text-forest hover:bg-[#b6e62a]"
      >
        Send message
      </button>
    </form>
  );
}
