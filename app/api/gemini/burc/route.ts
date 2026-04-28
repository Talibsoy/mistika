import { NextRequest, NextResponse } from "next/server";
import { getGeminiModel, PROMPTS } from "@/lib/gemini";

export async function POST(req: NextRequest) {
  const { burc, dovr } = await req.json();
  if (!burc || !dovr) return NextResponse.json({ error: "Bürc və dövr tələb olunur" }, { status: 400 });

  try {
    const model = getGeminiModel();
    const result = await model.generateContent(PROMPTS.burc(burc, dovr));
    const text = result.response.text();
    return NextResponse.json({ result: text });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Gemini xətası" }, { status: 500 });
  }
}
