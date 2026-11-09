import { useEffect, useRef, useState } from 'react';
import { CarFront, MapPin, Route } from 'lucide-react';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import { growingFleet, journeyMilestones, journeyStats } from '../../../data/roadmap';
import { SectionHeading } from '../../common/SectionHeading';

export function Journey() {
  const [hasEntered, setHasEntered] = useState(false);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const [counts, setCounts] = useState(() => journeyStats.map(() => 0));

  useEffect(() => {
    const element = statsRef.current;
    if (!element || hasEntered) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasEntered]);

  useEffect(() => {
    if (!hasEntered) return;

    if (prefersReducedMotion) {
      setCounts(journeyStats.map(({ value }) => value));
      return;
    }

    const duration = 1400;
    let frameId = 0;
    let startTime: number | null = null;

    const animate = (time: number) => {
      if (startTime === null) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 3;
      setCounts(journeyStats.map(({ value }) => Math.round(value * easedProgress)));

      if (progress < 1) frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frameId);
  }, [hasEntered, prefersReducedMotion]);

  return (
    <section id="journey" className="overflow-hidden bg-[#F8FAFC] py-24 text-[#475569] md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div data-reveal>
          <SectionHeading
            eyebrow="Our Journey"
            title="Every mile tells a story."
            subtitle="From our first journeys in 2015 to the travel network we serve today, our road has always led forward."
            align="center"
          />
        </div>

        <div
          ref={statsRef}
          className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4"
          aria-label="Ruthrasri Travels company milestones"
        >
          {journeyStats.map(({ prefix, suffix, label }, index) => (
            <div
              key={label}
              className="rounded-2xl border border-[#E2E8F0] bg-white px-4 py-6 text-center shadow-[0_8px_26px_rgba(23,55,70,0.06)] sm:px-6 sm:py-8"
            >
              <p className="font-['Playfair_Display'] text-3xl text-[#B86B08] sm:text-4xl md:text-5xl">
                {prefix}{counts[index]}{suffix}
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#64748B] sm:text-xs sm:tracking-[0.24em]">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-24 max-w-5xl md:mt-32" data-reveal>
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#D4AF66]">Our Road So Far</p>
            <h3 className="font-['Playfair_Display'] text-3xl text-[#173746] sm:text-4xl">A journey built mile by mile</h3>
          </div>

          <ol className="relative space-y-8 before:absolute before:bottom-4 before:left-[19px] before:top-4 before:border-l-2 before:border-dashed before:border-[#D4AF66]/60 md:space-y-10 md:before:left-1/2">
            {journeyMilestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;
              return (
                <li
                  key={milestone.year}
                  className="relative grid grid-cols-[40px_minmax(0,1fr)] items-start gap-x-4 md:grid-cols-[minmax(0,1fr)_64px_minmax(0,1fr)] md:gap-x-5"
                >
                  <div
                    className="z-10 col-start-1 row-start-1 flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF66]/60 bg-white text-[#B86B08] shadow-sm md:col-start-2 md:col-end-3 md:row-start-1 md:mx-auto md:h-12 md:w-12"
                    aria-hidden="true"
                  >
                    {index === 0 ? <MapPin className="h-5 w-5" /> : <CarFront className="h-5 w-5" />}
                  </div>

                  <article
                    className={`col-start-2 row-start-1 rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-[0_8px_26px_rgba(23,55,70,0.06)] sm:p-6 md:col-span-1 md:row-start-1 ${
                      isLeft ? 'md:col-start-1 md:text-right' : 'md:col-start-3'
                    }`}
                  >
                    <p className="text-sm font-semibold tracking-[0.2em] text-[#B86B08]">{milestone.year}</p>
                    <h4 className="mt-2 font-['Playfair_Display'] text-xl text-[#173746] sm:text-2xl">{milestone.title}</h4>
                    <p className="mt-3 text-sm leading-6 text-[#475569]">{milestone.description}</p>
                    {milestone.suggested ? (
                      <p className="mt-3 text-[10px] uppercase tracking-[0.16em] text-[#64748B]">
                        Suggested milestone · edit when details are confirmed
                      </p>
                    ) : null}
                  </article>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-24 md:mt-32" data-reveal>
          <SectionHeading
            eyebrow="Our Vehicles"
            title="Growing Our Fleet"
            subtitle="A look at vehicles in our fleet. Model names are shown as listed; purchase dates are not specified."
            align="center"
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {growingFleet.map((vehicle) => (
              <article
                key={vehicle.id}
                className="overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white shadow-[0_8px_26px_rgba(23,55,70,0.06)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[16/10] overflow-hidden bg-[#E2E8F0]">
                  <img
                    src={vehicle.image}
                    alt={vehicle.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#D4AF66]">{vehicle.category}</p>
                  <h4 className="mt-3 font-['Playfair_Display'] text-xl text-[#173746]">{vehicle.name}</h4>
                  <p className="mt-3 flex items-center gap-2 text-xs text-[#64748B]">
                  <Route className="h-4 w-4 text-[#B86B08]" aria-hidden="true" />
                    Part of our growing fleet
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
