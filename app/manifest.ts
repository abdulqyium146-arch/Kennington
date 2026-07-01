import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lockstar Locksmith Kennington",
    short_name: "Lockstar Locksmith",
    description:
      "24/7 emergency locksmith in Kennington SE11. 20–30 min response. DBS checked, fully insured.",
    start_url: "/",
    display: "standalone",
    background_color: "#0F172A",
    theme_color: "#0F172A",
    orientation: "portrait-primary",
    scope: "/",
    lang: "en-GB",
    categories: ["utilities", "local business"],
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    shortcuts: [
      {
        name: "Call Now",
        short_name: "Call",
        description: "Call Lockstar Locksmith Kennington",
        url: "tel:07700900000",
        icons: [{ src: "/icon-192.png", sizes: "192x192" }],
      },
      {
        name: "Emergency Locksmith",
        short_name: "Emergency",
        description: "24/7 emergency locksmith service",
        url: "/services/emergency-locksmith",
        icons: [{ src: "/icon-192.png", sizes: "192x192" }],
      },
    ],
  };
}
