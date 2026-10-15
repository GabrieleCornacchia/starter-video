import type { ReactNode } from "react";
import { Audio } from "@remotion/media";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import {
  AbsoluteFill,
  interpolate,
  staticFile,
  type CalculateMetadataFunction,
  useVideoConfig,
} from "remotion";
import { colori } from "./brand";
import { Apertura } from "./scenes/Apertura";
import { Chiusura } from "./scenes/Chiusura";
import { Vantaggio } from "./scenes/Vantaggio";
import type { PropsSpot } from "./schema";
import { durataSpot, durate, durateScene, frame } from "./lib/tempi";

/** La durata dipende da quanti testi ci sono e quanto sono lunghi: la calcola tempi.ts. */
export const calcolaDurata: CalculateMetadataFunction<PropsSpot> = ({
  props,
}) => ({
  durationInFrames: durataSpot(props),
});

/** Spot: apertura, un vantaggio per scena, chiusura con logo e invito. */
export function Spot(props: PropsSpot) {
  const { durationInFrames } = useVideoConfig();
  const tempi = durateScene(props);
  const transizione = linearTiming({
    durationInFrames: frame(durate.transizione),
  });

  // TransitionSeries vuole i figli in una lista piatta: niente frammenti.
  const scene: ReactNode[] = [
    <TransitionSeries.Sequence
      key="apertura"
      name="Apertura"
      durationInFrames={tempi.apertura}
    >
      <Apertura titolo={props.titolo} sottotitolo={props.sottotitolo} />
    </TransitionSeries.Sequence>,
  ];

  props.vantaggi.forEach((vantaggio, i) => {
    scene.push(
      <TransitionSeries.Transition
        key={`transizione-${i}`}
        presentation={fade()}
        timing={transizione}
      />,
      <TransitionSeries.Sequence
        key={`vantaggio-${i}`}
        name={`Vantaggio ${i + 1}`}
        durationInFrames={tempi.vantaggi[i]}
      >
        <Vantaggio {...vantaggio} durata={tempi.vantaggi[i]} />
      </TransitionSeries.Sequence>,
    );
  });

  scene.push(
    <TransitionSeries.Transition
      key="transizione-chiusura"
      presentation={fade()}
      timing={transizione}
    />,
    <TransitionSeries.Sequence
      key="chiusura"
      name="Chiusura"
      durationInFrames={tempi.chiusura}
    >
      <Chiusura invito={props.invito} contatto={props.contatto} />
    </TransitionSeries.Sequence>,
  );

  return (
    <AbsoluteFill style={{ backgroundColor: colori.fondo }}>
      <TransitionSeries>{scene}</TransitionSeries>
      {props.musica ? (
        <Audio
          src={staticFile(props.musica)}
          volume={(f) =>
            interpolate(
              f,
              [0, 15, durationInFrames - 30, durationInFrames],
              [0, 0.7, 0.7, 0],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
            )
          }
        />
      ) : null}
    </AbsoluteFill>
  );
}
