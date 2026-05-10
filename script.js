const year = document.getElementById("year");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const fadeElements = document.querySelectorAll(".fade-in");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

fadeElements.forEach((element) => {
  observer.observe(element);
});

/* Eventos personalizados para Google Analytics */
document.querySelectorAll("[data-event]").forEach((element) => {
  element.addEventListener("click", () => {
    const eventName = element.getAttribute("data-event");
    const eventLabel = element.textContent.trim();
    const eventUrl = element.getAttribute("href") || "";

    if (typeof gtag === "function") {
      gtag("event", eventName, {
        event_category: "interaccion_portafolio",
        event_label: eventLabel,
        link_url: eventUrl,
        page_location: window.location.href,
      });
    }
  });
});