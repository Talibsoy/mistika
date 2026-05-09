"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ZODIAC_SIGNS } from "@/lib/gemini-data";
import ResultCard from "@/components/mystical/ResultCard";

const PERIODS = [
  { value: "gündəlik", label: "Gündəlik" },
  { value: "həftəlik", label: "Həftəlik" },
  { value: "aylıq", label: "Aylıq" },
];

export default function BurcPage() {
  const [burc, setBurc] = useState("");
  const [dovr, setDovr] = useState("gündəlik");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (!burc) return;
    setLoading(true);
    setResult("");

    const res = await fetch("/api/gemini/burc", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ burc, dovr }),
    });

    const data = await res.json();
    setResult(data.result || data.error || "Xəta baş verdi");
    setLoading(false);
  }

  return (
    <div style={{ maxWidth: 700, margin: "0 auto" }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(22px, 5vw, 32px)", fontWeight: 700, color: "#f5f5f5", marginBottom: 8 }}>⭐ Bürc Proqnozu</h1>
      <p style={{ color: "#888", marginBottom: 32 }}>Bürcünü seç, dövrü müəyyənləşdir və ulduzların mesajını al</p>

      {/* Period tabs */}
      <div style={{ display: "flex", gap: 8, marginBottom: 28 }}>
        {PERIODS.map(p => (
          <button key={p.value} onClick={() => setDovr(p.value)}
            style={{ padding: "9px 20px", borderRadius: 8, border: `1px solid ${dovr === p.value ? "#d4af37" : "#222"}`, background: dovr === p.value ? "rgba(212,175,55,0.15)" : "#111", color: dovr === p.value ? "#d4af37" : "#888", cursor: "pointer", fontWeight: dovr === p.value ? 700 : 400, fontSize: 14, transition: "all 0.2s" }}>
            {p.label}
          </button>
        ))}
      </div>

      {/* Zodiac grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))", gap: 12, marginBottom: 28 }}>
        {ZODIAC_SIGNS.map((z) => {
          const active = burc === z.name;
          return (
            <motion.button key={z.name} onClick={() => setBurc(z.name)} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              style={{ background: active ? "rgba(212,175,55,0.15)" : "#111", border: `1px solid ${active ? "#d4af37" : "#222"}`, borderRadius: 12, padding: "14px 8px", cursor: "pointer", textAlign: "center", transition: "all 0.2s" }}>
              <div style={{ fontSize: 26, marginBottom: 4 }}>{z.emoji}</div>
              <div style={{ color: active ? "#d4af37" : "#888", fontSize: 13, fontWeight: active ? 700 : 400 }}>{z.name}</div>
              <div style={{ color: "#444", fontSize: 10, marginTop: 2 }}>{z.dates}</div>
            </motion.button>
          );
        })}
      </div>

      <button onClick={handleSubmit} disabled={!burc || loading}
        style={{ background: burc ? "linear-gradient(135deg, #dc2626, #b91c1c)" : "#222", color: burc ? "white" : "#555", border: "none", padding: "13px 32px", borderRadius: 10, fontWeight: 700, fontSize: 15, cursor: burc ? "pointer" : "not-allowed", transition: "all 0.3s" }}>
        {loading ? "Hazırlanır..." : burc ? `${burc} — ${dovr.charAt(0).toUpperCase() + dovr.slice(1)} Proqnoz →` : "Bürc seç"}
      </button>

      <ResultCard result={result} loading={loading} />
    </div>
  );
}
