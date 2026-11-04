import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
}

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const styles = {
    primary: 'bg-[#D4AF66] text-[#080808] hover:bg-[#F0D69A]',
    secondary: 'border border-[#D4AF66] bg-transparent text-[#F0D69A] hover:bg-[#D4AF66]/10',
    ghost: 'text-[#F0D69A] hover:text-white',
  };

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-[0.14em] uppercase transition-all duration-300 ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
