# 03 · Bambino e profilo

## Dati del bambino

| ID | Requisito | Fonte |
|---|---|---|
| BA-1 | Il sistema DEVE permettere di impostare i dati di un bambino. | committente |
| BA-2 | I dati del bambino DEVONO essere **solo nome ed età**. | committente |
| BA-3 | Il sistema NON DEVE chiedere né conservare dati sensibili del bambino: diagnosi, informazioni sanitarie, foto del volto per identificarlo, indirizzo, codici identificativi. | committente («niente dati sensibili»); survey §9.2 (profilo «privo di nome e diagnosi»), §11.4 |
| BA-4 | Ogni bambino DEVE appartenere a un solo tenant. | derivato da MT-5 |
| BA-5 | Il sistema NON DEVE produrre un «punteggio di autismo» o etichette diagnostiche. | survey §9.2, §9.4 |

Da decidere:

- se il nome è quello vero o di fantasia (D-6);
- come si registra l'età (D-7).

## Profilo: quattro oggetti separati

Fonte: survey §9.2. Sono dati di configurazione e di gioco legati al bambino, non dati anagrafici.

| ID | Oggetto | Contenuto | Fonte |
|---|---|---|---|
| BA-6 | **Preferenze e accessi confermati** | Lingua, gesto preferito, controlli sensoriali, modo di chiedere aiuto. | survey §9.2 |
| BA-7 | **Osservazioni per capacità** | Prestazioni sul singolo compito, con data e aiuti utilizzati. | survey §9.2 |
| BA-8 | **Configurazione del contesto** | Dispositivo, modalità individuale o condivisa, materiali disponibili. | survey §9.2 |
| BA-9 | **Stato temporaneo** | Pausa richiesta, interruzioni, scelta di una modalità più quieta. Non diventa automaticamente una caratteristica permanente. | survey §9.2 |

| ID | Requisito | Fonte |
|---|---|---|
| BA-10 | Preferenze inserite da un adulto, osservazioni e stime automatiche DEVONO avere provenienza distinta e registrata. | survey §9.2 |
| BA-11 | Un errore occasionale o una stima automatica NON DEVONO sovrascrivere un'informazione confermata. | survey §9.2; spec 05 R5.2; spec 07 R3.2 |
| BA-12 | I dati di un bambino NON DEVONO finire nel profilo di un altro bambino. | survey §9.1 P0; spec 02 R1.1 |
| BA-13 | MENTRE una sessione è in corso, il sistema NON DEVE permettere di cambiare bambino né di modificarne gli oggetti in gioco. | spec 02 R1.4; spec 03 R2.4 |
| BA-14 | Ogni modifica della configurazione DEVE aprire una nuova versione, conservando la precedente per il ripristino. | survey §9.3; spec 01 R5.4 |
