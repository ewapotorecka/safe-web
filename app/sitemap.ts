import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: new Date("2025-12-01"),
      changeFrequency: "yearly",
      priority: 0.7
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: new Date("2025-12-01"),
      changeFrequency: "yearly",
      priority: 0.7
    },
    {
      url: `${siteUrl}/delete-account`,
      lastModified: new Date("2025-12-01"),
      changeFrequency: "yearly",
      priority: 0.7
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5
    }
  ];
}
