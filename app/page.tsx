import Navbar from "@/components/shared/Navbar";
import StarField from "@/components/mystical/StarField";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Pricing from "@/components/landing/Pricing";
import Testimonials from "@/components/landing/Testimonials";
import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a" }}>
      <StarField />
      <Navbar />

      <main>
        <Hero />

        {/* Divider */}
        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #222, transparent)", maxWidth: 800, margin: "0 auto" }} />

        <Features />

        {/* How it works */}
        <section style={{ position: "relative", zIndex: 1, padding: "80px 24px", textAlign: "center", background: "rgba(17,17,17,0.5)" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#f5f5f5", marginBottom: 16 }}>
            Necə İşləyir?
          </h2>
          <div style={{ height: 2, background: "linear-gradient(90deg, transparent, #d4af37, transparent)", maxWidth: 200, margin: "0 auto 56px" }} />

          <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap", maxWidth: 900, margin: "0 auto" }}>
            {[
              { step: "01", title: "Qeydiyyatdan keç", desc: "30 saniyədə hesab yarat. Kredit kartı lazım deyil." },
              { step: "02", title: "Bölməni seç", desc: "Tarot, yuxu, bürc və ya numerologiya — istədiyini seç." },
              { step: "03", title: "Cavabı al", desc: "Gemini AI dərin, Azərbaycan dilində yorum hazırlayır." },
            ].map((s) => (
              <div key={s.step} style={{ maxWidth: 260 }}>
                <div style={{ fontSize: 40, fontWeight: 900, color: "rgba(212,175,55,0.2)", fontFamily: "'Playfair Display', serif", marginBottom: 12 }}>{s.step}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#f5f5f5", marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: "#888", fontSize: 14, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <Testimonials />
        <Pricing />

        {/* Footer */}
        <footer style={{ position: "relative", zIndex: 1, borderTop: "1px solid #222", padding: "40px 24px", textAlign: "center" }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#d4af37", marginBottom: 16 }}>✦ Mistik</div>
          <div style={{ display: "flex", justifyContent: "center", gap: 24, marginBottom: 24, flexWrap: "wrap" }}>
            {[
              { href: "/qiymetler", label: "Qiymətlər" },
              { href: "/giris", label: "Giriş" },
              { href: "/qeydiyyat", label: "Qeydiyyat" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ color: "#555", textDecoration: "none", fontSize: 14, transition: "color 0.2s" }}>
                {l.label}
              </Link>
            ))}
          </div>
          <p style={{ color: "#333", fontSize: 13 }}>© 2025 Mistik. Bütün hüquqlar qorunur.</p>
        </footer>
      </main>
    </div>
  );
}
