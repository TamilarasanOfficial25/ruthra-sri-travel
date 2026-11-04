import { ArrowUpRight } from 'lucide-react';
import { revealImage } from '../../../animations/imageAnimations';
import { useEffect, useRef } from 'react';

export function About() {
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    revealImage(imageRef.current);
  }, []);

  return (
    <section id="about" data-reveal className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1.2fr]">
        <div className="relative overflow-hidden rounded-[28px] border border-[#D4AF66]/25 bg-[#171717] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
          <div ref={imageRef} className="relative overflow-hidden rounded-[20px]">
            <img
              src="/images/gallery/ruthrasri-travel-aboutus-image.png"
              alt="Luxury travel experience in a premium vehicle"
              className="h-[520px] w-full object-cover grayscale-[0.15]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 via-transparent to-transparent" />
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.32em] text-[#D4AF66]">About us</p>
          <h2 className="font-['Playfair_Display'] text-4xl leading-tight text-white md:text-5xl">
            Travel with intention, comfort, and quiet confidence.
          </h2>

          <p className="mt-7 text-base leading-8 text-[#A5A5A5]">
            Ruthrasri Travels is focused on premium, dependable road travel for city movement, business transfers and memorable journeys. We combine polished service with a calm, comfortable experience that feels elevated from the first pickup to the final drop.
          </p>
          <p className="mt-5 text-base leading-8 text-[#A5A5A5]">
            Our travel philosophy is simple: every trip should feel thoughtful, organized and effortless. From punctual arrivals to clean, well-maintained vehicles and attentive support, we aim to create a smooth, reassuring experience for every passenger.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#D4AF66]/25 bg-[#171717] p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF66]">Comfort</p>
              <p className="mt-3 text-base text-[#F5F5F5]">Clean, carefully selected vehicles for every journey.</p>
            </div>
            <div className="rounded-2xl border border-[#D4AF66]/25 bg-[#171717] p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF66]">Reliability</p>
              <p className="mt-3 text-base text-[#F5F5F5]">Punctual arrangements for personal and business travel.</p>
            </div>
          </div>

          <a href="#contact" className="mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[#F0D69A]">
            Speak with us <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
