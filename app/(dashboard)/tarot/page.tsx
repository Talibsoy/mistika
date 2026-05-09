"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TAROT_CARDS } from "@/lib/gemini-data";
import ResultCard from "@/components/mystical/ResultCard";

const positions = ["Keçmiş", "İndiki", "Gələcək"];

export default function TarotPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [sual, setSual] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [shuffled] = useState(() =>
    [...TAROT_CARDS].sort(() => Math.random() - 0.5).slice(0, 12)
  );

  function handleMouseEnter(name: string) {
    clearTimeout(hideTimer.current);
    setHoveredCard(name);
  }

  function handleMouseLeave() {
    hideTimer.current = setTimeout(() => setHoveredCard(null), 220);
  }

  function toggleCard(name: string) {
    if (selected.includes(name)) {
      setSelected(selected.filter(c => c !== name));
    } else if (selected.length < 3) {
      setSelected([...selected, name]);
    }
  }

  async function handleSubmit() {
    if (selected.length !== 3) return;
    setLoading(true);
    setResult("");
    const res = await fetch("/api/gemini/tarot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cards: selected, sual }),
    });
    const data = await res.json();
    setResult(data.result || data.error || "Xəta baş verdi");
    setLoading(false);
  }

  const hoveredData = shuffled.find(c => c.name === hoveredCard);

  return (
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(22px, 5vw, 32px)", fontWeight: 700, color: "#f5f5f5", marginBottom: 8 }}>
        🔮 Tarot Fal
      </h1>
      <p style={{ color: "#888", marginBottom: 32 }}>Aşağıdan 3 kart seç — Keçmiş, İndiki, Gələcək üçün</p>

      {/* Selected cards display */}
      <div style={{ display: "flex", gap: 16, marginBottom: 24, flexWrap: "wrap" }}>
        {positions.map((pos, i) => (
          <div key={pos} style={{
            flex: 1, minWidth: 140, background: "#111",
            border: `1px solid ${selected[i] ? "#d4af37" : "#222"}`,
            borderRadius: 12, padding: "16px 12px", textAlign: "center",
            transition: "border-color 0.3s",
          }}>
            <div style={{ color: "#555", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>{pos}</div>
            <div style={{ color: selected[i] ? "#d4af37" : "#333", fontSize: 13, fontWeight: 600 }}>
              {selected[i] || "—"}
            </div>
          </div>
        ))}
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {hoveredData && (
          <motion.div
            key={hoveredData.name}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            style={{
              background: "#161616",
              border: "1px solid rgba(212,175,55,0.3)",
              borderRadius: 12,
              padding: "14px 18px",
              marginBottom: 16,
              display: "flex", alignItems: "flex-start", gap: 12,
            }}
          >
            <div style={{ fontSize: 20, flexShrink: 0, marginTop: 1 }}>✦</div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 14, fontWeight: 700, color: "#d4af37", marginBottom: 4 }}>
                {hoveredData.name}
              </div>
              <div style={{ fontSize: 13, color: "#999", lineHeight: 1.6 }}>
                {hoveredData.meaning}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: 12, marginBottom: 28 }}>
        {shuffled.map((card) => {
          const isSelected = selected.includes(card.name);
          const idx = selected.indexOf(card.name);
          return (
            <motion.button
              key={card.name}
              onClick={() => toggleCard(card.name)}
              onMouseEnter={() => handleMouseEnter(card.name)}
              onMouseLeave={handleMouseLeave}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: isSelected ? "rgba(212,175,55,0.12)" : "#111",
                border: `1px solid ${isSelected ? "#d4af37" : "#222"}`,
                borderRadius: 12,
                padding: "14px 8px",
                cursor: "pointer",
                color: isSelected ? "#d4af37" : "#888",
                fontSize: 12,
                fontWeight: isSelected ? 700 : 400,
                textAlign: "center",
                position: "relative",
                transition: "all 0.2s",
              }}
            >
              {isSelected && (
                <div style={{
                  position: "absolute", top: 6, right: 8,
                  width: 18, height: 18, borderRadius: "50%",
                  background: "#d4af37", color: "#0a0a0a",
                  fontSize: 10, fontWeight: 900,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {idx + 1}
                </div>
              )}
              <div style={{ fontSize: 24, marginBottom: 6 }}>🃏</div>
              {card.name}
            </motion.button>
          );
        })}
      </div>

      {/* Optional question */}
      <div style={{ marginBottom: 20 }}>
        <label style={{ color: "#888", fontSize: 13, marginBottom: 8, display: "block" }}>Sualın var? (istəyə bağlı)</label>
        <textarea
          value={sual}
          onChange={e => setSual(e.target.value)}
          rows={2}
          placeholder="Məsələn: Karyeramdaki vəziyyəti haqqında..."
          style={{ width: "100%", background: "#111", border: "1px solid #222", borderRadius: 10, padding: "12px 16px", color: "#f5f5f5", fontSize: 14, resize: "vertical", outline: "none", boxSizing: "border-box" }}
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={selected.length !== 3 || loading}
        style={{
          background: selected.length === 3 ? "linear-gradient(135deg, #dc2626, #b91c1c)" : "#222",
          color: selected.length === 3 ? "white" : "#555",
          border: "none", padding: "13px 32px", borderRadius: 10,
          fontWeight: 700, fontSize: 15, cursor: selected.length === 3 ? "pointer" : "not-allowed", transition: "all 0.3s",
        }}
      >
        {selected.length === 3 ? "Yorum Al →" : `${3 - selected.length} kart daha seç`}
      </button>

      <ResultCard result={result} loading={loading} />
    </div>
  );
}
