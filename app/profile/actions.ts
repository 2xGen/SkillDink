"use server";

import { redirect } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";
import { getCurrentUser } from "@/lib/session";

export async function deleteAccount(formData: FormData) {
  if (formData.get("confirm") !== "on") {
    redirect("/profile?delete=confirm");
  }

  const user = await getCurrentUser();
  if (!user) redirect("/login");

  const admin = createAdminClient();
  const { error } = await admin.auth.admin.deleteUser(user.id);
  if (error) redirect("/profile?delete=error");

  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/");
}
