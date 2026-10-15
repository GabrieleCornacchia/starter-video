import { z } from "zod";

/**
 * Contenuti di uno spot. Gli stessi contenuti producono tutti i formati.
 * I limiti di lunghezza esistono perché il testo deve leggersi in pochi secondi,
 * anche in verticale su un telefono.
 */
export const schemaSpot = z.object({
  /** Il gancio: deve funzionare da solo, senza audio, nei primi 2 secondi. */
  titolo: z.string().min(1).max(60),
  sottotitolo: z.string().max(90),
  /** Da 1 a 4 punti, uno per scena. */
  vantaggi: z
    .array(
      z.object({
        titolo: z.string().min(1).max(40),
        testo: z.string().max(110),
        /** Percorso in public/ (es. "media/foto-1.jpg"). Vuoto = scena solo testo. */
        immagine: z.string(),
      }),
    )
    .min(1)
    .max(4),
  /** Invito finale: cosa deve fare chi guarda. */
  invito: z.string().min(1).max(40),
  /** Dove farlo: sito, telefono, indirizzo. */
  contatto: z.string().max(50),
  /** File in public/audio/ (es. "audio/musica.mp3"). Vuoto = nessuna musica. */
  musica: z.string(),
});

export type PropsSpot = z.infer<typeof schemaSpot>;
