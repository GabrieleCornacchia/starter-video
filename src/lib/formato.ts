import { useVideoConfig } from "remotion";

export type TipoFormato = "orizzontale" | "verticale" | "quadrato";

/**
 * Misure che si adattano al formato.
 * `u` vale 1 quando il lato corto è 1080 px: tutte le misure delle scene
 * sono scritte "a 1080" e moltiplicate per `u`.
 * I margini tengono il testo lontano dall'interfaccia delle app:
 * in verticale (Reels, TikTok, Shorts) in alto ci sono nome e menu,
 * in basso didascalia e pulsanti, a destra le icone.
 */
export function useFormato() {
  const { width, height } = useVideoConfig();
  const rapporto = width / height;
  const tipo: TipoFormato =
    rapporto > 1.2 ? "orizzontale" : rapporto < 0.8 ? "verticale" : "quadrato";
  const u = Math.min(width, height) / 1080;

  const margini =
    tipo === "verticale"
      ? { alto: 260, basso: 440, sinistra: 80, destra: 150 }
      : tipo === "orizzontale"
        ? { alto: 100, basso: 100, sinistra: 140, destra: 140 }
        : { alto: 96, basso: 96, sinistra: 96, destra: 96 };

  // Dimensioni minime leggibili su telefono (a 1080 di lato corto).
  const testo = {
    titolo: tipo === "orizzontale" ? 104 : 96,
    sottotitolo: 48,
    corpo: 44,
    piccolo: 34,
  };

  return { tipo, u, margini, testo, width, height };
}
