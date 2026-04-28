"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "100px 24px 80px" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div style={{ display: "inline-block", background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.3)", borderRadius: 24, padding: "6px 18px", marginBottom: 24 }}>
          <span style={{ color: "#d4af37", fontSize: 13, fontWeight: 500 }}>✦ İlk 14 gün tamamilə pulsuz</span>
        </div>

        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(40px, 7vw, 80px)",
          fontWeight: 700,
          lineHeight: 1.15,
          marginBottom: 24,
          background: "linear-gradient(135deg, #f5f5f5 30%, #d4af37)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          Kainatın Sirrini<br />Kəşf Et
        </h1>

        <p style={{ fontSize: 18, color: "#888", maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.7 }}>
          Tarot fal, yuxu yozma, bürc proqnozu və numerologiya — hamısı Azərbaycan dilində,
          Gemini AI texnologiyası ilə.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/qeydiyyat" style={{
            background: "linear-gradient(135deg, #dc2626, #b91c1c)",
            color: "white",
            textDecoration: "none",
            padding: "14px 32px",
            borderRadius: 10,
            fontWeight: 700,
            fontSize: 16,
            transition: "all 0.3s",
            display: "inline-block",
          }}>
            14 Gün Pulsuz Başla →
          </Link>
          <Link href="#xususiyyetler" style={{
            background: "transparent",
            color: "#d4af37",
            textDecoration: "none",
            padding: "14px 32px",
            borderRadius: 10,
            fontWeight: 600,
            fontSize: 16,
            border: "1px solid rgba(212,175,55,0.4)",
            display: "inline-block",
          }}>
            Necə işləyir?
          </Link>
        </div>
      </motion.div>

      {/* Floating cards preview */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ marginTop: 72, display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap" }}
      >
        {[
          { icon: "🔮", label: "Tarot Fal" },
          { icon: "🌙", label: "Yuxu Yozma" },
          { icon: "⭐", label: "Bürc" },
          { icon: "🔢", label: "Numerologiya" },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, delay: i * 0.4, repeat: Infinity }}
            style={{
              background: "#111",
              border: "1px solid #222",
              borderRadius: 16,
              padding: "20px 28px",
              textAlign: "center",
              minWidth: 130,
            }}
          >
            <div style={{ fontSize: 36, marginBottom: 8 }}>{item.icon}</div>
            <div style={{ fontSize: 13, color: "#888", fontWeight: 500 }}>{item.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
