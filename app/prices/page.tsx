import type { Metadata } from "next";
import PricesPage from "@/components/PricesPage";

export const metadata: Metadata = {
  title: "Цены - По Барабану | Школа барабанов",
  description: "Стоимость уроков игры на барабанах. Пробный урок - 500 ₽, индивидуальное занятие - 1 300 ₽/час.",
};

export default function Page() {
  return <PricesPage />;
}
