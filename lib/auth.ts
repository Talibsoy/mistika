import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { supabaseAdmin as supabase } from "./supabase";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Şifrə", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const { data: user } = await supabase
          .from("users")
          .select("id, email, name, password_hash")
          .eq("email", credentials.email as string)
          .single();

        if (!user || !user.password_hash) return null;

        const valid = await bcrypt.compare(credentials.password as string, user.password_hash);
        if (!valid) return null;

        return { id: user.id, email: user.email, name: user.name };
      },
    }),
  ],
  session: { strategy: "jwt", maxAge: 365 * 24 * 60 * 60 },
  pages: { signIn: "/giris" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    async session({ session, token }) {
      if (token.id) session.user.id = token.id as string;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
