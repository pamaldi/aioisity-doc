# Roadmap delle specifiche AIOISITY

Registro centrale SDD — aggiornato al 2 novembre 2026.
Metodo confermato; **scomposizione e ordine iniziali proposti**, senza date di
consegna concordate. Tutte le spec sotto sono pianificate: i rispettivi documenti
non sono ancora creati. «Fatto nel prototipo» non significa fatto nella piattaforma.

## Come leggere il registro

Regole e stati in [specs/README.md](specs/README.md). Ogni nuova spec, incluse FE/API,
deve comparire qui. Owner attuale: da assegnare per tutte le righe. Il progetto
canonico delle righe iniziali è `aioisity-doc`; nessuna ha ancora una spec padre.
I percorsi sono destinazioni previste, non collegamenti a documenti esistenti.
Alla creazione inserire link ai tre file, revisione e owner; al completamento
collegare evidenze e release. Le dipendenze sotto guidano l'integrazione: il lavoro
di specifica può procedere prima se i contratti necessari sono definiti.

## Registro iniziale

| ID / incremento | Requisiti principali | Progetti coinvolti | Dipendenze | Stato | Decisioni da risolvere per lo scope | Percorso previsto |
|---|---|---|---|---|---|---|
| SPEC-001 · Fondazioni, confini e contratti | AR-1…10, NF-7…12 | doc, fe, api | — | pianificata | D-1, D-9…14; baseline tecnica | `specs/SPEC-001-fondazioni/` |
| SPEC-010 · Registrazione, tenant e ruoli | MT-1…6, NF-7; richiesta registrazione | doc, fe, api | SPEC-001 | pianificata | D-2, D-3, D-12; inviti/bootstrap | `specs/SPEC-010-identita-tenant-ruoli/` |
| SPEC-020 · Bambini, profili e accesso al gioco | BA-1…14, GI-7 | doc, fe, api | SPEC-010 | pianificata | D-3…8 | `specs/SPEC-020-bambini-profili/` |
| SPEC-030 · Catalogo template e versioni | TP-1…5 | doc, fe, api | SPEC-001 | pianificata | D-9; pubblicazione catalogo e confine tenant | `specs/SPEC-030-template/` |
| SPEC-040 · Materiali personali e riuso | MA-1…8, DP-4 | doc, fe, api | SPEC-010, SPEC-030 | pianificata | D-4, D-11; diritti e provenienza | `specs/SPEC-040-materiali/` |
| SPEC-050 · Editor, anteprima e configurazioni | CF-1…6, BA-14, TP-3 | doc, fe, api | SPEC-020, SPEC-030, SPEC-040 | pianificata | D-3, D-14 | `specs/SPEC-050-editor/` |
| SPEC-060 · Sessione accessibile e recupero eventi | GI-1…8, AT-1…3, AT-11, BA-13, NF-1…6, OS-6 | doc, fe, api | SPEC-050 | pianificata | D-1, D-5, D-9, D-14 | `specs/SPEC-060-sessioni/` |
| SPEC-070 · Stime e proposte adattive | AT-4…10, AT-12…16, TP-4, NF-9 | doc, fe, api | SPEC-060 | pianificata | D-3, D-16; sufficienza evidenze | `specs/SPEC-070-adattamento/` |
| SPEC-080 · Diario, osservazioni reali e report | OS-1…8, BA-10, DP-3 | doc, fe, api | SPEC-060, SPEC-070 | pianificata | D-3, D-4; report e raccolta disattivata | `specs/SPEC-080-diario-report/` |
| SPEC-090 · Portabilità e ciclo di vita dei dati | PO-1…3, DP-1…8 | doc, fe, api | SPEC-020, SPEC-040, SPEC-060 | pianificata | D-1, D-8, D-11; conservazione e cancellazione | `specs/SPEC-090-portabilita-dati/` |
| SPEC-100 · Operatività, sicurezza e scalabilità | AR-4/7/8, NF-6…9/12 | doc, fe, api | SPEC-001, SPEC-010, SPEC-060 | pianificata | carico/SLO, RPO/RTO, dispositivi D-14 | `specs/SPEC-100-operativita/` |
| SPEC-110 · Politiche e confronto controllato | PC-1…4, AT-13/16 | doc, fe, api | SPEC-070, SPEC-080 | pianificata | D-16; protocollo e criteri di confronto | `specs/SPEC-110-politiche/` |
| SPEC-120 · Assistenza AI per adulti, opzionale | AI-1…7 | doc, fe, api | SPEC-050, SPEC-090 | pianificata | D-15; attivazione e dati ammessi | `specs/SPEC-120-ai-adulti/` |

## Sequenza proposta e criteri di passaggio

1. **Fondazioni:** definire SPEC-001 e le decisioni necessarie a identità, dati e
   contratti. Specificare da subito privacy, recupero e operatività delle
   SPEC-090/100: la loro posizione nel registro non rinvia questi vincoli.
2. **Primo percorso completo:** SPEC-010…060 per preparare un gioco da template,
   provarlo, svolgerlo e recuperare i dati. Integrare i controlli pertinenti di
   SPEC-090/100. Scegliere il primo template nella spec, senza presumere che tutto
   il codice del prototipo sia trasferibile.
3. **Adattamento e lettura delle evidenze:** SPEC-070/080, dopo verifica dei dati
   raccolti e delle regole di conferma adulta. La parte diario può procedere prima
   delle proposte, esplicitando lo scope se si divide SPEC-080.
4. **Preparazione del pilota:** completare le parti necessarie di SPEC-090/100 e
   verificare accessibilità, permessi, restore e gestione dati. Le condizioni del
   pilota restano quelle di DP-6 e della roadmap di validazione.
5. **Confronto e opzioni successive:** SPEC-110 e, se scelta, SPEC-120. Non rendere
   AI o politiche sperimentali dipendenze implicite del gioco di base.

## Registro estensioni e completamenti

Quando nasce una spec FE/API aggiungere una riga con ID, padre SPEC-NNN, owner,
repository e link a requirements/design/tasks, dipendenze, stato e blocchi.
Quando una spec avanza aggiungere riferimenti a baseline, evidenze e release alla
sua riga o in una scheda sotto questo registro. Al momento non risultano spec
implementate, verificate o rilasciate per la nuova piattaforma.

Riferimenti: [requisiti globali](requisiti/README.md),
[decisioni aperte](requisiti/09-decisioni-aperte.md),
[roadmap di validazione](requisiti/08-validazione-e-roadmap.md).
