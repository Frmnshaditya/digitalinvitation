import { Eye, FileText, MessageCircle, PackageCheck, Palette, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { ORDER_STEPS, OrderStep } from '../data/siteData';

function StepIcon({ name }: { name: OrderStep['iconName'] }) {
  const iconClass = 'w-5 h-5 text-[#0A0A0A]';
  switch (name) {
    case 'package':
      return <PackageCheck className={iconClass} strokeWidth={1.7} />;
    case 'message':
      return <MessageCircle className={iconClass} strokeWidth={1.7} />;
    case 'file':
      return <FileText className={iconClass} strokeWidth={1.7} />;
    case 'palette':
      return <Palette className={iconClass} strokeWidth={1.7} />;
    case 'eye':
      return <Eye className={iconClass} strokeWidth={1.7} />;
    case 'send':
      return <Send className={iconClass} strokeWidth={1.7} />;
  }
}

export function OrderFlowSection() {
  return (
    <section id="alur-pemesanan" className="bg-[#F5F5F5] py-16 md:py-24 border-y border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-sm font-medium text-[#525252] tracking-wide mb-3">
            Alur Pemesanan
          </p>
          <h2
            className="font-sans font-semibold text-[#0A0A0A] leading-tight tracking-tight mb-4"
            style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.5rem)', textWrap: 'balance' }}
          >
            Enam Langkah Mudah Menuju Undangan Digital Impianmu
          </h2>
          <p className="text-base text-[#525252] leading-relaxed">
            Proses pemesanan dirancang ringkas dan terarah agar kamu bisa fokus mempersiapkan hari
            bahagia tanpa repot.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ORDER_STEPS.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-7 bg-white border border-[#E5E5E5] rounded-lg flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-md bg-[#F5F5F5] border border-[#E5E5E5] flex items-center justify-center">
                  <StepIcon name={item.iconName} />
                </div>
                <span className="font-mono text-sm font-medium text-[#737373] tabular-nums">
                  {item.step}
                </span>
              </div>

              <div>
                <h3 className="font-sans text-xl font-semibold text-[#0A0A0A] tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-[#525252] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
