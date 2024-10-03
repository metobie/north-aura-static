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
        crossOrigin="anonymous"
      >
        <source src="https://i.imgur.com/5ujcQaZ.mp4" type="video/mp4" />
        Din webbläsare stöder inte videotaggen.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40" />
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center flex-grow px-4 py-12 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src="https://i.imgur.com/YFxUVEp.png"
          alt="North Aura Logo"
          className="w-32 h-32 mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1 
          className="text-4xl sm:text-5xl font-bold mb-4 text-center font-the-seasons"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="sm:hidden">Omfamna<br />North Aura</span>
          <span className="hidden sm:inline">Omfamna North Aura</span>
        </motion.h1>
        <motion.p
          className="text-xl mb-8 text-center max-w-2xl"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Anslut dig till oss runt lägerelden och upplev friheten med taktältscamping. För 10% på alla produkter, registrera dig för vårt nyhetsbrev och var först med att få veta om våra kommande äventyr.
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
          Designad av Renew I/O
        </a>
      </footer>
    </div>
  );
};

export default Index;