# AIOISITY — API

Template: installare questo contenuto nel CLAUDE.md alla radice di `aioisity-api`,
dopo aver predisposto lo snapshot locale descritto nello steering README.

@project-context/steering/00-governance.md
@project-context/steering/01-dominio.md
@project-context/steering/03-contratti-api.md
@project-context/steering/04-spring-boot.md
@project-context/steering/05-qualita.md

Leggi `project-context/BASELINE.md`, i requisiti pertinenti in
`project-context/requisiti/` e le relative decisioni aperte prima di modificare.
La fonte canonica del dominio è `aioisity-doc`; proponi lì i cambiamenti condivisi.
API in Spring Boot, PostgreSQL, container Docker. D-10/11/12/13 non sono risolte.

Segui Spec-Driven Development: leggi `project-context/ROADMAP.md` e
`project-context/specs/README.md`. Ogni attività deriva da una spec censita nella
roadmap centrale di doc. Usa la spec trasversale come fonte; se serve dettaglio
locale crea `specs/API-NNN-<nome>/requirements.md`, `design.md`, `tasks.md`, con
padre e revisione. Censisci anche la spec locale nella roadmap centrale.
Aggiorna prima la spec, poi il codice; riporta stato ed evidenze nel registro.
Adottando l'ownership proposta, mantieni il contratto canonico in `contracts/`
e pubblica release compatibili per FE. Dominio testabile senza Spring o DB.
Dopo lo scaffold documenta qui i comandi reali del wrapper Maven o Gradle per
build/test, avvio locale, migrazioni e integrazione. Non inventare comandi prima
di aver scelto e creato il sistema di build.
