import { CircleAlert, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { businessInfo } from '../../../data/businessInfo';
import { SectionHeading } from '../../common/SectionHeading';

type FormField = 'name' | 'mobile' | 'email' | 'description';
type FormValues = Record<FormField, string>;
type FormErrors = Record<FormField, string>;

const emptyValues: FormValues = { name: '', mobile: '', email: '', description: '' };
const emptyErrors: FormErrors = { name: '', mobile: '', email: '', description: '' };

function validateField(field: FormField, value: string) {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return field === 'description' ? 'Please enter a message.' : `Please enter your ${field === 'mobile' ? 'mobile number' : field}.`;
  }

  if (field === 'name') {
    if (trimmedValue.length < 3) return 'Name must be at least 3 characters.';
    if (trimmedValue.length > 50) return 'Name cannot exceed 50 characters.';
    if (!/^[\p{L} ]+$/u.test(trimmedValue)) return 'Use letters and spaces only.';
  }

  if (field === 'mobile') {
    const normalizedPhone = trimmedValue.replace(/[\s()-]/g, '');
    if (!/^(?:\+91)?[6-9]\d{9}$/.test(normalizedPhone)) {
      return 'Enter a valid 10-digit Indian mobile number, with +91 if needed.';
    }
  }

  if (field === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmedValue)) {
    return 'Enter a valid email address.';
  }

  if (field === 'description') {
    if (trimmedValue.length < 10) return 'Message must be at least 10 characters.';
    if (trimmedValue.length > 1000) return 'Message cannot exceed 1000 characters.';
  }

  return '';
}

export function Contact() {
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [errors, setErrors] = useState<FormErrors>(emptyErrors);
  const [touched, setTouched] = useState<Record<FormField, boolean>>({
    name: false,
    mobile: false,
    email: false,
    description: false,
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (field: FormField, event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const rawValue = event.target.value;
    const value = field === 'mobile'
      ? rawValue.replace(/[^\d+]/g, '').replace(/(?!^)\+/g, '')
      : rawValue;
    setValues((currentValues) => ({ ...currentValues, [field]: value }));
    setSuccessMessage('');

    if (touched[field]) {
      setErrors((currentErrors) => ({ ...currentErrors, [field]: validateField(field, value) }));
    }
  };

  const handleBlur = (field: FormField) => {
    setTouched((currentTouched) => ({ ...currentTouched, [field]: true }));
    setErrors((currentErrors) => ({ ...currentErrors, [field]: validateField(field, values[field]) }));
  };

  const renderError = (field: FormField) => errors[field] && (
    <p id={`contact-${field}-error`} role="alert" className="mt-1.5 flex items-center gap-1 text-xs font-normal !text-[#DC2626]">
      <CircleAlert aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
      {errors[field]}
    </p>
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fields: FormField[] = ['name', 'mobile', 'email', 'description'];
    const nextErrors = fields.reduce<FormErrors>((currentErrors, field) => ({
      ...currentErrors,
      [field]: validateField(field, values[field]),
    }), { ...emptyErrors });
    setErrors(nextErrors);
    setTouched({ name: true, mobile: true, email: true, description: true });
    setSuccessMessage('');

    if (Object.values(nextErrors).some(Boolean)) return;

    const trimmedValues = Object.fromEntries(
      fields.map((field) => [field, values[field].trim()]),
    ) as FormValues;
    setValues(trimmedValues);
    const message = [
      `Name: ${trimmedValues.name}`,
      `Mobile: ${trimmedValues.mobile}`,
      `Email: ${trimmedValues.email}`,
      `Enquiry: ${trimmedValues.description}`,
    ].join('\n');
    const whatsappUrl = `https://wa.me/${businessInfo.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSuccessMessage('Your message is ready in WhatsApp. Review and send it there to complete your enquiry.');
  };

  const inputClassName = (field: FormField, multiline = false) =>
    `w-full rounded-xl border bg-[#F8FAFC] px-4 py-3 text-sm text-[#173746] placeholder:text-[#94A3B8] transition-colors duration-200 focus:outline-none focus:ring-2 ${
      errors[field]
        ? 'border-[#FCA5A5] focus:border-[#FCA5A5] focus:ring-[#FCA5A5]/20'
        : 'border-[#E2E8F0] focus:border-[#E99A24] focus:ring-[#E99A24]/20'
    }${multiline ? ' resize-y' : ''}`;

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
          <form noValidate onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-[#173746]">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                maxLength={50}
                value={values.name}
                onChange={(event) => handleChange('name', event)}
                onBlur={() => handleBlur('name')}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'contact-name-error' : undefined}
                className={inputClassName('name')}
                placeholder="Your name"
              />
              {renderError('name')}
            </div>
            <div>
              <label htmlFor="contact-mobile" className="mb-1.5 block text-sm font-medium text-[#173746]">Mobile number</label>
              <input
                id="contact-mobile"
                name="mobile"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                maxLength={13}
                value={values.mobile}
                onChange={(event) => handleChange('mobile', event)}
                onBlur={() => handleBlur('mobile')}
                aria-invalid={Boolean(errors.mobile)}
                aria-describedby={errors.mobile ? 'contact-mobile-error' : undefined}
                className={inputClassName('mobile')}
                placeholder="Your mobile number"
              />
              {renderError('mobile')}
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-[#173746]">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                maxLength={254}
                value={values.email}
                onChange={(event) => handleChange('email', event)}
                onBlur={() => handleBlur('email')}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'contact-email-error' : undefined}
                className={inputClassName('email')}
                placeholder="you@example.com"
              />
              {renderError('email')}
            </div>
            <div>
              <label htmlFor="contact-description" className="mb-1.5 block text-sm font-medium text-[#173746]">Message</label>
              <textarea
                id="contact-description"
                name="description"
                rows={3}
                maxLength={1000}
                value={values.description}
                onChange={(event) => handleChange('description', event)}
                onBlur={() => handleBlur('description')}
                aria-invalid={Boolean(errors.description)}
                aria-describedby={errors.description ? 'contact-description-error' : undefined}
                className={inputClassName('description', true)}
                placeholder="How can we help with your journey?"
              />
              {renderError('description')}
            </div>
            {successMessage && (
              <p role="status" aria-live="polite" className="rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
                {successMessage}
              </p>
            )}
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
