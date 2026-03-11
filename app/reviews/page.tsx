import type { Metadata } from "next";
import ReviewsPage from "@/components/ReviewsPage";

export const metadata: Metadata = {
  title: "Отзывы — По Барабану | Школа барабанов",
  description: "Отзывы учеников школы барабанов По Барабану.",
};

export default function Page() {
  return <ReviewsPage />;
}
