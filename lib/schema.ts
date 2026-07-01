import { BUSINESS } from "./constants";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Locksmith", "LocalBusiness"],
    "@id": `${BUSINESS.domain}/#business`,
    name: BUSINESS.name,
    alternateName: "Lockstar Locksmith",
    description: BUSINESS.description,
    url: BUSINESS.domain,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    foundingDate: BUSINESS.established,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: "Kennington",
      addressRegion: "Greater London",
      postalCode: BUSINESS.address.postcode,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    priceRange: "££",
    currenciesAccepted: "GBP",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    areaServed: BUSINESS.serviceAreas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Locksmith Services",
      itemListElement: BUSINESS.services.map((service, i) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
          provider: {
            "@type": "LocalBusiness",
            name: BUSINESS.name,
          },
        },
        position: i + 1,
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.socialProof.rating,
      reviewCount: BUSINESS.socialProof.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: [
      `${BUSINESS.domain}`,
    ],
  };
}

export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
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

export function generateServiceSchema(
  serviceName: string,
  description: string,
  slug: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    url: `${BUSINESS.domain}/services/${slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      url: BUSINESS.domain,
    },
    areaServed: {
      "@type": "Place",
      name: "Kennington, London SE11",
    },
    serviceType: "Locksmith Service",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${BUSINESS.domain}/services/${slug}`,
      servicePhone: BUSINESS.phone,
      availableLanguage: "English",
    },
  };
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; href: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BUSINESS.domain}${item.href}`,
    })),
  };
}

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
    author: {
      "@type": "Person",
      name: review.name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
    },
    reviewBody: review.text,
    itemReviewed: {
      "@type": "LocalBusiness",
      name: BUSINESS.name,
    },
  }));
}
