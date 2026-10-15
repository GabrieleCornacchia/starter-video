import { Easing, interpolate } from "remotion";

/** Curva d'uscita morbida: parte veloce e si posa senza rimbalzi. */
export const morbida = Easing.bezier(0.16, 1, 0.3, 1);

const blocca = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

/**
 * Ingresso di un elemento: sale di `distanza` px e compare.
 * `inizio` e `durata` in frame.
 */
export function ingresso(
  frame: number,
  inizio: number,
  durata: number,
  distanza: number,
) {
  return {
    opacity: interpolate(frame, [inizio, inizio + durata], [0, 1], {
      ...blocca,
      easing: morbida,
    }),
    translate: `0px ${interpolate(
      frame,
      [inizio, inizio + durata],
      [distanza, 0],
      { ...blocca, easing: morbida },
    )}px`,
  };
}

/** Avvicinamento lento di un'immagine per tutta la scena (da 1 a `fine`). */
export function avvicinamento(frame: number, durata: number, fine = 1.06) {
  return interpolate(frame, [0, durata], [1, fine], blocca);
}
