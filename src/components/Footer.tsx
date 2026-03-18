import React from 'react';
import { Coffee, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-[#D4AF37]" />
              <span className="text-2xl font-serif font-bold tracking-tight">The Gilded Bean</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Crafting moments of pure bliss through the art of Indian coffee and heritage brewing since 1994.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#D4AF37] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#D4AF37] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#D4AF37] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/menu" className="hover:text-[#D4AF37] transition-colors">Our Menu</Link></li>
              <li><Link to="/about" className="hover:text-[#D4AF37] transition-colors">Our Story</Link></li>
              <li><Link to="/gallery" className="hover:text-[#D4AF37] transition-colors">Gallery</Link></li>
              <li><Link to="/booking" className="hover:text-[#D4AF37] transition-colors">Reservations</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#D4AF37]" />
                <span>123 Heritage Lane, Jaipur, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#D4AF37]" />
                <a href="tel:+919876543210" className="hover:text-[#D4AF37] transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#D4AF37]" />
                <a href="mailto:hello@gildedbean.com" className="hover:text-[#D4AF37] transition-colors">hello@gildedbean.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe for exclusive offers and updates.</p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-[#D4AF37]"
              />
              <button className="bg-[#D4AF37] px-4 py-2 rounded-lg hover:bg-[#B8962E] transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <div className="flex flex-col md:flex-row items-center md:space-x-4">
            <p>© 2026 The Gilded Bean. All rights reserved.</p>
            <a 
              href="https://github.com/SShailesh-Dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-2 md:mt-0 text-[#D4AF37] hover:text-[#B8962E] transition-colors font-medium"
            >
            © 2026 Shailesh
            </a>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
