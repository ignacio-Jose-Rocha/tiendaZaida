import { BRAND, CITY, INSTAGRAM, whatsappLink } from "../config.js";
import { WhatsAppIcon, InstagramIcon } from "./Icons.jsx";

export default function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="contact__inner">
        <h2>Tu pedido está a un mensaje.</h2>
        <p>
          Contanos qué necesitás (color de hilo, talle, cantidad) y te respondemos en el
          momento. Atendemos todos los días.
        </p>
        <div className="hero__actions hero__actions--center">
          <a
            className="btn btn--gold"
            href={whatsappLink(`Hola ${BRAND}! Quisiera hacer una consulta.`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={18} /> Escribinos por WhatsApp
          </a>
          <a
            className="btn btn--ghost"
            href={`https://instagram.com/${INSTAGRAM}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon size={18} /> @{INSTAGRAM}
          </a>
        </div>
      </div>
      <footer className="footer">
        <span className="footer__brand">{BRAND}</span>
        <span>{CITY}</span>
        <span suppressHydrationWarning>© {new Date().getFullYear()} Todos los derechos reservados</span>
      </footer>
    </section>
  );
}
