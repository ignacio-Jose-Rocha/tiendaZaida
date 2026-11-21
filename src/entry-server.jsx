import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App.jsx";

// Se usa solo al compilar (scripts/prerender.mjs) para dejar el contenido ya escrito en el HTML.
export function render() {
  return renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
