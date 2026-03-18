import React from 'react';
import { motion } from 'motion/react';
import { Coffee } from 'lucide-react';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-[#FDFBF7] z-[100] flex items-center justify-center">
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="inline-block mb-6"
        >
          <Coffee className="h-16 w-16 text-[#D4AF37]" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-serif font-bold text-[#1A1A1A]"
        >
          Brewing Excellence...
        </motion.h2>
        <div className="mt-4 w-48 h-1 bg-gray-100 rounded-full mx-auto overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-full h-full bg-[#D4AF37]"
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
