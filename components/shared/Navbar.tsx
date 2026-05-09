"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ position: "relative", zIndex: 50, borderBottom: "1px solid #1a1a1a" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: "#d4af37" }}>
            ✦ Mistik
          </span>
        </Link>

        {/* Desktop links */}
        <div className="nav-links" style={{ gap: 24, alignItems: "center" }}>
          <Link href="/qiymetler" style={{ color: "#888", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>Qiymətlər</Link>
          <Link href="/giris" style={{ color: "#f5f5f5", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>Giriş</Link>
          <Link href="/qeydiyyat" style={{ textDecoration: "none", padding: "8px 20px", borderRadius: 8, fontSize: 14, fontWeight: 700, background: "linear-gradient(135deg, #d4af37, #b8962e)", color: "#0a0a0a", display: "inline-block" }}>
            Pulsuz Başla
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer", flexDirection: "column", gap: 5, padding: 4 }}
          aria-label="Menyu"
        >
          <span style={{ display: "block", width: 22, height: 2, background: open ? "#d4af37" : "#f5f5f5", transition: "all 0.3s", transform: open ? "translateY(7px) rotate(45deg)" : "none" }} />
          <span style={{ display: "block", width: 22, height: 2, background: "#f5f5f5", transition: "all 0.3s", opacity: open ? 0 : 1 }} />
          <span style={{ display: "block", width: 22, height: 2, background: open ? "#d4af37" : "#f5f5f5", transition: "all 0.3s", transform: open ? "translateY(-7px) rotate(-45deg)" : "none" }} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`nav-mobile-menu${open ? " open" : ""}`}
        style={{ flexDirection: "column", background: "#111", borderTop: "1px solid #1a1a1a", padding: "20px 24px", gap: 16 }}
      >
        <Link href="/qiymetler" onClick={() => setOpen(false)} style={{ color: "#888", textDecoration: "none", fontSize: 16, fontWeight: 500, padding: "8px 0" }}>Qiymətlər</Link>
        <Link href="/giris" onClick={() => setOpen(false)} style={{ color: "#f5f5f5", textDecoration: "none", fontSize: 16, fontWeight: 500, padding: "8px 0" }}>Giriş</Link>
        <Link href="/qeydiyyat" onClick={() => setOpen(false)} style={{ textDecoration: "none", padding: "12px 0", borderRadius: 8, fontSize: 15, fontWeight: 700, background: "linear-gradient(135deg, #d4af37, #b8962e)", color: "#0a0a0a", display: "block", textAlign: "center" }}>
          Pulsuz Başla
        </Link>
      </div>
    </nav>
  );
}
