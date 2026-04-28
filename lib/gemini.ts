import { GoogleGenerativeAI } from "@google/generative-ai";

export function getGeminiModel() {
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY!);
  return genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
}

export const PROMPTS = {
  tarot: (cards: string[], sual?: string) => `Sən Azərbaycan dilli tarot ustasisən. Aşağıdakı 3 kartı qısa və mistik şəkildə yoz:
Keçmiş: ${cards[0]} | İndiki: ${cards[1]} | Gələcək: ${cards[2]}
${sual ? `Sual: "${sual}"` : ""}
Hər kart üçün 2-3 cümlə, sonra ümumi mesaj. Azərbaycan dilində yaz.`,

  yuxu: (yuxu: string) => `Sən Azərbaycan dilli yuxu yozma mütəxəssisisən. Bu yuxunu yoz:
"${yuxu}"
Simvolik məna, psixoloji şərh və praktiki tövsiyə ver. Azərbaycan dilində, qısa və aydın yaz.`,

  burc: (burc: string, dovr: string) => `Sən Azərbaycan dilli astroloqsan. ${burc} bürcü üçün ${dovr} proqnozu yaz.
Sevgi, karyera, sağlamlıq sahələrini əhatə et. Mistik və ilham verici şəkildə, Azərbaycan dilində.`,

  numerologiya: (ad: string, tarix: string, heyatYolu: number) => `Sən Azərbaycan dilli numerologiya mütəxəssisisən.
Ad: ${ad} | Doğum tarixi: ${tarix} | Həyat yolu nömrəsi: ${heyatYolu}
Bu nömrənin mənasını, güclü/zəif tərəflərini, karyera və sevgi proqnozunu yaz. Azərbaycan dilində.`,
};
