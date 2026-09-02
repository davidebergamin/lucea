import type { Metadata } from "next";
import {
  contact,
  faqs,
  matrimonioReviews,
  matrimonioUrl,
  matrimonioUrlSecondary,
  siteUrl
} from "./site-content";

export const seoOgImage = "/media/images/root/lucea-matrimonio-home-003.webp";
export const studioId = `${siteUrl}/#studio`;

const ogImageAbsolute = `${siteUrl}${seoOgImage}`;

export function pageMetadata({
  title,
  description,
  path,
  image = seoOgImage
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = path === "/" ? siteUrl : `${siteUrl}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: { "it-IT": path }
    },
    openGraph: {
      title,
      description,
      url,
      locale: "it_IT",
      type: "website",
      siteName: "Lucea Fotografie",
      images: [{ url: imageUrl, alt: "Fotografia di matrimonio Lucea, Milano" }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl]
    }
  };
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService", "Photographer"],
  "@id": studioId,
  name: "Lucea Fotografie",
  alternateName: ["Lucea", "LUCEA", "Lucea Fotografie"],
  url: siteUrl,
  image: ogImageAbsolute,
  logo: `${siteUrl}/logo/logo-lucea-mono-320.png`,
  email: contact.email,
  telephone: contact.phoneHref.replace("tel:", ""),
  contactPoint: {
    "@type": "ContactPoint",
    telephone: contact.phoneHref.replace("tel:", ""),
    email: contact.email,
    contactType: "customer service",
    areaServed: "IT",
    availableLanguage: ["Italian"]
  },
  founder: {
    "@type": "Person",
    name: "Andrea Mauri",
    jobTitle: "Fotografo di matrimonio",
    url: `${siteUrl}/chi-sono`
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Arzaga, 11",
    addressLocality: "Milano",
    postalCode: "20146",
    addressRegion: "Lombardia",
    addressCountry: "IT"
  },
  areaServed: [
    { "@type": "City", name: "Milano" },
    { "@type": "AdministrativeArea", name: "Lombardia" },
    { "@type": "Country", name: "Italia" }
  ],
  knowsAbout: [
    "fotografo matrimonio Milano",
    "fotografia di matrimonio reportage",
    "wedding photojournalism",
    "foto spontanee di matrimonio",
    "video matrimonio",
    "album matrimonio"
  ],
  vatID: `IT${contact.vat}`,
  priceRange: "950-2400 EUR",
  sameAs: [matrimonioUrl, matrimonioUrlSecondary],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "171",
    bestRating: "5",
    worstRating: "1"
  }
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Lucea Fotografie",
  inLanguage: "it-IT",
  publisher: { "@id": studioId },
  description:
    "Fotografia e video di matrimonio a Milano: reportage spontaneo, zero pose forzate. Lucea, Andrea Mauri."
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#andrea-mauri`,
  name: "Andrea Mauri",
  jobTitle: "Fotografo di matrimonio",
  worksFor: { "@id": studioId },
  url: `${siteUrl}/chi-sono`,
  email: contact.email,
  telephone: contact.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Milano",
    addressCountry: "IT"
  }
};

export const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
};

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? siteUrl : `${siteUrl}${item.path}`
    }))
  };
}

export const reviewsJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": studioId,
  name: "Lucea Fotografie",
  url: siteUrl,
  aggregateRating: localBusinessJsonLd.aggregateRating,
  review: matrimonioReviews.map((review) => ({
    "@type": "Review",
    author: { "@type": "Person", name: review.name },
    name: review.headline,
    reviewBody: review.text,
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5"
    }
  }))
};
