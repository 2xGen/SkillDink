import "server-only";
import { createAdminClient } from "@/lib/supabase/admin";

export type RedeemResult = "redeemed" | "owned" | "invalid" | "full" | "unavailable";

export function normalizeAccessCode(value: string) {
  return value.trim().replace(/\s+/g, " ").slice(0, 40);
}

export async function redeemAccessCode(userId: string, rawCode: string): Promise<RedeemResult> {
  const code = normalizeAccessCode(rawCode);
  if (!code) return "invalid";

  const admin = createAdminClient();
  const { data, error } = await admin.rpc("redeem_access_code", {
    p_code: code,
    p_user_id: userId,
  });

  if (error) {
    const message = error.message.toLowerCase();
    if (message.includes("redeem_access_code") || error.code === "PGRST202") return "unavailable";
    throw error;
  }

  if (data === "redeemed" || data === "owned" || data === "invalid" || data === "full") return data;
  return "invalid";
}
