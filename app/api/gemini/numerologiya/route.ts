import { NextRequest, NextResponse } from "next/server";
import { getGeminiModel, PROMPTS } from "@/lib/gemini";
import { calcLifePathNumber } from "@/lib/gemini-data";

export async function POST(req: NextRequest) {
  const { ad, tarix } = await req.json();
  if (!ad || !tarix) return NextResponse.json({ error: "Ad və tarix tələb olunur" }, { status: 400 });

  try {
    const heyatYolu = calcLifePathNumber(tarix);
    const model = getGeminiModel();
    const result = await model.generateContent(PROMPTS.numerologiya(ad, tarix, heyatYolu));
    const text = result.response.text();
    return NextResponse.json({ result: text });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Gemini xətası" }, { status: 500 });
  }
}
