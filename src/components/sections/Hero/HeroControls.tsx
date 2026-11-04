import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroControlsProps {
  currentIndex: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}

export function HeroControls({ currentIndex, totalSlides, onPrev, onNext, onSelect }: HeroControlsProps) {
  return (
    <div className="absolute inset-x-0 bottom-8 z-30 mx-auto flex w-full max-w-6xl items-end justify-between px-4 md:px-8">
      <div className="hidden items-center gap-3 md:flex">
        <button
          type="button"
          onClick={onPrev}
          aria-label="Previous slide"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF66]/60 bg-[#080808]/60 text-[#F0D69A] transition-all duration-300 hover:bg-[#D4AF66]/20"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={onNext}
          aria-label="Next slide"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF66]/60 bg-[#080808]/60 text-[#F0D69A] transition-all duration-300 hover:bg-[#D4AF66]/20"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="flex items-center gap-2 md:ml-auto">
        {Array.from({ length: totalSlides }, (_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onSelect(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-10 bg-[#D4AF66]' : 'w-2.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
