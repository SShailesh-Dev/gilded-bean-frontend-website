import React from 'react';
import { motion } from 'motion/react';
import { Coffee, ArrowRight, Star, Clock, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1920"
            alt="Hero Background"
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#D4AF37] font-serif italic text-xl mb-4 block"
          >
            Established 1994
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 leading-tight"
          >
            The Gilded Bean
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Experience the perfect blend of heritage and modern brewing. 
            A sanctuary for coffee lovers in the heart of the city.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/menu"
              className="bg-[#D4AF37] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-[#B8962E] transition-all flex items-center group"
            >
              Explore Menu
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/booking"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition-all"
            >
              Book a Table
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Featured Menu Preview */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] font-serif italic text-lg mb-2 block">Our Favorites</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A]">Featured Brews</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                name: "Saffron Infused Latte",
                price: "₹345",
                desc: "Premium espresso with hand-picked Kashmiri saffron and velvety milk.",
                img: "https://images.unsplash.com/photo-1684084373817-e51c7f7ab041?q=80&w=1487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              },
              {
                name: "Heritage Filter Coffee",
                price: "₹225",
                desc: "Traditional South Indian style brew with chicory and frothed milk.",
                img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800"
              },
              {
                name: "Cardamom Mocha",
                price: "₹315",
                desc: "Rich dark chocolate meets aromatic cardamom in this signature blend.",
                img: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800"
              }
            ].map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/5]">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-[#8B4513] font-bold">
                    {item.price}
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-2 group-hover:text-[#D4AF37] transition-colors">{item.name}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1000"
                  alt="Cafe Interior"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute -bottom-10 -right-10 bg-[#D4AF37] p-10 rounded-2xl hidden md:block"
              >
                <div className="text-white text-center">
                  <span className="text-5xl font-serif font-bold block mb-1">30+</span>
                  <span className="text-sm uppercase tracking-widest font-medium">Years of Heritage</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <span className="text-[#D4AF37] font-serif italic text-lg block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A] leading-tight">
                Where Tradition Meets Modern Brewing
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in the heart of Jaipur in 1994, The Gilded Bean started as a small family-run 
                roastery. Today, we continue our legacy of sourcing the finest beans from the 
                Western Ghats, roasting them to perfection, and serving them in an atmosphere 
                that celebrates Indian heritage.
              </p>
              <div className="grid grid-cols-2 gap-8 py-4">
                <div className="flex items-start space-x-3">
                  <div className="p-3 bg-[#D4AF37]/10 rounded-xl">
                    <Coffee className="h-6 w-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg">Ethical Sourcing</h4>
                    <p className="text-sm text-gray-500">Directly from farmers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-3 bg-[#D4AF37]/10 rounded-xl">
                    <Star className="h-6 w-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg">Award Winning</h4>
                    <p className="text-sm text-gray-500">Best Cafe 2023</p>
                  </div>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center text-[#D4AF37] font-bold hover:translate-x-2 transition-transform"
              >
                Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Moments at Gilded Bean Section */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-serif font-bold text-[#1A1A1A] mb-2">Moments at Gilded Bean</h2>
              <p className="text-gray-500">Tag us @thegildedbean on Instagram</p>
            </div>
            <Link to="/gallery" className="text-[#1A1A1A] font-bold flex items-center hover:text-[#D4AF37] transition-colors">
              View More Gallery <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { 
                img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800", 
                label: "Gallery 1",
                pos: "top-1/3 left-1/2 -translate-x-1/2"
              },
              { 
                img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800", 
                label: "",
                pos: ""
              },
              { 
                img: "https://images.unsplash.com/photo-1574914629385-46448b767aec?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
                label: "Gallery 3",
                pos: "bottom-12 left-1/2 -translate-x-1/2"
              },
              { 
                img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800", 
                label: "Gallery 4",
                pos: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              },
              { 
                img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=800", 
                label: "",
                pos: ""
              },
              { 
                img: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800", 
                label: "Gallery 6",
                pos: "top-1/4 left-1/2 -translate-x-1/2"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-3xl overflow-hidden group bg-[#EAE3D5]"
              >
                <img
                  src={item.img}
                  alt={item.label || "Gallery Image"}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
                  referrerPolicy="no-referrer"
                />
                {item.label && (
                  <div className={`absolute ${item.pos} text-center pointer-events-none`}>
                    <span className="text-[#1A1A1A]/60 font-serif italic text-xl md:text-2xl block mb-1 uppercase tracking-widest">{item.label}</span>
                    {idx === 3 && <div className="text-[10px] text-[#1A1A1A]/40 uppercase tracking-[0.3em] mt-2">Heritage Since 1994</div>}
                    {idx === 5 && <div className="text-[10px] text-[#1A1A1A]/40 uppercase tracking-[0.3em] mt-2">Natural Since 94</div>}
                  </div>
                )}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#FDFBF7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] font-serif italic text-lg mb-2 block">Guest Experiences</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A]">What People Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ananya Sharma",
                role: "Food Blogger",
                text: "The Saffron Latte is a revelation. The atmosphere here is unlike any other cafe in India - truly premium and welcoming.",
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
              },
              {
                name: "Vikram Mehta",
                role: "Coffee Enthusiast",
                text: "Best filter coffee I've had outside of Chennai. The attention to detail in their roasting process is evident in every sip.",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
              },
              {
                name: "Priya Das",
                role: "Architect",
                text: "A perfect spot for meetings or just to unwind. The interior design perfectly captures the essence of modern Indian luxury.",
                img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-3xl relative shadow-sm border border-gray-100"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-[#D4AF37]">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="absolute -top-4 -right-4 text-6xl text-[#D4AF37]/10 font-serif">"</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="bg-[#1A1A1A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white">
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-white/5 rounded-2xl">
                <Clock className="h-8 w-8 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-xl">Opening Hours</h4>
                <p className="text-gray-400">Mon - Sun: 8:00 AM - 11:00 PM</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-white/5 rounded-2xl">
                <MapPin className="h-8 w-8 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-xl">Our Location</h4>
                <p className="text-gray-400">123 Heritage Lane, Jaipur</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-white/5 rounded-2xl">
                <Phone className="h-8 w-8 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-xl">Get in Touch</h4>
                <a href="tel:+919876543210" className="text-gray-400 hover:text-[#D4AF37] transition-colors">+91 98765 43210</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
