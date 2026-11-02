# Steering API Spring Boot e PostgreSQL

Vincoli confermati: Spring Boot, PostgreSQL, Docker, isolamento tenant, migrazioni
versionate, dominio testabile senza UI/DB (AR-2…9). Versioni e strumenti accessori
richiedono ADR; non scegliere automaticamente l'ultima release disponibile.

## Struttura candidata

Partire da un monolite modulare distribuibile in più repliche. Separare moduli
identità/tenant, bambini, catalogo/materiali, configurazioni, sessioni/eventi,
adattamento e report. Estrarre servizi soltanto con un confine e un collo di
bottiglia misurati, responsabilità operativa e necessità di rilascio indipendente.

Organizzare package per funzionalità e, al loro interno, dominio, casi d'uso e
adattatori HTTP/persistenza. Controller sottili, transazioni sui casi d'uso,
invarianti nel dominio puro. DTO espliciti, mapping e validazione ai confini;
nessuna serializzazione accidentale di relazioni JPA. Testare dipendenze fra
moduli ed evitare accessi diretti alle tabelle di un altro modulo.

Baseline candidata: Spring MVC con persistenza relazionale. WebFlux e virtual
thread richiedono motivazione e prova sul carico; non eliminano i limiti del pool
DB né trasformano chiamate bloccanti in operazioni non bloccanti.

## Autenticazione e autorizzazione

- Chiudere D-12 con un ADR su identity provider, ciclo account e modello browser
  (sessione/BFF o token). Se si usa OIDC, validare issuer, audience, scadenza e
  firma; non scrivere protocolli o crittografia proprietari.
- Con cookie applicare protezioni CSRF, Secure, HttpOnly e SameSite coerente;
  definire CORS per origini precise. Non assumere che CORS autorizzi un utente.
- Il contesto tenant deriva da identità e appartenenza verificata. Negare per
  default; verificare ruolo e accesso all'oggetto nel caso d'uso, anche per batch,
  job, esportazioni e URL dei media. D-3 determina l'eventuale assegnazione bambini.
- Registrazione e inviti non consentono di dichiararsi amministratore. Definire
  bootstrap del primo amministratore, inviti a uso limitato, revoca e audit.
- Non trattare amministratore di tenant come amministratore globale né attribuirgli
  automaticamente accesso a dati e report dei bambini.

## PostgreSQL e isolamento

D-10 resta aperta. Candidata: tabelle condivise con `tenant_id`, vincoli e indici
composti con tenant, verifiche applicative e RLS come difesa aggiuntiva.
Confrontare schema/database separati per esigenze di isolamento e operatività.

Se si adotta RLS: ruolo runtime senza superuser/BYPASSRLS, gestione esplicita
dell'owner e di FORCE ROW LEVEL SECURITY, contesto tenant limitato alla transazione
e test del riuso delle connessioni. Connessione senza tenant deve fallire in modo
chiuso. Job e migrazioni usano ruoli/contesti separati e controllati. RLS non
sostituisce l'autorizzazione; owner e ruoli privilegiati possono bypassarla.
FK composte devono impedire riferimenti fra tenant, oltre ai filtri SELECT.

Migrazioni con un solo strumento versionato (Flyway o Liquibase da scegliere),
nessun aggiornamento automatico dello schema in produzione. Preferire espansione,
backfill controllato e rimozione successiva, compatibili con deploy graduali.
Testare aggiornamento da schema precedente e ripristino da backup, inclusi media.

## Scalabilità e lavori asincroni

- Repliche HTTP senza stato autorevole in memoria locale: sessioni di autenticazione,
  chiavi d'idempotenza e lock devono restare corretti fra repliche e riavvii.
- Query indicizzate secondo i filtri reali, piani di esecuzione su dataset realistici,
  paginazione, proiezioni e controllo N+1. Limitare transazioni e risultati.
- Budget delle connessioni: somma dei pool di API e worker più manutenzione entro
  la capacità DB verificata. Aggiungere repliche senza questo budget può peggiorare
  latenza e disponibilità.
- Eventi di gioco con ingestione limitata e commit rapido. Elaborazioni di report,
  esportazioni e stime fuori dalla richiesta quando costose; job persistenti con
  stato interrogabile, retry limitati, backoff, deduplicazione e gestione fallimenti.
- Se una transazione DB pubblica anche un evento esterno, usare outbox transazionale
  e consumer idempotenti; non introdurre un broker senza un bisogno dimostrato.
- Limiti per tenant/operazione e backpressure per proteggere il servizio dai picchi;
  rendere esplicito il retry al client senza perdere eventi già ricevuti.
- Cache solo con chiavi tenant-aware, invalidazione e budget; non cache condivise
  che aggirino permessi. Partizionamento e repliche di lettura solo dopo misure;
  le decisioni di autorizzazione/accettazione non leggono dati obsoleti.

## Media e operatività

D-11 decide l'archivio. Candidati object storage privato e metadati PostgreSQL;
limiti di dimensione, controllo effettivo del tipo, nomi generati e pipeline di
validazione. Gli URL temporanei seguono autorizzazione e scadenza. Chiarire se
l'accesso FE allo storage autorizzato sia compatibile con AR-6 prima di adottarlo.
Nessun volume locale di una singola replica come archivio condiviso autorevole.

Container non privilegiati, segreti esterni alle immagini, graceful shutdown,
readiness/liveness con semantiche distinte. Metriche, log strutturati e trace con
correlation ID; niente nomi, risposte del bambino, token o payload nei log.
Non usare ID bambino/sessione/tenant come label metriche ad alta cardinalità.
Proteggere gli endpoint Actuator; definire backup, restore e riconciliazione dei job.

Fonti: [Spring Boot observability](https://docs.spring.io/spring-boot/reference/actuator/observability.html),
[PostgreSQL RLS](https://www.postgresql.org/docs/current/ddl-rowsecurity.html).
