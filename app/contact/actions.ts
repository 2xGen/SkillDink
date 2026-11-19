"use server";

import { createAdminClient } from "@/lib/supabase/admin";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContactMessage(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (name.length < 1 || name.length > 120) {
    return { ok: false as const, error: "Enter your name." };
  }
  if (!emailPattern.test(email) || email.length > 200) {
    return { ok: false as const, error: "Enter a valid email address." };
  }
  if (message.length < 1 || message.length > 4000) {
    return { ok: false as const, error: "Enter a message of up to 4,000 characters." };
  }

  const admin = createAdminClient();
  const { error } = await admin.from("contact_messages").insert({ name, email, message });

  if (error) {
    const detail = error.message.toLowerCase();
    if (detail.includes("contact_messages") || error.code === "PGRST205" || error.code === "42P01") {
      return { ok: false as const, error: "Messages are not ready yet. Add the contact table in Supabase, then try again." };
    }
    return { ok: false as const, error: "Your message was not saved. Try again in a moment." };
  }

  return { ok: true as const };
}
