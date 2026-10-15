---
name: nuovo-video
description: Imposta un nuovo video promozionale partendo dallo starter, leggendo docs/brief.md. Da usare all'inizio di ogni progetto video, prima di costruire le scene.
---

# Nuovo video

Trasforma lo starter neutro nel video di un cliente preciso. Segui i passi in ordine e fermati dove indicato.

## 1. Leggi il brief e il materiale

- Leggi `docs/brief.md` e `CLAUDE.md`.
- Se il brief indica il repo del sito del cliente (fatto con `starter-siti`), aggiungilo alla sessione e leggi `src/app/globals.css`, `src/app/layout.tsx` e `src/config/site.ts`: colori, font, nome, contatti.
- Se c'è un link Figma, leggi brand e logo con il connettore Figma.
- Guarda il materiale in `public/media/`: cosa c'è davvero, qualità, orientamento delle foto.
- Se si promuove un sito o un'app e serve un video di prodotto con screenshot e movimenti di camera, proponi di usare il plugin **video-shotcraft** invece dello Spot base, e spiega in una riga perché.
- Se mancano dati essenziali (cosa si promuove, a chi, azione finale, contatto, piattaforme), chiedili tutti insieme in un unico messaggio. Non inventare dati reali come prezzi, orari, numeri o recensioni.

## 2. Proponi il concept (e fermati)

Scrivi un piano compatto:
- **Idea in una frase**: cosa deve ricordare chi guarda.
- **Gancio**: il titolo dei primi 2 secondi.
- **Scaletta**: scena per scena, con testo a schermo, immagine usata e durata. Le durate seguono la regola di `lib/tempi.ts` (ingresso 1 s + 0,8 s + 0,25 s per parola + transizione): calcolale così, e se il totale supera la durata richiesta accorcia i testi.
- **Durata totale** e piattaforme (formati da consegnare).
- **Direzione visiva**: colori e font (dal sito o dal brand), il movimento principale del video, e perché è adatto al cliente.
- **Audio**: musica sì/no e che carattere, voce fuori campo sì/no. Se serve musica, proponi 2–3 brani con licenza commerciale chiara e la fonte.

Rileggi il piano contro le regole del CLAUDE.md (gancio, un messaggio per scena, audio spento, contenuti veri). Se una scelta potrebbe valere per qualsiasi cliente, cambiala e scrivi cosa hai cambiato.

**Fermati e aspetta l'approvazione** prima di scrivere codice.

## 3. Costruisci

Dopo l'approvazione:
- `src/brand.ts`: colori, font (da `@remotion/google-fonts/<Font>`), raggio, logo in `public/brand/`.
- `src/contenuti.ts`: testi, immagini (percorsi in `public/`), musica.
- `src/lib/tempi.ts`: tocca i parametri solo se la scaletta approvata lo richiede (es. chiusura più lunga), mai sotto la regola di lettura.
- Se una scena della scaletta non rientra in Apertura / Vantaggio / Chiusura, crea un nuovo file in `src/scenes/`, inseriscilo in `Spot.tsx` e aggiungi la sua durata in `durateScene` e `durataSpot`.
- Musica: file in `public/audio/` e riga in `public/audio/LICENZE.md` con fonte e licenza. Senza licenza chiara, niente musica.

## 4. Controlla

- `npm run typecheck`.
- Per ogni formato estrai con `npx remotion still` almeno: fine dell'ingresso del titolo, metà di ogni scena, ultimo secondo. Guarda le immagini e correggi testi troppo lunghi, elementi fuori dall'area sicura, contrasti deboli, ritagli sbagliati delle foto.
- Commit su un branch: "Imposta video di <cliente>".

Chiudi con un riepilogo breve e il prossimo passo: rivedere l'anteprima nella Studio (`npm run dev`) e poi `/consegna`.
