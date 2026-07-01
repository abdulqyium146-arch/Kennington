import type { Metadata } from "next";
import { Wrench } from "lucide-react";
import ServicePageLayout from "@/components/ui/ServicePageLayout";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema, generateWebPageSchema, generateFAQSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Lock Repair Kennington | Stiff & Faulty Locks SE11",
  description:
    "Lock repair in Kennington SE11. Stiff, jammed or faulty locks diagnosed and fixed. UPVC multipoint specialists. Call 07984 547185. Same-day repair available.",
  alternates: {
    canonical: "/services/lock-repair",
    languages: {
      "en-GB": "https://lockstarlocksmithkennington.com/services/lock-repair",
      "en": "https://lockstarlocksmithkennington.com/services/lock-repair",
    },
  },
  openGraph: {
    title: "Lock Repair Kennington | Stiff & Faulty Locks SE11",
    description:
      "Lock repair in Kennington SE11. Stiff, jammed or faulty locks diagnosed and fixed. UPVC multipoint specialists. Call 07984 547185. Same-day repair available.",
    url: "https://lockstarlocksmithkennington.com/services/lock-repair",
  },
};

export default function LockRepairPage() {
  const webPageSchema = generateWebPageSchema({
    title: "Lock Repair Kennington | Stiff & Faulty Locks SE11",
    description:
      "Lock repair in Kennington SE11. Stiff, jammed or faulty locks diagnosed and fixed. UPVC multipoint specialists. Call 07984 547185. Same-day repair available.",
    url: "/services/lock-repair",
    datePublished: "2025-01-15",
    dateModified: "2025-06-01",
  });
  const serviceSchema = generateServiceSchema(
    "Lock Repair Kennington",
    "Professional lock repair service in Kennington SE11. Stiff, faulty, or damaged locks diagnosed and fixed quickly.",
    "lock-repair"
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Services", href: "/services" },
    { name: "Lock Repair", href: "/services/lock-repair" },
  ]);
  const faqSchema = generateFAQSchema([
    { question: "Can a stiff or jammed lock be repaired rather than replaced?", answer: "In many cases yes. We diagnose whether the lock can be cleaned, lubricated, and adjusted, or whether replacement is the more cost-effective solution." },
    { question: "What causes a lock to become stiff or difficult to use?", answer: "Common causes include dirt accumulation in the keyway, door misalignment, worn internal components, or corrosion in older locks." },
    { question: "My key will not turn in the lock — what is wrong?", answer: "This is usually caused by a lubrication issue, debris in the keyway, or worn pins inside the cylinder. We diagnose and resolve on the same visit." },
    { question: "How long does a lock repair take in Kennington?", answer: "Typically 20–45 minutes depending on the fault type and lock mechanism." },
    { question: "Is it better to repair or replace my lock?", answer: "It depends on the age and condition of the lock. We always provide an honest recommendation — we do not push unnecessary replacements." },
    { question: "Can you repair a Yale rim lock?", answer: "Yes. We repair all common residential lock types including Yale rim locks, Chubb mortice deadlocks, and UPVC cylinders." },
    { question: "Can you repair a lock that has been partially forced in a break-in?", answer: "Partially forced locks can sometimes be repaired. Fully damaged locks require replacement. We assess and advise honestly." },
    { question: "Do you carry spare parts for common lock brands?", answer: "Yes. We carry parts for Yale, Chubb, ERA, and other common residential and commercial lock brands." },
    { question: "Can you repair a smart lock that has stopped working?", answer: "Yes. We diagnose and repair most smart lock faults including mechanism failures, app connectivity issues, and cylinder problems." },
    { question: "How much does a lock repair cost in SE11?", answer: "From £65 for a standard lock repair. Fixed price quoted before work begins — no call-out fee." },
  ], "/services/lock-repair");

  return (
    <>
      <SchemaMarkup schema={faqSchema} />
      <SchemaMarkup schema={webPageSchema} />
      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />
      <ServicePageLayout
        Icon={Wrench}
        hero={{
          badge: "Lock Repair — Kennington SE11",
          title: "Lock Repair Service",
          titleHighlight: "Kennington",
          description:
            "Stiff, jammed, rattling, or misbehaving lock? Our experienced locksmiths diagnose and repair all types of door locks across Kennington and SE11. Fast, cost-effective repair — and honest advice if replacement is the better option.",
          features: [
            "All lock types diagnosed & repaired",
            "Same-day repair available",
            "UPVC multipoint mechanisms repaired",
            "Stiff & jammed locks fixed",
            "Honest advice — repair vs. replace",
            "Fixed price quoted upfront",
          ],
        }}
        mainContent={{
          heading: "Expert Lock Repair in Kennington",
          body: [
            "A stiff, sticky, or malfunctioning lock is more than just an annoyance — it can be a security risk and, if left untreated, may deteriorate to the point of complete failure. Lockstar Locksmith Kennington provides expert lock repair and diagnosis for all types of locks across SE11.",
            "Our locksmiths are experienced at diagnosing the root cause of lock problems — whether it's internal mechanism wear, misalignment between the lock and the strike plate, a faulty cylinder, or a failing UPVC multipoint gearbox. We'll tell you honestly whether a repair is the right solution or whether replacement makes better long-term sense.",
            "UPVC door locks are particularly prone to wear and failure. The multipoint locking mechanism inside a UPVC door is a complex piece of hardware that can wear, corrode, or suffer damage from repeated use. We repair and replace UPVC gearboxes and mechanisms for all major door manufacturers.",
            "For traditional mortice locks and rim locks, we carry a range of spare parts and can often carry out on-the-spot repairs without needing to return with parts. We also re-align lock cases, adjust strike plates, and service stiff or hard-to-turn lock mechanisms.",
          ],
        }}
        features={[
          {
            title: "Stiff & Hard-to-Turn Locks",
            description: "Locks that are stiff or difficult to operate are usually suffering from internal wear or lack of lubrication. We diagnose and service the mechanism.",
          },
          {
            title: "UPVC Multipoint Lock Repair",
            description: "UPVC door not locking properly? The internal gearbox mechanism may have failed. We repair and replace multipoint lock mechanisms for all major brands.",
          },
          {
            title: "Lock Case Alignment",
            description: "Lock not engaging with the strike plate? Door dropped or misaligned? We re-align lock cases and adjust strike plates to ensure smooth, secure operation.",
          },
          {
            title: "Cylinder Servicing",
            description: "Stiff cylinder or key that doesn't turn smoothly? We service and lubricate cylinders, or replace them if internal damage is found.",
          },
          {
            title: "Handle & Spindle Repair",
            description: "Sagging handle or one that turns without engaging the lock? Handle and spindle repairs for all UPVC, timber, and composite doors.",
          },
          {
            title: "Strike Plate Adjustment",
            description: "Incorrectly positioned strike plate causing door security issues. We reposition and reinforce strike plates for better lock engagement.",
          },
        ]}
        breadcrumb={[
          { name: "Services", href: "/services" },
          { name: "Lock Repair", href: "/services/lock-repair" },
        ]}
        relatedServices={[
          { label: "Lock Replacement", href: "/services/lock-replacement" },
          { label: "UPVC Door Repairs", href: "/services/upvc-door-repairs" },
          { label: "Lock Installation", href: "/services/lock-installation" },
          { label: "Emergency Locksmith", href: "/services/emergency-locksmith" },
        ]}
      />
    </>
  );
}
