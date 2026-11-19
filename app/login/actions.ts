"use server";

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export type AuthFormState = {
  error?: string;
  message?: string;
} | null;

export async function signInWithEmail(
  _previous: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  const email = readEmail(formData);
  const password = String(formData.get("password") ?? "");
  if (!email || !password) return { error: "Enter your email and password." };

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { error: friendlyAuthError(error.message) };

  await clearDemoCookie();
  redirect(safeNext(formData.get("next")));
}

export async function signUpWithEmail(
  _previous: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = readEmail(formData);
  const password = String(formData.get("password") ?? "");

  if (name.length < 2) return { error: "Enter your name." };
  if (!email.includes("@")) return { error: "Enter a valid email address." };
  if (password.length < 8) return { error: "Use a password of at least 8 characters." };
  if (formData.get("terms") !== "on") {
    return { error: "Accept the Terms and Privacy Policy to create an account." };
  }

  const supabase = await createClient();
  const origin = await requestOrigin();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
      data: { full_name: name, terms_accepted_at: new Date().toISOString() },
    },
  });

  if (error) return { error: friendlyAuthError(error.message) };
  if (data.user && data.user.identities && data.user.identities.length === 0) {
    return { error: "An account with that email already exists. Log in instead." };
  }
  if (data.session) {
    await clearDemoCookie();
    redirect(safeNext(formData.get("next")));
  }

  return {
    message: "Check your email and open the confirmation link in this browser, then log in.",
  };
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  await clearDemoCookie();
  redirect("/");
}

async function requestOrigin() {
  const headerList = await headers();
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host");
  const proto =
    headerList.get("x-forwarded-proto") ?? (host?.startsWith("localhost") ? "http" : "https");
  return `${proto}://${host}`;
}

function safeNext(value: FormDataEntryValue | null) {
  const next = String(value ?? "");
  if (!next.startsWith("/") || next.startsWith("//")) return "/learn/what-is-pickleball";
  return next;
}

function readEmail(formData: FormData) {
  return String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
}

async function clearDemoCookie() {
  const jar = await cookies();
  jar.delete("skilldink-access");
}

function friendlyAuthError(message: string) {
  const lower = message.toLowerCase();
  if (lower.includes("invalid login credentials")) {
    return "That email and password do not match an account.";
  }
  if (lower.includes("email not confirmed")) {
    return "Confirm your email before logging in. The link is in your inbox.";
  }
  if (lower.includes("already registered")) {
    return "An account with that email already exists. Log in instead.";
  }
  return message;
}
