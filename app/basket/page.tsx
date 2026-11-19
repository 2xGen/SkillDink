import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import { Suspense } from "react";
import { placeOrder } from "@/app/checkout/actions";
import { ArrowIcon, ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { CheckIcon } from "@/components/icons";
import { PaymentMarks } from "@/components/payment-marks";
import { course } from "@/lib/course";
import { getCurrentUser, hasCourseAccess } from "@/lib/session";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Review Pickleball Foundations and continue to secure payment.",
};

const price = `$${course.price}.00`;

export default function BasketPage({
  searchParams,
}: {
  searchParams: Promise<{
    terms?: string | string[];
    checkout?: string | string[];
    redeem?: string | string[];
  }>;
}) {
  return (
    <Container className="py-8 sm:py-12">
      <p className="text-sm font-semibold text-forest/55">
        <Link href="/courses/pickleball-foundations" className="hover:text-forest">
          The course
        </Link>
        <span className="px-2 text-forest/30">/</span>
        Checkout
      </p>
      <h1 className="mt-5 font-display text-5xl italic leading-[0.98] tracking-[-0.03em]">Checkout</h1>
      <Suspense fallback={<div className="mt-8 h-96 rounded-[1.4rem] bg-white" />}>
        <Checkout searchParams={searchParams} />
      </Suspense>
    </Container>
  );
}

async function Checkout({
  searchParams,
}: {
  searchParams: Promise<{
    terms?: string | string[];
    checkout?: string | string[];
    redeem?: string | string[];
  }>;
}) {
  const params = await searchParams;
  const terms = first(params.terms);
  const checkout = first(params.checkout);
  const redeem = first(params.redeem);
  const savedCode = (await cookies()).get("skilldink-code")?.value ?? "";
  const user = await getCurrentUser();
  const owned = await hasCourseAccess();

  return (
    <div className="mt-8 grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_24rem]">
      <div className="lg:col-span-2">
        <CheckoutSteps signedIn={Boolean(user)} />
      </div>
      <section className="rounded-[1.4rem] border border-forest/10 bg-white">
        <div className="flex items-center justify-between border-b border-forest/10 px-5 py-4 sm:px-6">
          <h2 className="text-sm font-bold tracking-[0.12em] uppercase">Your order</h2>
          <p className="text-sm text-forest/55">1 item</p>
        </div>
        <div className="flex gap-4 px-5 py-5 sm:px-6">
          <img
            src="/hero-court.png"
            alt=""
            width={160}
            height={96}
            className="h-20 w-32 shrink-0 rounded-xl bg-pale object-contain sm:h-24 sm:w-40"
          />
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl italic leading-none tracking-[-0.03em]">
                  {course.title}
                </h3>
                <p className="mt-2 text-sm text-forest/60">Digital course · one-time access</p>
              </div>
              <p className="text-base font-bold tabular-nums">{price}</p>
            </div>
            <p className="mt-3 text-sm text-forest/55">Qty 1</p>
          </div>
        </div>
        <ul className="space-y-2 border-t border-forest/10 px-5 py-4 sm:px-6">
          {course.included.map((item) => (
            <li key={item} className="flex gap-2.5 text-sm leading-snug text-forest/75">
              <CheckIcon className="mt-0.5 size-4 shrink-0 text-court" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <aside className="rounded-[1.4rem] border border-forest/10 bg-white px-5 py-5 sm:px-6 lg:sticky lg:top-24">
        {owned ? (
          <OwnedCourse />
        ) : !user ? (
          <>
            <h2 className="text-sm font-bold tracking-[0.12em] uppercase">Your account</h2>
            <p className="mt-4 text-sm leading-relaxed text-forest/75">
              Pickleball Foundations is <span className="font-semibold text-forest">{price}</span>,
              paid once. Sign in to pay or use a coach code.
            </p>
            <AccountStep />
          </>
        ) : (
          <AccessChoice
            email={user.email}
            savedCode={savedCode}
            terms={terms}
            checkout={checkout}
            redeem={redeem}
          />
        )}
      </aside>
    </div>
  );
}

function CheckoutSteps({ signedIn }: { signedIn: boolean }) {
  return (
    <ol className="flex items-center gap-3 text-sm font-semibold" aria-label="Checkout steps">
      <li className={`flex items-center gap-2 ${signedIn ? "text-forest/55" : ""}`}>
        <span
          className={`grid size-6 place-items-center rounded-full text-xs ${
            signedIn ? "bg-lime text-forest" : "bg-forest text-lime"
          }`}
        >
          {signedIn ? "✓" : "1"}
        </span>
        Account
      </li>
      <li className="h-px w-8 bg-forest/20" aria-hidden="true" />
      <li className={`flex items-center gap-2 ${signedIn ? "" : "text-forest/45"}`}>
        <span
          className={`grid size-6 place-items-center rounded-full text-xs ${
            signedIn ? "bg-forest text-lime" : "border border-forest/20"
          }`}
        >
          2
        </span>
        Get access
      </li>
    </ol>
  );
}

function OwnedCourse() {
  return (
    <>
      <h2 className="text-sm font-bold tracking-[0.12em] uppercase">Your course</h2>
      <p className="mt-4 text-sm leading-relaxed text-forest/70">
        This course is already unlocked on your account.
      </p>
      <ButtonLink href="/learn/what-is-pickleball" className="mt-4 w-full">
        Continue the course
        <ArrowIcon />
      </ButtonLink>
    </>
  );
}

function AccessChoice({
  email,
  savedCode,
  terms,
  checkout,
  redeem,
}: {
  email?: string;
  savedCode: string;
  terms?: string;
  checkout?: string;
  redeem?: string;
}) {
  const message = redeemMessage(redeem);

  return (
    <>
      <h2 className="text-sm font-bold tracking-[0.12em] uppercase">Get access</h2>
      {email ? (
        <p className="mt-4 text-sm text-forest/75">
          Signed in as <span className="font-semibold text-forest">{email}</span>
        </p>
      ) : null}
      <form action={placeOrder} className="mt-5">
        <section className="rounded-2xl bg-pale px-4 py-4">
          <h3 className="font-bold">Pay {price} once</h3>
          <p className="mt-1 text-sm leading-relaxed text-forest/70">
            Your card is entered on the next page. The payment is non-refundable, and the course is
            supplied as-is.
          </p>
          {checkout === "setup" ? (
            <p className="mt-3 text-sm font-semibold text-court" role="alert">
              Checkout is not ready yet. Try again in a moment.
            </p>
          ) : null}
          {checkout === "error" ? (
            <p className="mt-3 text-sm font-semibold text-court" role="alert">
              Payment did not start. Try again in a moment.
            </p>
          ) : null}
          <TermsAgreement id="terms-pay" required />
          {terms === "required" ? (
            <p className="mt-3 text-sm font-semibold text-court" role="alert">
              Accept the Terms and Privacy Policy to pay.
            </p>
          ) : null}
          <button
            type="submit"
            name="intent"
            value="pay"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime px-5 py-3 text-[15px] font-semibold text-forest transition hover:bg-[#b6e62a]"
          >
            Pay {price}
            <ArrowIcon />
          </button>
          <PaymentMarks className="mt-4" />
        </section>

        <p className="my-4 text-center text-xs font-bold tracking-[0.14em] text-forest/45 uppercase">
          or
        </p>

        <section>
          <h3 className="font-bold">Use a coach code</h3>
          <p className="mt-1 text-sm leading-relaxed text-forest/70">
            A code from your coach unlocks the course on this account. Each code works for a limited
            number of accounts.
          </p>
          <label className="mt-3 block text-sm font-semibold" htmlFor="coach-code">
            Code
            <input
              id="coach-code"
              name="code"
              type="text"
              defaultValue={savedCode}
              autoComplete="off"
              spellCheck={false}
              placeholder="Enter code"
              className="mt-1.5 w-full rounded-2xl border border-forest/15 bg-ivory px-4 py-3 font-normal tracking-wide uppercase outline-none focus:border-forest"
            />
          </label>
          {message && redeem !== "terms" ? (
            <p className="mt-3 text-sm font-semibold text-court" role="alert">
              {message}
            </p>
          ) : null}
          <TermsAgreement id="terms-code" />
          {redeem === "terms" ? (
            <p className="mt-3 text-sm font-semibold text-court" role="alert">
              Accept the Terms and Privacy Policy to redeem a code.
            </p>
          ) : null}
          <button
            type="submit"
            name="intent"
            value="redeem"
            formNoValidate
            className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-forest/20 bg-white px-5 py-3 text-[15px] font-semibold transition hover:bg-pale"
          >
            Redeem free access
          </button>
        </section>
      </form>
    </>
  );
}

function TermsAgreement({ id, required = false }: { id: string; required?: boolean }) {
  return (
    <label htmlFor={id} className="mt-4 flex items-start gap-2.5 text-left text-sm leading-snug text-forest/80">
      <input
        id={id}
        type="checkbox"
        name="terms"
        required={required}
        className="mt-0.5 size-4 shrink-0 accent-lime"
      />
      <span>
        I agree to the{" "}
        <Link href="/terms" className="font-semibold text-forest underline underline-offset-4">
          Terms
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="font-semibold text-forest underline underline-offset-4">
          Privacy Policy
        </Link>
        .
      </span>
    </label>
  );
}

function AccountStep() {
  return (
    <div className="mt-5">
      <p className="text-sm leading-relaxed text-forest/75">
        Create an account or log in. You will come straight back here to finish checkout.
      </p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <Link
          href="/login?next=/basket&mode=register"
          className="inline-flex items-center justify-center rounded-full bg-lime px-3 py-3 text-center text-sm font-semibold text-forest hover:bg-[#b6e62a]"
        >
          Create an account
        </Link>
        <Link
          href="/login?next=/basket"
          className="inline-flex items-center justify-center rounded-full border border-forest/80 px-3 py-3 text-center text-sm font-semibold text-forest hover:bg-forest/5"
        >
          Log in
        </Link>
      </div>
    </div>
  );
}

function redeemMessage(code: string | undefined) {
  if (code === "invalid") return "That code is not recognised.";
  if (code === "full") return "That code has already been used by the maximum number of accounts.";
  if (code === "empty") return "Enter your coach or associate code.";
  if (code === "terms") return "Accept the Terms and Privacy Policy before you redeem a code.";
  if (code === "unavailable") return "Coach codes are not ready yet. Add them in Supabase, then try again.";
  return undefined;
}

function first(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}
