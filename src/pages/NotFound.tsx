import React from 'react';
import { motion } from 'motion/react';
import { Coffee, ArrowLeft, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#FDFBF7] flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mb-12"
        >
          <div className="text-[12rem] md:text-[18rem] font-serif font-bold text-[#D4AF37]/10 leading-none select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Coffee className="h-32 w-32 md:h-48 md:w-48 text-[#8B4513] drop-shadow-2xl" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A]">
            Oops! Spilled Coffee
          </h1>
          <p className="text-lg text-gray-500 max-w-md mx-auto leading-relaxed">
            The page you're looking for seems to have evaporated into thin air. 
            Let's get you back to a fresh brew.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link
              to="/"
              className="bg-[#D4AF37] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-[#B8962E] transition-all flex items-center group"
            >
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="bg-white border border-gray-200 text-[#1A1A1A] px-10 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-all flex items-center group"
            >
              <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </button>
          </div>
        </motion.div>

        {/* Decorative Coffee Beans */}
        <div className="absolute top-20 left-[10%] opacity-20 hidden lg:block">
          <div className="w-8 h-12 bg-[#8B4513] rounded-full rotate-45"></div>
        </div>
        <div className="absolute bottom-20 right-[15%] opacity-20 hidden lg:block">
          <div className="w-10 h-14 bg-[#8B4513] rounded-full -rotate-12"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFound;
