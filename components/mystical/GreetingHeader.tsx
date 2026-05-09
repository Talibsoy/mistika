"use client";
import { motion } from "framer-motion";

function getGreeting() {
  const h = new Date().getHours();
  if (h >= 5 && h < 12) return "Sabahınız xeyir";
  if (h >= 12 && h < 18) return "Günortanız xeyir";
  if (h >= 18 && h < 22) return "Axşamınız xeyir";
  return "Gecəniz xeyir";
}

export default function GreetingHeader({ name }: { name: string }) {
  const greeting = getGreeting();
  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div style={{ fontSize: 11, color: "#444", letterSpacing: 4, textTransform: "uppercase", marginBottom: 10 }}>
        ✦ Mistik Portal
      </div>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 5vw, 36px)", fontWeight: 700, color: "#f5f5f5", marginBottom: 8, lineHeight: 1.2 }}>
        {greeting},{" "}
        <span style={{ color: "#d4af37", textShadow: "0 0 24px rgba(212,175,55,0.5)" }}>
          {name}
        </span>
      </h1>
      <p style={{ color: "#555", fontSize: 14, letterSpacing: 0.3 }}>
        Kainat sizi gözləyir — hansı sirri kəşf edəcəksiniz?
      </p>
    </motion.div>
  );
}
