"use server";

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { normalizeAccessCode, redeemAccessCode } from "@/lib/access-codes";
import { foundationsSlug } from "@/lib/catalog";
import { getStripe } from "@/lib/stripe";
import { getCurrentUser, hasCourseAccess, purchasesConfigured } from "@/lib/session";

const codeCookie = "skilldink-code";

export async function placeOrder(formData: FormData) {
  if (formData.get("intent") === "redeem") {
    await redeemFromCheckout(formData);
    return;
  }
  await startCheckout(formData);
}

async function redeemFromCheckout(formData: FormData) {
  const code = normalizeAccessCode(String(formData.get("code") ?? ""));
  if (formData.get("terms") !== "on") redirect("/basket?redeem=terms");
  if (!code) redirect("/basket?redeem=empty");

  const user = await getCurrentUser();
  if (!user) {
    const jar = await cookies();
    jar.set(codeCookie, code, { path: "/", maxAge: 600, httpOnly: true, sameSite: "lax" });
    redirect("/login?next=/basket");
  }

  const result = await redeemAccessCode(user.id, code);
  const jar = await cookies();
  jar.delete(codeCookie);
  if (result === "redeemed" || result === "owned") redirect("/learn/what-is-pickleball");
  redirect(`/basket?redeem=${result}`);
}

export async function startCheckout(formData: FormData) {
  if (formData.get("terms") !== "on") redirect("/basket?terms=required");

  const user = await getCurrentUser();
  if (!user) redirect("/login?next=/basket");
  if (await hasCourseAccess()) redirect("/learn/what-is-pickleball");
  if (!(await purchasesConfigured())) redirect("/basket?checkout=setup");

  const stripe = getStripe();
  const price = process.env.STRIPE_PRICE_ID;
  if (!stripe || !price) redirect("/basket?checkout=setup");

  const headerList = await headers();
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host");
  const proto =
    headerList.get("x-forwarded-proto") ?? (host?.startsWith("localhost") ? "http" : "https");
  const origin = `${proto}://${host}`;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    client_reference_id: user.id,
    customer_email: user.email || undefined,
    line_items: [{ price, quantity: 1 }],
    metadata: {
      user_id: user.id,
      course_slug: foundationsSlug,
    },
    success_url: `${origin}/checkout/return?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/basket`,
  });

  if (!session.url) redirect("/basket?checkout=error");
  redirect(session.url);
}
