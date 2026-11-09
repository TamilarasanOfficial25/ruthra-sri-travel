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
        className="max-w-[440px] font-['Playfair_Display'] text-4xl leading-[0.92] text-white sm:text-5xl md:text-6xl lg:text-7xl"
      >
        {slide.name}
      </h1>
      <p data-hero-description className="mt-5 max-w-lg text-base leading-7 text-[#D9D9D9] md:text-lg">
        {slide.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-3 text-sm text-white">
        <div data-hero-detail className="rounded-full border border-[#D4AF66]/40 bg-[#171717]/60 px-4 py-2.5 backdrop-blur-sm">
          {slide.category}
        </div>
        <div data-hero-detail className="rounded-full border border-[#D4AF66]/40 bg-[#171717]/60 px-4 py-2.5 backdrop-blur-sm">
          {slide.seatingCapacity} Seats
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-4" data-hero-cta>
        <a href="#fleet" className="inline-flex items-center justify-center rounded-full bg-[#D4AF66] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#080808] transition-all duration-300 hover:bg-[#F0D69A]">
          Explore Fleet
        </a>
        <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-[#D4AF66] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F0D69A] transition-all duration-300 hover:bg-[#D4AF66]/10">
          Contact Us
        </a>
      </div>
    </div>
  );
}
