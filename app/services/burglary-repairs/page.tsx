import type { Metadata } from "next";
import { ShieldAlert } from "lucide-react";
import ServicePageLayout from "@/components/ui/ServicePageLayout";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema, generateWebPageSchema, generateFAQSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Burglary Repairs Kennington | Emergency SE11",
  description:
    "Burglary repairs in Kennington SE11. Emergency boarding up, damage repair, lock upgrade after break-in. Call 07700 900000. Same-day response. Fully insured.",
  alternates: {
    canonical: "/services/burglary-repairs",
    languages: {
      "en-GB": "https://lockstarlocksmithkennington.com/services/burglary-repairs",
      "en": "https://lockstarlocksmithkennington.com/services/burglary-repairs",
    },
  },
  openGraph: {
    title: "Burglary Repairs Kennington | Emergency SE11",
    description:
      "Burglary repairs in Kennington SE11. Emergency boarding up, damage repair, lock upgrade after break-in. Call 07700 900000. Same-day response. Fully insured.",
    url: "https://lockstarlocksmithkennington.com/services/burglary-repairs",
  },
};

export default function BurglaryRepairsPage() {
  const webPageSchema = generateWebPageSchema({
    title: "Burglary Repairs Kennington | Emergency SE11",
    description:
      "Burglary repairs in Kennington SE11. Emergency boarding up, damage repair, lock upgrade after break-in. Call 07700 900000. Same-day response. Fully insured.",
    url: "/services/burglary-repairs",
    datePublished: "2025-01-15",
    dateModified: "2025-06-01",
  });
  const serviceSchema = generateServiceSchema(
    "Burglary Repairs Kennington",
    "Emergency burglary repair service in Kennington SE11. Board-up, damage repair and upgraded lock replacement after a break-in.",
    "burglary-repairs"
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Services", href: "/services" },
    { name: "Burglary Repairs", href: "/services/burglary-repairs" },
  ]);
  const faqSchema = generateFAQSchema([
    { question: "What should I do immediately after a burglary in Kennington?", answer: "If you feel unsafe, call 999. Secure a crime reference number, do not touch anything until police attend, then call Lockstar for emergency boarding up and lock replacement." },
    { question: "How quickly can you arrive after a break-in in SE11?", answer: "We aim to arrive within 30 minutes for emergency post-burglary response across SE11 and surrounding areas." },
    { question: "Do you provide emergency boarding up after a break-in?", answer: "Yes. We provide immediate emergency boarding up to secure your property while permanent repairs are arranged." },
    { question: "Can you repair a damaged door frame after a burglary?", answer: "Yes. We carry out door frame repairs and reinforcement as part of our post-burglary repair service." },
    { question: "What locks do you fit after a break-in to prevent reoccurrence?", answer: "We always upgrade to anti-snap, BS3621-approved cylinders and recommend door frame reinforcement hardware after a burglary." },
    { question: "Can I claim on my insurance for locksmith costs after a burglary?", answer: "In most cases yes. We provide fully itemised invoices and photographic evidence suitable for insurance claims." },
    { question: "Is it safe to re-enter my property after a burglary?", answer: "Not until it has been properly secured. We make your property secure before we leave so you can return safely." },
    { question: "Can you do the boarding up and lock replacement on the same visit?", answer: "Yes. We aim to complete all emergency security work in a single visit so you are not left vulnerable." },
    { question: "What reinforcement do you fit to prevent future break-ins?", answer: "We fit anti-snap cylinders, steel door frame reinforcement plates, hinge bolt sets, and security keep hardware." },
    { question: "How much do burglary repair services cost in Kennington?", answer: "Emergency boarding up from £89. Lock replacement from £89. Full post-burglary security package from £199. Fixed price quoted before work." },
  ], "/services/burglary-repairs");

  return (
    <>
      <SchemaMarkup schema={faqSchema} />
      <SchemaMarkup schema={webPageSchema} />
      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />
      <ServicePageLayout
        Icon={ShieldAlert}
        hero={{
          badge: "Burglary Repairs — Emergency Response",
          title: "Burglary Repairs",
          titleHighlight: "Kennington",
          description:
            "Suffered a break-in? Call Lockstar immediately. We provide emergency boarding up, temporary and permanent security, and full door and lock repair after burglary — across Kennington and SE11.",
          features: [
            "Emergency same-day response",
            "Boarding up & temporary security",
            "Permanent lock replacement",
            "Door frame repair",
            "Security upgrade advice",
            "Insurance report assistance",
          ],
        }}
        mainContent={{
          heading: "Emergency Burglary Repair in Kennington",
          body: [
            "Discovering that your home or business has been broken into is one of the most distressing experiences possible. After calling the police (999 if in progress, 101 for a completed burglary), your next call should be to Lockstar Locksmith Kennington. We provide emergency post-burglary repair across SE11 and will make your property secure on the same day.",
            "In the immediate aftermath of a break-in, your priority is to secure the property as quickly as possible. If your front or back door has been forced, a window smashed, or a lock defeated, we provide emergency boarding up and temporary security measures to protect the property overnight while permanent repairs are arranged.",
            "We then carry out permanent repairs — replacing damaged locks, repairing or replacing broken door frames and keeps, fitting anti-jemmy bolts, and upgrading security to help prevent a repeat attack. We will also provide a written report of all work carried out, which can assist with your insurance claim.",
            "Burglars typically gain entry through weak euro cylinders (snapping them), poorly fitted locks, or vulnerable door frames. After making your property secure, we strongly recommend a security review to identify and address any remaining vulnerabilities — and we offer this as part of our post-burglary service.",
          ],
        }}
        features={[
          {
            title: "Emergency Boarding Up",
            description: "Immediate boarding up of damaged doors and windows to secure the property before permanent repairs can be made.",
          },
          {
            title: "Forced Entry Door Repair",
            description: "Repair and strengthening of door frames, keeps, and hinges damaged during a forced-entry break-in.",
          },
          {
            title: "High-Security Lock Upgrade",
            description: "After a burglary, we strongly recommend upgrading to anti-snap, anti-drill, anti-pick locks — we fit these on the same visit.",
          },
          {
            title: "Door Frame Reinforcement",
            description: "Steel door frame reinforcement strips, hinge bolts, and security keeps fitted to prevent future forced entry attempts.",
          },
          {
            title: "Insurance Documentation",
            description: "We provide detailed written reports of all damage and work carried out, supporting your home or business insurance claim.",
          },
          {
            title: "Post-Burglary Security Survey",
            description: "Comprehensive review of your property's security following a break-in — identifying all remaining vulnerabilities and recommending improvements.",
          },
        ]}
        breadcrumb={[
          { name: "Services", href: "/services" },
          { name: "Burglary Repairs", href: "/services/burglary-repairs" },
        ]}
        relatedServices={[
          { label: "Emergency Locksmith", href: "/services/emergency-locksmith" },
          { label: "Lock Replacement", href: "/services/lock-replacement" },
          { label: "Security Upgrades", href: "/services/security-upgrades" },
          { label: "UPVC Door Repairs", href: "/services/upvc-door-repairs" },
        ]}
      />
    </>
  );
}
