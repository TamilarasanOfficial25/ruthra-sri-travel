import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';

const quickLinks = ['Home', 'About', 'Services', 'Fleet', 'Gallery', 'Contact'];

export function Footer() {
  return (
    <footer className="border-t border-[#173746] bg-[#173746]">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/30 bg-white">
                <img
                  src="/images/brand/ruthrasri-travels-logo-primary.png"
                  alt=""
                  width="44"
                  height="44"
                  className="h-full w-full object-contain p-0.5"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <div className="font-['Playfair_Display'] text-2xl text-white">Ruthrasri</div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-white/70">Travels</div>
              </div>
            </div>
            <p className="max-w-xs text-sm leading-7 text-white/70">
              Premium travel experiences built around comfort, reliability and a polished sense of hospitality.
            </p>
          </div>

          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-[#F5B942]">Quick Links</p>
            <ul className="space-y-3 text-sm text-white/70">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="transition-colors duration-300 hover:text-[#F5B942]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-[#F5B942]">Contact</p>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-[#F5B942]" />
                <a href={`tel:${businessInfo.phone.replace(/\s+/g, '')}`} className="hover:text-white">{businessInfo.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-[#F5B942]" />
                <a href={`mailto:${businessInfo.email}`} className="hover:text-white">{businessInfo.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-[#F5B942]" />
                <span>{businessInfo.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Ruthrasri Travels. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href={businessInfo.googleMapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#F5B942] hover:text-white">
              Get directions <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
