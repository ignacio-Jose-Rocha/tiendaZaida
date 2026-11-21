// ====== CONFIGURACIÓN SEO ======
// Este archivo alimenta: título, descripción, Open Graph (vista previa al compartir),
// datos estructurados para Google, sitemap.xml y robots.txt.
// Completá todo lo que dice "COMPLETAR" antes de publicar.

export const SEO = {
  // COMPLETAR: la dirección real donde va a vivir la página, sin "/" al final.
  // También se puede pasar al compilar:  SITE_URL=https://mitienda.com npm run build
  siteUrl: "https://www.tiendazaida.com.ar",

  lang: "es-AR",
  locale: "es_AR",

  // Título: hasta ~60 caracteres. Descripción: entre 120 y 160.
  title: "Tienda Zaida | Mercería, ropa de bebé, lencería, joyas y bijouterie",
  description:
    "Tienda Zaida: hilos, agujas y botones, ropa de bebé, ropa interior de hombre, lencería, joyas y bijouterie. Armá tu pedido y envialo por WhatsApp.",

  // Imagen que se ve al compartir el link en WhatsApp, Facebook, etc. (1200x630, en /public)
  ogImage: "og-image.png",
  ogImageAlt: "Tienda Zaida: mercería, ropa de bebé, lencería, joyas y bijouterie",

  // COMPLETAR (opcional): código de verificación de Google Search Console (método "etiqueta HTML").
  googleSiteVerification: "",
  // COMPLETAR (opcional): ID de Google Analytics 4, por ejemplo "G-XXXXXXXXXX".
  googleAnalyticsId: "",

  // Datos del negocio para Google (ficha local). Dejá vacío lo que no tengas: no se publica.
  business: {
    type: "Store",
    phone: "", // COMPLETAR, formato internacional: "+5491123456789"
    email: "", // COMPLETAR
    streetAddress: "", // COMPLETAR: calle y número del local (si tenés local a la calle)
    locality: "Buenos Aires",
    region: "Buenos Aires",
    postalCode: "", // COMPLETAR
    country: "AR",
    // Horarios. days: Monday..Sunday. Dejá [] si no querés publicarlos.
    // Ejemplo: [{ days: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "18:00" }]
    hours: [],
    priceRange: "$$",
  },
};
