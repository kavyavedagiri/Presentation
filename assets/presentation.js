(function () {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const notesEl = document.getElementById("notes");
  const notesText = document.getElementById("notesText");
  const helpEl = document.getElementById("help");
  const progress = document.getElementById("progressBar");
  const indexEl = document.getElementById("slideIndex");
  const timerEl = document.getElementById("timer");
  let i = 0;
  let startedAt = null;
  let timerOn = false;

  function clamp(n) {
    return Math.max(0, Math.min(slides.length - 1, n));
  }

  function render() {
    slides.forEach((s, idx) => s.classList.toggle("active", idx === i));
    const note = slides[i].dataset.notes || "";
    notesText.textContent = note;
    progress.style.width = ((i + 1) / slides.length) * 100 + "%";
    indexEl.textContent = String(i + 1).padStart(2, "0") + " / " + String(slides.length).padStart(2, "0");
    history.replaceState(null, "", "#" + (i + 1));
    slides[i].scrollTop = 0;
  }

  function go(n) {
    i = clamp(n);
    render();
  }

  function parseHash() {
    const n = parseInt(location.hash.replace("#", ""), 10);
    if (!Number.isNaN(n)) i = clamp(n - 1);
  }

  document.getElementById("prevBtn").addEventListener("click", () => go(i - 1));
  document.getElementById("nextBtn").addEventListener("click", () => go(i + 1));
  document.getElementById("homeBtn").addEventListener("click", () => go(0));
  document.getElementById("notesBtn").addEventListener("click", () => {
    notesEl.classList.toggle("open");
  });
  document.getElementById("helpBtn").addEventListener("click", () => {
    helpEl.classList.toggle("open");
  });
  document.getElementById("fullBtn").addEventListener("click", () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(() => {});
    else document.exitFullscreen();
  });
  document.getElementById("timerBtn").addEventListener("click", () => {
    timerOn = !timerOn;
    startedAt = timerOn ? Date.now() : null;
    if (!timerOn) timerEl.textContent = "20:00";
  });

  window.addEventListener("keydown", (e) => {
    const k = e.key;
    if (k === "ArrowRight" || k === "PageDown" || k === " " || k === "Enter") {
      e.preventDefault();
      go(i + 1);
    } else if (k === "ArrowLeft" || k === "PageUp" || k === "Backspace") {
      e.preventDefault();
      go(i - 1);
    } else if (k === "Home") {
      e.preventDefault();
      go(0);
    } else if (k === "End") {
      e.preventDefault();
      go(slides.length - 1);
    } else if (k === "n" || k === "N") {
      notesEl.classList.toggle("open");
    } else if (k === "?" || k === "h" || k === "H") {
      helpEl.classList.toggle("open");
    } else if (k === "f" || k === "F") {
      document.getElementById("fullBtn").click();
    } else if (k === "t" || k === "T") {
      document.getElementById("timerBtn").click();
    } else if (k === "Escape") {
      notesEl.classList.remove("open");
      helpEl.classList.remove("open");
    }
  });

  let touchX = null;
  window.addEventListener("touchstart", (e) => {
    touchX = e.changedTouches[0].screenX;
  });
  window.addEventListener("touchend", (e) => {
    if (touchX == null) return;
    const dx = e.changedTouches[0].screenX - touchX;
    if (Math.abs(dx) > 50) go(dx < 0 ? i + 1 : i - 1);
    touchX = null;
  });

  window.addEventListener("hashchange", () => {
    parseHash();
    render();
  });

  setInterval(() => {
    if (!timerOn || !startedAt) return;
    const remaining = 20 * 60 * 1000 - (Date.now() - startedAt);
    const s = Math.max(0, Math.floor(remaining / 1000));
    const mm = String(Math.floor(s / 60)).padStart(2, "0");
    const ss = String(s % 60).padStart(2, "0");
    timerEl.textContent = mm + ":" + ss;
    timerEl.classList.toggle("warn", s < 180);
  }, 250);

  parseHash();
  render();
})();
