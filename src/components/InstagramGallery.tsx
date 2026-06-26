import React, { useState } from 'react';
import { INSTAGRAM_GALLERY } from '../data';
import { Heart, MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const CAPTIONS: Record<string, string> = {
  'ig-1': 'Fresh, creamy Cookies & Cream scoops being crafted. Double-stuffed chocolate cookie chunks in every single bite! 🍦🍪 #CookiePremium #SweetTooth',
  'ig-2': 'Our Signature Double Cone catch of the day! Which two premium flavors are you stacking today? 🤤🍦 #VibeCheck #CookiePremium #IceCreamCone',
  'ig-3': 'Watch that drizzle! Adding thick warm caramel-fudge rivers over our premium vanilla bean base. 🍯🍫 #DrizzleArt #FoodAesthetic #CookiePremium',
  'ig-4': 'Introducing Strawberry Bliss! Infused with organic forest strawberries and topped with buttery biscuit crumbs. 🍓✨ #SeasonalDrop #StrawberryBliss #CookiePremium',
  'ig-5': 'Artisanal craftsmanship behind the scenes. Pure organic ingredients, real butter cookies, and zero shortcuts. This is the premium standard. 🍪🥣 #BehindTheScoop #ArtisanalDesserts #CookiePremium',
  'ig-6': 'The ultimate cheat day double-header. Loaded cookie milkshake jars topped with mountain-high whipped cream and mini chocolate cookies! 🍪🥤 #MilkshakeMagic #ExtremeDesserts #CookiePremium'
};

export const InstagramGallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [galleryItems, setGalleryItems] = useState(INSTAGRAM_GALLERY);
  const [commentInput, setCommentInput] = useState('');
  const [commentsMap, setCommentsMap] = useState<Record<string, string[]>>({
    'ig-1': ['Omg this looks absolutely unreal! 😍', 'Heading to Soho right now!', 'Best cookies & cream in the city hands down!'],
    'ig-2': ['That cone is a work of art!', 'Is that the Pistachio Dream on top? 💚', 'Double stack is the only correct way!'],
    'ig-3': ['My jaw literally dropped at this drizzle.', 'Stop it, I am trying to stick to my diet 😭', 'That caramel look is luxurious.'],
    'ig-4': ['Strawberry Bliss is finally back! Best seasonal flavor!', 'The biscuit crumbs are a genius touch 🍓', 'So clean and fresh!'],
    'ig-5': ['The aesthetic here is immaculate.', 'Literal design goals, and flavor goals too!', 'Such a gorgeous flatlay! ig-5 is elite! ⭐'],
    'ig-6': ['I need one of those jars in my life immediately.', 'Can we custom order these milkshakes?', 'My kids loved this one so much!']
  });

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setGalleryItems(prev =>
      prev.map(item => {
        if (item.id === id) {
          const isLiked = (item as any).userLiked;
          const likesNum = parseFloat(item.likes.replace('k', '')) * 1000;
          const newLikesNum = isLiked ? likesNum - 1 : likesNum + 1;
          const newLikesStr = newLikesNum >= 1000 ? `${(newLikesNum / 1000).toFixed(1)}k` : `${newLikesNum}`;
          return {
            ...item,
            likes: newLikesStr,
            userLiked: !isLiked
          };
        }
        return item;
      })
    );
  };

  const handleAddComment = (id: string) => {
    if (!commentInput.trim()) return;
    const currentComments = commentsMap[id] || [];
    setCommentsMap({
      ...commentsMap,
      [id]: [...currentComments, commentInput]
    });
    setCommentInput('');
  };

  const currentItem = lightboxIndex !== null ? galleryItems[lightboxIndex] : null;

  return (
    <section className="py-24 bg-cream-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-strawberry-pink font-display font-extrabold text-sm tracking-widest uppercase bg-strawberry-pink/10 px-4 py-1.5 rounded-full">
            INSTAGRAM FEED
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-chocolate-brown mt-4">
            #CookiePremium
          </h2>
          <p className="mt-4 text-sm sm:text-base text-chocolate-brown/70 font-normal">
            Follow our sweet journey on Instagram for exclusive drops, happy faces, and daily scoop counts.
          </p>
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setLightboxIndex(index)}
              className="relative aspect-square rounded-3xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-all"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={`Cookie Premium Instagram Shot ${item.id}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-chocolate-brown/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 z-10 text-white font-display font-bold">
                <button
                  onClick={(e) => handleLike(item.id, e)}
                  className="flex items-center gap-1.5 hover:text-strawberry-pink transition-colors"
                >
                  <Heart size={20} className={(item as any).userLiked ? 'fill-strawberry-pink text-strawberry-pink' : 'fill-white'} />
                  <span>{item.likes}</span>
                </button>
                <div className="flex items-center gap-1.5">
                  <MessageCircle size={20} className="fill-white" />
                  <span>{(commentsMap[item.id] || []).length + item.comments}</span>
                </div>
              </div>

              {/* Float Mini Stamp */}
              <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm p-1.5 rounded-xl text-chocolate-brown opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <InstagramIcon className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX PREVIEW MODAL */}
      <AnimatePresence>
        {currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-10"
          >
            {/* Click backdrop to close */}
            <div className="absolute inset-0" onClick={() => setLightboxIndex(null)} />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl relative z-10 max-w-4xl w-full grid grid-cols-1 md:grid-cols-12 max-h-[90vh] md:max-h-[80vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full z-20 transition-all active:scale-90"
                aria-label="Close Lightbox"
              >
                <X size={20} />
              </button>

              {/* Photo Box */}
              <div className="md:col-span-7 bg-stone-900 flex items-center justify-center max-h-[40vh] md:max-h-full">
                <img
                  src={currentItem.image}
                  alt={`Cookie Premium Lightbox`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover max-h-[40vh] md:max-h-full"
                />
              </div>

              {/* Comments & Interactions Box */}
              <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between h-full max-h-[50vh] md:max-h-full overflow-y-auto">
                <div>
                  {/* Account detail */}
                  <div className="flex items-center gap-3 border-b border-stone-100 pb-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-strawberry-pink to-cookie-gold flex items-center justify-center text-white font-bold font-display text-sm">
                      CP
                    </div>
                    <div>
                      <h4 className="font-display font-extrabold text-sm text-chocolate-brown flex items-center gap-1">
                        cookie_premium
                        <span className="text-sky-blue text-xs">⚡</span>
                      </h4>
                      <p className="text-[10px] text-stone-400 font-semibold uppercase">Los Angeles, CA</p>
                    </div>
                  </div>

                  {/* Comments list scrolling */}
                  <div className="space-y-4 max-h-[160px] md:max-h-[220px] overflow-y-auto pr-2">
                    <div className="flex items-start gap-2 text-xs">
                      <span className="font-bold text-chocolate-brown">cookie_premium</span>
                      <span className="text-chocolate-brown/80">{CAPTIONS[currentItem.id] || "Double standard chocolate oreo cookie scoops stacked to perfection in our signature waffle cup! 🍦🍪"}</span>
                    </div>

                    {(commentsMap[currentItem.id] || []).map((comm, cidx) => (
                      <div key={cidx} className="flex items-start gap-2 text-xs animate-fade-in">
                        <span className="font-bold text-chocolate-brown">user_{100 + cidx}</span>
                        <span className="text-chocolate-brown/80">{comm}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interaction Footer */}
                <div className="border-t border-stone-100 pt-4 mt-6">
                  {/* Actions (Heart, share, like counters) */}
                  <div className="flex items-center justify-between mb-3 text-chocolate-brown">
                    <div className="flex gap-4">
                      <button
                        onClick={(e) => handleLike(currentItem.id, e)}
                        className="hover:text-strawberry-pink transition-colors flex items-center gap-1.5 font-bold"
                      >
                        <Heart size={20} className={(currentItem as any).userLiked ? 'fill-strawberry-pink text-strawberry-pink' : ''} />
                        <span className="text-xs">{currentItem.likes}</span>
                      </button>
                      <div className="flex items-center gap-1.5 text-xs font-bold">
                        <MessageCircle size={20} />
                        <span>{(commentsMap[currentItem.id] || []).length + currentItem.comments}</span>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase text-stone-400 font-bold tracking-wider">Just Now</span>
                  </div>

                  {/* Comment Input */}
                  <div className="flex items-center gap-2 bg-stone-50 border border-stone-200/60 rounded-full px-3.5 py-1.5">
                    <input
                      type="text"
                      placeholder="Add a comment..."
                      value={commentInput}
                      onChange={(e) => setCommentInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleAddComment(currentItem.id)}
                      className="w-full text-xs bg-transparent border-none focus:outline-none text-chocolate-brown"
                    />
                    <button
                      onClick={() => handleAddComment(currentItem.id)}
                      className="p-1.5 bg-chocolate-brown hover:bg-cookie-gold text-white rounded-full transition-colors active:scale-90 shrink-0"
                      aria-label="Send Comment"
                    >
                      <Send size={12} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// SVG Icon Helper
const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
