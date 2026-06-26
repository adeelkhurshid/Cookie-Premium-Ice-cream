import { Flavor, Testimonial, Store, SundaeIngredient } from './types';

export const FLAVORS: Flavor[] = [
  {
    id: 'cookies-cream',
    name: 'Cookies & Cream',
    description: 'Rich vanilla ice cream loaded with double-stuffed chocolate cookie chunks and dynamic fudge swirls.',
    price: 6.50,
    rating: 4.9,
    reviewsCount: 342,
    image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true,
    category: 'Classic',
    bgColor: 'bg-stone-100',
    tagColor: 'bg-chocolate-brown text-cream-white'
  },
  {
    id: 'chocolate-avalanche',
    name: 'Chocolate Avalanche',
    description: 'Decadent dark Belgian chocolate ice cream swirled with chocolate fudge brownies and crispy cookie bits.',
    price: 6.75,
    rating: 4.8,
    reviewsCount: 289,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true,
    category: 'Classic',
    bgColor: 'bg-amber-100',
    tagColor: 'bg-amber-800 text-cream-white'
  },
  {
    id: 'strawberry-bliss',
    name: 'Strawberry Bliss',
    description: 'Creamy sweet cream infused with real organic mountain strawberry puree and soft biscuit crumbs.',
    price: 6.25,
    rating: 4.7,
    reviewsCount: 198,
    image: 'https://images.unsplash.com/photo-1488900128323-24ddcefdd64b?auto=format&fit=crop&q=80&w=600',
    isNew: true,
    category: 'Seasonal',
    bgColor: 'bg-rose-50',
    tagColor: 'bg-strawberry-pink text-white'
  },
  {
    id: 'caramel-crunch',
    name: 'Caramel Cookie Crunch',
    description: 'Velvety golden caramel ice cream with toasted butter cookies and heavy salted caramel ribbons.',
    price: 6.50,
    rating: 4.9,
    reviewsCount: 215,
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=600',
    category: 'Signature',
    bgColor: 'bg-amber-50',
    tagColor: 'bg-cookie-gold text-chocolate-brown font-semibold'
  },
  {
    id: 'pistachio-dream',
    name: 'Pistachio Dream',
    description: 'Authentic roasted Sicilian pistachio paste churned with whole crushed salted pistachios and white chocolate chips.',
    price: 7.25,
    rating: 4.9,
    reviewsCount: 176,
    image: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&q=80&w=600',
    category: 'Signature',
    bgColor: 'bg-emerald-50',
    tagColor: 'bg-mint-green text-emerald-950 font-medium'
  },
  {
    id: 'mango-magic',
    name: 'Mango Cookie Magic',
    description: 'Bright Alphonso mango sorbet swirled with buttery shortbread cookie crumbles and key lime accents.',
    price: 6.50,
    rating: 4.6,
    reviewsCount: 124,
    image: 'https://images.unsplash.com/photo-1534706936960-85aa403f57fa?auto=format&fit=crop&q=80&w=600',
    category: 'Seasonal',
    bgColor: 'bg-yellow-50',
    tagColor: 'bg-yellow-400 text-chocolate-brown font-semibold'
  },
  {
    id: 'blueberry-swirl',
    name: 'Blueberry Swirl',
    description: 'Wild forest blueberry ribbon folded elegantly into rich cream cheese ice cream with soft graham cookie pie crust.',
    price: 6.95,
    rating: 4.8,
    reviewsCount: 154,
    image: 'https://images.unsplash.com/photo-1549396564-3484f880467f?auto=format&fit=crop&q=80&w=600',
    isNew: true,
    category: 'Signature',
    bgColor: 'bg-purple-50',
    tagColor: 'bg-blueberry-purple text-white'
  },
  {
    id: 'vanilla-royale',
    name: 'Vanilla Royale',
    description: 'Double-folded Madagascar bourbon vanilla bean ice cream mixed with golden sugar butter cookies.',
    price: 5.95,
    rating: 4.8,
    reviewsCount: 412,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=600',
    category: 'Classic',
    bgColor: 'bg-orange-50/50',
    tagColor: 'bg-stone-500 text-white'
  }
];

export const BEST_SELLERS = [
  {
    id: 'bs-sandwich-oreo',
    name: 'Mega Oreo Cookie Sandwich',
    description: 'Double size homemade dark cocoa cookies sandwiching our signature cookies & cream ice cream, rolled in rainbow sprinkles.',
    price: 8.50,
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=600',
    rating: 4.9,
    badge: 'Legendary'
  },
  {
    id: 'bs-waffle-bowl',
    name: 'Dipped Waffle Dream Bowl',
    description: 'A crisp waffle bowl dipped in dark Belgian chocolate, loaded with Chocolate Avalanche and Caramel Crunch, topped with whole cookies.',
    price: 9.75,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600',
    rating: 4.9,
    badge: 'Bestseller'
  },
  {
    id: 'bs-cookie-cake',
    name: 'Cookie Premium Celebration Cake',
    description: 'Layers of Cookies & Cream and Strawberry Bliss ice cream, separated by a thick fudge cookie core, decorated with mini cones.',
    price: 34.00,
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13636?auto=format&fit=crop&q=80&w=600',
    rating: 5.0,
    badge: 'Popular'
  },
  {
    id: 'bs-macaron-pack',
    name: 'Ice Cream Macaron Box (6-Pack)',
    description: 'Six delicate French macarons stuffed with assortments of Pistachio, Mango, Blueberry, and Strawberry premium ice creams.',
    price: 18.00,
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80&w=600',
    rating: 4.8,
    badge: 'Gift Choice'
  }
];

export const SUNDAE_INGREDIENTS: SundaeIngredient[] = [
  // BASES
  { id: 'b-cookies', name: 'Cookies & Cream Scoop', type: 'base', price: 2.50, color: 'bg-stone-200', emoji: '🍨' },
  { id: 'b-chocolate', name: 'Chocolate Avalanche Scoop', type: 'base', price: 2.50, color: 'bg-amber-950', emoji: '🍫' },
  { id: 'b-strawberry', name: 'Strawberry Bliss Scoop', type: 'base', price: 2.50, color: 'bg-rose-400', emoji: '🍓' },
  { id: 'b-vanilla', name: 'Vanilla Royale Scoop', type: 'base', price: 2.25, color: 'bg-yellow-100', emoji: '🍦' },
  
  // SAUCES
  { id: 's-fudge', name: 'Warm Hot Fudge', type: 'sauce', price: 1.00, color: 'bg-stone-800', emoji: '🫗' },
  { id: 's-caramel', name: 'Salted Caramel Drizzle', type: 'sauce', price: 1.00, color: 'bg-amber-600', emoji: '🍯' },
  { id: 's-berry', name: 'Wild Berry Coulis', type: 'sauce', price: 1.00, color: 'bg-red-600', emoji: '🍒' },

  // TOPPINGS
  { id: 't-sprinkles', name: 'Rainbow Sprinkles', type: 'topping', price: 0.50, color: 'bg-pink-300', emoji: '🌈' },
  { id: 't-chips', name: 'Belgian Chocolate Chips', type: 'topping', price: 0.75, color: 'bg-amber-900', emoji: '🍪' },
  { id: 't-cherry', name: 'Maraschino Cherry', type: 'topping', price: 0.50, color: 'bg-red-500', emoji: '🍒' },
  { id: 't-almond', name: 'Toasted Almond Slivers', type: 'topping', price: 0.75, color: 'bg-yellow-700', emoji: '🥜' },

  // COOKIES
  { id: 'c-oreo', name: 'Double-Stuffed Oreo', type: 'cookie', price: 1.25, color: 'bg-neutral-800', emoji: '🍪' },
  { id: 'c-shortbread', name: 'Buttery Shortbread', type: 'cookie', price: 1.00, color: 'bg-amber-200', emoji: '🧇' },
  { id: 'c-brownie', name: 'Fudge Brownie Bites', type: 'cookie', price: 1.50, color: 'bg-yellow-950', emoji: '🍰' },

  // CONES/BOWLS
  { id: 'co-waffle', name: 'Signature Waffle Cone', type: 'cone', price: 1.50, color: 'bg-amber-400', emoji: '📐' },
  { id: 'co-chocolate', name: 'Chocolate Dipped Cone', type: 'cone', price: 2.00, color: 'bg-amber-900', emoji: '🍦' },
  { id: 'co-bowl', name: 'Waffle Bowl', type: 'cone', price: 1.75, color: 'bg-amber-500', emoji: '🥣' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Emily Harrison',
    role: 'Ice Cream Enthusiast & Food Blogger',
    review: 'Cookie Premium has officially ruined other ice creams for me! The signature Cookies & Cream is absolute heaven. It has the perfect creamy-to-cookie ratio, and the crusty chocolate crumbs make it out of this world.',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'test-2',
    name: 'Marcus Chen',
    role: 'Local Father & Sweet Tooth',
    review: 'My kids request Cookie Premium every single weekend! We tried the interactive sundae builder and had them delivered to our picnic spot in 15 minutes. Pure genius concept and elite-tier flavors.',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'test-3',
    name: 'Sophia Lorenza',
    role: 'Pastry Chef & Critic',
    review: 'As a pastry chef, I look for texture, air incorporation, and premium base quality. Cookie Premium excels incredibly. The Pistachio Dream has authentic roasted Sicilian pistachio notes and perfect density.',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'test-4',
    name: 'Julian Brooks',
    role: 'Fitness Coach & Cheat Day Specialist',
    review: 'If you are going to cheat, cheat with the best. The Chocolate Avalanche with fudge brownie bits and caramel cookies is the absolute king of desserts. Best delivery packaging, stayed frozen solid!',
    stars: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
  }
];

export const INSTAGRAM_GALLERY = [
  {
    id: 'ig-1',
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=400',
    likes: '1.2k',
    comments: 84
  },
  {
    id: 'ig-2',
    image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80&w=400',
    likes: '2.5k',
    comments: 112
  },
  {
    id: 'ig-3',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=400',
    likes: '958',
    comments: 42
  },
  {
    id: 'ig-4',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400',
    likes: '3.1k',
    comments: 201
  },
  {
    id: 'ig-5',
    image: 'https://images.unsplash.com/photo-1549396564-3484f880467f?auto=format&fit=crop&q=80&w=400',
    likes: '1.8k',
    comments: 69
  },
  {
    id: 'ig-6',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=400',
    likes: '2.2k',
    comments: 95
  }
];

export const STORES: Store[] = [
  {
    id: 'store-bh',
    name: 'Cookie Premium - Beverly Hills',
    address: '425 Rodeo Drive, Beverly Hills, CA 90210',
    phone: '(310) 555-0192',
    hours: 'Mon - Sun: 11:00 AM - 11:00 PM',
    mapsUrl: 'https://maps.google.com/?q=Rodeo+Drive+Beverly+Hills'
  },
  {
    id: 'store-soho',
    name: 'Cookie Premium - SoHo NYC',
    address: '84 Prince Street, New York, NY 10012',
    phone: '(212) 555-0143',
    hours: 'Mon - Sun: 11:00 AM - Midnight',
    mapsUrl: 'https://maps.google.com/?q=84+Prince+Street+Soho+New+York'
  },
  {
    id: 'store-sm',
    name: 'Cookie Premium - Santa Monica Pier',
    address: '200 Santa Monica Pier, Santa Monica, CA 90401',
    phone: '(310) 555-0176',
    hours: 'Mon - Sun: 10:00 AM - Midnight',
    mapsUrl: 'https://maps.google.com/?q=Santa+Monica+Pier'
  },
  {
    id: 'store-mia',
    name: 'Cookie Premium - South Beach Miami',
    address: '1020 Ocean Drive, Miami Beach, FL 33139',
    phone: '(305) 555-0210',
    hours: 'Mon - Sun: 11:00 AM - 1:00 AM',
    mapsUrl: 'https://maps.google.com/?q=1020+Ocean+Drive+Miami+Beach'
  }
];
