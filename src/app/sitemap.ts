import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://herbalcare.asia";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${base}/tra`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
