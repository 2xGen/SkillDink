import "server-only";
import { cache } from "react";
import { connection } from "next/server";
import { foundationsSlug } from "@/lib/catalog";
import { createClient } from "@/lib/supabase/server";

export type CurrentUser = {
  id: string;
  email: string;
  name: string;
};

export const getCurrentUser = cache(async (): Promise<CurrentUser | null> => {
  await connection();
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user) return null;

  const metadata = data.user.user_metadata;
  const name =
    stringValue(metadata.full_name) ||
    stringValue(metadata.name) ||
    data.user.email ||
    "Player";

  return {
    id: data.user.id,
    email: data.user.email ?? "",
    name,
  };
});

const purchaseStatus = cache(async (): Promise<"owned" | "none" | "unavailable"> => {
  const user = await getCurrentUser();
  if (!user) return "none";

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("purchases")
    .select("id")
    .eq("user_id", user.id)
    .eq("course_slug", foundationsSlug)
    .maybeSingle();

  if (error) return "unavailable";
  return data ? "owned" : "none";
});

/** True when this account has a purchase row, from Stripe or a coach code. */
export async function hasCourseAccess() {
  return (await purchaseStatus()) === "owned";
}

/** False when the purchases table cannot be read yet. */
export async function purchasesConfigured() {
  return (await purchaseStatus()) !== "unavailable";
}

function stringValue(value: unknown) {
  return typeof value === "string" && value.trim() ? value.trim() : "";
}
