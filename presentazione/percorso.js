// Ordine delle pagine del percorso e navigazione comune. Ogni pagina ha uno o più
// <nav data-percorso>: qui si riempiono con pagina precedente, posizione e pagina successiva.
// La versione inglese sta in en/, con gli stessi nomi di file: la lingua si legge da <html lang>.

const PERCORSO = [
  { parte: "Origini", href: "index.html", titolo: "Prepariamo lo zaino", title: "Pack the backpack" },
  { parte: "Origini", href: "punti-forti.html", titolo: "I punti forti", title: "Strong points" },
  { parte: "Origini", href: "mappa.html", titolo: "Il percorso", title: "The route" },
  { parte: "Origini", href: "00-obiettivo.html", titolo: "L'obiettivo della piattaforma", title: "The goal of the platform" },
  { parte: "Origini", href: "05b-funzionalita.html", titolo: "Le quattro funzionalità", title: "The four features" },
  { parte: "Origini", href: "04-a-gesto.html", titolo: "A · Stessa domanda, un altro gesto", title: "A · Same question, another gesture" },
  { parte: "Origini", href: "05-b-dati.html", titolo: "B · Che cosa sa davvero", title: "B · What the child really knows" },
  { parte: "Origini", href: "06-c-reale.html", titolo: "C · Dal tablet alla vita reale", title: "C · From the tablet to real life" },
  { parte: "Origini", href: "06-d-proposte.html", titolo: "D · Proposte spiegate", title: "D · Explained proposals" },
  { parte: "Presentazione", href: "01-problema.html", titolo: "Il problema", title: "The problem" },
  { parte: "Presentazione", href: "02-idea.html", titolo: "L'idea", title: "The idea" },
  { parte: "Presentazione", href: "03-gioco.html", titolo: "Il gioco", title: "The game" },
  { parte: "Presentazione", href: "03b-regole.html", titolo: "Cinque regole", title: "Five rules" },
  { parte: "Presentazione", href: "07-domande.html", titolo: "Cosa vogliamo provare", title: "What we want to test" },
  { parte: "Presentazione", href: "08-verifica.html", titolo: "Come lo verificheremo", title: "How we will test it" },
  { parte: "Simulazione", href: "10-peculiarita.html", titolo: "Sei peculiarità da provare", title: "Six distinctive features to try" },
  { parte: "Simulazione", href: "simulazione.html?tratto=scelta-e-gesto", titolo: "1 · Scelta e gesto a parte", title: "1 · Choice and gesture kept apart" },
  { parte: "Simulazione", href: "simulazione.html?tratto=proposta", titolo: "2 · Proposta spiegata, decide l'adulto", title: "2 · Explained proposal, the adult decides" },
  { parte: "Simulazione", href: "simulazione.html?tratto=domanda", titolo: "3 · La domanda non cambia", title: "3 · The question does not change" },
  { parte: "Simulazione", href: "11-posizioni-e-foto.html", titolo: "4 · Posizioni bilanciate e più foto", title: "4 · Balanced positions and several photos" },
  { parte: "Simulazione", href: "12-zaino-vero.html", titolo: "5 · Lo zaino vero, a parte", title: "5 · The real backpack, kept apart" },
  { parte: "Simulazione", href: "13-vincoli.html", titolo: "6 · Configurazioni incoerenti bloccate", title: "6 · Inconsistent settings blocked" },
  { parte: "Registrazioni", href: "registrazioni.html", titolo: "Il gioco vero, registrato", title: "The real game, recorded" },
  { parte: "Registrazioni", href: "registrazione-a.html", titolo: "A · Rilascia vicino allo zaino", title: "A · Releases near the backpack" },
  { parte: "Registrazioni", href: "registrazione-b.html", titolo: "B · Non riesce a trascinare", title: "B · Cannot drag" },
  { parte: "Registrazioni", href: "registrazione-c.html", titolo: "C · Gesto sicuro, scelta incerta", title: "C · Confident gesture, uncertain choice" },
  { parte: "Registrazioni", href: "registrazione-d.html", titolo: "D · Tutto riesce", title: "D · Everything works" },
  { parte: "Registrazioni", href: "registrazione-e.html", titolo: "E · Aiuto, pausa e uscita", title: "E · Help, pause and exit" },
  { parte: "Registrazioni", href: "registrazione-f.html", titolo: "F · L'adulto rifiuta", title: "F · The adult refuses" },
  { parte: "Registrazioni", href: "registrazione-g.html", titolo: "G · Gli oggetti di casa", title: "G · Household objects" },
  { parte: "Registrazioni", href: "registrazione-h.html", titolo: "H · Lo zaino vero", title: "H · The real backpack" },
  { parte: "Registrazioni", href: "registrazione-i.html", titolo: "I · Più foto dello stesso oggetto", title: "I · Several photos of one object" },
  { parte: "Chiusura", href: "14-riepilogo.html", titolo: "Riepilogo", title: "Summary" },
  { parte: "Chiusura", href: "14b-analista.html", titolo: "Che cosa chiediamo all'analista", title: "What we ask the analyst" },
  { parte: "Chiusura", href: "15-bibliografia.html", titolo: "Bibliografia (1/2)", title: "References (1/2)" },
  { parte: "Chiusura", href: "15b-bibliografia.html", titolo: "Bibliografia (2/2)", title: "References (2/2)" },
];

const TESTI = {
  it: {
    indietro: "‹ indietro", avanti: "avanti ›", di: "di", altra: "English", altraLang: "en",
    parti: { Origini: "Da dove viene", Presentazione: "Il gioco", Simulazione: "Simulazione", Registrazioni: "Registrazioni", Chiusura: "Chiusura" },
    mappa: { Origini: "1 · Da dove viene", Presentazione: "2 · Il gioco", Simulazione: "3 · Simulazione", Registrazioni: "4 · Registrazioni", Chiusura: "5 · Chiusura" },
  },
  en: {
    indietro: "‹ back", avanti: "next ›", di: "of", altra: "Italiano", altraLang: "it",
    parti: { Origini: "Where it comes from", Presentazione: "The game", Simulazione: "Simulation", Registrazioni: "Recordings", Chiusura: "Closing" },
    mappa: { Origini: "1 · Where it comes from", Presentazione: "2 · The game", Simulazione: "3 · Simulation", Registrazioni: "4 · Recordings", Chiusura: "5 · Closing" },
  },
};

(() => {
  const lang = document.documentElement.lang === "en" ? "en" : "it";
  const T = TESTI[lang];
  const titolo = (x) => (lang === "en" ? x.title : x.titolo);
  const here = location.pathname.split("/").pop() || "index.html";
  const query = new URLSearchParams(location.search).get("tratto");
  const cur = PERCORSO.findIndex((p) => {
    const [file, q] = p.href.split("?");
    return file === here && (q ? q === `tratto=${query}` : !query);
  });
  if (cur < 0) return;
  const prev = PERCORSO[cur - 1];
  const next = PERCORSO[cur + 1];
  const p = PERCORSO[cur];
  // Stessa pagina nell'altra lingua: l'inglese sta in en/, l'italiano una cartella sopra.
  const altra = (lang === "en" ? "../" : "en/") + p.href;
  const link = (x, rel, label, cls = "") =>
    x ? `<a rel="${rel}" class="${cls}" href="${x.href}"><small>${label}</small>${titolo(x)}</a>` : `<span></span>`;
  const html =
    link(prev, "prev", T.indietro) +
    `<span class="where"><a href="mappa.html">${T.parti[p.parte]}</a> · ${cur + 1} ${T.di} ${PERCORSO.length}` +
    ` · <a href="${altra}" hreflang="${T.altraLang}" lang="${T.altraLang}">${T.altra}</a></span>` +
    link(next, "next", T.avanti, "primary");
  document.querySelectorAll("[data-percorso]").forEach((n) => (n.innerHTML = html));

  // Mappa del percorso, dove c'è un elemento data-mappa: una colonna per parte.
  document.querySelectorAll("[data-mappa]").forEach((box) => {
    const voci = PERCORSO.filter((x) => x.href !== "index.html" && x.href !== "mappa.html");
    const parti = [...new Set(voci.map((x) => x.parte))];
    box.innerHTML = parti
      .map((parte) => {
        return `<section><h2>${T.mappa[parte]}</h2><ol>${voci.filter((x) => x.parte === parte).map((x) => `<li><a href="${x.href}">${titolo(x)}</a></li>`).join("")}</ol></section>`;
      })
      .join("");
  });

  // Frecce sinistra e destra, salvo nella simulazione animata, che le usa per i suoi passi.
  if (here === "simulazione.html") return;
  document.addEventListener("keydown", (e) => {
    if (e.altKey || e.ctrlKey || e.metaKey || e.target.closest?.("input, textarea, select, button, video")) return;
    const to = e.key === "ArrowRight" ? next : e.key === "ArrowLeft" ? prev : null;
    if (to) location.href = to.href;
  });
})();
