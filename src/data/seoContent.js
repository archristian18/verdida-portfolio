const normalizeSiteUrl = (url) => url.replace(/\/+$/, "");

export const siteUrl = normalizeSiteUrl(
  import.meta.env.VITE_SITE_URL ||
    "https://averdidasurveyingandrealtyservices.com",
);

export const defaultSeo = {
  siteName: "Archristian Verdida Portfolio",
  title:
    "Archristian Verdida Portfolio",
  description:
    "Archristian Verdida Portfolio",
  image: `${siteUrl}/logo.jpg`,
  locale: "en_PH",
  type: "website",
};

export const pageSeo = {
  home: {
    title:
      "Archristian P. Verdida Portfolio",
    description:
      "Get fast, reliable surveying and realty services in Cebu, including relocation surveys, subdivision surveys, consolidation surveys, topographic surveys, construction surveys, and real estate consultation.",
    path: "/",
  },
  surveyProducts: {
    title:
      "Portfolio Projects",
    description:
      "View surveying field work, project highlights, community updates, and service activities from AVerdida Surveying & Realty Services in Cebu.",
    path: "/survey-products",
  },
};

export const businessStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#business`,
  name: "AVerdida Surveying & Realty Services",
  url: siteUrl,
  logo: `${siteUrl}/logo.jpg`,
  image: `${siteUrl}/logo.jpg`,
  description: defaultSeo.description,
  telephone: ["+639325766140", "+639260028443"],
  email: "phrolverdida@yahoo.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit 206, Centennial Commercial Center, Pit-os",
    addressLocality: "Cebu City",
    addressRegion: "Cebu",
    addressCountry: "PH",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Cebu, Philippines",
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
      ],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  sameAs: ["https://www.facebook.com/averdidasurveying"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Surveying and Realty Services",
    itemListElement: [
      "Relocation Survey",
      "Subdivision Survey",
      "Consolidation-Subdivision Survey",
      "Consolidation Survey",
      "Topographic Survey",
      "Construction Survey",
      "Real Estate Planning and Consultation",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
        areaServed: "Cebu, Philippines",
      },
    })),
  },
};
