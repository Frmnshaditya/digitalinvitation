import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import { ABOUT_ADVANTAGES, ABOUT_IMAGE } from '../data/siteData';
import { EditorialImage } from './EditorialImage';

export function AboutSection() {
  return (
    <section id="tentang-kami" className="bg-[#F5F5F5] py-16 md:py-24 border-y border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Editorial Craft Photography */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex"
          >
            <div className="w-full p-2.5 bg-white border border-[#E5E5E5] rounded-lg">
              <div className="w-full h-[320px] sm:h-[400px] lg:h-full overflow-hidden rounded-md bg-[#E5E5E5]">
                <EditorialImage
                  src={ABOUT_IMAGE}
                  alt="Detail undangan pernikahan dengan pita sutra, segel lilin, dan bunga mawar putih"
                  fallbackTitle="Keindahan Detail Undangan"
                  className="w-full h-full object-cover grayscale-[20%] contrast-[1.03]"
                />
              </div>
            </div>
          </motion.div>

          {/* Brand Story & Advantages */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <p className="text-sm font-medium text-[#525252] tracking-wide mb-3">
              Tentang Kami
            </p>
            <h2
              className="font-sans font-semibold text-[#0A0A0A] leading-tight tracking-tight mb-5"
              style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.5rem)', textWrap: 'balance' }}
            >
              Menyampaikan Kabar Bahagia dengan Cara yang Lebih Personal dan Berkesan
            </h2>
            <p className="text-base text-[#525252] leading-relaxed mb-8 max-w-2xl">
              Kami percaya bahwa setiap pernikahan memiliki cerita yang istimewa. Melalui undangan
              pernikahan digital, kami ingin membantu setiap pasangan menyampaikan kabar bahagia
              dengan cara yang lebih praktis, menarik, dan berkesan — didukung beragam pilihan
              desain dan fitur yang dapat disesuaikan.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-6 border-t border-[#E5E5E5]">
              {ABOUT_ADVANTAGES.map((adv) => (
                <div key={adv.title} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" strokeWidth={2.5} />
                  </span>
                  <div>
                    <h3 className="font-sans text-sm sm:text-base font-semibold text-[#0A0A0A] mb-1">
                      {adv.title}
                    </h3>
                    <p className="text-sm text-[#525252] leading-relaxed">{adv.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
