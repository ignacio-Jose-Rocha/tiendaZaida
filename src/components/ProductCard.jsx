import { useCart } from "../cart/CartContext.jsx";
import { formatPrice } from "../data/products.js";
import ProductImage from "./ProductImage.jsx";
import Stepper from "./Stepper.jsx";
import { CartIcon, WhatsAppIcon } from "./Icons.jsx";
import { BRAND, whatsappLink } from "../config.js";

export default function ProductCard({ product }) {
  const { qtyOf, add, dec, setOpen } = useCart();
  const qty = qtyOf(product.id);

  return (
    <article className="card">
      <div className="card__media">
        <ProductImage product={product} label={`${product.name}: ${product.desc.replace(/\.$/, "")}`} />
        {product.promo && <span className={`card__badge ${product.promo === "6+1" ? "card__badge--wide" : ""}`}>{product.promo === "6+1" ? "6 DOCENAS + 1 GRATIS" : product.promo}</span>}
      </div>
      <div className="card__body">
        <h3>{product.name}</h3>
        <p>{product.desc}</p>
        <p className="card__price">{product.priceLabel || formatPrice(product.price)}</p>

        {product.consult ? (
          <a
            className="btn btn--cart"
            href={whatsappLink(`Hola ${BRAND}! Quisiera consultar precios y disponibilidad de ${product.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={19} /> Consultar por WhatsApp
          </a>
        ) : qty === 0 ? (
          <button className="btn btn--cart" onClick={() => add(product.id)}>
            <CartIcon size={19} /> Agregar al carrito
          </button>
        ) : (
          <div className="card__added">
            <Stepper
              qty={qty}
              name={product.name}
              onDec={() => dec(product.id)}
              onInc={() => add(product.id)}
            />
            <button className="link" onClick={() => setOpen(true)}>
              Ver carrito y enviar pedido
            </button>
          </div>
        )}
      </div>
    </article>
  );
}
