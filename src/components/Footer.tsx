import { Instagram, Mail, MessageCircle, Music2 } from 'lucide-react';
import { BRAND_CONFIG, buildConsultationUrl } from '../config/brand';
import { NAV_ITEMS } from '../data/siteData';
import { BrandLogo } from './BrandLogo';

export function Footer() {
  const whatsappUrl = buildConsultationUrl();

  return (
    <footer className="bg-[#0A0A0A] text-[#E5E5E5] pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#262626]">
          {/* Brand Summary */}
          <div className="md:col-span-5 space-y-4">
            <a href="#beranda" className="inline-flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              <BrandLogo variant="dark" size="lg" />
            </a>
            <p className="text-sm text-[#A3A3A3] leading-relaxed max-w-sm">
              Jasa pembuatan undangan pernikahan digital yang elegan, personal, dan praktis dibagikan.
              Membantu mengabadikan kisah istimewa setiap pasangan dalam tampilan berkelas.
            </p>
            <p className="text-xs text-[#D4D4D4]">{BRAND_CONFIG.contact.studioCity}</p>
          </div>

          {/* Navigation Mirror */}
          <div className="md:col-span-3">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-white mb-4">
              Navigasi
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[#A3A3A3] hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-white">
              Informasi Kontak &amp; Media Sosial
            </h3>
            <ul className="space-y-3 text-sm text-[#A3A3A3]">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-white shrink-0" />
                  <span className="tabular-nums">{BRAND_CONFIG.contact.whatsappDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND_CONFIG.contact.email}`}
                  className="inline-flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-white shrink-0" />
                  <span>{BRAND_CONFIG.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={BRAND_CONFIG.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4 text-white shrink-0" />
                  <span>Instagram: {BRAND_CONFIG.contact.instagramHandle}</span>
                </a>
              </li>
              <li>
                <a
                  href={BRAND_CONFIG.contact.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Music2 className="w-4 h-4 text-white shrink-0" />
                  <span>TikTok: {BRAND_CONFIG.contact.tiktokHandle}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737373]">
          <p>&copy; {BRAND_CONFIG.year} {BRAND_CONFIG.name}. All Rights Reserved.</p>
          <p>{BRAND_CONFIG.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
