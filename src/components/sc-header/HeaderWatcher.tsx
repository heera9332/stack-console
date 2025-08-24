"use client";
import { useEffect } from "react";

export default function HeaderWatcher() {
  useEffect(() => {
    const header = document.getElementById("page-header");
    const sections = document.querySelectorAll<HTMLElement>(".section");
    const logoDark = document.querySelector<HTMLElement>(".logo-dark");
    const logoLight = document.querySelector<HTMLElement>(".logo-light");

    if (!header) {
      console.warn("[HeaderWatcher] No header found with id=page-header");
      return;
    }
    if (!sections.length) {
      console.warn("[HeaderWatcher] No .section elements found");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // pick the section with largest intersection ratio
        const mostVisible = entries.reduce((prev, curr) =>
          curr.intersectionRatio > prev.intersectionRatio ? curr : prev
        );

        if (mostVisible.isIntersecting) {
          const target = mostVisible.target as HTMLElement;
          const isLight = target.classList.contains("bg-light");
          const isDark = target.classList.contains("bg-dark");

          if (!isLight && !isDark) {
            return;
          }

          // Toggle header styles
          header.classList.toggle("header-light", isLight);
          header.classList.toggle("header-dark", isDark);

          // Toggle logo
          if (logoDark && logoLight) {
            logoDark.style.display = isDark ? "block" : "none";
            logoLight.style.display = isLight ? "block" : "none";
          }
        }
      },
      { threshold: 0.2 } // 30% visible = enough
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
