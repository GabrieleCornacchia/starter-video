import { Img, staticFile, useCurrentFrame } from "remotion";
import { colori, font, raggio } from "../brand";
import { Riquadro } from "../components/Riquadro";
import { useFormato } from "../lib/formato";
import { avvicinamento, ingresso } from "../lib/movimento";

type Props = {
  titolo: string;
  testo: string;
  immagine: string;
  /** Durata della scena in frame, per il movimento dell'immagine. */
  durata: number;
};

/** Un vantaggio per scena: un'immagine (facoltativa) e una frase. */
export function Vantaggio({ titolo, testo, immagine, durata }: Props) {
  const frame = useCurrentFrame();
  const { tipo, u, testo: misure } = useFormato();
  const orizzontale = tipo === "orizzontale";

  const blocco = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 20 * u,
        // Con immagine il testo occupa il 42% in orizzontale o la sua altezza
        // in verticale; senza immagine prende tutto lo spazio.
        flex: !immagine ? "1 1 auto" : orizzontale ? "0 0 42%" : "0 0 auto",
        minWidth: 0,
      }}
    >
      <div
        style={{
          fontFamily: font.titoli,
          fontSize: (immagine ? misure.titolo * 0.8 : misure.titolo) * u,
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: "-0.015em",
          ...ingresso(frame, 4, 16, 40 * u),
        }}
      >
        {titolo}
      </div>
      {testo ? (
        <div
          style={{
            fontSize: misure.corpo * u,
            lineHeight: 1.35,
            color: colori.testoSecondario,
            maxWidth: 1000 * u,
            ...ingresso(frame, 12, 16, 28 * u),
          }}
        >
          {testo}
        </div>
      ) : null}
    </div>
  );

  if (!immagine) {
    return (
      <Riquadro>
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          {blocco}
        </div>
      </Riquadro>
    );
  }

  return (
    <Riquadro>
      <div
        style={{
          display: "flex",
          flexDirection: orizzontale ? "row" : "column",
          gap: (orizzontale ? 80 : 56) * u,
          width: "100%",
        }}
      >
        <div
          style={{
            position: "relative",
            flex: "1 1 0",
            minHeight: 0,
            overflow: "hidden",
            borderRadius: raggio * u,
            backgroundColor: colori.superficie,
            order: orizzontale ? 2 : 0,
            ...ingresso(frame, 0, 14, 0),
          }}
        >
          <Img
            src={staticFile(immagine)}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              scale: avvicinamento(frame, durata),
            }}
          />
        </div>
        {blocco}
      </div>
    </Riquadro>
  );
}
