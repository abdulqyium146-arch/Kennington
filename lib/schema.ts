import { BUSINESS } from "./constants";

const DOMAIN = "https://lockstarlocksmithkennington.com";

// ─── Core Entity IDs ─────────────────────────────────────────────────────────
const IDS = {
  organization: `${DOMAIN}/#organization`,
  website: `${DOMAIN}/#website`,
  business: `${DOMAIN}/#localbusiness`,
  logo: `${DOMAIN}/#logo`,
  image: `${DOMAIN}/#primaryimage`,
};

// ─── WebSite Schema (enables Sitelinks Searchbox) ────────────────────────────
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": IDS.website,
    name: BUSINESS.name,
    url: DOMAIN,
    description: BUSINESS.description,
    inLanguage: "en-GB",
    publisher: { "@id": IDS.organization },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${DOMAIN}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// ─── Organization Schema ──────────────────────────────────────────────────────
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": IDS.organization,
    name: BUSINESS.name,
    alternateName: BUSINESS.shortName,
    url: DOMAIN,
    logo: {
      "@type": "ImageObject",
      "@id": IDS.logo,
      url: `${DOMAIN}/logo.webp`,
      contentUrl: `${DOMAIN}/logo.webp`,
      encodingFormat: "image/webp",
      width: 512,
      height: 512,
      caption: BUSINESS.name,
    },
    image: { "@id": IDS.image },
    description: BUSINESS.description,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: "Kennington",
      addressRegion: "Greater London",
      postalCode: BUSINESS.address.postcode,
      addressCountry: "GB",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: BUSINESS.phone,
        contactType: "customer service",
        contactOption: "TollFree",
        areaServed: "GB",
        availableLanguage: "English",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      },
      {
        "@type": "ContactPoint",
        telephone: BUSINESS.phone,
        contactType: "emergency",
        contactOption: "TollFree",
        areaServed: "GB",
        availableLanguage: "English",
      },
    ],
    sameAs: [DOMAIN],
  };
}

// ─── LocalBusiness + Locksmith Schema ────────────────────────────────────────
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Locksmith", "LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": IDS.business,
    name: BUSINESS.name,
    alternateName: BUSINESS.shortName,
    description: BUSINESS.description,
    slogan: "Your Trusted Local Locksmith — Available 24/7",
    url: DOMAIN,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    foundingDate: BUSINESS.established,
    knowsLanguage: "en-GB",
    image: {
      "@type": "ImageObject",
      "@id": IDS.image,
      url: `${DOMAIN}/logo.webp`,
      contentUrl: `${DOMAIN}/logo.webp`,
      encodingFormat: "image/webp",
      width: 512,
      height: 512,
      caption: "Lockstar Locksmith Kennington — 24/7 Emergency Locksmith SE11",
    },
    logo: {
      "@type": "ImageObject",
      "@id": IDS.logo,
      url: `${DOMAIN}/logo.webp`,
      contentUrl: `${DOMAIN}/logo.webp`,
      encodingFormat: "image/webp",
      width: 512,
      height: 512,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: "Kennington",
      addressRegion: "Greater London",
      postalCode: BUSINESS.address.postcode,
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    hasMap: `https://www.google.com/maps/search/locksmith+kennington+se11/@${BUSINESS.geo.lat},${BUSINESS.geo.lng},15z`,
    openingHours: "Mo-Su 00:00-24:00",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    priceRange: "££",
    currenciesAccepted: "GBP",
    paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS.phone,
      contactType: "customer service",
      contactOption: "TollFree",
      areaServed: "GB",
      availableLanguage: "English",
    },
    areaServed: BUSINESS.serviceAreas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Locksmith Services Kennington",
      itemListElement: BUSINESS.services.map((service, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          name: service,
          provider: { "@id": IDS.business },
        },
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.socialProof.rating,
      reviewCount: BUSINESS.socialProof.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Sarah M." },
        reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
        reviewBody: "Locked myself out at 11pm on a Sunday — they arrived within 25 minutes. Professional, friendly, and charged exactly what was quoted.",
        datePublished: "2024-12-15",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "James T." },
        reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
        reviewBody: "Had my front door lock replaced after a break-in. The technician was calm, efficient and explained everything clearly. Excellent service.",
        datePublished: "2024-11-28",
      },
    ],
    sameAs: [DOMAIN],
    parentOrganization: { "@id": IDS.organization },
  };
}

// ─── FAQ Schema ───────────────────────────────────────────────────────────────
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${DOMAIN}/#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ─── Service Schema ───────────────────────────────────────────────────────────
export function generateServiceSchema(
  serviceName: string,
  description: string,
  slug: string
) {
  const serviceUrl = `${DOMAIN}/services/${slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name: serviceName,
    description,
    url: serviceUrl,
    serviceType: "Locksmith Service",
    category: "Home Security",
    provider: {
      "@id": IDS.business,
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      url: DOMAIN,
    },
    areaServed: [
      { "@type": "City", name: "London" },
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: BUSINESS.geo.lat,
          longitude: BUSINESS.geo.lng,
        },
        geoRadius: "20000",
      },
    ],
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      availabilityEnds: "2099-12-31",
      seller: { "@id": IDS.business },
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl,
      servicePhone: BUSINESS.phone,
      availableLanguage: { "@type": "Language", name: "English" },
    },
  };
}

// ─── BreadcrumbList Schema (always includes Home at position 1) ───────────────
export function generateBreadcrumbSchema(
  items: Array<{ name: string; href: string }>
) {
  const allItems = [
    { name: "Home", href: "/" },
    ...items,
  ];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${DOMAIN}${item.href}`,
    })),
  };
}

// ─── WebPage Schema ───────────────────────────────────────────────────────────
export function generateWebPageSchema({
  title,
  description,
  url,
  datePublished = "2025-01-01",
  dateModified,
}: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${DOMAIN}${url}#webpage`,
    name: title,
    description,
    url: `${DOMAIN}${url}`,
    inLanguage: "en-GB",
    isPartOf: { "@id": IDS.website },
    about: { "@id": IDS.business },
    datePublished,
    dateModified: dateModified ?? datePublished,
    breadcrumb: { "@id": `${DOMAIN}${url}#breadcrumb` },
  };
}

// ─── Review Schema (standalone) ───────────────────────────────────────────────
export function generateReviewSchema(
  reviews: Array<{
    name: string;
    rating: number;
    text: string;
    date: string;
  }>
) {
  return reviews.map((review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: { "@type": "Person", name: review.name },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
    },
    reviewBody: review.text,
    datePublished: review.date,
    itemReviewed: {
      "@id": IDS.business,
      name: BUSINESS.name,
    },
  }));
}
