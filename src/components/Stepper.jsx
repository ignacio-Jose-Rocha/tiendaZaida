export default function Stepper({ qty, onDec, onInc, name, small = false }) {
  return (
    <div className={`stepper ${small ? "stepper--sm" : ""}`} role="group" aria-label={`Cantidad de ${name}`}>
      <button type="button" onClick={onDec} aria-label={`Quitar una unidad de ${name}`}>
        −
      </button>
      <output aria-live="polite">{qty}</output>
      <button type="button" onClick={onInc} aria-label={`Agregar una unidad de ${name}`}>
        +
      </button>
    </div>
  );
}
