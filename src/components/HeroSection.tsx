import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { BRAND_CONFIG, buildConsultationUrl } from '../config/brand';
import { HERO_IMAGE } from '../data/siteData';
import { EditorialImage } from './EditorialImage';

const HERO_TRUST_POINTS = [
  { label: '04 Pilihan Paket', detail: 'Mulai dari Rp50.000' },
  { label: '06+ Kategori Tema', detail: 'Modern hingga Adat Nusantara' },
  { label: '100% Responsif', detail: 'Nyaman di Smartphone & Desktop' },
  { label: 'Konsultasi Langsung', detail: 'Pendampingan Desain Personal' },
];

export function HeroSection() {
  const consultationHref = buildConsultationUrl(
    `Halo ${BRAND_CONFIG.name}, saya ingin konsultasi mengenai pembuatan undangan pernikahan digital.`
  );

  return (
    <section id="beranda" className="bg-white pt-8 pb-12 md:pt-12 md:pb-16 lg:pt-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Editorial Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center py-2 lg:py-8"
          >
            <p className="text-sm font-medium text-[#525252] tracking-wide mb-5 flex items-center gap-3">
              <span className="w-8 h-px bg-[#0A0A0A]" aria-hidden="true" />
              <span>{BRAND_CONFIG.tagline}</span>
            </p>

            <h1
              className="font-sans font-semibold text-[#0A0A0A] leading-[1.08] tracking-tight mb-6 max-w-2xl"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.65rem)', textWrap: 'balance' }}
            >
              Abadikan Momen Istimewamu dalam Sebuah Undangan Digital.
            </h1>

            <p className="text-base sm:text-lg text-[#525252] leading-relaxed max-w-xl mb-8">
              Hadirkan undangan pernikahan yang indah, personal, dan mudah dibagikan. Kami membantu
              mewujudkan undangan digital sesuai cerita dan keinginanmu.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#pricelist"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-medium text-white bg-[#0A0A0A] hover:bg-[#262626] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
              >
                <span>Lihat Pricelist</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={consultationHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-medium text-[#0A0A0A] bg-white border border-[#D4D4D4] hover:border-[#0A0A0A] hover:bg-[#F5F5F5] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
              >
                <MessageCircle className="w-4 h-4 text-[#0A0A0A]" />
                <span>Konsultasi Sekarang</span>
              </a>
            </div>
          </motion.div>

          {/* Right Visual Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex"
          >
            <div className="w-full p-2.5 bg-white border border-[#E5E5E5] rounded-lg">
              <div className="relative w-full h-[380px] sm:h-[460px] lg:h-full lg:min-h-[500px] overflow-hidden rounded-md bg-[#F5F5F5]">
                <EditorialImage
                  src={HERO_IMAGE}
                  alt="Pasangan pengantin dalam balutan busana ivory elegan di taman bernuansa romantis"
                  fallbackTitle="Undangan Pernikahan Digital"
                  priority
                  className="w-full h-full object-cover object-top grayscale-[18%] contrast-[1.03]"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Trust & Summary Row Below Split */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-[#E5E5E5] grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {HERO_TRUST_POINTS.map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <span className="font-sans text-lg sm:text-xl font-semibold text-[#0A0A0A] tabular-nums tracking-tight">
                {item.label}
              </span>
              <span className="text-sm text-[#525252]">{item.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
