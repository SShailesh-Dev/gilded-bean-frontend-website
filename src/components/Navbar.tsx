import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Coffee, Menu, X, ShoppingBag, Trash2, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cart, totalItems, totalPrice, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Book Table', path: '/booking' },
  ];

  const isHomePage = location.pathname === '/';
  const isDarkNavbar = scrolled || !isHomePage;

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isDarkNavbar ? 'bg-[#1A1A1A] py-4 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-[#D4AF37]" />
              <span className="text-2xl font-serif font-bold tracking-tight text-white">
                The Gilded Bean
              </span>
            </Link>
            
            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-[#D4AF37] ${
                    location.pathname === link.path 
                      ? 'text-[#D4AF37]' 
                      : 'text-white/90'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setIsCartOpen(true)}
                  className="relative p-2 text-white hover:text-[#D4AF37] transition-colors"
                >
                  <ShoppingBag className="h-6 w-6" />
                  {totalItems > 0 && (
                    <span className="absolute top-0 right-0 bg-[#D4AF37] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#1A1A1A]">
                      {totalItems}
                    </span>
                  )}
                </button>
                <button 
                  onClick={() => setIsCartOpen(true)}
                  className="bg-[#D4AF37] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#B8962E] transition-colors"
                >
                  Order Online
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-white"
              >
                <ShoppingBag className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 bg-[#D4AF37] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#1A1A1A]">
                    {totalItems}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-full left-0 w-full bg-[#1A1A1A] shadow-xl py-6 px-4 space-y-4"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-white hover:text-[#D4AF37]"
                >
                  {link.name}
                </Link>
              ))}
              <button 
                onClick={() => {
                  setIsOpen(false);
                  setIsCartOpen(true);
                }}
                className="w-full bg-[#D4AF37] text-white py-3 rounded-xl font-medium"
              >
                Order Online
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-[#1A1A1A] text-white">
                <div className="flex items-center space-x-3">
                  <ShoppingBag className="h-6 w-6 text-[#D4AF37]" />
                  <h2 className="text-xl font-serif font-bold">Your Order</h2>
                </div>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center">
                      <ShoppingBag className="h-10 w-10 text-gray-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-[#1A1A1A]">Your cart is empty</h3>
                      <p className="text-gray-500">Looks like you haven't added any coffee yet.</p>
                    </div>
                    <Link 
                      to="/menu" 
                      onClick={() => setIsCartOpen(false)}
                      className="text-[#D4AF37] font-bold hover:underline"
                    >
                      Browse our menu
                    </Link>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex space-x-4 group">
                      <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="font-serif font-bold text-[#1A1A1A]">{item.name}</h4>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="text-[#D4AF37] font-bold mb-3">{item.price}</p>
                        <div className="flex items-center space-x-3">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="font-bold w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 border-t border-gray-100 bg-gray-50 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Subtotal</span>
                    <span className="text-2xl font-serif font-bold text-[#1A1A1A]">₹{totalPrice}</span>
                  </div>
                  <Link 
                    to="/checkout"
                    onClick={() => setIsCartOpen(false)}
                    className="w-full bg-[#D4AF37] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#B8962E] transition-all shadow-lg shadow-[#D4AF37]/20 text-center block"
                  >
                    Checkout Now
                  </Link>
                  <p className="text-center text-xs text-gray-400">
                    Taxes and shipping calculated at checkout
                  </p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
