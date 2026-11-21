// Prerenderiza la página: toma el HTML compilado por Vite y le inserta el contenido de React ya renderizado.
// Resultado: Google, WhatsApp y cualquier buscador ven textos, títulos y productos sin ejecutar JavaScript.
import { build } from "vite";
import { readFile, writeFile, rm } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const ssrDir = resolve(root, "dist-ssr");
const outDir = process.argv[2] || "dist"; // carpeta compilada (por defecto "dist")
const htmlPath = resolve(root, outDir, "index.html");

await build({
  logLevel: "warn",
  build: { ssr: "src/entry-server.jsx", outDir: "dist-ssr", emptyOutDir: true },
});

try {
  const { render } = await import(pathToFileURL(resolve(ssrDir, "entry-server.js")).href);
  const appHtml = render();

  const template = await readFile(htmlPath, "utf8");
  if (!template.includes('<div id="root"></div>')) {
    throw new Error(`No encontré <div id="root"></div> en ${htmlPath}`);
  }
  await writeFile(htmlPath, template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`));
  console.log(`✓ Prerender listo (${(appHtml.length / 1024).toFixed(0)} kB de HTML con el contenido).`);
} finally {
  await rm(ssrDir, { recursive: true, force: true });
}
