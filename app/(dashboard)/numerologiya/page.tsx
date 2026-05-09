"use client";
import { useState } from "react";
import { calcLifePathNumber } from "@/lib/gemini-data";
import ResultCard from "@/components/mystical/ResultCard";

export default function NumerologiyaPage() {
  const [ad, setAd] = useState("");
  const [tarix, setTarix] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const heyatYolu = tarix ? calcLifePathNumber(tarix) : null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!ad || !tarix) return;
    setLoading(true);
    setResult("");

    const res = await fetch("/api/gemini/numerologiya", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ad, tarix }),
    });

    const data = await res.json();
    setResult(data.result || data.error || "Xəta baş verdi");
    setLoading(false);
  }

  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(22px, 5vw, 32px)", fontWeight: 700, color: "#f5f5f5", marginBottom: 8 }}>🔢 Numerologiya</h1>
      <p style={{ color: "#888", marginBottom: 32 }}>Adın və doğum tarixinə əsasən həyat yolu nömrənizi kəşf et</p>

      <div style={{ background: "#111", border: "1px solid #222", borderRadius: 16, padding: 28, marginBottom: 20 }}>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div>
            <label style={{ color: "#888", fontSize: 13, fontWeight: 500, display: "block", marginBottom: 8 }}>Tam adın</label>
            <input type="text" value={ad} onChange={e => setAd(e.target.value)} required
              placeholder="Məsələn: Əli Əliyev"
              style={{ width: "100%", background: "#0a0a0a", border: "1px solid #333", borderRadius: 10, padding: "13px 16px", color: "#f5f5f5", fontSize: 15, outline: "none", boxSizing: "border-box" }} />
          </div>

          <div>
            <label style={{ color: "#888", fontSize: 13, fontWeight: 500, display: "block", marginBottom: 8 }}>Doğum tarixi</label>
            <input type="date" value={tarix} onChange={e => setTarix(e.target.value)} required
              style={{ width: "100%", background: "#0a0a0a", border: "1px solid #333", borderRadius: 10, padding: "13px 16px", color: "#f5f5f5", fontSize: 15, outline: "none", boxSizing: "border-box" }} />
          </div>

          {heyatYolu && (
            <div style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.3)", borderRadius: 12, padding: "16px 20px", textAlign: "center" }}>
              <div style={{ color: "#888", fontSize: 12, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>Həyat Yolu Nömrən</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 56, fontWeight: 700, color: "#d4af37", lineHeight: 1 }}>{heyatYolu}</div>
            </div>
          )}

          <button type="submit" disabled={!ad || !tarix || loading}
            style={{ background: ad && tarix ? "linear-gradient(135deg, #dc2626, #b91c1c)" : "#222", color: ad && tarix ? "white" : "#555", border: "none", padding: "13px 0", borderRadius: 10, fontWeight: 700, fontSize: 15, cursor: ad && tarix ? "pointer" : "not-allowed", transition: "all 0.3s" }}>
            {loading ? "Analiz edilir..." : "Həyat Yolumu Kəşf Et →"}
          </button>
        </form>
      </div>

      <ResultCard result={result} loading={loading} />
    </div>
  );
}
