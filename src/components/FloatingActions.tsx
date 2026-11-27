import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { buildConsultationUrl } from '../config/brand';

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

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

  void showBackToTop;

  const whatsappUrl = buildConsultationUrl();

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2.5">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Konsultasi via WhatsApp"
        className="group inline-flex items-center gap-2 h-11 px-4 sm:px-5 rounded-full bg-[#5BE2E7] text-[#0A0A0A] border border-[#5BE2E7] shadow-lg hover:bg-[#43CFD5] hover:border-[#43CFD5] transition-colors duration-150 text-sm font-medium whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
      >
        <MessageCircle className="w-4 h-4 text-[#0A0A0A] shrink-0" />
        <span className="hidden sm:inline">Konsultasi WhatsApp</span>
        <span className="sm:hidden">WhatsApp</span>
      </a>
    </div>
  );
}
