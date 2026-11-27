import { useEffect, useState } from 'react';
import { BrandLogo } from './BrandLogo';

export function PageLoader() {
  const [phase, setPhase] = useState<'visible' | 'fading' | 'done'>('visible');

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setPhase('done');
      return;
    }

    const fadeTimer = window.setTimeout(() => setPhase('fading'), 450);
    const doneTimer = window.setTimeout(() => setPhase('done'), 900);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(doneTimer);
    };
  }, []);

  if (phase === 'done') {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-500 ease-out pointer-events-none ${
        phase === 'fading' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-3 text-center px-6">
        <BrandLogo variant="light" size="lg" />
        <div className="w-16 h-px bg-[#D4D4D4]" />
        <span className="text-xs tracking-widest uppercase text-[#525252]">
          Undangan Digital
        </span>
      </div>
    </div>
  );
}
