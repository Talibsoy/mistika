"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const cards = [
  { href: "/tarot",        icon: "🔮", title: "Tarot Fal",    desc: "Kartların sirrini kəşf et",    color: "#dc2626", badge: "3 kart" },
  { href: "/yuxu",         icon: "🌙", title: "Yuxu Yozma",   desc: "Yuxunun mənasını öyrən",       color: "#7c3aed", badge: "Analiz" },
  { href: "/burc",         icon: "⭐", title: "Bürc",          desc: "Ulduzların mesajını al",        color: "#d4af37", badge: "12 bürc" },
  { href: "/numerologiya", icon: "🔢", title: "Numerologiya", desc: "Rəqəmlərin gücünü hiss et",    color: "#0891b2", badge: "Hesabla" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ServiceCards() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}
    >
      {cards.map((c, i) => (
        <motion.div key={c.href} variants={item}>
          <Link href={c.href} style={{ textDecoration: "none", display: "block" }}>
            <motion.div
              whileHover={{ scale: 1.03, borderColor: c.color }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              style={{
                background: "#111",
                border: "1px solid #222",
                borderRadius: 18,
                padding: "24px 20px",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
              }}
              onHoverStart={(e) => {
                const el = (e.target as HTMLElement).closest("[data-card]") as HTMLElement;
                if (el) el.style.boxShadow = `0 0 28px ${c.color}28`;
              }}
              onHoverEnd={(e) => {
                const el = (e.target as HTMLElement).closest("[data-card]") as HTMLElement;
                if (el) el.style.boxShadow = "0 2px 12px rgba(0,0,0,0.3)";
              }}
              data-card
            >
              {/* Shimmer */}
              <div style={{
                position: "absolute", inset: 0, pointerEvents: "none",
                background: "linear-gradient(135deg, transparent, rgba(255,255,255,0.02), transparent)",
                backgroundSize: "200%",
                animation: "shimmer 6s infinite",
                animationDelay: `${i * 0.8}s`,
              }} />

              {/* Icon */}
              <div style={{
                fontSize: 36, marginBottom: 14,
                display: "inline-block",
                animation: "float 4s ease-in-out infinite",
                animationDelay: `${i * 0.5}s`,
              }}>
                {c.icon}
              </div>

              {/* Badge */}
              <div style={{
                position: "absolute", top: 16, right: 16,
                background: `${c.color}18`,
                border: `1px solid ${c.color}35`,
                borderRadius: 20, padding: "2px 8px",
                fontSize: 10, color: c.color, fontWeight: 600, letterSpacing: 0.5,
              }}>
                {c.badge}
              </div>

              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 17, fontWeight: 700, color: "#f5f5f5", marginBottom: 6,
              }}>
                {c.title}
              </h3>
              <p style={{ color: "#666", fontSize: 13, lineHeight: 1.5 }}>{c.desc}</p>

              <div style={{
                marginTop: 16, fontSize: 12, color: c.color, fontWeight: 600, letterSpacing: 0.5,
              }}>
                Başla →
              </div>
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
