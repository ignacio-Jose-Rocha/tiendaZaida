import ProductCard from "./ProductCard.jsx";

export default function Section({ data }) {
  return (
    <section id={data.id} className={`section section--${data.tone}`} aria-labelledby={`${data.id}-titulo`}>
      <div className="section__head">
        <h2 id={`${data.id}-titulo`}>{data.title}</h2>
        <p>{data.intro}</p>
      </div>
      <div className="grid">
        {data.products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
