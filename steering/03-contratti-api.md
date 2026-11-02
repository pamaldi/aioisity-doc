# Steering contratti FE/API

Progettare il contratto prima dell'implementazione. Usare OpenAPI con versione
compatibile con validatore, generatore client e stack Spring scelti; fissarla
esplicitamente. Gli esempi seguenti sono proposte, non endpoint già approvati.

## Superficie e semantica

Risorse candidate: utenti/inviti, bambini, template e versioni, materiali,
configurazioni e versioni, sessioni, eventi/tentativi, proposte, osservazioni,
esportazioni. Modellare comandi di dominio come avvio o accettazione quando un
semplice CRUD nasconde vincoli; non esporre entità JPA nel contratto.

Ogni operazione deve specificare:

- ID requisito e `operationId` stabile, attore e permessi sul singolo oggetto;
- schema input/output, obbligatorietà, nullabilità, enumerazioni e limiti;
- esempi sintetici, errori, concorrenza, idempotenza e audit;
- stato iniziale/finale e trattamento di risorse cancellate o versioni superate.

Proposta: `/api/v1` per la versione HTTP, distinta da `schemaVersion` degli eventi,
versione del template e versione della logica. Date/istanti ISO 8601 in UTC;
timezone locale solo per presentazione. ID opachi, senza dati anagrafici.
Paginazione con limite massimo, filtri e ordinamenti ammessi; ordine stabile con
tie-breaker. Preferire cursori per flussi di eventi in crescita.

Errori coerenti `application/problem+json`: codice applicativo stabile, messaggio
comprensibile, campi invalidi e correlation ID, senza stack trace o dati personali.
Specificare 401/403, politica 404 per oggetti non accessibili, 409 per conflitti
di dominio, 412 per versione non più corrente, 429 e retry. Definire una sola
convenzione per errori di validazione (400 o 422) e applicarla ovunque.

## Eventi e affidabilità

Envelope candidato: `eventId`, `schemaVersion`, `sessionId`, `sequence`,
`occurredAt`, `type`, `payload`; `receivedAt` e identità/tenant assegnati o
verificati dal server. Timestamp client non autorevole per autorizzazioni o audit.
La sessione collega le versioni immutabili di configurazione, template e materiali.
I payload distinguono scelta, esito del gesto, aiuti e origine, completamento.

- Disegnare batch limitati per numero e dimensione; scegliere e documentare
  atomicità o risultati per elemento. ACK solo dopo commit durevole.
- Deduplicare con vincolo univoco nel contesto del tenant/sessione. Replay con
  stesso ID e payload diverso produce conflitto, non sovrascrittura.
- Per comandi ritentabili usare una chiave d'idempotenza con scope, hash richiesta,
  risposta persistita e durata dichiarati; testare richieste concorrenti.
- Gestire sequenze mancanti, fuori ordine e chiusura prima dell'ultimo batch.
  Non calcolare proposte su una sessione incompleta: definire riconciliazione,
  completezza e ricalcolo versionato quando arrivano eventi tardivi.
- Parlare di consegna ripetibile e deduplicazione, non garantire «exactly once»
  tra browser, rete e database.

## Concorrenza e cambiamenti

Usare versioni/ETag e `If-Match` per modifiche concorrenti. L'accettazione di una
proposta verifica atomicamente permesso, stato, versione di base e vincoli; crea
una nuova configurazione e audit nella stessa transazione. Due accettazioni non
devono creare due cambiamenti. La sessione in corso mantiene la versione originale.

Il tenant inviato dal client è solo una selezione da verificare rispetto
all'identità; non è una prova di appartenenza. Anche ID annidati e materiali
devono appartenere al contesto autorizzato.

Definire compatibilità durante rollout FE/API, deprecazione e migrazione client.
CI: lint OpenAPI, rilevamento breaking changes, generazione client riproducibile,
test del provider e test FE dei percorsi/errori contrattuali. I mock seguono il
contratto; non provano da soli l'interoperabilità.

Fonte: [OpenAPI Specification](https://spec.openapis.org/oas/latest.html).
