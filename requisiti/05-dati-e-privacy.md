# 05 · Dati e privacy

## Dati minimi e inferenze da evitare

Fonte: survey §11.2.

| Dato minimo | Uso legittimo | Che cosa non dimostra |
|---|---|---|
| Identificativo dell'attività e versione | Sapere quale esperienza è stata proposta. | Equivalenza con altre versioni. |
| Configurazione di accesso | Interpretare il modo di rispondere. | Capacità motoria generale. |
| Item, risposta e aiuto | Distinguere prova autonoma e assistita. | Diagnosi o intelligenza. |
| Pausa richiesta o sessione interrotta | Descrivere l'andamento. | Causa emotiva dell'interruzione. |
| Tempo di risposta, se utile | Descrivere il compito. | Velocità come misura universale di competenza. |
| Osservazione fuori dall'app, con contesto | Documentare un esito concreto. | Generalizzazione a tutti gli ambienti. |

## Requisiti

| ID | Requisito | Fonte |
|---|---|---|
| DP-1 | Il sistema DEVE registrare il minimo necessario per lo scopo scelto. | survey §11.2 |
| DP-2 | Il sistema NON DEVE registrare in modo continuo volto e ambiente. | survey §11.2 |
| DP-3 | Il rifiuto di un'attività NON DEVE essere interpretato come ansia, sovraccarico o mancata comprensione. | survey §9.4 |
| DP-4 | Foto e voci DEVONO essere visibili solo agli utenti autorizzati del tenant. Si esportano solo per scelta esplicita. | derivato da MT-4; spec 03 R4.1 |
| DP-5 | Un profilo pseudonimo NON DEVE essere trattato come anonimo. | survey §11.3 |
| DP-6 | Prima del pilota con le famiglie DEVONO essere chiariti finalità, ruoli (titolare, responsabile), basi giuridiche, conservazione e condivisione. Serve anche una valutazione d'impatto. | survey §11.4; architettura del prototipo §6 |
| DP-7 | Il sistema DEVE permettere di cancellare i dati di un bambino e di esportarli. | derivato da survey §11.4 (GDPR) |
| DP-8 | Le dichiarazioni sul prodotto NON DEVONO attribuirgli una destinazione medica finché la qualificazione non è stata valutata. | survey §11.4 |

**Nota.** Le foto degli oggetti di casa possono ritrarre persone o ambienti domestici. I tentativi di gioco di un bambino in terapia possono rientrare tra i dati relativi alla salute (GDPR, art. 9). Vedi D-1 e D-8.
