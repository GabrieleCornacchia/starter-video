# Starter video

Template per video promozionali dei clienti con [Remotion](https://www.remotion.dev): gli stessi contenuti producono il video in 16:9, 9:16 e 1:1, più la copertina, con regole e comandi per lavorare con Claude Code.

## Nuovo video

1. Su GitHub: **Use this template → Create a new repository**, con il nome del cliente e del video.
2. Apri il nuovo repo in Claude Code e compila `docs/brief.md`, oppure incolla il brief in chat. Metti foto e materiale in `public/media/`.
3. Lancia `/nuovo-video`: Claude propone concept e scaletta e aspetta il tuo ok prima di costruire.
4. Guarda l'anteprima (`npm run dev` sul tuo computer) e chiedi le modifiche.
5. Per un formato in più o da sistemare: `/variante-formato`.
6. Quando è approvato: `/consegna` produce tutti i file in `out/`.

## Cosa c'è dentro

| Percorso | A cosa serve |
| --- | --- |
| `CLAUDE.md` | Regole su brand, messaggio, leggibilità, area sicura, movimento, audio, formati |
| `docs/brief.md` | Modello di brief del video |
| `.claude/skills/` | Comandi `/nuovo-video`, `/variante-formato`, `/consegna` |
| `src/brand.ts` | Colori, font e logo del cliente |
| `src/contenuti.ts` | Testi, immagini e musica del video |
| `src/scenes/` | Scene: apertura, vantaggi, chiusura |
| `public/audio/LICENZE.md` | Registro delle licenze di musica ed effetti |

## Comandi

```bash
npm install
npm run dev            # Remotion Studio
npm run typecheck
npm run render:tutti   # 16:9, 9:16, 1:1 in out/
npm run copertina      # out/copertina.png
```

Remotion è gratuito per persone singole e aziende fino a 3 dipendenti; oltre serve la licenza aziendale (remotion.dev/license).
