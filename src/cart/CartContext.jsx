import { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react";
import { BRAND, whatsappLink } from "../config.js";
import { formatPrice, sections } from "../data/products.js";

const CartContext = createContext(null);
const STORAGE_KEY = "tienda-zaida-cart";

const catalog = Object.fromEntries(
  sections.flatMap((s) => s.products).map((p) => [p.id, p])
);

// El carrito guarda solo id -> cantidad; los precios salen siempre del catálogo actual.
function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    const items = {};
    for (const [id, qty] of Object.entries(saved)) {
      if (catalog[id] && Number.isInteger(qty) && qty > 0) items[id] = qty;
    }
    return items;
  } catch {
    return {};
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "hydrate":
      return action.items;
    case "add":
      return { ...state, [action.id]: (state[action.id] || 0) + 1 };
    case "dec": {
      const next = { ...state };
      const qty = (state[action.id] || 0) - 1;
      if (qty <= 0) delete next[action.id];
      else next[action.id] = qty;
      return next;
    }
    case "remove": {
      const next = { ...state };
      delete next[action.id];
      return next;
    }
    case "clear":
      return {};
    default:
      return state;
  }
}

// Con promo 2x1 se paga la mitad de las unidades, redondeando hacia arriba (3 unidades = 2 pagas).
const paidUnits = (product, qty) => (product.promo === "2x1" ? Math.ceil(qty / 2) : qty);

export function CartProvider({ children }) {
  // Arranca vacío para que coincida con el HTML prerenderizado; el carrito guardado se carga al montar.
  const [items, dispatch] = useReducer(reducer, {});
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    dispatch({ type: "hydrate", items: load() });
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* sin almacenamiento: el carrito sigue funcionando en memoria */
    }
  }, [items, ready]);

  const value = useMemo(() => {
    const lines = Object.entries(items).map(([id, qty]) => {
      const product = catalog[id];
      const paid = paidUnits(product, qty);
      return { product, qty, paid, subtotal: paid * product.price };
    });
    const count = lines.reduce((n, l) => n + l.qty, 0);
    const total = lines.reduce((n, l) => n + l.subtotal, 0);

    const message = [
      `Hola ${BRAND}! Quiero hacer este pedido:`,
      "",
      ...lines.map(
        ({ product, qty, subtotal }) =>
          `• ${qty} x ${product.name} — ${formatPrice(subtotal)}${product.promo ? ` (${product.promo})` : ""}`
      ),
      "",
      `Total: ${formatPrice(total)}`,
    ].join("\n");

    return {
      lines,
      count,
      total,
      open,
      setOpen,
      qtyOf: (id) => items[id] || 0,
      add: (id) => dispatch({ type: "add", id }),
      dec: (id) => dispatch({ type: "dec", id }),
      remove: (id) => dispatch({ type: "remove", id }),
      clear: () => dispatch({ type: "clear" }),
      orderLink: whatsappLink(message),
    };
  }, [items, open]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
}
