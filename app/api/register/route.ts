import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { email, password, name } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ error: "Email və şifrə tələb olunur" }, { status: 400 });
    }

    const { data: existing } = await supabase
      .from("users")
      .select("id")
      .eq("email", email)
      .single();

    if (existing) {
      return NextResponse.json({ error: "Bu email artıq qeydiyyatdan keçib" }, { status: 409 });
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const trialEnd = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString();

    const { data: user, error } = await supabase
      .from("users")
      .insert({ email, name, password_hash: passwordHash })
      .select("id")
      .single();

    if (error || !user) {
      return NextResponse.json({ error: "Qeydiyyat xətası" }, { status: 500 });
    }

    await supabase
      .from("subscriptions")
      .insert({ user_id: user.id, status: "trialing", trial_end: trialEnd });

    return NextResponse.json({ success: true, userId: user.id });
  } catch {
    return NextResponse.json({ error: "Server xətası" }, { status: 500 });
  }
}
