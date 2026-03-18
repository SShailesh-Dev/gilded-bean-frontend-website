import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Camera, Play } from 'lucide-react';

const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800",
      title: "The Main Lounge",
      category: "Interior"
    },
    {
      url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
      title: "Morning Brew",
      category: "Coffee"
    },
    {
      url: "https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&q=80&w=800",
      title: "Saffron Latte Art",
      category: "Coffee"
    },
    {
      url: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800",
      title: "Artisanal Roasting",
      category: "Process"
    },
    {
      url: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=800",
      title: "Signature Snacks",
      category: "Food"
    },
    {
      url: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800",
      title: "The Roastery",
      category: "Interior"
    },
    {
      url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800",
      title: "Heritage Filter",
      category: "Coffee"
    },
    {
      url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800",
      title: "Dessert Selection",
      category: "Food"
    },
    {
      url: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800",
      title: "Masala Chai",
      category: "Beverages"
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-[#FDFBF7]">
      {/* Header */}
      <section className="bg-[#FDFBF7] py-20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#D4AF37] font-serif italic text-xl mb-4 block"
          >
            Visual Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 text-[#1A1A1A]"
          >
            The Gilded Bean
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            A glimpse into our world of coffee, heritage, and the moments 
            that make us who we are.
          </motion.p>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 text-[#D4AF37]/10 animate-pulse">
          <Camera className="h-32 w-32" />
        </div>
        <div className="absolute bottom-10 right-10 text-[#D4AF37]/10 animate-pulse delay-700">
          <Instagram className="h-32 w-32" />
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer overflow-hidden rounded-3xl break-inside-avoid"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-[#D4AF37] text-sm font-bold uppercase tracking-widest mb-2">
                  {image.category}
                </span>
                <h3 className="text-white text-2xl font-serif font-bold">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Instagram Feed CTA */}
      <section className="py-20 bg-[#1A1A1A] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-4 bg-white/5 rounded-full mb-8"
          >
            <Instagram className="h-10 w-10 text-[#D4AF37]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            Follow Our Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto"
          >
            Join our community on Instagram for daily doses of coffee inspiration, 
            behind-the-scenes looks, and exclusive updates.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="inline-flex items-center bg-[#D4AF37] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-[#B8962E] transition-all"
          >
            @thegildedbean <Play className="ml-2 h-4 w-4 fill-current" />
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
