import { ArrowUpRight, Building2, CarFront, MapPinned, PlaneTakeoff, Sparkles } from 'lucide-react';
import { services } from '../../../data/services';
import { SectionHeading } from '../../common/SectionHeading';

const iconMap = {
  PlaneTakeoff,
  MapPinned,
  CarFront,
  Building2,
  Sparkles,
};

export function Services() {
  return (
    <section id="services" data-reveal className="bg-[#121212] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Premium travel experiences for every journey."
          subtitle="Thoughtful transportation solutions designed around comfort, punctuality and polished service."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <article
                key={service.id}
                className="group overflow-hidden rounded-[24px] border border-[#D4AF66]/20 bg-[#171717] transition-all duration-500 hover:-translate-y-1 hover:border-[#D4AF66]/60"
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF66]/60 bg-[#080808] text-[#F0D69A]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-['Playfair_Display'] text-2xl text-white">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#A5A5A5]">{service.description}</p>
                  <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-[#F0D69A]">
                    Explore <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
