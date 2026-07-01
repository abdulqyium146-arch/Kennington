import { Shield, Clock, Star, CheckCircle, Phone, Award } from "lucide-react";

const badges = [
  {
    icon: Clock,
    title: "20–30 Min Response",
    description: "Fast local callout across Kennington and SE11",
    color: "bg-blue-50 text-blue-700 border-blue-200",
    iconColor: "bg-blue-700",
  },
  {
    icon: Shield,
    title: "DBS Checked",
    description: "All technicians are police-vetted and fully insured",
    color: "bg-green-50 text-green-700 border-green-200",
    iconColor: "bg-green-700",
  },
  {
    icon: Star,
    title: "4.9★ Google Rating",
    description: "Over 247 five-star reviews from local customers",
    color: "bg-amber-50 text-amber-700 border-amber-200",
    iconColor: "bg-amber-600",
  },
  {
    icon: CheckCircle,
    title: "No Hidden Charges",
    description: "Fixed price quoted upfront — what we quote is what you pay",
    color: "bg-purple-50 text-purple-700 border-purple-200",
    iconColor: "bg-purple-700",
  },
  {
    icon: Phone,
    title: "24/7 Emergency",
    description: "Available around the clock including bank holidays",
    color: "bg-red-50 text-red-700 border-red-200",
    iconColor: "bg-red-600",
  },
  {
    icon: Award,
    title: "9 Years Experience",
    description: "Established local locksmith serving Kennington since 2015",
    color: "bg-slate-50 text-slate-700 border-slate-200",
    iconColor: "bg-slate-700",
  },
];

export default function TrustBadges() {
  return (
    <section className="py-12 bg-white border-b border-slate-100" aria-label="Trust signals">
      <div className="container-main">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.title}
                className={`flex flex-col items-center text-center p-4 rounded-2xl border ${badge.color} transition-shadow duration-200 hover:shadow-md`}
              >
                <div
                  className={`flex items-center justify-center w-10 h-10 ${badge.iconColor} rounded-xl mb-3`}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <p className="font-bold text-sm leading-tight mb-1">{badge.title}</p>
                <p className="text-xs opacity-75 leading-snug">{badge.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
