const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("aos-animate");
      // uncomment for one-time animation:
      // observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll("[data-aos]").forEach(el => observer.observe(el));
