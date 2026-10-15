import { loadFont } from "@remotion/google-fonts/Inter";

/**
 * IDENTITÀ DEL CLIENTE
 * Valori neutri di partenza: /nuovo-video li sostituisce.
 * Se il cliente ha un sito fatto con starter-siti, copia qui i token di
 * src/app/globals.css (:root) e il font di src/app/layout.tsx, così sito e video
 * sembrano parte dello stesso brand.
 * Le scene usano solo questi valori: niente colori o font scritti a mano.
 */

// Font segnaposto. Per un secondo font (titoli) importalo allo stesso modo
// da "@remotion/google-fonts/<NomeFont>" e assegnalo a font.titoli.
const testo = loadFont("normal", {
  weights: ["400", "600", "700"],
  subsets: ["latin"],
});

export const font = {
  testo: testo.fontFamily,
  titoli: testo.fontFamily,
};

export const colori = {
  fondo: "#ffffff",
  superficie: "#f3f4f6",
  testo: "#1c1d21",
  testoSecondario: "#5d6068",
  linee: "#dfe1e6",
  accento: "#2f4fbf",
  suAccento: "#ffffff",
};

/** Raggio degli angoli di immagini e riquadri, in px a 1080 di lato corto. */
export const raggio = 24;

/** Logo in public/brand/. Meglio SVG o PNG trasparente. */
export const logo = "brand/logo.svg";
