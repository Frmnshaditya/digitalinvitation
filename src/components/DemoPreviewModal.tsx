import { useEffect, useState } from 'react';
import { Calendar, ExternalLink, Heart, MapPin, MessageCircle, X } from 'lucide-react';
import { BRAND_CONFIG, buildConsultationUrl } from '../config/brand';
import { PortfolioItem } from '../data/siteData';
import { EditorialImage } from './EditorialImage';

interface DemoPreviewModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export function DemoPreviewModal({ item, onClose }: DemoPreviewModalProps) {
  const [guestName, setGuestName] = useState('');
  const [attendance, setAttendance] = useState<'Hadir' | 'Berhalangan'>('Hadir');
  const [rsvpSent, setRsvpSent] = useState(false);

  useEffect(() => {
    setGuestName('');
    setAttendance('Hadir');
    setRsvpSent(false);
  }, [item]);

  useEffect(() => {
    if (!item) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose]);

  if (!item) return null;

  const { demoPreview } = item;
  const whatsappOrderUrl = buildConsultationUrl(
    `Halo ${BRAND_CONFIG.name}, saya tertarik memesan undangan digital dengan tema "${item.title}" (${item.category}). Boleh saya konsultasikan detailnya?`
  );

  const handleDemoRsvp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;
    setRsvpSent(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white border border-[#E5E5E5] rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-5 sm:px-7 py-4 bg-white/95 backdrop-blur-md border-b border-[#E5E5E5]">
          <div>
            <p className="text-xs font-medium text-[#525252]">
              {item.category} · Contoh Demo Interaktif
            </p>
            <h3 id="demo-modal-title" className="font-sans text-xl sm:text-2xl font-semibold tracking-tight text-[#0A0A0A]">
              {item.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup pratinjau demo"
            className="inline-flex items-center justify-center min-w-[40px] min-h-[40px] rounded-md text-[#525252] hover:text-[#0A0A0A] hover:bg-[#5BE2E7] transition-colors focus-visible:outline-2 focus-visible:outline-[#0A0A0A]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Interactive Invitation Preview Canvas */}
        <div className="p-5 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Simulated Invitation Mobile Frame */}
          <div className="lg:col-span-7 rounded-lg border border-[#E5E5E5] overflow-hidden" style={{ backgroundColor: demoPreview.surfaceHex, color: demoPreview.inkHex }}>
            <div className="relative h-56 sm:h-64 overflow-hidden">
              <EditorialImage
                src={item.image}
                alt={`Preview tema ${item.title}`}
                fallbackTitle={item.title}
                className={`w-full h-full object-cover grayscale-[20%] contrast-[1.03] ${item.imagePosition || 'object-center'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="font-sans text-xs tracking-widest uppercase opacity-90 mb-2">
                  {demoPreview.motifLabel}
                </span>
                <h4 className="font-script text-4xl sm:text-5xl leading-tight text-white">
                  {demoPreview.coupleNames}
                </h4>
              </div>
            </div>

            <div className="p-6 space-y-6 font-sans">
              <p className="font-sans text-sm sm:text-base leading-relaxed text-center opacity-90 border-b border-[#E5E5E5] pb-5">
                “{demoPreview.quote}”
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-sans">
                <div className="p-4 rounded-md bg-white border border-[#E5E5E5]">
                  <div className="flex items-center gap-2 font-medium mb-1" style={{ color: demoPreview.accentHex }}>
                    <Calendar className="w-4 h-4" />
                    <span>Tanggal Acara</span>
                  </div>
                  <p className="text-[#0A0A0A] font-medium tabular-nums">{demoPreview.weddingDate}</p>
                  <p className="text-xs text-[#525252] mt-0.5 tabular-nums">09.00 WIB — Selesai</p>
                </div>

                <div className="p-4 rounded-md bg-white border border-[#E5E5E5]">
                  <div className="flex items-center gap-2 font-medium mb-1" style={{ color: demoPreview.accentHex }}>
                    <MapPin className="w-4 h-4" />
                    <span>Lokasi</span>
                  </div>
                  <p className="text-[#0A0A0A] font-medium">{demoPreview.venue}</p>
                  <p className="text-xs text-[#525252] mt-0.5">{demoPreview.city}</p>
                </div>
              </div>

              {/* Interactive RSVP Demo Preview */}
              <div className="p-4 rounded-md bg-white border border-[#E5E5E5]">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#525252] mb-3">
                  Simulasi RSVP Tamu (Demo)
                </p>
                {rsvpSent ? (
                  <div className="flex items-center gap-2.5 text-sm text-[#0A0A0A] py-2">
                    <Heart className="w-4 h-4 text-[#0A0A0A] shrink-0" />
                    <span>
                      Terima kasih, <strong>{guestName}</strong>. Konfirmasi ({attendance}) tercatat pada pratinjau demo ini.
                    </span>
                  </div>
                ) : (
                  <form onSubmit={handleDemoRsvp} className="flex flex-col sm:flex-row gap-2.5">
                    <input
                      type="text"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="Nama tamu..."
                      required
                      className="flex-1 px-3 py-2 text-sm bg-white border border-[#D4D4D4] rounded-md text-[#0A0A0A] focus:outline-none focus:border-[#0A0A0A]"
                    />
                    <select
                      aria-label="Status kehadiran"
                      value={attendance}
                      onChange={(e) => setAttendance(e.target.value as 'Hadir' | 'Berhalangan')}
                      className="px-3 py-2 text-sm bg-white border border-[#D4D4D4] rounded-md text-[#0A0A0A] focus:outline-none focus:border-[#0A0A0A]"
                    >
                      <option value="Hadir">Hadir</option>
                      <option value="Berhalangan">Berhalangan</option>
                    </select>
                    <button
                      type="submit"
                      className="px-4 py-2 text-sm font-medium text-[#0A0A0A] bg-[#5BE2E7] hover:bg-[#43CFD5] rounded-md transition-colors whitespace-nowrap"
                    >
                      Coba Kirim
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Demo Details & Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-[#F5F5F5] border border-[#E5E5E5] rounded-md">
                <p className="text-xs font-semibold text-[#0A0A0A] mb-1">
                  Penanda Demo Contoh
                </p>
                <p className="text-sm text-[#525252] leading-relaxed">
                  Tampilan ini merupakan contoh simulasi desain tema <strong>{item.category}</strong>.
                  Nama, foto, musik latar, serta susunan acara akan disesuaikan sepenuhnya
                  dengan data acaramu.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-[#0A0A0A] mb-1.5">Deskripsi Tema</h4>
                <p className="text-sm text-[#525252] leading-relaxed">{item.description}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-[#0A0A0A] mb-1.5">Rekomendasi Paket</h4>
                <p className="text-sm text-[#0A0A0A] font-medium">{item.recommendedPackage}</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-4 border-t border-[#E5E5E5]">
              <a
                href={whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-[#0A0A0A] bg-[#5BE2E7] hover:bg-[#43CFD5] rounded-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pesan Tema Ini via WhatsApp</span>
              </a>

              {item.demoUrl ? (
                <a
                  href={item.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-[#0A0A0A] bg-[#F5F5F5] border border-[#D4D4D4] hover:bg-[#5BE2E7] hover:border-[#5BE2E7] rounded-md transition-colors"
                >
                  <span>Buka Tautan Demo Penuh</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-[#525252] hover:text-[#0A0A0A] bg-transparent border border-[#E5E5E5] hover:bg-[#5BE2E7] hover:border-[#5BE2E7] rounded-md transition-colors"
                >
                  Kembali ke Galeri Portofolio
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
