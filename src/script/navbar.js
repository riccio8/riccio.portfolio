window.addEventListener("load", () => {
  const active = document.querySelector(".nav-btn.active");
  if (active) moveSelector(active);
});

const buttons = document.querySelectorAll(".nav-btn");
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

function moveSelector(btn) {
  const parentLeft = btn.parentElement.getBoundingClientRect().left;
  const btnLeft = btn.getBoundingClientRect().left;
  const exactX = btnLeft - parentLeft;

  selector.style.transform = `translateX(${exactX}px)`;
}

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    // 1 posizione selector
    moveSelector(btn);

    // 2. Colori
    buttons.forEach((b) => {
      b.classList.remove("fill-white", "fill-[#75747A]");
      if (b === btn) {
        b.classList.add("fill-white");
      } else {
        b.classList.add("fill-[#75747A]");
      }
    });

    // 3. Animazione bg
    const bgIcon = btn.querySelector("box-icon[id$='-bg']");
    triggerBgAnimation(bgIcon);

    // 4. SCROLL 
    const section = document.getElementById(btn.id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });

  document.getElementById("about").addEventListener("click", () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("home").addEventListener("click", () => {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("project").addEventListener("click", () => {
    document.getElementById("project").scrollIntoView({ behavior: "smooth" });
  });
  document.getElementById("contacts").addEventListener("click", () => {
    document.getElementById("contacts").scrollIntoView({ behavior: "smooth" });
  });
});

window.addEventListener("resize", () => {
  const active = document.querySelector(".nav-btn.active");
  if (active) {
    moveSelector(active);
  }
});