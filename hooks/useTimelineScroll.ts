import { useEffect, useRef, useState } from 'react';

export const useTimelineScroll = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  useEffect(() => {
    const updateProgress = () => {
      const section = sectionRef.current;
      const progress = progressRef.current;
      const steps = stepRefs.current;

      if (!section || !progress || steps.length === 0) return;

      const sectionRect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scrollStart = sectionRect.top;
      const scrollEnd = sectionRect.bottom - windowHeight;

      let progressPercent = 0;

      if (scrollStart < 0 && scrollEnd > 0) {
        const scrolled = Math.min(-scrollStart, sectionRect.height - windowHeight);
        const total = sectionRect.height - windowHeight;
        progressPercent = Math.max(0, Math.min((scrolled / total) * 100, 100));
      }

      progress.style.height = `${progressPercent}%`;

      // Active step detection
      steps.forEach((step, index) => {
        if (!step) return;
        const stepRect = step.getBoundingClientRect();
        const middle = stepRect.top + stepRect.height / 2;

        if (middle < windowHeight * 0.6) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener('scroll', updateProgress);
    window.addEventListener('resize', updateProgress);

    // Initial call
    updateProgress();

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return {
    sectionRef,
    progressRef,
    stepRefs,
    activeIndex,
  };
};
