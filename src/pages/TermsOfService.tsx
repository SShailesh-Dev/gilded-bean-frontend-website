import React from 'react';
import { motion } from 'motion/react';
import { Scale, CheckCircle, AlertCircle, Info } from 'lucide-react';

const TermsOfService = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-24 pb-20 bg-[#FDFBF7]"
    >
      {/* Header */}
      <section className="bg-[#FDFBF7] py-20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#D4AF37] font-serif italic text-xl mb-4 block"
          >
            Legal
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 text-[#1A1A1A]"
          >
            Terms of Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            The rules and guidelines for using our services at The Gilded Bean.
          </motion.p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 text-[#D4AF37]/10 animate-pulse">
          <Scale className="h-32 w-32" />
        </div>
        <div className="absolute bottom-10 right-10 text-[#D4AF37]/10 animate-pulse delay-700">
          <CheckCircle className="h-32 w-32" />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-10 md:p-16 rounded-[3rem] shadow-sm border border-gray-100"
        >
          <div className="flex items-center space-x-4 mb-8">
            <div className="p-3 bg-[#D4AF37]/10 rounded-2xl">
              <Scale className="h-8 w-8 text-[#D4AF37]" />
            </div>
            <h1 className="text-4xl font-serif font-bold text-[#1A1A1A]">Terms of Service</h1>
          </div>

          <div className="prose prose-stone max-w-none space-y-8 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-2xl font-serif font-bold text-[#1A1A1A] mb-4 flex items-center">
                <Info className="h-5 w-5 mr-2 text-[#D4AF37]" /> 1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using the website of The Gilded Bean, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-[#1A1A1A] mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-[#D4AF37]" /> 2. Reservations
              </h2>
              <p>
                Table reservations made through our site are subject to availability. We reserve the right to cancel or modify a reservation if necessary. Please arrive on time; we hold tables for a maximum of 15 minutes past the reservation time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-[#1A1A1A] mb-4 flex items-center">
                <AlertCircle className="h-5 w-5 mr-2 text-[#D4AF37]" /> 3. Intellectual Property
              </h2>
              <p>
                All content on this website, including text, images, and logos, is the property of The Gilded Bean and is protected by copyright laws. You may not use our content without prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-[#1A1A1A] mb-4 flex items-center">
                <Scale className="h-5 w-5 mr-2 text-[#D4AF37]" /> 4. Limitation of Liability
              </h2>
              <p>
                The Gilded Bean shall not be liable for any direct, indirect, or incidental damages arising out of your use of this website or our services.
              </p>
            </section>

            <section className="pt-8 border-t border-gray-100 italic text-sm">
              <p>Last updated: March 18, 2026</p>
            </section>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TermsOfService;
