import { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/siteData';
import { DemoPreviewModal } from './DemoPreviewModal';
import { EditorialImage } from './EditorialImage';

type FilterGroup =
  | 'Semua'
  | 'Basic Invitation'
  | 'Standard Invitation'
  | 'Premium Invitation'
  | 'Exclusive Invitation';

const FILTER_OPTIONS: FilterGroup[] = [
  'Semua',
  'Basic Invitation',
  'Standard Invitation',
  'Premium Invitation',
  'Exclusive Invitation',
];

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<FilterGroup>('Semua');
  const [selectedDemo, setSelectedDemo] = useState<PortfolioItem | null>(null);

  const filteredItems =
    activeFilter === 'Semua'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.filterGroup === activeFilter);

  return (
    <section id="portofolio" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 mb-10 md:mb-12">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#525252] tracking-wide mb-3">
              Portofolio &amp; Contoh Undangan
            </p>
            <h2
              className="font-sans font-semibold text-[#0A0A0A] leading-tight tracking-tight mb-3"
              style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.5rem)', textWrap: 'balance' }}
            >
              Ragam Tema Desain dari Modern Minimalis hingga Adat Nusantara
            </h2>
            <p className="text-sm sm:text-base text-[#525252] leading-relaxed">
              Seluruh pratinjau di bawah merupakan contoh undangan yang dapat disesuaikan
              dengan foto, warna, dan detail acaramu.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div
              role="tablist"
              aria-label="Filter kategori desain undangan"
              className="inline-flex flex-wrap items-center gap-1.5 p-1 bg-[#F5F5F5] border border-[#E5E5E5] rounded-lg"
            >
              {FILTER_OPTIONS.map((group) => {
                const isActive = activeFilter === group;
                return (
                  <button
                    key={group}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveFilter(group)}
                    className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#0A0A0A] ${
                      isActive
                        ? 'bg-[#5BE2E7] text-[#0A0A0A]'
                        : 'text-[#525252] hover:text-[#0A0A0A] hover:bg-[#5BE2E7]'
                    }`}
                  >
                    {group}
                  </button>
                );
              })}
            </div>

            {activeFilter === 'Basic Invitation' && (
              <a
                href="https://basicinvitation.digitalinvitation.biz.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-[#0A0A0A] bg-[#F5F5F5] hover:bg-[#5BE2E7] hover:border-[#5BE2E7] border border-[#D4D4D4] rounded-md transition-colors whitespace-nowrap shrink-0"
              >
                <span>Buka Website Contoh</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {activeFilter === 'Premium Invitation' && (
              <a
                href="https://premiumtamplate1.vowsss.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-[#0A0A0A] bg-[#F5F5F5] hover:bg-[#5BE2E7] hover:border-[#5BE2E7] border border-[#D4D4D4] rounded-md transition-colors whitespace-nowrap shrink-0"
              >
                <span>Buka Website Contoh</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Portfolio Grid / Empty State */}
        {filteredItems.length === 0 ? (
          <div className="bg-[#FAFAFA] border border-dashed border-[#D4D4D4] rounded-lg px-6 py-14 sm:py-16 text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-[#525252] mb-2">
              {activeFilter}
            </p>
            <h3 className="font-sans text-lg sm:text-xl font-semibold text-[#0A0A0A] tracking-tight mb-2">
              Belum ada contoh undangan
            </h3>
            <p className="text-sm text-[#525252] max-w-md mx-auto leading-relaxed mb-6">
              Data contoh untuk kategori {activeFilter} saat ini masih kosong dan akan segera ditambahkan.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setActiveFilter('Semua')}
                className="px-4 py-2 text-xs sm:text-sm font-medium text-[#0A0A0A] bg-[#5BE2E7] hover:bg-[#43CFD5] rounded-md transition-colors"
              >
                Lihat Semua
              </button>
              <a
                href="#pricelist"
                className="px-4 py-2 text-xs sm:text-sm font-medium text-[#0A0A0A] bg-white hover:bg-[#5BE2E7] hover:border-[#5BE2E7] border border-[#D4D4D4] rounded-md transition-colors"
              >
                Lihat Detail Paket
              </a>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredItems.map((item, index) => {
              const previewContent = item.isScreenshot ? (
                <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF6F4] border-b border-[#E5E5E5] p-2">
                  <EditorialImage
                    src={item.image}
                    alt={`Contoh website undangan digital ${item.title}`}
                    fallbackTitle={item.title}
                    className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  />
                </div>
              ) : (
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F5F5] border-b border-[#E5E5E5]">
                  <EditorialImage
                    src={item.image}
                    alt={`Contoh desain undangan digital tema ${item.category} - ${item.title}`}
                    fallbackTitle={item.title}
                    className={`w-full h-full object-cover grayscale-[20%] contrast-[1.03] ${
                      item.imagePosition || 'object-center'
                    } group-hover:scale-[1.03] transition-transform duration-500 ease-out`}
                  />
                  {/* Quiet Miniature Invitation Title Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-4 flex items-end justify-between gap-3">
                    <span className="font-script text-2xl sm:text-[1.75rem] leading-none text-white tracking-normal">
                      {item.demoPreview.coupleNames}
                    </span>
                    <div className="text-right font-sans">
                      <p className="text-[11px] text-white/90 font-medium leading-tight tabular-nums">
                        {item.demoPreview.weddingDate}
                      </p>
                      <p className="text-[11px] text-[#D4D4D4] leading-tight mt-0.5">
                        {item.demoPreview.city}
                      </p>
                    </div>
                  </div>
                </div>
              );

              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.45, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col justify-between bg-white border border-[#E5E5E5] rounded-lg overflow-hidden hover:border-[#5BE2E7] transition-colors duration-200"
                >
                  <div>
                    {/* Preview Image (clickable to demoUrl when available) */}
                    {item.demoUrl ? (
                      <a
                        href={item.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Buka contoh website ${item.title}`}
                        className="block focus-visible:outline-2 focus-visible:outline-[#0A0A0A]"
                      >
                        {previewContent}
                      </a>
                    ) : (
                      previewContent
                    )}

                    {/* Card Copy */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs text-[#525252] font-medium mb-2">
                        <span>{item.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>Contoh</span>
                      </div>
                      <h3 className="font-sans text-xl font-semibold text-[#0A0A0A] tracking-tight mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-[15px] text-[#525252] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="px-6 pb-6 pt-1">
                    {item.demoUrl ? (
                      <a
                        href={item.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-[#0A0A0A] bg-[#F5F5F5] hover:bg-[#5BE2E7] hover:border-[#5BE2E7] border border-[#D4D4D4] rounded-md transition-colors duration-150 whitespace-nowrap"
                      >
                        <ExternalLink className="w-4 h-4 text-[#0A0A0A]" />
                        <span>Lihat</span>
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setSelectedDemo(item)}
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-[#0A0A0A] bg-[#F5F5F5] hover:bg-[#5BE2E7] hover:border-[#5BE2E7] border border-[#D4D4D4] rounded-md transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#0A0A0A]"
                      >
                        <Eye className="w-4 h-4 text-[#0A0A0A]" />
                        <span>Lihat</span>
                      </button>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        )}
      </div>

      <DemoPreviewModal item={selectedDemo} onClose={() => setSelectedDemo(null)} />
    </section>
  );
}
