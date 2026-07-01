import type { Metadata } from "next";
import { Zap } from "lucide-react";
import ServicePageLayout from "@/components/ui/ServicePageLayout";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema, generateWebPageSchema, generateFAQSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Emergency Locksmith Kennington | 24/7 — 20 Min",
  description:
    "Locked out in Kennington SE11? Call 07984 547185 now. Emergency locksmith — 20–30 min response, 24/7, DBS checked, no call-out fee. Fixed price quoted.",
  alternates: {
    canonical: "/services/emergency-locksmith",
    languages: {
      "en-GB": "https://lockstarlocksmithkennington.com/services/emergency-locksmith",
      "en": "https://lockstarlocksmithkennington.com/services/emergency-locksmith",
    },
  },
  openGraph: {
    title: "Emergency Locksmith Kennington | 24/7 — 20 Min",
    description:
      "Locked out in Kennington SE11? Call 07984 547185 now. Emergency locksmith — 20–30 min response, 24/7, DBS checked, no call-out fee. Fixed price quoted.",
    url: "https://lockstarlocksmithkennington.com/services/emergency-locksmith",
  },
};

export default function EmergencyLocksmithPage() {
  const webPageSchema = generateWebPageSchema({
    title: "Emergency Locksmith Kennington | 24/7 — 20 Min",
    description:
      "Locked out in Kennington SE11? Call 07984 547185 now. Emergency locksmith — 20–30 min response, 24/7, DBS checked, no call-out fee. Fixed price quoted.",
    url: "/services/emergency-locksmith",
    datePublished: "2025-01-15",
    dateModified: "2025-06-01",
  });
  const serviceSchema = generateServiceSchema(
    "Emergency Locksmith Kennington",
    "24/7 emergency locksmith service in Kennington SE11. Locked out or need urgent lock repair? We respond in 20–30 minutes.",
    "emergency-locksmith"
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Services", href: "/services" },
    { name: "Emergency Locksmith", href: "/services/emergency-locksmith" },
  ]);
  const faqSchema = generateFAQSchema([
    { question: "How quickly can a locksmith reach Kennington?", answer: "Our average response time across SE11 is 20–30 minutes from your call, 24 hours a day including bank holidays." },
    { question: "How much does an emergency locksmith cost in SE11?", answer: "Prices start from £69 for a standard lockout. A fixed price is quoted before any work begins — no hidden fees, no call-out charge." },
    { question: "Is there a call-out fee for an emergency locksmith in Kennington?", answer: "No. Lockstar Locksmith Kennington charges no call-out fee. The price quoted before work starts is the price you pay." },
    { question: "Do you work on Christmas Day and bank holidays?", answer: "Yes. We operate 24/7/365 including Christmas Day and all UK bank holidays at no extra charge." },
    { question: "Can a locksmith open my door without drilling?", answer: "Yes, in the vast majority of cases. We use non-destructive picking and decoding techniques and only drill as a last resort after explaining the situation." },
    { question: "What is non-destructive entry?", answer: "Non-destructive entry is the use of professional lock-picking and decoding techniques to open a locked door without damaging the lock or door frame." },
    { question: "My key broke in the lock — what should I do?", answer: "Call us immediately. We extract broken keys using specialist tools and replace the cylinder if required, usually without drilling." },
    { question: "Are your locksmiths DBS checked?", answer: "Yes. Every Lockstar technician holds a current DBS (Disclosure and Barring Service) certificate and carries public liability insurance." },
    { question: "Can you open a UPVC door?", answer: "Yes. We work on all UPVC multipoint locking systems and UPVC cylinders." },
    { question: "What should I do after a burglary in Kennington?", answer: "Call 999 first if you feel unsafe. Once safe, call Lockstar for emergency boarding up, temporary security, and same-visit permanent lock replacement." },
  ], "/services/emergency-locksmith");

  return (
    <>
      <SchemaMarkup schema={faqSchema} />
      <SchemaMarkup schema={webPageSchema} />
      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />
      <ServicePageLayout
        Icon={Zap}
        hero={{
          badge: "24/7 Emergency — Kennington SE11",
          title: "Emergency Locksmith",
          titleHighlight: "Kennington",
          description:
            "Locked out of your home or office in Kennington? Our local emergency locksmiths respond in 20–30 minutes, 24 hours a day, 365 days a year. No call-out fee. Fixed prices quoted before we start.",
          features: [
            "20–30 minute average response",
            "Available 24/7 including bank holidays",
            "No call-out fee — ever",
            "DBS checked locksmiths",
            "Non-destructive entry wherever possible",
            "Fixed price quoted upfront",
          ],
        }}
        mainContent={{
          heading: "Your Local Emergency Locksmith in Kennington",
          body: [
            "Being locked out of your home, flat, or workplace is stressful at any time of day or night. Lockstar Locksmith Kennington provides a genuine 24/7 emergency locksmith service across SE11 and surrounding areas — with an average response time of just 20–30 minutes.",
            "Unlike national call centres that dispatch locksmiths from far-away depots, our technicians are based locally in Kennington. When you call us, help is genuinely nearby. We cover Kennington Road, Oval, Vauxhall, Stockwell, Lambeth, Elephant and Castle, and all surrounding postcodes.",
            "Our emergency locksmiths arrive fully equipped to handle virtually any lock type — from standard Yale deadlocks and Chubb mortice locks to modern UPVC multipoint systems and high-security Mul-T-Lock and Banham cylinders.",
            "We prioritise non-destructive entry in every case. In the vast majority of lockouts, we can open your door without drilling or damaging the lock, saving you the cost of replacement. If a lock cannot be saved, we carry a comprehensive range of replacement locks and can fit a new one on the same visit.",
            "Our pricing is fully transparent. We provide a firm fixed quote before any work begins — no hidden charges, no inflated out-of-hours rates, no surprises on the invoice. The price we quote is the price you pay.",
          ],
        }}
        features={[
          {
            title: "Residential Emergency Lockouts",
            description:
              "Lost your keys, broken a key in the lock, or locked yourself out? We open homes, flats, and apartments across Kennington without unnecessary damage.",
          },
          {
            title: "Commercial Emergency Lockouts",
            description:
              "Office or business premises lockout? We handle commercial emergencies with priority response for business customers across SE11.",
          },
          {
            title: "Broken Key Extraction",
            description:
              "Key snapped in the lock? Our technicians can extract broken keys cleanly and replace the cylinder if required, often without needing to drill.",
          },
          {
            title: "Lock-Picking & Non-Destructive Entry",
            description:
              "Trained in professional non-destructive entry techniques, we open most standard and high-security locks without causing damage to the door or frame.",
          },
          {
            title: "Emergency Lock Replacement",
            description:
              "After gaining entry, we can replace your lock on the same visit with a quality British Standard, BS3621-approved replacement.",
          },
          {
            title: "Post-Burglary Emergency Response",
            description:
              "Break-in overnight? We provide emergency boarding up, temporary security, and permanent lock replacement — all on the same emergency visit.",
          },
        ]}
        breadcrumb={[
          { name: "Services", href: "/services" },
          { name: "Emergency Locksmith", href: "/services/emergency-locksmith" },
        ]}
        relatedServices={[
          { label: "Lockout Services", href: "/services/lockout-services" },
          { label: "Burglary Repairs", href: "/services/burglary-repairs" },
          { label: "Lock Replacement", href: "/services/lock-replacement" },
          { label: "Residential Locksmith", href: "/services/residential-locksmith" },
          { label: "UPVC Door Repairs", href: "/services/upvc-door-repairs" },
        ]}
      />
    </>
  );
}
