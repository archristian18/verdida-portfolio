import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const normalizeSiteUrl = (url) => url.replace(/\/+$/, "");
const siteUrl = normalizeSiteUrl(
  process.env.VITE_SITE_URL ||
    "https://averdidasurveyingandrealtyservices.com",
);
const distDir = path.resolve("dist");
const indexPath = path.join(distDir, "index.html");

const pages = [
  {
    outputPath: path.join(distDir, "survey-products", "index.html"),
    title: "Surveying Highlights | AVerdida Surveying & Realty Services Cebu",
    description:
      "View surveying field work, project highlights, community updates, and service activities from AVerdida Surveying & Realty Services in Cebu.",
    canonical: `${siteUrl}/survey-products`,
  },
];

const replaceFirst = (html, pattern, replacement) => html.replace(pattern, replacement);

const updatePageHtml = (html, page) => {
  let nextHtml = html;

  nextHtml = replaceFirst(
    nextHtml,
    /<title>.*?<\/title>/s,
    `<title>${page.title}</title>`,
  );
  nextHtml = replaceFirst(
    nextHtml,
    /<meta\s+data-seo="true"\s+name="description"\s+content="[^"]*"\s*\/>/s,
    `<meta data-seo="true" name="description" content="${page.description}" />`,
  );
  nextHtml = replaceFirst(
    nextHtml,
    /<meta\s+data-seo="true"\s+property="og:title"\s+content="[^"]*"\s*\/>/s,
    `<meta data-seo="true" property="og:title" content="${page.title}" />`,
  );
  nextHtml = replaceFirst(
    nextHtml,
    /<meta\s+data-seo="true"\s+property="og:description"\s+content="[^"]*"\s*\/>/s,
    `<meta data-seo="true" property="og:description" content="${page.description}" />`,
  );
  nextHtml = replaceFirst(
    nextHtml,
    /<meta\s+data-seo="true"\s+property="og:url"\s+content="[^"]*"\s*\/>/s,
    `<meta data-seo="true" property="og:url" content="${page.canonical}" />`,
  );
  nextHtml = replaceFirst(
    nextHtml,
    /<meta\s+data-seo="true"\s+name="twitter:title"\s+content="[^"]*"\s*\/>/s,
    `<meta data-seo="true" name="twitter:title" content="${page.title}" />`,
  );
  nextHtml = replaceFirst(
    nextHtml,
    /<meta\s+data-seo="true"\s+name="twitter:description"\s+content="[^"]*"\s*\/>/s,
    `<meta data-seo="true" name="twitter:description" content="${page.description}" />`,
  );
  nextHtml = replaceFirst(
    nextHtml,
    /<link\s+data-seo="true"\s+rel="canonical"\s+href="[^"]*"\s*\/>/s,
    `<link data-seo="true" rel="canonical" href="${page.canonical}" />`,
  );

  return nextHtml;
};

const indexHtml = await readFile(indexPath, "utf8");

await Promise.all(
  pages.map(async (page) => {
    await mkdir(path.dirname(page.outputPath), { recursive: true });
    await writeFile(page.outputPath, updatePageHtml(indexHtml, page));
  }),
);
