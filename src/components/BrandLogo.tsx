import { BRAND_CONFIG } from '../config/brand';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
}

export function BrandLogo({
  size = 'md',
  showWordmark = true,
}: BrandLogoProps) {
  const iconSizes = {
    sm: 'h-7',
    md: 'h-9 sm:h-10',
    lg: 'h-12 sm:h-14',
  };

  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl sm:text-[1.75rem]',
    lg: 'text-[2rem] sm:text-[2.35rem]',
  };

  return (
    <span className="inline-flex items-center gap-3 whitespace-nowrap shrink-0 select-none">
      <img
        src="/brand-logo.png"
        alt={BRAND_CONFIG.name}
        className={`${iconSizes[size]} w-auto object-contain shrink-0`}
      />

      {showWordmark && (
        <span
          className={`font-sans ${textSizes[size]} font-extrabold uppercase tracking-[0.06em] leading-none`}
          style={{ color: '#5BE2E7' }}
          aria-label="digital"
        >
          digital
        </span>
      )}
    </span>
  );
}
