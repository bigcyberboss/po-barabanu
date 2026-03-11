import { MetadataRoute } from "next";

const BASE_URL = "https://pobarabanu.ru";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/prices", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/teachers", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/contacts", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/gallery", priority: 0.5, changeFrequency: "monthly" as const },
    { url: "/reviews", priority: 0.6, changeFrequency: "weekly" as const },
  ];

  return pages.map((page) => ({
    url: `${BASE_URL}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
