import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Coffee, Utensils, IceCream, Wine, Search, Star, Plus, Check, XCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItemId, setAddedItemId] = useState<number | null>(null);
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const categories = [
    { name: 'All', icon: <Search className="h-5 w-5" /> },
    { name: 'Coffee', icon: <Coffee className="h-5 w-5" /> },
    { name: 'Beverages', icon: <Wine className="h-5 w-5" /> },
    { name: 'Snacks', icon: <Utensils className="h-5 w-5" /> },
    { name: 'Desserts', icon: <IceCream className="h-5 w-5" /> },
  ];

  const menuItems = [
    {
      id: 1,
      name: "Saffron Infused Latte",
      price: "₹345",
      category: "Coffee",
      desc: "Premium espresso with hand-picked Kashmiri saffron and velvety milk.",
      img: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&q=80&w=800",
      featured: true
    },
    {
      id: 2,
      name: "Heritage Filter Coffee",
      price: "₹225",
      category: "Coffee",
      desc: "Traditional South Indian style brew with chicory and frothed milk.",
      img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800",
      featured: true
    },
    {
      id: 3,
      name: "Cardamom Mocha",
      price: "₹315",
      category: "Coffee",
      desc: "Rich dark chocolate meets aromatic cardamom in this signature blend.",
      img: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800",
      featured: false
    },
    {
      id: 4,
      name: "Masala Chai Latte",
      price: "₹245",
      category: "Beverages",
      desc: "Spiced Indian tea concentrate with steamed milk and cinnamon dust.",
      img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800",
      featured: false
    },
    {
      id: 5,
      name: "Paneer Tikka Sandwich",
      price: "₹285",
      category: "Snacks",
      desc: "Grilled sourdough with marinated paneer, mint chutney, and veggies.",
      img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=800",
      featured: true
    },
    {
      id: 6,
      name: "Rose & Pistachio Cake",
      price: "₹325",
      category: "Desserts",
      desc: "Delicate sponge cake infused with rose water and topped with pistachios.",
      img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800",
      featured: true
    },
    {
      id: 7,
      name: "Cold Brew Tonic",
      price: "₹275",
      category: "Coffee",
      desc: "12-hour steeped cold brew with tonic water and a twist of orange.",
      img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800",
      featured: false
    },
    {
      id: 8,
      name: "Iced Hibiscus Tea",
      price: "₹215",
      category: "Beverages",
      desc: "Refreshing floral tea with a hint of lemon and honey.",
      img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=800",
      featured: false
    }
  ];

  const handleAdd = (item: any) => {
    addToCart(item);
    setAddedItemId(item.id);
    showToast(`${item.name} added to cart!`, 'success');
    setTimeout(() => setAddedItemId(null), 2000);
  };

  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           item.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

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
            Curated Selection
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 text-[#1A1A1A]"
          >
            Our Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            Discover a symphony of flavors where traditional Indian ingredients 
            meet contemporary brewing techniques.
          </motion.p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 text-[#D4AF37]/10 animate-pulse">
          <Coffee className="h-32 w-32" />
        </div>
        <div className="absolute bottom-10 right-10 text-[#D4AF37]/10 animate-pulse delay-700">
          <Utensils className="h-32 w-32" />
        </div>
      </section>

      {/* Search & Categories */}
      <section className="sticky top-20 z-40 bg-[#FDFBF7]/80 backdrop-blur-md border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4 overflow-x-auto pb-2 scrollbar-hide w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    activeCategory === cat.name 
                      ? 'bg-[#D4AF37] text-white shadow-lg shadow-[#D4AF37]/20 scale-105' 
                      : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>
            
            <div className="relative w-full md:w-64 lg:w-80 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-[#D4AF37] transition-colors" />
              <input
                type="text"
                placeholder="Search our menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-50 border border-gray-100 rounded-full pl-12 pr-4 py-3 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <XCircle className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-[#FDFBF7]">
        {filteredItems.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-10 w-10 text-gray-300" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#1A1A1A] mb-2">No items found</h3>
            <p className="text-gray-500">Try adjusting your search or category filters.</p>
            <button 
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-6 text-[#D4AF37] font-bold hover:underline"
            >
              Clear all filters
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    {item.featured && (
                      <div className="absolute top-4 left-4 bg-[#D4AF37] text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-current" />
                        <span>Popular</span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-[#8B4513] font-bold">
                      {item.price}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-serif font-bold group-hover:text-[#D4AF37] transition-colors">
                        {item.name}
                      </h3>
                    </div>
                    <p className="text-gray-500 text-sm mb-4 uppercase tracking-widest font-medium">
                      {item.category}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {item.desc}
                    </p>
                    <button 
                      onClick={() => handleAdd(item)}
                      className={`w-full flex items-center justify-center space-x-2 py-3 rounded-xl font-bold transition-all ${
                        addedItemId === item.id 
                          ? 'bg-green-500 text-white border-green-500' 
                          : 'border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white'
                      }`}
                    >
                      {addedItemId === item.id ? (
                        <>
                          <Check className="h-5 w-5" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <Plus className="h-5 w-5" />
                          <span>Add to Order</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </section>

      {/* Special Offer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-[#FDFBF7] rounded-[3rem] p-12 md:p-20 relative overflow-hidden border border-[#D4AF37]/20">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#D4AF37] font-serif italic text-xl mb-4 block">Limited Time</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A] mb-6">
                Monsoon Special: <br /> Ginger & Jaggery Brew
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Warm up your rainy afternoons with our specially crafted blend of fresh 
                ginger, organic jaggery, and premium Arabica beans.
              </p>
              <button 
                onClick={() => handleAdd({
                  id: 999,
                  name: "Ginger & Jaggery Brew",
                  price: "₹295",
                  img: "https://images.unsplash.com/photo-1594631252845-29fc4586c562?auto=format&fit=crop&q=80&w=800"
                })}
                className="bg-[#1A1A1A] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-black transition-all"
              >
                Try it Now - ₹295
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1563090308-5a7889e40542?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Special Brew"
                className="rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-6 -right-6 bg-[#D4AF37] text-white w-24 h-24 rounded-full flex items-center justify-center text-center p-4 font-bold animate-pulse">
                New Arrival
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
