"use client";
import { motion } from "framer-motion";

const reviews = [
  { name: "Aynur M.", city: "Bakı", text: "Tarot yorumu o qədər dəqiq idi ki, inanmadım. Həftədir hər gün girirəm!", rating: 5 },
  { name: "Rauf Ə.", city: "Gəncə", text: "Yuxu yozması məni şoka saldı. O yuxunun nə demək olduğunu heç düşünməmişdim.", rating: 5 },
  { name: "Sevinc H.", city: "Sumqayıt", text: "Bürc proqnozu tamamilə Azərbaycan dilindədir, çox əla! Maaşım da artdı 😄", rating: 5 },
  { name: "Elnur B.", city: "Lənkəran", text: "Numerologiya bölməsi həyatım haqqında çox doğru şeylər söylədi. Tövsiyə edirəm.", rating: 5 },
  { name: "Günel T.", city: "Bakı", text: "14 gün pulsuz denəyib abunə oldum. Çox sərfəlidir!", rating: 5 },
  { name: "Kənan N.", city: "Mingəçevir", text: "Hər bölmə çox peşəkar hazırlanıb. Dil azərbaycan olduğuna görə daha yaxşı başa düşürəm.", rating: 5 },
];

export default function Testimonials() {
  return (
    <section style={{ position: "relative", zIndex: 1, padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#f5f5f5", marginBottom: 16 }}>
          İstifadəçilər Nə Deyir?
        </h2>
        <div style={{ height: 2, background: "linear-gradient(90deg, transparent, #d4af37, transparent)", maxWidth: 200, margin: "0 auto" }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            viewport={{ once: true }}
            style={{ background: "#111", border: "1px solid #222", borderRadius: 16, padding: 24 }}
          >
            <div style={{ color: "#d4af37", fontSize: 16, marginBottom: 12 }}>{"★".repeat(r.rating)}</div>
            <p style={{ color: "#ccc", fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>"{r.text}"</p>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #dc2626, #d4af37)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: 14 }}>
                {r.name[0]}
              </div>
              <div>
                <div style={{ color: "#f5f5f5", fontSize: 14, fontWeight: 600 }}>{r.name}</div>
                <div style={{ color: "#555", fontSize: 12 }}>{r.city}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
