import Link from "next/link";
import {
  Zap,
  Home,
  Building2,
  Car,
  RotateCcw,
  Wrench,
  Plus,
  DoorOpen,
  KeyRound,
  ShieldAlert,
  Cpu,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Emergency Locksmith",
    description: "24/7 emergency lockout response across Kennington and SE11. Average arrival in 20–30 minutes.",
    href: "/services/emergency-locksmith",
    highlight: true,
  },
  {
    icon: Home,
    title: "Residential Locksmith",
    description: "Home lock fitting, replacement, and repair for houses and flats across Kennington.",
    href: "/services/residential-locksmith",
    highlight: false,
  },
  {
    icon: Building2,
    title: "Commercial Locksmith",
    description: "Business security solutions — master key systems, access control, and commercial locks.",
    href: "/services/commercial-locksmith",
    highlight: false,
  },
  {
    icon: Car,
    title: "Auto Locksmith",
    description: "Car lockout, key cutting, and transponder key programming for all makes and models.",
    href: "/services/auto-locksmith",
    highlight: false,
  },
  {
    icon: RotateCcw,
    title: "Lock Replacement",
    description: "Yale, Mul-T-Lock, ERA, Banham — we supply and fit quality replacement locks same day.",
    href: "/services/lock-replacement",
    highlight: false,
  },
  {
    icon: Wrench,
    title: "Lock Repair",
    description: "Stiff, faulty, or damaged locks repaired quickly and cost-effectively.",
    href: "/services/lock-repair",
    highlight: false,
  },
  {
    icon: Plus,
    title: "Lock Installation",
    description: "New lock fitting for doors, windows, and additional security on existing hardware.",
    href: "/services/lock-installation",
    highlight: false,
  },
  {
    icon: DoorOpen,
    title: "UPVC Door Repairs",
    description: "UPVC multipoint lock mechanisms, handles, and barrel replacements across SE11.",
    href: "/services/upvc-door-repairs",
    highlight: false,
  },
  {
    icon: KeyRound,
    title: "Lockout Services",
    description: "Professional non-destructive entry if you've lost keys, broken a key or been locked out.",
    href: "/services/lockout-services",
    highlight: false,
  },
  {
    icon: ShieldAlert,
    title: "Burglary Repairs",
    description: "Emergency boarding up, damage repair, and upgraded security after a break-in.",
    href: "/services/burglary-repairs",
    highlight: false,
  },
  {
    icon: Cpu,
    title: "Smart Locks",
    description: "Keypad, Bluetooth, and app-controlled smart lock installation and programming.",
    href: "/services/smart-locks",
    highlight: false,
  },
  {
    icon: ShieldCheck,
    title: "Security Upgrades",
    description: "Security surveys and upgrades — door reinforcement, high-security locks, window locks.",
    href: "/services/security-upgrades",
    highlight: false,
  },
];

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-white" aria-label="All locksmith services">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-3">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
            Full-Range Locksmith Services
            <br />
            <span className="text-blue-700">in Kennington</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            From emergency lockouts to full security upgrades — Lockstar Locksmith
            Kennington covers every locksmith need for homes and businesses in SE11.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className={`group relative flex flex-col p-5 rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                  service.highlight
                    ? "bg-blue-700 border-blue-600 text-white hover:bg-blue-800"
                    : "bg-white border-slate-200 hover:border-blue-200 hover:bg-blue-50"
                }`}
              >
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-xl mb-4 ${
                    service.highlight
                      ? "bg-white/20"
                      : "bg-blue-50 group-hover:bg-blue-100"
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 ${
                      service.highlight ? "text-white" : "text-blue-700"
                    }`}
                  />
                </div>
                <h3
                  className={`font-bold text-base mb-2 ${
                    service.highlight ? "text-white" : "text-slate-900"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed flex-1 ${
                    service.highlight ? "text-blue-100" : "text-slate-600"
                  }`}
                >
                  {service.description}
                </p>
                <div
                  className={`flex items-center gap-1.5 text-sm font-semibold mt-4 group-hover:gap-2.5 transition-all duration-200 ${
                    service.highlight ? "text-blue-200" : "text-blue-700"
                  }`}
                >
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
