import { SiteHeader } from "@/components/site-header";
import { getCurrentUser } from "@/lib/session";

export async function HeaderGate() {
  const user = await getCurrentUser();
  return <SiteHeader userName={user?.name ?? null} />;
}
