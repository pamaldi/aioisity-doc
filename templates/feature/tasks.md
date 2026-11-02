# <ID funzione> — Attività e tracciabilità

Baseline requisiti/design: <versione>. Nessuna voce è completata per sola pianificazione.

ID spec: <SPEC/FE/API-NNN>. Owner: <nome>. Roadmap canonica: <link/ID>.
Stato SDD: <stato>. Blocco eventuale: <motivo/decisione/azione oppure nessuno>.

| ID | Attività | Progetto | Dipende da | Requisiti | Evidenza attesa | Stato |
|---|---|---|---|---|---|---|
| T-1 | Definire requisiti e decisioni necessarie | doc | — | <ID> | criteri verificabili | da fare |
| T-2 | Specificare contratto e scenari di errore | api/doc | T-1 | <ID> | contratto validato | da fare |
| T-3 | Implementare dominio e persistenza | api | T-2 | <ID> | test dominio/DB | da fare |
| T-4 | Implementare flussi e componenti | fe | T-2 | <ID> | test UI/accessibilità | da fare |
| T-5 | Verificare integrazione e guasti | fe/api | T-3, T-4 | <ID> | evidenze E2E | da fare |
| T-6 | Aggiornare roadmap, evidenze e baseline | doc | T-5 | <ID spec> | stato coerente nel registro centrale | da fare |

Adattare le attività alla funzione; non creare lavoro non pertinente.

## Evidenze effettive

| Requisito | UI/API | Test o prova | Ambiente/comando | Risultato/data | Limiti |
|---|---|---|---|---|---|
| <ID> | <componente/operazione> | <riferimento> | <ambiente> | non eseguito | <limite> |

## Consegna

<Cosa cambia, perché, verifiche eseguite, decisioni ancora aperte,
compatibilità e attività residue.>
