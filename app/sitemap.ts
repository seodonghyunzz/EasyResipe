import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://easy-resipe.vercel.app";
  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
