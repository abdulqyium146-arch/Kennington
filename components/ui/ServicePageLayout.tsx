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
      <nav
        className="bg-slate-50 border-b border-slate-200 py-3"
        aria-label="Breadcrumb"
      >
        <div className="container-main">
          <ol className="flex items-center gap-2 text-sm text-slate-500" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/" className="hover:text-blue-700 transition-colors duration-150" itemProp="item">
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            {breadcrumb.map((item, index) => (
              <li key={item.href} className="flex items-center gap-2" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <ChevronRight className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                {index === breadcrumb.length - 1 ? (
                  <span className="text-slate-900 font-medium" itemProp="name">{item.name}</span>
                ) : (
                  <Link href={item.href} className="hover:text-blue-700 transition-colors duration-150" itemProp="item">
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
      <section className="gradient-hero text-white py-16 md:py-24" aria-label="Service hero">
        <div className="container-main">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 text-red-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse inline-block" />
              {hero.badge}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6">
              {hero.title}
              {hero.titleHighlight && (
                <>
                  {" "}
                  <span className="text-blue-300">{hero.titleHighlight}</span>
                </>
              )}
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-8 max-w-2xl">
              {hero.description}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-10">
              {hero.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2.5 text-sm font-medium text-blue-100">
                  <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-7 py-4 rounded-xl font-black text-lg shadow-cta hover:shadow-xl transition-all duration-200"
                aria-label={`Call: ${BUSINESS.phone}`}
              >
                <Phone className="h-5 w-5" />
                {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white" aria-label="Service details">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Content */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-2xl">
                  <Icon className="h-7 w-7 text-blue-700" />
                </div>
                <h2 className="text-2xl font-black text-slate-900">{mainContent.heading}</h2>
              </div>
              <div className="prose prose-slate max-w-none space-y-4">
                {mainContent.body.map((paragraph, i) => (
                  <p key={i} className="text-slate-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Features grid */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:border-blue-200 hover:bg-blue-50 transition-colors duration-200"
                  >
                    <h3 className="font-bold text-slate-900 mb-2 text-sm">{feature.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Call card */}
              <div className="bg-red-600 text-white rounded-2xl p-6">
                <p className="font-bold text-lg mb-1">Need Help Now?</p>
                <p className="text-red-100 text-sm mb-4">
                  Available 24/7 — 20–30 min response in Kennington
                </p>
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center justify-center gap-2 bg-white text-red-600 px-4 py-3 rounded-xl font-black text-base hover:bg-red-50 transition-colors duration-150 w-full"
                  aria-label={`Call: ${BUSINESS.phone}`}
                >
                  <Phone className="h-5 w-5" />
                  {BUSINESS.phone}
                </a>
              </div>

              {/* Trust */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-4">Why Choose Lockstar?</h3>
                <ul className="space-y-3">
                  {BUSINESS.trustSignals.map((signal) => (
                    <li key={signal} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                      {signal}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related services */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-4">Related Services</h3>
                <ul className="space-y-2">
                  {relatedServices.map((service) => (
                    <li key={service.href}>
                      <Link
                        href={service.href}
                        className="flex items-center gap-2 text-sm text-blue-700 hover:text-blue-800 font-medium transition-colors duration-150"
                      >
                        <ArrowRight className="h-3.5 w-3.5" />
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
      <section className="py-12 bg-slate-900 text-white">
        <div className="container-main text-center">
          <h2 className="text-2xl font-black mb-2">Ready to Get Started?</h2>
          <p className="text-slate-400 mb-6">
            Call Lockstar Locksmith Kennington — available 24/7, no call-out fee.
          </p>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-black text-lg shadow-cta hover:shadow-xl transition-all duration-200"
            aria-label={`Call: ${BUSINESS.phone}`}
          >
            <Phone className="h-5 w-5" />
            Call {BUSINESS.phone}
          </a>
        </div>
      </section>
    </>
  );
}
