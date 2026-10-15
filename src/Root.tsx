import { Composition, Folder, Still } from "remotion";
import { contenuti } from "./contenuti";
import { Copertina } from "./Copertina";
import { FPS } from "./lib/tempi";
import { schemaSpot } from "./schema";
import { calcolaDurata, Spot } from "./Spot";

/**
 * Formati di consegna. Tutti usano gli stessi contenuti (contenuti.ts):
 * le scene si adattano da sole a orizzontale, verticale e quadrato.
 * durationInFrames qui è solo un valore iniziale: la durata vera
 * la calcola calcolaDurata in base al numero di vantaggi.
 */
export function RemotionRoot() {
  return (
    <>
      <Folder name="Spot">
        <Composition
          id="Spot-16x9"
          component={Spot}
          schema={schemaSpot}
          defaultProps={contenuti}
          calculateMetadata={calcolaDurata}
          width={1920}
          height={1080}
          fps={FPS}
          durationInFrames={300}
        />
        <Composition
          id="Spot-9x16"
          component={Spot}
          schema={schemaSpot}
          defaultProps={contenuti}
          calculateMetadata={calcolaDurata}
          width={1080}
          height={1920}
          fps={FPS}
          durationInFrames={300}
        />
        <Composition
          id="Spot-1x1"
          component={Spot}
          schema={schemaSpot}
          defaultProps={contenuti}
          calculateMetadata={calcolaDurata}
          width={1080}
          height={1080}
          fps={FPS}
          durationInFrames={300}
        />
      </Folder>
      <Still
        id="Copertina"
        component={Copertina}
        schema={schemaSpot}
        defaultProps={contenuti}
        width={1280}
        height={720}
      />
    </>
  );
}
