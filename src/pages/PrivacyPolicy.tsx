import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
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
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            How we handle your data and protect your privacy at The Gilded Bean.
          </motion.p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 text-[#D4AF37]/10 animate-pulse">
          <Shield className="h-32 w-32" />
        </div>
        <div className="absolute bottom-10 right-10 text-[#D4AF37]/10 animate-pulse delay-700">
          <Lock className="h-32 w-32" />
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
              <Shield className="h-8 w-8 text-[#D4AF37]" />
            </div>
            <h1 className="text-4xl font-serif font-bold text-[#1A1A1A]">Privacy Policy</h1>
          </div>

          <div className="prose prose-stone max-w-none space-y-8 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-2xl font-serif font-bold text-[#1A1A1A] mb-4 flex items-center">
                <Eye className="h-5 w-5 mr-2 text-[#D4AF37]" /> 1. Information We Collect
              </h2>
              <p>
                At The Gilded Bean, we value your privacy. We collect information you provide directly to us, such as when you make a reservation, sign up for our newsletter, or contact us. This may include your name, email address, phone number, and any special requests.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-[#1A1A1A] mb-4 flex items-center">
                <Lock className="h-5 w-5 mr-2 text-[#D4AF37]" /> 2. How We Use Your Information
              </h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process and confirm your table reservations.</li>
                <li>Send you updates about your booking.</li>
                <li>Communicate with you about our products, services, and promotions (if you've opted in).</li>
                <li>Improve our website and customer experience.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-[#1A1A1A] mb-4 flex items-center">
                <FileText className="h-5 w-5 mr-2 text-[#D4AF37]" /> 3. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or alteration. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-[#1A1A1A] mb-4 flex items-center">
                <Shield className="h-5 w-5 mr-2 text-[#D4AF37]" /> 4. Your Rights
              </h2>
              <p>
                You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us at <a href="mailto:hello@gildedbean.com" className="text-[#D4AF37] hover:underline">hello@gildedbean.com</a>.
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

export default PrivacyPolicy;
