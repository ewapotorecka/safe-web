import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    // Double-rAF ensures the browser has finished layout before we measure
    // intersections — otherwise elements already in the viewport at mount
    // can silently fail to trigger the observer.
    let rafId: number;
    let observer: IntersectionObserver | undefined;
    let fallbackTimer: ReturnType<typeof setTimeout>;

    const init = () => {
      const elements = Array.from(document.querySelectorAll("[data-reveal]"));
      if (elements.length === 0) return;

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      elements.forEach((element, index) => {
        const revealElement = element as HTMLElement;
        revealElement.classList.add("reveal");
        // Only set the CSS variable when the element doesn't already have an
        // inline transitionDelay (sections set their own per-card delays).
        if (!revealElement.style.transitionDelay) {
          revealElement.style.setProperty("--reveal-delay", `${index * 45}ms`);
        }
      });

      if (reduceMotion) {
        elements.forEach(element => element.classList.add("reveal-in"));
        return;
      }

      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("reveal-in");
              observer!.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -4% 0px" }
      );

      elements.forEach(el => observer!.observe(el));

      // Hard fallback: if an element still hasn't appeared after 3 s
      // (e.g. the observer misfired or the page was loaded off-screen),
      // force it visible so content is never permanently hidden.
      fallbackTimer = setTimeout(() => {
        elements.forEach(el => {
          if (!el.classList.contains("reveal-in")) {
            el.classList.add("reveal-in");
          }
        });
      }, 3000);
    };

    // Two animation frames: first rAF queues after paint, second waits for
    // the following frame so all layout/compositing is settled.
    rafId = requestAnimationFrame(() => {
      rafId = requestAnimationFrame(init);
    });

    return () => {
      cancelAnimationFrame(rafId);
      observer?.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);
}