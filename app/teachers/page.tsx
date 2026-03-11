import type { Metadata } from "next";
import TeachersPage from "@/components/TeachersPage";

export const metadata: Metadata = {
  title: "Преподаватели — По Барабану | Школа барабанов",
  description: "Наши преподаватели — профессиональные барабанщики с опытом преподавания.",
};

export default function Page() {
  return <TeachersPage />;
}
