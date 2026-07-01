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
import { generateFAQSchema } from "@/lib/schema";
import { FAQS, BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Lockstar Locksmith Kennington | 24/7 Emergency Locksmith SE11",
  description:
    "24/7 emergency locksmith in Kennington, London SE11. Locked out? Call " +
    BUSINESS.phone +
    ". DBS checked, fully insured, 20–30 min response. No call-out fee. Fixed pricing.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lockstar Locksmith Kennington | 24/7 Emergency Locksmith SE11",
    description:
      "24/7 emergency locksmith in Kennington, London SE11. 20–30 min response. DBS checked & insured.",
    url: BUSINESS.domain,
    type: "website",
  },
};

export default function HomePage() {
  const faqSchema = generateFAQSchema([...FAQS]);

  return (
    <>
      <SchemaMarkup schema={faqSchema} />
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
