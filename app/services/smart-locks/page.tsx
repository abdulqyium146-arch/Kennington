import type { Metadata } from "next";
import { Cpu } from "lucide-react";
import ServicePageLayout from "@/components/ui/ServicePageLayout";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema, generateWebPageSchema, generateFAQSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Smart Locks Kennington | Keypad & App Locks SE11",
  description:
    "Smart lock installation in Kennington SE11. Keypad, Bluetooth & app-controlled locks fitted. All major brands. Call 07984 547185. Expert fitting & setup.",
  alternates: {
    canonical: "/services/smart-locks",
    languages: {
      "en-GB": "https://lockstarlocksmithkennington.com/services/smart-locks",
      "en": "https://lockstarlocksmithkennington.com/services/smart-locks",
    },
  },
  openGraph: {
    title: "Smart Locks Kennington | Keypad & App Locks SE11",
    description:
      "Smart lock installation in Kennington SE11. Keypad, Bluetooth & app-controlled locks fitted. All major brands. Call 07984 547185. Expert fitting & setup.",
    url: "https://lockstarlocksmithkennington.com/services/smart-locks",
  },
};

export default function SmartLocksPage() {
  const webPageSchema = generateWebPageSchema({
    title: "Smart Locks Kennington | Keypad & App Locks SE11",
    description:
      "Smart lock installation in Kennington SE11. Keypad, Bluetooth & app-controlled locks fitted. All major brands. Call 07984 547185. Expert fitting & setup.",
    url: "/services/smart-locks",
    datePublished: "2025-01-15",
    dateModified: "2025-06-01",
  });
  const serviceSchema = generateServiceSchema(
    "Smart Locks Kennington",
    "Smart lock installation service in Kennington SE11. Keypad, Bluetooth, and app-controlled smart locks fitted by experts.",
    "smart-locks"
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Services", href: "/services" },
    { name: "Smart Locks", href: "/services/smart-locks" },
  ]);
  const faqSchema = generateFAQSchema([
    { question: "What smart lock brands do you install in Kennington?", answer: "We install Yale, Nuki, Ultion Smart, Samsung, Schlage, and ASSA ABLOY smart locks across SE11 and Greater London." },
    { question: "Can a smart lock retrofit into my existing door without changes?", answer: "Yes. Smart cylinder replacements such as Nuki and Ultion Smart fit the existing cylinder hole and work with your current door handle and lock body." },
    { question: "Is a smart lock as secure as a traditional lock?", answer: "A quality smart lock from a reputable brand provides equivalent mechanical security plus additional digital access features. We only install smart locks that meet appropriate security standards." },
    { question: "Can I install a smart lock on a UPVC door?", answer: "Yes for most UPVC door types. We assess door compatibility before recommending a specific smart lock product." },
    { question: "How does a smart keypad lock work?", answer: "A keypad lock allows entry via a numeric code, eliminating the need for a physical key. Multiple codes can be set for different users and time-restricted codes can be issued for guests." },
    { question: "Can I manage my smart lock remotely from my phone?", answer: "Yes. App-controlled smart locks allow you to lock and unlock remotely, monitor entry activity, and issue or revoke digital access codes from anywhere." },
    { question: "What happens if the smart lock battery dies?", answer: "Most quality smart locks include a physical key override or an emergency USB power option allowing entry even when the battery is flat." },
    { question: "Are smart locks suitable for Airbnb and short-let properties?", answer: "Yes. Smart locks are ideal for rental properties — they allow time-limited digital access codes for guests, eliminating the need for physical key handover and collection." },
    { question: "What is the battery life of a typical smart lock?", answer: "Most quality smart locks have a battery life of 6–12 months. Low-battery alerts are sent via the app before the battery is depleted." },
    { question: "How much does smart lock installation cost in SE11?", answer: "Smart cylinder upgrades from £149 installed. Full keypad smart locks from £199 installed. Fixed price quoted before work begins." },
  ], "/services/smart-locks");

  return (
    <>
      <SchemaMarkup schema={faqSchema} />
      <SchemaMarkup schema={webPageSchema} />
      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />
      <ServicePageLayout
        Icon={Cpu}
        hero={{
          badge: "Smart Lock Installation — Kennington SE11",
          title: "Smart Lock",
          titleHighlight: "Installation",
          description:
            "Upgrade to a smart lock and control access to your Kennington property from anywhere. Keypad, Bluetooth, and app-controlled smart locks professionally installed and configured by our experienced team.",
          features: [
            "All major smart lock brands",
            "Keypad & fingerprint locks",
            "Bluetooth & app-controlled",
            "Professional installation & setup",
            "Integration with smart home systems",
            "Advice on best product for your door",
          ],
        }}
        mainContent={{
          heading: "Professional Smart Lock Installation in Kennington",
          body: [
            "Smart locks are an increasingly popular choice for homeowners and businesses across Kennington who want convenient, keyless access control with the ability to manage entry remotely. Lockstar Locksmith Kennington provides expert smart lock advice, supply, installation, and configuration.",
            "We work with all major smart lock brands — Yale, Nuki, Ultion, Assa Abloy, Samsung, and Schlage — and can advise on the best product for your door type, budget, and connectivity requirements. Not all smart locks are compatible with all door types, and we always assess your door before recommending a specific product.",
            "Smart locks range from simple keypad cylinder replacements (which replace just the cylinder of your existing lock) through to full smart deadbolt systems with fingerprint readers, Bluetooth smartphone control, and integration with Amazon Alexa, Google Home, and Apple HomeKit.",
            "For landlords and short-let hosts, smart locks are particularly valuable — they allow you to issue time-limited digital access codes to guests or contractors without the need to hand over physical keys. We have extensive experience installing smart locks for Airbnb and holiday let properties across London.",
          ],
        }}
        features={[
          {
            title: "Keypad Locks",
            description: "Code-controlled locks that eliminate the need for physical keys entirely. Ideal for rental properties, offices, and households with multiple users.",
          },
          {
            title: "Bluetooth & App Control",
            description: "Smartphone-controlled locks — lock and unlock your door remotely, receive entry notifications, and issue digital guest codes.",
          },
          {
            title: "Fingerprint Locks",
            description: "Biometric fingerprint locks for the highest level of convenience and personal security. Multiple fingerprints can be registered.",
          },
          {
            title: "Smart Cylinder Upgrades",
            description: "Retrofit smart cylinder replacements (Nuki, Ultion Smart) that work with your existing door lock — the most convenient smart lock upgrade.",
          },
          {
            title: "Airbnb & Rental Installs",
            description: "Smart lock installation for short-let and rental properties — time-limited codes for guests, remote management, and no key handover required.",
          },
          {
            title: "Smart Home Integration",
            description: "Integration with Amazon Alexa, Google Home, and Apple HomeKit — voice control and smart home automation for your locks.",
          },
        ]}
        breadcrumb={[
          { name: "Services", href: "/services" },
          { name: "Smart Locks", href: "/services/smart-locks" },
        ]}
        relatedServices={[
          { label: "Lock Installation", href: "/services/lock-installation" },
          { label: "Security Upgrades", href: "/services/security-upgrades" },
          { label: "Commercial Locksmith", href: "/services/commercial-locksmith" },
          { label: "Lock Replacement", href: "/services/lock-replacement" },
        ]}
      />
    </>
  );
}
