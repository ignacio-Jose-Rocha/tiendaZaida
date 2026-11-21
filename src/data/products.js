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
      { id: "m1", name: "Hilo de algodón", desc: "Carretel de 500 m. Más de 20 colores.", price: 2800, art: "spool", hue: "rose", img: "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?auto=format&fit=crop&w=900&q=85" },
      { id: "m2", name: "Agujas surtidas", desc: "Set de 30 para coser, bordar y lana.", price: 3200, art: "needles", hue: "gold", img: "https://cdn.cs.1worldsync.com/d9/06/d9062cd9-e20b-41e6-a03a-ce7a4a99dbb6.jpg" },
      { id: "m3", name: "Botones surtidos", desc: "Frasco de 200 g con todos los tamaños.", price: 4500, art: "buttons", hue: "plum", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85" },
      { id: "m4", name: "Cierres de colores", desc: "Cremalleras de 20 cm. Pack de 5.", price: 3900, art: "zipper", hue: "sky", img: "https://www.fil2000-mercerie.fr/uploads/M13iYq4z/fermeture-4spy_302.jpg" },
      { id: "m5", name: "Cinta métrica", desc: "Flexible, 150 cm, con números en ambos lados.", price: 1500, art: "tape", hue: "mint", img: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=900&q=85" },
      { id: "m6", name: "Tijera de costura", desc: "Acero inoxidable de 21 cm. Corte preciso.", price: 9800, art: "scissors", hue: "plum", img: "https://www.sewingpartsonline.com/cdn/shop/files/BK1208_2.jpg?v=1754405598&width=750" },
      { id: "m7", name: "Ovillo de lana", desc: "100 g, suave y fácil de tejer.", price: 3600, art: "yarn", hue: "rose", img: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=900&q=85" },
      { id: "m8", name: "Cintas y puntillas", desc: "Rollo de 10 m. Varios anchos y colores.", price: 2600, art: "ribbon", hue: "gold", img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85" },
    ],
  },
  {
    id: "bebe",
    nav: "Bebé",
    title: "Ropa de bebé, suave desde el primer día",
    intro:
      "Algodón suave, costuras planas y colores tiernos. Talles de recién nacido a 24 meses.",
    tone: "blush",
    products: [
      { id: "b1", name: "Body de algodón x3", desc: "Manga corta con broches en la entrepierna.", price: 18900, art: "onesie", hue: "sky", img: "https://jesmary.net/uploads/product/eb0.jpg" },
      { id: "b2", name: "Escarpines tejidos", desc: "Par de lana suave con elástico en el tobillo.", price: 7200, art: "booties", hue: "rose", img: "https://i5.walmartimages.com/seo/XIMIN-Baby-Booties-Newborn-First-Walkers-Cozy-Shoes-Sock-Shoes-Warm-Hand-Knit-Soft-Booties-for-Toddler-Infant-Boy-Girl-Cozy-Shoes-0-3-Months-White_d55d80eb-9e5c-485f-bcec-33270cb5c467.401bdab476dbb42beef6b21b1048d12c.jpeg" },
      { id: "b3", name: "Gorrito de algodón", desc: "Abriga sin apretar. Talle recién nacido.", price: 5400, art: "bonnet", hue: "mint", img: "https://cdn11.bigcommerce.com/s-ya1gqmao/images/stencil/original/products/1009/4410/BN224W__70964.1540297202.jpg?c=2" },
      { id: "b4", name: "Ranita con pie", desc: "Cierre frontal. Talles de 0 a 12 meses.", price: 22500, art: "onesie", hue: "gold", img: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=900&q=85" },
    ],
  },
  {
    id: "hombre",
    nav: "Hombre",
    title: "Ropa interior de hombre, cómoda todo el día",
    intro:
      "Algodón con elastano y elásticos que no marcan. Talles del S al XXL.",
    tone: "wine",
    products: [
      { id: "h1", name: "Boxer de algodón x3", desc: "Con elastano para que acompañe cada movimiento.", price: 15900, art: "boxer", hue: "plum", img: "https://www.falke.com/media/i/HW23_DailyUnderwear_Daily-Natural_Men_750x1000px-10814-0.jpg" },
      { id: "h2", name: "Slip clásico x3", desc: "Elástico forrado que no marca ni molesta.", price: 12400, art: "boxer", hue: "sky", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=900&q=85" },
      { id: "h3", name: "Camiseta interior x2", desc: "Musculosa de algodón peinado, suave al tacto.", price: 14800, art: "tank", hue: "gold", img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=85" },
      { id: "h4", name: "Medias soquetes x6", desc: "Algodón reforzado en talón y punta.", price: 11200, art: "socks", hue: "mint", promo: "2x1", img: "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=900&q=85" },
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
      { id: "j1", name: "Anillo Aurora", desc: "Plata 925 con baño de oro y circón central.", price: 48900, art: "ring", hue: "gold", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=85" },
      { id: "j2", name: "Collar Perla Barroca", desc: "Perla de río natural sobre cadena fina de oro 18k.", price: 62500, art: "necklace", hue: "rose", img: "https://www.angelbarocco.com/cdn/shop/collections/modern-pearls-714760.jpg?crop=center&height=1559&v=1719483880&width=1559" },
      { id: "j3", name: "Aros Gota de Luna", desc: "Cristales facetados que bailan con cada paso.", price: 37800, art: "earrings", hue: "plum", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85" },
      { id: "j4", name: "Pulsera Eslabón", desc: "Eslabones gruesos, cierre seguro, brillo duradero.", price: 54200, art: "bracelet", hue: "gold", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=85" },
    ],
  },
  {
    id: "bijouterie",
    nav: "Bijouterie",
    title: "Bijouterie para jugar",
    intro:
      "Color, volumen y mucha personalidad. Combiná varias piezas y armá tu propio estilo sin gastar de más.",
    tone: "blush",
    products: [
      { id: "bj1", name: "Set Trío Dorado", desc: "Collar, aros y pulsera a juego. Se regala solo.", price: 21900, art: "necklace", hue: "gold", img: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85" },
      { id: "bj2", name: "Aros Argolla Maxi", desc: "Livianas, acero quirúrgico, no ennegrecen.", price: 9800, art: "earrings", hue: "rose", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85" },
      { id: "bj3", name: "Pulseras Apilables", desc: "Pack de 5 para mezclar como quieras.", price: 12400, art: "bracelet", hue: "plum", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=85" },
      { id: "bj4", name: "Anillo Cóctel", desc: "Piedra grande color rubí. Todas las miradas.", price: 8900, art: "ring", hue: "plum", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=85" },
    ],
  },
  {
    id: "ropa",
    nav: "Ropa",
    title: "Ropa que te sienta bien",
    intro:
      "Telas suaves, cortes que favorecen y prendas que van de la oficina a la cena sin cambiarte.",
    tone: "pearl",
    products: [
      { id: "r1", name: "Vestido Satén Midi", desc: "Caída fluida, escote en V. Talles S al XL.", price: 78900, art: "dress", hue: "plum", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85" },
      { id: "r2", name: "Blazer Estructurado", desc: "Hombros definidos y forro suave.", price: 92000, art: "blazer", hue: "gold", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=85" },
      { id: "r3", name: "Blusa Lazo", desc: "Gasa liviana con moño al cuello. Cuatro colores.", price: 46500, art: "dress", hue: "rose", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85" },
      { id: "r4", name: "Pantalón Sastrero", desc: "Tiro alto y pierna ancha que estiliza.", price: 68400, art: "blazer", hue: "plum", img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=85" },
    ],
  },
  {
    id: "lenceria",
    nav: "Lencería",
    title: "Lencería de mujer para sentirte única",
    intro:
      "Encaje, tules y satén. Diseñada para que te sientas hermosa antes que nadie te vea.",
    tone: "wine",
    products: [
      { id: "l1", name: "Conjunto Encaje Rosé", desc: "Corpiño sin aro y bombacha de encaje bordado.", price: 39800, art: "lingerie", hue: "rose", promo: "2x1", img: "https://images.unsplash.com/photo-1566206091558-7f218b696731?auto=format&fit=crop&w=900&q=85" },
      { id: "l2", name: "Body Medianoche", desc: "Tul transparente con detalles en satén negro.", price: 52600, art: "lingerie", hue: "plum", promo: "2x1", img: "https://images.unsplash.com/photo-1566206091558-7f218b696731?auto=format&fit=crop&w=900&q=85" },
      { id: "l3", name: "Camisón de Seda", desc: "Tirantes finos y puntilla en el escote.", price: 58300, art: "dress", hue: "gold", promo: "2x1", img: "https://softnoir.com/cdn/shop/files/soft-noir-black-satin-lace-panel-chemise-robe-set-white-background.png?v=1779634296&width=1086" },
      { id: "l4", name: "Bata Kimono", desc: "Satén liviano con cinto. Se lleva con todo.", price: 44900, art: "blazer", hue: "rose", promo: "2x1", img: "https://britishelegance.com/cdn/shop/files/blk_7bb8a446-3b9b-42ca-a88c-93333ebe4b7d.png?v=1763324885&width=1946" },
    ],
  },
  {
    id: "varios",
    nav: "Varios",
    title: "Detalles que completan",
    intro:
      "Carteras, lentes, pañuelos y todo lo que le da el toque final a tu look (o al regalo perfecto).",
    tone: "blush",
    products: [
      { id: "v1", name: "Cartera Baguette", desc: "Cuero ecológico con cadena dorada removible.", price: 59900, art: "bag", hue: "plum", img: "https://rehstudios.com/cdn/shop/files/9_e5d6bf93-0d1f-4f31-b90c-9ee844575f0b.png?crop=center&height=1000&v=1774493555&width=1000" },
      { id: "v2", name: "Lentes Cat Eye", desc: "Filtro UV400 y estuche rígido incluido.", price: 26700, art: "glasses", hue: "gold", img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85" },
      { id: "v3", name: "Pañuelo de Seda", desc: "Estampa exclusiva. Al cuello, al pelo o a la cartera.", price: 18900, art: "scarf", hue: "rose", img: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=900&q=85" },
      { id: "v4", name: "Neceser Bordado", desc: "Para llevar tus cosas a donde vayas.", price: 15300, art: "bag", hue: "gold", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85" },
    ],
  },
];

export const formatPrice = (n) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(n);
