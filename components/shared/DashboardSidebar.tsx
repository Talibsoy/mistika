"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const navItems = [
  { href: "/panel", icon: "🏠", label: "Panel" },
  { href: "/tarot", icon: "🔮", label: "Tarot" },
  { href: "/yuxu", icon: "🌙", label: "Yuxu" },
  { href: "/burc", icon: "⭐", label: "Bürc" },
  { href: "/numerologiya", icon: "🔢", label: "Rəqəm" },
];

interface Props {
  user: { name?: string | null; email?: string | null };
  trialDaysLeft: number | null;
  subStatus?: string;
}

export default function DashboardSidebar({ user, trialDaysLeft, subStatus }: Props) {
  const pathname = usePathname();

  return (
    <>
      {/* ── Desktop sidebar ── */}
      <aside className="sidebar-desktop" style={{ width: 240, background: "#0d0d0d", borderRight: "1px solid #1a1a1a", flexDirection: "column", padding: "24px 16px", minHeight: "100vh", flexShrink: 0 }}>
        <Link href="/" style={{ textDecoration: "none", display: "block", marginBottom: 32 }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#d4af37" }}>✦ Mistik</span>
        </Link>

        {subStatus === "trialing" && trialDaysLeft !== null && (
          <div style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.3)", borderRadius: 10, padding: "8px 12px", marginBottom: 20, fontSize: 12, color: "#d4af37", textAlign: "center" }}>
            {trialDaysLeft > 0 ? `Trial: ${trialDaysLeft} gün qalıb` : "Trial bitib"}
          </div>
        )}

        <nav style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", borderRadius: 10, background: active ? "rgba(220,38,38,0.15)" : "transparent", border: active ? "1px solid rgba(220,38,38,0.3)" : "1px solid transparent", color: active ? "#f5f5f5" : "#888", fontSize: 14, fontWeight: active ? 600 : 400, transition: "all 0.2s" }}>
                <span style={{ fontSize: 18 }}>{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div style={{ borderTop: "1px solid #1a1a1a", paddingTop: 16, marginTop: 16 }}>
          <div style={{ fontSize: 13, color: "#888", marginBottom: 8, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {user.name || user.email}
          </div>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            style={{ background: "none", border: "1px solid #333", color: "#555", padding: "8px 14px", borderRadius: 8, cursor: "pointer", fontSize: 13, width: "100%", textAlign: "left", transition: "all 0.2s" }}
            onMouseEnter={e => { (e.currentTarget.style.borderColor = "#dc2626"); (e.currentTarget.style.color = "#dc2626"); }}
            onMouseLeave={e => { (e.currentTarget.style.borderColor = "#333"); (e.currentTarget.style.color = "#555"); }}
          >
            Çıxış
          </button>
        </div>
      </aside>

      {/* ── Mobile bottom nav ── */}
      <nav className="dashboard-bottom-nav" style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 100, background: "#0d0d0d", borderTop: "1px solid #1a1a1a", padding: "8px 0 calc(8px + env(safe-area-inset-bottom))", justifyContent: "space-around", alignItems: "center" }}>
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: 3, padding: "6px 12px", borderRadius: 10, background: active ? "rgba(220,38,38,0.15)" : "transparent", minWidth: 52 }}>
              <span style={{ fontSize: 22 }}>{item.icon}</span>
              <span style={{ fontSize: 10, color: active ? "#f5f5f5" : "#555", fontWeight: active ? 700 : 400 }}>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
