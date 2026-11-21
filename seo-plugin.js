// Plugin de Vite: arma todo el SEO "técnico" al compilar.
//  - <title>, descripción, canonical, Open Graph, Twitter Card, íconos y manifest
//  - Datos estructurados JSON-LD (negocio + catálogo de productos)
//  - robots.txt, sitemap.xml y site.webmanifest
import { SEO } from "./src/seo.config.js";
import { BRAND, INSTAGRAM, WHATSAPP_NUMBER } from "./src/config.js";
import { sections } from "./src/data/products.js";

const DEFAULT_URL = "https://www.tiendazaida.com.ar";
const PLACEHOLDER_WA = "5491100000000";

const siteUrl = (process.env.SITE_URL || SEO.siteUrl).replace(/\/+$/, "");
const abs = (path) => `${siteUrl}/${String(path).replace(/^\.?\//, "")}`;
const isAbsolute = (u) => /^https?:\/\//i.test(u);
const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// JSON seguro para incrustar dentro de <script>
const safeJson = (obj) =>
  JSON.stringify(obj, null, 2)
    .replace(/</g, "\\u003c")
    .replace(new RegExp("[\\u2028\\u2029]", "g"), "");

function structuredData() {
  const b = SEO.business;
  const wa = WHATSAPP_NUMBER && WHATSAPP_NUMBER !== PLACEHOLDER_WA ? `+${WHATSAPP_NUMBER}` : "";
  const telephone = b.phone || wa;

  const address = {
    "@type": "PostalAddress",
    ...(b.streetAddress && { streetAddress: b.streetAddress }),
    ...(b.locality && { addressLocality: b.locality }),
    ...(b.region && { addressRegion: b.region }),
    ...(b.postalCode && { postalCode: b.postalCode }),
    ...(b.country && { addressCountry: b.country }),
  };

  const store = {
    "@context": "https://schema.org",
    "@type": b.type || "Store",
    "@id": `${siteUrl}/#negocio`,
    name: BRAND,
    url: `${siteUrl}/`,
    description: SEO.description,
    image: abs(SEO.ogImage),
    ...(telephone && { telephone }),
    ...(b.email && { email: b.email }),
    ...(b.priceRange && { priceRange: b.priceRange }),
    address,
    areaServed: { "@type": "Country", name: "Argentina" },
    ...(b.hours?.length && {
      openingHoursSpecification: b.hours.map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.days,
        opens: h.opens,
        closes: h.closes,
      })),
    }),
    sameAs: INSTAGRAM ? [`https://www.instagram.com/${INSTAGRAM}/`] : [],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#sitio`,
    url: `${siteUrl}/`,
    name: BRAND,
    inLanguage: SEO.lang,
    publisher: { "@id": `${siteUrl}/#negocio` },
  };

  let position = 0;
  const catalog = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Catálogo de ${BRAND}`,
    itemListElement: sections.flatMap((s) =>
      s.products.map((p) => {
        const image = p.img && isAbsolute(p.img) ? p.img : abs(`fotos/${p.id}.jpg`);
        return {
          "@type": "ListItem",
          position: ++position,
          item: {
            "@type": "Product",
            name: p.name,
            description: p.desc,
            sku: p.id,
            category: s.nav,
            image,
            brand: { "@type": "Brand", name: BRAND },
            offers: {
              "@type": "Offer",
              url: `${siteUrl}/#${s.id}`,
              priceCurrency: "ARS",
              price: String(p.price),
              itemCondition: "https://schema.org/NewCondition",
              // Si un producto se agota, agregale  soldOut: true  en products.js
              availability: p.soldOut ? "https://schema.org/OutOfStock" : "https://schema.org/InStock",
              seller: { "@id": `${siteUrl}/#negocio` },
            },
          },
        };
      })
    ),
  };

  return [store, website, catalog];
}

export default function seoPlugin() {
  let isSsr = false;
  let isBuild = false;

  return {
    name: "tienda-zaida-seo",

    configResolved(config) {
      isSsr = !!config.build.ssr;
      isBuild = config.command === "build";
      if (isBuild && !isSsr && !process.env.SITE_URL && siteUrl === DEFAULT_URL) {
        console.warn(
          "\n[SEO] Estás usando la dirección de ejemplo (" + DEFAULT_URL + ").\n" +
            "      Poné la tuya en src/seo.config.js o compilá con:  SITE_URL=https://tudominio.com npm run build\n"
        );
      }
    },

    transformIndexHtml: {
      order: "pre",
      handler(html) {
        const title = esc(SEO.title);
        const description = esc(SEO.description);
        const image = abs(SEO.ogImage);

        const head = [
          `<link rel="canonical" href="${siteUrl}/" />`,
          `<meta name="robots" content="index, follow, max-image-preview:large" />`,
          `<meta name="author" content="${esc(BRAND)}" />`,
          SEO.googleSiteVerification &&
            `<meta name="google-site-verification" content="${esc(SEO.googleSiteVerification)}" />`,

          `<meta property="og:type" content="website" />`,
          `<meta property="og:site_name" content="${esc(BRAND)}" />`,
          `<meta property="og:locale" content="${SEO.locale}" />`,
          `<meta property="og:title" content="${title}" />`,
          `<meta property="og:description" content="${description}" />`,
          `<meta property="og:url" content="${siteUrl}/" />`,
          `<meta property="og:image" content="${image}" />`,
          `<meta property="og:image:width" content="1200" />`,
          `<meta property="og:image:height" content="630" />`,
          `<meta property="og:image:alt" content="${esc(SEO.ogImageAlt)}" />`,

          `<meta name="twitter:card" content="summary_large_image" />`,
          `<meta name="twitter:title" content="${title}" />`,
          `<meta name="twitter:description" content="${description}" />`,
          `<meta name="twitter:image" content="${image}" />`,

          `<link rel="icon" href="./favicon.svg" type="image/svg+xml" />`,
          `<link rel="icon" href="./favicon-32.png" sizes="32x32" type="image/png" />`,
          `<link rel="apple-touch-icon" href="./apple-touch-icon.png" />`,
          `<link rel="manifest" href="./site.webmanifest" />`,

          ...structuredData().map(
            (d) => `<script type="application/ld+json">\n${safeJson(d)}\n</script>`
          ),

          SEO.googleAnalyticsId &&
            `<script async src="https://www.googletagmanager.com/gtag/js?id=${esc(SEO.googleAnalyticsId)}"></script>\n` +
              `<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date());gtag("config","${esc(SEO.googleAnalyticsId)}");</script>`,
        ]
          .filter(Boolean)
          .join("\n    ");

        return html
          .replace(/<html lang="[^"]*"/, `<html lang="${SEO.lang}"`)
          .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
          .replace(
            /<meta\s+name="description"[\s\S]*?\/>/,
            `<meta name="description" content="${description}" />`
          )
          .replace("</head>", `    ${head}\n  </head>`);
      },
    },

    generateBundle() {
      if (!isBuild || isSsr) return;
      const today = new Date().toISOString().slice(0, 10);

      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
      });

      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source:
          `<?xml version="1.0" encoding="UTF-8"?>\n` +
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
          `  <url>\n    <loc>${siteUrl}/</loc>\n    <lastmod>${today}</lastmod>\n` +
          `    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>\n` +
          `</urlset>\n`,
      });

      this.emitFile({
        type: "asset",
        fileName: "site.webmanifest",
        source: JSON.stringify(
          {
            name: BRAND,
            short_name: BRAND,
            description: SEO.description,
            lang: SEO.lang,
            start_url: "./",
            scope: "./",
            display: "standalone",
            background_color: "#fcf6f4",
            theme_color: "#4a1230",
            icons: [
              { src: "icon-192.png", sizes: "192x192", type: "image/png" },
              { src: "icon-512.png", sizes: "512x512", type: "image/png" },
              { src: "icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
            ],
          },
          null,
          2
        ),
      });
    },
  };
}
