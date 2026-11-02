# AIOISITY — frontend

Template: installare questo contenuto nel CLAUDE.md alla radice di `aioisity-fe`,
dopo aver predisposto lo snapshot locale descritto nello steering README.

@project-context/steering/00-governance.md
@project-context/steering/01-dominio.md
@project-context/steering/02-frontend.md
@project-context/steering/03-contratti-api.md
@project-context/steering/05-qualita.md

Leggi `project-context/BASELINE.md`, i requisiti pertinenti in
`project-context/requisiti/` e le relative decisioni aperte prima di modificare.
La fonte canonica è `aioisity-doc`; proponi lì cambiamenti al dominio condiviso.
Questo progetto contiene area adulti e ambiente bambino; non contiene accesso DB.

Segui Spec-Driven Development: leggi `project-context/ROADMAP.md` e
`project-context/specs/README.md`. Ogni attività deriva da una spec censita nella
roadmap centrale di doc. Usa la spec trasversale come fonte; se serve dettaglio
locale crea `specs/FE-NNN-<nome>/requirements.md`, `design.md`, `tasks.md`, con
padre e revisione. Censisci anche la spec locale nella roadmap centrale.
Aggiorna prima la spec, poi il codice; riporta stato ed evidenze nel registro.
Consuma il contratto API alla release dichiarata; non inventare endpoint nei mock.
Stack e versioni restano da decidere in D-13. Dopo lo scaffold documenta qui
comandi reali di installazione, sviluppo, build, lint, test ed E2E, ricavati dai
manifest. Non assumere che script o strumenti siano già presenti.
