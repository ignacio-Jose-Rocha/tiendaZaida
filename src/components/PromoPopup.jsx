import { useCallback, useEffect, useRef, useState } from "react";
import { PROMO } from "../config.js";

const SEEN_KEY = "tienda-zaida-promo-visto";

const alreadySeen = () => {
  try {
    return sessionStorage.getItem(SEEN_KEY) === "1";
  } catch {
    return false;
  }
};

const rays = Array.from({ length: 12 }, (_, i) => i * 30);
const leaves = [-165, -135, -100, -60, -25, 10];

export default function PromoPopup() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef(null);

  // Una vez por visita: se recuerda mientras la pestaña siga abierta.
  const dismiss = useCallback(() => {
    setOpen(false);
    try {
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      /* sin almacenamiento: se mostrará de nuevo al recargar */
    }
  }, []);

  useEffect(() => {
    if (!PROMO.enabled || alreadySeen()) return;
    const t = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && dismiss();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, dismiss]);

  if (!open) return null;

  return (
    <div className="promo" onClick={dismiss}>
      <div
        className="promo__card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="promo-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} className="promo__close" onClick={dismiss} aria-label="Cerrar promoción">
          ✕
        </button>

        <div className="promo__art" aria-hidden="true">
          <svg viewBox="0 0 520 190" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="promo-sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#FFD86B" />
                <stop offset="1" stopColor="#FF8E72" />
              </linearGradient>
            </defs>
            <rect width="520" height="190" fill="url(#promo-sky)" />

            <g className="promo__rays">
              {rays.map((a) => (
                <line
                  key={a}
                  x1="390"
                  y1="30"
                  x2="390"
                  y2="14"
                  stroke="#FFF3B0"
                  strokeWidth="5"
                  strokeLinecap="round"
                  transform={`rotate(${a} 390 78)`}
                />
              ))}
            </g>
            <circle cx="390" cy="78" r="36" fill="#FFE680" />
            <circle cx="390" cy="78" r="26" fill="#FFF6C9" />

            <path d="M62 190 C58 150 66 120 78 96" fill="none" stroke="#8B5E3C" strokeWidth="8" strokeLinecap="round" />
            {leaves.map((a) => (
              <path
                key={a}
                d="M0 0 C26 -26 76 -28 110 -4 C78 -12 34 -8 0 0Z"
                fill="#1B8F6A"
                transform={`translate(78 96) rotate(${a})`}
              />
            ))}

            <path d="M0 140 C60 120 120 160 180 140 S300 120 360 140 S480 160 520 140 V190 H0Z" fill="#4FD1C5" opacity=".85" />
            <path d="M0 162 C70 142 130 182 200 162 S330 142 400 162 S490 176 520 162 V190 H0Z" fill="#12A99B" />
          </svg>
        </div>

        <div className="promo__body">
          <p className="promo__tag">{PROMO.tag}</p>
          <h2 id="promo-title">
            <span className="promo__big">{PROMO.headline}</span>
            <span>{PROMO.text}</span>
          </h2>
          <p className="promo__detail">{PROMO.detail}</p>
          <div className="promo__actions">
            <a className="btn btn--coral" href="#lenceria" onClick={dismiss}>
              Ver lencería
            </a>
            <a className="btn btn--teal" href="#hombre" onClick={dismiss}>
              Ver medias
            </a>
          </div>
          <button className="link" onClick={dismiss}>
            Ahora no
          </button>
          <p className="promo__fine">{PROMO.fine}</p>
        </div>
      </div>
    </div>
  );
}
