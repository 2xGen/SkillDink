import "server-only";
import { foundationsSlug } from "@/lib/catalog";
import { createAdminClient } from "@/lib/supabase/admin";

export async function recordPurchase(input: {
  userId: string;
  courseSlug: string;
  checkoutSessionId: string;
}) {
  const admin = createAdminClient();
  const { error } = await admin.from("purchases").upsert(
    {
      user_id: input.userId,
      course_slug: input.courseSlug || foundationsSlug,
      stripe_checkout_session_id: input.checkoutSessionId,
    },
    { onConflict: "stripe_checkout_session_id", ignoreDuplicates: true },
  );

  if (error && error.code !== "23505") throw error;
}
