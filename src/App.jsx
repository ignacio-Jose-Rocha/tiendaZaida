import { CartProvider } from "./cart/CartContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Ribbon from "./components/Ribbon.jsx";
import Section from "./components/Section.jsx";
import Contact from "./components/Contact.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
import PromoPopup from "./components/PromoPopup.jsx";
import { sections } from "./data/products.js";

export default function App() {
  return (
    <CartProvider>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido">
        <Hero />
        <Ribbon />
        {sections.map((s) => (
          <Section key={s.id} data={s} />
        ))}
        <Contact />
      </main>
      <CartDrawer />
      <PromoPopup />
    </CartProvider>
  );
}
