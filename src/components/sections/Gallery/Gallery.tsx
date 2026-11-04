import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { SectionHeading } from '../../common/SectionHeading';

const galleryImages = [
  '/images/gallery/ruthrasri-travel-aboutus-image.png',
  '/images/gallery/gallery-02.svg',
  '/images/gallery/gallery-03.svg',
  '/images/gallery/gallery-04.svg',
  '/images/gallery/gallery-05.svg',
  '/images/gallery/gallery-06.svg',
];

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedIndex(null);
      }
      if (event.key === 'ArrowRight') {
        setSelectedIndex((current) => (current === null ? 0 : (current + 1) % galleryImages.length));
      }
      if (event.key === 'ArrowLeft') {
        setSelectedIndex((current) => (current === null ? 0 : (current - 1 + galleryImages.length) % galleryImages.length));
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedIndex]);

  return (
    <section id="gallery" data-reveal className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading
        eyebrow="Gallery"
        title="Moments shaped around premium travel."
        subtitle="A select glimpse into comfort, elegance and the atmosphere of a refined travel experience."
      />

      <div className="mt-12 columns-1 gap-5 sm:columns-2 xl:columns-3">
        {galleryImages.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className="group mb-5 block w-full overflow-hidden rounded-[24px] border border-[#D4AF66]/20 bg-[#171717] text-left"
          >
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              loading="lazy"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {selectedIndex !== null ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#080808]/90 p-4">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-[24px] border border-[#D4AF66]/25 bg-[#171717]">
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#080808]/70 text-white"
              aria-label="Close gallery"
            >
              <X className="h-5 w-5" />
            </button>

            <img
              src={galleryImages[selectedIndex]}
              alt="Expanded gallery view"
              className="max-h-[80vh] w-full object-cover"
            />

            <div className="flex items-center justify-between p-4">
              <button
                type="button"
                onClick={() => setSelectedIndex((current) => (current === null ? 0 : (current - 1 + galleryImages.length) % galleryImages.length))}
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[#F0D69A]"
              >
                <ArrowLeft className="h-4 w-4" /> Prev
              </button>
              <button
                type="button"
                onClick={() => setSelectedIndex((current) => (current === null ? 0 : (current + 1) % galleryImages.length))}
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[#F0D69A]"
              >
                Next <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
