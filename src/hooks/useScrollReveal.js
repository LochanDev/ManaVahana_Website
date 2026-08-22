import { useEffect } from 'react';

/**
 * useScrollReveal — mirrors the IntersectionObserver reveal logic
 * from the original vanilla JS. Call once at App level.
 */
export function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    // Observe all .reveal elements present + any added later via MutationObserver
    const observe = () => {
      document.querySelectorAll('.reveal:not(.in)').forEach((el) => obs.observe(el));
    };

    observe();

    const mut = new MutationObserver(observe);
    mut.observe(document.body, { childList: true, subtree: true });

    return () => {
      obs.disconnect();
      mut.disconnect();
    };
  }, []);
}
