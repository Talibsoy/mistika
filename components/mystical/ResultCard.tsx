"use client";
import { motion } from "framer-motion";

interface Props {
  result: string;
  loading?: boolean;
}

export default function ResultCard({ result, loading }: Props) {
  if (!result && !loading) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        background: "#111",
        border: "1px solid rgba(212,175,55,0.3)",
        borderRadius: 16,
        padding: 28,
        marginTop: 24,
        boxShadow: "0 0 30px rgba(212,175,55,0.05)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
        <span style={{ color: "#d4af37", fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" }}>
          ✦ Mistik Yorum
        </span>
        {loading && (
          <div style={{
            width: 14, height: 14,
            border: "2px solid #d4af37",
            borderTopColor: "transparent",
            borderRadius: "50%",
            animation: "spin 0.8s linear infinite",
          }} />
        )}
      </div>

      {result ? (
        <div style={{ color: "#ddd", lineHeight: 1.85, fontSize: 15, whiteSpace: "pre-wrap" }}>
          {result}
          {loading && <span style={{ color: "#d4af37", animation: "blink 1s step-end infinite" }}>▋</span>}
        </div>
      ) : (
        <div style={{ color: "#888", fontSize: 14 }}>Kainat cavab hazırlayır...</div>
      )}

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
    </motion.div>
  );
}
