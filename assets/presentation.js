(function () {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const notesEl = document.getElementById("notes");
  const notesText = document.getElementById("notesText");
  const notesBtn = document.getElementById("notesBtn");
  const progress = document.getElementById("progressBar");
  const indexEl = document.getElementById("slideIndex");
  let i = 0;

  function clamp(n) {
    return Math.max(0, Math.min(slides.length - 1, n));
  }

  function render() {
    slides.forEach((slide, idx) => slide.classList.toggle("active", idx === i));
    notesText.textContent = slides[i].dataset.notes || "";
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

  function toggleNotes() {
    notesEl.classList.toggle("open");
  }

  document.getElementById("prevBtn").addEventListener("click", () => go(i - 1));
  document.getElementById("nextBtn").addEventListener("click", () => go(i + 1));
  document.getElementById("homeBtn").addEventListener("click", () => go(0));
  notesBtn.addEventListener("click", toggleNotes);
  document.getElementById("fullBtn").addEventListener("click", () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(() => {});
    else document.exitFullscreen();
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
    } else if (k.toLowerCase() === "n") {
      toggleNotes();
    } else if (k.toLowerCase() === "b") {
      notesBtn.hidden = !notesBtn.hidden;
    } else if (k.toLowerCase() === "f") {
      document.getElementById("fullBtn").click();
    } else if (k === "Escape") {
      notesEl.classList.remove("open");
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

  parseHash();
  render();
})();