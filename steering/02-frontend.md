# Steering frontend — esperienza avanzata e accessibile

Vincoli: AR-1/6/10, NF-1…6, GI, CF, BA, TP. Framework e versioni restano D-13.
Baseline candidata: React e TypeScript strict, da confrontare con il prototipo,
competenze del team e dispositivi D-14. Non aggiungere librerie senza un bisogno.

## Due ambienti, un sistema coerente

| Area adulti | Ambiente bambino |
|---|---|
| tenant e contesto bambino sempre riconoscibili | attività essenziale e prevedibile |
| ricerca, filtri persistenti, elenchi paginati | una consegna chiara alla volta |
| editor guidato e anteprima fedele | pausa, aiuto, uscita sempre visibili |
| confronto versioni e modifiche proposte | controlli sensoriali indipendenti |
| report con evidenze, incertezza e provenienza | accessi alternativi equivalenti |

«Avanzata» significa produttività, chiarezza e controllo: non prescrivere
animazioni decorative, densità elevata o stimoli aggiuntivi nell'ambiente bambino.

## Flussi da progettare

1. Accesso/registrazione secondo D-12, onboarding, inviti e amministrazione utenti
   secondo D-3. Definire stati invito scaduto, utente sospeso e accesso revocato.
2. Selezione bambino → catalogo template → obiettivo → materiali → impostazioni
   di accesso → validazione → anteprima → pubblicazione versione → avvio.
3. Sessione → riepilogo → evidenze → proposta spiegata → accettazione/rifiuto →
   nuova versione; blocco dimensioni e ripristino disponibili all'adulto autorizzato.
4. Report filtrabili per compito, versione, aiuti e contesto; osservazioni reali in
   sezione distinta, con denominatori, prove escluse e dati mancanti visibili.

Per ogni schermata descrivere caricamento, vuoto, successo, errore, permesso negato,
rete assente, dati obsoleti e conflitto concorrente. Rendere recuperabile il lavoro
dell'adulto; distinguere «salvato localmente», «sincronizzato» e «pubblicato» se
questi stati sono supportati. Non mostrare «salvato» prima della persistenza prevista.

## Design system e interazione

- Definire token per colori, tipografia, spaziatura, focus, dimensioni dei controlli
  e movimento; componenti riutilizzabili per form, dialoghi, notifiche e tabelle.
- Proposta di target: WCAG 2.2 AA, da esplicitare nella specifica NF-1. Verificare
  tastiera, ordine del focus, screen reader, contrasto, zoom e reflow. Nessun dato
  o esito comunicato solo da colore, suono o movimento.
- Touch target generosi e spaziati; proposta 44 CSS px per i comandi principali,
  da validare sui dispositivi reali. Non confonderla con la soglia normativa di
  2.5.8. Trascinamento sempre sostituibile da azione equivalente.
- Supportare riduzione del movimento; controlli separati di voce, musica, effetti.
  Non rendere la consegna impossibile quando un canale è disattivato.
- Dare nomi accessibili ai controlli iconici; messaggi di errore associati ai campi,
  sommario errori e istruzioni operative. Grafici accompagnati da tabella leggibile.
- Catalogo di componenti e stati con esempi sintetici; verifica visiva responsiva
  e prove con dispositivi/accessi reali, oltre agli scanner automatici.

## Confini tecnici

- Moduli per funzionalità: identità, bambini, catalogo, editor, runtime gioco,
  sessioni, proposte, report. UI, stato applicativo e regole pure distinti.
- Client API derivato dal contratto versionato. Nessuna chiamata sparsa nei
  componenti e nessun accesso diretto al DB. Validazione FE per feedback immediato;
  il server verifica comunque input e permessi.
- Distinguere stato server, bozza editor e stato della sessione. Modellare le
  transizioni critiche esplicitamente; evitare combinazioni di booleani ambigue.
- Nessuna dipendenza da rete o AI per il feedback immediato del gesto, se la
  distribuzione del motore proposta in D-9 viene adottata. Allineare FE e API con
  casi di riferimento condivisi per il significato degli eventi.
- Autorizzazione UI utile all'esperienza, mai sufficiente per la sicurezza.
  Svuotare cache e stato al cambio di tenant/account; chiavi di cache con contesto.
- Lazy loading per aree adulte pesanti, immagini dimensionate e audio precaricato
  nei limiti del dispositivo. Report e virtualizzazione non devono compromettere
  accessibilità o focus. Misurare prima di introdurre ottimizzazioni.

## Rete, recupero e concorrenza

Progettare con D-1 la coda durevole degli eventi, gli identificativi stabili, il
replay dopo refresh, la gestione della quota e dei dati rimasti su dispositivi
condivisi. Prevedere recupero dopo crash e cancellazione controllata al logout,
senza caricare eventi del precedente account nel nuovo contesto. Non promettere
assenza di perdita su dispositivi distrutti o storage cancellato: definire il
perimetro misurabile di NF-6 e rendere visibile ciò che non è sincronizzato.

Per modifiche concorrenti presentare confronto e recupero della bozza; non
applicare last-write-wins su configurazioni e decisioni. Non ottimizzare in modo
ottimistico accettazioni di proposte o permessi senza conferma server.

Fonte tecnica: [WCAG 2.2](https://www.w3.org/TR/WCAG22/).
