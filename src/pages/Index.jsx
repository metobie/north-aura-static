import React from 'react';
import EmailSignup from '../components/EmailSignup';
import { motion } from 'framer-motion';
import '../styles/custom.css';
import { Instagram, Mail } from 'lucide-react';

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
            <motion.p 
              className="text-base text-white mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Välkommen till North Aura, där vi kombinerar äventyrslust med miljömedvetenhet. Vi är glada att du har hittat hit och ser fram emot att dela vår passion för hållbart resande med dig.
            </motion.p>
            <motion.p 
              className="text-base text-white mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              North Aura startades av två familjer som älskar äventyr och bryr sig om miljön. Vi började med Overland Soul tält, som gör det möjligt att utforska nya platser med ett hem på biltaket, samtidigt som vi tänker på vår påverkan på naturen.
            </motion.p>
            <motion.p 
              className="text-base text-white mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Med Overland Soul tält kan du njuta av naturen på nära håll, kanske med en vacker utsikt som granne. Det är ett enkelt sätt att resa mer miljövänligt och uppleva friheten i att utforska världen på ett ansvarsfullt sätt.
            </motion.p>
            <motion.p 
              className="text-lg font-semibold text-white mb-8 border-2 border-white p-4 rounded-lg inline-block"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Anmäl dig nu och få 10% rabatt på ditt första Overland Soul tält när vi öppnar webbshoppen. Tillsammans kan vi utforska världen på ett mer hållbart sätt!
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
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4 z-20">
        <a href="https://www.instagram.com/northaura.se" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
          <Instagram className="w-6 h-6" />
        </a>
        <a href="mailto:hey@northaura.se" className="text-white hover:text-gray-300 transition-colors">
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default Index;