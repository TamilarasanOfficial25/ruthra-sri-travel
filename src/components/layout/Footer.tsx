import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import type { CSSProperties } from 'react';
import type { IconType } from 'react-icons';
import { businessInfo } from '../../data/businessInfo';

const quickLinks = ['Home', 'About', 'Services', 'Fleet', 'Gallery', 'Contact'];

const socialLinks: { name: string; href: string; color: string; Icon: IconType }[] = [
  { name: 'Instagram', href: 'https://www.instagram.com/your-profile/', color: '#E4405F', Icon: FaInstagram },
  { name: 'Facebook', href: 'https://www.facebook.com/your-page', color: '#1877F2', Icon: FaFacebookF },
  { name: 'WhatsApp', href: 'https://wa.me/91XXXXXXXXXX', color: '#25D366', Icon: FaWhatsapp },
  { name: 'YouTube', href: 'https://www.youtube.com/@your-channel', color: '#FF0000', Icon: FaYoutube },
  { name: 'X', href: 'https://x.com/your-handle', color: '#000000', Icon: SiX },
];

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

        <div className="mt-10 flex flex-col items-center gap-6 border-t border-white/15 pt-8 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.24em] text-[#F5B942]">Follow Us</p>
            <p className="max-w-lg text-sm leading-6 text-white/70">
              Stay connected with Ruthrasri Travels for updates, travel services, and special offers.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {socialLinks.map(({ name, href, color, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow Ruthrasri Travels on ${name}`}
                title={name}
                style={{ '--social-color': color } as CSSProperties}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:border-[var(--social-color)] hover:bg-[var(--social-color)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5B942]"
              >
                <Icon aria-hidden="true" className="h-[18px] w-[18px]" />
              </a>
            ))}
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
