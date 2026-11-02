# 04 · Requisiti funzionali

La colonna «Prototipo» indica lo stato nel gioco «Prepariamo lo zaino».

## GI · Ambiente del bambino

Fonte generale: survey §11.1, «Ambiente bambino».

| ID | P | Requisito | Criterio verificabile | Fonte | Prototipo |
|---|---|---|---|---|---|
| GI-1 | P0 | Pausa, aiuto e uscita DEVONO essere sempre disponibili durante il gioco e comprensibili senza leggere. | Si usano senza leggere una frase. | survey §9.1; spec 01 R6.1 | fatto |
| GI-2 | P0 | Voce, musica, effetti e movimento DEVONO essere regolabili separatamente. | Spegnere un canale non rende il compito incomprensibile. | survey §9.1; spec 01 R6.2 | fatto (senza musica) |
| GI-3 | P0 | Ogni compito che usa il trascinamento DEVE offrire un gesto alternativo con lo stesso obiettivo. | Stesso obiettivo, gesto diverso. | survey §9.1; WCAG 2.5.7; spec 01 R2 | fatto (due tocchi) |
| GI-4 | P0 | Il sistema NON DEVE avere tempi limite. Una risposta lenta NON DEVE essere classificata come errore. | Nessun timeout. | survey §9.1; spec 01 R1.3 | fatto |
| GI-5 | P0 | Ogni sessione DEVE avere un inizio e una conclusione espliciti. Si DEVE poter interrompere senza perdere i dati e senza penalità. | Uscita anticipata salvata. | survey §9.1; spec 01 R1.4 | fatto |
| GI-6 | — | QUANDO la scelta è sbagliata o il gesto non riesce, il sistema DEVE riportare l'oggetto al suo posto, senza suoni d'errore. | | spec 01 R1.3 | fatto |
| GI-7 | — | L'area adulti NON DEVE essere raggiungibile dal bambino per errore. | | spec 01 R6.3 (pressione prolungata) | fatto |
| GI-8 | — | SE il dispositivo ospita una CAA, ALLORA la chiusura del gioco o un limite al gioco NON DEVONO impedire l'accesso alla comunicazione. | | survey §11.3 | — |

## CF · Configurazione

Fonte generale: survey §11.1, «Editor adulto» e «Profilo e configurazioni».

| ID | P | Requisito | Criterio verificabile | Fonte | Prototipo |
|---|---|---|---|---|---|
| CF-1 | P0 | La configurazione DEVE essere semplice. Un adulto NON DEVE poter modificare per errore il profilo di un altro bambino. | | survey §9.1 | fatto |
| CF-2 | — | L'adulto DEVE scegliere esplicitamente l'obiettivo del compito, per esempio abbinare l'oggetto mostrato oppure riconoscere quello nominato. Il sistema NON DEVE cambiarlo da solo. | | survey §14.5; spec 02 R2 | fatto |
| CF-3 | — | Il sistema DEVE rifiutare le configurazioni incoerenti spiegando il motivo. Esempio: consegna solo vocale con la voce spenta. Se la configurazione ha errori, la sessione NON DEVE partire. | | survey §9.3; spec 02 R3 | fatto |
| CF-4 | — | Il sistema DEVE indicare quali parametri richiedono materiali mancanti. | | survey §9.3 | in parte |
| CF-5 | — | Prima che il bambino veda un'attività, l'adulto DEVE poterla vedere in anteprima e provarne l'accessibilità. | | survey §11.1; spec 03 R1.5 | in parte |
| CF-6 | — | Una configurazione iniziale DEVE richiedere pochi minuti; le modifiche successive devono essere rapide. | Tempo di preparazione misurato. | survey §12.4; spec 03 R4.2 | in parte: si misura, ma non è stato provato con un genitore |

## MA · Materiali

| ID | P | Requisito | Criterio verificabile | Fonte | Prototipo |
|---|---|---|---|---|---|
| MA-1 | P1 | L'adulto DEVE poter preparare un'attività da un modello con foto e registrazioni proprie, senza strumenti esterni. | Attività pronta da un modello. | survey §9.1; spec 03 R1 | fatto |
| MA-2 | — | L'adulto DEVE poter scattare o scegliere una foto dal dispositivo e registrare una voce, per esempio quella di un familiare. | | spec 03 R1.1, R1.3 | fatto |
| MA-3 | — | SE il microfono non è disponibile, ALLORA il sistema DEVE dirlo e usare un'alternativa. | | spec 03 R1.4 | fatto |
| MA-4 | — | Un oggetto DEVE poter avere più foto, usate come rappresentazioni diverse. | | survey §14.3 B; spec 05 R4.1 | fatto |
| MA-5 | — | L'adulto DEVE poter mettere e togliere ogni oggetto dal gioco. | | spec 03 R2 | fatto |
| MA-6 | — | I materiali DEVONO essere riutilizzabili in template diversi. | | survey §14.1 | da fare |
| MA-7 | — | Un pacchetto di materiali DEVE indicare diritti e provenienza. | | survey §11.3 | da fare |
| MA-8 | — | Ogni tentativo DEVE registrare la versione dei materiali usati. | | survey §11.2; spec 03 R3.3 | fatto |

## AT · Adattamento

| ID | P | Requisito | Fonte | Prototipo |
|---|---|---|---|---|
| AT-1 | — | Cambiare il modo di rispondere o un aiuto NON DEVE modificare consegna, oggetti, alternative o risposta giusta. | survey §14.3 A; spec 01 R2.3 | fatto |
| AT-2 | — | Per ogni tentativo il sistema DEVE registrare separatamente: scelta e correttezza, esito del gesto, aiuti presenti e loro origine, tipo di interazione, item, completamento. | survey §9.3 passi 1–2, §14.4; spec 01 R3 | fatto (origine degli aiuti: da fare) |
| AT-3 | — | Le prove interrotte, aiutate fisicamente o immediatamente successive a un cambio NON DEVONO valere come evidenza. | survey §9.3 passo 1; spec 01 R3.4 | fatto |
| AT-4 | — | Il sistema DEVE proporre un cambio solo dopo più prove e più sessioni, mai durante il gioco. | survey §9.3 passo 3; spec 01 R4.1 | fatto |
| AT-5 | — | Ogni proposta DEVE cambiare una sola dimensione. | survey §9.3 passo 4 | fatto |
| AT-6 | — | Ogni proposta DEVE essere spiegata indicando dati, incertezza, modifica proposta e versione della logica. | survey §9.3 passo 5, §14.3 D; spec 01 R4.5 | fatto |
| AT-7 | — | Nessun cambio DEVE applicarsi senza la conferma di un adulto. L'adulto DEVE poter accettare, rifiutare, bloccare una dimensione e tornare alla configurazione precedente. | survey §9.3 passo 6; spec 01 R5 | fatto |
| AT-8 | — | Il sistema DEVE poter decidere di non cambiare nulla quando i dati non bastano. | survey §14.3 B, §14.4 | fatto |
| AT-9 | P1 | Aiuto e difficoltà DEVONO essere indipendenti: l'adulto può mantenere il contenuto e cambiare l'assistenza. | survey §9.1 | in parte |
| AT-10 | — | Il supervisore DEVE poter definire una gerarchia degli aiuti e i criteri per ridurli. Le proposte di riduzione sono una categoria separata. | spec 05 R1, R2 | da fare |
| AT-11 | — | La risposta giusta DEVE occupare ogni posizione in proporzioni uguali. | survey §10.1; spec 05 R3 | fatto |
| AT-12 | — | Il sistema DEVE scegliere la variante successiva fra quelle ammesse, preferendo quella su cui la stima è più incerta. Una variante NON DEVE cambiare l'obiettivo. | survey §14.3 B; spec 05 R4 | da fare |
| AT-13 | — | Il sistema NON DEVE togliere un aiuto necessario per ottenere una misura più «pulita». | survey §14.3 B, §12.5 | — |
| AT-14 | — | Le stime DEVONO essere per compito, rappresentazione e livello di aiuto, con incertezza. | survey §14.3 B; spec 05 R5 | in parte |
| AT-15 | P2 | Un adattamento automatico DEVE essere spiegabile, reversibile e limitabile per obiettivo. | survey §9.1 | — |
| AT-16 | — | La logica che sceglie i cambi DEVE essere versionata e stabile. Le stime si aggiornano; la politica decisionale no. | survey §14.4 | fatto |

## OS · Osservazioni, diario e report

| ID | P | Requisito | Fonte | Prototipo |
|---|---|---|---|---|
| OS-1 | P1 | A fine sessione l'adulto PUÒ registrare una prova con gli oggetti veri. Gli esiti possibili sono quattro: in autonomia, con aiuto, non riuscito in questa occasione, non osservato. Può aggiungere il contesto. | survey §9.1 «versione fuori schermo», §14.3 C; spec 06 R1 | fatto |
| OS-2 | — | Le osservazioni reali DEVONO avere provenienza «adulto» e NON DEVONO mai sommarsi ai dati del gioco. | survey §14.3 C; spec 06 R2.1 | fatto |
| OS-3 | — | «Non osservato» NON DEVE contare come insuccesso. | survey §14.3 C; spec 06 R2.2 | fatto |
| OS-4 | — | Il trasferimento NON DEVE essere dedotto dalla prestazione nel gioco. | survey §14.3 C; spec 06 R2.4 | fatto |
| OS-5 | — | I report DEVONO distinguere quattro casi: riesce con la foto personale, con una foto nuova, con l'oggetto reale, con un'altra persona. | survey §10.4 | in parte |
| OS-6 | — | Il diario DEVE essere disattivabile: si può usare il gioco senza raccogliere dati. | survey §10.4, §11.2 | da fare |
| OS-7 | — | Il diario DEVE mostrare le evidenze e i motivi delle proposte. | survey §14.4 | fatto |
| OS-8 | — | Abbandoni, pause e sessioni interrotte DEVONO comparire nei report insieme alle sessioni riuscite. | survey §12.4, §14.6 | in parte |

## TP · Più giochi (template)

| ID | Requisito | Fonte | Prototipo |
|---|---|---|---|
| TP-1 | Il sistema DEVE supportare più template. Tutti hanno la stessa navigazione, gli stessi comandi di pausa, aiuto e uscita e la stessa conclusione. | survey §13.3 passo 4; spec 07 R1.1 | da fare |
| TP-2 | Ogni template DEVE dichiarare obiettivi, modi d'accesso supportati e versione. | spec 07 R1.2 | da fare |
| TP-3 | Le preferenze confermate DEVONO valere in tutti i template che le supportano. SE un template non ne supporta una, ALLORA il sistema DEVE dirlo. | survey §14.3 D; spec 07 R2 | da fare |
| TP-4 | Stime e proposte di un template NON DEVONO essere usate in un altro. | survey §14.1, §14.3 D; spec 07 R2.3 | da fare |
| TP-5 | Un template NON DEVE cambiare implicitamente obiettivo quando cambia presentazione o comando. | survey §14.5 | fatto |

## PO · Portabilità

| ID | P | Requisito | Fonte | Prototipo |
|---|---|---|---|---|
| PO-1 | P1 | L'esportazione DEVE essere selettiva: l'adulto sceglie se includere materiali, impostazioni e storia d'uso. | survey §9.1, §11.1; spec 07 R4.1 | in parte |
| PO-2 | — | All'importazione il sistema DEVE elencare ciò che non può rispettare. L'importazione NON DEVE toccare altri profili. | survey §9.2; spec 07 R4.2–R4.3 | da fare |
| PO-3 | — | La condivisione DEVE essere selettiva e revocabile. | survey §11.3 | da fare |

## AI · Intelligenza artificiale per l'adulto

| ID | P | Requisito | Fonte | Prototipo |
|---|---|---|---|---|
| AI-1 | P2 | L'AI PUÒ proporre all'adulto bozze di consegne e varianti, etichette per le foto caricate e sintesi del diario. Ogni proposta richiede anteprima e approvazione dell'adulto. | survey §9.1, §9.4; spec 04 R1 | da fare |
| AI-2 | — | Una bozza NON DEVE comparire al bambino senza approvazione. | survey §9.4; spec 04 R1.4 | da fare |
| AI-3 | — | All'AI DEVONO arrivare solo i dati necessari. Nessun dato del bambino esce dal sistema senza una scelta esplicita. | survey §9.4; spec 04 R2.1 | da fare |
| AI-4 | — | L'aiuto AI DEVE essere spento per impostazione predefinita. | spec 04 R2.2 | da fare |
| AI-5 | — | SE il servizio AI non risponde, ALLORA il resto del sistema DEVE continuare a funzionare. | spec 04 R1.5 | da fare |
| AI-6 | — | Ogni bozza DEVE registrare versione del prompt, modello e decisione dell'adulto. | spec 04 R2.4 | da fare |
| AI-7 | — | Il ciclo di gioco NON DEVE dipendere da un modello linguistico. | survey §14.4 | fatto |

## PC · Politiche di adattamento e confronto

| ID | Requisito | Fonte | Prototipo |
|---|---|---|---|
| PC-1 | Il sistema DEVE supportare tre politiche intercambiabili: A, impostazioni manuali; B, regola sulla sola correttezza; C, motore che considera accesso, aiuti e contesto. | survey §14.6; spec 08 R1 | da fare |
| PC-2 | Il supervisore DEVE poter assegnare una condizione a un bambino. La condizione compare nei dati esportati. | spec 08 R2.1 | da fare |
| PC-3 | La condizione di controllo NON DEVE togliere accomodamenti necessari. | survey §12.5 | da fare |
| PC-4 | La politica C diventa predefinita solo se batte A e B senza aumentare il lavoro dell'adulto. | survey §14.6; spec 08 R3 | da fare |
