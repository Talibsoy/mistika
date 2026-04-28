"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const perks = [
  "Limitsiz AI sorğu",
  "Tarot: 78 kart tam yayılım",
  "Yuxu: dərin psixoloji analiz",
  "Bürc: gündəlik + həftəlik + aylıq",
  "Numerologiya: tam həyat analizi",
  "Bütün oxumalar saxlanılır",
  "30 gün pul geri zəmanəti",
  "Prioritet müştəri dəstəyi",
];

export default function Pricing() {
  return (
    <section id="qiymétler" style={{ position: "relative", zIndex: 1, padding: "80px 24px", textAlign: "center" }}>
      <div style={{ marginBottom: 60 }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#f5f5f5", marginBottom: 16 }}>
          Sadə Qiymətlər
        </h2>
        <div style={{ height: 2, background: "linear-gradient(90deg, transparent, #d4af37, transparent)", maxWidth: 200, margin: "0 auto 16px" }} />
        <p style={{ color: "#888", fontSize: 16 }}>İlk 14 gün pulsuz. Kredit kartı tələb olunmur.</p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        style={{ maxWidth: 440, margin: "0 auto" }}
      >
        <div style={{
          background: "#111",
          border: "1px solid #d4af37",
          borderRadius: 24,
          padding: "40px 36px",
          position: "relative",
          boxShadow: "0 0 40px rgba(212,175,55,0.15)",
        }}>
          {/* Badge */}
          <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg, #d4af37, #b8962e)", color: "#0a0a0a", padding: "4px 20px", borderRadius: 20, fontSize: 12, fontWeight: 700, whiteSpace: "nowrap" }}>
            ✦ ƏN POPULYAR
          </div>

          <div style={{ marginBottom: 8, color: "#888", fontSize: 14, fontWeight: 500 }}>Premium Plan</div>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 4, marginBottom: 8 }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 52, fontWeight: 700, color: "#d4af37", lineHeight: 1 }}>₼19</span>
            <span style={{ color: "#888", marginBottom: 10 }}>/ay</span>
          </div>
          <p style={{ color: "#888", fontSize: 13, marginBottom: 32 }}>İlk 14 gün tamamilə pulsuz</p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 36, textAlign: "left" }}>
            {perks.map((p) => (
              <div key={p} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Check size={16} color="#d4af37" style={{ flexShrink: 0 }} />
                <span style={{ color: "#ccc", fontSize: 14 }}>{p}</span>
              </div>
            ))}
          </div>

          <Link href="/qeydiyyat" style={{
            display: "block",
            background: "linear-gradient(135deg, #dc2626, #b91c1c)",
            color: "white",
            textDecoration: "none",
            padding: "14px 0",
            borderRadius: 10,
            fontWeight: 700,
            fontSize: 16,
            textAlign: "center",
          }}>
            14 Gün Pulsuz Başla
          </Link>

          <p style={{ color: "#555", fontSize: 12, marginTop: 16 }}>
            ✓ Kredit kartı tələb olunmur &nbsp;·&nbsp; ✓ İstənilən vaxt ləğv et
          </p>
        </div>
      </motion.div>
    </section>
  );
}
