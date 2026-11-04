import { ArrowUpRight } from 'lucide-react';
import { vehicles } from '../../../data/vehicles';
import { SectionHeading } from '../../common/SectionHeading';

export function Fleet() {
  return (
    <section id="fleet" data-reveal className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading
        eyebrow="Our Fleet"
        title="Luxury mobility built around your itinerary."
        subtitle="A carefully considered fleet for executive movement, family travel and special occasions."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {vehicles.map((vehicle) => (
          <article key={vehicle.id} className="group overflow-hidden rounded-[24px] border border-[#D4AF66]/20 bg-[#171717] hover:border-[#D4AF66]/40">
            <div className="overflow-hidden">
              <img src={vehicle.image} alt={vehicle.alt} className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF66]">{vehicle.category}</p>
              <h3 className="mt-3 font-['Playfair_Display'] text-2xl text-white">{vehicle.name}</h3>
              <div className="mt-4 flex items-center justify-between text-sm text-[#A5A5A5]">
                <span>{vehicle.seatingCapacity} Seats</span>
                {vehicle.luggageCapacity ? <span>{vehicle.luggageCapacity}</span> : null}
              </div>
              <p className="mt-4 text-sm leading-7 text-[#A5A5A5]">{vehicle.description}</p>
              <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-[#F0D69A]">
                Contact <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
