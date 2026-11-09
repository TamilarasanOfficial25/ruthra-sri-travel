interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.32em] text-[#D4AF66]">{eyebrow}</p>
      <h2 className="font-['Playfair_Display'] text-4xl leading-tight text-white md:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-5 text-base text-[#A5A5A5] md:text-lg">{subtitle}</p> : null}
    </div>
  );
}
