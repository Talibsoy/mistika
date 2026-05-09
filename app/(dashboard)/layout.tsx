import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getSupabaseAdmin } from "@/lib/supabase";
import DashboardSidebar from "@/components/shared/DashboardSidebar";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/giris");
  }

  const supabase = getSupabaseAdmin();
  const { data: sub } = await supabase
    .from("subscriptions")
    .select("status, trial_end")
    .eq("user_id", session.user.id)
    .single();

  const now = new Date();
  const trialEnd = sub?.trial_end ? new Date(sub.trial_end) : null;
  const trialDaysLeft = trialEnd
    ? Math.max(0, Math.ceil((trialEnd.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)))
    : 0;
  const subStatus = sub?.status ?? "expired";

  if (subStatus === "trialing" && trialDaysLeft === 0) {
    redirect("/qiymetler");
  }

  const user = {
    name: session.user.name ?? "İstifadəçi",
    email: session.user.email ?? "",
  };

  return (
    <div className="dashboard-layout" style={{ minHeight: "100vh", background: "#0a0a0a", display: "flex" }}>
      <DashboardSidebar user={user} trialDaysLeft={trialDaysLeft} subStatus={subStatus} />
      <main className="dashboard-main" style={{ flex: 1, padding: "32px 24px", overflowY: "auto" }}>
        {children}
      </main>
    </div>
  );
}
