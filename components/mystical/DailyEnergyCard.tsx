"use client";
import { motion } from "framer-motion";
import type { DailyEnergy } from "@/lib/gemini-data";

const elementColors: Record<string, string> = {
  Od: "#dc2626",
  Su: "#0891b2",
  Hava: "#7c3aed",
  Torpaq: "#16a34a",
};

export default function DailyEnergyCard({ energy }: { energy: DailyEnergy }) {
  const color = elementColors[energy.element] ?? "#d4af37";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      style={{
        background: "linear-gradient(135deg, #111 0%, #0d0d0d 100%)",
        border: "1px solid rgba(212,175,55,0.25)",
        borderRadius: 20,
        padding: "28px 32px",
        marginTop: 32,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Shimmer overlay */}
      <div style={{
        position: "absolute", inset: 0, borderRadius: 20, pointerEvents: "none",
        background: "linear-gradient(135deg, transparent 0%, rgba(212,175,55,0.03) 50%, transparent 100%)",
        backgroundSize: "200%",
        animation: "shimmer 4s infinite",
      }} />

      <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "flex-start", gap: 20, flexWrap: "wrap" }}>
        {/* Icon */}
        <div style={{
          width: 56, height: 56, borderRadius: "50%",
          border: `1px solid rgba(212,175,55,0.3)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 26, flexShrink: 0,
          animation: "float 4s ease-in-out infinite",
          background: "rgba(212,175,55,0.06)",
        }}>
          ✦
        </div>

        <div style={{ flex: 1, minWidth: 200 }}>
          <div style={{ fontSize: 11, color: "#555", letterSpacing: 3, textTransform: "uppercase", marginBottom: 6 }}>
            Günün Enerjisi
          </div>
          <div style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 20, fontWeight: 700, color: "#d4af37",
            textShadow: "0 0 16px rgba(212,175,55,0.3)",
            marginBottom: 8,
          }}>
            {energy.card}
          </div>
          <p style={{ color: "#aaa", fontSize: 14, lineHeight: 1.7, marginBottom: 12 }}>
            {energy.message}
          </p>

          {/* Element badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: `${color}18`,
            border: `1px solid ${color}40`,
            borderRadius: 20, padding: "4px 12px",
            fontSize: 12, color: color, fontWeight: 600,
          }}>
            {energy.emoji} {energy.element} Enerjisi
          </div>
        </div>
      </div>
    </motion.div>
  );
}
