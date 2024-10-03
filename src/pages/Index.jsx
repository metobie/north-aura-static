import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail } from 'lucide-react';
import EmailSignup from '../components/EmailSignup';
import '../styles/custom.css';

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col">
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="https://i.imgur.com/wYeXk1b.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40" />
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center flex-grow px-4 py-12 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="text-4xl sm:text-5xl font-bold mb-4 text-center font-the-seasons"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Upplev magin med våra Overland Soul taktält
        </motion.h1>
        <motion.p
          className="text-xl mb-8 text-center max-w-2xl"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Gå med i vår äventyrsgemenskap och omfamna friheten på de öppna vägarna. Snart lanserar vi...
        </motion.p>
        <motion.div
          className="w-full max-w-md"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <EmailSignup />
        </motion.div>
        <motion.div
          className="flex justify-center space-x-6 mt-8"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a href="https://www.instagram.com/northaura.se" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
            <Instagram size={28} />
          </a>
          <a href="mailto:hey@northaura.se" className="text-white hover:text-gray-300 transition-colors">
            <Mail size={28} />
          </a>
        </motion.div>
      </motion.div>
      <footer className="relative z-10 w-full text-center py-4">
        <a 
          href="https://renew-io.se" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-sm text-white opacity-70 hover:opacity-100 transition-opacity"
        >
          Designed by Renew I/O
        </a>
      </footer>
    </div>
  );
};

export default Index;