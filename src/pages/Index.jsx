import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import '../styles/custom.css';

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay 
        loop 
        muted 
        playsInline
        crossOrigin="anonymous"
      >
        <source src="https://i.imgur.com/Q5ryltB.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="w-full max-w-3xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div 
            className="text-center p-8 bg-black/40 backdrop-blur-sm rounded-lg shadow-xl w-full mb-8 sm:hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex justify-center mb-4">
              <img src="https://i.imgur.com/YFxUVEp.png" alt="North Aura Logo" className="w-24 sm:w-32 h-auto" />
            </div>
            <motion.h1 
              className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-wide font-the-seasons"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              North Aura
            </motion.h1>
            <motion.div
              className="flex justify-center space-x-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Twitter size={24} />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;