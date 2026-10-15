import type { PropsSpot } from "../schema";

/**
 * Tempi del video, in secondi. La durata di ogni scena si calcola dalla
 * quantità di testo, così chi guarda ha sempre il tempo di leggere:
 * ingresso + 0,8 s + 0,25 s per parola + transizione, con un minimo.
 */
export const FPS = 30;

export const durate = {
  /** Tempo perché il testo finisca di entrare. */
  ingresso: 1,
  /** Lettura: base fissa più un tanto a parola. */
  letturaBase: 0.8,
  letturaParola: 0.25,
  /** Nessuna scena dura meno di così. */
  minimo: 2.5,
  /** Chiusura fissa: logo, invito e contatto restano fermi a lungo. */
  chiusura: 4,
  transizione: 0.5,
};

export const frame = (secondi: number) => Math.round(secondi * FPS);

const parole = (...testi: string[]) =>
  testi.join(" ").split(/\s+/).filter(Boolean).length;

const durataTesto = (...testi: string[]) =>
  frame(
    Math.max(
      durate.minimo,
      durate.ingresso +
        durate.letturaBase +
        durate.letturaParola * parole(...testi) +
        durate.transizione,
    ),
  );

/** Durata in frame di ogni scena. */
export function durateScene(props: PropsSpot) {
  return {
    apertura: durataTesto(props.titolo, props.sottotitolo),
    vantaggi: props.vantaggi.map((v) => durataTesto(v.titolo, v.testo)),
    chiusura: frame(durate.chiusura),
  };
}

/** Durata totale in frame: le transizioni sovrappongono le scene. */
export function durataSpot(props: PropsSpot) {
  const scene = durateScene(props);
  const somma =
    scene.apertura +
    scene.vantaggi.reduce((totale, d) => totale + d, 0) +
    scene.chiusura;
  return somma - (scene.vantaggi.length + 1) * frame(durate.transizione);
}
