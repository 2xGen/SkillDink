import "server-only";
import { cache } from "react";
import { createClient } from "@/lib/supabase/server";

export type CurrentUser = {
  id: string;
  email: string;
  name: string;
};

export const getCurrentUser = cache(async (): Promise<CurrentUser | null> => {
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

/** Signed-in accounts can open the course until checkout records a purchase. */
export async function hasCourseAccess() {
  const user = await getCurrentUser();
  return user !== null;
}

function stringValue(value: unknown) {
  return typeof value === "string" && value.trim() ? value.trim() : "";
}
