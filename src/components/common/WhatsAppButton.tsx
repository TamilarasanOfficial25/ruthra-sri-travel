import { MessageCircle } from 'lucide-react';

export function WhatsAppButton({ phone }: { phone: string }) {
  const link = `https://wa.me/${phone.replace(/\D/g, '')}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF66]/60 bg-[#171717] text-[#F0D69A] shadow-[0_0_30px_rgba(212,175,102,0.35)] transition-transform duration-300 hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
