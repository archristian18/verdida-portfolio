import { useEffect } from "react";
import {
  businessStructuredData,
  defaultSeo,
  siteUrl,
} from "../../data/seoContent.js";

const managedSeoSelector =
  "meta[data-seo='true'], link[data-seo='true'], script[data-seo='true']";

const setMeta = (attributes) => {
  const meta = document.createElement("meta");

  Object.entries(attributes).forEach(([key, value]) => {
    meta.setAttribute(key, value);
  });

  meta.setAttribute("data-seo", "true");
  document.head.appendChild(meta);
};

const setLink = (attributes) => {
  const link = document.createElement("link");

  Object.entries(attributes).forEach(([key, value]) => {
    link.setAttribute(key, value);
  });

  link.setAttribute("data-seo", "true");
  document.head.appendChild(link);
};

export default function Seo({ page, structuredData = businessStructuredData }) {
  useEffect(() => {
    const canonicalUrl = `${siteUrl}${page.path}`;
    const image = page.image || defaultSeo.image;
    const title = page.title || defaultSeo.title;
    const description = page.description || defaultSeo.description;

    document.title = title;
    document
      .querySelectorAll(managedSeoSelector)
      .forEach((element) => element.remove());

    setMeta({ name: "description", content: description });
    setMeta({
      name: "keywords",
      content:
        "surveying services Cebu, land survey Cebu, relocation survey, subdivision survey, topographic survey, construction survey, realty services Cebu",
    });
    setMeta({ name: "author", content: defaultSeo.siteName });
    setMeta({ name: "robots", content: "index, follow" });
    setMeta({ property: "og:site_name", content: defaultSeo.siteName });
    setMeta({ property: "og:type", content: defaultSeo.type });
    setMeta({ property: "og:locale", content: defaultSeo.locale });
    setMeta({ property: "og:title", content: title });
    setMeta({ property: "og:description", content: description });
    setMeta({ property: "og:url", content: canonicalUrl });
    setMeta({ property: "og:image", content: image });
    setMeta({ name: "twitter:card", content: "summary_large_image" });
    setMeta({ name: "twitter:title", content: title });
    setMeta({ name: "twitter:description", content: description });
    setMeta({ name: "twitter:image", content: image });
    setLink({ rel: "canonical", href: canonicalUrl });

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo", "true");
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }, [page, structuredData]);

  return null;
}
