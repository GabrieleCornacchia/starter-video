import { Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { colori, font, logo } from "../brand";
import { Riquadro } from "../components/Riquadro";
import { useFormato } from "../lib/formato";
import { ingresso, morbida } from "../lib/movimento";

type Props = {
  invito: string;
  contatto: string;
};

/**
 * Logo, invito e contatto. Tutto deve essere fermo e leggibile
 * per almeno 1,5 secondi prima della fine.
 */
export function Chiusura({ invito, contatto }: Props) {
  const frame = useCurrentFrame();
  const { u, testo } = useFormato();

  return (
    <Riquadro>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: 48 * u,
          width: "100%",
        }}
      >
        <Img
          src={staticFile(logo)}
          style={{
            height: 160 * u,
            width: "auto",
            opacity: interpolate(frame, [0, 16], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: morbida,
            }),
            scale: interpolate(frame, [0, 24], [0.94, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: morbida,
            }),
          }}
        />
        <div
          style={{
            fontFamily: font.titoli,
            fontSize: testo.titolo * 0.85 * u,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.015em",
            ...ingresso(frame, 10, 18, 36 * u),
          }}
        >
          {invito}
        </div>
        {contatto ? (
          <div
            style={{
              fontSize: testo.sottotitolo * u,
              fontWeight: 600,
              color: colori.accento,
              ...ingresso(frame, 18, 18, 24 * u),
            }}
          >
            {contatto}
          </div>
        ) : null}
      </div>
    </Riquadro>
  );
}
