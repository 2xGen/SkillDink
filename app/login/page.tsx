import type { Metadata } from "next";
import { Suspense } from "react";
import { signOut } from "@/app/login/actions";
import { ArrowIcon, ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { LoginForm } from "@/components/login-form";
import { getCurrentUser } from "@/lib/session";

export const metadata: Metadata = {
  title: "Log in",
  description: "Log in or create a SkillDink account with Google or email.",
};

export default function LoginPage({ searchParams }: PageProps<"/login">) {
  return (
    <Container className="flex min-h-[calc(100dvh-11rem)] items-center py-10 sm:py-14">
      <div className="mx-auto w-full max-w-[28rem] rounded-[1.8rem] border border-forest/10 bg-white px-6 py-8 shadow-[0_24px_60px_-36px_rgba(18,59,50,0.55)] sm:px-8 sm:py-10">
        <Suspense fallback={<LoginFallback />}>
          <LoginPanel searchParams={searchParams} />
        </Suspense>
      </div>
    </Container>
  );
}

function LoginFallback() {
  return (
    <>
      <p className="text-xs font-bold tracking-[0.14em] text-court uppercase">Your account</p>
      <h1 className="mt-3 font-display text-5xl italic leading-[0.98] tracking-[-0.03em]">Log in</h1>
      <p className="mt-3 leading-relaxed text-forest/75">
        Continue with Google, or log in with your email and password.
      </p>
    </>
  );
}

async function LoginPanel({
  searchParams,
}: {
  searchParams: Promise<{ error?: string | string[] }>;
}) {
  const user = await getCurrentUser();
  const { error } = await searchParams;

  if (user) {
    return (
      <>
        <p className="text-xs font-bold tracking-[0.14em] text-court uppercase">Your account</p>
        <h1 className="mt-3 font-display text-5xl italic leading-[0.98] tracking-[-0.03em]">
          You are logged in
        </h1>
        <p className="mt-3 leading-relaxed text-forest/75">
          Signed in as {user.name}
          {user.email ? ` (${user.email})` : ""}.
        </p>
        <ButtonLink href="/learn/what-is-pickleball" className="mt-6">
          Continue the course
          <ArrowIcon />
        </ButtonLink>
        <form action={signOut} className="mt-4">
          <button type="submit" className="text-sm font-semibold underline underline-offset-4">
            Log out
          </button>
        </form>
      </>
    );
  }

  const code = Array.isArray(error) ? error[0] : error;

  return <LoginForm notice={noticeFor(code)} />;
}

function noticeFor(code: string | undefined) {
  if (code === "google") return "Google sign-in did not complete. Try again.";
  if (code === "auth") return "That sign-in link has expired or was already used. Log in again.";
  return undefined;
}
