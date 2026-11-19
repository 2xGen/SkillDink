import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { signOut } from "@/app/login/actions";
import { deleteAccount } from "@/app/profile/actions";
import { BuyCourseButton } from "@/components/buy-course-button";
import { ArrowIcon, ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { getCurrentUser, hasCourseAccess } from "@/lib/session";

export const metadata: Metadata = {
  title: "Profile",
  description: "Your SkillDink account.",
};

export default function ProfilePage({
  searchParams,
}: {
  searchParams: Promise<{ delete?: string | string[] }>;
}) {
  return (
    <Container className="py-12 sm:py-16">
      <div className="mx-auto w-full max-w-[32rem] rounded-[1.8rem] border border-forest/10 bg-white px-6 py-8 shadow-[0_24px_60px_-36px_rgba(18,59,50,0.55)] sm:px-8 sm:py-10">
        <Suspense fallback={<ProfileFallback />}>
          <ProfilePanel searchParams={searchParams} />
        </Suspense>
      </div>
    </Container>
  );
}

function ProfileFallback() {
  return (
    <>
      <p className="text-xs font-bold tracking-[0.14em] text-court uppercase">Your account</p>
      <h1 className="mt-3 font-display text-5xl italic leading-[0.98] tracking-[-0.03em]">
        Profile
      </h1>
    </>
  );
}

async function ProfilePanel({
  searchParams,
}: {
  searchParams: Promise<{ delete?: string | string[] }>;
}) {
  const user = await getCurrentUser();
  if (!user) {
    return (
      <>
        <p className="text-xs font-bold tracking-[0.14em] text-court uppercase">Your account</p>
        <h1 className="mt-3 font-display text-5xl italic leading-[0.98] tracking-[-0.03em]">
          Profile
        </h1>
        <p className="mt-3 leading-relaxed text-forest/75">Log in to see your account.</p>
        <ButtonLink href="/login" className="mt-6">
          Log in
          <ArrowIcon />
        </ButtonLink>
      </>
    );
  }

  const owned = await hasCourseAccess();
  const { delete: deleteCode } = await searchParams;
  const deleteState = Array.isArray(deleteCode) ? deleteCode[0] : deleteCode;

  return (
    <>
      <p className="text-xs font-bold tracking-[0.14em] text-court uppercase">Your account</p>
      <h1 className="mt-3 font-display text-5xl italic leading-[0.98] tracking-[-0.03em]">
        Profile
      </h1>
      <p className="mt-4 leading-relaxed text-forest/75">
        {owned
          ? "Pickleball Foundations is unlocked on this account."
          : "Pickleball Foundations is not on this account yet."}
      </p>
      <dl className="mt-8 space-y-5">
        <div>
          <dt className="text-xs font-bold tracking-[0.14em] text-forest/50 uppercase">Name</dt>
          <dd className="mt-1 text-lg font-semibold">{user.name}</dd>
        </div>
        {user.email ? (
          <div>
            <dt className="text-xs font-bold tracking-[0.14em] text-forest/50 uppercase">Email</dt>
            <dd className="mt-1 text-lg font-semibold">{user.email}</dd>
          </div>
        ) : null}
      </dl>
      {owned ? (
        <ButtonLink href="/learn/what-is-pickleball" className="mt-8">
          Continue the course
          <ArrowIcon />
        </ButtonLink>
      ) : (
        <BuyCourseButton className="mt-8">Get Pickleball Foundations</BuyCourseButton>
      )}
      <form action={signOut} className="mt-4">
        <button type="submit" className="text-sm font-semibold underline underline-offset-4">
          Log out
        </button>
      </form>
      <form action={deleteAccount} className="mt-10 border-t border-forest/10 pt-6">
        <h2 className="font-display text-2xl italic tracking-[-0.03em]">Delete account</h2>
        <p className="mt-2 text-sm leading-relaxed text-forest/75">
          Deleting your account removes it permanently. You lose access to Pickleball Foundations,
          including a course you have already paid for. A new account, even with the same email,
          does not restore it. This follows the{" "}
          <Link href="/terms" className="font-semibold underline underline-offset-4">
            Terms
          </Link>
          .
        </p>
        <label className="mt-4 flex items-start gap-2.5 text-sm leading-snug">
          <input type="checkbox" name="confirm" required className="mt-0.5 size-4 shrink-0 accent-lime" />
          <span>I understand I will lose access to the course and that this cannot be undone.</span>
        </label>
        {deleteState === "confirm" ? (
          <p className="mt-3 text-sm font-semibold text-red-800" role="alert">
            Confirm that you understand course access is lost, then delete the account.
          </p>
        ) : null}
        {deleteState === "error" ? (
          <p className="mt-3 text-sm font-semibold text-red-800" role="alert">
            The account could not be deleted. Try again, or email matthijs@2xgen.com.
          </p>
        ) : null}
        <button
          type="submit"
          className="mt-4 text-sm font-semibold text-red-800 underline underline-offset-4"
        >
          Delete my account
        </button>
      </form>
    </>
  );
}
