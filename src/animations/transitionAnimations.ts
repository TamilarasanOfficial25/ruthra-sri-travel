import { gsap } from 'gsap';

export function animateHeroTransition({
  previousImage,
  nextImage,
  previousText,
  nextText,
}: {
  previousImage: HTMLElement | null;
  nextImage: HTMLElement | null;
  previousText: HTMLElement | null;
  nextText: HTMLElement | null;
}) {
  const timeline = gsap.timeline();

  if (previousImage) {
    timeline.to(previousImage, { opacity: 0, scale: 1.06, duration: 0.7, ease: 'power2.inOut' }, 0);
  }

  if (nextImage) {
    timeline.fromTo(
      nextImage,
      { opacity: 0, scale: 1.08, clipPath: 'inset(0 0 100% 0)' },
      { opacity: 1, scale: 1, clipPath: 'inset(0 0 0% 0)', duration: 0.7, ease: 'power3.out' },
      0.05,
    );
  }

  if (previousText) {
    timeline.to(previousText, { opacity: 0, y: -20, duration: 0.35, ease: 'power2.out' }, 0);
  }

  if (nextText) {
    timeline.fromTo(nextText, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, 0.2);
  }

  return timeline;
}
