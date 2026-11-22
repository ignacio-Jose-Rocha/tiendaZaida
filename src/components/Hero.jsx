import { useEffect, useState } from "react";
import { BRAND, whatsappLink } from "../config.js";
import { WhatsAppIcon, Sparkle } from "./Icons.jsx";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=1000&q=85",
    alt: "Selección de prendas de vestir",
    className: "hero__photo--fashion",
  },
  {
    src: "./fotos/cartel-zaida.jpg",
    alt: "Cartel rosa de Zaida con los rubros de la mercería y juguetería",
    className: "hero__photo--sign",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current === 0 ? 1 : 0));
    }, 4800);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="hero">
      <div className="hero__copy">
        <p className="hero__kicker">
          <Sparkle size={12} /> Mercería, ropa, lencería, joyas y más
        </p>
        <h1>
          Todo lo que necesitás para <span>coser, tejer y vestir.</span>
        </h1>
        <p className="hero__lead">
          Mercería, ropa de bebé, ropa interior, lencería, joyas y bijouterie. Armá tu
          carrito y mandanos el pedido por WhatsApp.
        </p>
        <div className="hero__actions">
          <a className="btn btn--gold" href="#merceria">
            Ver mercería
          </a>
          <a
            className="btn btn--ghost"
            href={whatsappLink(`Hola ${BRAND}! Quisiera hacer una consulta.`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={18} /> Consultar por WhatsApp
          </a>
        </div>
      </div>

      <div className="hero__visual" aria-label="Fotos de la tienda Zaida">
        <div className="arch arch--back" />
        <div className="arch arch--mid" />
        <div className="arch arch--front">
          <div className="hero__slides">
            {slides.map((slide, index) => (
              <img
                key={slide.src}
                className={`hero__photo ${slide.className} ${index === activeSlide ? "is-active" : ""}`}
                src={slide.src}
                alt={slide.alt}
                width="900"
                height="1200"
                fetchPriority={index === 0 ? "high" : "auto"}
                decoding="async"
              />
            ))}
          </div>
        </div>
        <div className="hero__seal">
          <span>Pedí por WhatsApp</span>
        </div>
        <span className="twinkle t1"><Sparkle size={26} /></span>
        <span className="twinkle t2"><Sparkle size={16} /></span>
        <span className="twinkle t3"><Sparkle size={20} /></span>
      </div>
    </section>
  );
}
