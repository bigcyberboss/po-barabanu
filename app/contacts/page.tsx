import type { Metadata } from "next";
import ContactsPage from "@/components/ContactsPage";

export const metadata: Metadata = {
  title: "Контакты — По Барабану | Школа барабанов",
  description: "Адрес школы: Караимская 21. Есть парковка. Telegram, Instagram, телефон.",
};

export default function Page() {
  return <ContactsPage />;
}
