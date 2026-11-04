import { CarFront, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { SectionHeading } from '../../common/SectionHeading';

const features = [
  {
    title: 'Comfortable Journeys',
    text: 'Well-maintained vehicles and thoughtfully spaced travel designed around ease and calm.',
    icon: CarFront,
  },
  {
    title: 'Reliable Travel Service',
    text: 'Consistent punctuality and dependable support for both planned and urgent travel needs.',
    icon: ShieldCheck,
  },
  {
    title: 'Professional Drivers',
    text: 'Polished, courteous service from drivers who prioritize safety and a smooth experience.',
    icon: CheckCircle2,
  },
  {
    title: 'Customer Satisfaction',
    text: 'Travel experiences designed to feel warm, personal and carefully managed from start to finish.',
    icon: Sparkles,
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-[#121212] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A premium travel standard, without the rush."
          subtitle="We focus on details that matter most to passengers: comfort, consistency and a stress-free ride."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-[24px] border border-[#D4AF66]/20 bg-[#171717] p-7 text-center transition-all duration-300 hover:border-[#D4AF66]/70 hover:-translate-y-1">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#D4AF66]/40 bg-[#080808] text-[#F0D69A]">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl text-white">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#A5A5A5]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
