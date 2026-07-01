import type { Metadata } from "next";
import { Car } from "lucide-react";
import ServicePageLayout from "@/components/ui/ServicePageLayout";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Auto Locksmith Kennington | Car Lockout SE11",
  description:
    "Auto locksmith in Kennington SE11. Car lockouts, key cutting, transponder programming. All makes. Call 07700 900000. Non-destructive vehicle entry. 24/7.",
  alternates: {
    canonical: "/services/auto-locksmith",
    languages: {
      "en-GB": "https://lockstarlocksmithkennington.com/services/auto-locksmith",
      "en": "https://lockstarlocksmithkennington.com/services/auto-locksmith",
    },
  },
  openGraph: {
    title: "Auto Locksmith Kennington | Car Lockout SE11",
    description:
      "Auto locksmith in Kennington SE11. Car lockouts, key cutting, transponder programming. All makes. Call 07700 900000. Non-destructive vehicle entry. 24/7.",
    url: "https://lockstarlocksmithkennington.com/services/auto-locksmith",
  },
};

export default function AutoLocksmithPage() {
  const webPageSchema = generateWebPageSchema({
    title: "Auto Locksmith Kennington | Car Lockout SE11",
    description:
      "Auto locksmith in Kennington SE11. Car lockouts, key cutting, transponder programming. All makes. Call 07700 900000. Non-destructive vehicle entry. 24/7.",
    url: "/services/auto-locksmith",
    datePublished: "2025-01-15",
    dateModified: "2025-06-01",
  });
  const serviceSchema = generateServiceSchema(
    "Auto Locksmith Kennington",
    "Auto locksmith services in Kennington SE11. Car lockouts, key cutting, transponder key programming for all vehicle makes and models.",
    "auto-locksmith"
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Services", href: "/services" },
    { name: "Auto Locksmith", href: "/services/auto-locksmith" },
  ]);

  return (
    <>
      <SchemaMarkup schema={webPageSchema} />
      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />
      <ServicePageLayout
        Icon={Car}
        hero={{
          badge: "Auto Locksmith — Kennington & London",
          title: "Auto Locksmith",
          titleHighlight: "Kennington",
          description:
            "Locked out of your car, lost your car keys, or need a replacement transponder key? Our auto locksmiths cover Kennington and Greater London, working on all vehicle makes and models.",
          features: [
            "All makes and models covered",
            "Non-destructive vehicle entry",
            "Transponder key programming",
            "Replacement key cutting",
            "Key fob repair & replacement",
            "24/7 roadside response",
          ],
        }}
        mainContent={{
          heading: "Professional Auto Locksmith Services in Kennington",
          body: [
            "Being locked out of your car, or losing your car keys, is one of the most frustrating situations you can find yourself in. Lockstar Locksmith Kennington provides professional auto locksmith services across SE11 and Greater London, with fast response and expert vehicle entry techniques for all car makes and models.",
            "Our auto locksmiths use specialist non-destructive techniques to gain access to locked vehicles without causing damage to the door, window, or locking mechanisms. Unlike car recovery services that may break a window as a first resort, we always attempt professional entry first.",
            "We also provide car key cutting and transponder key programming services. Modern vehicle keys contain electronic transponder chips that communicate with the car's immobiliser — we have the specialist equipment to cut and programme replacement keys for most vehicles, at a fraction of the cost of a main dealer.",
            "Whether you've locked your keys inside the car, had your keys stolen, broken a key in the ignition, or simply lost your only set of keys, our Kennington auto locksmith team can help. Call us any time of day or night.",
          ],
        }}
        features={[
          {
            title: "Car Lockout Service",
            description: "Locked your keys inside the car? Our non-destructive vehicle entry techniques open virtually any car without damage — faster and cheaper than a breakdown service.",
          },
          {
            title: "Transponder Key Programming",
            description: "Lost or stolen car keys? We cut and programme replacement transponder keys for most vehicle makes, saving you significant cost versus a main dealer.",
          },
          {
            title: "Key Fob Repair & Replacement",
            description: "Broken or non-functioning key fob? We diagnose, repair, and programme replacement fobs for most vehicles.",
          },
          {
            title: "Broken Key Extraction",
            description: "Key snapped in the car door or ignition? We extract broken keys cleanly without damaging the lock barrel.",
          },
          {
            title: "Ignition Repair & Replacement",
            description: "Ignition lock problems? We diagnose and repair or replace faulty ignition cylinders on most vehicle types.",
          },
          {
            title: "Spare Key Cutting",
            description: "Don't get caught out again — we cut spare keys for your vehicle so you always have a backup. Standard and laser-cut keys available.",
          },
        ]}
        breadcrumb={[
          { name: "Services", href: "/services" },
          { name: "Auto Locksmith", href: "/services/auto-locksmith" },
        ]}
        relatedServices={[
          { label: "Emergency Locksmith", href: "/services/emergency-locksmith" },
          { label: "Lockout Services", href: "/services/lockout-services" },
          { label: "Lock Replacement", href: "/services/lock-replacement" },
        ]}
      />
    </>
  );
}
