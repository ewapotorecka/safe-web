import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("[data-reveal]"));
    if (elements.length === 0) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    elements.forEach((element, index) => {
      const revealElement = element as HTMLElement;
      revealElement.classList.add("reveal");
      revealElement.style.setProperty("--reveal-delay", `${index * 45}ms`);
    });

    if (reduceMotion) {
      elements.forEach(element => {
        element.classList.add("reveal-in");
      });
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}