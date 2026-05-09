"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const TRIAL_DAYS = 14;

export default function TrialBanner({ trialDaysLeft }: { trialDaysLeft: number }) {
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(1, trialDaysLeft / TRIAL_DAYS);
  const dashOffset = circumference * (1 - progress);

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      style={{
        background: "rgba(212,175,55,0.05)",
        border: "1px solid rgba(212,175,55,0.2)",
        borderRadius: 14,
        padding: "16px 20px",
        marginBottom: 28,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: 16, flexWrap: "wrap",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        {/* SVG progress ring */}
        <svg width={52} height={52} style={{ flexShrink: 0 }}>
          <circle cx={26} cy={26} r={radius} fill="none" stroke="#1a1a1a" strokeWidth={3} />
          <circle
            cx={26} cy={26} r={radius}
            fill="none"
            stroke="#d4af37"
            strokeWidth={3}
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
            transform="rotate(-90 26 26)"
            style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
          />
          <text x={26} y={31} textAnchor="middle" fill="#d4af37" fontSize={13} fontWeight={700}>
            {trialDaysLeft}
          </text>
        </svg>

        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#f5f5f5", marginBottom: 2 }}>
            Trial dövrü davam edir
          </div>
          <div style={{ fontSize: 12, color: "#666" }}>
            <span style={{ color: "#d4af37", fontWeight: 700 }}>{trialDaysLeft} gün</span> qalıb — bütün xidmətlər pulsuzdur
          </div>
        </div>
      </div>

      <Link href="/qiymetler" style={{ textDecoration: "none" }}>
        <div style={{
          background: "linear-gradient(135deg, #d4af37, #b8962e)",
          color: "#0a0a0a", fontWeight: 700, fontSize: 13,
          padding: "8px 18px", borderRadius: 8, whiteSpace: "nowrap",
        }}>
          Planı Yüksəlt →
        </div>
      </Link>
    </motion.div>
  );
}
