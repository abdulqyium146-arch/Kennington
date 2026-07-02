import Link from "next/link";
import {
  Zap, Home, Building2, Car, RotateCcw, Wrench,
  Plus, DoorOpen, KeyRound, ShieldAlert, Cpu, ShieldCheck, ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Emergency Locksmith",
    description: "24/7 lockout response across SE11. Average arrival in 20–30 minutes.",
    href: "/services/emergency-locksmith",
    highlight: true,
  },
  {
    icon: Home,
    title: "Residential Locksmith",
    description: "Home lock fitting, replacement, and repair for houses and flats.",
    href: "/services/residential-locksmith",
  },
  {
    icon: Building2,
    title: "Commercial Locksmith",
    description: "Master key systems, access control, and commercial security.",
    href: "/services/commercial-locksmith",
  },
  {
    icon: Car,
    title: "Auto Locksmith",
    description: "Car lockout, key cutting, and transponder programming.",
    href: "/services/auto-locksmith",
  },
  {
    icon: RotateCcw,
    title: "Lock Replacement",
    description: "Yale, Mul-T-Lock, ERA, Banham — quality locks fitted same day.",
    href: "/services/lock-replacement",
  },
  {
    icon: Wrench,
    title: "Lock Repair",
    description: "Stiff, faulty, or damaged locks diagnosed and fixed.",
    href: "/services/lock-repair",
  },
  {
    icon: Plus,
    title: "Lock Installation",
    description: "New lock fitting for all door and window types.",
    href: "/services/lock-installation",
  },
  {
    icon: DoorOpen,
    title: "UPVC Door Repairs",
    description: "Multipoint mechanisms, handles, and cylinders replaced.",
    href: "/services/upvc-door-repairs",
  },
  {
    icon: KeyRound,
    title: "Lockout Services",
    description: "Non-destructive entry — lost keys, broken key, locked out.",
    href: "/services/lockout-services",
  },
  {
    icon: ShieldAlert,
    title: "Burglary Repairs",
    description: "Emergency boarding up and security after a break-in.",
    href: "/services/burglary-repairs",
  },
  {
    icon: Cpu,
    title: "Smart Locks",
    description: "Keypad, Bluetooth, and app-controlled smart lock installation.",
    href: "/services/smart-locks",
  },
  {
    icon: ShieldCheck,
    title: "Security Upgrades",
    description: "Security surveys, door reinforcement, and high-security locks.",
    href: "/services/security-upgrades",
  },
];

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-white" aria-label="All locksmith services">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="eyebrow mb-3">What We Do</p>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Full-Range Locksmith Services
            <br />
            <span className="text-blue-700">in Kennington</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            From emergency lockouts to full security upgrades — every locksmith
            service for homes and businesses across SE11.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {services.map((service) => {
            const Icon = service.icon;
            const isHighlight = !!service.highlight;
            return (
              <Link
                key={service.title}
                href={service.href}
                className={[
                  "group relative flex flex-col p-5 rounded-xl border transition-all duration-150",
                  "hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                  isHighlight
                    ? "bg-blue-700 border-blue-600 text-white hover:bg-blue-800 hover:border-blue-700 shadow-md hover:shadow-lg"
                    : "bg-white border-slate-200 hover:border-blue-200 hover:shadow-card-hover hover:bg-blue-50/40",
                ].join(" ")}
              >
                {/* Icon */}
                <div
                  className={[
                    "flex items-center justify-center w-9 h-9 rounded-lg mb-3.5 transition-colors duration-150",
                    isHighlight ? "bg-white/15" : "bg-blue-50 group-hover:bg-blue-100",
                  ].join(" ")}
                >
                  <Icon
                    className={["h-4.5 w-4.5", isHighlight ? "text-white" : "text-blue-700"].join(" ")}
                    aria-hidden="true"
                  />
                </div>

                {/* Title */}
                <h3
                  className={[
                    "font-bold text-sm mb-1.5",
                    isHighlight ? "text-white" : "text-slate-900",
                  ].join(" ")}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={[
                    "text-xs leading-relaxed flex-1",
                    isHighlight ? "text-blue-100" : "text-slate-500",
                  ].join(" ")}
                >
                  {service.description}
                </p>

                {/* Learn more */}
                <div
                  className={[
                    "flex items-center gap-1 text-xs font-semibold mt-3.5",
                    "group-hover:gap-2 transition-all duration-150",
                    isHighlight ? "text-blue-200 group-hover:text-white" : "text-blue-700",
                  ].join(" ")}
                >
                  Learn more
                  <ArrowRight className="h-3 w-3" aria-hidden="true" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
