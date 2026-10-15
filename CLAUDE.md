# Starter video — regole di progetto

Questo repo è il punto di partenza per i video promozionali dei clienti (attività, prodotti, siti). Ogni nuovo video nasce da qui ("Use this template" su GitHub) e queste regole valgono finché il CLAUDE.md del progetto non le modifica.

Rispondi e scrivi commenti, commit e testi del video in **italiano**, salvo che il brief chieda un'altra lingua.

## Come si lavora

1. Il brief sta in `docs/brief.md`. Se mancano dati essenziali (cosa si promuove, a chi, azione finale, dove verrà pubblicato), chiedili prima di scrivere codice.
2. `/nuovo-video` imposta brand e contenuti e propone il concept: **aspetta l'ok prima di costruire**.
3. `/variante-formato` aggiunge o sistema un formato.
4. `/consegna` controlla tutto e produce i file finali.

Prima di modifiche ampie, proponi un piano breve. Per correzioni piccole, procedi.

## Stack

- [Remotion](https://www.remotion.dev): il video è codice React, renderizzato fotogramma per fotogramma.
- **Tutti i pacchetti `remotion` e `@remotion/*` devono avere la stessa identica versione** (oggi 4.0.529, senza `^`). Per aggiungerne uno usa `npx remotion add <pacchetto>`, che sceglie la versione giusta. Anche `zod` va tenuto alla versione richiesta da Remotion.
- Font da Google Fonts con `@remotion/google-fonts`, caricati in `src/brand.ts`.
- Licenza: Remotion è gratuito per persone singole e aziende fino a 3 dipendenti; oltre serve la licenza aziendale. Se il progetto è per conto di un'azienda più grande, segnalalo prima di iniziare.

## Struttura

```
src/
  brand.ts          colori, font, raggio, logo del cliente
  contenuti.ts      testi, immagini, musica: unica fonte per tutti i formati
  schema.ts         struttura e limiti dei contenuti (modificabili anche dalla Studio)
  Spot.tsx          sequenza delle scene, transizioni, musica
  scenes/           una scena per file (Apertura, Vantaggio, Chiusura...)
  components/       elementi comuni (Riquadro = fondo + area sicura)
  lib/formato.ts    adattamento a orizzontale, verticale, quadrato
  lib/tempi.ts      durate delle scene (calcolate dal testo) e durata totale
  lib/movimento.ts  curve e movimenti riutilizzabili
  Root.tsx          formati di consegna
public/
  brand/            logo e altri file del brand
  media/            foto, screenshot, clip
  audio/            musica ed effetti, con LICENZE.md
docs/brief.md       brief del video
```

Le scene si adattano da sole al formato: le misure sono scritte "a 1080 px di lato corto" e moltiplicate per `u` (`useFormato()`). Non scrivere misure in px fissi nelle scene.

Le scene usano stili calcolati per servire tutti i formati con un solo codice. Per questo la Studio permette di modificare i contenuti (pannello delle props) ma non di trascinare gli elementi: le modifiche di layout si fanno nel codice.

## Brand

- Se il cliente ha un sito fatto con `starter-siti`, i colori vengono da `src/app/globals.css` (`:root`) e il font da `src/app/layout.tsx` di quel repo: copiali in `src/brand.ts`. Sito e video devono sembrare lo stesso brand.
- Se c'è un file Figma del brand, leggi colori, font e logo con il connettore Figma.
- Altrimenti segui le regole di direzione visiva di `starter-siti`: scelte che vengono dal mondo del cliente, niente estetiche "da template".
- Massimo due font. Il logo va in `public/brand/` (SVG o PNG trasparente). Non usare loghi, marchi o personaggi di altri.

## Regole del video

**Messaggio**
- I primi 2 secondi decidono se qualcuno continua a guardare: il titolo dice subito il beneficio o la cosa più interessante, non "Benvenuti da…".
- Un messaggio per scena. Se una scena dice due cose, diventano due scene o una si toglie.
- La chiusura dice cosa fare e dove: invito concreto ("Prenota su …", "Chiama …") e contatto leggibile.
- Durata tipica: 15–30 secondi per i social, fino a 60 per YouTube o sito. Più corto è meglio.

**Pensato per l'audio spento**
- Sui social i video partono muti: tutto ciò che conta deve essere scritto a schermo.
- Se c'è una voce fuori campo, servono sottotitoli (skill Remotion captions).

**Leggibilità**
- Dimensioni minime a 1080 px di lato corto: titolo 84 px, testo 44 px (già impostate in `useFormato()`).
- Ogni testo resta fermo e leggibile almeno 0,8 secondi più 0,25 secondi per parola. `lib/tempi.ts` calcola già così la durata di ogni scena: se il video diventa troppo lungo, accorcia i testi, non i tempi.
- Logo, invito e contatto fermi almeno 1,5 secondi prima della fine.
- Contrasto alto tra testo e fondo; sopra le foto usa una superficie o un'ombra, mai testo chiaro su foto chiara.

**Area sicura**
- Il contenuto importante sta dentro i margini di `useFormato()`. In verticale (Reels, TikTok, Shorts) il margine è più ampio in alto, in basso e a destra perché lì ci sono nome, didascalia e pulsanti dell'app.

**Movimento**
- Le animazioni si fanno solo con `useCurrentFrame()` e `interpolate()`/`spring()`: le transizioni e animazioni CSS non vengono renderizzate.
- Ogni scena ha un movimento principale; gli altri elementi entrano in modo semplice e si fermano.
- Una tecnica forte (zoom deciso, scorrimento, effetto speciale) compare una volta sola nel video, non in ogni scena.
- Dopo che un'informazione è comparsa, lasciala respirare: niente movimenti che competono con la lettura.
- Niente bagliori, particelle o effetti decorativi sparsi: un solo effetto curato vale più di tanti.
- Transizioni brevi (circa 0,5 s) e sempre dello stesso tipo nel video, salvo motivo preciso.

**Contenuti veri**
- Mai testimonianze, recensioni, numeri o risultati inventati: solo dati forniti dal cliente.
- Screenshot di siti o app: dalla pagina vera, senza dati personali o di clienti.
- Persone riconoscibili solo con il loro consenso.

## Audio

- Musica ed effetti solo con licenza che permette l'uso commerciale. Registra ogni file in `public/audio/LICENZE.md` nel momento in cui lo scarichi.
- La musica entra e esce in dissolvenza (già impostato in `Spot.tsx`) e non copre la voce.
- Se il video ha musica, consegna sempre anche una versione senza musica: il cliente potrebbe volerla cambiare o usare l'audio della piattaforma.

## Formati

| Composizione | Dimensioni | Dove |
| --- | --- | --- |
| `Spot-16x9` | 1920×1080 | YouTube, sito, presentazioni |
| `Spot-9x16` | 1080×1920 | Reels, TikTok, Shorts, storie |
| `Spot-1x1` | 1080×1080 | post nel feed |
| `Copertina` | 1280×720 | miniatura YouTube, anteprime |

Per un formato nuovo (es. 4:5 1080×1350 per il feed Instagram) usa `/variante-formato`.

## Comandi

```bash
npm install
npm run dev            # Remotion Studio: anteprima e modifica dei contenuti
npm run typecheck
npm run render:tutti   # i tre formati in out/
npm run copertina
npx remotion still src/index.ts Spot-9x16 out/prova.png --frame=90   # un fotogramma per controllo
```

Per controllare il lavoro senza la Studio: estrai fotogrammi chiave con `remotion still` e guardali (fine di ogni ingresso, metà di ogni scena, ultimo secondo), in tutti i formati.

## Strumenti collegati

Usa quelli disponibili nella sessione, senza chiedere all'utente di copiare dati:
- **Figma**: brand, colori, font, logo; può anche esportare immagini dei design.
- **Adobe**: scontornare prodotti, ritoccare foto, migliorare la voce, adattare clip esistenti.
- **vidIQ**: idee e titoli per YouTube, Reels e TikTok, tendenze del settore, voce fuori campo.
- **video-shotcraft** (plugin): video di prodotto cinematografici partendo da un sito o un'app, con screenshot veri e movimenti di camera. Usalo per video di siti e prodotti digitali, invece dello Spot base.
- **Video Cleanup** (plugin): audio e immagine di riprese esistenti (titolare in camera, demo), logo e cartello finale.
- **ManyMotions** (plugin): riprese generate con l'AI quando il cliente non ha materiale.

Non pubblicare sui social e non generare contenuti a pagamento senza conferma esplicita.

## Git

- Lavora su un branch, non direttamente su `main`.
- Commit piccoli con messaggi in italiano all'imperativo: "Aggiungi scena prodotto", "Accorcia apertura".
- Prima di ogni commit: `npm run typecheck` senza errori.
- I video renderizzati (`out/`) non vanno nel repo.
