import { BRAND_CONFIG } from '../config/brand';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
}

export function BrandLogo({
  variant = 'light',
  size = 'md',
  showWordmark = true,
}: BrandLogoProps) {
  const isDark = variant === 'dark';

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8 sm:w-9 sm:h-9',
    lg: 'w-11 h-11',
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-xs sm:text-sm md:text-[15px]',
    lg: 'text-base sm:text-lg',
  };

  const primaryInk = isDark ? '#FFFFFF' : '#0A0A0A';
  const secondaryInk = isDark ? '#A3A3A3' : '#525252';
  const crestAccent = isDark ? '#D4D4D4' : '#262626';

  return (
    <span className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 select-none">
      {/* Bespoke Wedding Crest & Envelope Monogram SVG */}
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className={`${iconSizes[size]} shrink-0`}
      >
        {/* Arch frame */}
        <path
          d="M8 34V16C8 9.37258 13.3726 4 20 4C26.6274 4 32 9.37258 32 16V34H8Z"
          stroke={crestAccent}
          strokeWidth="1.35"
        />
        {/* Envelope base */}
        <rect
          x="11.5"
          y="16.5"
          width="17"
          height="12"
          rx="1.2"
          stroke={primaryInk}
          strokeWidth="1.25"
        />
        {/* Envelope flap */}
        <path
          d="M11.8 17L20 23.2L28.2 17"
          stroke={primaryInk}
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Wax seal / ring crest */}
        <circle cx="20" cy="11.5" r="2.2" stroke={crestAccent} strokeWidth="1.2" />
        <circle cx="20" cy="23.2" r="1.4" fill={primaryInk} />
      </svg>

      {showWordmark && (
        <span
          className={`font-sans ${textSizes[size]} uppercase tracking-[0.14em] leading-none`}
          aria-label={BRAND_CONFIG.name}
        >
          <span className="font-bold" style={{ color: primaryInk }}>
            digital
          </span>
          <span className="font-normal" style={{ color: secondaryInk }}>
            invitation
          </span>
        </span>
      )}
    </span>
  );
}
