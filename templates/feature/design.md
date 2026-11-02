# <ID funzione> — Design

Stato: proposto. Requisiti: <link>. ADR e baseline contratto: <link/versione>.

ID spec: <SPEC/FE/API-NNN>. Revisione: <versione>. Roadmap canonica: <link/ID>.
Spec padre e revisione: <ID oppure nessuna>.

## Esperienza e stati

<Flusso, schermate, componenti, caricamento/vuoto/errori, permessi,
accessibilità, recupero, transizioni ammesse e vietate.>

## Modello e confini

<Entità/versioni, invarianti, responsabilità FE/API, dati autorevoli,
transazioni, snapshot della sessione, regole pure.>

## Contratto

| Operazione/operationId | Input/output | Permesso | Errori | Concorrenza/retry |
|---|---|---|---|---|
| <operazione> | <schema> | <regola> | <codici> | <semantica> |

## Persistenza e operatività

<Schema/migrazione, indici, isolamento, media, cache, code, timeout,
idempotenza, limiti e osservabilità senza dati personali.>

## Alternative e rischi

<Opzioni, scelta proposta/accettata, ragioni, dipendenze D-n, condizioni di revisione.>

## Verifica e rilascio

<Casi di prova, carico, accessibilità, rollout compatibile, recupero e criteri
di accettazione. Collegare ogni decisione al requisito che soddisfa.>
