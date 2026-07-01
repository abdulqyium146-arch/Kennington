import { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/constants";

const domain = BUSINESS.domain;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: domain,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${domain}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${domain}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = [
    "emergency-locksmith",
    "residential-locksmith",
    "commercial-locksmith",
    "auto-locksmith",
    "lock-replacement",
    "lock-repair",
    "lock-installation",
    "upvc-door-repairs",
    "lockout-services",
    "burglary-repairs",
    "smart-locks",
    "security-upgrades",
  ].map((slug) => ({
    url: `${domain}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const locationPages: MetadataRoute.Sitemap = [
    "kennington",
    "kennington-se11",
    "kennington-road",
    "kensington",
    "abingdon-oxfordshire",
  ].map((slug) => ({
    url: `${domain}/locations/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticPages, ...servicePages, ...locationPages];
}
