export interface Flavor {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  reviewsCount: number;
  image: string;
  isPopular?: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  category: 'Classic' | 'Signature' | 'Seasonal';
  bgColor: string;
  tagColor: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  details?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  review: string;
  stars: number;
  avatar: string;
}

export interface Store {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  mapsUrl: string;
}

export interface SundaeIngredient {
  id: string;
  name: string;
  type: 'base' | 'sauce' | 'topping' | 'cookie' | 'cone';
  price: number;
  color: string; // hex or tailwind color
  emoji?: string;
  image?: string;
}
