import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import ServicePageLayout from "@/components/ui/ServicePageLayout";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema, generateWebPageSchema, generateFAQSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Commercial Locksmith Kennington | Business SE11",
  description:
    "Commercial locksmith in Kennington SE11. Master key systems, access control, office lockouts. Call 07700 900000. 24/7 business security. DBS checked.",
  alternates: {
    canonical: "/services/commercial-locksmith",
    languages: {
      "en-GB": "https://lockstarlocksmithkennington.com/services/commercial-locksmith",
      "en": "https://lockstarlocksmithkennington.com/services/commercial-locksmith",
    },
  },
  openGraph: {
    title: "Commercial Locksmith Kennington | Business SE11",
    description:
      "Commercial locksmith in Kennington SE11. Master key systems, access control, office lockouts. Call 07700 900000. 24/7 business security. DBS checked.",
    url: "https://lockstarlocksmithkennington.com/services/commercial-locksmith",
  },
};

export default function CommercialLocksmithPage() {
  const webPageSchema = generateWebPageSchema({
    title: "Commercial Locksmith Kennington | Business SE11",
    description:
      "Commercial locksmith in Kennington SE11. Master key systems, access control, office lockouts. Call 07700 900000. 24/7 business security. DBS checked.",
    url: "/services/commercial-locksmith",
    datePublished: "2025-01-15",
    dateModified: "2025-06-01",
  });
  const serviceSchema = generateServiceSchema(
    "Commercial Locksmith Kennington",
    "Commercial locksmith services in Kennington SE11. Office lockouts, master key systems, access control, and business security.",
    "commercial-locksmith"
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Services", href: "/services" },
    { name: "Commercial Locksmith", href: "/services/commercial-locksmith" },
  ]);
  const faqSchema = generateFAQSchema([
    { question: "What types of commercial premises do you service in Kennington?", answer: "We service offices, retail stores, restaurants, warehouses, schools, healthcare premises, and letting agencies across SE11 and Greater London." },
    { question: "Can you install a master key system for our office?", answer: "Yes. We design and install bespoke master key and grand master key systems tailored to your premises access requirements." },
    { question: "What access control systems do you install?", answer: "We install keypad, fob, and smart card access control systems from leading commercial security brands." },
    { question: "How quickly can you respond to a commercial lockout in SE11?", answer: "We offer priority emergency response for business clients targeting 20–30 minutes for SE11 postcodes." },
    { question: "Do you offer maintenance contracts for commercial premises?", answer: "Yes. We provide planned maintenance contracts with priority emergency callout and a dedicated account manager." },
    { question: "What high-security locks do you recommend for commercial use?", answer: "Abloy, Mul-T-Lock, and ASSA ABLOY commercial-grade cylinders provide maximum pick, drill, and snap resistance for business premises." },
    { question: "Do you carry out security audits for businesses?", answer: "Yes. We provide comprehensive commercial security audits identifying vulnerabilities with a prioritised improvement plan." },
    { question: "Can you change locks on a commercial premises at the end of a lease?", answer: "Yes. Commercial tenant lock changes are carried out same-day across SE11 and Greater London." },
    { question: "How do I maintain key control across a multi-occupancy building?", answer: "A professionally designed master key system is the most effective solution, allowing granular access control without multiple keys." },
    { question: "How much does a commercial lock change cost in Kennington?", answer: "From £99 for a standard commercial lock change. Fixed price quoted before work begins. Contract pricing available for ongoing clients." },
  ], "/services/commercial-locksmith");

  return (
    <>
      <SchemaMarkup schema={faqSchema} />
      <SchemaMarkup schema={webPageSchema} />
      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />
      <ServicePageLayout
        Icon={Building2}
        hero={{
          badge: "Commercial Services — Kennington & SE11",
          title: "Commercial Locksmith",
          titleHighlight: "Kennington",
          description:
            "Professional locksmith services for offices, retail premises, and commercial buildings across Kennington and SE11. Master key systems, access control, emergency lockouts, and full security solutions.",
          features: [
            "Master key systems designed & installed",
            "Access control installation",
            "Emergency office lockout response",
            "High-security commercial locks",
            "Same-day service for businesses",
            "Keyholding & callout contracts",
          ],
        }}
        mainContent={{
          heading: "Expert Commercial Locksmith in Kennington",
          body: [
            "Lockstar Locksmith Kennington delivers professional commercial locksmith services to businesses across SE11 and Greater London. We understand that security downtime can cost your business — that's why we offer priority emergency response and flexible service contracts for commercial clients.",
            "Our commercial locksmith team works with offices, retail stores, restaurants, warehouses, schools, healthcare premises, and letting agencies across Kennington and the surrounding boroughs. We're experienced with the full range of commercial lock hardware, from high-security euro cylinders to heavy-duty mortice deadlocks and electromagnetic door closers.",
            "For businesses with multiple keys and personnel, we design and install professional master key systems that give you complete control over who can access which areas of your premises. This eliminates the need for multiple keys while maintaining granular access control.",
            "We also offer planned maintenance contracts for commercial clients — regular servicing of all lock hardware, priority emergency response, and a dedicated account manager who understands your specific security requirements.",
          ],
        }}
        features={[
          {
            title: "Master Key Systems",
            description: "Bespoke master key and grand master key systems designed for offices, apartment buildings, and multi-unit commercial premises.",
          },
          {
            title: "Emergency Business Lockouts",
            description: "Can't access your premises? Priority emergency response for commercial clients — we understand that every minute of lockout costs your business.",
          },
          {
            title: "Access Control Systems",
            description: "Keypad, fob, and smart card access control installation and maintenance for offices and commercial premises.",
          },
          {
            title: "High-Security Commercial Locks",
            description: "Commercial-grade lock hardware from Abloy, Mul-T-Lock, and ASSA ABLOY — pick-resistant, drill-resistant, and fully insurer-approved.",
          },
          {
            title: "Tenant Lock Changes",
            description: "Fast lock change service for landlords and letting agents between commercial tenancies — ensuring full key control for new occupants.",
          },
          {
            title: "Security Audits",
            description: "Comprehensive security audit of your commercial premises — identifying vulnerabilities and providing a prioritised action plan.",
          },
        ]}
        breadcrumb={[
          { name: "Services", href: "/services" },
          { name: "Commercial Locksmith", href: "/services/commercial-locksmith" },
        ]}
        relatedServices={[
          { label: "Emergency Locksmith", href: "/services/emergency-locksmith" },
          { label: "Lock Installation", href: "/services/lock-installation" },
          { label: "Security Upgrades", href: "/services/security-upgrades" },
          { label: "Smart Locks", href: "/services/smart-locks" },
          { label: "Burglary Repairs", href: "/services/burglary-repairs" },
        ]}
      />
    </>
  );
}
