import type { Metadata } from "next";
import { Suspense } from "react";
import { redirect } from "next/navigation";
import { Container } from "@/components/container";
import { foundationsSlug } from "@/lib/catalog";
import { recordPurchase } from "@/lib/purchases";
import { getCurrentUser } from "@/lib/session";
import { getStripe } from "@/lib/stripe";

export const metadata: Metadata = {
  title: "Payment",
  description: "Confirm your SkillDink course payment.",
};

export default function CheckoutReturnPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string | string[] }>;
}) {
  return (
    <Container className="py-16">
      <Suspense fallback={<p className="text-lg text-forest/75">Confirming your payment…</p>}>
        <ReturnPanel searchParams={searchParams} />
      </Suspense>
    </Container>
  );
}

async function ReturnPanel({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string | string[] }>;
}) {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  const params = await searchParams;
  const sessionId = Array.isArray(params.session_id) ? params.session_id[0] : params.session_id;
  if (!sessionId) redirect("/courses/pickleball-foundations");

  const stripe = getStripe();
  if (!stripe) redirect("/courses/pickleball-foundations?checkout=setup");

  const session = await stripe.checkout.sessions.retrieve(sessionId);
  const owner = session.metadata?.user_id || session.client_reference_id;
  if (owner !== user.id || session.payment_status !== "paid") {
    return (
      <div className="max-w-xl">
        <h1 className="font-display text-5xl italic leading-[0.98] tracking-[-0.03em]">
          Payment not confirmed
        </h1>
        <p className="mt-4 leading-relaxed text-forest/75">
          Stripe has not marked this checkout as paid for your account.
        </p>
      </div>
    );
  }

  await recordPurchase({
    userId: user.id,
    courseSlug: session.metadata?.course_slug || foundationsSlug,
    checkoutSessionId: session.id,
  });
  redirect("/learn/what-is-pickleball");
}
