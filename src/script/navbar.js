const buttons = document.querySelectorAll("#github, #facebook, #instagram, #twitter");
const selector = document.getElementById("selector");

// Funzione helper per resettare l'animazione di scomparsa del vecchio logo
function triggerBgAnimation(bgIcon) {
  if (!bgIcon) return;
  bgIcon.classList.remove("hidden");
  setTimeout(() => {
    bgIcon.classList.add("-translate-y-10", "opacity-0", "scale-90");
    setTimeout(() => {
      bgIcon.classList.add("hidden");
      bgIcon.classList.remove("-translate-y-10", "opacity-0", "scale-90");
    }, 500);
  }, 1);
}

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    // 1. Calcola la posizione esatta del pulsante rispetto alla barra genitore
    const parentLeft = btn.parentElement.getBoundingClientRect().left;
    const btnLeft = btn.getBoundingClientRect().left;
    const exactX = btnLeft - parentLeft;

    // 2. Muove fisicamente il selettore al pixel esatto tramite CSS Inline
    selector.style.transform = `translateX(${exactX}px)`;

    // 3. Gestisce l'accensione del colore (Bianco per il cliccato, Grigio per gli altri)
    buttons.forEach((b) => {
      if (b === btn) {
        b.classList.replace("fill-[#75747A]", "fill-white");
      } else {
        b.classList.replace("fill-white", "fill-[#75747A]");
      }
    });

    // 4. Avvia l'animazione dell'icona fantasma in background
    const bgIcon = btn.querySelector("box-icon[id$='-bg']");
    triggerBgAnimation(bgIcon);
  });
});