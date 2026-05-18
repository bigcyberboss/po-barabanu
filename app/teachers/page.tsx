import type { Metadata } from "next";
import TeachersPage from "@/components/TeachersPage";
import fs from "fs/promises";
import path from "path";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Преподаватели - По Барабану | Школа барабанов",
  description: "Наши преподаватели - профессиональные барабанщики с опытом преподавания.",
};

async function getTeachers() {
  const filePath = path.join(process.cwd(), "data", "teachers.json");
  const content = await fs.readFile(filePath, "utf-8");
  return JSON.parse(content);
}

export default async function Page() {
  const teachers = await getTeachers();
  return <TeachersPage teachers={teachers} />;
}
