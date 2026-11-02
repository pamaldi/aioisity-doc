# Requisiti globali

*Bozza 1, 1 novembre 2026.*

## Indice

| File | Area | Prefisso |
|---|---|---|
| [01-visione.md](01-visione.md) | obiettivo, elementi separati, funzionalità distintive, cosa resta fuori | — |
| [02-tenant-utenti-ruoli.md](02-tenant-utenti-ruoli.md) | tenant, utenti, ruoli | `MT` |
| [03-bambino.md](03-bambino.md) | dati del bambino e profilo | `BA` |
| [04-funzionali.md](04-funzionali.md) | gioco, configurazione, materiali, adattamento, osservazioni, più giochi, portabilità, AI, confronto | `GI` `CF` `MA` `AT` `OS` `TP` `PO` `AI` `PC` |
| [05-dati-e-privacy.md](05-dati-e-privacy.md) | dati minimi, inferenze da evitare, GDPR, licenze, CAA | `DP` |
| [06-architettura.md](06-architettura.md) | front end, API Spring Boot, PostgreSQL, Docker, componenti | `AR` |
| [07-non-funzionali.md](07-non-funzionali.md) | accessibilità, sicurezza, affidabilità, metodo di sviluppo | `NF` |
| [08-validazione-e-roadmap.md](08-validazione-e-roadmap.md) | fasi di validazione, indicatori, roadmap, decisione di prosecuzione | — |
| [09-decisioni-aperte.md](09-decisioni-aperte.md) | punti da decidere e conflitti fra requisiti | `D` |

## Convenzioni

- **DEVE / NON DEVE:** obbligatorio.
- **PUÒ:** facoltativo.
- **Formulazione dei requisiti condizionati:** «QUANDO … il sistema DEVE …», «SE … ALLORA …», come nelle specifiche del prototipo.
- **Fonte:** da dove viene il requisito.
  - `survey §x`: la survey.
  - `committente`: requisito dato il 1 novembre 2026.
  - `spec 0n Rx`: specifica del prototipo «Prepariamo lo zaino».
  - `derivato`: conseguenza diretta di altri requisiti, indicati accanto.
- **Priorità:** P0/P1/P2 della survey (§9.1). Sono priorità di sviluppo, non una classificazione clinica. I requisiti del committente sono vincolanti.
- **Prototipo:** stato nel prototipo, che finora implementa un solo gioco. I valori sono «fatto», «in parte», «da fare» e «—» (non applicabile).
- **Proposta da confermare:** quando un punto non è ancora deciso, è marcato così oppure rimanda a una voce `D-n` delle decisioni aperte.

## Dalle specifiche del prototipo ai requisiti globali

Le specifiche del prototipo restano il dettaglio per il gioco dello zaino, con soglie, numeri di prove e casi registrati. Qui sono riportati solo i requisiti che valgono per l'intera piattaforma.

| Specifica del prototipo | Dove è generalizzata |
|---|---|
| 01 · Accesso adattivo | `GI`, `AT` |
| 02 · Profili e vincoli | `BA`, `CF` |
| 03 · Oggetti di casa | `MA` |
| 04 · Bozze AI | `AI` |
| 05 · Aiuti e varianti | `AT` |
| 06 · Attività reale | `OS` |
| 07 · Secondo gioco | `TP`, `PO` |
| 08 · Motore probabilistico | `PC` |
