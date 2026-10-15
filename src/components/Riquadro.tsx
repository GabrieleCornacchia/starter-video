import type { ReactNode } from "react";
import { AbsoluteFill } from "remotion";
import { colori, font } from "../brand";
import { useFormato } from "../lib/formato";

/**
 * Fondo della scena e area sicura: tutto il contenuto sta dentro i margini
 * del formato, lontano dall'interfaccia delle app social.
 */
export function Riquadro({ children }: { children: ReactNode }) {
  const { u, margini } = useFormato();
  return (
    <AbsoluteFill
      style={{
        backgroundColor: colori.fondo,
        color: colori.testo,
        fontFamily: font.testo,
      }}
    >
      <AbsoluteFill
        style={{
          paddingTop: margini.alto * u,
          paddingBottom: margini.basso * u,
          paddingLeft: margini.sinistra * u,
          paddingRight: margini.destra * u,
        }}
      >
        {/* Riempie l'area sicura: le scene possono centrare e dividere lo spazio. */}
        <div style={{ flex: 1, display: "flex", minHeight: 0 }}>{children}</div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}
