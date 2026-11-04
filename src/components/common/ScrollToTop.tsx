import { ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-24 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF66]/80 bg-[#080808] text-[#F0D69A] shadow-[0_0_25px_rgba(212,175,102,0.2)] transition-all duration-300 ${visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-5 opacity-0'}`}
      aria-label="Scroll back to top"
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
}
