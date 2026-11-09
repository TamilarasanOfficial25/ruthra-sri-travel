import { useEffect, useRef } from 'react';
import { animateHeroTransition } from '../../../animations/transitionAnimations';
import type { HeroCar } from '../../../types';

interface HeroSliderProps {
  slide: HeroCar;
  previousSlide?: HeroCar | null;
  nextSlide: HeroCar;
  currentIndex: number;
  totalSlides: number;
}

export function HeroSlider({ slide, previousSlide, nextSlide, currentIndex, totalSlides }: HeroSliderProps) {
  const previousImageRef = useRef<HTMLImageElement | null>(null);
  const currentImageRef = useRef<HTMLImageElement | null>(null);
  const previousTextRef = useRef<HTMLDivElement | null>(null);
  const currentTextRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!previousSlide || !previousImageRef.current || !currentImageRef.current) {
      return;
    }

    const timeline = animateHeroTransition({
      previousImage: previousImageRef.current,
      nextImage: currentImageRef.current,
      previousText: previousTextRef.current,
      nextText: currentTextRef.current,
    });

    return () => {
      timeline?.kill();
    };
  }, [currentIndex, previousSlide, slide]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {previousSlide ? (
        <img
          ref={previousImageRef}
          src={previousSlide.image}
          alt=""
          aria-hidden="true"
          decoding="async"
          className="hero-slide-image absolute inset-0 h-full w-full object-contain object-[center_16%] opacity-0 lg:object-cover lg:object-center"
        />
      ) : null}

      <img
        ref={currentImageRef}
        src={slide.image}
        alt=""
        aria-hidden="true"
        fetchPriority={currentIndex === 0 ? 'high' : 'auto'}
        decoding="async"
        className="hero-slide-image absolute inset-0 h-full w-full object-contain object-[center_16%] opacity-100 lg:object-cover lg:object-center"
      />

      <img
        src={nextSlide.image}
        alt=""
        aria-hidden="true"
        loading="eager"
        decoding="async"
        fetchPriority="low"
        className="absolute -z-10 h-px w-px opacity-0"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/95 via-[#080808]/30 to-[#080808]/5 sm:bg-gradient-to-r sm:from-[#080808]/90 sm:via-[#080808]/45 sm:to-[#080808]/20" />

      <div ref={currentTextRef} className="absolute inset-0">
        <div className="absolute inset-0" aria-hidden="true" />
      </div>

      <div ref={previousTextRef} className="absolute inset-0 opacity-0" aria-hidden="true" />

      <div className="absolute bottom-20 left-5 z-20 text-[10px] uppercase tracking-[0.4em] text-[#F0D69A] md:left-10">
        0{currentIndex + 1} / 0{totalSlides}
      </div>
    </div>
  );
}
