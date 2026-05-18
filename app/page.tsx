import HomePage from "@/components/HomePage";
import fs from "fs/promises";
import path from "path";

export const revalidate = 60;

async function getPrices() {
  const filePath = path.join(process.cwd(), "data", "prices.json");
  const content = await fs.readFile(filePath, "utf-8");
  return JSON.parse(content);
}

export default async function Page() {
  const prices = await getPrices();
  return <HomePage prices={prices} />;
}
