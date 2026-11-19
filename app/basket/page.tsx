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
      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h1 className="font-display text-5xl italic leading-[0.98] tracking-[-0.03em]">Checkout</h1>
        <ol className="flex items-center gap-3 text-sm font-semibold" aria-label="Checkout steps">
          <li className="flex items-center gap-2">
            <span className="grid size-6 place-items-center rounded-full bg-forest text-xs text-lime">1</span>
            Review
          </li>
          <li className="h-px w-8 bg-forest/20" aria-hidden="true" />
          <li className="flex items-center gap-2 text-forest/45">
            <span className="grid size-6 place-items-center rounded-full border border-forest/20 text-xs">2</span>
            Payment
          </li>
        </ol>
      </div>
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
        <h2 className="text-sm font-bold tracking-[0.12em] uppercase">Summary</h2>
        <dl className="mt-4 space-y-3 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-forest/65">Subtotal</dt>
            <dd className="font-semibold tabular-nums">{price}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-forest/65">Access</dt>
            <dd className="font-semibold">One-time</dd>
          </div>
          <div className="flex items-baseline justify-between gap-4 border-t border-forest/10 pt-3">
            <dt className="font-bold">Total due</dt>
            <dd className="text-2xl font-bold tracking-tight tabular-nums">{price}</dd>
          </div>
          <p className="-mt-1 text-right text-xs font-semibold text-forest/45">USD</p>
        </dl>

        {user?.email ? (
          <p className="mt-4 rounded-xl bg-pale px-3 py-2 text-sm text-forest/75">
            Paying as <span className="font-semibold text-forest">{user.email}</span>
          </p>
        ) : null}

        {owned ? (
          <div className="mt-5">
            <p className="text-sm leading-relaxed text-forest/70">
              This course is already unlocked on your account.
            </p>
            <ButtonLink href="/learn/what-is-pickleball" className="mt-4 w-full">
              Continue the course
              <ArrowIcon />
            </ButtonLink>
          </div>
        ) : (
          <form action={placeOrder} className="mt-5">
            <label className="flex items-start gap-2.5 text-left text-sm leading-snug text-forest/80">
              <input
                type="checkbox"
                name="terms"
                required
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
                . The payment is non-refundable and the course is supplied as-is.
              </span>
            </label>
            {terms === "required" ? (
              <p className="mt-3 text-sm font-semibold text-court" role="alert">
                Accept the Terms and Privacy Policy before you pay.
              </p>
            ) : null}
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
            <button
              type="submit"
              name="intent"
              value="pay"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime px-5 py-3 text-[15px] font-semibold text-forest transition hover:bg-[#b6e62a]"
            >
              {user ? `Pay ${price}` : "Log in and pay"}
              <ArrowIcon />
            </button>
            {user ? (
              <p className="mt-3 text-center text-xs leading-relaxed text-forest/55">
                Card details are entered on the next page.
              </p>
            ) : (
              <p className="mt-3 text-center text-xs leading-relaxed text-forest/55">
                You will log in first, then return here to pay.
              </p>
            )}
            <CoachCode
              defaultCode={savedCode}
              message={redeemMessage(redeem)}
              signedIn={Boolean(user)}
            />
          </form>
        )}

        <PaymentMarks className="mt-5 border-t border-forest/10 pt-4" />
      </aside>
    </div>
  );
}

function CoachCode({
  defaultCode,
  message,
  signedIn,
}: {
  defaultCode: string;
  message?: string;
  signedIn: boolean;
}) {
  return (
    <details open={Boolean(message || defaultCode)} className="mt-4 border-t border-forest/10 pt-4">
      <summary className="cursor-pointer list-none text-sm font-semibold [&::-webkit-details-marker]:hidden">
        <span className="underline decoration-forest/30 underline-offset-4">
          Have a coach or associate code?
        </span>
      </summary>
      <div className="mt-3">
        <p className="text-sm leading-relaxed text-forest/65">
          Redeem it on this account for free access. Each code works for a limited number of
          accounts.
        </p>
        <label className="mt-3 block text-sm font-semibold" htmlFor="coach-code">
          Code
          <input
            id="coach-code"
            name="code"
            type="text"
            defaultValue={defaultCode}
            autoComplete="off"
            spellCheck={false}
            placeholder="Enter code"
            className="mt-1.5 w-full rounded-2xl border border-forest/15 bg-ivory px-4 py-3 font-normal tracking-wide uppercase outline-none focus:border-forest"
          />
        </label>
        {message ? (
          <p className="mt-3 text-sm font-semibold text-court" role="alert">
            {message}
          </p>
        ) : null}
        <button
          type="submit"
          name="intent"
          value="redeem"
          className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-forest/20 px-5 py-3 text-[15px] font-semibold transition hover:bg-pale"
        >
          {signedIn ? "Redeem free access" : "Log in to redeem"}
        </button>
      </div>
    </details>
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
