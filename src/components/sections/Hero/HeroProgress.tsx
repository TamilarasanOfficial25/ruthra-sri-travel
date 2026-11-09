interface HeroProgressProps {
  currentIndex: number;
  totalSlides: number;
}

export function HeroProgress({ currentIndex, totalSlides }: HeroProgressProps) {
  const progress = ((currentIndex + 1) / totalSlides) * 100;

  return (
    <div className="absolute bottom-0 left-0 z-30 h-[2px] w-full bg-white/10">
      <div
        className="h-full bg-[#D4AF66] transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
