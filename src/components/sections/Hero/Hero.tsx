import { useEffect, useRef, useState } from 'react';
import { animateHeroSlides } from '../../../animations/heroAnimations';
import { useHeroSlider } from '../../../hooks/useHeroSlider';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import { heroCars } from '../../../data/heroCars';
import { HeroContent } from './HeroContent';
import { HeroControls } from './HeroControls';
import { HeroProgress } from './HeroProgress';
import { HeroSlider } from './HeroSlider';

export function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const isPaused = isHovered || prefersReducedMotion;
  const { currentIndex, next, prev, goTo } = useHeroSlider(heroCars.length, 5000, isPaused);
  const sectionRef = useRef<HTMLElement | null>(null);
  const previousSlide = heroCars[(currentIndex - 1 + heroCars.length) % heroCars.length];
  const currentSlide = heroCars[currentIndex];
  const nextSlide = heroCars[(currentIndex + 1) % heroCars.length];

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
      className="relative h-screen h-[100svh] min-h-[620px] overflow-hidden bg-[#080808] sm:min-h-[680px] lg:h-[100vh] lg:min-h-[720px]"
      onPointerEnter={(event) => {
        if (event.pointerType === 'mouse') setIsHovered(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === 'mouse') setIsHovered(false);
      }}
    >
      <HeroSlider
        slide={currentSlide}
        previousSlide={previousSlide}
        nextSlide={nextSlide}
        currentIndex={currentIndex}
        totalSlides={heroCars.length}
      />

      <div className="absolute inset-0 z-10 flex items-end">
        <div className="mx-auto w-full max-w-7xl px-5 pb-28 pt-24 md:px-8 md:pb-28 md:pt-28">
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
