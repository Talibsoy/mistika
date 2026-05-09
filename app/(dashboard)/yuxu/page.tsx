"use client";
import { useState } from "react";
import ResultCard from "@/components/mystical/ResultCard";

export default function YuxuPage() {
  const [yuxu, setYuxu] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!yuxu.trim()) return;
    setLoading(true);
    setResult("");

    const res = await fetch("/api/gemini/yuxu", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ yuxu }),
    });
    const data = await res.json();
    setResult(data.result || data.error || "Xəta baş verdi");
    setLoading(false);
  }

  return (
    <div style={{ maxWidth: 700, margin: "0 auto" }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(22px, 5vw, 32px)", fontWeight: 700, color: "#f5f5f5", marginBottom: 8 }}>🌙 Yuxu Yozma</h1>
      <p style={{ color: "#888", marginBottom: 32 }}>Gördüyün yuxunu ətraflı şəkildə yaz, dərin mistik analiz al</p>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 20 }}>
          <label style={{ color: "#d4af37", fontSize: 13, fontWeight: 600, marginBottom: 10, display: "block" }}>Yuxunu burada anlat</label>
          <textarea
            value={yuxu}
            onChange={e => setYuxu(e.target.value)}
            rows={7}
            placeholder="Məsələn: Bir meşədə gəzirdim, qarşımda böyük bir qızıl işıq gördüm. Birdən uçmağa başladım..."
            style={{ width: "100%", background: "#111", border: "1px solid #333", borderRadius: 12, padding: "16px 18px", color: "#f5f5f5", fontSize: 15, resize: "vertical", outline: "none", lineHeight: 1.7, boxSizing: "border-box" }}
          />
          <div style={{ color: "#444", fontSize: 12, textAlign: "right", marginTop: 4 }}>{yuxu.length} simvol</div>
        </div>

        <button type="submit" disabled={!yuxu.trim() || loading}
          style={{ background: yuxu.trim() ? "linear-gradient(135deg, #dc2626, #b91c1c)" : "#222", color: yuxu.trim() ? "white" : "#555", border: "none", padding: "13px 32px", borderRadius: 10, fontWeight: 700, fontSize: 15, cursor: yuxu.trim() ? "pointer" : "not-allowed", transition: "all 0.3s" }}>
          {loading ? "Yozulur..." : "Yuxumu Yoz →"}
        </button>
      </form>

      <ResultCard result={result} loading={loading} />
    </div>
  );
}
