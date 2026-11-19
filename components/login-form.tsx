"use client";

import { useActionState, useState } from "react";
import { signInWithEmail, signInWithGoogle, signUpWithEmail } from "@/app/login/actions";

const fieldClass =
  "mt-1.5 w-full rounded-2xl border border-forest/15 bg-ivory px-4 py-3 font-normal outline-none transition focus:border-forest";

export function LoginForm({ notice }: { notice?: string }) {
  const [mode, setMode] = useState<"login" | "register">("login");
  const creating = mode === "register";

  return (
    <div>
      <p className="text-xs font-bold tracking-[0.14em] text-court uppercase">Your account</p>
      <h1 className="mt-3 font-display text-5xl italic leading-[0.98] tracking-[-0.03em]">
        {creating ? "Create an account" : "Log in"}
      </h1>
      <p className="mt-3 leading-relaxed text-forest/75">
        {creating
          ? "Create an account with Google, or with your name and email."
          : "Continue with Google, or log in with your email and password."}
      </p>
      <div className="mt-6 grid grid-cols-2 rounded-full bg-pale p-1" role="tablist" aria-label="Account">
        <ModeButton active={!creating} onClick={() => setMode("login")}>
          Log in
        </ModeButton>
        <ModeButton active={creating} onClick={() => setMode("register")}>
          Create an account
        </ModeButton>
      </div>
      {notice ? (
        <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-800" role="alert">
          {notice}
        </p>
      ) : null}
      <form action={signInWithGoogle} className="mt-6">
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-3 rounded-full border border-forest/15 bg-white px-5 py-3 text-[15px] font-semibold text-forest transition hover:bg-pale"
        >
          <GoogleMark />
          Continue with Google
        </button>
      </form>
      <div className="my-6 flex items-center gap-3">
        <span className="h-px flex-1 bg-forest/10" />
        <span className="text-xs font-bold tracking-[0.12em] text-forest/45 uppercase">or use email</span>
        <span className="h-px flex-1 bg-forest/10" />
      </div>
      <EmailFields key={mode} mode={mode} />
    </div>
  );
}

function ModeButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
        active ? "bg-white text-forest shadow-sm" : "text-forest/60 hover:text-forest"
      }`}
    >
      {children}
    </button>
  );
}

function EmailFields({ mode }: { mode: "login" | "register" }) {
  const creating = mode === "register";
  const action = creating ? signUpWithEmail : signInWithEmail;
  const [state, formAction, pending] = useActionState(action, null);

  return (
    <form className="space-y-4" action={formAction}>
      {creating ? (
        <label className="block text-sm font-semibold" htmlFor="name">
          Name
          <input id="name" name="name" type="text" required autoComplete="name" className={fieldClass} />
        </label>
      ) : null}
      <label className="block text-sm font-semibold" htmlFor="email">
        Email
        <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} />
      </label>
      <label className="block text-sm font-semibold" htmlFor="password">
        Password
        <input
          id="password"
          name="password"
          type="password"
          required
          minLength={creating ? 8 : undefined}
          autoComplete={creating ? "new-password" : "current-password"}
          className={fieldClass}
        />
      </label>
      {creating ? <p className="-mt-2 text-sm text-forest/60">At least 8 characters.</p> : null}
      {state?.error ? (
        <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-800" role="alert">
          {state.error}
        </p>
      ) : null}
      {state?.message ? (
        <p className="rounded-2xl bg-pale px-4 py-3 text-sm font-semibold text-forest" role="status">
          {state.message}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-lime px-5 py-3 text-[15px] font-semibold text-forest transition hover:bg-[#b6e62a] disabled:opacity-60"
      >
        {pending ? "Please wait…" : creating ? "Create account" : "Log in"}
      </button>
    </form>
  );
}

function GoogleMark() {
  return (
    <svg viewBox="0 0 18 18" aria-hidden="true" className="size-4">
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.8.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.02-3.7H.96v2.33A9 9 0 0 0 9 18z"
      />
      <path
        fill="#FBBC05"
        d="M3.98 10.72A5.4 5.4 0 0 1 3.7 9c0-.6.1-1.18.28-1.72V4.95H.96A9 9 0 0 0 0 9c0 1.45.35 2.82.96 4.05l3.02-2.33z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .96 4.95l3.02 2.33C4.68 5.16 6.66 3.58 9 3.58z"
      />
    </svg>
  );
}
