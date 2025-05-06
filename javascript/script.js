
// Scroll suave para âncoras internas
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Acordeão com apenas uma aba aberta por vez e acessibilidade ARIA
const accordions = document.querySelectorAll(".accordion");

accordions.forEach(acc => {
  acc.addEventListener("click", function () {
    const panel = this.nextElementSibling;
    const isActive = this.classList.contains("active");

    // Fecha todos os outros
    accordions.forEach(other => {
      if (other !== this) {
        other.classList.remove("active");
        other.setAttribute("aria-expanded", "false");
        other.nextElementSibling.style.maxHeight = null;
      }
    });

    // Alterna estado do clicado
    if (isActive) {
      this.classList.remove("active");
      this.setAttribute("aria-expanded", "false");
      panel.style.maxHeight = null;
    } else {
      this.classList.add("active");
      this.setAttribute("aria-expanded", "true");
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});
