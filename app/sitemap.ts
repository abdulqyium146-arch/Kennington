import { MetadataRoute } from "next";

const DOMAIN = "https://lockstarlocksmithkennington.com";

// Use real dates — static content doesn't change daily
const SITE_LAUNCH = new Date("2025-01-15");
const LAST_REVIEWED = new Date("2025-06-01");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: DOMAIN,
      lastModified: LAST_REVIEWED,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          "en-GB": DOMAIN,
          "en": DOMAIN,
        },
      },
    },
    {
      url: `${DOMAIN}/about`,
      lastModified: SITE_LAUNCH,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${DOMAIN}/contact`,
      lastModified: SITE_LAUNCH,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${DOMAIN}/services`,
      lastModified: LAST_REVIEWED,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          "en-GB": `${DOMAIN}/services`,
        },
      },
    },
    {
      url: `${DOMAIN}/locations`,
      lastModified: LAST_REVIEWED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const serviceSlugs = [
    { slug: "emergency-locksmith",   priority: 0.95, freq: "weekly"  },
    { slug: "lockout-services",      priority: 0.92, freq: "monthly" },
    { slug: "residential-locksmith", priority: 0.90, freq: "monthly" },
    { slug: "commercial-locksmith",  priority: 0.88, freq: "monthly" },
    { slug: "auto-locksmith",        priority: 0.88, freq: "monthly" },
    { slug: "burglary-repairs",      priority: 0.88, freq: "monthly" },
    { slug: "lock-replacement",      priority: 0.85, freq: "monthly" },
    { slug: "upvc-door-repairs",     priority: 0.85, freq: "monthly" },
    { slug: "lock-repair",           priority: 0.82, freq: "monthly" },
    { slug: "lock-installation",     priority: 0.82, freq: "monthly" },
    { slug: "security-upgrades",     priority: 0.80, freq: "monthly" },
    { slug: "smart-locks",           priority: 0.78, freq: "monthly" },
  ] as const;

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map(({ slug, priority, freq }) => ({
    url: `${DOMAIN}/services/${slug}`,
    lastModified: LAST_REVIEWED,
    changeFrequency: freq,
    priority,
    alternates: {
      languages: {
        "en-GB": `${DOMAIN}/services/${slug}`,
      },
    },
  }));

  const locationSlugs = [
    { slug: "kennington",            priority: 0.95 },
    { slug: "kennington-se11",       priority: 0.93 },
    { slug: "kennington-road",       priority: 0.90 },
    { slug: "kensington",            priority: 0.85 },
    { slug: "abingdon-oxfordshire",  priority: 0.80 },
  ];

  const locationPages: MetadataRoute.Sitemap = locationSlugs.map(({ slug, priority }) => ({
    url: `${DOMAIN}/locations/${slug}`,
    lastModified: LAST_REVIEWED,
    changeFrequency: "monthly" as const,
    priority,
    alternates: {
      languages: {
        "en-GB": `${DOMAIN}/locations/${slug}`,
      },
    },
  }));

  return [...staticPages, ...servicePages, ...locationPages];
}
