import { Sparkle } from "./Icons.jsx";

const items = [
  "Promo de verano 2x1 en medias y lencería",
  "Armá tu pedido en el carrito",
  "Envíos a todo el país",
  "Retiro en el local",
  "Atención por WhatsApp",
];

export default function Ribbon() {
  const row = [...items, ...items];
  return (
    <div className="ribbon" aria-label="Beneficios">
      <div className="ribbon__track">
        {row.map((t, i) => (
          <span key={i} aria-hidden={i >= items.length}>
            {t} <Sparkle size={12} />
          </span>
        ))}
      </div>
    </div>
  );
}
