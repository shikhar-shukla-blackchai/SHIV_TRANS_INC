"use client";

import { useEffect } from "react";

export function useRevealOnScroll(selector = ".reveal-step") {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(selector);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const target = entry.target as HTMLElement;
          if (target.classList.contains("reveal-step")) {
            const steps =
              target.parentElement?.querySelectorAll<HTMLElement>(selector);
            steps?.forEach((step, index) => {
              setTimeout(() => {
                step.classList.add("active");
              }, index * 200);
            });
          } else {
            target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);
}
