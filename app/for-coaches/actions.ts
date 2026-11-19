"use server";

import { createAdminClient } from "@/lib/supabase/admin";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const interests = {
  group: "Group access",
  education: "Coach education",
  collaboration: "Collaboration",
} as const;

const groupSizes = ["1–10", "11–25", "26–50", "More than 50", "Not sure yet"];

export async function sendCoachEnquiry(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const organisation = String(formData.get("organisation") ?? "").trim();
  const groupSize = String(formData.get("groupSize") ?? "").trim();
  const interest = String(formData.get("interest") ?? "").trim();
  const note = String(formData.get("note") ?? "").trim();

  if (name.length < 1 || name.length > 120) {
    return { ok: false as const, error: "Enter your name." };
  }
  if (!emailPattern.test(email) || email.length > 200) {
    return { ok: false as const, error: "Enter a valid email address." };
  }
  if (organisation.length < 1 || organisation.length > 160) {
    return { ok: false as const, error: "Enter your organisation." };
  }
  if (!groupSizes.includes(groupSize)) {
    return { ok: false as const, error: "Choose an approximate group size." };
  }
  if (!(interest in interests)) {
    return { ok: false as const, error: "Choose what you would like to discuss." };
  }
  if (note.length > 1000) {
    return { ok: false as const, error: "Keep the extra note to 1,000 characters." };
  }

  const label = interests[interest as keyof typeof interests];
  const admin = createAdminClient();
  const { error } = await admin.from("coach_enquiries").insert({
    name,
    email,
    organisation,
    group_size: groupSize,
    interest: label,
    note: note || null,
  });

  if (error) {
    const detail = error.message.toLowerCase();
    if (detail.includes("coach_enquiries") || error.code === "PGRST205" || error.code === "42P01") {
      return { ok: false as const, error: "Enquiries are not ready yet. Try again in a moment." };
    }
    return { ok: false as const, error: "Your enquiry was not saved. Try again in a moment." };
  }

  return { ok: true as const };
}
