import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import BookingProvider from "@/components/BookingProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import YandexMetrica from "@/components/YandexMetrica";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "По Барабану — Школа барабанов | Уроки для детей и взрослых",
  description:
    "Научим играть на барабанах с нуля. Индивидуальные занятия для детей и взрослых. Пробный урок — 500 ₽. Караимская 21.",
  keywords: [
    "школа барабанов",
    "уроки барабанов",
    "преподаватель барабанов",
    "обучение барабанам",
    "пробный урок барабаны",
  ],
  openGraph: {
    title: "По Барабану — Школа барабанов",
    description:
      "Научим играть на барабанах с нуля. Для детей и взрослых. Пробный урок — 500 ₽.",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-screen">
        <Suspense fallback={null}>
          <YandexMetrica />
        </Suspense>
        <BookingProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </BookingProvider>
      </body>
    </html>
  );
}
