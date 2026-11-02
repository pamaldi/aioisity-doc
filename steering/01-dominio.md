# Invarianti AIOISITY

Fonti: requisiti MT, BA, GI, CF, MA, AT, OS, TP, AI e PC.

## Modello da preservare

- Separa template versionato, materiali versionati, configurazione personalizzata,
  sessione, tentativo, preferenza confermata, stima, proposta e osservazione reale.
- Il bambino non è automaticamente un account autenticato (D-5). I tre ruoli
  richiesti sono amministratore, supervisore e terapista; i permessi restano D-3.
- Tutti i dati di dominio del tenant appartengono a un solo tenant. Per i template
  precaricati proponi un catalogo di sistema immutabile separato dai dati del tenant;
  esplicita questo confine nell'ADR, senza introdurre letture cross-tenant implicite.
- L'anagrafica resta limitata a nome ed età (BA-2); D-6 e D-7 restano aperte.
  Preferenze, osservazioni, contesto e stato temporaneo sono oggetti distinti.

## Sessione e adattamento

- All'avvio fissa bambino, template, materiali e configurazione con versioni.
  Nessuna modifica concorrente deve alterare la sessione già iniziata (BA-13/14).
- Registra scelta, gesto, aiuti e provenienza separatamente. Un gesto fallito non
  dimostra una scelta errata; una pausa non spiega uno stato emotivo.
- Conserva l'informazione sulle prove escluse dall'evidenza e il motivo (AT-3).
- Le proposte si producono fuori dal gioco, dopo evidenze sufficienti, cambiano
  una dimensione e richiedono conferma adulta (AT-4…8). AT-15 non autorizza a
  ignorare AT-7. Applica un'eventuale nuova configurazione alla sessione successiva.
- Non trasferire stime di competenza fra template. Le preferenze confermate si
  riusano soltanto quando supportate. Non sovrascriverle con inferenze.
- Versiona la politica e registra evidenze, incertezza, autore della decisione e
  possibilità di ripristino. Conserva l'opzione «nessun cambiamento».
- Mantieni separati osservazioni del gioco e mondo reale; «non osservato» non è
  insuccesso. Non produrre etichette diagnostiche o un punteggio globale del bambino.
- Il diario disattivato (OS-6) deve interrompere la raccolta comportamentale anche
  in code, analytics e log. Distinguere i soli dati tecnici necessari e documentati.

## Vincoli dell'esperienza

Pausa, aiuto e uscita sempre disponibili; nessuna penalità per l'interruzione,
nessun timeout di risposta. Accessi necessari e CAA non si sacrificano alla misura.
L'area adulti è protetta dall'accesso accidentale; una barriera UI non sostituisce
l'autorizzazione server. AI generativa disattivata per default, solo per bozze
adulte approvate e mai necessaria al ciclo di gioco.

Per dati, conservazione e pilota applica DP-1…8 e le decisioni D-1/D-8:
non dedurre che il dataset sia anonimo o privo di informazioni delicate solo
perché l'anagrafica non contiene la diagnosi. Queste istruzioni non chiudono
la valutazione privacy già richiesta dai requisiti.
