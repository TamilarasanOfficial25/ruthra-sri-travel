import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import type { FormEvent } from 'react';
import { businessInfo } from '../../../data/businessInfo';
import { SectionHeading } from '../../common/SectionHeading';

export function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      `Name: ${formData.get('name')}`,
      `Mobile: ${formData.get('mobile')}`,
      `Email: ${formData.get('email')}`,
      `Enquiry: ${formData.get('description')}`,
    ].join('\n');
    const whatsappUrl = `https://wa.me/${businessInfo.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" data-reveal className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s plan your next premium journey."
        subtitle="Share your travel requirement and we’ll help you arrange a smooth, comfortable and well-managed ride."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[28px] border border-[#D4AF66]/20 bg-[#171717] p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <a href={`tel:${businessInfo.phone.replace(/\s+/g, '')}`} className="rounded-[20px] border border-[#D4AF66]/20 bg-[#080808] p-5 transition-colors duration-300 hover:border-[#D4AF66]/60">
              <Phone className="mb-4 h-5 w-5 text-[#D4AF66]" />
              <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF66]">Phone</p>
              <p className="mt-3 text-base text-white">{businessInfo.phone}</p>
            </a>

            <a href={`https://wa.me/${businessInfo.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="rounded-[20px] border border-[#D4AF66]/20 bg-[#080808] p-5 transition-colors duration-300 hover:border-[#D4AF66]/60">
              <MessageCircle className="mb-4 h-5 w-5 text-[#D4AF66]" />
              <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF66]">WhatsApp</p>
              <p className="mt-3 text-base text-white">{businessInfo.whatsapp}</p>
            </a>

            <a href={`mailto:${businessInfo.email}`} className="rounded-[20px] border border-[#D4AF66]/20 bg-[#080808] p-5 transition-colors duration-300 hover:border-[#D4AF66]/60">
              <Mail className="mb-4 h-5 w-5 text-[#D4AF66]" />
              <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF66]">Email</p>
              <p className="mt-3 text-base text-white">{businessInfo.email}</p>
            </a>

            <a href={businessInfo.googleMapsUrl} target="_blank" rel="noreferrer" className="rounded-[20px] border border-[#D4AF66]/20 bg-[#080808] p-5 transition-colors duration-300 hover:border-[#D4AF66]/60">
              <MapPin className="mb-4 h-5 w-5 text-[#D4AF66]" />
              <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF66]">Location</p>
              <p className="mt-3 text-base text-white">{businessInfo.location}</p>
            </a>
          </div>
        </div>

        <div className="rounded-[28px] border border-[#E2E8F0] bg-white p-6 shadow-[0_8px_26px_rgba(23,55,70,0.06)] sm:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#E99A24]">Contact form</p>
            <h3 className="mt-3 font-['Playfair_Display'] text-2xl text-[#173746] sm:text-3xl">Ready when you are.</h3>
          </div>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-[#173746]">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm text-[#173746] placeholder:text-[#94A3B8] focus:border-[#E99A24] focus:outline-none focus:ring-2 focus:ring-[#E99A24]/20"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="contact-mobile" className="mb-1.5 block text-sm font-medium text-[#173746]">Mobile number</label>
              <input
                id="contact-mobile"
                name="mobile"
                type="tel"
                autoComplete="tel"
                required
                className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm text-[#173746] placeholder:text-[#94A3B8] focus:border-[#E99A24] focus:outline-none focus:ring-2 focus:ring-[#E99A24]/20"
                placeholder="Your mobile number"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-[#173746]">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm text-[#173746] placeholder:text-[#94A3B8] focus:border-[#E99A24] focus:outline-none focus:ring-2 focus:ring-[#E99A24]/20"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="contact-description" className="mb-1.5 block text-sm font-medium text-[#173746]">Message</label>
              <textarea
                id="contact-description"
                name="description"
                rows={3}
                required
                className="w-full resize-y rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm text-[#173746] placeholder:text-[#94A3B8] focus:border-[#E99A24] focus:outline-none focus:ring-2 focus:ring-[#E99A24]/20"
                placeholder="How can we help with your journey?"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#E99A24] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#D98212] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E99A24]"
            >
              Send on WhatsApp <MessageCircle className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
