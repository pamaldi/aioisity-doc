# aioisity-doc

Documentazione globale della piattaforma **AIOISITY**: *Adaptive Interactive Open-play Inclusive Sensory Interface*. Contiene i requisiti che valgono per tutti i progetti e la presentazione.

| Progetto | Contenuto | Stato |
|---|---|---|
| **aioisity-doc** (questo) | requisiti globali, decisioni aperte, presentazione | bozza 1, 1 novembre 2026 |
| aioisity-fe | front end | da creare |
| aioisity-api | API in Spring Boot | da creare |

Per aprirlo in IntelliJ IDEA: *File → Open* sulla cartella `aioisity-doc`.

## Contenuto

Per progettare nuove funzioni parti da [`CLAUDE.md`](CLAUDE.md).
Il metodo è **Spec-Driven Development**: la [`ROADMAP.md`](ROADMAP.md) censisce
tutte le spec e le loro dipendenze; [`specs/README.md`](specs/README.md) descrive
stati, responsabilità e rapporto con i repository FE/API.
La [guida agli steering](steering/README.md) descrive le regole condivise,
gli indirizzi FE/API e come distribuirli nei futuri repository separati.
I [template di funzione](templates/feature/requirements.md) guidano requisiti,
design e attività; le scelte nuove restano proposte finché non accettate.

| Percorso | Che cosa contiene |
|---|---|
| [`requisiti/`](requisiti/README.md) | requisiti globali, divisi per area, con fonte e stato nel prototipo |
| [`requisiti/09-decisioni-aperte.md`](requisiti/09-decisioni-aperte.md) | punti da decidere, compresi i conflitti fra i requisiti nuovi e quelli del prototipo |
| [`presentazione/`](presentazione/index.html) | presentazione HTML (italiano e inglese) con le registrazioni dei casi; aprire `presentazione/index.html` nel browser |

## Da dove vengono i requisiti

1. **Survey:** documento `survey-giochi-tablet-autismo.md` del progetto esterno `ai-resources`, §9–14. La survey chiama la proposta «Ponte», ma è solo un nome di lavoro (§14.1).
2. **Prototipo «Prepariamo lo zaino»:** progetto esterno `prepariamo-lo-zaino`. Le sue specifiche `specs/01…08` sono scritte per un singolo gioco. Qui sono generalizzate a tutta la piattaforma.
3. **Requisiti nuovi del committente (1 novembre 2026):**
   - più tenant;
   - utenti con ruoli;
   - dati del bambino limitati a nome ed età;
   - front end e API;
   - API in Spring Boot;
   - PostgreSQL;
   - tutto su Docker.

## Avvertenze

- Survey e prototipo sono fonti esterne non incluse in questo repository. I relativi URL GitLab devono ancora essere censiti; i loro nomi non presuppongono una posizione sul computer di chi clona il progetto.

- La presentazione è copiata dal prototipo così com'è. La copertina e la pagina «I punti forti» sono **provvisorie**: vanno rifatte in base ai requisiti di questa cartella. La presentazione descrive ancora il prototipo, che salva i dati sul dispositivo; i requisiti nuovi prevedono un server (vedi [decisioni aperte](requisiti/09-decisioni-aperte.md)).
- Nessun requisito di questa cartella vale come soddisfatto finché un test o una registrazione non lo verifica.
