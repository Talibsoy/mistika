import { NextRequest, NextResponse } from "next/server";
import { getGeminiModel, PROMPTS } from "@/lib/gemini";

export async function POST(req: NextRequest) {
  const { yuxu } = await req.json();
  if (!yuxu) return NextResponse.json({ error: "Yuxu məzmunu tələb olunur" }, { status: 400 });

  try {
    const model = getGeminiModel();
    const result = await model.generateContent(PROMPTS.yuxu(yuxu));
    const text = result.response.text();
    return NextResponse.json({ result: text });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Gemini xətası" }, { status: 500 });
  }
}
