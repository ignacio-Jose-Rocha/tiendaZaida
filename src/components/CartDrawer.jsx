import { useEffect, useRef } from "react";
import { useCart } from "../cart/CartContext.jsx";
import { formatPrice } from "../data/products.js";
import ProductImage from "./ProductImage.jsx";
import Stepper from "./Stepper.jsx";
import { WhatsAppIcon } from "./Icons.jsx";

export default function CartDrawer() {
  const { open, setOpen, lines, total, add, dec, remove, clear, orderLink } = useCart();
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, setOpen]);

  return (
    <>
      <div className={`overlay ${open ? "is-open" : ""}`} onClick={() => setOpen(false)} />
      <aside
        className={`drawer ${open ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Carrito de compras"
        aria-hidden={!open}
      >
        <header className="drawer__head">
          <h2>Tu pedido</h2>
          <button ref={closeRef} className="drawer__close" onClick={() => setOpen(false)} aria-label="Cerrar carrito">
            ✕
          </button>
        </header>

        {lines.length === 0 ? (
          <div className="drawer__empty">
            <p>Tu carrito está vacío.</p>
            <p>Agregá productos y mandanos el pedido por WhatsApp.</p>
            <button className="btn btn--gold" onClick={() => setOpen(false)}>
              Seguir mirando
            </button>
          </div>
        ) : (
          <>
            <ul className="drawer__list">
              {lines.map(({ product, qty, subtotal }) => (
                <li key={product.id}>
                  <div className="drawer__thumb">
                    <ProductImage product={product} label="" />
                  </div>
                  <div className="drawer__info">
                    <strong>{product.name}</strong>
                    <span>{formatPrice(product.price)} c/u</span>
                    {product.promo && (
                      <span className="drawer__promo">
                        {qty >= 2 ? `${product.promo} aplicado` : "Sumá 2 y pagás 1"}
                      </span>
                    )}
                    <Stepper
                      small
                      qty={qty}
                      name={product.name}
                      onDec={() => dec(product.id)}
                      onInc={() => add(product.id)}
                    />
                  </div>
                  <div className="drawer__line">
                    <span>{formatPrice(subtotal)}</span>
                    <button className="link" onClick={() => remove(product.id)}>
                      Quitar
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <footer className="drawer__foot">
              <div className="drawer__total">
                <span>Total</span>
                <strong>{formatPrice(total)}</strong>
              </div>
              <a className="btn btn--wa-big" href={orderLink} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={20} /> Enviar pedido por WhatsApp
              </a>
              <button className="link" onClick={clear}>
                Vaciar carrito
              </button>
            </footer>
          </>
        )}
      </aside>
    </>
  );
}
