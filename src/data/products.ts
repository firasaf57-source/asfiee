import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'prod-oversized-blazer',
    name: {
      EN: 'Signature Oversized Blazer',
      ID: 'Blazer Signature Oversized',
    },
    price: 899000,
    category: 'outerwear',
    categoryLabel: {
      EN: 'Outerwear',
      ID: 'Pakaian Luar',
    },
    image: '/src/assets/images/product_oversized_blazer_1794479388260.jpg',
    gallery: [
      '/src/assets/images/product_oversized_blazer_1794479388260.jpg',
      '/src/assets/images/lookbook_campaign_blazer_1794479387996.jpg',
      '/src/assets/images/hero_editorial_duo_1794479387597.jpg',
    ],
    description: {
      EN: 'A contemporary statement piece designed with a relaxed silhouette, refined tailoring, and premium fabric for effortless sophistication. Double-breasted closure with hand-stitched horn buttons.',
      ID: 'Busana pernyataan kontemporer yang dirancang dengan siluet santai, jahitan presisi, dan bahan premium untuk keanggunan tanpa batas. Kancing ganda dengan kancing tanduk berjahit tangan.',
    },
    materials: {
      EN: '70% Fine Virgin Wool, 25% Organic Lyocell, 5% Cashmere. Cupro satin interior lining.',
      ID: '70% Wol Murni Pilihan, 25% Lyocell Organik, 5% Kasmir. Lapisan dalam sutra cupro.',
    },
    details: {
      EN: [
        'Structured yet relaxed unisex shoulder drape',
        'Deep jetted flap pockets and interior chest slip',
        'Peak lapels with delicate pick-stitching',
        'Dual rear vents for effortless movement',
      ],
      ID: [
        'Bahu uniseks yang jatuh terstruktur namun rileks',
        'Saku berpenutup jetted dalam dan saku selip dada bagian dalam',
        'Kerah peak lapel dengan jahitan pick-stitch halus',
        'Belahan ganda di bagian belakang untuk kebebasan gerak',
      ],
    },
    colors: [
      { name: { EN: 'Sage Green', ID: 'Hijau Sage' }, hex: '#8DA28C' },
      { name: { EN: 'Dark Espresso', ID: 'Espresso Gelap' }, hex: '#3A230A' },
      { name: { EN: 'Soft Ivory', ID: 'Gading Lembut' }, hex: '#F7F5EF' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    isNew: true,
    isFeatured: true,
    modelInfo: {
      EN: 'Male model is 186cm wearing size L. Female model is 176cm wearing size M.',
      ID: 'Model pria 186cm mengenakan ukuran L. Model wanita 176cm mengenakan ukuran M.',
    },
  },
  {
    id: 'prod-essential-shirt',
    name: {
      EN: 'Essential Shirt',
      ID: 'Kemeja Esensial',
    },
    price: 459000,
    category: 'tops',
    categoryLabel: {
      EN: 'Tops & Shirts',
      ID: 'Atasan & Kemeja',
    },
    image: '/src/assets/images/product_essential_shirt_1794479409262.jpg',
    gallery: [
      '/src/assets/images/product_essential_shirt_1794479409262.jpg',
      '/src/assets/images/hero_editorial_duo_1794479387597.jpg',
    ],
    description: {
      EN: 'The quintessential minimalist button-down, crafted from ultra-fine 120-two-ply Egyptian cotton poplin with a fluid unisex drape, mother-of-pearl buttons, and a clean concealed placket.',
      ID: 'Kemeja kancing klasik minimalis, dibuat dari katun poplin Mesir dua lapis 120 pilihan dengan jatuhan uniseks yang luwes, kancing mutiara asli, dan plaket kancing rapi tertutup.',
    },
    materials: {
      EN: '100% GOTS-Certified Organic Combed Cotton Poplin.',
      ID: '100% Katun Poplin Sisir Organik Tersertifikasi GOTS.',
    },
    details: {
      EN: [
        'Curved architectural hem for tucked or untucked styling',
        'Convertible button cuffs with pleated arm opening',
        'Crisp band-collar with reinforced internal fusing',
        'Pre-washed for sublime skin-feel and minimal shrinkage',
      ],
      ID: [
        'Keliman melengkung arsitektural untuk gaya dimasukkan atau dilepas',
        'Manset kancing dapat diatur dengan lipatan pergelangan tangan',
        'Kerah tegak rapi dengan lapisan dalam kokoh',
        'Dicuci awal untuk kenyamanan sentuhan kulit dan tidak mudah susut',
      ],
    },
    colors: [
      { name: { EN: 'Soft Ivory', ID: 'Gading Lembut' }, hex: '#F7F5EF' },
      { name: { EN: 'Muted Butter Cream', ID: 'Krem Mentega' }, hex: '#EEE9C1' },
      { name: { EN: 'Dark Espresso', ID: 'Espresso Gelap' }, hex: '#3A230A' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    isNew: false,
    isFeatured: true,
    modelInfo: {
      EN: 'Model is 178cm wearing size M for an airy, relaxed silhouette.',
      ID: 'Model bertinggi 178cm mengenakan ukuran M untuk siluet santai dan bernapas.',
    },
  },
  {
    id: 'prod-signature-hoodie',
    name: {
      EN: 'Signature Hoodie',
      ID: 'Hoodie Signature',
    },
    price: 699000,
    category: 'essentials',
    categoryLabel: {
      EN: 'Essentials',
      ID: 'Esensial',
    },
    image: '/src/assets/images/product_signature_hoodie_1794479410226.jpg',
    gallery: [
      '/src/assets/images/product_signature_hoodie_1794479410226.jpg',
      '/src/assets/images/lookbook_campaign_blazer_1794479387996.jpg',
    ],
    description: {
      EN: 'An elevated interpretation of casual luxury. Constructed from 480gsm French terry with double-needle flatlock seams, a sculpted double-layer hood, and seamless hidden side-seam pockets.',
      ID: 'Interpretasi mewah dari kenyamanan kasual. Dibuat dari French terry tebal 480gsm dengan jahitan flatlock jarum ganda, tudung lapis ganda berstruktur rapi, dan saku samping tersembunyi tanpa sambungan depan.',
    },
    materials: {
      EN: '100% Heavyweight French Terry Cotton. Custom dyed with low-impact botanical pigments.',
      ID: '100% Katun French Terry Berat. Diwarnai khusus dengan pigmen nabati ramah lingkungan.',
    },
    details: {
      EN: [
        'Substantial 480gsm weight provides sculpted silhouette',
        'No drawstring clutter for a pure minimalist neckline',
        'Dense ribbed cuffs and hem with shape-memory elastane',
        'Embossed tone-on-tone CASSATAVI micro monogram on wrist',
      ],
      ID: [
        'Bobot kokoh 480gsm menghasilkan siluet yang jatuh sempurna',
        'Tanpa tali tudung yang mengganggu untuk tampilan leher minimalis murni',
        'Rib manset dan keliman padat dengan elastane penjaga bentuk',
        'Monogram timbul mikro CASSATAVI senada pada pergelangan tangan',
      ],
    },
    colors: [
      { name: { EN: 'Sage Green', ID: 'Hijau Sage' }, hex: '#8DA28C' },
      { name: { EN: 'Soft Ivory', ID: 'Gading Lembut' }, hex: '#F7F5EF' },
      { name: { EN: 'Burnt Orange', ID: 'Oranye Terakota' }, hex: '#A4530C' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    isNew: true,
    isFeatured: true,
    modelInfo: {
      EN: 'Model is 182cm wearing size L.',
      ID: 'Model bertinggi 182cm mengenakan ukuran L.',
    },
  },
  {
    id: 'prod-tailored-trousers',
    name: {
      EN: 'Tailored Trousers',
      ID: 'Celana Panjang Tailored',
    },
    price: 649000,
    category: 'trousers',
    categoryLabel: {
      EN: 'Trousers',
      ID: 'Celana Panjang',
    },
    image: '/src/assets/images/product_tailored_trousers_1794479390094.jpg',
    gallery: [
      '/src/assets/images/product_tailored_trousers_1794479390094.jpg',
      '/src/assets/images/lookbook_urban_elegance_1794479411346.jpg',
    ],
    description: {
      EN: 'Modern tailored trousers cut with an elegant mid-rise, single deep front pleats, and a wide straight leg that breaks gently over footwear. Built for unisex versatility from boardroom to evening gallery.',
      ID: 'Celana tailoring modern dengan potongan mid-rise elegan, satu lipatan depan yang tegas, dan potongan kaki lurus lebar yang jatuh anggun di atas sepatu. Dirancang untuk fleksibilitas uniseks dari kantor hingga galeri malam.',
    },
    materials: {
      EN: '65% Tropical Virgin Wool, 32% Viscose, 3% Elastane stretch comfort.',
      ID: '65% Wol Murni Tropis, 32% Viscose, 3% Elastane untuk kenyamanan fleksibel.',
    },
    details: {
      EN: [
        'Concealed hook-and-bar waist closure with interior anchor button',
        'Discreet interior waist adjuster tabs for customizable fit',
        'Sharp permanent center crease along front and back',
        'Blind-stitched generous hem allows 4cm tailoring adjustment',
      ],
      ID: [
        'Kancing kait tersembunyi dengan kancing jangkar bagian dalam',
        'Tab penyesuai pinggang bagian dalam yang praktis',
        'Lipatan garis tengah tajam dan permanen di depan dan belakang',
        'Keliman bawah blind-stitch yang menyisakan kelonggaran 4cm untuk dirombak',
      ],
    },
    colors: [
      { name: { EN: 'Dark Espresso', ID: 'Espresso Gelap' }, hex: '#3A230A' },
      { name: { EN: 'Muted Butter Cream', ID: 'Krem Mentega' }, hex: '#EEE9C1' },
      { name: { EN: 'Sage Green', ID: 'Hijau Sage' }, hex: '#8DA28C' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    isNew: false,
    isFeatured: true,
    modelInfo: {
      EN: 'Female model wearing size S (174cm). Male model wearing size M (185cm).',
      ID: 'Model wanita mengenakan ukuran S (174cm). Model pria mengenakan ukuran M (185cm).',
    },
  },
  {
    id: 'prod-minimalist-jacket',
    name: {
      EN: 'Minimalist Jacket',
      ID: 'Jaket Minimalis',
    },
    price: 1099000,
    category: 'outerwear',
    categoryLabel: {
      EN: 'Outerwear',
      ID: 'Pakaian Luar',
    },
    image: '/src/assets/images/product_minimalist_jacket_1794479410376.jpg',
    gallery: [
      '/src/assets/images/product_minimalist_jacket_1794479410376.jpg',
      '/src/assets/images/lookbook_urban_elegance_1794479411346.jpg',
    ],
    description: {
      EN: 'An architectural wool blouson showcasing clean geometric lines and pure Scandinavian minimalism. Features a custom matte gunmetal two-way zipper, stand collar, and concealed storm flap.',
      ID: 'Blouson wol arsitektural yang menampilkan garis geometris tegas dan minimalisme Skandinavia murni. Dilengkapi ritsleting dua arah gunmetal matte kustom, kerah tegak, dan penutup badai tersembunyi.',
    },
    materials: {
      EN: '80% Double-Faced Melange Wool, 20% Cashmere blend.',
      ID: '80% Wol Melange Dua Muka, 20% Paduan Kasmir.',
    },
    details: {
      EN: [
        'Custom engraved two-way matte zipper',
        'Clean raglan sleeve construction for natural drape',
        'Invisible in-seam hand warmer pockets lined with brushed flannel',
        'Internal passport pocket with leather puller',
      ],
      ID: [
        'Ritsleting dua arah berukir khusus dengan lapisan matte',
        'Konstruksi lengan raglan yang rapi untuk jatuhan alami',
        'Saku penghangat tangan tak terlihat berlapisan flanel lembut',
        'Saku paspor internal dengan penarik kulit asli',
      ],
    },
    colors: [
      { name: { EN: 'Dark Espresso', ID: 'Espresso Gelap' }, hex: '#3A230A' },
      { name: { EN: 'Sage Green', ID: 'Hijau Sage' }, hex: '#8DA28C' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    isNew: true,
    isFeatured: true,
    modelInfo: {
      EN: 'Model is 185cm wearing size L for structured outerwear volume.',
      ID: 'Model bertinggi 185cm mengenakan ukuran L untuk volume luar yang kokoh.',
    },
  },
  {
    id: 'prod-classic-tote-bag',
    name: {
      EN: 'Classic Tote Bag',
      ID: 'Tas Tote Klasik',
    },
    price: 299000,
    category: 'accessories',
    categoryLabel: {
      EN: 'Accessories',
      ID: 'Aksesori',
    },
    image: '/src/assets/images/product_classic_tote_1794479411332.jpg',
    gallery: [
      '/src/assets/images/product_classic_tote_1794479411332.jpg',
      '/src/assets/images/lookbook_urban_elegance_1794479411346.jpg',
    ],
    description: {
      EN: 'A structured architectural unisex tote crafted from full-grain vegetable-tanned leather and water-repellent canvas. Sized comfortably to accommodate a 16-inch laptop, sketchbook, and daily essentials.',
      ID: 'Tas jinjing uniseks arsitektural yang dibuat dari kulit sapi samak nabati dan kanvas tahan air. Didesain dengan ukuran pas untuk laptop 16 inci, buku sketsa, dan perlengkapan harian Anda.',
    },
    materials: {
      EN: 'Vegetable-tanned full-grain leather straps and trim with organic cotton canvas body.',
      ID: 'Tali kulit nabati pilihan dan trim dengan bodi kanvas katun organik tahan lama.',
    },
    details: {
      EN: [
        'Reinforced bridle leather tubular handles with 24cm drop',
        'Magnetic snap center closure and brass key leash',
        'Interior zippered organization pouch and padded tablet pocket',
        'Protective brass base feet to elevate bag off surfaces',
      ],
      ID: [
        'Tali pegangan kulit kokoh dengan jarak jatuh 24cm',
        'Kancing magnet tengah dan pengait kunci kuningan',
        'Kantong ritsleting dalam dan kompartemen tablet empuk',
        'Kaki dasar kuningan pelindung agar tas tidak kotor saat diletakkan',
      ],
    },
    colors: [
      { name: { EN: 'Muted Butter Cream', ID: 'Krem Mentega' }, hex: '#EEE9C1' },
      { name: { EN: 'Dark Espresso', ID: 'Espresso Gelap' }, hex: '#3A230A' },
      { name: { EN: 'Sage Green', ID: 'Hijau Sage' }, hex: '#8DA28C' },
    ],
    sizes: ['One Size'],
    isNew: false,
    isFeatured: true,
    modelInfo: {
      EN: 'Dimensions: 40cm (W) x 34cm (H) x 14cm (D). Handle drop: 24cm.',
      ID: 'Dimensi: 40cm (L) x 34cm (T) x 14cm (Tebal). Jarak tali: 24cm.',
    },
  },
  {
    id: 'prod-trench-coat',
    name: {
      EN: 'Sculptural Trench Coat',
      ID: 'Mantel Trench Skulptural',
    },
    price: 1499000,
    category: 'outerwear',
    categoryLabel: {
      EN: 'Outerwear',
      ID: 'Pakaian Luar',
    },
    image: '/src/assets/images/hero_editorial_duo_1794479387597.jpg',
    gallery: [
      '/src/assets/images/hero_editorial_duo_1794479387597.jpg',
      '/src/assets/images/lookbook_urban_elegance_1794479411346.jpg',
    ],
    description: {
      EN: 'A sweeping, double-breasted unisex trench coat rendered in waterproof gabardine cotton. Features exaggerated storm flaps, a removable self-tie belt, and horn button hardware.',
      ID: 'Mantel trench uniseks bervolume panjang dengan katun gabardine tahan air. Dilengkapi pelindung angin lebar, sabuk pinggang lepas-pasang, dan kancing tanduk khas.',
    },
    materials: {
      EN: '100% Water-Resistant Compact Cotton Gabardine.',
      ID: '100% Katun Gabardine Padat Tahan Percikan Air.',
    },
    details: {
      EN: [
        'Floor-grazing architectural length',
        'Adjustable wrist buckle straps',
        'Deep storm welt pockets',
        'Detachable self-fabric belt with wrapped buckle',
      ],
      ID: [
        'Panjang arsitektural menyapu elegan',
        'Sabuk gesper pergelangan tangan yang dapat diatur',
        'Saku welt dalam pelindung cuaca',
        'Sabuk pinggang kain senada dengan gesper terbungkus',
      ],
    },
    colors: [
      { name: { EN: 'Sage Green', ID: 'Hijau Sage' }, hex: '#8DA28C' },
      { name: { EN: 'Soft Ivory', ID: 'Gading Lembut' }, hex: '#F7F5EF' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    isNew: true,
    isFeatured: true,
    modelInfo: {
      EN: 'Unisex drape designed for all frames. Sized for light layering beneath.',
      ID: 'Jatuhan uniseks untuk semua postur tubuh. Berukuran pas untuk layering.',
    },
  },
  {
    id: 'prod-cardholder',
    name: {
      EN: 'Minimalist Leather Cardholder',
      ID: 'Dompet Kartu Kulit Minimalis',
    },
    price: 199000,
    category: 'accessories',
    categoryLabel: {
      EN: 'Accessories',
      ID: 'Aksesori',
    },
    image: '/src/assets/images/product_classic_tote_1794479411332.jpg',
    gallery: [
      '/src/assets/images/product_classic_tote_1794479411332.jpg',
    ],
    description: {
      EN: 'Hand-burnished Italian calfskin card case with four exterior slots and a central banknote pocket. Finished with hot-stamped gold foil CASSATAVI branding.',
      ID: 'Tempat kartu kulit sapi Italia halus buatan tangan dengan empat slot kartu luar dan kompartemen uang tunai tengah. Diakhiri cap foil emas CASSATAVI mewah.',
    },
    materials: {
      EN: '100% Italian Vegetable-Tanned Calfskin Leather.',
      ID: '100% Kulit Anak Sapi Samak Nabati Asli Italia.',
    },
    details: {
      EN: [
        '4 curved card slots for easy thumb extraction',
        'Central pocket lined in moiré fabric',
        'Hand-painted and beeswax-sealed beveled edges',
        'Ultra-slim 3mm profile fits seamlessly in any pocket',
      ],
      ID: [
        '4 slot kartu melengkung untuk pengambilan mudah',
        'Kantong tengah berlapisan kain moiré halus',
        'Tepian dicat tangan dan dilapisi lilin lebah alami',
        'Profil ekstra ramping 3mm pas di saku celana atau jas',
      ],
    },
    colors: [
      { name: { EN: 'Dark Espresso', ID: 'Espresso Gelap' }, hex: '#3A230A' },
      { name: { EN: 'Burnt Orange', ID: 'Oranye Terakota' }, hex: '#A4530C' },
      { name: { EN: 'Sage Green', ID: 'Hijau Sage' }, hex: '#8DA28C' },
    ],
    sizes: ['One Size'],
    isNew: false,
    isFeatured: false,
  },
];
