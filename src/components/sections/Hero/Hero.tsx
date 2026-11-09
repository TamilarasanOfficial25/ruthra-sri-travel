import { useEffect, useRef } from 'react';
import { animateHeroSlides } from '../../../animations/heroAnimations';
import { useHeroSlider } from '../../../hooks/useHeroSlider';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import { heroCars } from '../../../data/heroCars';
import { HeroContent } from './HeroContent';
import { HeroControls } from './HeroControls';
import { HeroProgress } from './HeroProgress';
import { HeroSlider } from './HeroSlider';

export function Hero() {
  const { currentIndex, next, prev, goTo, setIsPaused } = useHeroSlider(heroCars.length, 10000);
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const previousSlide = heroCars[(currentIndex - 1 + heroCars.length) % heroCars.length];
  const currentSlide = heroCars[currentIndex];

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsPaused(true);
    }
  }, [prefersReducedMotion, setIsPaused]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const timeline = animateHeroSlides(section);

    return () => {
      timeline?.kill();
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative h-[100vh] min-h-[720px] overflow-hidden bg-[#080808]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <HeroSlider slide={currentSlide} previousSlide={previousSlide} currentIndex={currentIndex} totalSlides={heroCars.length} />

      <div className="absolute inset-0 z-10 flex items-end">
        <div className="mx-auto w-full max-w-7xl px-5 pb-24 pt-28 md:px-8 md:pb-28">
          <HeroContent slide={currentSlide} />
        </div>
      </div>

      <HeroControls
        currentIndex={currentIndex}
        totalSlides={heroCars.length}
        onPrev={prev}
        onNext={next}
        onSelect={goTo}
      />
      <HeroProgress currentIndex={currentIndex} totalSlides={heroCars.length} />
    </section>
  );
}
