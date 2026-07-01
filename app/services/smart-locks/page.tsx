import type { Metadata } from "next";
import { Cpu } from "lucide-react";
import ServicePageLayout from "@/components/ui/ServicePageLayout";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Smart Locks Kennington | Keypad & App Lock Installation SE11",
  description:
    "Smart lock installation in Kennington SE11. Keypad, Bluetooth, and app-controlled locks installed. Call " +
    BUSINESS.phone +
    ". All major brands. Expert fitting.",
  alternates: { canonical: "/services/smart-locks" },
};

export default function SmartLocksPage() {
  const serviceSchema = generateServiceSchema(
    "Smart Locks Kennington",
    "Smart lock installation service in Kennington SE11. Keypad, Bluetooth, and app-controlled smart locks fitted by experts.",
    "smart-locks"
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Services", href: "/services" },
    { name: "Smart Locks", href: "/services/smart-locks" },
  ]);

  return (
    <>
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
