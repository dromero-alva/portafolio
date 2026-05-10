const year = document.getElementById("year");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const fadeElements = document.querySelectorAll(".fade-in");

year.textContent = new Date().getFullYear();

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

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