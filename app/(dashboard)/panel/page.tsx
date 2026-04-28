"use client";
import Link from "next/link";

const cards = [
  { href: "/tarot", icon: "🔮", title: "Tarot Fal", desc: "Kartların sirrini kəşf et" },
  { href: "/yuxu", icon: "🌙", title: "Yuxu Yozma", desc: "Yuxunun mənasını öyrən" },
  { href: "/burc", icon: "⭐", title: "Bürc", desc: "Ulduzların mesajını al" },
  { href: "/numerologiya", icon: "🔢", title: "Numerologiya", desc: "Rəqəmlərin gücünü hiss et" },
];

export default function PanelPage() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: "#f5f5f5", marginBottom: 8 }}>
        Xoş gəldin ✦
      </h1>
      <p style={{ color: "#888", marginBottom: 40 }}>Hansı mistik yolculuğa başlamaq istəyirsən?</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
        {cards.map((c) => (
          <Link key={c.href} href={c.href} style={{ textDecoration: "none" }}>
            <div style={{
              background: "#111",
              border: "1px solid #222",
              borderRadius: 16,
              padding: 24,
              cursor: "pointer",
              transition: "all 0.3s",
            }}
              onMouseEnter={e => { (e.currentTarget.style.borderColor = "#d4af37"); (e.currentTarget.style.boxShadow = "0 0 20px rgba(212,175,55,0.1)"); }}
              onMouseLeave={e => { (e.currentTarget.style.borderColor = "#222"); (e.currentTarget.style.boxShadow = "none"); }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>{c.icon}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 600, color: "#f5f5f5", marginBottom: 6 }}>{c.title}</h3>
              <p style={{ color: "#888", fontSize: 13 }}>{c.desc}</p>
            </div>
          </Link>
        ))}
      </div>


    </div>
  );
}
