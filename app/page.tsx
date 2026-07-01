import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import TrustBadges from "@/components/home/TrustBadges";
import ReviewShowcase from "@/components/home/ReviewShowcase";
import EmergencyServices from "@/components/home/EmergencyServices";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServiceAreas from "@/components/home/ServiceAreas";
import ProcessSection from "@/components/home/ProcessSection";
import Testimonials from "@/components/home/Testimonials";
import FAQSection from "@/components/home/FAQSection";
import ContactCTA from "@/components/home/ContactCTA";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import { generateFAQSchema, generateWebPageSchema } from "@/lib/schema";
import { FAQS, BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Lockstar Locksmith Kennington | 24/7 Emergency Locksmith SE11",
  description:
    "Locked out in Kennington? Call " +
    BUSINESS.phone +
    " — 24/7 emergency locksmith SE11. DBS checked, fully insured, 20–30 min response. No call-out fee.",
  alternates: {
    canonical: "/",
    languages: {
      "en-GB": "https://lockstarlocksmithkennington.com/",
      "en": "https://lockstarlocksmithkennington.com/",
    },
  },
  openGraph: {
    title: "Lockstar Locksmith Kennington | 24/7 Emergency Locksmith SE11",
    description:
      "Locked out in Kennington? 24/7 emergency locksmith — 20–30 min response. DBS checked & insured. Call " +
      BUSINESS.phone,
    url: "https://lockstarlocksmithkennington.com/",
    type: "website",
  },
};

export default function HomePage() {
  const faqSchema = generateFAQSchema([...FAQS]);
  const webPageSchema = generateWebPageSchema({
    title: "Lockstar Locksmith Kennington | 24/7 Emergency Locksmith SE11",
    description:
      "24/7 emergency locksmith in Kennington SE11. DBS checked, fully insured. 20–30 min response.",
    url: "/",
    datePublished: "2025-01-15",
    dateModified: "2025-06-01",
  });

  return (
    <>
      <SchemaMarkup schema={faqSchema} />
      <SchemaMarkup schema={webPageSchema} />
      <HeroSection />
      <TrustBadges />
      <EmergencyServices />
      <ServicesGrid />
      <ReviewShowcase />
      <WhyChooseUs />
      <ProcessSection />
      <ServiceAreas />
      <Testimonials />
      <FAQSection />
      <ContactCTA />
    </>
  );
}
