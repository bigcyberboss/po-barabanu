import type { Metadata } from "next";
import GalleryPage from "@/components/GalleryPage";

export const metadata: Metadata = {
  title: "Фото и видео - По Барабану | Школа барабанов",
  description: "Фотографии и видео с уроков в школе барабанов По Барабану.",
};

export default function Page() {
  return <GalleryPage />;
}
