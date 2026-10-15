---
name: variante-formato
description: Aggiunge un nuovo formato di consegna (es. 4:5 per il feed Instagram) o sistema l'impaginazione di un formato esistente, controllando area sicura e leggibilità. Da usare quando un formato non convince o ne serve uno in più.
---

# Variante di formato

L'argomento dice cosa fare, ad esempio `/variante-formato 4:5`, `/variante-formato il verticale taglia il titolo`.

## Formato nuovo

1. Aggiungi una `<Composition>` in `src/Root.tsx` nella cartella `Spot`, con id `Spot-<L>x<A>` (es. `Spot-4x5`), le dimensioni giuste e gli stessi `schema`, `defaultProps`, `calculateMetadata` e `fps` degli altri formati.
   - 4:5 → 1080×1350 (feed Instagram e Facebook)
   - 2:3 → 1080×1620 (Pinterest)
   - 21:9 → 2560×1080 (banner, schermi)
2. Controlla in `src/lib/formato.ts` che il nuovo rapporto ricada nel tipo giusto (orizzontale, verticale, quadrato). Se serve un comportamento diverso, aggiungi un tipo nuovo con margini propri invece di forzare quelli esistenti.
3. Aggiungi lo script di render in `package.json` (`render:<L>x<A>`) e includilo in `render:tutti`.
4. Aggiungi la riga alla tabella "Formati" del `CLAUDE.md`.

## Formato esistente da sistemare

1. Estrai con `npx remotion still` i fotogrammi dove compare il problema e guardali.
2. Correggi nel punto giusto:
   - testo che non ci sta → prima accorcia i contenuti (rispettando lo schema), poi le dimensioni in `useFormato()`, mai sotto i minimi del CLAUDE.md;
   - elementi sotto l'interfaccia delle app → margini in `useFormato()`;
   - foto ritagliata male → soggetto dell'immagine, o un'immagine diversa per quel formato.
3. Una correzione per un formato non deve peggiorare gli altri: ricontrolla tutti i formati con gli stessi fotogrammi.

## Chiudi

- `npm run typecheck`.
- Commit: "Aggiungi formato 4:5" o "Sistema impaginazione verticale".
- Riepilogo con le immagini di controllo più significative.
