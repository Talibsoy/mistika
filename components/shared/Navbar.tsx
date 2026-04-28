"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ position: "relative", zIndex: 50, borderBottom: "1px solid #1a1a1a" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: "#d4af37" }}>
            ✦ Mistik
          </span>
        </Link>

        {/* Nav links */}
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <Link href="/qiymetler" style={{ color: "#888", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>
            Qiymətlər
          </Link>
          <Link href="/giris" style={{ color: "#f5f5f5", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>
            Giriş
          </Link>
          <Link href="/qeydiyyat" style={{
            textDecoration: "none",
            padding: "8px 20px",
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 700,
            background: "linear-gradient(135deg, #d4af37, #b8962e)",
            color: "#0a0a0a",
            display: "inline-block",
          }}>
            Pulsuz Başla
          </Link>
        </div>
      </div>
    </nav>
  );
}
