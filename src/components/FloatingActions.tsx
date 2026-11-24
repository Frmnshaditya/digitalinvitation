import { useEffect, useState } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { BRAND_CONFIG, buildConsultationUrl } from '../config/brand';

export function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 420);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = buildConsultationUrl(
    `Halo ${BRAND_CONFIG.name}, saya ingin bertanya mengenai jasa pembuatan undangan pernikahan digital.`
  );

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2.5">
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Kembali ke atas"
          className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white text-[#0A0A0A] border border-[#D4D4D4] shadow-md hover:bg-[#F5F5F5] hover:border-[#0A0A0A] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#0A0A0A]"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Konsultasi via WhatsApp"
        className="inline-flex items-center gap-2 h-11 px-4 sm:px-5 rounded-full bg-[#0A0A0A] text-white border border-[#262626] shadow-lg hover:bg-[#262626] transition-colors duration-150 text-sm font-medium whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
      >
        <MessageCircle className="w-4 h-4 text-white shrink-0" />
        <span className="hidden sm:inline">Konsultasi WhatsApp</span>
        <span className="sm:hidden">WhatsApp</span>
      </a>
    </div>
  );
}
