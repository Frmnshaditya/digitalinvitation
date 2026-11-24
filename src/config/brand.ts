/**
 * Konfigurasi Identitas Brand & Kontak
 * Ubah nilai di bawah ini untuk menyesuaikan nama brand, nomor WhatsApp, dan media sosial.
 */
export const BRAND_CONFIG = {
  name: 'digitalinvitation',
  tagline: 'Elegan dalam Tampilan, Praktis dalam Undangan.',
  year: 2026,
  contact: {
    // Gunakan format internasional tanpa tanda '+' atau spasi untuk tautan WhatsApp (contoh: 6281234567890)
    whatsappNumber: '6285285538963',
    whatsappDisplay: '+62 852-8553-8963',
    instagramHandle: '@digitalinvitation.id',
    instagramUrl: 'https://instagram.com/digitalinvitation.id',
    tiktokHandle: '@digitalinvitation.id',
    tiktokUrl: 'https://tiktok.com/@digitalinvitation.id',
    email: 'halo@digitalinvitation.id',
    studioCity: 'Jakarta & Melayani Seluruh Indonesia',
  },
} as const;

/**
 * Membuat tautan WhatsApp dengan pesan otomatis untuk pemesanan paket tertentu.
 */
export function buildPackageOrderUrl(packageName: string, price: string): string {
  const message = `Halo, saya tertarik untuk memesan undangan pernikahan digital paket ${packageName} dengan harga ${price}. Boleh saya mendapatkan informasi lebih lanjut?`;
  return `https://wa.me/${BRAND_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Membuat tautan WhatsApp untuk konsultasi umum atau tema khusus.
 */
export function buildConsultationUrl(customMessage?: string): string {
  const defaultMessage = `Halo ${BRAND_CONFIG.name}, saya ingin berkonsultasi mengenai pembuatan undangan pernikahan digital. Boleh dibantu informasinya?`;
  return `https://wa.me/${BRAND_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(customMessage || defaultMessage)}`;
}
