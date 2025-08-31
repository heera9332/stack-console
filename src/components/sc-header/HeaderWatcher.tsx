"use client";
import { useEffect } from "react";

export default function HeaderWatcher() {
  useEffect(() => {
    // desktop-only gate: md and up
    const mq = window.matchMedia("(min-width: 768px)"); // align with tailwind md if used [8][10]

    let observer: IntersectionObserver | null = null;

    const setup = () => {
      // guard if not desktop
      if (!mq.matches) {
        teardown();
        return;
      }

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

      // if reinitializing, disconnect previous first
      if (observer) observer.disconnect();

      observer = new IntersectionObserver(
        (entries) => {
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
        { threshold: 0.2 } // ~20% visible [2]
      );

      sections.forEach((section) => observer!.observe(section));
    };

    const teardown = () => {
      if (observer) {
        observer.disconnect();
        observer = null;
      }
    };

    // initialize according to current viewport
    setup();

    // respond to viewport width changes
    const handleChange = () => {
      if (mq.matches) setup();
      else teardown();
    };

    // modern API uses 'change' event on MediaQueryList [6]
    mq.addEventListener("change", handleChange);

    return () => {
      mq.removeEventListener("change", handleChange);
      teardown();
    };
  }, []);

  return null;
}
