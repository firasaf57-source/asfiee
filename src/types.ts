export type Language = 'EN' | 'ID';

export type Page = 'home' | 'collection' | 'product-detail' | 'about' | 'lookbook' | 'contact';

export type ProductCategory = 'outerwear' | 'tops' | 'trousers' | 'essentials' | 'accessories';

export interface ProductColor {
  name: Record<Language, string>;
  hex: string;
}

export interface Product {
  id: string;
  name: Record<Language, string>;
  price: number; // in IDR
  category: ProductCategory;
  categoryLabel: Record<Language, string>;
  image: string;
  gallery: string[];
  description: Record<Language, string>;
  materials: Record<Language, string>;
  details: Record<Language, string[]>;
  colors: ProductColor[];
  sizes: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  modelInfo?: Record<Language, string>;
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export type CampaignName = 'THE NEW FORM' | 'URBAN ELEGANCE' | 'BEYOND BOUNDARIES' | 'MODERN IDENTITY';

export interface LookbookItem {
  id: string;
  campaign: CampaignName;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  image: string;
  featuredProductId?: string;
  featuredProductName?: Record<Language, string>;
  aspect: 'portrait' | 'landscape' | 'tall';
  notes: Record<Language, string>;
}
