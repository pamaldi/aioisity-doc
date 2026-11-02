# AIOISITY — guida del progetto documentale

Questo progetto definisce requisiti e decisioni comuni ad `aioisity-fe` e
`aioisity-api`. Scrivi in italiano, con requisiti verificabili e fonti esplicite.
Non implementare applicazioni in questo repository salvo richiesta esplicita.

Il metodo è **Spec-Driven Development (SDD)**: roadmap → requisiti → design →
attività → implementazione → verifica. La roadmap centrale è `ROADMAP.md` e
censisce tutte le spec, anche quelle pianificate, locali a FE/API o superate.

@steering/00-governance.md
@steering/01-dominio.md

## Prima di lavorare

1. Leggi `ROADMAP.md`, `specs/README.md`, `requisiti/README.md` e la spec pertinente.
2. Controlla `requisiti/09-decisioni-aperte.md`: una proposta non è una decisione.
3. Leggi gli steering pertinenti prima di produrre requisiti o design:
   - UX, schermate, componenti, gioco: `steering/02-frontend.md`;
   - endpoint, DTO, eventi, integrazione FE/API: `steering/03-contratti-api.md`;
   - servizi, persistenza, sicurezza, deployment: `steering/04-spring-boot.md`;
   - prestazioni, affidabilità e verifica: `steering/05-qualita.md`.
4. Prima di creare una spec assegna un ID nella roadmap. Usa
   `templates/feature/requirements.md`, `design.md` e `tasks.md`, copiandoli in
   `specs/<id-funzione>/`. Aggiorna la roadmap quando cambiano stato o dipendenze.

## Risultato atteso

Ogni proposta collega requisito, decisione, comportamento UI, contratto API e
verifica. Evidenzia le assunzioni e i soli punti che bloccano il lavoro richiesto.
Mantieni gli ID esistenti; non dichiarare implementata nella piattaforma una
funzionalità indicata come «fatto» soltanto nel prototipo.

Per distribuire queste istruzioni agli altri progetti segui `steering/README.md`.
Il nome del file di ingresso è `CLAUDE.md`, anche su filesystem case-sensitive.
