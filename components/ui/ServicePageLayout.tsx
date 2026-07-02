import Link from "next/link";
import { Phone, CheckCircle2, ArrowRight, ChevronRight } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import FAQSection from "@/components/home/FAQSection";
import ReviewShowcase from "@/components/home/ReviewShowcase";
import type { LucideIcon } from "lucide-react";

interface ServiceFeature {
  title: string;
  description: string;
}

interface ServicePageLayoutProps {
  hero: {
    badge: string;
    title: string;
    titleHighlight?: string;
    description: string;
    features: string[];
  };
  Icon: LucideIcon;
  mainContent: {
    heading: string;
    body: string[];
  };
  features: ServiceFeature[];
  breadcrumb: Array<{ name: string; href: string }>;
  relatedServices: Array<{ label: string; href: string }>;
}

export default function ServicePageLayout({
  hero,
  Icon,
  mainContent,
  features,
  breadcrumb,
  relatedServices,
}: ServicePageLayoutProps) {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="bg-slate-50 border-b border-slate-100 py-3" aria-label="Breadcrumb">
        <div className="container-main">
          <ol
            className="flex items-center gap-1.5 text-xs text-slate-500 flex-wrap"
            itemScope
            itemType="https://schema.org/BreadcrumbList"
          >
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link
                href="/"
                className="hover:text-blue-700 transition-colors duration-100"
                itemProp="item"
              >
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            {breadcrumb.map((item, index) => (
              <li
                key={item.href}
                className="flex items-center gap-1.5"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <ChevronRight className="h-3 w-3 text-slate-300 flex-shrink-0" aria-hidden="true" />
                {index === breadcrumb.length - 1 ? (
                  <span className="text-slate-700 font-medium" itemProp="name">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-blue-700 transition-colors duration-100"
                    itemProp="item"
                  >
                    <span itemProp="name">{item.name}</span>
                  </Link>
                )}
                <meta itemProp="position" content={String(index + 2)} />
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="gradient-hero text-white py-14 md:py-20" aria-label="Service hero">
        <div className="container-main">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-100 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse inline-block" aria-hidden="true" />
              {hero.badge}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight mb-5">
              {hero.title}
              {hero.titleHighlight && (
                <>{" "}<span className="text-blue-300">{hero.titleHighlight}</span></>
              )}
            </h1>

            <p className="text-base text-blue-100/90 leading-relaxed mb-7 max-w-xl">
              {hero.description}
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
              {hero.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm font-medium text-blue-100"
                >
                  <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-6 py-3.5 rounded-xl font-black text-base shadow-cta hover:shadow-cta-lg transition-all duration-150 hover:-translate-y-px active:translate-y-0"
                aria-label={`Call us: ${BUSINESS.phone}`}
              >
                <Phone className="h-4.5 w-4.5" aria-hidden="true" />
                {BUSINESS.phone}
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/25 text-white/90 hover:bg-white/10 hover:border-white/40 px-6 py-3.5 rounded-xl font-semibold text-base transition-all duration-150"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white" aria-label="Service details">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">

            {/* Content column */}
            <div className="lg:col-span-2">
              {/* Icon + heading */}
              <div className="flex items-center gap-4 mb-7">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl flex-shrink-0">
                  <Icon className="h-6 w-6 text-blue-700" aria-hidden="true" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  {mainContent.heading}
                </h2>
              </div>

              {/* Body */}
              <div className="space-y-4">
                {mainContent.body.map((paragraph, i) => (
                  <p key={i} className="text-slate-600 text-sm leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Features grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-150 group"
                  >
                    <h3 className="font-bold text-slate-900 mb-1.5 text-sm group-hover:text-blue-700 transition-colors duration-150">
                      {feature.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {/* Emergency CTA */}
              <div className="bg-red-600 text-white rounded-xl p-5">
                <p className="font-bold text-base mb-1">Need Help Now?</p>
                <p className="text-red-100/80 text-xs mb-4 leading-relaxed">
                  Available 24/7 — 20–30 min response in Kennington SE11
                </p>
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center justify-center gap-2 bg-white text-red-600 px-4 py-2.5 rounded-lg font-black text-sm hover:bg-red-50 transition-colors duration-150 w-full"
                  aria-label={`Emergency call: ${BUSINESS.phone}`}
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {BUSINESS.phone}
                </a>
              </div>

              {/* Trust signals */}
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                <h3 className="font-bold text-slate-900 mb-3.5 text-sm">Why Choose Lockstar?</h3>
                <ul className="space-y-2.5">
                  {BUSINESS.trustSignals.map((signal) => (
                    <li key={signal} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="h-3.5 w-3.5 text-green-600 flex-shrink-0" aria-hidden="true" />
                      {signal}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related services */}
              <div className="bg-white border border-slate-100 rounded-xl p-5">
                <h3 className="font-bold text-slate-900 mb-3.5 text-sm">Related Services</h3>
                <ul className="space-y-1.5">
                  {relatedServices.map((service) => (
                    <li key={service.href}>
                      <Link
                        href={service.href}
                        className="flex items-center gap-1.5 text-xs text-blue-700 hover:text-blue-800 font-medium transition-colors duration-100 group"
                      >
                        <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform duration-150" aria-hidden="true" />
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <ReviewShowcase />

      {/* FAQ */}
      <FAQSection />

      {/* Bottom CTA */}
      <section className="py-12 bg-slate-950 text-white" aria-label="Contact call to action">
        <div className="container-main text-center">
          <h2 className="text-xl sm:text-2xl font-black mb-2 tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            Call Lockstar Locksmith Kennington — available 24/7, no call-out fee.
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-7 py-3.5 rounded-xl font-black text-base shadow-cta hover:shadow-cta-lg transition-all duration-150 hover:-translate-y-px active:translate-y-0"
            aria-label={`Call us: ${BUSINESS.phone}`}
          >
            <Phone className="h-4.5 w-4.5" aria-hidden="true" />
            Call {BUSINESS.phone}
          </a>
        </div>
      </section>
    </>
  );
}
