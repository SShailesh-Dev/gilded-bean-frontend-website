import React from 'react';
import { motion } from 'motion/react';
import { Coffee, Star, Users, Award, Heart, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-20 bg-[#FDFBF7]">
      {/* Hero Section */}
      <section className="bg-[#FDFBF7] py-20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#D4AF37] font-serif italic text-xl mb-4 block"
          >
            Our Journey
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 text-[#1A1A1A]"
          >
            Heritage Brew
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            A legacy of passion, roasting, and community that spans over three decades.
          </motion.p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 text-[#D4AF37]/10 animate-pulse">
          <Coffee className="h-32 w-32" />
        </div>
        <div className="absolute bottom-10 right-10 text-[#D4AF37]/10 animate-pulse delay-700">
          <Globe className="h-32 w-32" />
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <span className="text-[#D4AF37] font-serif italic text-lg block">The Beginning</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A] leading-tight">
                From a Small Roastery to a Cultural Landmark
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                In 1994, our founder, Mr. Aryan Kapoor, returned to his roots in Jaipur with a single 
                mission: to bring the authentic taste of Indian coffee to the world. What started 
                as a small roastery in a quiet lane has now grown into a sanctuary for coffee 
                lovers and a celebration of Indian heritage.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that every cup tells a story. From the high-altitude estates of 
                Coorg to the meticulous roasting process in our facility, we ensure that 
                every bean is treated with the respect it deserves.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="text-center p-8 bg-[#FDFBF7] rounded-3xl border border-gray-100">
                  <span className="text-4xl font-serif font-bold text-[#D4AF37] block mb-2">30+</span>
                  <span className="text-sm text-gray-500 uppercase tracking-widest font-medium">Years</span>
                </div>
                <div className="text-center p-8 bg-[#FDFBF7] rounded-3xl border border-gray-100">
                  <span className="text-4xl font-serif font-bold text-[#D4AF37] block mb-2">12</span>
                  <span className="text-sm text-gray-500 uppercase tracking-widest font-medium">Locations</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600"
                    alt="Story 1"
                    className="rounded-2xl shadow-lg w-full h-64 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=600"
                    alt="Story 2"
                    className="rounded-2xl shadow-lg w-full h-80 object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-4 pt-12">
                  <img
                    src="https://images.unsplash.com/photo-1546173159-315724a31696?ixlib=rb-4.1.0&auto=format&fit=crop&w=400&q=70"
                    alt="Story 3"
                    className="rounded-2xl shadow-lg w-full h-80 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=600"
                    alt="Story 4"
                    className="rounded-2xl shadow-lg w-full h-64 object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-[#D4AF37] font-serif italic text-lg mb-2 block">Our Values</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">What Drives Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Heart className="h-10 w-10 text-[#D4AF37]" />,
                title: "Passion for Quality",
                desc: "We never compromise on the quality of our beans, our equipment, or our service."
              },
              {
                icon: <Globe className="h-10 w-10 text-[#D4AF37]" />,
                title: "Sustainability",
                desc: "We work directly with farmers to ensure ethical practices and environmental stewardship."
              },
              {
                icon: <Users className="h-10 w-10 text-[#D4AF37]" />,
                title: "Community First",
                desc: "Our cafes are designed to be inclusive spaces that foster connections and creativity."
              }
            ].map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 p-10 rounded-[2rem] border border-white/10 hover:border-[#D4AF37]/50 transition-colors group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                <h3 className="text-2xl font-serif font-bold mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] font-serif italic text-lg mb-2 block">The Experts</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A]">Meet Our Master Roasters</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                name: "Aryan Kapoor",
                role: "Founder & Master Roaster",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
              },
              {
                name: "Meera Reddy",
                role: "Head Barista",
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
              },
              {
                name: "Siddharth Malhotra",
                role: "Quality Control",
                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
              }
            ].map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[3/4]">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                    <div className="flex space-x-4">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors cursor-pointer">
                        <Globe className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="text-2xl font-serif font-bold mb-1">{member.name}</h4>
                <p className="text-[#D4AF37] font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
