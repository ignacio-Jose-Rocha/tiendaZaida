import { useEffect, useRef, useState } from "react";
import ProductArt from "./ProductArt.jsx";

// Fotos de Unsplash: se piden en varios tamaños para que el celular no descargue la versión grande.
const isUnsplash = (url) => /^https:\/\/images\.unsplash\.com\//.test(url);
const sized = (url, w) => url.replace(/([?&])w=\d+/, `$1w=${w}`).replace(/([?&])q=\d+/, "$1q=80");

const SIZES = "(max-width: 520px) 380px, (max-width: 1080px) 46vw, 290px";

// Busca la foto en product.img o en public/fotos/<id>.jpg. Si no existe o falla, muestra el dibujo.
export default function ProductImage({ product, label }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef(null);

  // Si la imagen falló antes de que React "activara" la página prerenderizada, onError ya no se entera.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) {
    return <ProductArt art={product.art} hue={product.hue} label={label} />;
  }

  const rawSrc = product.img || `./fotos/${product.id}.jpg`;
  const src = rawSrc.startsWith("./fotos/")
    ? `${import.meta.env.BASE_URL}fotos/${rawSrc.slice("./fotos/".length)}`
    : rawSrc;
  const srcSet = isUnsplash(src)
    ? [400, 600, 900].map((w) => `${sized(src, w)} ${w}w`).join(", ")
    : undefined;

  return (
    <img
      ref={ref}
      src={srcSet ? sized(src, 600) : src}
      srcSet={srcSet}
      sizes={srcSet ? SIZES : undefined}
      alt={label}
      width="800"
      height="920"
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
    />
  );
}
