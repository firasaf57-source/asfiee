import { Language } from '../types';

export const translations = {
  // Navigation
  nav: {
    home: { EN: 'Home', ID: 'Beranda' },
    collection: { EN: 'Collection', ID: 'Koleksi' },
    about: { EN: 'About', ID: 'Tentang' },
    lookbook: { EN: 'Lookbook', ID: 'Lookbook' },
    contact: { EN: 'Contact', ID: 'Kontak' },
    search: { EN: 'Search', ID: 'Cari' },
    bag: { EN: 'Shopping Bag', ID: 'Tas Belanja' },
    announcement: {
      EN: 'Complimentary shipping across Indonesia on orders over Rp1.000.000 · International delivery available',
      ID: 'Gratis ongkos kirim seluruh Indonesia untuk pesanan di atas Rp1.000.000 · Pengiriman internasional tersedia',
    },
  },

  // Hero & Tagline
  hero: {
    tagline: { EN: 'BEYOND THE ORDINARY.', ID: 'DI LUAR BATAS BIASA.' },
    subheadline: {
      EN: 'Redefining the art of everyday luxury through contemporary design and timeless expression.',
      ID: 'Mendefinisikan ulang seni kemewahan sehari-hari melalui desain kontemporer dan ekspresi abadi.',
    },
    ctaExplore: { EN: 'Explore Collection', ID: 'Jelajahi Koleksi' },
    ctaStory: { EN: 'Discover Our Story', ID: 'Pelajari Kisah Kami' },
    unisexPledge: {
      EN: 'Unisex Contemporary Silhouettes · Crafted Without Boundaries',
      ID: 'Siluet Kontemporer Uniseks · Diciptakan Tanpa Batas',
    },
  },

  // Home Sections
  home: {
    newArrivals: { EN: 'New Arrivals', ID: 'Koleksi Terbaru' },
    newArrivalsSubtitle: {
      EN: 'Refined silhouettes and modern tailoring crafted for the season.',
      ID: 'Siluet elegan dan jahitan modern yang diciptakan untuk musim ini.',
    },
    featuredCollection: { EN: 'Featured Collection', ID: 'Koleksi Unggulan' },
    philosophyTitle: { EN: 'STYLE HAS NO BOUNDARIES.', ID: 'GAYA TIDAK MEMILIKI BATAS.' },
    philosophyBody: {
      EN: 'CASSATAVI challenges the conventional distinctions between masculine and feminine wardrobes. Each garment is engineered with fluid proportions, architectural tailoring, and noble natural fibers, inviting wearers to define luxury on their own authentic terms.',
      ID: 'CASSATAVI menantang batas konvensional antara busana maskulin dan feminin. Setiap pakaian dirancang dengan proporsi luwes, jahitan arsitektural, dan serat alami pilihan, mengajak setiap pemakainya merayakan kemewahan dengan cara mereka sendiri.',
    },
    viewAllProducts: { EN: 'View Full Catalog', ID: 'Lihat Semua Katalog' },
    editorialCampaign: { EN: 'Editorial Campaign', ID: 'Kampanye Editorial' },
    editorialSubtitle: {
      EN: 'A visual exploration into form, materiality, and contemporary identity.',
      ID: 'Eksplorasi visual tentang bentuk, materialitas, dan identitas kontemporer.',
    },
    discoverLookbook: { EN: 'Explore Lookbook', ID: 'Lihat Seluruh Lookbook' },
    atelierBadge: { EN: 'The Atelier', ID: 'Studio Kreasi' },
    atelierTitle: { EN: 'Crafted with Intentional Precision', ID: 'Dibuat dengan Presisi dan Ketulusan' },
    atelierDesc: {
      EN: 'From hand-selected virgin wools to organic cotton poplins, every Cassatavi garment undergoes meticulous pattern drafting and sustainable small-batch tailoring.',
      ID: 'Dari wol murni pilihan tangan hingga katun poplin organik, setiap pakaian Cassatavi melalui pembuatan pola cermat dan penjahitan ramah lingkungan dalam jumlah terbatas.',
    },
    readStory: { EN: 'Read The Story', ID: 'Baca Kisah Selengkapnya' },
  },

  // Newsletter
  newsletter: {
    title: { EN: 'Join the CASSATAVI Circle', ID: 'Bergabung dengan Lingkar CASSATAVI' },
    subtitle: {
      EN: 'Receive private access to new releases, seasonal editorial previews, and exclusive atelier invitations.',
      ID: 'Dapatkan akses privat ke peluncuran terbaru, pratinjau editorial musim, dan undangan khusus atelier.',
    },
    placeholder: { EN: 'Enter your email address', ID: 'Masukkan alamat email Anda' },
    button: { EN: 'Subscribe', ID: 'Berlangganan' },
    success: {
      EN: 'Thank you for subscribing. Welcome to CASSATAVI.',
      ID: 'Terima kasih telah berlangganan. Selamat datang di CASSATAVI.',
    },
    disclaimer: {
      EN: 'By subscribing, you agree to our Privacy Policy and terms of communication.',
      ID: 'Dengan berlangganan, Anda menyetujui Kebijakan Privasi dan ketentuan kami.',
    },
  },

  // Collection & Shop
  shop: {
    title: { EN: 'The Collection', ID: 'Koleksi Busana' },
    subtitle: {
      EN: 'Contemporary unisex essentials, architectural outerwear, and refined tailoring.',
      ID: 'Busana esensial uniseks kontemporer, pakaian luar arsitektural, dan potongan presisi.',
    },
    all: { EN: 'All Pieces', ID: 'Semua Koleksi' },
    categories: {
      outerwear: { EN: 'Outerwear', ID: 'Pakaian Luar' },
      tops: { EN: 'Tops & Shirts', ID: 'Atasan & Kemeja' },
      trousers: { EN: 'Trousers', ID: 'Celana Panjang' },
      essentials: { EN: 'Essentials', ID: 'Esensial' },
      accessories: { EN: 'Accessories', ID: 'Aksesori' },
    },
    filterBy: { EN: 'Filter by', ID: 'Saring berdasarkan' },
    sortBy: { EN: 'Sort by', ID: 'Urutkan' },
    sortOptions: {
      featured: { EN: 'Featured Selection', ID: 'Pilihan Utama' },
      priceAsc: { EN: 'Price: Low to High', ID: 'Harga: Terendah ke Tertinggi' },
      priceDesc: { EN: 'Price: High to Low', ID: 'Harga: Tertinggi ke Terendah' },
      newest: { EN: 'Latest Arrivals', ID: 'Terbaru' },
    },
    searchPlaceholder: { EN: 'Search items, materials, colors...', ID: 'Cari pakaian, bahan, warna...' },
    noResults: { EN: 'No garments found matching your criteria.', ID: 'Tidak ada busana yang sesuai dengan pencarian Anda.' },
    resetFilters: { EN: 'Clear Filters', ID: 'Hapus Saringan' },
    itemCount: { EN: 'garments shown', ID: 'busana ditampilkan' },
    addToBag: { EN: 'Add to Bag', ID: 'Tambah ke Tas' },
    quickView: { EN: 'Quick View', ID: 'Pratinjau' },
    viewDetails: { EN: 'View Details', ID: 'Lihat Detail' },
  },

  // Product Detail
  pdp: {
    backToCollection: { EN: '← Back to Collection', ID: '← Kembali ke Koleksi' },
    color: { EN: 'Color', ID: 'Warna' },
    size: { EN: 'Size', ID: 'Ukuran' },
    sizeGuide: { EN: 'Size Guide', ID: 'Panduan Ukuran' },
    quantity: { EN: 'Quantity', ID: 'Jumlah' },
    addToBag: { EN: 'Add to Shopping Bag', ID: 'Tambahkan ke Tas Belanja' },
    materialsHeading: { EN: 'Composition & Fabric', ID: 'Komposisi & Bahan' },
    detailsHeading: { EN: 'Garment Details', ID: 'Detail Busana' },
    shippingHeading: { EN: 'Shipping & Atelier Delivery', ID: 'Pengiriman & Penyerahan' },
    shippingText: {
      EN: 'Complimentary tracked courier delivery across Indonesia. Dispatched within 24 hours in signature eco-friendly dust bags and branded gift boxes.',
      ID: 'Pengiriman kurir terlacak gratis di seluruh Indonesia. Dikirim dalam 24 jam dengan dust bag ramah lingkungan dan kotak bingkisan khas.',
    },
    careHeading: { EN: 'Garment Care', ID: 'Perawatan Busana' },
    careText: {
      EN: 'Dry clean recommended for structured pieces. Cold hand wash with mild ecological detergent. Iron at low temperature under a press cloth.',
      ID: 'Dianjurkan cuci kering untuk pakaian berstruktur. Cuci tangan dengan air dingin dan deterjen ramah lingkungan. Setrika suhu rendah beralas kain.',
    },
    relatedTitle: { EN: 'Complete The Silhouette', ID: 'Lengkapi Siluet Gaya' },
    relatedSubtitle: {
      EN: 'Curated complementary garments crafted with corresponding palettes and textures.',
      ID: 'Paduan busana pilihan yang dirancang dengan palet dan tekstur serasi.',
    },
  },

  // Size Guide Modal
  sizeGuide: {
    title: { EN: 'Unisex Size Guide', ID: 'Panduan Ukuran Uniseks' },
    subtitle: {
      EN: 'All CASSATAVI garments are designed with a relaxed, modern unisex proportion. For a traditional tailored fit, select your true size; for an exaggerated relaxed drape, size up.',
      ID: 'Semua busana CASSATAVI dirancang dengan proporsi uniseks yang santai dan modern. Untuk potongan pas badan, pilih ukuran biasa; untuk gaya oversized dramatis, naikkan satu ukuran.',
    },
    sizeHeader: { EN: 'Size', ID: 'Ukuran' },
    chestHeader: { EN: 'Chest (cm / in)', ID: 'Lingkar Dada (cm / in)' },
    waistHeader: { EN: 'Waist (cm / in)', ID: 'Lingkar Pinggang (cm / in)' },
    hipsHeader: { EN: 'Hips (cm / in)', ID: 'Lingkar Pinggul (cm / in)' },
    lengthHeader: { EN: 'Back Length (cm / in)', ID: 'Panjang Punggung (cm / in)' },
    close: { EN: 'Close Guide', ID: 'Tutup Panduan' },
  },

  // Cart & Drawer
  cart: {
    title: { EN: 'Shopping Bag', ID: 'Tas Belanja' },
    empty: { EN: 'Your shopping bag is currently empty.', ID: 'Tas belanja Anda masih kosong.' },
    continueShopping: { EN: 'Continue Exploring', ID: 'Lanjut Berbelanja' },
    subtotal: { EN: 'Subtotal', ID: 'Subtotal' },
    shipping: { EN: 'Estimated Shipping', ID: 'Perkiraan Pengiriman' },
    freeShippingNotice: { EN: 'Free Shipping Unlocked', ID: 'Gratis Ongkos Kirim Aktif' },
    awayFromFreeShipping: {
      EN: (amount: string) => `Add ${amount} more for complimentary delivery.`,
      ID: (amount: string) => `Tambah ${amount} lagi untuk gratis ongkos kirim.`,
    },
    total: { EN: 'Total', ID: 'Total Pembayaran' },
    checkoutBtn: { EN: 'Proceed to Checkout', ID: 'Lanjutkan ke Pembayaran' },
    remove: { EN: 'Remove', ID: 'Hapus' },
    addedToast: { EN: 'Added to your shopping bag', ID: 'Ditambahkan ke tas belanja' },
  },

  // Checkout Modal
  checkout: {
    title: { EN: 'Express Atelier Checkout', ID: 'Pembayaran Kilat Atelier' },
    step1: { EN: '1. Contact & Delivery Information', ID: '1. Informasi Kontak & Pengiriman' },
    fullName: { EN: 'Full Name', ID: 'Nama Lengkap' },
    email: { EN: 'Email Address', ID: 'Alamat Email' },
    phone: { EN: 'WhatsApp / Phone Number', ID: 'Nomor WhatsApp / Telepon' },
    address: { EN: 'Street Address', ID: 'Alamat Lengkap' },
    city: { EN: 'City / Region', ID: 'Kota / Wilayah' },
    postalCode: { EN: 'Postal Code', ID: 'Kode Pos' },
    step2: { EN: '2. Courier Service', ID: '2. Pilihan Kurir' },
    couriers: {
      jne: { name: 'JNE Express (Reguler)', desc: { EN: '2-3 Business Days', ID: '2-3 Hari Kerja' }, price: 0 },
      sicepat: { name: 'SiCepat BEST (Next Day)', desc: { EN: 'Next Day Delivery', ID: 'Pengiriman Esok Hari' }, price: 25000 },
      instant: { name: 'Instant Courier (Jakarta SCBD & Area)', desc: { EN: 'Same-day 3-hour arrival', ID: 'Tiba dalam 3 jam' }, price: 45000 },
    },
    step3: { EN: '3. Payment Method (Demo Simulation)', ID: '3. Metode Pembayaran (Simulasi Demo)' },
    paymentMethods: {
      bca: { name: 'BCA Virtual Account', desc: { EN: 'Instant automated verification', ID: 'Verifikasi instan otomatis' } },
      qris: { name: 'QRIS (GoPay, OVO, Dana, ShopeePay)', desc: { EN: 'Scan & pay seamlessly', ID: 'Pindai kode QR instan' } },
      cc: { name: 'Credit / Debit Card (Visa, Mastercard)', desc: { EN: 'Secure 256-bit encryption', ID: 'Enkripsi aman 256-bit' } },
      cod: { name: 'Cash on Delivery (COD)', desc: { EN: 'Pay upon parcel inspection', ID: 'Bayar saat kurir mengantar' } },
    },
    promoCode: { EN: 'Promo / Voucher Code', ID: 'Kode Promo / Voucher' },
    apply: { EN: 'Apply', ID: 'Gunakan' },
    promoApplied: { EN: 'Special 10% First Order Privilege applied!', ID: 'Hak Istimewa Diskon 10% Pesanan Pertama aktif!' },
    promoInvalid: { EN: 'Invalid promo code. Try "ORDINARY10"', ID: 'Kode promo tidak valid. Coba "ORDINARY10"' },
    placeOrder: { EN: 'Complete Order', ID: 'Konfirmasi Pesanan' },
    orderConfirmed: { EN: 'Order Successfully Placed', ID: 'Pesanan Berhasil Dikonfirmasi' },
    orderNumber: { EN: 'Order Reference', ID: 'Nomor Referensi Pesanan' },
    thankYou: {
      EN: 'Thank you for choosing CASSATAVI. Your bespoke order confirmation and tracking link have been dispatched to your email.',
      ID: 'Terima kasih telah memilih CASSATAVI. Konfirmasi pesanan dan tautan pelacakan telah dikirimkan ke email Anda.',
    },
    returnToStore: { EN: 'Back to Store', ID: 'Kembali ke Toko' },
  },

  // About Page
  about: {
    heroTitle: { EN: 'THE CASSATAVI ETHOS', ID: 'ETOS CASSATAVI' },
    heroSubtitle: {
      EN: 'Born from a desire to liberate fashion from conventional boundaries, combining sculptural tailoring, tactile luxury, and radical inclusivity.',
      ID: 'Lahir dari keinginan membebaskan busana dari sekat konvensional, memadukan potongan arsitektural, kemewahan sentuhan, dan inklusivitas sejati.',
    },
    storyTitle: { EN: 'Our Story', ID: 'Kisah Kami' },
    storyParagraph1: {
      EN: 'CASSATAVI was created to redefine modern luxury through contemporary fashion, celebrating individuality and fashion without gender boundaries. We started with a simple yet uncompromising thesis: true elegance does not adhere to prescribed categorizations.',
      ID: 'CASSATAVI diciptakan untuk mendefinisikan ulang kemewahan modern melalui busana kontemporer, merayakan individualitas dan fashion tanpa sekat gender. Kami berawal dari tesis sederhana namun tegas: keanggunan sejati tidak tunduk pada pengkotak-kotakan.',
    },
    storyParagraph2: {
      EN: 'In our Jakarta and international design ateliers, silhouettes are developed by draping directly on both male and female bodies. The result is garments that fall with effortless poise, intentional volume, and a quiet confidence that transcends seasons.',
      ID: 'Di studio desain Jakarta dan internasional kami, siluet dikembangkan dengan draping langsung pada tubuh pria dan wanita. Hasilnya adalah busana yang jatuh anggun, berkarakter tegas, dan memancarkan kepercayaan diri yang melampaui tren sesaat.',
    },
    visionTitle: { EN: 'Our Vision', ID: 'Visi Kami' },
    visionText: {
      EN: 'To become a globally recognized contemporary luxury fashion brand that inspires individuality and redefines modern style.',
      ID: 'Menjadi jenama busana mewah kontemporer terkemuka di dunia yang menginspirasi individualitas dan mendefinisikan ulang gaya modern.',
    },
    missionTitle: { EN: 'Our Mission', ID: 'Misi Kami' },
    missionList: [
      {
        EN: 'Create timeless designs that defy fleeting trends and elevate everyday life.',
        ID: 'Menciptakan desain abadi yang melampaui tren sesaat dan menyempurnakan keseharian.',
      },
      {
        EN: 'Deliver uncompromising premium quality and all-day tactile comfort in every thread.',
        ID: 'Menghadirkan kualitas premium tanpa kompromi dan kenyamanan sentuhan prima pada setiap helai.',
      },
      {
        EN: 'Embrace inclusivity with modern unisex silhouettes that honor every human expression.',
        ID: 'Merangkul inklusivitas dengan siluet uniseks modern yang menghargai setiap ekspresi manusia.',
      },
      {
        EN: 'Inspire self-assurance and authenticity through deliberate, understated sophistication.',
        ID: 'Menginspirasi rasa percaya diri dan keaslian melalui keanggunan yang bersahaja.',
      },
    ],
    valuesTitle: { EN: 'Core Values', ID: 'Nilai-Nilai Utama' },
    values: [
      {
        name: { EN: 'Creativity', ID: 'Kreativitas' },
        desc: {
          EN: 'Constantly interrogating form, proportion, and texture to deliver unexpected luxury.',
          ID: 'Terus mengolah bentuk, proporsi, dan tekstur guna menyajikan kemewahan yang tak terduga.',
        },
      },
      {
        name: { EN: 'Inclusivity', ID: 'Inklusivitas' },
        desc: {
          EN: 'Fashion without gender limits, celebrating every body and personal style identity.',
          ID: 'Mode tanpa sekat gender, merayakan setiap lekuk tubuh dan identitas gaya personal.',
        },
      },
      {
        name: { EN: 'Quality', ID: 'Kualitas' },
        desc: {
          EN: 'Master craftsmanship, artisanal stitching, and durable natural textiles sourced with integrity.',
          ID: 'Keahlian penjahitan tingkat tinggi, jahitan presisi, dan tekstil alami pilihan beretika.',
        },
      },
      {
        name: { EN: 'Innovation', ID: 'Inovasi' },
        desc: {
          EN: 'Contemporary pattern drafting paired with mindful, low-waste production methodologies.',
          ID: 'Pembuatan pola modern dipadukan dengan metodologi produksi rendah limbah yang bijak.',
        },
      },
      {
        name: { EN: 'Individuality', ID: 'Individualitas' },
        desc: {
          EN: 'Empowering the wearer to curate their own visual narrative beyond convention.',
          ID: 'Memberi ruang bagi pemakai untuk merangkai narasi visual mereka melampaui konvensi.',
        },
      },
    ],
  },

  // Lookbook Page
  lookbook: {
    title: { EN: 'The Editorial Lookbook', ID: 'Lookbook Editorial' },
    subtitle: {
      EN: 'Four seasonal dialogues exploring structural draping, architectural lines, and genderless elegance.',
      ID: 'Empat dialog musiman yang mengeksplorasi draping terstruktur, garis arsitektural, dan keanggunan tanpa sekat gender.',
    },
    filterAll: { EN: 'All Chapters', ID: 'Semua Babak' },
    shopLook: { EN: 'Shop Garment', ID: 'Beli Busana Ini' },
    campaignNotes: { EN: 'Editorial Commentary', ID: 'Catatan Editorial' },
    closeModal: { EN: 'Close Lightbox', ID: 'Tutup Tampilan' },
  },

  // Contact Page
  contact: {
    headline: { EN: 'WE WOULD LOVE TO HEAR FROM YOU.', ID: 'KAMI SENANG MENDENGAR DARI ANDA.' },
    subheadline: {
      EN: 'Whether you require styling guidance, private atelier fittings, or bespoke order inquiries, our concierge is at your service.',
      ID: 'Baik untuk panduan gaya, sesi fitting privat di atelier, atau pertanyaan pesanan khusus, konsier kami siap melayani Anda.',
    },
    formTitle: { EN: 'Send an Inquiry', ID: 'Kirimkan Pesan' },
    fullName: { EN: 'Full Name', ID: 'Nama Lengkap' },
    fullNamePlaceholder: { EN: 'e.g. Adrienne Hartanto', ID: 'cth. Adrienne Hartanto' },
    email: { EN: 'Email Address', ID: 'Alamat Email' },
    emailPlaceholder: { EN: 'adrienne@example.com', ID: 'adrienne@example.com' },
    subject: { EN: 'Subject', ID: 'Subjek Pesan' },
    subjectPlaceholder: { EN: 'Styling, bespoke sizing, or order support', ID: 'Konsultasi gaya, pesanan, atau kolaborasi' },
    message: { EN: 'Message', ID: 'Pesan Anda' },
    messagePlaceholder: {
      EN: 'Share your questions or request a private appointment with our atelier team...',
      ID: 'Tuliskan pertanyaan Anda atau ajukan janji temu privat dengan tim atelier kami...',
    },
    sendBtn: { EN: 'Send Message', ID: 'Kirim Pesan' },
    sending: { EN: 'Transmitting...', ID: 'Mengirimkan...' },
    successMessage: {
      EN: 'Your message has been received with thanks. A Cassatavi concierge consultant will respond within 24 business hours.',
      ID: 'Pesan Anda telah kami terima dengan baik. Konsultan konsier Cassatavi akan membalas dalam kurun waktu 24 jam kerja.',
    },
    atelierInfoTitle: { EN: 'The Flagship Atelier', ID: 'Atelier Pusat' },
    address: {
      line1: 'CASSATAVI Atelier & Residence',
      line2: 'Jl. Senopati Raya No. 44, Kebayoran Baru',
      line3: 'Jakarta Selatan 12190, Indonesia',
    },
    hours: {
      EN: 'Monday — Saturday: 10:00 — 20:00 WIB · Private Appointments by Request',
      ID: 'Senin — Sabtu: 10:00 — 20:00 WIB · Kunjungan Privat Berdasarkan Reservasi',
    },
    directContactsTitle: { EN: 'Direct Concierge Channels', ID: 'Saluran Konsier Langsung' },
    whatsappLabel: { EN: 'Official WhatsApp Concierge', ID: 'WhatsApp Konsier Resmi' },
    instagramLabel: { EN: 'Instagram Editorial', ID: 'Instagram Editorial' },
    emailLabel: { EN: 'Private Client Inquiries', ID: 'Layanan Klien Privat' },
  },

  // Footer
  footer: {
    tagline: { EN: 'BEYOND THE ORDINARY.', ID: 'DI LUAR BATAS BIASA.' },
    aboutBrand: {
      EN: 'CASSATAVI is a contemporary luxury fashion house celebrating individuality, inclusivity, and architectural unisex silhouettes.',
      ID: 'CASSATAVI adalah rumah mode mewah kontemporer yang merayakan individualitas, inklusivitas, dan siluet uniseks arsitektural.',
    },
    explore: { EN: 'Explore', ID: 'Jelajahi' },
    info: { EN: 'Information', ID: 'Informasi' },
    links: {
      newArrivals: { EN: 'New Arrivals', ID: 'Koleksi Baru' },
      tailoredPieces: { EN: 'Tailored Pieces', ID: 'Busana Tailoring' },
      lookbook: { EN: 'Lookbook Archive', ID: 'Arsip Lookbook' },
      atelierStory: { EN: 'The Atelier', ID: 'Kisah Atelier' },
      sustainability: { EN: 'Sustainable Craft', ID: 'Kerajinan Berkelanjutan' },
      careGuide: { EN: 'Fabric & Garment Care', ID: 'Perawatan Busana' },
      sizeChart: { EN: 'Unisex Sizing Chart', ID: 'Tabel Ukuran Uniseks' },
      privacy: { EN: 'Privacy Policy', ID: 'Kebijakan Privasi' },
      terms: { EN: 'Terms & Conditions', ID: 'Syarat & Ketentuan' },
    },
    socialTitle: { EN: 'Follow The House', ID: 'Ikuti Kami' },
    copyright: '© 2026 CASSATAVI. ALL RIGHTS RESERVED.',
    designedIn: { EN: 'Designed between Jakarta & Paris.', ID: 'Dirancang antara Jakarta & Paris.' },
  },
};

export function formatIDR(amount: number): string {
  // Format as Indonesian Rupiah: Rp899.000
  const formatted = new Intl.NumberFormat('id-ID', {
    maximumFractionDigits: 0,
  }).format(amount);
  return `Rp${formatted}`;
}
