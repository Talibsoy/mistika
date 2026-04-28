import DashboardSidebar from "@/components/shared/DashboardSidebar";

const DEMO_USER = { id: "demo", name: "Demo İstifadəçi", email: "demo@mistik.az" };

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", display: "flex" }}>
      <DashboardSidebar user={DEMO_USER} trialDaysLeft={12} subStatus="trialing" />
      <main style={{ flex: 1, padding: "32px 24px", overflowY: "auto" }}>
        {children}
      </main>
    </div>
  );
}
