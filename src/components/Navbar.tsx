import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND_CONFIG, buildConsultationUrl } from '../config/brand';
import { NAV_ITEMS } from '../data/siteData';
import { BrandLogo } from './BrandLogo';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeNavHref, setActiveNavHref] = useState<string | null>(null);
  const [orderActive, setOrderActive] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setActiveNavHref(href);
    setOrderActive(false);
    setMobileOpen(false);
  };

  const handleOrderClick = () => {
    setActiveNavHref(null);
    setOrderActive(true);
    setMobileOpen(false);
  };

  const whatsappOrderHref = buildConsultationUrl(
    `Halo ${BRAND_CONFIG.name}, saya ingin memesan undangan pernikahan digital. Boleh dibantu informasi dan pilihannya?`
  );

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
        scrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#262626]'
          : 'bg-[#0A0A0A] border-b border-[#262626]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Title */}
        <a
          href="#beranda"
          onClick={() => handleNavClick('#beranda')}
          className="inline-flex items-center whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5BE2E7]"
        >
          <BrandLogo variant="dark" size="md" />
        </a>

        {/* Zone 2: Navigation Links */}
        <nav aria-label="Navigasi Utama" className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => {
            const isActive = activeNavHref === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm font-medium transition-colors duration-150 relative py-1 whitespace-nowrap shrink-0 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:bg-[#5BE2E7] after:transition-all after:duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5BE2E7] ${
                  isActive
                    ? 'text-[#5BE2E7] after:w-full'
                    : 'text-white hover:text-[#5BE2E7] active:text-[#5BE2E7] after:w-0 hover:after:w-full'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary CTA + Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={whatsappOrderHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleOrderClick}
            className={`hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium bg-[#171717] border transition-colors duration-150 rounded-md whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5BE2E7] ${
              orderActive
                ? 'text-[#5BE2E7] border-[#5BE2E7]'
                : 'text-white border-white/25 hover:text-[#5BE2E7] hover:border-[#5BE2E7] active:text-[#5BE2E7] active:border-[#5BE2E7]'
            }`}
          >
            Pesan Sekarang
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            className="lg:hidden inline-flex items-center justify-center min-w-[44px] min-h-[44px] text-white hover:bg-[#5BE2E7] hover:text-[#0A0A0A] rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-[#5BE2E7]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0A0A0A] border-t border-[#262626] px-4 sm:px-6 py-5">
          <nav aria-label="Navigasi Mobile" className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeNavHref === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`py-3 px-3 text-base font-medium rounded-md transition-colors ${
                    isActive
                      ? 'text-[#5BE2E7] bg-white/5'
                      : 'text-white hover:text-[#5BE2E7] hover:bg-white/5 active:text-[#5BE2E7]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-3 mt-2 border-t border-[#262626]">
              <a
                href={whatsappOrderHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleOrderClick}
                className={`w-full inline-flex items-center justify-center px-5 py-3 text-sm font-medium bg-[#171717] border rounded-md transition-colors ${
                  orderActive
                    ? 'text-[#5BE2E7] border-[#5BE2E7]'
                    : 'text-white border-white/25 hover:text-[#5BE2E7] hover:border-[#5BE2E7] active:text-[#5BE2E7] active:border-[#5BE2E7]'
                }`}
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
