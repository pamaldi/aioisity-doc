# 07 · Requisiti non funzionali

| ID | Area | Requisito | Fonte |
|---|---|---|---|
| NF-1 | Accessibilità | Il front end DEVE rispettare WCAG 2.2, in particolare 2.5.7 (alternativa al trascinamento) e 2.5.8 (dimensione dei bersagli). | architettura del prototipo §6 |
| NF-2 | Accessibilità | SE il target del rilascio comprende utenti di sensori o scansione, ALLORA quell'accesso DEVE essere un requisito iniziale. | survey §9.1 |
| NF-3 | Accessibilità | Nel profilo incluso nel rilascio NON DEVONO esserci barriere bloccanti. | survey §12.4 |
| NF-4 | Lingua | L'interfaccia DEVE essere in italiano; la lingua è una preferenza del profilo. | survey §14, §9.2 |
| NF-5 | Dispositivi | Il front end DEVE funzionare nel browser dei dispositivi realmente usati nel pilota. | survey §12.4 («sostenibilità tecnica»); D-14 |
| NF-6 | Affidabilità | Un'interruzione (rete, chiusura, crash) NON DEVE far perdere la sessione già giocata. | survey §9.1 P0, §11.1, §12.4 |
| NF-7 | Sicurezza | Autenticazione degli utenti, autorizzazione per ruolo e isolamento per tenant DEVONO essere verificati da test automatici. | derivato da MT-3, MT-4 |
| NF-8 | Sicurezza | Backup e ripristino del database DEVONO essere previsti e provati. | survey §11.1 («backup, perdita del dispositivo, accessi non autorizzati vanno progettati») |
| NF-9 | Tracciabilità | Ogni proposta e ogni decisione DEVONO registrare la versione della logica, l'utente e il momento. | survey §14.4; MT-6 |
| NF-10 | Metodo | Ogni funzione DEVE avere tre documenti: `requirements.md`, `design.md`, `tasks.md`. La specifica si corregge prima del codice. | metodo del prototipo (`specs/README.md`) |
| NF-11 | Metodo | Un requisito NON è soddisfatto finché un test o una registrazione non lo verifica. | metodo del prototipo |
| NF-12 | Metodo | Le regole critiche DEVONO avere test che falliscono se si toglie la protezione (mutazione a campione). Esempi: invarianza della domanda, isolamento, conferma dell'adulto. | architettura del prototipo §6 |
