import type { Metadata } from "next";
import { DoorOpen } from "lucide-react";
import ServicePageLayout from "@/components/ui/ServicePageLayout";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "UPVC Door Repairs Kennington | Multipoint Lock Repair SE11",
  description:
    "UPVC door repairs in Kennington SE11. Multipoint lock mechanisms, handles, and barrels replaced. Call " +
    BUSINESS.phone +
    ". Same-day UPVC repair service.",
  alternates: { canonical: "/services/upvc-door-repairs" },
};

export default function UPVCDoorRepairsPage() {
  const serviceSchema = generateServiceSchema(
    "UPVC Door Repairs Kennington",
    "UPVC door repair service in Kennington SE11. Multipoint lock mechanisms, handles, barrels, and hinges repaired and replaced.",
    "upvc-door-repairs"
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Services", href: "/services" },
    { name: "UPVC Door Repairs", href: "/services/upvc-door-repairs" },
  ]);

  return (
    <>
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
