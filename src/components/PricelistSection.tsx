import { Check, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { buildPackageOrderUrl } from '../config/brand';
import { PRICING_PACKAGES, PricingPackage } from '../data/siteData';

interface PricelistSectionProps {
  highlightedPackageId: string | null;
}

function getMarkerClasses(variant?: PricingPackage['badgeVariant']) {
  if (variant === 'popular') {
    return 'bg-[#0A0A0A] text-white';
  }
  if (variant === 'exclusive') {
    return 'bg-[#262626] text-white';
  }
  return 'bg-[#F5F5F5] text-[#0A0A0A] border-b border-[#E5E5E5]';
}

export function PricelistSection({ highlightedPackageId }: PricelistSectionProps) {
  return (
    <section id="pricelist" className="bg-[#F5F5F5] py-16 md:py-24 border-y border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-sm font-medium text-[#525252] tracking-wide mb-3">
            Pricelist &amp; Paket Undangan
          </p>
          <h2
            className="font-sans font-semibold text-[#0A0A0A] leading-tight tracking-tight mb-4"
            style={{ fontSize: 'clamp(1.85rem, 3vw, 2.75rem)', textWrap: 'balance' }}
          >
            Investasi Terbaik untuk Momen Sekali Seumur Hidup
          </h2>
          <p className="text-base text-[#525252] leading-relaxed">
            Bandingkan seluruh fitur paket secara transparan. Setiap paket sudah termasuk pendampingan
            hingga undangan siap dibagikan kepada para tamu.
          </p>
        </div>

        {/* 4-Card Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {PRICING_PACKAGES.map((pkg, index) => {
            const isHighlighted = highlightedPackageId === pkg.id;
            const isFeatured = Boolean(pkg.featured);
            const isExclusive = pkg.id === 'exclusive';
            const orderUrl = buildPackageOrderUrl(pkg.name, pkg.price);

            return (
              <motion.article
                key={pkg.id}
                id={`paket-${pkg.id}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col justify-between bg-white rounded-lg overflow-hidden transition-all duration-200 ${
                  isHighlighted
                    ? 'border-2 border-[#0A0A0A] ring-2 ring-[#0A0A0A]/15'
                    : isFeatured
                      ? 'border-2 border-[#0A0A0A]'
                      : 'border border-[#E5E5E5]'
                }`}
              >
                <div>
                  {/* Editorial Package Marker Strip (Zero-Pill Rule Compliant) */}
                  {pkg.badge ? (
                    <div
                      className={`px-6 py-2.5 text-xs font-semibold tracking-wider uppercase text-center ${getMarkerClasses(
                        pkg.badgeVariant
                      )}`}
                    >
                      {pkg.badge}
                    </div>
                  ) : (
                    <div className="px-6 py-2.5 text-xs font-medium tracking-wider uppercase text-center bg-[#FAFAFA] text-[#525252] border-b border-[#E5E5E5]">
                      Paket Hemat
                    </div>
                  )}

                  <div className="p-6 sm:p-7">
                    <div className="mb-5 pb-5 border-b border-[#E5E5E5]">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="font-sans text-sm font-bold tracking-wider text-[#0A0A0A]">
                          {pkg.name}
                        </h3>
                        <span className="text-xs font-medium text-[#525252] whitespace-nowrap">
                          {pkg.domainNote}
                        </span>
                      </div>

                      <div className="flex items-baseline gap-1.5 my-3">
                        <span className="font-sans text-3xl sm:text-4xl font-semibold tracking-tight text-[#0A0A0A] tabular-nums">
                          {pkg.price}
                        </span>
                      </div>

                      <p className="text-sm sm:text-[15px] text-[#525252] leading-relaxed">
                        {pkg.description}
                      </p>
                    </div>

                    {/* Readable Checklist Benefits */}
                    <ul className="space-y-3" aria-label={`Fitur ${pkg.name}`}>
                      {pkg.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2.5">
                          <Check
                            className="w-4 h-4 text-[#0A0A0A] mt-1 shrink-0"
                            strokeWidth={2.2}
                            aria-hidden="true"
                          />
                          <span className="text-sm sm:text-[15px] text-[#171717] leading-relaxed">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Package Order Action */}
                <div className="p-6 sm:p-7 pt-2 mt-auto">
                  <a
                    href={orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A] ${
                      isFeatured || isExclusive
                        ? 'bg-[#0A0A0A] text-white hover:bg-[#262626]'
                        : 'bg-[#F5F5F5] text-[#0A0A0A] border border-[#D4D4D4] hover:bg-[#E5E5E5] hover:border-[#0A0A0A]'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span>Pesan Paket Ini</span>
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
