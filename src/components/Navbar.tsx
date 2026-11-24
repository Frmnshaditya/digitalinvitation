import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND_CONFIG, buildConsultationUrl } from '../config/brand';
import { NAV_ITEMS } from '../data/siteData';
import { BrandLogo } from './BrandLogo';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  const whatsappOrderHref = buildConsultationUrl(
    `Halo ${BRAND_CONFIG.name}, saya ingin memesan undangan pernikahan digital. Boleh dibantu informasi dan pilihannya?`
  );

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E5E5E5]'
          : 'bg-white/90 backdrop-blur-sm border-b border-[#E5E5E5]/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Title */}
        <a
          href="#beranda"
          className="inline-flex items-center whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0A0A0A]"
        >
          <BrandLogo variant="light" size="md" />
        </a>

        {/* Zone 2: Navigation Links */}
        <nav aria-label="Navigasi Utama" className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#525252] hover:text-[#0A0A0A] transition-colors duration-150 relative py-1 whitespace-nowrap shrink-0 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-px after:bg-[#0A0A0A] hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0A0A0A]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary CTA + Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={whatsappOrderHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#0A0A0A] hover:bg-[#262626] transition-colors duration-150 rounded-md whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
          >
            Pesan Sekarang
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            className="lg:hidden inline-flex items-center justify-center min-w-[44px] min-h-[44px] text-[#0A0A0A] hover:bg-[#F5F5F5] rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-[#0A0A0A]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#E5E5E5] px-4 sm:px-6 py-5">
          <nav aria-label="Navigasi Mobile" className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="py-3 px-3 text-base font-medium text-[#0A0A0A] hover:bg-[#F5F5F5] rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-[#E5E5E5]">
              <a
                href={whatsappOrderHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white bg-[#0A0A0A] hover:bg-[#262626] rounded-md transition-colors"
              >
                Pesan Sekarang
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
