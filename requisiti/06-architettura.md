# 06 · Architettura

## Requisiti architetturali

| ID | Requisito | Fonte |
|---|---|---|
| AR-1 | La soluzione DEVE essere composta da un **front end** e da **API**. | committente |
| AR-2 | Le API DEVONO essere realizzate in **Spring Boot**. | committente |
| AR-3 | La soluzione DEVE poggiare su un database **PostgreSQL**. | committente |
| AR-4 | Front end, API e database DEVONO girare in container **Docker**. | committente |
| AR-5 | Il codice DEVE stare in tre progetti: `aioisity-doc` (requisiti globali), `aioisity-fe` (front end), `aioisity-api` (API). | committente |
| AR-6 | Il front end DEVE accedere ai dati solo attraverso le API, mai direttamente al database. | derivato da AR-1 e AR-3 |
| AR-7 | Le API DEVONO applicare l'isolamento fra tenant (MT-4) e i permessi per ruolo (MT-3) su ogni richiesta. | derivato da MT-3, MT-4 |
| AR-8 | Lo schema del database DEVE evolvere con migrazioni versionate. Ogni migrazione deve avere un test sui dati della versione precedente. | derivato dalla pratica del prototipo (architettura §6, test di aggiornamento) |
| AR-9 | Le regole del dominio DEVONO essere testabili senza interfaccia e senza database: template, correttezza, gesto, vincoli, regole di adattamento. | architettura del prototipo §2 |
| AR-10 | Il front end DEVE essere servito su HTTPS. Fotocamera e microfono dal browser lo richiedono. | piattaforma web; prototipo (`capture`, `getUserMedia`) |

## Schema

```
            ┌────────────────────────────┐
 browser ──►│ aioisity-fe  (container)   │  gioco del bambino · area adulti
            └─────────────┬──────────────┘
                          │ HTTPS / API
            ┌─────────────▼──────────────┐
            │ aioisity-api (container)   │  Spring Boot · tenant, ruoli,
            │                            │  bambini, materiali, sessioni,
            │                            │  proposte, osservazioni, report
            └─────────────┬──────────────┘
                          │
            ┌─────────────▼──────────────┐
            │ PostgreSQL  (container)    │
            └────────────────────────────┘
```

## Componenti logici

Fonte: survey §11.1 e §14.4. La ripartizione fra front end e API è una **proposta da confermare** (D-9).

| Componente | Responsabilità | Dove (proposta) |
|---|---|---|
| Ambiente bambino | Scelta, gioco, aiuto, pausa, conclusione. | fe |
| Editor adulto | Modelli, materiali, anteprima, test dell'accessibilità. | fe + api |
| Motore del template | Regole e varianti progettate; significato del compito stabile. | fe (durante il gioco); D-9 |
| Registrazione degli eventi | Scelta, gesto, aiuto, configurazione, pausa, versione del materiale. | fe raccoglie, api salva |
| Modello delle prestazioni | Stime circoscritte con incertezza; preferenze esplicite separate dalle inferenze. | api |
| Selettore degli adattamenti | Sceglie fra azioni ammesse, compresa la decisione di non cambiare. | api |
| Vincoli e controllo | Accessi necessari, impostazioni bloccate, pause, approvazioni. | api (e fe per l'anteprima) |
| Diario adulto e report | Evidenze, motivi delle proposte, osservazioni reali. | fe + api |
| Esportazione selettiva | Separa materiali, impostazioni e storia d'uso. | api |
| Tenant, utenti, ruoli | Autenticazione, autorizzazione, isolamento. | api |

## Da decidere

Vedi [09-decisioni-aperte.md](09-decisioni-aperte.md):

- isolamento dei tenant in PostgreSQL (D-10);
- dove si salvano foto e voci (D-11);
- funzionamento senza rete (D-1);
- autenticazione (D-12);
- tecnologia del front end e versioni (D-13).
