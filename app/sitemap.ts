import type { MetadataRoute } from "next";
import { freeLessonSlug } from "@/lib/course";
import { guides } from "@/lib/guides";

const site = "https://skilldink.com";

const pages: {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/courses/pickleball-foundations", priority: 0.9, changeFrequency: "weekly" },
  { path: "/guides", priority: 0.8, changeFrequency: "weekly" },
  { path: `/learn/${freeLessonSlug}`, priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/courses", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cookies", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map((page) => ({
      url: new URL(page.path, site).href,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...guides.map((guide) => ({
      url: new URL(`/guides/${guide.slug}`, site).href,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
