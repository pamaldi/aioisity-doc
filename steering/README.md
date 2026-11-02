# Guida agli steering e al riuso

Baseline documentale: 2 novembre 2026. Questi file aggiungono metodo e proposte
di progettazione; non chiudono le decisioni D-1…D-16 e non modificano i requisiti.

Il metodo di lavoro è **Spec-Driven Development**. La [roadmap centrale](../ROADMAP.md)
contiene il registro di tutte le spec; [specs/README.md](../specs/README.md) ne
definisce ciclo di vita e distribuzione fra doc, FE e API.

## Struttura e responsabilità

| File | Scopo | Quando leggerlo |
|---|---|---|
| [00-governance.md](00-governance.md) | fonti, decisioni, tracciabilità, processo | sempre |
| [01-dominio.md](01-dominio.md) | invarianti specifiche AIOISITY | sempre |
| [02-frontend.md](02-frontend.md) | UX evoluta, editor, gioco, stato e accessibilità | progettazione FE |
| [03-contratti-api.md](03-contratti-api.md) | contratto condiviso, errori, concorrenza, eventi | FE e API |
| [04-spring-boot.md](04-spring-boot.md) | moduli, sicurezza, PostgreSQL, scalabilità | progettazione API |
| [05-qualita.md](05-qualita.md) | budget misurabili, prove, rilascio | design e verifica |

Il `CLAUDE.md` rimane breve. Importa con `@` soltanto le istruzioni comuni;
indica esplicitamente gli altri documenti da leggere secondo il lavoro.
`steering/` è una convenzione di questo progetto, non una cartella caricata
automaticamente da Claude Code. Gli import e le regole `.claude/rules/` sono
meccanismi documentati da [Claude Code](https://code.claude.com/docs/en/memory).
Non usare un generico frontmatter `inclusion: always` aspettandoti che Claude lo interpreti.

## Uso nei tre progetti

```text
Aoisity/
  aioisity-doc/
    CLAUDE.md
    requisiti/
    steering/
    templates/
  aioisity-fe/                 # futuro repository
    CLAUDE.md
    project-context/           # snapshot versionato della documentazione comune
      BASELINE.md
      requisiti/
      steering/
    specs/
  aioisity-api/                # futuro repository
    CLAUDE.md
    project-context/
      BASELINE.md
      requisiti/
      steering/
    specs/
```

1. Mantieni i documenti canonici in `aioisity-doc`.
2. All'avvio di FE/API copia `requisiti/` e `steering/` in `project-context/`.
   Copia anche `ROADMAP.md` e `specs/` (indice e spec disponibili), preservando i
   percorsi relativi. La copia della roadmap è consultiva: il registro canonico
   resta in doc. Includi `templates/feature/` nello snapshot per i link dell'indice.
   Copia i template di funzione nella cartella `templates/feature/` del repository.
3. Copia il contenuto del rispettivo [CLAUDE FE](../templates/frontend/CLAUDE.md)
   o [CLAUDE API](../templates/backend/CLAUDE.md) nel `CLAUDE.md` alla radice.
   I percorsi degli import dei template sono validi **dopo** questa installazione.
4. In `project-context/BASELINE.md` registra origine, data, revisione Git o release
   e responsabile. Finché non esiste Git, usa un identificatore di snapshot e un
   manifesto SHA-256 dei file copiati; non inventare un commit.
5. Aggiorna gli snapshot con una modifica revisionabile: elenco differenze,
   impatto sulle specifiche e versione del contratto. Non editarli autonomamente
   in FE/API: proponi prima il cambiamento nel progetto documentale.

Lo snapshot locale permette di aprire ciascun repository da solo e in CI.
In un workspace con repository affiancati puoi usare import relativi verso
`../aioisity-doc/`, ma devi gestire accesso ai file esterni e allineamento delle
revisioni; gli snapshot evitano questa dipendenza operativa.

Per altri prodotti conserva governance, metodo dei contratti e criteri di qualità;
sostituisci dominio, ruoli, sorgenti, vincoli, stack e budget. Rimuovi esplicitamente
gli ID AIOISITY non applicabili: non trasferire per copia assunzioni terapeutiche.

## Come usarli nella progettazione

Esempio di richiesta:

> Progetta la configurazione di un gioco da template. Leggi CLAUDE.md e gli steering
> pertinenti. Produci requirements, design e tasks con riferimenti CF, MA, TP e BA;
> includi flussi adulto, stati di errore, contratto API e test. Se una decisione D-n
> è aperta, presenta alternative e una raccomandazione senza dichiararla approvata.

Per aggiungere una regola chiediti se è un requisito di prodotto, una decisione
architetturale o un'istruzione di lavoro. Mettila rispettivamente in `requisiti/`,
in un ADR, oppure negli steering. Le istruzioni non sostituiscono i controlli CI.
