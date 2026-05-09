"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type Reading = {
  id: string;
  type: string;
  input: string;
  result: string;
  createdAt: string;
};

const typeMap: Record<string, { icon: string; label: string; color: string }> = {
  tarot:        { icon: "🔮", label: "Tarot Fal",   color: "#dc2626" },
  yuxu:         { icon: "🌙", label: "Yuxu Yozma",  color: "#7c3aed" },
  burc:         { icon: "⭐", label: "Bürc",          color: "#d4af37" },
  numerologiya: { icon: "🔢", label: "Numerologiya", color: "#0891b2" },
};

function relativeTime(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  if (mins < 2) return "İndicə";
  if (mins < 60) return `${mins} dəqiqə əvvəl`;
  if (hours < 24) return `${hours} saat əvvəl`;
  if (days === 1) return "Dünən";
  return `${days} gün əvvəl`;
}

export default function RecentReadings({ readings }: { readings: Reading[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <AnimatePresence>
        {readings.map((r, i) => {
          const meta = typeMap[r.type] ?? { icon: "✦", label: r.type, color: "#d4af37" };
          return (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
            >
              <Link href={`/${r.type}`} style={{ textDecoration: "none", display: "block" }}>
                <motion.div
                  whileHover={{ borderColor: meta.color, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    background: "#111",
                    border: "1px solid #1e1e1e",
                    borderRadius: 14,
                    padding: "16px 20px",
                    display: "flex", alignItems: "center", gap: 16,
                  }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%", flexShrink: 0,
                    background: `${meta.color}15`,
                    border: `1px solid ${meta.color}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 20,
                  }}>
                    {meta.icon}
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <span style={{ fontSize: 12, color: meta.color, fontWeight: 600 }}>{meta.label}</span>
                      <span style={{ fontSize: 11, color: "#444" }}>·</span>
                      <span style={{ fontSize: 11, color: "#444" }}>{relativeTime(r.createdAt)}</span>
                    </div>
                    <p style={{
                      color: "#777", fontSize: 13, lineHeight: 1.5,
                      overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                    }}>
                      {r.result.slice(0, 80)}...
                    </p>
                  </div>

                  <div style={{ color: "#333", fontSize: 16, flexShrink: 0 }}>›</div>
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
