import type { MetadataRoute } from "next";
import { stories } from "../lib/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://luceafotografie.it";
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${base}/chi-sono`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${base}/storie`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${base}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${base}/prezzi`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85
    },
    {
      url: `${base}/recensioni`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${base}/contatti`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: `${base}/come-funziona`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6
    }
  ];

  const storyRoutes = stories.map((story) => ({
    url: `${base}/storie/${story.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...staticRoutes, ...storyRoutes];
}
