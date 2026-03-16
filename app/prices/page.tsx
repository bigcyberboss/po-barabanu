import type { Metadata } from "next";
import PricesPage from "@/components/PricesPage";
import fs from "fs/promises";
import path from "path";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Цены - По Барабану | Школа барабанов",
  description: "Стоимость уроков игры на барабанах. Пробный урок - 500 ₽, индивидуальное занятие - 1 300 ₽/час.",
};

async function getPrices() {
  const filePath = path.join(process.cwd(), "data", "prices.json");
  const content = await fs.readFile(filePath, "utf-8");
  return JSON.parse(content);
}

export default async function Page() {
  const prices = await getPrices();
  return <PricesPage prices={prices} />;
}
