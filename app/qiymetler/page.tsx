import Link from "next/link";
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

export default function QiymetlerPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", padding: "80px 24px" }}>
      <div style={{ maxWidth: 500, margin: "0 auto", textAlign: "center" }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#d4af37" }}>✦ Mistik</span>
        </Link>

        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, color: "#f5f5f5", margin: "24px 0 12px" }}>
          Sadə, Şəffaf Qiymət
        </h1>
        <p style={{ color: "#888", marginBottom: 48, fontSize: 16 }}>14 gün pulsuz. Kredit kartı tələb olunmur.</p>

        <div style={{ background: "#111", border: "1px solid #d4af37", borderRadius: 24, padding: "44px 36px", boxShadow: "0 0 50px rgba(212,175,55,0.1)", position: "relative" }}>
          <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg, #d4af37, #b8962e)", color: "#0a0a0a", padding: "4px 24px", borderRadius: 20, fontSize: 12, fontWeight: 700, whiteSpace: "nowrap" }}>
            ✦ YEGANƏ PLAN
          </div>

          <div style={{ fontSize: 14, color: "#888", marginBottom: 8 }}>Premium Aylıq</div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", gap: 4, marginBottom: 6 }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 60, fontWeight: 700, color: "#d4af37", lineHeight: 1 }}>₼19</span>
            <span style={{ color: "#888", paddingBottom: 10 }}>/ay</span>
          </div>
          <p style={{ color: "#d4af37", fontSize: 14, marginBottom: 36 }}>İlk 14 gün pulsuz · Sonra aylıq ₼19</p>

          <div style={{ textAlign: "left", display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
            {perks.map(p => (
              <div key={p} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Check size={16} color="#d4af37" style={{ flexShrink: 0 }} />
                <span style={{ color: "#ccc", fontSize: 14 }}>{p}</span>
              </div>
            ))}
          </div>

          <Link href="/qeydiyyat" style={{ display: "block", background: "linear-gradient(135deg, #dc2626, #b91c1c)", color: "white", textDecoration: "none", padding: "15px 0", borderRadius: 10, fontWeight: 700, fontSize: 16, textAlign: "center" }}>
            14 Gün Pulsuz Başla →
          </Link>

          <p style={{ color: "#444", fontSize: 12, marginTop: 16 }}>
            ✓ Kredit kartı lazım deyil &nbsp;·&nbsp; ✓ İstənilən vaxt ləğv et &nbsp;·&nbsp; ✓ 30 gün pul geri
          </p>
        </div>

        <Link href="/" style={{ display: "block", marginTop: 32, color: "#555", textDecoration: "none", fontSize: 14 }}>
          ← Ana səhifəyə qayıt
        </Link>
      </div>
    </div>
  );
}
