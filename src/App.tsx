import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { About } from './components/sections/About/About';
import { Contact } from './components/sections/Contact/Contact';
import { Fleet } from './components/sections/Fleet/Fleet';
import { Gallery } from './components/sections/Gallery/Gallery';
import { Hero } from './components/sections/Hero/Hero';
import { Journey } from './components/sections/Journey/Journey';
import { OurTeam } from './components/sections/OurTeam/OurTeam';
import { Services } from './components/sections/Services/Services';
import { Testimonials } from './components/sections/Testimonials/Testimonials';
import { WhyChooseUs } from './components/sections/WhyChooseUs/WhyChooseUs';
import { registerGsapPlugins } from './animations/gsap';
import { initScrollAnimations } from './animations/scrollAnimations';
import { ScrollToTop } from './components/common/ScrollToTop';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { businessInfo } from './data/businessInfo';

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    registerGsapPlugins();
    initScrollAnimations();

    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    let rafId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };

    rafId = window.requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setProgress((current) => {
        if (current >= 100) {
          window.clearInterval(timer);
          window.setTimeout(() => setLoading(false), 250);
          return 100;
        }
        return current + 12;
      });
    }, 90);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#F8FAFC] text-[#173746]">
          <div className="w-full max-w-md px-6 text-center">
            <div className="mb-6 text-[10px] uppercase tracking-[0.5em] text-[#E99A24]">Ruthrasri Travels</div>
            <div className="mb-4 font-['Playfair_Display'] text-4xl text-[#173746]">Luxury Motion</div>
            <div className="h-px w-full overflow-hidden bg-[#E2E8F0]">
              <div
                className="h-full bg-[#E99A24] transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-5 text-sm uppercase tracking-[0.3em] text-[#64748B]">{progress}%</div>
          </div>
        </div>
      ) : null}

      <div className={`min-h-screen bg-[#F8FAFC] text-[#475569] transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Fleet />
        <Journey />
        <WhyChooseUs />
        <Gallery />
        <OurTeam />
        <Testimonials />
        <Contact />
        <Footer />
        <ScrollToTop />
        <WhatsAppButton phone={businessInfo.whatsapp} />
      </div>
    </>
  );
}

export default App;