// ===============================
// Ataraxia – Gentle Interactions
// ===============================

// Fade-in on scroll
const fadeElements = document.querySelectorAll(
  ".menu-card, .story, .gallery img, .contact-box",
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

fadeElements.forEach((el) => observer.observe(el));

// Active nav link on scroll
const sections = document.querySelectorAll("section, header");
const navLinksScroll = document.querySelectorAll("nav a"); // <-- renamed

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinksScroll.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ===============================
// Mobile menu toggle
// ===============================
(() => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinksMobile = document.getElementById("navLinks"); // <-- renamed

  if (!menuToggle || !navLinksMobile) return;

  menuToggle.addEventListener("click", () => {
    navLinksMobile.classList.toggle("show");
  });

  // Auto close menu after click
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinksMobile.classList.remove("show");
    });
  });
})();
