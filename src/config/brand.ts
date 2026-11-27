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
    whatsappNumber: '628138012580',
    whatsappDisplay: '+62 813-8012-580',
    instagramHandle: '@vowsss.id',
    instagramUrl: 'https://www.instagram.com/vowsss.id?bqrl=M28yOW44YjBob3Qy',
    tiktokHandle: '@vowsss.id',
    tiktokUrl: 'https://www.tiktok.com/@vowsss.id?_r=1&_t=ZS-9BkbcmOvbqZ',
    email: 'Vowsss.id@gmail.com',
    studioCity: 'Jakarta & Melayani Seluruh Indonesia',
  },
} as const;

/**
 * Membuat tautan WhatsApp dengan pesan otomatis untuk pemesanan paket tertentu.
 */
export function buildPackageOrderUrl(packageName: string, price: string): string {
  const message = `Halo, saya tertarik untuk memesan undangan digital paket ${packageName} dengan harga ${price}. Boleh saya mendapatkan informasi lebih lanjut?`;
  return `https://wa.me/${BRAND_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Membuat tautan WhatsApp untuk konsultasi umum atau tema khusus.
 */
export function buildConsultationUrl(customMessage?: string): string {
  const defaultMessage =
    'Halo VowsssDigital!\n\nSaya tertarik untuk menggunakan jasa pembuatan undangan digital. Boleh minta informasi mengenai pilihan desain, fitur yang tersedia, serta daftar harga paket undangannya?\n\nTerima kasih!';
  return `https://wa.me/${BRAND_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(customMessage || defaultMessage)}`;
}
