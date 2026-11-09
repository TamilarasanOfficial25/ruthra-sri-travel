import type { HeroCar } from '../../../types';

interface HeroContentProps {
  slide: HeroCar;
}

export function HeroContent({ slide }: HeroContentProps) {
  return (
    <div className="relative z-20 flex w-full max-w-[560px] flex-col">
      <div className="mb-5 h-px w-20 bg-[#D4AF66]" />
      <p className="mb-3 text-xs uppercase tracking-[0.38em] text-[#D4AF66]">Ruthrasri Travels</p>
      <h1
        data-hero-title
        className="max-w-[440px] font-['Playfair_Display'] text-3xl leading-[1.05] text-white sm:text-5xl sm:leading-[0.92] md:text-6xl lg:text-7xl"
      >
        {slide.name}
      </h1>
      <p data-hero-description className="mt-4 max-w-lg text-sm leading-6 text-[#D9D9D9] sm:mt-5 sm:text-base sm:leading-7 md:text-lg">
        {slide.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-3 text-sm text-white sm:mt-8">
        <div data-hero-detail className="rounded-full border border-[#D4AF66]/40 bg-[#171717]/60 px-3 py-2.5 backdrop-blur-sm sm:px-4">
          {slide.category}
        </div>
        <div data-hero-detail className="rounded-full border border-[#D4AF66]/40 bg-[#171717]/60 px-3 py-2.5 backdrop-blur-sm sm:px-4">
          {slide.seatingCapacity} Seats
        </div>
      </div>

      <div className="mt-7 flex flex-wrap gap-3 sm:mt-10 sm:gap-4" data-hero-cta>
        <a href="#fleet" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#D4AF66] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#080808] transition-all duration-300 hover:bg-[#F0D69A] sm:px-6 sm:text-[11px] sm:tracking-[0.2em]">
          Explore Fleet
        </a>
        <a href="#contact" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#D4AF66] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#F0D69A] transition-all duration-300 hover:bg-[#D4AF66]/10 sm:px-6 sm:text-[11px] sm:tracking-[0.2em]">
          Contact Us
        </a>
      </div>
    </div>
  );
}
