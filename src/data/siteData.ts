export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  summary: string;
  highlight: string;
  packageId: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  badge?: string;
  badgeVariant?: 'popular' | 'custom' | 'exclusive';
  description: string;
  domainNote: string;
  featured?: boolean;
  benefits: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category:
    | 'Contoh Basic Invitation'
    | 'Modern Minimalis'
    | 'Adat Jawa'
    | 'Adat Sunda'
    | 'Adat Minang'
    | 'Elegant Luxury'
    | 'Floral Romantic';
  filterGroup: 'Contoh Basic Invitation' | 'Modern Minimalis' | 'Adat Nusantara' | 'Luxury & Floral';
  description: string;
  image: string;
  imagePosition?: string;
  isScreenshot?: boolean;
  demoUrl?: string; // Isi dengan URL undangan asli jika sudah tersedia
  recommendedPackage: string;
  demoPreview: {
    coupleNames: string;
    weddingDate: string;
    venue: string;
    city: string;
    quote: string;
    accentHex: string;
    surfaceHex: string;
    inkHex: string;
    motifLabel: string;
  };
}

export interface OrderStep {
  step: string;
  title: string;
  description: string;
  iconName: 'package' | 'message' | 'file' | 'palette' | 'eye' | 'send';
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang Kami', href: '#tentang-kami' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Pricelist', href: '#pricelist' },
  { label: 'Portofolio', href: '#portofolio' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontak', href: '#kontak' },
];

export const HERO_IMAGE = '/src/assets/images/hero_bride_groom_1795512304440.jpg';
export const ABOUT_IMAGE = '/src/assets/images/about_editorial_craft_1795512305408.jpg';

export const ABOUT_ADVANTAGES: { title: string; detail: string }[] = [
  {
    title: 'Desain menarik dan elegan',
    detail: 'Tipografi modern yang presisi, tata letak bersih, dan nuansa visual romantis yang memanjakan mata tamu.',
  },
  {
    title: 'Pilihan paket sesuai kebutuhan',
    detail: 'Tersedia empat tingkatan paket yang transparan, mulai dari undangan informatif hingga desain eksklusif.',
  },
  {
    title: 'Mudah dibagikan melalui WhatsApp',
    detail: 'Cukup satu tautan praktis untuk dikirimkan kepada keluarga, sahabat, dan kolega dalam hitungan detik.',
  },
  {
    title: 'Bisa diakses melalui smartphone',
    detail: 'Dioptimalkan agar tampil rapi dan nyaman dibuka dari layar ponsel, tablet, maupun desktop.',
  },
  {
    title: 'Pilihan desain sesuai tema pernikahan',
    detail: 'Mendukung konsep modern minimalis, floral romantis, hingga sentuhan adat Jawa, Sunda, dan Minang.',
  },
  {
    title: 'Pelayanan dan konsultasi dengan pelanggan',
    detail: 'Pendampingan langsung dan komunikatif dari tahap pemilihan konsep hingga undangan siap dibagikan.',
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'srv-basic',
    number: '01',
    title: 'Basic Invitation',
    summary: 'Undangan sederhana dan informatif.',
    highlight: 'Domain .my.id · Pilihan Tema & Adat',
    packageId: 'basic',
  },
  {
    id: 'srv-standard',
    number: '02',
    title: 'Standard Invitation',
    summary: 'Undangan dengan fitur lebih lengkap dan interaktif.',
    highlight: 'Galeri · Musik · RSVP · Amplop Digital',
    packageId: 'standard',
  },
  {
    id: 'srv-premium',
    number: '03',
    title: 'Premium Invitation',
    summary: 'Undangan dengan desain khusus sesuai keinginan pelanggan.',
    highlight: 'Custom Desain · Domain .id · Love Story',
    packageId: 'premium',
  },
  {
    id: 'srv-exclusive',
    number: '04',
    title: 'Exclusive Invitation',
    summary: 'Undangan eksklusif dengan desain dan fitur yang lebih fleksibel.',
    highlight: 'Domain .com · Payment Gateway · Custom Penuh',
    packageId: 'exclusive',
  },
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'basic',
    name: 'BASIC INVITATION',
    price: 'Rp50.000',
    description: 'Undangan sederhana, praktis, dan tetap elegan.',
    domainNote: 'Domain .my.id',
    benefits: [
      'Informasi acara pernikahan',
      'Nama kedua mempelai',
      'Tanggal dan lokasi acara',
      'Integrasi Google Maps',
      'Countdown pernikahan',
      'Link undangan yang dapat dibagikan',
      'Website menggunakan domain .my.id',
      'Template desain yang telah disediakan',
      'Pilihan tema atau adat pernikahan seperti Jawa, Sunda, Minang, Modern, dan lainnya',
      'Template disesuaikan dengan tema pilihan pelanggan',
    ],
  },
  {
    id: 'standard',
    name: 'STANDARD INVITATION',
    price: 'Rp100.000',
    badge: 'Paling Populer',
    badgeVariant: 'popular',
    featured: true,
    description: 'Undangan lebih lengkap dengan sentuhan interaktif.',
    domainNote: 'Domain .my.id',
    benefits: [
      'Seluruh fitur Basic Invitation',
      'Galeri foto kedua mempelai',
      'Musik latar',
      'RSVP konfirmasi kehadiran',
      'Buku tamu digital',
      'Amplop digital',
      'Desain undangan lebih interaktif',
      'Website menggunakan domain .my.id',
      'Template desain yang telah disediakan',
      'Pilihan tema atau adat pernikahan',
      'Template disesuaikan dengan tema pilihan pelanggan',
    ],
  },
  {
    id: 'premium',
    name: 'PREMIUM INVITATION',
    price: 'Rp150.000',
    badge: 'Desain Custom',
    badgeVariant: 'custom',
    description: 'Undangan dengan desain khusus sesuai keinginan pasangan.',
    domainNote: 'Domain .id',
    benefits: [
      'Seluruh fitur Standard Invitation',
      'Custom desain berdasarkan tema dan referensi pelanggan',
      'Kesepakatan konsep desain sebelum pengerjaan',
      'Penyesuaian warna, font, elemen visual, dan tata letak',
      'Animasi dan transisi',
      'Love Story',
      'Video prewedding',
      'Integrasi WhatsApp',
      'Penambahan fitur tambahan sesuai kesepakatan dan kemampuan sistem',
      'Website menggunakan domain .id',
      'Maksimal 2 kali revisi desain setelah konsep disepakati',
    ],
  },
  {
    id: 'exclusive',
    name: 'EXCLUSIVE INVITATION',
    price: 'Rp250.000',
    badge: 'Paket Eksklusif',
    badgeVariant: 'exclusive',
    description: 'Undangan eksklusif dengan kebebasan desain dan fitur yang lebih fleksibel.',
    domainNote: 'Domain .com',
    benefits: [
      'Seluruh fitur Basic, Standard, dan Premium Invitation',
      'Custom desain eksklusif',
      'Konsultasi dan kesepakatan konsep desain',
      'Penyesuaian tampilan, layout, warna, font, dan elemen visual',
      'Desain berdasarkan referensi atau konsep khusus pelanggan',
      'Penambahan fitur khusus sesuai kebutuhan dan kesepakatan',
      'Pengembangan fungsi dan interaksi tambahan',
      'Integrasi Payment Gateway',
      'Pengiriman hadiah digital melalui website',
      'Dana hadiah diteruskan ke rekening pemilik acara sesuai ketentuan penyedia pembayaran',
      'Website menggunakan domain .com',
      'Revisi dan penyesuaian desain sesuai kesepakatan sebelum publikasi',
      'Konsultasi kebutuhan fitur sebelum pengerjaan',
    ],
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'contoh-basic-invitation',
    title: 'Naufal & Amanda — Basic Invitation',
    category: 'Contoh Basic Invitation',
    filterGroup: 'Contoh Basic Invitation',
    description:
      'Contoh nyata website undangan digital paket Basic Invitation lengkap dengan sampul elegan, nama tamu undangan, tanggal acara, dan tautan subdomain aktif.',
    image: '/src/assets/images/basic_invitation_naufal_amanda_1795520097626.jpg',
    isScreenshot: true,
    demoUrl: 'https://adatjawa.digitalinvitation.biz.id/#mempelai',
    recommendedPackage: 'Basic Invitation',
    demoPreview: {
      coupleNames: 'Naufal & Amanda',
      weddingDate: 'Minggu, 20 Desember 2026',
      venue: 'Lokasi Acara Pernikahan',
      city: 'Adat Jawa',
      quote: 'The Wedding Of Naufal & Amanda.',
      accentHex: '#0A0A0A',
      surfaceHex: '#FFFFFF',
      inkHex: '#0A0A0A',
      motifLabel: 'Basic Invitation',
    },
  },
  {
    id: 'demo-modern-minimalis',
    title: 'Serene Ivory Arch',
    category: 'Modern Minimalis',
    filterGroup: 'Modern Minimalis',
    description: 'Komposisi editorial bersih dengan tipografi serif lapang, palet ivory lembut, dan galeri simetris.',
    image: '/src/assets/images/portfolio_modern_minimalis_1795512305658.jpg',
    imagePosition: 'object-center',
    demoUrl: '',
    recommendedPackage: 'Standard Invitation',
    demoPreview: {
      coupleNames: 'Nadia & Pratama',
      weddingDate: 'Sabtu, 12 Desember 2026',
      venue: 'Glasshouse Courtyard, Kemang',
      city: 'Jakarta Selatan',
      quote: 'Dua langkah yang menyatu dalam ketenangan, membangun rumah dengan kasih dan rasa syukur.',
      accentHex: '#0A0A0A',
      surfaceHex: '#FFFFFF',
      inkHex: '#0A0A0A',
      motifLabel: 'Editorial Minimalis',
    },
  },
  {
    id: 'demo-adat-jawa',
    title: 'Kraton Melati Heritage',
    category: 'Adat Jawa',
    filterGroup: 'Adat Nusantara',
    description: 'Nuansa sakral keraton dengan ornamen ukiran halus, ronce melati, dan tata bahasa Jawa yang anggun.',
    image: '/src/assets/images/portfolio_adat_jawa_sunda_1795512306064.jpg',
    imagePosition: 'object-center',
    demoUrl: '',
    recommendedPackage: 'Standard Invitation',
    demoPreview: {
      coupleNames: 'Sekar & Bagaskara',
      weddingDate: 'Minggu, 20 Desember 2026',
      venue: 'Pendopo Agung Royal Heritage',
      city: 'Yogyakarta',
      quote: 'Mugi gusti paring berkah dhumateng kaluwarga enggal ingkang sakinah, mawaddah, warahmah.',
      accentHex: '#0A0A0A',
      surfaceHex: '#FAFAFA',
      inkHex: '#0A0A0A',
      motifLabel: 'Adat Jawa Klasik',
    },
  },
  {
    id: 'demo-adat-sunda',
    title: 'Siger Parahyangan',
    category: 'Adat Sunda',
    filterGroup: 'Adat Nusantara',
    description: 'Sentuhan keanggunan Sunda berpadu palet krem keemasan, aksen melati suci, dan alur acara yang hangat.',
    image: '/src/assets/images/portfolio_adat_jawa_sunda_1795512306064.jpg',
    imagePosition: 'object-left',
    demoUrl: '',
    recommendedPackage: 'Premium Invitation',
    demoPreview: {
      coupleNames: 'Kirana & Raka',
      weddingDate: 'Sabtu, 09 Januari 2027',
      venue: 'Bale Asri Bumi Sangkuriang',
      city: 'Bandung',
      quote: 'Mugia rumah tangga anu diwangun salawasna dipaparin katenangan, kabagjaan, sareng berkah.',
      accentHex: '#0A0A0A',
      surfaceHex: '#FFFFFF',
      inkHex: '#0A0A0A',
      motifLabel: 'Adat Sunda Anggun',
    },
  },
  {
    id: 'demo-adat-minang',
    title: 'Bundo Kanduang Songket',
    category: 'Adat Minang',
    filterGroup: 'Adat Nusantara',
    description: 'Kemewahan tenun songket keemasan dan siluet mahkota tradisional dalam balutan layout digital modern.',
    image: '/src/assets/images/portfolio_adat_minang_1795512307074.jpg',
    imagePosition: 'object-center',
    demoUrl: '',
    recommendedPackage: 'Premium Invitation',
    demoPreview: {
      coupleNames: 'Putri & Farhan',
      weddingDate: 'Minggu, 24 Januari 2027',
      venue: 'Ballroom Pagaruyung Grand',
      city: 'Padang',
      quote: 'Adat basandi syarak, syarak basandi Kitabullah. Menyatukan dua keluarga dalam kehormatan.',
      accentHex: '#0A0A0A',
      surfaceHex: '#FAFAFA',
      inkHex: '#0A0A0A',
      motifLabel: 'Warisan Minangkabau',
    },
  },
  {
    id: 'demo-elegant-luxury',
    title: 'Champagne Atelier',
    category: 'Elegant Luxury',
    filterGroup: 'Luxury & Floral',
    description: 'Terinspirasi kartu undangan kertas katun bersegel lilin emas dengan transisi halus dan kesan eksklusif.',
    image: '/src/assets/images/about_editorial_craft_1795512305408.jpg',
    imagePosition: 'object-center',
    demoUrl: '',
    recommendedPackage: 'Exclusive Invitation',
    demoPreview: {
      coupleNames: 'Clarissa & Mahendra',
      weddingDate: 'Sabtu, 06 Februari 2027',
      venue: 'The Grand Conservatory',
      city: 'Jakarta Pusat',
      quote: 'An intimate evening of timeless vows, candlelight, and cherished company.',
      accentHex: '#0A0A0A',
      surfaceHex: '#FFFFFF',
      inkHex: '#0A0A0A',
      motifLabel: 'Atelier Eksklusif',
    },
  },
  {
    id: 'demo-floral-romantic',
    title: 'Garden Peony Twilight',
    category: 'Floral Romantic',
    filterGroup: 'Luxury & Floral',
    description: 'Harmoni kelopak mawar krem, cahaya senja hangat, serta fitur galeri dan musik pengiring yang romantis.',
    image: '/src/assets/images/portfolio_floral_luxury_1795512307223.jpg',
    imagePosition: 'object-center',
    demoUrl: '',
    recommendedPackage: 'Standard Invitation',
    demoPreview: {
      coupleNames: 'Alyssa & Dimas',
      weddingDate: 'Minggu, 14 Februari 2027',
      venue: 'Taman Sinar Senja Estate',
      city: 'Bali',
      quote: 'Di bawah langit senja dan aroma bunga taman, kami mengikat janji untuk selamanya.',
      accentHex: '#0A0A0A',
      surfaceHex: '#FAFAFA',
      inkHex: '#0A0A0A',
      motifLabel: 'Floral Romantis',
    },
  },
];

export const ORDER_STEPS: OrderStep[] = [
  {
    step: '01',
    title: 'Pilih Paket',
    description: 'Pelanggan memilih paket yang sesuai dengan kebutuhan.',
    iconName: 'package',
  },
  {
    step: '02',
    title: 'Hubungi Kami',
    description: 'Pelanggan menghubungi admin melalui WhatsApp.',
    iconName: 'message',
  },
  {
    step: '03',
    title: 'Kirim Data',
    description: 'Pelanggan mengirimkan informasi kedua mempelai dan detail acara.',
    iconName: 'file',
  },
  {
    step: '04',
    title: 'Proses Desain',
    description: 'Undangan mulai dikerjakan sesuai paket yang dipilih.',
    iconName: 'palette',
  },
  {
    step: '05',
    title: 'Review',
    description: 'Pelanggan melihat hasil undangan dan melakukan penyesuaian sesuai ketentuan paket.',
    iconName: 'eye',
  },
  {
    step: '06',
    title: 'Publikasi',
    description: 'Undangan selesai dan link dibagikan kepada pelanggan.',
    iconName: 'send',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Apa itu undangan pernikahan digital?',
    answer:
      'Undangan pernikahan digital adalah undangan berbasis halaman website yang dirancang khusus untuk menyampaikan informasi pernikahan secara elegan, praktis, dan interaktif. Tamu dapat melihat detail acara, peta lokasi, galeri foto, hingga mengirim ucapan langsung dari ponsel mereka.',
  },
  {
    question: 'Bagaimana cara memesan undangan?',
    answer:
      'Anda cukup memilih paket yang diinginkan pada bagian Pricelist lalu menekan tombol "Pesan Paket Ini". Anda akan diarahkan langsung ke WhatsApp admin kami dengan pesan otomatis, kemudian kami akan memandu pengiriman data mempelai dan detail acara.',
  },
  {
    question: 'Apakah undangan bisa dibuka melalui HP?',
    answer:
      'Ya, seluruh undangan digital yang kami buat bersifat responsif dan dioptimalkan khusus agar tampil rapi, ringan, dan nyaman dibaca di berbagai ukuran layar smartphone maupun tablet dan komputer.',
  },
  {
    question: 'Apakah undangan bisa dibagikan melalui WhatsApp?',
    answer:
      'Tentu bisa. Setelah selesai, Anda akan mendapatkan tautan (link) undangan khusus yang sangat mudah disalin dan dibagikan melalui WhatsApp, Instagram, maupun media pesan lainnya kepada seluruh daftar tamu.',
  },
  {
    question: 'Apakah desain bisa disesuaikan dengan tema pernikahan?',
    answer:
      'Bisa. Kami menyediakan pilihan tema mulai dari Modern Minimalis, Floral Romantic, Elegant Luxury, hingga tema adat seperti Jawa, Sunda, Minang, dan lainnya. Untuk paket Premium dan Exclusive, warna, font, elemen visual, hingga tata letak dapat dirancang khusus sesuai konsep acara Anda.',
  },
  {
    question: 'Apakah bisa menggunakan foto dan video sendiri?',
    answer:
      'Bisa. Pada paket Standard ke atas tersedia fitur galeri foto prewedding kedua mempelai, dan pada paket Premium serta Exclusive Anda juga dapat menyematkan video prewedding pribadi.',
  },
  {
    question: 'Apakah bisa melakukan revisi?',
    answer:
      'Ya. Kami memberikan kesempatan review sebelum undangan dipublikasikan. Untuk penyesuaian data acara kami bantu dengan senang hati, sedangkan pada paket Premium tersedia maksimal 2 kali revisi desain setelah konsep disepakati, dan pada paket Exclusive revisi dilakukan sesuai kesepakatan bersama sebelum publikasi.',
  },
  {
    question: 'Apakah tamu bisa memberikan ucapan dan konfirmasi kehadiran?',
    answer:
      'Ya, mulai dari paket Standard Invitation ke atas sudah dilengkapi fitur RSVP untuk konfirmasi kehadiran tamu serta buku tamu digital tempat para tamu dapat menuliskan doa dan ucapan selamat secara langsung.',
  },
  {
    question: 'Apakah tersedia fitur amplop digital?',
    answer:
      'Tersedia. Fitur amplop digital sudah termasuk mulai dari paket Standard Invitation. Khusus untuk paket Exclusive Invitation, tersedia pula integrasi Payment Gateway agar pengiriman hadiah digital dapat diproses langsung melalui website dan diteruskan ke rekening pemilik acara sesuai ketentuan penyedia pembayaran.',
  },
  {
    question: 'Berapa lama proses pembuatan undangan?',
    answer:
      'Untuk paket Basic dan Standard berbasis template, pengerjaan umumnya memakan waktu 1 hingga 3 hari kerja setelah seluruh data dan foto lengkap diterima. Untuk paket Premium dan Exclusive dengan desain custom, estimasi pengerjaan sekitar 3 hingga 7 hari kerja sesuai tingkat kerumitan konsep yang disepakati.',
  },
];
