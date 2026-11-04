import { gsap } from 'gsap';

export function revealImage(element: HTMLElement | null) {
  if (!element) return;

  gsap.fromTo(
    element,
    { scale: 1.1, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 1.1,
      ease: 'power3.out',
      clearProps: 'all',
    },
  );
}
