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
  title: "Locksmith Elephant & Castle SE1 SE17 | 24/7",
  description:
    "Locksmith in Elephant & Castle SE1 & SE17. Emergency lockouts, lock fitting & security upgrades. Call 07984 547185. DBS checked, fast response, no call-out fee.",
  keywords: [
    "locksmith elephant and castle",
    "elephant castle locksmith",
    "emergency locksmith elephant and castle",
    "locksmith se1 elephant castle",
    "locksmith se17",
    "locksmith elephant castle london",
  ],
  alternates: {
    canonical: "/locations/elephant-and-castle",
    languages: {
      "en-GB": "https://lockstarlocksmithkennington.com/locations/elephant-and-castle",
      "en": "https://lockstarlocksmithkennington.com/locations/elephant-and-castle",
    },
  },
  openGraph: {
    title: "Locksmith Elephant & Castle SE1 SE17 | 24/7",
    description:
      "Locksmith in Elephant & Castle SE1 & SE17. Emergency lockouts, lock fitting & security upgrades. Call 07984 547185. DBS checked, fast response, no call-out fee.",
    url: "https://lockstarlocksmithkennington.com/locations/elephant-and-castle",
  },
};

export default function ElephantAndCastlePage() {
  const webPageSchema = generateWebPageSchema({
    title: "Locksmith Elephant & Castle SE1 SE17 | 24/7",
    description:
      "Locksmith in Elephant & Castle SE1 & SE17. Emergency lockouts, lock fitting & security upgrades. Call 07984 547185. DBS checked, fast response, no call-out fee.",
    url: "/locations/elephant-and-castle",
    datePublished: "2025-01-15",
    dateModified: "2025-06-01",
  });
  const businessSchema = generateLocalBusinessSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Locations", href: "/locations" },
    { name: "Elephant & Castle", href: "/locations/elephant-and-castle" },
  ]);
  const faqSchema = generateFAQSchema(
    [
      {
        question: "How quickly can a locksmith reach Elephant and Castle?",
        answer:
          "Lockstar Locksmith Kennington typically arrives within 20–30 minutes across Elephant and Castle SE1 and SE17. Our Kennington base puts us extremely close to the area.",
      },
      {
        question: "Do you cover both SE1 and SE17 postcodes at Elephant and Castle?",
        answer:
          "Yes. Elephant and Castle spans the SE1 and SE17 postcode boundary and we cover both, including the surrounding streets of Walworth, Newington, and Bermondsey.",
      },
      {
        question: "Can you open a door in a high-rise flat at Elephant and Castle?",
        answer:
          "Yes. We regularly attend lockouts in the high-rise apartment buildings and council estates around Elephant and Castle. We work with all lock types found in these developments.",
      },
      {
        question: "Do you carry out lock changes for landlords at Elephant and Castle?",
        answer:
          "Yes. Elephant and Castle has a large rental market and we provide fast landlord lock-change services between tenancies, typically same day or next day.",
      },
      {
        question: "Is there a call-out fee for locksmith services at Elephant and Castle?",
        answer:
          "No. Lockstar charges no call-out fee across the Elephant and Castle SE1 and SE17 area. A fixed price is quoted before work begins.",
      },
    ],
    "/locations/elephant-and-castle"
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
          name: "Elephant & Castle, London SE1 & SE17",
          nameShort: "Elephant & Castle",
          postcode: "SE1 / SE17",
          description:
            "Elephant and Castle is a major South London transport interchange and residential area spanning the SE1 and SE17 postcodes, in the London Borough of Southwark. It sits immediately north of Kennington and is one of the most densely populated areas of inner South London.",
          landmarks: [
            "Elephant & Castle Station (Northern & Bakerloo)",
            "Elephant Park Development",
            "Strata Tower",
            "Southwark Council Offices",
            "Newington Gardens",
          ],
          roads: [
            "New Kent Road (A201)",
            "Walworth Road",
            "Newington Causeway",
            "Kennington Park Road",
            "Elephant Road",
          ],
          nearbyAreas: [
            "Kennington",
            "Walworth",
            "Borough",
            "Bermondsey",
            "Oval",
          ],
        }}
        hero={{
          badge: "Locksmith — Elephant & Castle SE1 & SE17",
          title: "Locksmith in Elephant & Castle",
          description:
            "Professional locksmith services across Elephant and Castle SE1 and SE17. From the high-rise developments of Elephant Park to the Victorian terraces of Walworth — Lockstar Locksmith Kennington is your closest local locksmith, 24 hours a day.",
        }}
        mainContent={{
          heading: "Local Locksmith Serving Elephant & Castle SE1 & SE17",
          body: [
            "Elephant and Castle is one of the closest major areas to our Kennington base — less than a mile to the north along Kennington Park Road. This proximity means we consistently achieve some of our fastest response times here, typically arriving within 20–30 minutes of your call across the SE1 and SE17 postcodes.",
            "Elephant and Castle has undergone significant regeneration over recent years. The area now contains an eclectic mix of property types — original Victorian and Edwardian terraces in Walworth, large-scale council estates and social housing blocks, and a growing number of premium new-build apartment developments such as Elephant Park. Each property type presents different locksmith requirements, and our team is experienced across all of them.",
            "Emergency lockouts are the most common reason residents of Elephant and Castle call us. The area's high population density, large student population, and significant transient rental market all contribute to a steady demand for professional locksmith attendance. We respond promptly, operate 24 hours a day including bank holidays, and always provide a fixed price quote before starting work — no hidden charges.",
            "We also carry out planned locksmith work for landlords, letting agents, and property management companies operating in the Elephant and Castle area. The active rental market here creates constant demand for lock changes between tenancies, security upgrades for HMO properties, and UPVC door repairs on converted flats. Our commercial locksmith team also serves the businesses and commercial premises throughout the SE1 and SE17 postcodes, providing master key systems, access control, and commercial lock changes.",
          ],
        }}
        services={[
          {
            title: "Emergency Locksmith Elephant & Castle",
            href: "/services/emergency-locksmith",
            description: "24/7 lockout response across SE1 & SE17 — 20–30 min average",
          },
          {
            title: "Residential Locksmith SE1 SE17",
            href: "/services/residential-locksmith",
            description: "Home lock services for all property types in the area",
          },
          {
            title: "Lock Replacement Elephant & Castle",
            href: "/services/lock-replacement",
            description: "BS3621 & anti-snap locks supplied and fitted same day",
          },
          {
            title: "UPVC Door Repairs SE1 SE17",
            href: "/services/upvc-door-repairs",
            description: "Multipoint mechanisms & cylinders repaired same day",
          },
          {
            title: "Burglary Repairs Elephant & Castle",
            href: "/services/burglary-repairs",
            description: "Emergency boarding up & security after break-in",
          },
          {
            title: "Commercial Locksmith SE1",
            href: "/services/commercial-locksmith",
            description: "Business security for Elephant & Castle premises",
          },
          {
            title: "Security Upgrades SE17",
            href: "/services/security-upgrades",
            description: "Anti-snap cylinders & home security surveys",
          },
          {
            title: "Auto Locksmith Elephant & Castle",
            href: "/services/auto-locksmith",
            description: "Car lockouts & key cutting across SE1 & SE17",
          },
        ]}
        breadcrumb={[
          { name: "Locations", href: "/locations" },
          { name: "Elephant & Castle", href: "/locations/elephant-and-castle" },
        ]}
      />
    </>
  );
}
