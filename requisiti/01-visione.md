# 01 · Visione e ambito

## Obiettivo

Fonte: survey §14.1.

**AIOISITY** (*Adaptive Interactive Open-play Inclusive Sensory Interface*) è una piattaforma di giochi. Impara quali condizioni aiutano il singolo bambino a:

- partecipare;
- svolgere un compito;
- usare quanto appreso in situazioni nuove.

L'adulto parte da un template pronto, inserisce materiali pertinenti e decide quali modifiche sono consentite. Durante il gioco il sistema raccoglie osservazioni, propone un adattamento comprensibile e verifica che cosa cambia.

Il bambino può chiedere aiuto, ripetere, cambiare attività o fermarsi, con modalità accessibili.

**Ipotesi di valore:** ridurre il lavoro di configurazione e migliorare la qualità dell'esperienza grazie a un motore comune. Il successo si legge su tre piani separati (§14):

1. piacere e accessibilità;
2. apprendimento specifico;
3. eventuale trasferimento fuori dal gioco.

La permanenza nell'app non basta come misura di successo (§14.4).

## Tre elementi separati

Fonte: survey §14.1.

| Elemento | Contenuto |
|---|---|
| **Template** | Regole e struttura del gioco: abbinare, preparare una scena, costruire una sequenza. |
| **Materiali** | Fotografie, parole, registrazioni e relazioni tra oggetti. Sono riutilizzabili in attività diverse. |
| **Profilo e osservazioni** | Preferenze confermate, configurazioni di accesso, prestazioni specifiche per compito e contesto. |

Una competenza osservata in un template non si considera disponibile in un altro.

## Ciclo della piattaforma

Fonte: survey §14.4.

**template → osservazioni → stime per compito e configurazione → scelta di un adattamento consentito → verifica dell'esito**

## Quattro funzionalità distintive, da validare

Fonte: survey §14.3.

| | Funzionalità | In breve |
|---|---|---|
| **A** | Adattare l'interazione mantenendo il compito | Se il bambino sceglie bene ma il gesto non riesce, il sistema propone un altro modo di rispondere, per esempio due tocchi al posto del trascinamento. La domanda resta identica. |
| **B** | Varianti che rendono interpretabile la prestazione | Le varianti sono un'altra posizione, un'altra foto dello stesso oggetto, un altro aiuto o un altro gioco. Il sistema le sceglie dove mancano informazioni. |
| **C** | Collegare il gioco a un'attività reale facoltativa | Dopo il gioco l'adulto annota com'è andata con gli oggetti veri. Questa osservazione è tenuta separata dai dati del gioco. |
| **D** | Preferenze riutilizzate e proposte spiegate | Le preferenze confermate passano da un gioco all'altro; le competenze no. Ogni proposta indica dati, incertezza e modifica proposta. |

**Che cosa non presentare come nuovo** (§14, §14.2). Esistono già sul mercato:

- contenuti personali;
- profili;
- modalità offline;
- accessi alternativi;
- percorsi adattivi;
- difficoltà adattiva;
- AI generativa per l'adulto.

L'ipotesi di differenziazione è la **combinazione** di quattro elementi:

1. la distinzione tra accesso e prestazione;
2. le varianti informative;
3. le preferenze condivise fra template;
4. le osservazioni reali tenute separate.

## Tre concept di gioco

Fonte: survey §10.

| Gioco | Obiettivo | Errore da evitare |
|---|---|---|
| «Trova e abbina» | Riconoscere identità o categoria. | Premiare una posizione fissa o un indizio che svela la risposta. |
| «Costruiamo insieme» | Creare una scena; facoltativamente a turni con un partner. | Usare il contatto oculare o l'obbedienza come condizione per proseguire. |
| «Una piccola sequenza» | Comprendere una sequenza concreta, come preparare lo zaino. | Imporre un ordine unico quando più sequenze sono valide. |

Il primo prototipo è «Prepariamo lo zaino» (§14.5), nel progetto esterno
`prepariamo-lo-zaino` (vedi le fonti nel [README del progetto](../README.md)).

## Fuori ambito

Fonte: survey §9.4 e §11.2; piano del prototipo.

- Chat aperta con il bambino.
- Riconoscimento delle emozioni da fotocamera.
- Inferenze diagnostiche.
- AI che applica cambi da sola.
- Registrazione continua di volto e ambiente.
- Un modello linguistico nel ciclo di gioco.
