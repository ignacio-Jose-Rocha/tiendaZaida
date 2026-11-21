import { useEffect, useState } from "react";
import { BRAND } from "../config.js";
import { sections } from "../data/products.js";
import { useCart } from "../cart/CartContext.jsx";
import { MenuIcon, CartIcon } from "./Icons.jsx";

const links = [
  { id: "inicio", label: "Inicio" },
  ...sections.map((s) => ({ id: s.id, label: s.nav })),
  { id: "contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);
  const { count, setOpen: openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="nav__inner">
        <a href="#inicio" className="nav__brand" onClick={() => setOpen(false)}>
          {BRAND}
        </a>

        <nav id="menu" className="nav__menu" aria-label="Secciones">
          <ul>
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={active === l.id ? "is-active" : ""}
                  aria-current={active === l.id ? "true" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__actions">
          <button
            className="nav__cart"
            aria-label={`Abrir carrito, ${count} ${count === 1 ? "producto" : "productos"}`}
            onClick={() => {
              setOpen(false);
              openCart(true);
            }}
          >
            <CartIcon size={25} />
            {count > 0 && (
              <span key={count} className="nav__badge">
                {count}
              </span>
            )}
          </button>
          <button
            className="nav__toggle"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="menu"
            onClick={() => setOpen((v) => !v)}
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>
    </header>
  );
}
