import { NextResponse } from "next/server";
import { foundationsSlug } from "@/lib/catalog";
import { recordPurchase } from "@/lib/purchases";
import { getStripe } from "@/lib/stripe";

export async function POST(request: Request) {
  const stripe = getStripe();
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!stripe || !secret) {
    return NextResponse.json({ error: "Stripe webhook is not configured." }, { status: 500 });
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing Stripe signature." }, { status: 400 });
  }

  const body = await request.text();
  let event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, secret);
  } catch {
    return NextResponse.json({ error: "Invalid Stripe signature." }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const userId = session.metadata?.user_id || session.client_reference_id;
    const courseSlug = session.metadata?.course_slug || foundationsSlug;
    if (session.payment_status === "paid" && userId) {
      await recordPurchase({
        userId,
        courseSlug,
        checkoutSessionId: session.id,
      });
    }
  }

  return NextResponse.json({ received: true });
}
