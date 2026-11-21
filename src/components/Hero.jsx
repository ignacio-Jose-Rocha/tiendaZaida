import { BRAND, whatsappLink } from "../config.js";
import { WhatsAppIcon, Sparkle } from "./Icons.jsx";

export default function Hero() {
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

      <div className="hero__visual" aria-hidden="true">
        <div className="arch arch--back" />
        <div className="arch arch--mid" />
        <div className="arch arch--front">
          <img
            className="hero__photo"
            src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=800&q=80"
            srcSet="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=480&q=80 480w, https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=1200&q=80 1200w"
            sizes="(max-width: 860px) 78vw, 440px"
            alt="Selección de telas y prendas en una composición de estilo editorial"
            width="800"
            height="1000"
            fetchpriority="high"
            decoding="async"
            referrerPolicy="no-referrer"
          />
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
