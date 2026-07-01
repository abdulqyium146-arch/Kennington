import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Clock,
  Star,
  CheckCircle2,
  Phone,
  Users,
  Award,
  MapPin,
} from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Lockstar Locksmith Kennington | Local DBS Checked Locksmiths",
  description:
    "Learn about Lockstar Locksmith Kennington — your trusted local locksmith in SE11. DBS checked, fully insured, serving Kennington since 2015. Call " +
    BUSINESS.phone,
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    description:
      "We never charge what we haven't quoted. Fixed prices, honest advice, and no upselling — just good, fair locksmith work.",
  },
  {
    icon: Clock,
    title: "Genuine Urgency",
    description:
      "We understand that a lockout is stressful. We treat every call as urgent and genuinely aim to arrive as fast as possible.",
  },
  {
    icon: Star,
    title: "Quality Workmanship",
    description:
      "We take pride in the quality of our work — professionally installed, correctly fitted, and checked before we leave.",
  },
  {
    icon: MapPin,
    title: "Locally Rooted",
    description:
      "We live and work in Kennington. We know the streets, the properties, and the community — and we care about our reputation here.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero text-white py-16 md:py-24">
        <div className="container-main">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-6">
              About{" "}
              <span className="text-blue-300">Lockstar Locksmith</span>
              <br />
              Kennington
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              We&apos;re a local Kennington locksmith business built on trust, quality,
              and fair pricing. Since 2015, we&apos;ve been the first call for hundreds
              of SE11 residents and businesses when they need a locksmith they can rely on.
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

      {/* Stats */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container-main">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: `${BUSINESS.socialProof.yearsTrading}+`, label: "Years Serving Kennington" },
              { value: `${BUSINESS.socialProof.reviewCount}+`, label: "5-Star Google Reviews" },
              { value: `${BUSINESS.socialProof.jobsCompleted}+`, label: "Jobs Completed" },
              { value: "24/7", label: "Emergency Cover" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-black text-blue-700 mb-1">{stat.value}</p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-5">
                A Local Locksmith You Can{" "}
                <span className="text-blue-700">Actually Trust</span>
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Lockstar Locksmith Kennington was founded with a simple goal: to be
                  the locksmith that Kennington residents could call at any time of day or
                  night and know they would get an honest, professional, and fairly priced
                  service.
                </p>
                <p>
                  The locksmith industry has a reputation — rightly — for some operators
                  who overcharge, use bait-and-switch pricing, or perform unnecessary work.
                  We built Lockstar specifically to be the opposite: transparent pricing
                  quoted before work begins, honest advice, and no hidden charges whatsoever.
                </p>
                <p>
                  Every one of our locksmiths is DBS checked, fully insured, and trained
                  to a high professional standard. We invest in quality tools and carry
                  quality replacement parts and locks. We aim to complete every job on the
                  first visit, correctly, and to a standard we&apos;re proud of.
                </p>
                <p>
                  Our {BUSINESS.socialProof.reviewCount}+ five-star Google reviews from
                  Kennington residents and businesses are the best testament to our approach.
                  We don&apos;t ask for reviews — we earn them.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-xl mb-3">
                      <Icon className="h-5 w-5 text-blue-700" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1.5">{value.title}</h3>
                    <p className="text-slate-600 text-xs leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-padding gradient-section">
        <div className="container-main">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-slate-900 mb-3">
              Credentials & Standards
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our locksmiths meet the highest professional and personal standards.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Shield,
                title: "DBS Checked",
                description: "All technicians hold a current Disclosure and Barring Service certificate — the gold standard for security screening.",
              },
              {
                icon: Award,
                title: "Fully Insured",
                description: "Public liability insurance cover on every job. Your property and contents are fully protected.",
              },
              {
                icon: Users,
                title: "Professional Training",
                description: "Trained to MLA (Master Locksmiths Association) standards and regularly updated on the latest lock technology.",
              },
              {
                icon: CheckCircle2,
                title: "Transparent Pricing",
                description: "Fixed price quoted before work begins. What we quote is what you pay — always.",
              },
            ].map((cred) => {
              const Icon = cred.icon;
              return (
                <div key={cred.title} className="bg-white border border-slate-200 rounded-2xl p-6 text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-700 rounded-xl mx-auto mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{cred.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{cred.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container-main text-center">
          <h2 className="text-3xl font-black mb-3">Ready to Call Us?</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            Whether it&apos;s an emergency lockout or a planned security upgrade — Lockstar
            Locksmith Kennington is here to help. Call now, 24 hours a day.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-black text-lg shadow-cta transition-all duration-200"
            >
              <Phone className="h-5 w-5" />
              Call {BUSINESS.phone}
            </a>
            <Link
              href="/services/emergency-locksmith"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
