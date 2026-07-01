import type { Metadata } from "next";
import Link from "next/link";
import {
  Zap, Home, Building2, Car, RotateCcw, Wrench, Plus, DoorOpen,
  KeyRound, ShieldAlert, Cpu, ShieldCheck, ArrowRight, Phone,
} from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Locksmith Services Kennington | Full Range SE11",
  description:
    "Complete range of locksmith services in Kennington SE11 — emergency lockouts, lock replacement, UPVC repairs, burglary repairs, smart locks and more. Call " +
    BUSINESS.phone,
  alternates: { canonical: "/services" },
};

const services = [
  { icon: Zap, title: "Emergency Locksmith", href: "/services/emergency-locksmith", description: "24/7 emergency lockout response — 20–30 min average arrival in Kennington SE11.", highlight: true },
  { icon: Home, title: "Residential Locksmith", href: "/services/residential-locksmith", description: "Home lock fitting, replacement and repair for houses and flats." },
  { icon: Building2, title: "Commercial Locksmith", href: "/services/commercial-locksmith", description: "Business security — master key systems, access control, and commercial locks." },
  { icon: Car, title: "Auto Locksmith", href: "/services/auto-locksmith", description: "Car lockout, key cutting, and transponder key programming." },
  { icon: RotateCcw, title: "Lock Replacement", href: "/services/lock-replacement", description: "Quality British Standard locks supplied and fitted same day." },
  { icon: Wrench, title: "Lock Repair", href: "/services/lock-repair", description: "Stiff, faulty, or damaged locks diagnosed and repaired quickly." },
  { icon: Plus, title: "Lock Installation", href: "/services/lock-installation", description: "New lock fitting for all door types — BS3621 and high-security options." },
  { icon: DoorOpen, title: "UPVC Door Repairs", href: "/services/upvc-door-repairs", description: "Multipoint lock mechanisms, handles, and cylinders replaced." },
  { icon: KeyRound, title: "Lockout Services", href: "/services/lockout-services", description: "Non-destructive entry for home, office, and vehicle lockouts." },
  { icon: ShieldAlert, title: "Burglary Repairs", href: "/services/burglary-repairs", description: "Emergency boarding up, damage repair, and upgraded locks after break-in." },
  { icon: Cpu, title: "Smart Locks", href: "/services/smart-locks", description: "Keypad, Bluetooth, and app-controlled smart lock installation." },
  { icon: ShieldCheck, title: "Security Upgrades", href: "/services/security-upgrades", description: "Anti-snap cylinders, door reinforcement, and security surveys." },
];

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Services", href: "/services" },
  ]);

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />

      {/* Hero */}
      <section className="gradient-hero text-white py-16 md:py-20">
        <div className="container-main">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-5">
              Locksmith Services
              <br />
              <span className="text-blue-300">Kennington SE11</span>
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              Full-range locksmith services for homes and businesses across Kennington
              and SE11. Emergency response, planned security work, and everything in between.
            </p>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-7 py-4 rounded-xl font-black text-lg shadow-cta transition-all duration-200"
            >
              <Phone className="h-5 w-5" />
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className={`group flex flex-col p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                    "highlight" in service && service.highlight
                      ? "bg-blue-700 border-blue-600 text-white hover:bg-blue-800"
                      : "bg-white border-slate-200 hover:border-blue-200 hover:bg-blue-50"
                  }`}
                >
                  <div className={`flex items-center justify-center w-11 h-11 rounded-xl mb-4 ${"highlight" in service && service.highlight ? "bg-white/20" : "bg-blue-50 group-hover:bg-blue-100"}`}>
                    <Icon className={`h-6 w-6 ${"highlight" in service && service.highlight ? "text-white" : "text-blue-700"}`} />
                  </div>
                  <h2 className={`font-bold text-base mb-2 ${"highlight" in service && service.highlight ? "text-white" : "text-slate-900"}`}>
                    {service.title}
                  </h2>
                  <p className={`text-sm leading-relaxed flex-1 ${"highlight" in service && service.highlight ? "text-blue-100" : "text-slate-600"}`}>
                    {service.description}
                  </p>
                  <div className={`flex items-center gap-1.5 text-sm font-semibold mt-4 group-hover:gap-2.5 transition-all duration-200 ${"highlight" in service && service.highlight ? "text-blue-200" : "text-blue-700"}`}>
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-slate-900 text-white text-center">
        <div className="container-main">
          <h2 className="text-2xl font-black mb-2">Need a Locksmith in Kennington?</h2>
          <p className="text-slate-400 mb-6">24/7 emergency response — no call-out fee — fixed pricing</p>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-black text-lg shadow-cta transition-all duration-200"
          >
            <Phone className="h-5 w-5" />
            Call {BUSINESS.phone}
          </a>
        </div>
      </section>
    </>
  );
}
