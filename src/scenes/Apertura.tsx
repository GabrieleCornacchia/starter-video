import { useCurrentFrame } from "remotion";
import { colori, font } from "../brand";
import { Riquadro } from "../components/Riquadro";
import { useFormato } from "../lib/formato";
import { ingresso } from "../lib/movimento";

type Props = {
  titolo: string;
  sottotitolo: string;
};

/** Il gancio: il messaggio principale deve essere leggibile entro 1 secondo. */
export function Apertura({ titolo, sottotitolo }: Props) {
  const frame = useCurrentFrame();
  const { u, testo } = useFormato();

  return (
    <Riquadro>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 32 * u,
          width: "100%",
        }}
      >
        <div
          style={{
            fontFamily: font.titoli,
            fontSize: testo.titolo * u,
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: "-0.02em",
            maxWidth: 1500 * u,
            ...ingresso(frame, 0, 18, 48 * u),
          }}
        >
          {titolo}
        </div>
        {sottotitolo ? (
          <div
            style={{
              fontSize: testo.sottotitolo * u,
              lineHeight: 1.3,
              color: colori.testoSecondario,
              maxWidth: 1100 * u,
              ...ingresso(frame, 10, 18, 32 * u),
            }}
          >
            {sottotitolo}
          </div>
        ) : null}
      </div>
    </Riquadro>
  );
}
