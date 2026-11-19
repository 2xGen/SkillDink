import { SiteHeader } from "@/components/site-header";
import { hasCourseAccess } from "@/lib/session";

export async function HeaderGate() {
  const signedIn = await hasCourseAccess();
  return <SiteHeader signedIn={signedIn} />;
}
