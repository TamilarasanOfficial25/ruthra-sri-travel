import { Menu, MessageCircle, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { NavItem } from '../../types';

const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'fleet', label: 'Fleet' },
  { id: 'journey', label: 'Our Journey' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'team', label: 'Our Team' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean) as HTMLElement[];

      const current = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 180 && rect.bottom >= 180;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [menuOpen]);

  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-40 w-full border-b transition-all duration-500 ${
        isScrolled ? 'border-[#E2E8F0] bg-white/95 shadow-sm backdrop-blur-md' : 'border-[#E2E8F0]/80 bg-white/95'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <button type="button" onClick={() => handleNavigate('home')} className="flex items-center gap-3 text-left">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[#E2E8F0] bg-white">
            <img
              src="/images/brand/ruthrasri-travels-mark-80.png"
              alt=""
              width="40"
              height="40"
              className="h-full w-full object-contain"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div>
            <div className="font-['Playfair_Display'] text-lg font-semibold text-[#173746]">Ruthrasri</div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-[#64748B]">Travels</div>
          </div>
        </button>

        <div className="hidden items-center gap-5 xl:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavigate(item.id)}
              className={`relative text-sm uppercase tracking-[0.18em] transition-colors duration-300 ${
                activeSection === item.id ? 'text-[#E99A24]' : 'text-[#475569] hover:text-[#173746]'
              }`}
            >
              <span className="after:content-[''] after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#E99A24] after:transition-transform after:duration-300 hover:after:scale-x-100">
                {item.label}
              </span>
            </button>
          ))}
        </div>

        <div className="hidden xl:block">
          <a
            href="https://wa.me/9677972348"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#25D366] bg-[#25D366] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:border-[#1EBE5D] hover:bg-[#1EBE5D]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-xl border border-[#E2E8F0] bg-white p-2 text-[#173746] xl:hidden"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {menuOpen ? (
        <div className="border-t border-[#E2E8F0] bg-white px-5 py-6 shadow-lg xl:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavigate(item.id)}
                className={`text-left text-sm uppercase tracking-[0.16em] ${activeSection === item.id ? 'font-semibold text-[#E99A24]' : 'text-[#475569]'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
