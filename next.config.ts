import type { NextConfig } from "next";
import path from "path";

const DOMAIN = "https://lockstarlocksmithkennington.com";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,

  // Canonical URL consistency — no trailing slash
  trailingSlash: false,

  // Image optimisation
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    remotePatterns: [],
  },

  // Turbopack root (suppresses workspace root warning)
  turbopack: {
    root: path.resolve(__dirname),
  },

  // Permanent redirects — handle common misspellings / old URL patterns
  redirects: async () => [
    // Ensure www → non-www (handle at CDN level too)
    {
      source: "/:path*",
      has: [{ type: "host", value: `www.lockstarlocksmithkennington.com` }],
      destination: `${DOMAIN}/:path*`,
      permanent: true,
    },
    // Old URL variants
    {
      source: "/emergency",
      destination: "/services/emergency-locksmith",
      permanent: true,
    },
    {
      source: "/lockout",
      destination: "/services/lockout-services",
      permanent: true,
    },
    {
      source: "/upvc",
      destination: "/services/upvc-door-repairs",
      permanent: true,
    },
  ],

  // Production-grade HTTP headers
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        // Security
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "X-Frame-Options",
          value: "SAMEORIGIN",
        },
        {
          key: "X-XSS-Protection",
          value: "1; mode=block",
        },
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
        },
        {
          key: "Permissions-Policy",
          value: "camera=(), microphone=(), geolocation=(self), interest-cohort=()",
        },
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
        // Performance
        {
          key: "Vary",
          value: "Accept-Encoding",
        },
      ],
    },
    // Aggressive caching for static assets
    {
      source: "/_next/static/(.*)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
    // Cache fonts
    {
      source: "/fonts/(.*)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
    // Cache Next.js optimised images for 30 days
    {
      source: "/_next/image(.*)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=2592000, stale-while-revalidate=86400",
        },
      ],
    },
    // sitemap & robots — short cache so updates propagate quickly
    {
      source: "/sitemap.xml",
      headers: [
        { key: "Cache-Control", value: "public, max-age=86400, s-maxage=86400" },
      ],
    },
    {
      source: "/robots.txt",
      headers: [
        { key: "Cache-Control", value: "public, max-age=86400, s-maxage=86400" },
      ],
    },
  ],
};

export default nextConfig;
