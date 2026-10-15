import { Img, staticFile } from "remotion";
import { colori, font, logo } from "./brand";
import { Riquadro } from "./components/Riquadro";
import { useFormato } from "./lib/formato";
import type { PropsSpot } from "./schema";

/**
 * Immagine di copertina (YouTube, anteprime): titolo e logo, senza animazioni.
 * Deve restare leggibile anche in miniatura.
 */
export function Copertina({ titolo }: PropsSpot) {
  const { u, testo } = useFormato();
  return (
    <Riquadro>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Img
          src={staticFile(logo)}
          style={{ height: 120 * u, width: "auto", alignSelf: "flex-start" }}
        />
        <div
          style={{
            fontFamily: font.titoli,
            fontSize: testo.titolo * 1.1 * u,
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-0.02em",
            color: colori.testo,
            maxWidth: 1500 * u,
          }}
        >
          {titolo}
        </div>
      </div>
    </Riquadro>
  );
}
