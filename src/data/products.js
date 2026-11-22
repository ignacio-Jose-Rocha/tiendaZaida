// Cada producto: id (único), name, desc, price, art (dibujo) y hue (color del dibujo).
// promo: "2x1" aplica la promoción 2x1 en el carrito y muestra la etiqueta en la tarjeta.
//
// FOTOS: poné tu foto en  public/fotos/  con el nombre del id (por ejemplo  m1.jpg  o  j3.jpg)
// y se muestra sola en lugar del dibujo. También podés indicar otra ruta con  img: "./fotos/otra.jpg".
// Los precios son de ejemplo: reemplazalos por los tuyos.

export const sections = [
  {
    id: "merceria",
    nav: "Mercería",
    title: "Todo para coser y crear",
    intro:
      "Hilos, agujas, botones, cierres y todo lo que necesitás para arreglar, tejer o empezar tu próximo proyecto.",
    tone: "pearl",
    products: [
      { id: "m1", name: "Hilo de algodón", desc: "Carretel de 500 m. Más de 20 colores.", price: 2800, art: "spool", hue: "rose", img: "https://cdn.pixabay.com/photo/2010/12/13/10/02/bobbin-2180_1280.jpg" },
      { id: "m2", name: "Agujas surtidas", desc: "Set de 30 para coser, bordar y lana.", price: 3200, art: "needles", hue: "gold", img: "https://cdn.cs.1worldsync.com/d9/06/d9062cd9-e20b-41e6-a03a-ce7a4a99dbb6.jpg" },
      { id: "m3", name: "Botones surtidos", desc: "Frasco de 200 g con todos los tamaños.", price: 4500, art: "buttons", hue: "plum", img: "./fotos/botones-surtidos.png" },
      { id: "m4", name: "Cierres de colores", desc: "Cremalleras de 20 cm. Pack de 5.", price: 3900, art: "zipper", hue: "sky", img: "https://www.fil2000-mercerie.fr/uploads/M13iYq4z/fermeture-4spy_302.jpg" },
      { id: "m5", name: "Cinta métrica", desc: "Flexible, 150 cm, con números en ambos lados.", price: 1500, art: "tape", hue: "mint", img: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=900&q=85" },
      { id: "m6", name: "Tijera de costura", desc: "Acero inoxidable de 21 cm. Corte preciso.", price: 9800, art: "scissors", hue: "plum", img: "https://www.sewingpartsonline.com/cdn/shop/files/BK1208_2.jpg?v=1754405598&width=750" },
      { id: "m7", name: "Ovillo de lana", desc: "100 g, suave y fácil de tejer.", price: 3600, art: "yarn", hue: "rose", img: "https://images.pexels.com/photos/7612424/pexels-photo-7612424.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      { id: "m8", name: "Cintas y puntillas", desc: "Variedad de cintas, puntillas y encajes en distintos colores y anchos.", price: 2600, art: "ribbon", hue: "gold", img: "./fotos/cintas_puntillas.jpg" },
    ],
  },
  {
    id: "bebe",
    nav: "Bebé",
    title: "Ropa de bebé, suave desde el primer día",
    intro:
      "Ropa y accesorios suaves para los más chicos, con modelos y colores surtidos.",
    tone: "blush",
    products: [
      { id: "b2", name: "Escarpines tejidos", desc: "Par de lana suave con elástico en el tobillo.", price: 7200, art: "booties", hue: "rose", img: "https://i5.walmartimages.com/seo/XIMIN-Baby-Booties-Newborn-First-Walkers-Cozy-Shoes-Sock-Shoes-Warm-Hand-Knit-Soft-Booties-for-Toddler-Infant-Boy-Girl-Cozy-Shoes-0-3-Months-White_d55d80eb-9e5c-485f-bcec-33270cb5c467.401bdab476dbb42beef6b21b1048d12c.jpeg" },
      { id: "b5", name: "Medias para bebé", desc: "Medias suaves en tonos claros y pastel.", price: 10000, unitLabel: "por docena", art: "socks", hue: "rose", img: "./fotos/medias_bebe.jpg" },
    ],
  },
  {
    id: "hombre",
    nav: "Hombre",
    title: "Ropa interior de hombre, cómoda todo el día",
    intro:
      "Boxers y medias surtidas para todos los días.",
    tone: "wine",
    products: [
      { id: "h1", name: "Boxers surtidos x3", desc: "Modelos y colores surtidos. 3 unidades por $10.000.", price: 10000, unitLabel: "por pack x3", art: "boxer", hue: "plum", img: "./fotos/h1.jpg" },
      { id: "h4", name: "Medias estampadas (docena)", desc: "Docena de medias con estampas y diseños surtidos.", price: 10000, unitLabel: "por docena", art: "socks", hue: "mint", img: "./fotos/medias_hombre.jpg" },
      { id: "h5", name: "Boxers surtidos x12 (docena)", desc: "Docena de boxers surtidos por $24.000.", price: 24000, unitLabel: "por docena", art: "boxer", hue: "sky", img: "./fotos/h5.jpg" },
      { id: "h6", name: "Medias básicas (docena)", desc: "Docena de medias. Llevando 6 docenas, te regalamos 1 docena adicional.", price: 4500, unitLabel: "por docena", art: "socks", hue: "sky", promo: "6+1", img: "./fotos/medias_pack.jpg" },
    ],
  },
  {
    id: "joyas",
    nav: "Joyas",
    title: "Joyas que se heredan",
    intro:
      "Oro laminado 18k y plata 925, con piedras que atrapan la luz. Piezas para usar todos los días y para esas noches que se recuerdan.",
    tone: "pearl",
    products: [
      { id: "j5", name: "Aros surtidos", desc: "Argollas y modelos variados en distintos diseños.", price: 2000, priceLabel: "Desde $2.000", art: "earrings", hue: "gold", img: "./fotos/aros_surtidos.jpg" },
    ],
  },
  {
    id: "ropa",
    nav: "Ropa",
    title: "Ropa que te sienta bien",
    intro:
      "Pantalones, jeans y shorts para mujer y nena, en distintos modelos y colores.",
    tone: "pearl",
    products: [
      { id: "r5", name: "Vestidos para nena", desc: "Varios modelos y talles, hasta talle de 6 años. Desde $8.000.", price: 8000, priceLabel: "Desde $8.000", art: "dress", hue: "rose", img: "./fotos/r5.jpg" },
      { id: "r6", name: "Pantalones y jeans", desc: "Modelos variados, distintos colores y talles del 38 al 56.", price: 20000, priceLabel: "Desde $20.000", art: "blazer", hue: "sky", img: "./fotos/ropa_pantalones.jpg" },
      { id: "r7", name: "Shorts de mujer", desc: "Modelos en negro, rosa y otros colores.", price: 12000, priceLabel: "Desde $12.000", art: "dress", hue: "plum", img: "./fotos/ropa_short_sastrero.jpg" },
      { id: "r8", name: "Shorts de jean", desc: "Jean claro con detalles y terminación desflecada.", price: 12000, priceLabel: "Desde $12.000", art: "dress", hue: "sky", img: "./fotos/ropa_short_denim.jpg" },
      { id: "r9", name: "Shorts con cadena", desc: "Modelos en verde y jean.", price: 25000, priceLabel: "Desde $25.000", art: "dress", hue: "mint", img: "./fotos/ropa_short_verde.jpg" },
      { id: "r10", name: "Shorts para nena", desc: "Modelos en rosa y jean.", price: 12000, priceLabel: "Desde $12.000", art: "dress", hue: "rose", img: "./fotos/ropa_short_nina.jpg" },
      { id: "r11", name: "Medias estampadas", desc: "Modelos surtidos con estampas.", price: 10000, priceLabel: "Desde $10.000", art: "socks", hue: "rose", img: "./fotos/medias_estampadas.jpg" },
    ],
  },
  {
    id: "lenceria",
    nav: "Lencería",
    title: "Lencería de mujer para sentirte única",
    intro:
      "Ropa interior de mujer en modelos y colores surtidos.",
    tone: "wine",
    products: [
      { id: "l5", name: "Ropa interior de mujer", desc: "Modelos y colores surtidos. $6.000 cada una.", price: 6000, art: "lingerie", hue: "rose", img: "./fotos/l5.jpg" },
    ],
  },
  {
    id: "varios",
    nav: "Varios",
    title: "Detalles que completan",
    intro:
      "Accesorios, calzado, perfumes, juguetes y artículos de uso diario.",
    tone: "blush",
    products: [
      { id: "v5", name: "Piluso para adulto", desc: "Color verde. Consultá por disponibilidad de talles.", price: 12000, art: "hat", hue: "mint", img: "./fotos/v5.jpg" },
      { id: "v6", name: "Pilusos para niñas", desc: "Estampados surtidos. Precio de referencia de la foto: $5.900.", price: 5900, art: "hat", hue: "rose", img: "./fotos/v6.jpg" },
      { id: "v7", name: "Capelinas", desc: "Modelos y colores surtidos.", price: 10000, art: "hat", hue: "rose", img: "./fotos/v7.jpg" },
      { id: "v8", name: "Crocs para adulto", desc: "Todos los talles disponibles. $12.000.", price: 12000, art: "shoes", hue: "sky", img: "./fotos/v8.jpg" },
      { id: "v9", name: "Neceser holográfico", desc: "Neceser rosa con cierre y manija. $10.000.", price: 10000, art: "bag", hue: "rose", img: "./fotos/v9.jpg" },
      { id: "v10", name: "Lapicera BIC", desc: "Lapicera BIC azul, punta mediana.", price: 1100, art: "pen", hue: "sky", img: "./fotos/v13.jpg" },
      { id: "v11", name: "Cinta adhesiva Scotch", desc: "Rollo de cinta adhesiva transparente.", price: 1000, art: "tape", hue: "gold", img: "./fotos/v14.jpg" },
      { id: "v12", name: "Perfumes Monique", desc: "Variedad de fragancias. Consultá precios y disponibilidad por WhatsApp.", price: 0, priceLabel: "Consultar precio", consult: true, art: "bottle", hue: "rose", img: "./fotos/v11.jpg" },
      { id: "v13", name: "Perfumes Monique - variedad", desc: "Más fragancias y presentaciones. Consultá precios por WhatsApp.", price: 0, priceLabel: "Consultar precio", consult: true, art: "bottle", hue: "plum", img: "./fotos/v12.jpg" },
      { id: "v14", name: "Juguetes", desc: "Variedad de juguetes para chicos. Consultá modelos y disponibilidad.", price: 0, priceLabel: "Consultar precio", consult: true, art: "toy", hue: "sky", img: "./fotos/juguetes.jpg" },
    ],
  },
];

export const formatPrice = (n) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(n);
