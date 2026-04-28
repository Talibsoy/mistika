"use client";
import { motion } from "framer-motion";

const features = [
  {
    icon: "🔮",
    title: "Tarot Fal",
    desc: "78 kartlı tam tarot dəsti. Keçmiş, indiki və gələcəyini 3 kart ilə kəşf et. Dərin, mistik yorumlar.",
  },
  {
    icon: "🌙",
    title: "Yuxu Yozma",
    desc: "Yuxunun simvolik, psixoloji və mistik mənasını öyrən. Şüuraltının sənə nə söylədiyini anla.",
  },
  {
    icon: "⭐",
    title: "Bürc Proqnozu",
    desc: "12 bürc üçün gündəlik, həftəlik və aylıq proqnozlar. Sevgi, karyera, sağlamlıq.",
  },
  {
    icon: "🔢",
    title: "Numerologiya",
    desc: "Adın və doğum tarixinə əsasən həyat yolu nömrəni kəşf et. Taleyini rəqəmlərlə oxu.",
  },
  {
    icon: "📖",
    title: "Oxuma Tarixi",
    desc: "Bütün falların, yuxuların və proqnozların tarixi saxlanılır. İstədiyin vaxt bax.",
  },
  {
    icon: "🛡️",
    title: "30 Gün Zəmanət",
    desc: "Məmnun qalmasan, 30 gün ərzində pul geri qaytarılır. Heç bir sual verilmədən.",
  },
];

export default function Features() {
  return (
    <section id="xususiyyetler" style={{ position: "relative", zIndex: 1, padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#f5f5f5", marginBottom: 16 }}>
          Nə Təklif Edirik?
        </h2>
        <div style={{ height: 2, background: "linear-gradient(90deg, transparent, #d4af37, transparent)", maxWidth: 200, margin: "0 auto" }} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            style={{
              background: "#111",
              border: "1px solid #222",
              borderRadius: 16,
              padding: 28,
              transition: "all 0.3s",
              cursor: "default",
            }}
            whileHover={{ borderColor: "#d4af37", boxShadow: "0 0 20px rgba(212,175,55,0.1)" }}
          >
            <div style={{ fontSize: 40, marginBottom: 16 }}>{f.icon}</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 600, color: "#f5f5f5", marginBottom: 10 }}>
              {f.title}
            </h3>
            <p style={{ color: "#888", lineHeight: 1.7, fontSize: 14 }}>{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
