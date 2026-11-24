import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/siteData';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-medium text-[#525252] tracking-wide mb-3">
            Pertanyaan Umum
          </p>
          <h2
            className="font-sans font-semibold text-[#0A0A0A] leading-tight tracking-tight mb-4"
            style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.5rem)', textWrap: 'balance' }}
          >
            Hal yang Sering Ditanyakan Calon Pengantin
          </h2>
          <p className="text-base text-[#525252] leading-relaxed">
            Informasi ringkas seputar pemesanan, penyesuaian desain, fitur, hingga estimasi waktu
            pengerjaan.
          </p>
        </div>

        <div className="divide-y divide-[#E5E5E5] border-y border-[#E5E5E5]">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            const panelId = `faq-panel-${idx}`;
            const buttonId = `faq-button-${idx}`;

            return (
              <div key={item.question} className="py-1">
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleIndex(idx)}
                  className="w-full py-5 flex items-center justify-between gap-6 text-left group focus-visible:outline-2 focus-visible:outline-[#0A0A0A] rounded-sm"
                >
                  <span className="font-sans text-base sm:text-lg font-medium text-[#0A0A0A] group-hover:text-[#525252] transition-colors">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#0A0A0A] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="pb-5 pr-8 text-sm sm:text-base text-[#525252] leading-relaxed"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
