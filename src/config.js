// ====== CONFIGURACIÓN DEL NEGOCIO ======
// Cambiá estos datos y listo: el carrito y todos los botones de WhatsApp se actualizan solos.

export const BRAND = "Tienda Zaida";

// Número con código de país y sin "+", espacios ni guiones.
// Argentina (celular): 549 + código de área sin 0 + número. Ej: 5491123456789
export const WHATSAPP_NUMBER = "5491171046032";

export const INSTAGRAM = "zaida.arias2023";
export const CITY = "Buenos Aires, Argentina";

// Ventana de promoción que aparece al entrar (una vez por visita).
// Para apagarla poné enabled: false.
// La promoción 6+1 de medias se calcula automáticamente en el carrito.
export const PROMO = {
  enabled: true,
  tag: "Promoción en medias",
  headline: "6 + 1 GRATIS",
  text: "en docenas de medias surtidas",
  detail: "Llevando 6 docenas, te regalamos 1 docena adicional. Cada docena cuesta $4.500. El descuento se calcula automáticamente en el carrito.",
  fine: "Válido para medias surtidas, sujeto a disponibilidad de stock.",
};

export const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
