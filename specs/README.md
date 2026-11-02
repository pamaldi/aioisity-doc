# Specifiche e metodo SDD

Metodo confermato dal committente il 2 novembre 2026. La [roadmap centrale](../ROADMAP.md)
censisce tutte le spec. Questa cartella ospita le spec di prodotto trasversali;
al momento è definito il registro iniziale, non sono ancora state redatte le singole spec.

## Struttura di una spec

```text
specs/SPEC-010-identita-tenant-ruoli/
  requirements.md
  design.md
  tasks.md
```

Usare i [template](../templates/feature/requirements.md). Ogni spec ha ID stabile,
titolo, owner, revisione, fonti, dipendenze e criteri di accettazione. I tre file
condividono ID e baseline. Eventuali wireframe, diagrammi ed evidenze sono allegati,
non sostituiscono i documenti. Suddividere una spec troppo grande in incrementi
con un risultato verificabile, registrando anche i nuovi ID nella roadmap.

## Fonte canonica fra repository

- `aioisity-doc/specs/SPEC-NNN-...`: comportamento di prodotto, flussi trasversali,
  vincoli, accettazione end-to-end e attività coordinate fra progetti.
- `aioisity-fe/specs/FE-NNN-...`: eventuale dettaglio implementativo frontend;
  deve indicare spec padre e relativa revisione, senza ridefinire il prodotto.
- `aioisity-api/specs/API-NNN-...`: eventuale dettaglio implementativo backend,
  con lo stesso vincolo di derivazione e riferimento al contratto.

Una funzione semplice può usare una sola spec trasversale e task distinti per
repository: non creare tre copie dello stesso contenuto. Le spec locali si
creano solo quando il dettaglio lo richiede; anch'esse hanno una riga nella
roadmap centrale con padre, owner, dipendenze e link ai tre documenti.
Gli snapshot nei repository sono copie di una baseline, non spec autonome.

## Stati e passaggi

| Stato | Significato / condizione di ingresso |
|---|---|
| pianificata | ID e scope censiti; i documenti possono non esistere |
| in specifica | requirements/design/tasks in redazione; assunzioni evidenziate |
| pronta | tre documenti coerenti, accettazione verificabile, decisioni necessarie risolte |
| in sviluppo | implementazione avviata sulla baseline della spec |
| in verifica | implementazione disponibile; restano prove di accettazione |
| verificata | criteri soddisfatti con evidenze; integrazione FE/API verificata se pertinente |
| rilasciata | versione distribuita e riferimento al rilascio registrato |
| superata | sostituita o ritirata; conservarne storia e riferimento alla sostituzione |

Il blocco è una colonna separata: indica motivo, decisione/dipendenza e azione
necessaria, conservando lo stato raggiunto. Un completamento parziale resta tale.
Una spec verificata non implica che il prodotto sia già rilasciato.

## Regole operative della roadmap

1. Censire la spec prima di scriverla; verificare sovrapposizioni con le esistenti.
2. Alla creazione sostituire il percorso previsto con link reali a requirements,
   design e tasks. Non creare link che fingano l'esistenza di documenti futuri.
3. Esplicitare dipendenze distinguendo necessità di specifica, implementazione e
   rilascio; non bloccare il design di una funzione solo perché manca il codice
   di una dipendenza. Verificare che l'ordine non contenga cicli.
4. Aggiornare stato, blocchi e baseline nello stesso insieme di modifiche della
   spec. FE/API propongono l'aggiornamento del registro centrale; se doc non è
   disponibile, includono il delta da integrare e non dichiarano il registro aggiornato.
5. Prima di implementare leggere la spec; quando cambia l'intento aggiornare prima
   requirements/design, poi task, codice e prove. Registrare impatto sui consumer.
6. Non riutilizzare ID ritirati e non cancellare righe concluse. Conservare gli ID
   dei requisiti globali; gli ID locali si collegano a questi, senza sostituirli.

La roadmap di validazione in `requisiti/08-validazione-e-roadmap.md` descrive il
percorso di ricerca e prodotto. `ROADMAP.md` ne traduce il lavoro nelle spec:
nessun test software dimostra da solo efficacia o beneficio terapeutico.
