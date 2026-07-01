import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import LocationPageLayout from "@/components/ui/LocationPageLayout";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import {
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  generateWebPageSchema,
  generateFAQSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Locksmith Waterloo SE1 | 24/7 Emergency Locksmith",
  description:
    "Locksmith in Waterloo SE1. Emergency lockouts, lock fitting & security upgrades. Call 07984 547185. DBS checked, 20–30 min response, no call-out fee.",
  keywords: [
    "locksmith waterloo",
    "waterloo locksmith",
    "emergency locksmith waterloo",
    "locksmith se1 waterloo",
    "locksmith near waterloo station",
  ],
  alternates: {
    canonical: "/locations/waterloo",
    languages: {
      "en-GB": "https://lockstarlocksmithkennington.com/locations/waterloo",
      "en": "https://lockstarlocksmithkennington.com/locations/waterloo",
    },
  },
  openGraph: {
    title: "Locksmith Waterloo SE1 | 24/7 Emergency Locksmith",
    description:
      "Locksmith in Waterloo SE1. Emergency lockouts, lock fitting & security upgrades. Call 07984 547185. DBS checked, 20–30 min response, no call-out fee.",
    url: "https://lockstarlocksmithkennington.com/locations/waterloo",
  },
};

export default function WaterlooPage() {
  const webPageSchema = generateWebPageSchema({
    title: "Locksmith Waterloo SE1 | 24/7 Emergency Locksmith",
    description:
      "Locksmith in Waterloo SE1. Emergency lockouts, lock fitting & security upgrades. Call 07984 547185. DBS checked, 20–30 min response, no call-out fee.",
    url: "/locations/waterloo",
    datePublished: "2025-01-15",
    dateModified: "2025-06-01",
  });
  const businessSchema = generateLocalBusinessSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Locations", href: "/locations" },
    { name: "Waterloo SE1", href: "/locations/waterloo" },
  ]);
  const faqSchema = generateFAQSchema(
    [
      {
        question: "How quickly can a locksmith reach Waterloo SE1?",
        answer:
          "Lockstar Locksmith Kennington reaches the Waterloo SE1 area within 20–30 minutes. Waterloo is adjacent to our Kennington SE11 base and is one of our fastest-response zones.",
      },
      {
        question: "Do you cover Waterloo and the South Bank area?",
        answer:
          "Yes. We cover all of Waterloo SE1 including the South Bank, Lower Marsh, Lambeth North, and the streets around Waterloo Station. Call us to confirm for your specific address.",
      },
      {
        question: "Can you change a lock in my Waterloo flat same day?",
        answer:
          "Yes. Same-day lock changes are available across the Waterloo SE1 area. We carry a full stock of BS3621 deadlocks, Yale cylinders, and UPVC replacement barrels.",
      },
      {
        question: "Is there a call-out fee for locksmith services in Waterloo?",
        answer:
          "No. Lockstar charges no call-out fee anywhere in the Waterloo SE1 area. You receive a fixed price before any work starts.",
      },
      {
        question: "Do you work on period conversions and modern apartments in Waterloo?",
        answer:
          "Yes. Waterloo has a wide mix of property types — Victorian conversions, 1960s council blocks, and modern riverside developments. We work on all door and lock types found in the area.",
      },
    ],
    "/locations/waterloo"
  );

  return (
    <>
      <SchemaMarkup schema={faqSchema} />
      <SchemaMarkup schema={webPageSchema} />
      <SchemaMarkup schema={businessSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />
      <LocationPageLayout
        Icon={MapPin}
        location={{
          name: "Waterloo, London SE1",
          nameShort: "Waterloo",
          postcode: "SE1",
          description:
            "Waterloo is a vibrant mixed-use district in the London Borough of Lambeth, straddling the South Bank of the Thames. Home to Waterloo Station — the UK's busiest rail terminus — it combines cultural venues, office blocks, and a diverse residential community across SE1.",
          landmarks: [
            "Waterloo Station",
            "Lambeth North Underground",
            "BFI Southbank",
            "Lower Marsh Market",
            "IMAX Cinema",
          ],
          roads: [
            "Waterloo Road",
            "York Road",
            "Lower Marsh",
            "Westminster Bridge Road",
            "Lambeth Palace Road",
          ],
          nearbyAreas: [
            "Kennington",
            "Lambeth",
            "Elephant & Castle",
            "Vauxhall",
            "Borough",
          ],
        }}
        hero={{
          badge: "Locksmith — Waterloo SE1",
          title: "Locksmith in Waterloo SE1",
          description:
            "Fast, professional locksmith services across Waterloo and the South Bank. From the residential streets off Lower Marsh to riverside apartment blocks on the South Bank — Lockstar Locksmith Kennington is minutes away, day or night.",
        }}
        mainContent={{
          heading: "Your Local Locksmith Serving Waterloo SE1",
          body: [
            "Waterloo SE1 sits immediately north of our Kennington base, making it one of the fastest areas we serve. Whether you've been locked out of a flat off Waterloo Road, need a lock changed in a Lower Marsh property, or require emergency security after a break-in near Lambeth North — we respond quickly, 24 hours a day.",
            "The Waterloo area encompasses a wide variety of property types, from Victorian terraced streets and post-war council developments to modern riverside apartment complexes along the South Bank. Each property type brings its own lock configuration, and our locksmiths are experienced across all of them — from traditional British Standard 5-lever mortice locks to the multipoint systems common in modern flat developments.",
            "For residential properties in Waterloo, our most frequent jobs include emergency lockouts (particularly from tenants who've lost keys or had a key snap in the cylinder), landlord lock changes between tenancies, and security upgrades from standard cylinders to anti-snap alternatives. Cylinder snapping is a well-documented burglary method in inner London — upgrading to an anti-snap cylinder is the single most cost-effective security improvement for any Waterloo flat or house.",
            "Waterloo also has a significant commercial and mixed-use sector. We carry out commercial locksmith work for offices, retail units, and hospitality businesses across SE1 — access control installations, high-security deadlock fitting, and emergency commercial lockouts. Our DBS-checked locksmiths arrive in clearly identified vehicles with full insurance cover.",
          ],
        }}
        services={[
          {
            title: "Emergency Locksmith Waterloo",
            href: "/services/emergency-locksmith",
            description: "24/7 lockout response across Waterloo SE1 — 20–30 min average",
          },
          {
            title: "Residential Locksmith Waterloo",
            href: "/services/residential-locksmith",
            description: "Home lock services for all Waterloo property types",
          },
          {
            title: "Lock Replacement Waterloo",
            href: "/services/lock-replacement",
            description: "BS3621 & anti-snap locks supplied and fitted same day",
          },
          {
            title: "UPVC Door Repairs Waterloo",
            href: "/services/upvc-door-repairs",
            description: "Multipoint mechanisms & cylinders replaced in Waterloo",
          },
          {
            title: "Landlord Lock Changes Waterloo",
            href: "/services/lock-replacement",
            description: "Same-day lock change between tenancies across Waterloo SE1",
          },
          {
            title: "Commercial Locksmith Waterloo",
            href: "/services/commercial-locksmith",
            description: "Business security for offices and retail in SE1",
          },
          {
            title: "Security Upgrades Waterloo",
            href: "/services/security-upgrades",
            description: "Anti-snap cylinders & door reinforcement for SE1 properties",
          },
          {
            title: "Burglary Repairs Waterloo",
            href: "/services/burglary-repairs",
            description: "Emergency boarding & security after break-in in Waterloo",
          },
        ]}
        breadcrumb={[
          { name: "Locations", href: "/locations" },
          { name: "Waterloo SE1", href: "/locations/waterloo" },
        ]}
      />
    </>
  );
}
