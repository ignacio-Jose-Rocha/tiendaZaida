# Tienda Zaida – Landing con carrito y pedido por WhatsApp (React + Vite)

Landing responsiva con ocho secciones de productos: mercería, ropa de bebé, ropa interior de hombre,
joyas, bijouterie, ropa, lencería de mujer y varios. Tiene navegación fija arriba, un popup de promoción
y un carrito que arma el pedido y lo envía por WhatsApp.

## Cómo funciona el carrito

1. Debajo de cada producto, el botón **Agregar al carrito** lo suma (después aparece un selector de cantidad).
2. El ícono del carrito de la barra superior muestra cuántos productos hay y abre el panel del pedido.
3. En el panel se ajustan cantidades y se ve el total. **Enviar pedido por WhatsApp** abre el chat con el
   detalle completo ya escrito (productos, cantidades, precios y total).
4. El carrito se guarda en el navegador: si el cliente cierra la página y vuelve, sigue ahí.

## Promoción de verano 2x1

- El popup aparece una vez por visita. Se edita (o se apaga con `enabled: false`) en `src/config.js`, bloque `PROMO`.
- Los productos con `promo: "2x1"` en `src/data/products.js` muestran la etiqueta 2x1 y el carrito les aplica
  el descuento solo: se pagan la mitad de las unidades, redondeando hacia arriba (3 unidades = se pagan 2).
- Ahora tienen 2x1 las medias soquetes y los cuatro productos de lencería de mujer.
  Para terminar la promo, borrá `promo: "2x1"` de esos productos y poné `enabled: false`.

## Cómo correrla

```bash
npm install
npm run dev        # desarrollo en http://localhost:5173
npm run build      # genera /dist (con SEO y contenido prerenderizado) lista para subir
npm run preview    # prueba local del build
```

Requiere Node.js 18 o superior.

## Lo primero que tenés que cambiar

1. **Tu número de WhatsApp y datos del local:** `src/config.js`
   - `WHATSAPP_NUMBER`: con código de país, sin `+` ni espacios (Argentina celular: `549` + área sin 0 + número).
   - `BRAND`, `INSTAGRAM`, `CITY`.
2. **Productos, precios y categorías:** `src/data/products.js`
   - Cada producto necesita un `id` único. Los precios de ejemplo hay que reemplazarlos por los reales.
   - Para sumar un producto, copiá una línea y cambiá `id`, `name`, `desc`, `price`.
   - Para crear una categoría nueva, copiá un bloque completo de sección (aparece sola en el menú).

## Fotos reales de los productos

1. Guardá cada foto en `public/fotos/` con el **id del producto** como nombre: `m1.jpg`, `j3.jpg`, `l2.jpg`, etc.
   (el id está en `src/data/products.js`).
2. Listo: la foto reemplaza al dibujo automáticamente, en la tarjeta y en el carrito.
3. Si un producto no tiene foto, se sigue mostrando el dibujo, así que podés ir cargándolas de a poco.
4. Para usar otro nombre o formato (png, webp), agregá `img: "./fotos/mi-foto.webp"` al producto.

Tip: fotos cuadradas o verticales, de unos 800 px de ancho, para que pesen poco y se vean nítidas.

## Colores y tipografías

Están al inicio de `src/styles.css` (variables `--wine`, `--rose`, `--gold`, etc.).
Las fuentes (Bodoni Moda y Jost) se cargan desde Google Fonts en `index.html`.

## Publicarla

Subí el contenido de `dist/` a Netlify, Vercel, Cloudflare Pages o GitHub Pages.

---

# SEO: qué está hecho y qué te toca completar

## Ya está resuelto en el código

- **Título y descripción** pensados para Google, con la palabra clave de cada rubro (mercería, ropa de bebé, lencería, joyas, bijouterie).
- **Dirección canónica**, `robots.txt` y `sitemap.xml` generados solos en cada build.
- **Vista previa al compartir** (WhatsApp, Facebook, Instagram, X) con imagen propia de 1200x630 (`public/og-image.png`).
- **Datos estructurados (JSON-LD)**: ficha del negocio (`Store`), el sitio y el catálogo con 36 productos, precio en ARS y disponibilidad.
- **Contenido prerenderizado**: `npm run build` deja el texto, los títulos y los productos escritos dentro del HTML, así Google
  y las apps de mensajería los ven sin ejecutar JavaScript.
- **Velocidad**: imágenes en varios tamaños (el celular baja la versión chica), carga diferida, imagen principal con prioridad.
- **Accesibilidad** (también cuenta para Google): un solo `h1`, `h2` por sección, texto alternativo en todas las fotos,
  enlace "Saltar al contenido", foco visible.
- **Íconos y manifest** (favicon, ícono de iPhone, ícono de Android).
- **`public/_headers`**: caché y seguridad para Netlify y Cloudflare Pages.

Todo se configura en `src/seo.config.js`.

## Lo que tenés que completar antes de publicar

1. **`siteUrl`** en `src/seo.config.js` (o compilá con `SITE_URL=https://tudominio.com npm run build`).
   Si queda la dirección de ejemplo, el build te avisa. Es lo más importante: sin esto el canonical y el sitemap apuntan mal.
2. **`WHATSAPP_NUMBER`** en `src/config.js` (hoy es un número de ejemplo).
3. **Datos del local** en `src/seo.config.js` → `business`: teléfono, dirección, código postal y horarios.
   Lo que dejes vacío no se publica. Cargá solo datos reales.
4. **Fotos propias** (ver abajo) y revisá que los precios y la disponibilidad sean reales: Google compara el
   precio del catálogo con el de la página.

## Fotos: un punto crítico

Hoy las fotos de `products.js` apuntan a páginas de terceros (Unsplash y varias tiendas como Walmart o Falke).
Eso trae tres problemas: pueden dejar de cargar en cualquier momento, ralentizan la página (y la velocidad influye en
el posicionamiento) y las de tiendas comerciales tienen derechos de autor.

Lo mejor es usar fotos propias: guardalas en `public/fotos/` con el id del producto (`m1.jpg`, `b2.jpg`...) y borrá el
campo `img` de ese producto. Las de Unsplash tienen licencia libre, pero igual conviene descargarlas y alojarlas vos.
Usá nombres y alt claros, JPG o WebP de unos 800 px de ancho y menos de 150 KB cada una.

## Después de publicar (esto es lo que realmente te hace aparecer en Google)

1. **Google Search Console** (search.google.com/search-console): agregá tu dominio, verificalo (podés pegar el código
   en `googleSiteVerification`) y enviá `https://tudominio.com/sitemap.xml`.
2. **Ficha de Google Business Profile** (business.google.com): es lo que te muestra en el mapa y en "cerca de mí".
   Usá el mismo nombre, dirección y teléfono que en la web. Para una tienda local es lo que más pesa.
3. **Instagram**: poné el link de la tienda en la bio y publicá seguido. Las menciones y los enlaces ayudan.
4. **Google Analytics** (opcional): pegá tu ID `G-...` en `googleAnalyticsId`.
5. **Probalo**: pegá la dirección en search.google.com/test/rich-results (datos estructurados) y en
   pagespeed.web.dev (velocidad).

## Límite a tener en cuenta

Esta página es una sola URL. Sirve para aparecer por el nombre de la tienda y por búsquedas generales.
Para posicionar cada rubro por separado ("ropa de bebé en [tu zona]", "mercería en [tu zona]") lo ideal es una página
propia por categoría (`/merceria`, `/bebe`, `/lenceria`...), cada una con su título, descripción y texto.
