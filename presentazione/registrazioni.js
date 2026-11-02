// Pagine delle registrazioni: capitoli cliccabili sotto il video e didascalia del momento.
// I capitoli stanno nella pagina, in <script type="application/json" id="capitoli">: [[secondi, testo], ...].

(() => {
  const video = document.querySelector("video[data-rec]");
  if (!video) return;
  const capitoli = JSON.parse(document.getElementById("capitoli").textContent);
  const chips = document.getElementById("chips");
  const now = document.getElementById("now");
  const mmss = (t) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, "0")}`;

  chips.innerHTML = capitoli
    .map(([t, testo], i) => `<button type="button" data-t="${t}" title="${testo.replace(/"/g, "&quot;")}">${i + 1} · ${mmss(t)}</button>`)
    .join("");

  let cur = -1;
  function mostra() {
    let i = 0;
    while (i + 1 < capitoli.length && capitoli[i + 1][0] <= video.currentTime + 0.05) i++;
    if (i === cur) return;
    cur = i;
    chips.querySelectorAll("button").forEach((b, k) => b.setAttribute("aria-current", String(k === i)));
    now.innerHTML = `<b>${i + 1} · ${mmss(capitoli[i][0])}</b> ${capitoli[i][1]}`;
  }

  // Ogni elemento con data-t, nei capitoli o nel commento, porta il video a quel momento.
  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-t]");
    if (!el) return;
    e.preventDefault();
    video.currentTime = Number(el.dataset.t) + 0.3;
    video.play();
  });
  video.addEventListener("timeupdate", mostra);
  video.addEventListener("seeked", mostra);
  mostra();
})();
