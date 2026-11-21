// ====== CONFIGURACIÓN DEL NEGOCIO ======
// Cambiá estos datos y listo: el carrito y todos los botones de WhatsApp se actualizan solos.

export const BRAND = "Tienda Zaida";

// Número con código de país y sin "+", espacios ni guiones.
// Argentina (celular): 549 + código de área sin 0 + número. Ej: 5491123456789
export const WHATSAPP_NUMBER = "5491100000000";

export const INSTAGRAM = "tiendazaida";
export const CITY = "Buenos Aires, Argentina";

// Ventana de promoción que aparece al entrar (una vez por visita).
// Para apagarla poné enabled: false.
// Los productos con  promo: "2x1"  en src/data/products.js reciben el descuento en el carrito.
export const PROMO = {
  enabled: true,
  tag: "Promo de verano",
  headline: "2x1",
  text: "en medias y en lencería de mujer",
  detail: "Llevás 2 y pagás 1. Sumalas al carrito y el descuento se aplica solo.",
  fine: "Promoción por tiempo limitado, hasta agotar stock.",
};

export const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
