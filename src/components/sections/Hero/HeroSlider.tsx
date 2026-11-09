import { useEffect, useRef } from 'react';
import { animateHeroTransition } from '../../../animations/transitionAnimations';
import type { HeroCar } from '../../../types';

interface HeroSliderProps {
  slide: HeroCar;
  previousSlide?: HeroCar | null;
  currentIndex: number;
  totalSlides: number;
}

export function HeroSlider({ slide, previousSlide, currentIndex, totalSlides }: HeroSliderProps) {
  const previousImageRef = useRef<HTMLDivElement | null>(null);
  const currentImageRef = useRef<HTMLDivElement | null>(null);
  const previousTextRef = useRef<HTMLDivElement | null>(null);
  const currentTextRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!previousSlide || !previousImageRef.current || !currentImageRef.current) {
      return;
    }

    animateHeroTransition({
      previousImage: previousImageRef.current,
      nextImage: currentImageRef.current,
      previousText: previousTextRef.current,
      nextText: currentTextRef.current,
    });
  }, [currentIndex, previousSlide, slide]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,102,0.2),_rgba(8,8,8,0.78)_55%)]" />

      {previousSlide ? (
        <div
          ref={previousImageRef}
          className="absolute inset-0 bg-cover bg-center opacity-0"
          style={{ backgroundImage: `url(${previousSlide.image})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}
        />
      ) : null}

      <div
        ref={currentImageRef}
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/90 via-[#080808]/45 to-[#080808]/20" />

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
