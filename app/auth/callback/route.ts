import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const tokenHash = request.nextUrl.searchParams.get("token_hash");
  const type = request.nextUrl.searchParams.get("type");
  const next = safeNext(
    request.nextUrl.searchParams.get("next") ?? request.cookies.get("skilldink-next")?.value ?? null,
  );
  const successUrl = new URL(next, request.url);
  const failureUrl = new URL("/login?error=auth", request.url);
  let response = NextResponse.redirect(successUrl);

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options);
          });
        },
      },
    },
  );

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      await rememberTerms(supabase, request, response);
      clearNextCookie(response);
      return response;
    }
  }

  if (tokenHash && isEmailOtpType(type)) {
    response = NextResponse.redirect(successUrl);
    const { error } = await supabase.auth.verifyOtp({ type, token_hash: tokenHash });
    if (!error) {
      await rememberTerms(supabase, request, response);
      clearNextCookie(response);
      return response;
    }
  }

  return NextResponse.redirect(failureUrl);
}

async function rememberTerms(
  supabase: ReturnType<typeof createServerClient>,
  request: NextRequest,
  response: NextResponse,
) {
  if (request.cookies.get("skilldink-terms")?.value !== "1") return;
  await supabase.auth.updateUser({
    data: { terms_accepted_at: new Date().toISOString() },
  });
  response.cookies.set("skilldink-terms", "", { path: "/", maxAge: 0 });
}

function clearNextCookie(response: NextResponse) {
  response.cookies.set("skilldink-next", "", { path: "/", maxAge: 0 });
}

function safeNext(value: string | null) {
  if (!value || !value.startsWith("/") || value.startsWith("//")) {
    return "/learn/what-is-pickleball";
  }
  return value;
}

function isEmailOtpType(
  value: string | null,
): value is "signup" | "email" | "magiclink" | "recovery" | "invite" | "email_change" {
  return (
    value === "signup" ||
    value === "email" ||
    value === "magiclink" ||
    value === "recovery" ||
    value === "invite" ||
    value === "email_change"
  );
}
