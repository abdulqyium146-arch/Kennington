import { Shield, Clock, Star, CheckCircle, Phone, Award } from "lucide-react";

const badges = [
  {
    icon: Clock,
    title: "20–30 Min Response",
    description: "Fast local callout — SE11",
    accent: "text-blue-700",
    bg: "bg-blue-50",
    iconBg: "bg-blue-700",
  },
  {
    icon: Shield,
    title: "DBS Checked",
    description: "Police-vetted & insured",
    accent: "text-emerald-700",
    bg: "bg-emerald-50",
    iconBg: "bg-emerald-700",
  },
  {
    icon: Star,
    title: "4.9★ on Google",
    description: "247+ verified reviews",
    accent: "text-amber-700",
    bg: "bg-amber-50",
    iconBg: "bg-amber-600",
  },
  {
    icon: CheckCircle,
    title: "No Hidden Charges",
    description: "Fixed price, always",
    accent: "text-violet-700",
    bg: "bg-violet-50",
    iconBg: "bg-violet-700",
  },
  {
    icon: Phone,
    title: "24/7 Emergency",
    description: "Including bank holidays",
    accent: "text-red-700",
    bg: "bg-red-50",
    iconBg: "bg-red-600",
  },
  {
    icon: Award,
    title: "9 Years Experience",
    description: "Kennington's trusted local",
    accent: "text-slate-700",
    bg: "bg-slate-50",
    iconBg: "bg-slate-700",
  },
];

export default function TrustBadges() {
  return (
    <section
      className="py-10 bg-white border-b border-slate-100"
      aria-label="Trust signals"
    >
      <div className="container-main">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.title}
                className={`flex flex-col items-center text-center px-3 py-4 rounded-xl ${badge.bg} transition-all duration-150 hover:shadow-sm`}
              >
                <div
                  className={`flex items-center justify-center w-9 h-9 ${badge.iconBg} rounded-lg mb-2.5`}
                >
                  <Icon className="h-4.5 w-4.5 text-white" aria-hidden="true" />
                </div>
                <p className={`font-bold text-xs leading-tight mb-0.5 ${badge.accent}`}>
                  {badge.title}
                </p>
                <p className="text-xs text-slate-500 leading-snug">{badge.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
