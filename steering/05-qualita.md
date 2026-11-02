# Qualità, prestazioni e verifica

NF-6…12 richiedono evidenza. Nessun numero seguente è un SLA approvato:
questa è una scheda iniziale da concordare in un ADR prima del rilascio.

## Budget candidati

| Misura | Ipotesi iniziale da validare | Come verificarla |
|---|---|---|
| Feedback locale al gesto | p95 ≤ 100 ms | dispositivo del pilota, input → feedback |
| Letture/scritture API ordinarie | p95 ≤ 300 ms, p99 ≤ 1 s | server, esclusi upload e job, mix documentato |
| Errori server sotto carico | < 0,5% | separare 5xx, timeout, 4xx e throttling |
| Carico pilota sintetico | 10 tenant, 100 sessioni attive, 20 eventi/s aggregati | picco 5×, batch e distribuzione dichiarati |
| Durata prova | 30 min stabile + picco 5 min | warm-up separato; misurare code e recupero |
| Recupero | RPO/RTO da concordare | esercitazione DB + media + job |

Specificare dataset, volume storico, concorrenza adulta, dimensioni media,
frequenza di sincronizzazione, hardware, rete, versioni e risorse container.
Misurare latenza end-to-end separata da quella server. Riportare CPU, memoria,
pool DB, query lente, ritardo code e distribuzione per tenant. Aggiungere uno
scenario con tenant dominante e uno con sincronizzazioni simultanee dopo disconnessione.
Confrontare una e più repliche senza promettere crescita lineare.

Per FE definire budget di bundle, immagini, memoria e tempi di caricamento sulla
rete/dispositivo D-14. Il runtime deve restare reattivo mentre si salvano eventi
o si caricano report. Le soglie definitive entrano nei requisiti, non solo nei test.

## Prove necessarie secondo la modifica

- Dominio: invarianti del compito, separazione scelta/gesto, prove escluse,
  conferma adulta, isolamento stime e ripristino versione.
- API: autorizzazioni per ruolo/oggetto, accesso cross-tenant tramite ID diretti,
  batch, cache, media, job; test negativi e concorrenza reale.
- Database: integrazione su PostgreSQL reale (container di test se adottati),
  RLS con ruolo runtime, FK, unicità, migrazioni da versione precedente.
- Contratti: client generato, breaking changes, payload invalidi e compatibilità
  durante versioni FE/API differenti.
- FE: flussi principali E2E, tastiera/screen reader, touch reale, accesso alternativo,
  verifica visiva degli stati e accessibilità automatica più manuale.
- Affidabilità: risposta persa dopo commit, retry duplicato, ordine invertito,
  chiusura/refresh, crash API/worker, scadenza login, cambio account, storage pieno,
  export/cancellazione con job pendenti e ripristino backup.
- Regole critiche: mutazione a campione che rimuove una protezione e fa fallire il
  test (NF-12). Non sostituire questa prova con la sola copertura percentuale.

## Condizioni di completamento

Una funzione è pronta quando specifica, UI e contratto concordano; permessi e
stati di errore sono verificati; migrazioni e compatibilità sono provate se
coinvolte; le decisioni bloccanti sono risolte; esistono evidenze collegate agli ID.
In CI eseguire lint/typecheck/build e suite pertinenti con dati sintetici e segreti
esterni. Non dichiarare test eseguiti o disponibilità di comandi prima dello scaffold.

Audit e cancellazione devono avere una politica coerente: niente copie integrali
di dati personali nell'audit per comodità. Concordare conservazione, propagazione
di cancellazioni e trattamento dei backup nelle decisioni privacy già aperte.
