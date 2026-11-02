# Governance delle specifiche

## Fonti e stato

- Parti dai requisiti globali e dalle istruzioni esplicite del committente.
  In caso di conflitto descrivi l'impatto e aggiorna la specifica, senza risolverlo
  silenziosamente nel codice o nello steering.
- Gli ADR accettati descrivono le decisioni; gli steering guidano il metodo.
  Esempi, prototipo e presentazione non costituiscono una nuova fonte vincolante.
- Usa gli stati `proposto`, `accettato`, `superato`; indica autore, data e fonte.
  Le nuove baseline tecniche in questi steering sono proposte finché non accettate.
- Non inventare contenuti di survey o specifiche esterne non consultate. I rinvii
  nei requisiti esistenti restano rinvii, non una verifica indipendente della fonte.
- Prima di fissare versioni, verifica compatibilità e supporto nelle fonti ufficiali;
  registra versioni esatte nei manifest del progetto e la motivazione nell'ADR.

## Spec-Driven Development e roadmap

Metodo richiesto dal committente: **Spec-Driven Development**. `ROADMAP.md` in
`aioisity-doc` è il registro centrale di tutte le spec e del loro avanzamento.
Leggila prima di iniziare; collega ogni lavoro a una spec esistente o censiscine
una nuova prima di crearla. Le regole di identificazione, ownership e avanzamento
sono in `specs/README.md` del progetto documentale (o nello snapshot condiviso).

I requisiti globali definiscono il prodotto; le spec descrivono incrementi
realizzabili; la roadmap ne ordina dipendenze, stato e rilascio. Gli ADR motivano
le scelte. Non usare task o codice come sostituti della specifica.

## Ciclo di una funzione

1. `requirements.md`: attori, scopo, requisiti con ID, casi limite, criteri
   Given/When/Then, permessi e vincoli non funzionali.
2. `design.md`: flussi UI, confini, modelli, contratto, stati, sicurezza,
   concorrenza, gestione guasti, alternative e decisioni.
3. `tasks.md`: attività FE/API/doc, dipendenze e prova che ne dimostra il completamento.
4. Modifica prima la specifica quando cambia il comportamento atteso.
5. Consegna una matrice `requisito → UI/API → test → evidenza → stato`.
6. Aggiorna la riga della roadmap con stato reale, impedimenti, collegamenti ed
   evidenze. Non marcare verificata una spec soltanto perché i task di codice sono finiti.

Prima dell'implementazione la spec deve essere `pronta`: criteri verificabili,
design coerente, task tracciati e nessuna decisione bloccante irrisolta per quello
scope. Questo è un controllo di completezza, non una richiesta automatica di
approvazione ad ogni fase. Le scelte di prodotto ancora aperte restano esplicite.
Un bug si collega alla spec e al criterio violato; se cambia il comportamento
atteso, aggiorna prima requirements/design e poi codice e test.

Usa i template in `templates/feature/`. Un test pianificato non è un test passato.
Riporta comando, ambiente, risultato e limiti delle verifiche effettivamente svolte.
Non introdurre framework di test o build solo per una modifica documentale.

## Decisioni e contratti condivisi

Per una scelta strutturale crea `decisions/ADR-NNN-titolo.md` con stato, contesto,
requisiti coinvolti, opzioni, decisione proposta, conseguenze, verifica e condizioni
di revisione. Rimanda alla decisione D-n pertinente. Un ADR proposto non chiude D-n.
Procedi sulle parti indipendenti; chiedi chiarimenti soltanto quando la scelta
cambia materialmente un comportamento o impedisce una specifica coerente.

Proposta di ownership: contratto OpenAPI canonico in `aioisity-api/contracts/`,
pubblicato come artefatto versionato consumato da FE e CI. `aioisity-doc` conserva
decisioni e link alla release. Finché API non esiste, eventuali contratti in doc
sono bozze esplicite. Non mantenere due contratti canonici modificabili.

## Lacune iniziali da trattare

- La registrazione richiesta dal committente non è ancora dettagliata: specificare
  invito o auto-registrazione, primo amministratore, verifica identità, recupero
  accesso, sospensione/revoca e appartenenza al tenant. Collegare D-2, D-3 e D-12.
  Non permettere autoassegnazione di ruoli privilegiati.
- Distinguere catalogo dei template precaricati e configurazioni del tenant:
  chiarire chi pubblica i template e come si distribuiscono nuove versioni.
- Rendere misurabili «interfaccia avanzata» e «API scalabili» con scenari e budget,
  senza trasformare i numeri di esempio in promesse di servizio.
- D-1 e NF-6 richiedono una decisione esplicita su persistenza locale e recupero:
  il solo retry HTTP non protegge dalla chiusura del browser.
