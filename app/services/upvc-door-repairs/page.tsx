import type { Metadata } from "next";
import { DoorOpen } from "lucide-react";
import ServicePageLayout from "@/components/ui/ServicePageLayout";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema, generateWebPageSchema, generateFAQSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "UPVC Door Repairs Kennington | Multipoint SE11",
  description:
    "UPVC door repairs in Kennington SE11. Multipoint gearboxes, handles, cylinders & hinges replaced. Call 07984 547185. Same-day UPVC specialist service.",
  alternates: {
    canonical: "/services/upvc-door-repairs",
    languages: {
      "en-GB": "https://lockstarlocksmithkennington.com/services/upvc-door-repairs",
      "en": "https://lockstarlocksmithkennington.com/services/upvc-door-repairs",
    },
  },
  openGraph: {
    title: "UPVC Door Repairs Kennington | Multipoint SE11",
    description:
      "UPVC door repairs in Kennington SE11. Multipoint gearboxes, handles, cylinders & hinges replaced. Call 07984 547185. Same-day UPVC specialist service.",
    url: "https://lockstarlocksmithkennington.com/services/upvc-door-repairs",
  },
};

export default function UPVCDoorRepairsPage() {
  const webPageSchema = generateWebPageSchema({
    title: "UPVC Door Repairs Kennington | Multipoint SE11",
    description:
      "UPVC door repairs in Kennington SE11. Multipoint gearboxes, handles, cylinders & hinges replaced. Call 07984 547185. Same-day UPVC specialist service.",
    url: "/services/upvc-door-repairs",
    datePublished: "2025-01-15",
    dateModified: "2025-06-01",
  });
  const serviceSchema = generateServiceSchema(
    "UPVC Door Repairs Kennington",
    "UPVC door repair service in Kennington SE11. Multipoint lock mechanisms, handles, barrels, and hinges repaired and replaced.",
    "upvc-door-repairs"
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Services", href: "/services" },
    { name: "UPVC Door Repairs", href: "/services/upvc-door-repairs" },
  ]);
  const faqSchema = generateFAQSchema([
    { question: "Why will my UPVC door not close or lock properly?", answer: "Most UPVC door problems stem from a worn gearbox, a door that has dropped on its hinges, or a failed cylinder. We diagnose the exact fault and repair it on the same visit." },
    { question: "What is a UPVC multipoint lock?", answer: "A multipoint locking system engages at multiple points along the door frame simultaneously, providing significantly more security than a single-point lock." },
    { question: "Can you repair or replace a UPVC door gearbox?", answer: "Yes. We carry a comprehensive range of UPVC gearbox mechanisms for same-day replacement across SE11." },
    { question: "How long does a UPVC lock repair take?", answer: "UPVC mechanism replacements typically take 45–90 minutes. Cylinder replacements are usually completed in under 30 minutes." },
    { question: "Can you replace just the cylinder on my UPVC door?", answer: "Yes. UPVC cylinder replacement is our most common repair and takes under 30 minutes in most cases." },
    { question: "My UPVC door handle has dropped — is this serious?", answer: "A dropped handle usually indicates a worn gearbox. The door may still lock in some scenarios but the mechanism should be replaced promptly to maintain security." },
    { question: "Do you repair composite doors as well as UPVC?", answer: "Yes. We work on all composite and UPVC door types and carry mechanisms compatible with the most common brands." },
    { question: "Can you repair a UPVC door damaged in a break-in?", answer: "Yes. We carry out post-burglary UPVC door repairs including gearbox, cylinder, and frame reinforcement." },
    { question: "Why is my UPVC door hard to lift to lock?", answer: "Difficulty lifting the handle to engage the lock is a classic symptom of a worn gearbox. The mechanism needs replacing." },
    { question: "How much does a UPVC door repair cost in Kennington?", answer: "Cylinder replacements from £75. Gearbox replacements from £129 depending on mechanism type. Fixed price quoted before work." },
  ], "/services/upvc-door-repairs");

  return (
    <>
      <SchemaMarkup schema={faqSchema} />
      <SchemaMarkup schema={webPageSchema} />
      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />
      <ServicePageLayout
        Icon={DoorOpen}
        hero={{
          badge: "UPVC Door Repairs — Kennington SE11",
          title: "UPVC Door Repairs",
          titleHighlight: "Kennington",
          description:
            "UPVC door not closing, locking, or operating properly? Our technicians repair and replace multipoint lock mechanisms, handles, cylinders, and hinges across Kennington and SE11 — fast, same-day service.",
          features: [
            "All UPVC door makes covered",
            "Multipoint gearbox replacement",
            "Handle & cylinder replacement",
            "Hinge adjustment & replacement",
            "Same-day repair in most cases",
            "Composite door repairs too",
          ],
        }}
        mainContent={{
          heading: "UPVC Door Repair Specialists in Kennington",
          body: [
            "UPVC doors are the most common door type in London and account for a large proportion of our repair work across Kennington and SE11. While durable, UPVC multipoint locking systems contain complex mechanical components that can wear, fail, or suffer damage — leaving the door impossible to lock, difficult to open, or insecure.",
            "The most common UPVC door problem we encounter is a failed multipoint gearbox — the internal mechanism that coordinates all the locking points on the door when you lift the handle and turn the key. When this gearbox fails, the door either won't lock, won't unlock, or the handle droops and no longer operates the lock correctly.",
            "We carry a comprehensive stock of replacement multipoint lock gearboxes, hooks, rollers, and keeps for all major UPVC door brands including Mila, Winkhaus, Yale, Fullex, Lockmaster, Era, and Avantis. In most cases, we can repair your UPVC door on the same visit.",
            "We also repair and replace UPVC door handles, euro cylinder locks, letter box fittings, and door hinges. If your UPVC door is dropping, dragging on the frame, or not closing properly, hinge adjustment or replacement is often the solution.",
          ],
        }}
        features={[
          {
            title: "Multipoint Gearbox Replacement",
            description: "The internal multipoint mechanism is the most common failure point on UPVC doors. We stock and fit replacement gearboxes for all major brands.",
          },
          {
            title: "Handle Replacement",
            description: "Broken, sagging, or seized UPVC door handle? We replace handles and spindles for all UPVC and composite door types.",
          },
          {
            title: "Cylinder (Barrel) Replacement",
            description: "Anti-snap euro cylinder replacement for UPVC doors — we strongly recommend upgrading to an anti-snap cylinder for improved security.",
          },
          {
            title: "Hinge Repair & Replacement",
            description: "UPVC door dropping, dragging, or not closing squarely? We adjust and replace butt hinges, flag hinges, and concealed hinges.",
          },
          {
            title: "Door Alignment",
            description: "Misaligned UPVC door making it difficult to close or lock? We re-align the door within the frame to restore smooth, secure operation.",
          },
          {
            title: "Composite Door Repairs",
            description: "We also repair composite doors — the same multipoint mechanisms and cylinder locks are used, and we carry the necessary replacement parts.",
          },
        ]}
        breadcrumb={[
          { name: "Services", href: "/services" },
          { name: "UPVC Door Repairs", href: "/services/upvc-door-repairs" },
        ]}
        relatedServices={[
          { label: "Lock Repair", href: "/services/lock-repair" },
          { label: "Lock Replacement", href: "/services/lock-replacement" },
          { label: "Burglary Repairs", href: "/services/burglary-repairs" },
          { label: "Emergency Locksmith", href: "/services/emergency-locksmith" },
        ]}
      />
    </>
  );
}
