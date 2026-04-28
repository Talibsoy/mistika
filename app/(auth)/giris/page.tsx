"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function GirisPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await signIn("credentials", { email, password, redirect: false });
    if (res?.error) {
      setError("Email və ya şifrə yanlışdır");
      setLoading(false);
    } else {
      router.push("/panel");
    }
  }

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ width: "100%", maxWidth: 400 }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: "#d4af37" }}>✦ Mistik</span>
          </Link>
          <p style={{ color: "#888", marginTop: 8, fontSize: 15 }}>Hesabına daxil ol</p>
        </div>

        <div style={{ background: "#111", border: "1px solid #222", borderRadius: 20, padding: "36px 32px" }}>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
              <label style={{ color: "#888", fontSize: 13, fontWeight: 500, display: "block", marginBottom: 8 }}>Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
                style={{ width: "100%", background: "#0a0a0a", border: "1px solid #333", borderRadius: 10, padding: "12px 16px", color: "#f5f5f5", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
            </div>
            <div>
              <label style={{ color: "#888", fontSize: 13, fontWeight: 500, display: "block", marginBottom: 8 }}>Şifrə</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} required
                style={{ width: "100%", background: "#0a0a0a", border: "1px solid #333", borderRadius: 10, padding: "12px 16px", color: "#f5f5f5", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
            </div>

            {error && <p style={{ color: "#ef4444", fontSize: 13, textAlign: "center" }}>{error}</p>}

            <button type="submit" disabled={loading}
              style={{ background: "linear-gradient(135deg, #dc2626, #b91c1c)", color: "white", border: "none", padding: "13px 0", borderRadius: 10, fontWeight: 700, fontSize: 15, cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1 }}>
              {loading ? "Giriş edilir..." : "Daxil ol"}
            </button>
          </form>

          <p style={{ color: "#555", fontSize: 13, textAlign: "center", marginTop: 24 }}>
            Hesabın yoxdur?{" "}
            <Link href="/qeydiyyat" style={{ color: "#d4af37", textDecoration: "none", fontWeight: 600 }}>Qeydiyyat</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
