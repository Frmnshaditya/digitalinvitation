import { ArrowDownRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES_LIST } from '../data/siteData';

interface ServicesSectionProps {
  onSelectPackage: (packageId: string) => void;
}

export function ServicesSection({ onSelectPackage }: ServicesSectionProps) {
  const handleDetailClick = (packageId: string) => {
    onSelectPackage(packageId);
    const pricelistEl = document.getElementById('pricelist');
    if (pricelistEl) {
      pricelistEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="layanan" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#525252] tracking-wide mb-3">
              Layanan Kami
            </p>
            <h2
              className="font-sans font-semibold text-[#0A0A0A] leading-tight tracking-tight"
              style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.5rem)', textWrap: 'balance' }}
            >
              Pilihan Layanan Undangan Digital Sesuai Kebutuhan Acaramu
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#525252] max-w-md leading-relaxed">
            Dari undangan ringkas yang informatif hingga rancangan kustom penuh dengan integrasi
            fitur khusus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {SERVICES_LIST.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between p-6 sm:p-7 bg-white border border-[#E5E5E5] rounded-lg hover:border-[#0A0A0A] transition-colors duration-200"
            >
              <div>
                <span className="font-mono text-sm font-medium text-[#737373] tabular-nums block mb-4">
                  {service.number}.
                </span>
                <h3 className="font-sans text-xl font-semibold text-[#0A0A0A] tracking-tight mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-[#525252] leading-relaxed mb-4">
                  {service.summary}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-[#E5E5E5] flex flex-col gap-4">
                <p className="text-xs font-medium text-[#525252]">{service.highlight}</p>
                <button
                  type="button"
                  onClick={() => handleDetailClick(service.packageId)}
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium text-[#0A0A0A] bg-[#F5F5F5] hover:bg-[#E5E5E5] rounded-md transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#0A0A0A]"
                >
                  <span>Lihat Detail Paket</span>
                  <ArrowDownRight className="w-4 h-4 text-[#0A0A0A]" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
