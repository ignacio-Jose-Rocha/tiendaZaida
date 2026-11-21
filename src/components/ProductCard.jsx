import { useCart } from "../cart/CartContext.jsx";
import { formatPrice } from "../data/products.js";
import ProductImage from "./ProductImage.jsx";
import Stepper from "./Stepper.jsx";
import { CartIcon } from "./Icons.jsx";

export default function ProductCard({ product }) {
  const { qtyOf, add, dec, setOpen } = useCart();
  const qty = qtyOf(product.id);

  return (
    <article className="card">
      <div className="card__media">
        <ProductImage product={product} label={`${product.name}: ${product.desc.replace(/\.$/, "")}`} />
        {product.promo && <span className="card__badge">{product.promo}</span>}
      </div>
      <div className="card__body">
        <h3>{product.name}</h3>
        <p>{product.desc}</p>
        <p className="card__price">{formatPrice(product.price)}</p>

        {qty === 0 ? (
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
