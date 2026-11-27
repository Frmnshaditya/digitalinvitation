import { useState } from 'react';
import { ArrowUpRight, Instagram, Mail, MessageCircle, Music2 } from 'lucide-react';
import { BRAND_CONFIG, buildConsultationUrl } from '../config/brand';
import { PRICING_PACKAGES } from '../data/siteData';

export function ContactSection() {
  const [coupleName, setCoupleName] = useState('');
  const [selectedPkgId, setSelectedPkgId] = useState('standard');
  const [themeNote, setThemeNote] = useState('Modern Minimalis');

  const selectedPkg =
    PRICING_PACKAGES.find((p) => p.id === selectedPkgId) || PRICING_PACKAGES[1];

  const consultWhatsappUrl = coupleName.trim()
    ? buildConsultationUrl(
        `Halo ${BRAND_CONFIG.name}, saya ${coupleName.trim()}. Saya tertarik untuk memesan undangan pernikahan digital paket ${selectedPkg.name} dengan harga ${selectedPkg.price} (tema: ${themeNote}). Boleh saya mendapatkan informasi lebih lanjut?`
      )
    : buildConsultationUrl(
        `Halo, saya tertarik untuk memesan undangan pernikahan digital paket ${selectedPkg.name} dengan harga ${selectedPkg.price} (tema: ${themeNote}). Boleh saya mendapatkan informasi lebih lanjut?`
      );

  const directWhatsAppUrl = buildConsultationUrl(
    `Halo ${BRAND_CONFIG.name}, saya ingin berkonsultasi tentang konsep undangan pernikahan impian kami.`
  );

  return (
    <section id="kontak" className="bg-[#F5F5F5] py-16 md:py-24 border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Editorial Contact Info */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <p className="text-sm font-medium text-[#525252] tracking-wide mb-3">
                Kontak &amp; Konsultasi
              </p>
              <h2
                className="font-sans font-semibold text-[#0A0A0A] leading-tight tracking-tight mb-4"
                style={{ fontSize: 'clamp(1.85rem, 3vw, 2.75rem)', textWrap: 'balance' }}
              >
                Punya Konsep Undangan Impian?
              </h2>
              <p className="text-base text-[#525252] leading-relaxed max-w-xl">
                Ceritakan konsep dan kebutuhan undangan pernikahanmu kepada kami. Kami siap membantu
                mewujudkannya menjadi undangan digital yang berkesan.
              </p>
            </div>

            <div>
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-medium text-[#0A0A0A] bg-[#5BE2E7] hover:bg-[#43CFD5] rounded-md transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#0A0A0A]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Hubungi via WhatsApp</span>
              </a>
            </div>

            {/* Direct Contact Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#E5E5E5]">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white border border-[#E5E5E5] hover:border-[#5BE2E7] rounded-lg flex items-center justify-between gap-3 transition-colors group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <MessageCircle className="w-5 h-5 text-[#0A0A0A] shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-[#525252]">WhatsApp</p>
                    <p className="text-sm font-medium text-[#0A0A0A] truncate tabular-nums">
                      {BRAND_CONFIG.contact.whatsappDisplay}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#0A0A0A] group-hover:text-[#5BE2E7] opacity-60 group-hover:opacity-100 transition-colors shrink-0" />
              </a>

              <a
                href={BRAND_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white border border-[#E5E5E5] hover:border-[#5BE2E7] rounded-lg flex items-center justify-between gap-3 transition-colors group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Instagram className="w-5 h-5 text-[#0A0A0A] shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-[#525252]">Instagram</p>
                    <p className="text-sm font-medium text-[#0A0A0A] truncate">
                      {BRAND_CONFIG.contact.instagramHandle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#0A0A0A] group-hover:text-[#5BE2E7] opacity-60 group-hover:opacity-100 transition-colors shrink-0" />
              </a>

              <a
                href={BRAND_CONFIG.contact.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white border border-[#E5E5E5] hover:border-[#5BE2E7] rounded-lg flex items-center justify-between gap-3 transition-colors group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Music2 className="w-5 h-5 text-[#0A0A0A] shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-[#525252]">TikTok</p>
                    <p className="text-sm font-medium text-[#0A0A0A] truncate">
                      {BRAND_CONFIG.contact.tiktokHandle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#0A0A0A] group-hover:text-[#5BE2E7] opacity-60 group-hover:opacity-100 transition-colors shrink-0" />
              </a>

              <a
                href={`mailto:${BRAND_CONFIG.contact.email}`}
                className="p-4 bg-white border border-[#E5E5E5] hover:border-[#5BE2E7] rounded-lg flex items-center justify-between gap-3 transition-colors group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Mail className="w-5 h-5 text-[#0A0A0A] shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-[#525252]">Email</p>
                    <p className="text-sm font-medium text-[#0A0A0A] truncate">
                      {BRAND_CONFIG.contact.email}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#0A0A0A] group-hover:text-[#5BE2E7] opacity-60 group-hover:opacity-100 transition-colors shrink-0" />
              </a>
            </div>
          </div>

          {/* Right Quick Consultation Builder */}
          <div className="lg:col-span-6 bg-white border border-[#E5E5E5] rounded-lg p-6 sm:p-8">
            <h3 className="font-sans text-2xl font-semibold tracking-tight text-[#0A0A0A] mb-2">
              Mulai Konsultasi Singkat
            </h3>
            <p className="text-sm text-[#525252] leading-relaxed mb-6">
              Pilih paket dan nuansa tema yang diinginkan, lalu kirim langsung ke WhatsApp kami tanpa
              perlu mengetik ulang dari awal.
            </p>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="consult-name"
                  className="block text-sm font-medium text-[#0A0A0A] mb-1.5"
                >
                  Nama Pasangan / Pemesan
                </label>
                <input
                  id="consult-name"
                  type="text"
                  value={coupleName}
                  onChange={(e) => setCoupleName(e.target.value)}
                  placeholder="Contoh: Rani & Dimas"
                  className="w-full px-4 py-2.5 text-sm bg-white border border-[#D4D4D4] rounded-md text-[#0A0A0A] placeholder:text-[#737373] focus:outline-none focus:border-[#0A0A0A]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="consult-package"
                    className="block text-sm font-medium text-[#0A0A0A] mb-1.5"
                  >
                    Pilihan Paket
                  </label>
                  <select
                    id="consult-package"
                    value={selectedPkgId}
                    onChange={(e) => setSelectedPkgId(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-white border border-[#D4D4D4] rounded-md text-[#0A0A0A] focus:outline-none focus:border-[#0A0A0A]"
                  >
                    {PRICING_PACKAGES.map((pkg) => (
                      <option key={pkg.id} value={pkg.id}>
                        {pkg.name} ({pkg.price})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="consult-theme"
                    className="block text-sm font-medium text-[#0A0A0A] mb-1.5"
                  >
                    Preferensi Tema
                  </label>
                  <select
                    id="consult-theme"
                    value={themeNote}
                    onChange={(e) => setThemeNote(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-white border border-[#D4D4D4] rounded-md text-[#0A0A0A] focus:outline-none focus:border-[#0A0A0A]"
                  >
                    <option value="Modern Minimalis">Modern Minimalis</option>
                    <option value="Adat Jawa">Adat Jawa</option>
                    <option value="Adat Sunda">Adat Sunda</option>
                    <option value="Adat Minang">Adat Minang</option>
                    <option value="Elegant Luxury">Elegant Luxury</option>
                    <option value="Floral Romantic">Floral Romantic</option>
                    <option value="Custom Konsep Sendiri">Custom Konsep Sendiri</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={consultWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#0A0A0A] bg-[#5BE2E7] hover:bg-[#43CFD5] rounded-md transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Kirim Konsultasi via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
