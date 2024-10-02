import React from 'react';
import EmailSignup from '../components/EmailSignup';
import { Instagram, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
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
      <div className="absolute top-4 left-0 right-0 flex justify-center sm:justify-end sm:right-4 z-20">
        <img src="https://i.imgur.com/YFxUVEp.png" alt="North Aura Logo" className="w-24 sm:w-32 h-auto" />
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
            className="text-center p-8 bg-black/40 backdrop-blur-sm rounded-lg shadow-xl w-full mb-8 sm:hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-wide font-the-seasons"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              North Aura
            </motion.h1>
            <motion.p 
              className="text-base text-white mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Vi är glada att du har hittat till North Aura och ser fram emot att välkomna dig till vår gemenskap.
            </motion.p>
            <motion.p 
              className="text-base text-white mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              North Aura grundades av två äventyrsälskande familjer som ville dela sin passion med världen. Vår resa började med Overland Soul tält, som tog oss till nya platser med vårt hem på biltaket. Nu vill vi dela denna frihet och upplevelse med dig.
            </motion.p>
            <motion.p 
              className="text-base text-white mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Vi värderar närheten till naturen och friheten att stanna var helst hjärtat leder oss – kanske med en havsutsikt som sällskap. För oss är det en lyx i vardagen, en chans till återhämtning och ett sätt att uppleva världen. Vi hoppas att du också får uppleva detta med våra Overland Soul tält.
            </motion.p>
            <motion.p 
              className="text-lg font-semibold text-white mb-8 border-2 border-white p-4 rounded-lg inline-block"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Signa upp nu och få 10% rabatt på ditt första Overland Soul tält när vi öppnar webbshoppen
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <EmailSignup />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div 
        className="absolute bottom-8 left-0 right-0 flex justify-center space-x-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <motion.a 
          href="https://instagram.com/northaura.se" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-gray-300 transition-colors duration-300"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <Instagram size={40} />
        </motion.a>
        <motion.a 
          href="mailto:hey@northaura.se" 
          className="text-white hover:text-gray-300 transition-colors duration-300"
          whileHover={{ scale: 1.2, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <Mail size={40} />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Index;