export const TAROT_CARDS = [
  "Sehrli (The Magician)", "Yüksək Kahin (The High Priestess)", "İmperatriça (The Empress)",
  "İmperator (The Emperor)", "Baş Kahin (The Hierophant)", "Aşiqlər (The Lovers)",
  "Cəng Arabası (The Chariot)", "Güc (Strength)", "Zahid (The Hermit)",
  "Taleyüklü Çarx (Wheel of Fortune)", "Ədalət (Justice)", "Asılan Adam (The Hanged Man)",
  "Ölüm (Death)", "Mülayimlik (Temperance)", "Şeytan (The Devil)", "Qüllə (The Tower)",
  "Ulduz (The Star)", "Ay (The Moon)", "Günəş (The Sun)", "Mühakimə (Judgement)",
  "Dünya (The World)", "Məsumlar (The Fool)",
];

export const ZODIAC_SIGNS = [
  { name: "Qoç", emoji: "♈", dates: "21 mart – 19 aprel" },
  { name: "Buğa", emoji: "♉", dates: "20 aprel – 20 may" },
  { name: "Əkizlər", emoji: "♊", dates: "21 may – 20 iyun" },
  { name: "Xərçəng", emoji: "♋", dates: "21 iyun – 22 iyul" },
  { name: "Şir", emoji: "♌", dates: "23 iyul – 22 avqust" },
  { name: "Qız", emoji: "♍", dates: "23 avqust – 22 sentyabr" },
  { name: "Tərəzi", emoji: "♎", dates: "23 sentyabr – 22 oktyabr" },
  { name: "Əqrəb", emoji: "♏", dates: "23 oktyabr – 21 noyabr" },
  { name: "Oxatan", emoji: "♐", dates: "22 noyabr – 21 dekabr" },
  { name: "Oğlaq", emoji: "♑", dates: "22 dekabr – 19 yanvar" },
  { name: "Dolça", emoji: "♒", dates: "20 yanvar – 18 fevral" },
  { name: "Balıqlar", emoji: "♓", dates: "19 fevral – 20 mart" },
];

export function calcLifePathNumber(dateStr: string): number {
  const digits = dateStr.replace(/\D/g, "");
  let sum = digits.split("").reduce((a, b) => a + parseInt(b), 0);
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = sum.toString().split("").reduce((a, b) => a + parseInt(b), 0);
  }
  return sum;
}
