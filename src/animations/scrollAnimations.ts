import { gsap } from 'gsap';

export function initScrollAnimations() {
  const sections = document.querySelectorAll('[data-reveal]');

  sections.forEach((section) => {
    gsap.fromTo(
      section,
      { opacity: 0, y: 42 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          once: true,
        },
      },
    );
  });
}
