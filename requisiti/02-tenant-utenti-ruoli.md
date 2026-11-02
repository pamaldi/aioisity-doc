# 02 · Tenant, utenti e ruoli

## Requisiti

| ID | Requisito | Fonte |
|---|---|---|
| MT-1 | Il sistema DEVE gestire più tenant. | committente |
| MT-2 | Ogni tenant DEVE poter avere più utenti. | committente |
| MT-3 | Ogni utente DEVE avere uno di questi ruoli: **terapista**, **supervisore**, **amministratore**. | committente |
| MT-4 | Un utente NON DEVE vedere né modificare utenti, bambini, materiali, sessioni o osservazioni di un altro tenant. | derivato da MT-1 e da survey §9.1 P0, «profili isolati» |
| MT-5 | Ogni dato del dominio (bambino, materiale, sessione, tentativo, proposta, osservazione) DEVE appartenere a un solo tenant. | derivato da MT-4 |
| MT-6 | Ogni azione di un utente su dati di un bambino o su una proposta DEVE registrare chi l'ha fatta. | derivato da survey §9.2 («provenienza distinta») e da spec 01 R5 («decide l'adulto») |

## Permessi per ruolo

**Proposta da confermare (D-3).** Il committente ha indicato i ruoli ma non i loro permessi. La tabella è solo un punto di partenza per la discussione.

| Azione | Terapista | Supervisore | Amministratore |
|---|---|---|---|
| Gestire gli utenti del tenant | no | no | sì |
| Creare e modificare i dati di un bambino | ? | ? | ? |
| Preparare materiali e configurare un gioco | sì | sì | ? |
| Avviare una sessione di gioco | sì | sì | no |
| Accettare o rifiutare una proposta del sistema | ? | sì | no |
| Definire gerarchia e criteri degli aiuti | no | sì | no |
| Leggere report ed esportare dati | propri bambini? | tutto il tenant? | no? |

## Legame con gli attori della survey e del prototipo

| Attore (survey §13.1, prototipo) | Nel sistema | Note |
|---|---|---|
| Ente o centro | tenant? | Sembra corrispondere. La survey parla di «licenza per scuola o centro: multi-profilo e amministrazione» (§13.2). Da confermare (D-2). |
| Professionista, educatore | terapista? | Da confermare. |
| Analista ABA del prototipo | supervisore? | Nel prototipo l'analista definisce aiuti e criteri (spec 05). Da confermare. |
| Famiglia | non c'è un ruolo | Nella survey la famiglia prepara materiali e registra la voce, e osserva a casa (§14.3 C). Da decidere (D-4). |
| Bambino | non è un utente con credenziali | Gioca nell'ambiente del bambino, aperto da un adulto. Da confermare (D-5). |
