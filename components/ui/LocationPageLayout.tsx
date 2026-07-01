import Link from "next/link";
import { Phone, MapPin, CheckCircle2, ChevronRight, Star } from "lucide-react";
import { BUSINESS, REVIEWS } from "@/lib/constants";
import FAQSection from "@/components/home/FAQSection";
import type { LucideIcon } from "lucide-react";

interface LocationFAQ {
  question: string;
  answer: string;
}

interface LocationPageLayoutProps {
  location: {
    name: string;
    nameShort: string;
    postcode: string;
    description: string;
    landmarks: string[];
    roads: string[];
    nearbyAreas: string[];
  };
  hero: {
    badge: string;
    title: string;
    description: string;
  };
  Icon: LucideIcon;
  mainContent: {
    heading: string;
    body: string[];
  };
  services: Array<{ title: string; href: string; description: string }>;
  breadcrumb: Array<{ name: string; href: string }>;
}

export default function LocationPageLayout({
  location,
  hero,
  Icon,
  mainContent,
  services,
  breadcrumb,
}: LocationPageLayoutProps) {
  const featuredReviews = REVIEWS.slice(0, 3);

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
      <section className="gradient-hero text-white py-16 md:py-24" aria-label={`Locksmith ${location.name}`}>
        <div className="container-main">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 text-red-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <MapPin className="h-4 w-4" />
              {hero.badge}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6">
              {hero.title}
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-8 max-w-2xl">
              {hero.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {[
                { label: "20-30 Min", sub: "Response" },
                { label: "24/7", sub: "Available" },
                { label: "DBS", sub: "Checked" },
                { label: "£0", sub: "Call-Out Fee" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 border border-white/20 rounded-xl p-3 text-center">
                  <p className="font-black text-white text-xl">{stat.label}</p>
                  <p className="text-blue-200 text-xs">{stat.sub}</p>
                </div>
              ))}
            </div>

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

      {/* Main content */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Content area */}
            <div className="lg:col-span-2 space-y-10">
              {/* About section */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-2xl">
                    <Icon className="h-7 w-7 text-blue-700" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900">{mainContent.heading}</h2>
                </div>
                <div className="space-y-4">
                  {mainContent.body.map((paragraph, i) => (
                    <p key={i} className="text-slate-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Local knowledge */}
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 text-lg mb-4">
                  Local Coverage — {location.name}
                </h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-700 mb-2">Landmarks</p>
                    <ul className="space-y-1">
                      {location.landmarks.map((l) => (
                        <li key={l} className="text-sm text-slate-600 flex items-center gap-1.5">
                          <MapPin className="h-3 w-3 text-blue-600 flex-shrink-0" />
                          {l}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-700 mb-2">Key Roads</p>
                    <ul className="space-y-1">
                      {location.roads.map((r) => (
                        <li key={r} className="text-sm text-slate-600 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 inline-block mt-1" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-700 mb-2">Nearby Areas</p>
                    <ul className="space-y-1">
                      {location.nearbyAreas.map((a) => (
                        <li key={a} className="text-sm text-slate-600 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0 inline-block mt-1" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Services in this area */}
              <div>
                <h3 className="text-xl font-black text-slate-900 mb-5">
                  Locksmith Services in {location.nameShort}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="group flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-blue-200 hover:bg-blue-50 transition-colors duration-200"
                    >
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-slate-900 text-sm group-hover:text-blue-700 transition-colors duration-150">
                          {service.title}
                        </p>
                        <p className="text-xs text-slate-500 mt-0.5">{service.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Local reviews */}
              <div>
                <h3 className="text-xl font-black text-slate-900 mb-5">
                  What {location.nameShort} Customers Say
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {featuredReviews.map((review) => (
                    <div key={review.id} className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                      <div className="flex items-center gap-0.5 mb-2">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-slate-700 text-xs leading-relaxed">
                        &ldquo;{review.text.substring(0, 100)}...&rdquo;
                      </p>
                      <p className="text-slate-400 text-xs mt-2 font-medium">{review.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Emergency call card */}
              <div className="bg-red-600 text-white rounded-2xl p-6">
                <p className="font-bold text-lg mb-1">
                  Locksmith in {location.nameShort}?
                </p>
                <p className="text-red-100 text-sm mb-4">
                  Available 24/7 — we&apos;re local and ready now
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

              {/* Location info */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-3">{location.name} Info</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span className="text-slate-700">Postcode: {location.postcode}</span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed mt-2">
                    {location.description}
                  </p>
                </div>
              </div>

              {/* Trust signals */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6">
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
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* Bottom CTA */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="container-main text-center">
          <h2 className="text-2xl font-black mb-2">
            Need a Locksmith in {location.nameShort}?
          </h2>
          <p className="text-slate-400 mb-6">
            Call now — 20–30 min response, no call-out fee, available 24/7.
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
