// contactAnimation.js
import { useEffect } from "react";

export function useContactFadeIn() {
  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in");

    const appearOnScroll = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    faders.forEach((el) => appearOnScroll.observe(el));

    return () => {
      faders.forEach((el) => appearOnScroll.unobserve(el));
    };
  }, []);
}
