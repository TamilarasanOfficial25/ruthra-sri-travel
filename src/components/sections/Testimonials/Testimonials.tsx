import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../../../data/testimonials';
import { SectionHeading } from '../../common/SectionHeading';

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  return (
    <section className="bg-[#121212] py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients value most about our service."
          subtitle="Sample feedback placeholders can be replaced with verified reviews once real customer stories are available."
          align="center"
        />

        <div className="mt-12 rounded-[28px] border border-[#D4AF66]/20 bg-[#171717] p-8 md:p-12">
          <div className="mb-6 flex justify-center gap-1 text-[#D4AF66]">
            {Array.from({ length: item.rating ?? 5 }, (_, starIndex) => (
              <Star key={starIndex} className="h-5 w-5 fill-current" />
            ))}
          </div>

          <p className="text-center font-['Playfair_Display'] text-2xl leading-relaxed text-white md:text-4xl">
            “{item.review}”
          </p>

          <div className="mt-10 text-center">
            <p className="text-lg font-medium text-white">{item.name}</p>
            <p className="text-sm uppercase tracking-[0.2em] text-[#A5A5A5]">{item.title}</p>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF66]/60 bg-[#080808] text-[#F0D69A]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF66]/60 bg-[#080808] text-[#F0D69A]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
