import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getGeminiModel, PROMPTS } from "@/lib/gemini";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Giriş tələb olunur" }, { status: 401 });
  }

  const { cards, sual } = await req.json();
  if (!cards || cards.length !== 3) return NextResponse.json({ error: "3 kart seçilməlidir" }, { status: 400 });

  try {
    const model = getGeminiModel();
    const result = await model.generateContent(PROMPTS.tarot(cards, sual));
    const text = result.response.text();
    return NextResponse.json({ result: text });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Gemini xətası" }, { status: 500 });
  }
}
