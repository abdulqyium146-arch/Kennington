import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import LocationPageLayout from "@/components/ui/LocationPageLayout";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import { generateLocalBusinessSchema, generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Locksmith Kensington | 24/7 Emergency W8 SW7",
  description:
    "Locksmith in Kensington W8 & SW7. High-security locks, emergency lockouts & premium residential service. Call 07984 547185. DBS checked, fast response.",
  keywords: [
    "locksmith kensington",
    "kensington locksmith",
    "emergency locksmith kensington",
    "locksmith w8",
    "locksmith sw7",
    "security kensington",
  ],
  alternates: {
    canonical: "/locations/kensington",
    languages: {
      "en-GB": "https://lockstarlocksmithkennington.com/locations/kensington",
      "en": "https://lockstarlocksmithkennington.com/locations/kensington",
    },
  },
  openGraph: {
    title: "Locksmith Kensington | 24/7 Emergency W8 SW7",
    description:
      "Locksmith in Kensington W8 & SW7. High-security locks, emergency lockouts & premium residential service. Call 07984 547185. DBS checked, fast response.",
    url: "https://lockstarlocksmithkennington.com/locations/kensington",
  },
};

export default function KensingtonPage() {
  const webPageSchema = generateWebPageSchema({
    title: "Locksmith Kensington | 24/7 Emergency W8 SW7",
    description:
      "Locksmith in Kensington W8 & SW7. High-security locks, emergency lockouts & premium residential service. Call 07984 547185. DBS checked, fast response.",
    url: "/locations/kensington",
    datePublished: "2025-01-15",
    dateModified: "2025-06-01",
  });
  const businessSchema = generateLocalBusinessSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Locations", href: "/locations" },
    { name: "Kensington", href: "/locations/kensington" },
  ]);

  return (
    <>
      <SchemaMarkup schema={webPageSchema} />
      <SchemaMarkup schema={businessSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />
      <LocationPageLayout
        Icon={MapPin}
        location={{
          name: "Kensington, London W8 & SW7",
          nameShort: "Kensington",
          postcode: "W8 / SW7",
          description:
            "Kensington is one of London's most prestigious residential areas, situated in the Royal Borough of Kensington and Chelsea. Known for its Victorian mansion blocks, garden squares, and proximity to Hyde Park and Kensington Palace.",
          landmarks: [
            "Kensington Palace",
            "Natural History Museum",
            "Hyde Park",
            "Victoria & Albert Museum",
            "Kensington High Street",
          ],
          roads: [
            "Kensington High Street",
            "Kensington Church Street",
            "Kensington Palace Gardens",
            "Earl's Court Road",
            "Holland Park Avenue",
          ],
          nearbyAreas: [
            "Notting Hill",
            "Chelsea",
            "South Kensington",
            "Earl's Court",
            "Holland Park",
          ],
        }}
        hero={{
          badge: "Locksmith — Kensington W8 & SW7",
          title: "Locksmith in Kensington — Premium Local Service",
          description:
            "Professional locksmith services across Kensington, W8 and SW7. Specialising in high-security lock solutions for the Royal Borough — from emergency lockouts to Banham and Mul-T-Lock installation for Kensington's finest properties.",
        }}
        mainContent={{
          heading: "Trusted Locksmith Serving Kensington W8 & SW7",
          body: [
            "Kensington — the Royal Borough's most prestigious address — is home to some of London's finest residential properties: grand Victorian mansion blocks, Grade II listed townhouses, elegant garden flat conversions, and modern luxury apartments. Each property type presents unique locksmith requirements, and Lockstar brings the expertise and quality products to match.",
            "Our Kensington locksmith service specialises in high-security lock solutions appropriate for premium properties. We work regularly with Banham locks — the traditional high-security lock of choice for London's finest homes — as well as Mul-T-Lock, Abloy, and ASSA ABLOY high-security cylinders that provide the highest levels of pick resistance, drill resistance, and key control.",
            "Emergency lockout calls in Kensington are handled with the same professionalism and speed as anywhere in our coverage area. Residents locked out at any time of day or night receive a prompt, professional response, and we always use non-destructive entry techniques to avoid damage to valuable and historic doors.",
            "We also serve Kensington's commercial sector — servicing the security needs of the many boutiques, galleries, restaurants, and professional offices throughout the area. Our commercial locksmith team provides master key systems, access control, and high-security lock installations appropriate for Kensington's premium business environment.",
          ],
        }}
        services={[
          { title: "Emergency Locksmith Kensington", href: "/services/emergency-locksmith", description: "24/7 emergency lockout response across W8 & SW7" },
          { title: "High-Security Locks Kensington", href: "/services/lock-replacement", description: "Banham, Mul-T-Lock & Abloy for premium properties" },
          { title: "Residential Locksmith W8", href: "/services/residential-locksmith", description: "Specialist in period & premium property locks" },
          { title: "Commercial Locksmith Kensington", href: "/services/commercial-locksmith", description: "Business security for Kensington premises" },
          { title: "Smart Locks Kensington", href: "/services/smart-locks", description: "Luxury smart lock installation & programming" },
          { title: "Security Upgrades SW7", href: "/services/security-upgrades", description: "Property security surveys & anti-snap upgrades" },
          { title: "UPVC & Composite Door Repairs", href: "/services/upvc-door-repairs", description: "All modern and period door types covered" },
          { title: "Burglary Repairs Kensington", href: "/services/burglary-repairs", description: "Emergency response & security after break-in" },
        ]}
        breadcrumb={[
          { name: "Locations", href: "/locations" },
          { name: "Kensington", href: "/locations/kensington" },
        ]}
      />
    </>
  );
}
