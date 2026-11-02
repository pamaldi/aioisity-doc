# 09 · Decisioni aperte

I punti marcati **conflitto** mettono un requisito nuovo del committente in contrasto con un principio del prototipo o della survey. Vanno risolti prima di scrivere `aioisity-api`.

| ID | Tema | Domanda | Perché conta |
|---|---|---|---|
| D-1 | **Conflitto:** dati sul dispositivo o sul server | Il prototipo tiene tutti i dati sul dispositivo e non usa la rete. Il principio era «nessun dato del bambino esce dal dispositivo senza una scelta esplicita». Con PostgreSQL i dati stanno su un server. Il gioco deve funzionare anche senza rete? | Cambia la privacy (§11.4), l'architettura del front end e la sincronizzazione (§11.1). |
| D-2 | Che cos'è un tenant | Un centro, una scuola, uno studio professionale, una famiglia? | Decide chi amministra e chi vede che cosa. |
| D-3 | Permessi dei ruoli | Che cosa può fare ciascun ruolo? Un utente può avere più ruoli, o stare in più tenant? Il terapista vede solo i bambini assegnati? | La tabella in [02](02-tenant-utenti-ruoli.md) è solo una proposta. |
| D-4 | Famiglia | Nei ruoli manca il genitore. Chi fotografa gli oggetti di casa, registra la voce del familiare e annota la prova a casa? | Nel prototipo e nella survey sono compiti della famiglia (§14.3 C, §13.1). |
| D-5 | Bambino e dispositivo | Come si apre il gioco del bambino? Con la sessione di un adulto, o con un dispositivo associato al bambino? | Serve per proteggere l'area adulti e per l'autenticazione. |
| D-6 | **Conflitto:** nome del bambino | Il prototipo usa un nome di fantasia (spec 02 R1.2); la survey propone un profilo senza nome (§9.2). Il requisito nuovo dice «nome». È il nome vero? | Il nome vero è un dato personale e aumenta gli obblighi GDPR. |
| D-7 | Età | Età in anni inserita a mano, o anno o mese di nascita da cui calcolarla? | L'età inserita a mano invecchia; la data di nascita è un dato più identificativo. |
| D-8 | Dati di gioco come dati sanitari | Se la piattaforma è usata in terapia, i tentativi possono essere dati relativi alla salute (art. 9 GDPR). Chi è titolare e chi responsabile del trattamento? | Il requisito «niente dati sensibili» potrebbe non bastare (§11.4). |
| D-9 | Dove gira il motore | Durante il gioco, gesto e correttezza devono rispondere subito: nel front end? Stime e proposte a fine sessione: nelle API? Il motore va riscritto in Java o resta in TypeScript? | Il motore del prototipo è TypeScript puro, già testato. |
| D-10 | Isolamento dei tenant in PostgreSQL | Colonna `tenant_id` con Row Level Security, uno schema per tenant, o un database per tenant? | Sicurezza, migrazioni, costi. |
| D-11 | Foto e voci | Dove si salvano: in PostgreSQL (bytea / large object) o in un archivio di oggetti in un container (per esempio MinIO)? | Il committente ha indicato solo PostgreSQL e Docker. |
| D-12 | Autenticazione | Utenti gestiti dalle API (Spring Security) o da un identity provider in container (per esempio Keycloak)? | Riguarda MT-3 e la gestione degli utenti per tenant. |
| D-13 | Front end e versioni | Il front end riusa React + TypeScript del prototipo? Versioni di Java, Spring Boot e PostgreSQL? | Necessario per creare `aioisity-fe` e `aioisity-api`. |
| D-14 | Dispositivi | Cellulare, tablet o entrambi? Non è stato confermato. Il tocco con il dito non è mai stato provato su un dispositivo reale. | Dimensioni dei bersagli, gesto, layout. |
| D-15 | Servizio AI | Dove ospitarlo, con quale chiave, chi paga. Oppure rimandarlo. | Riguarda AI-1…6. |
| D-16 | Parere dell'analista | Gerarchia degli aiuti, criteri di riduzione, definizione di risposta indipendente. | Blocca AT-10 e AT-12. |
