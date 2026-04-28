import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mistik — Tarot, Yuxu, Bürc & Numerologiya",
  description: "Azərbaycan dilində tarot fal, yuxu yozma, bürc proqnozu və numerologiya platforması.",
  keywords: "tarot, yuxu yozma, bürc, numerologiya, fal, astrologiya, azerbaycan",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="az" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full">
        {children}
      </body>
    </html>
  );
}
