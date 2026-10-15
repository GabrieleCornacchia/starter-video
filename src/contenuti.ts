import type { PropsSpot } from "./schema";

/**
 * Contenuti del video. Unica fonte per tutti i formati: modifica qui,
 * non nei singoli formati in Root.tsx.
 * /nuovo-video li compila a partire da docs/brief.md.
 */
export const contenuti: PropsSpot = {
  titolo: "Nome cliente",
  sottotitolo: "Una frase chiara su cosa offre e per chi.",
  vantaggi: [
    {
      titolo: "Primo vantaggio",
      testo: "Cosa ottiene chi sceglie il cliente, detto in concreto.",
      immagine: "",
    },
    {
      titolo: "Secondo vantaggio",
      testo: "Un altro motivo per sceglierlo, con un dettaglio verificabile.",
      immagine: "",
    },
  ],
  invito: "Prenota ora",
  contatto: "www.dominio-cliente.it",
  musica: "",
};
