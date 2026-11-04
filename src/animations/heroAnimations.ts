import { gsap } from 'gsap';

export function animateHeroSlides(container: HTMLElement | null) {
  if (!container) return;

  const title = container.querySelector('[data-hero-title]');
  const description = container.querySelector('[data-hero-description]');
  const details = container.querySelectorAll('[data-hero-detail]');
  const cta = container.querySelectorAll('[data-hero-cta]');

  if (!title || !description) return;

  const tl = gsap.timeline();
  tl.fromTo(
    [title, description, ...Array.from(details), ...Array.from(cta)],
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, stagger: 0.12, duration: 0.75, ease: 'power3.out' },
  );

  return tl;
}
