---
name: consegna
description: Controllo completo del video e produzione dei file finali in tutti i formati (con e senza musica, più copertina). Da usare quando il video è approvato e va consegnato al cliente.
---

# Consegna

Esegui i controlli, correggi quello che è sicuro correggere, poi renderizza e verifica i file. Non pubblicare nulla sulle piattaforme.

## 1. Contenuti

- Nessun segnaposto: "Nome cliente", "Primo vantaggio", "dominio-cliente", logo di esempio, colori neutri dello starter.
- Ortografia e accenti di tutti i testi. Contatto (sito, telefono, indirizzo) identico a quello del brief.
- Nessun dato inventato: prezzi, numeri, recensioni e promesse vengono dal cliente.
- Persone riconoscibili e screenshot: consenso e nessun dato personale.

## 2. Audio

- Ogni file in `public/audio/` ha la sua riga in `LICENZE.md` con licenza che permette l'uso commerciale. Se manca, **blocca la consegna** e segnalalo.
- Volume della musica che non copre la voce; ingresso e uscita in dissolvenza.

## 3. Lettura e area sicura

Per ogni formato estrai con `npx remotion still` i fotogrammi chiave (fine di ogni ingresso, metà di ogni scena, ultimi 10 fotogrammi) e guardali:
- testo leggibile, dentro i margini, contrasto alto;
- ogni testo fermo almeno 0,8 s + 0,25 s per parola (`tempi.ts` lo garantisce, salvo modifiche ai parametri: verificale);
- gancio leggibile entro il primo secondo;
- logo, invito e contatto fermi almeno 1,5 s alla fine;
- nessun elemento tagliato o sovrapposto, foto ritagliate bene.

## 4. Render

```bash
npm run typecheck
npm run render:tutti
npm run copertina
```

Se il video ha musica, renderizza anche la versione senza: scrivi in `out/props-senza-musica.json` gli stessi contenuti di `src/contenuti.ts` con `"musica": ""`, poi per ogni formato:

```bash
npx remotion render src/index.ts Spot-9x16 out/spot-9x16-senza-musica.mp4 --props=out/props-senza-musica.json
```

## 5. Verifica dei file

Con `ffprobe` controlla per ogni file: risoluzione attesa, 30 fps, durata uguale a quella calcolata, presenza della traccia audio (solo se prevista). Apri almeno un fotogramma estratto dal file finale (`ffmpeg -ss <secondi> -i <file> -frames:v 1 <png>`) per confermare che il render corrisponda all'anteprima.

## Report

Chiudi con una tabella breve: file, formato, durata, peso, audio. Sotto, gli eventuali punti aperti (licenze, testi da confermare) e cosa serve al cliente per pubblicare (es. didascalia, hashtag, copertina da caricare a parte su YouTube). Invia i file all'utente.
