import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import LocationPageLayout from "@/components/ui/LocationPageLayout";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import { generateLocalBusinessSchema, generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Locksmith Kennington | 24/7 Emergency SE11",
  description:
    "Locksmith in Kennington SE11. 24/7 emergency lockouts, lock fitting & burglary repairs. Call 07984 547185. DBS checked, 20–30 min response, no call-out fee.",
  alternates: {
    canonical: "/locations/kennington",
    languages: {
      "en-GB": "https://lockstarlocksmithkennington.com/locations/kennington",
      "en": "https://lockstarlocksmithkennington.com/locations/kennington",
    },
  },
  openGraph: {
    title: "Locksmith Kennington | 24/7 Emergency SE11",
    description:
      "Locksmith in Kennington SE11. 24/7 emergency lockouts, lock fitting & burglary repairs. Call 07984 547185. DBS checked, 20–30 min response, no call-out fee.",
    url: "https://lockstarlocksmithkennington.com/locations/kennington",
  },
};

export default function KenningtonPage() {
  const webPageSchema = generateWebPageSchema({
    title: "Locksmith Kennington | 24/7 Emergency SE11",
    description:
      "Locksmith in Kennington SE11. 24/7 emergency lockouts, lock fitting & burglary repairs. Call 07984 547185. DBS checked, 20–30 min response, no call-out fee.",
    url: "/locations/kennington",
    datePublished: "2025-01-15",
    dateModified: "2025-06-01",
  });
  const businessSchema = generateLocalBusinessSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Locations", href: "/locations" },
    { name: "Kennington", href: "/locations/kennington" },
  ]);

  return (
    <>
      <SchemaMarkup schema={webPageSchema} />
      <SchemaMarkup schema={businessSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />
      <LocationPageLayout
        Icon={MapPin}
        location={{
          name: "Kennington, London SE11",
          nameShort: "Kennington",
          postcode: "SE11",
          description:
            "Kennington is a residential area in the London Borough of Lambeth, located in South London between Oval and Elephant & Castle. The area is well served by the Northern Line at Kennington tube station.",
          landmarks: [
            "Kennington Park",
            "Oval Cricket Ground",
            "Kennington Tube Station",
            "Archbishop's Park",
            "St Mark's Church",
          ],
          roads: [
            "Kennington Road",
            "Kennington Lane",
            "Kennington Park Road",
            "Harleyford Road",
            "Clapham Road",
          ],
          nearbyAreas: ["Oval", "Vauxhall", "Stockwell", "Elephant & Castle", "Lambeth"],
        }}
        hero={{
          badge: "Locksmith Kennington SE11",
          title: "Locksmith in Kennington — 20 Minutes Away",
          description:
            "Lockstar Locksmith Kennington is your local, trusted locksmith serving homes and businesses across Kennington SE11. From emergency lockouts at 3am to planned lock upgrades — we're your first call for all locksmith needs.",
        }}
        mainContent={{
          heading: "Your Trusted Local Locksmith in Kennington",
          body: [
            "Kennington is one of London's most vibrant residential communities — a mix of Victorian terraces, purpose-built flats, and modern developments spread across the SE11 postcode. As a genuinely local locksmith business, Lockstar has been serving Kennington homeowners, tenants, and businesses since 2015.",
            "We know Kennington intimately — from the Georgian townhouses along Kennington Road to the mansion blocks near Oval and the newer developments around Kennington Park. This local knowledge means we can navigate the area efficiently and arrive faster than any national call centre dispatching from outside the area.",
            "Our Kennington locksmith service covers everything from emergency lockouts (our most common call-out) to planned security upgrades, UPVC door repairs, and commercial lock systems. Whatever your locksmith need, Lockstar is the trusted local choice in SE11.",
            "Kennington residents choose Lockstar because we are genuinely local, genuinely transparent about pricing, and genuinely committed to quality work. With over 247 five-star Google reviews from SE11 and surrounding postcodes, our reputation is built on delivering exactly what we promise.",
          ],
        }}
        services={[
          { title: "Emergency Locksmith Kennington", href: "/services/emergency-locksmith", description: "24/7 emergency lockout response — 20–30 min average" },
          { title: "Residential Locksmith SE11", href: "/services/residential-locksmith", description: "Home lock fitting, repair & replacement" },
          { title: "Commercial Locksmith Kennington", href: "/services/commercial-locksmith", description: "Business security solutions & master key systems" },
          { title: "Lock Replacement SE11", href: "/services/lock-replacement", description: "BS3621 locks supplied and fitted same day" },
          { title: "UPVC Door Repairs Kennington", href: "/services/upvc-door-repairs", description: "Multipoint mechanisms & cylinders replaced" },
          { title: "Burglary Repairs SE11", href: "/services/burglary-repairs", description: "Emergency boarding up & security after break-in" },
          { title: "Auto Locksmith Kennington", href: "/services/auto-locksmith", description: "Car lockouts & key cutting for all vehicles" },
          { title: "Security Upgrades SE11", href: "/services/security-upgrades", description: "Anti-snap locks & door reinforcement" },
        ]}
        breadcrumb={[
          { name: "Locations", href: "/locations" },
          { name: "Kennington", href: "/locations/kennington" },
        ]}
      />
    </>
  );
}
