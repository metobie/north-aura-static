import React from 'react';
import EmailSignup from '../components/EmailSignup';
import { Facebook, Instagram, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#d5d9c8] to-[#97a09f]">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: 'url(https://i.imgur.com/mTlhsuD.jpeg)' }}
      />
      <div className="absolute top-4 right-4 z-20">
        <img src="https://i.imgur.com/wBONmmz.png" alt="Overland Soul Logo" className="w-24 h-auto" />
      </div>
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
            className="text-center p-8 bg-[#c5cabd]/20 backdrop-blur-sm rounded-lg shadow-xl w-full mb-8"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-wide"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Overland Soul
            </motion.h1>
            <motion.p 
              className="text-base text-white mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Vi är glada att du har hittat till Overland Soul och ser fram emot att välkomna dig till vår gemenskap.
            </motion.p>
            <motion.p 
              className="text-base text-white mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Overland Soul grundades av två äventyrsälskande familjer som ville dela sin passion med världen. Vår resa började i taktält, som tog oss till nya platser med vårt hem på taket. Nu vill vi dela denna frihet och upplevelse med dig.
            </motion.p>
            <motion.p 
              className="text-base text-white mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Vi värderar närheten till naturen och friheten att stanna var helst hjärtat leder oss – kanske med en havsutsikt som sällskap. För oss är det en lyx i vardagen, en chans till återhämtning och ett sätt att uppleva världen. Vi hoppas att du också får uppleva detta.
            </motion.p>
            <motion.div
              className="bg-[#97a09f]/80 p-4 rounded-lg shadow-lg mb-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ scale: 1.05, backgroundColor: "#97a09f" }}
            >
              <motion.p 
                className="text-lg font-semibold text-white"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                🎉 Exklusivt Erbjudande! 🎉
              </motion.p>
              <motion.p 
                className="text-xl font-bold text-white mt-2"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.9 }}
              >
                Signa upp nu och få 10% rabatt
              </motion.p>
              <motion.p 
                className="text-sm text-white mt-1"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 1 }}
              >
                på din första beställning när vi öppnar webbshoppen
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <EmailSignup />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div 
        className="absolute bottom-4 right-4 flex space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#d5d9c8] transition-colors duration-300">
          <Facebook size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#d5d9c8] transition-colors duration-300">
          <Instagram size={24} />
        </a>
        <a href="mailto:hej@overlandsoul.se" className="text-white hover:text-[#d5d9c8] transition-colors duration-300">
          <Mail size={24} />
        </a>
      </motion.div>
    </div>
  );
};

export default Index;
