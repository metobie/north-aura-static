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
              Välkommen till North Aura, där hållbar framtid möter frihet. Vi tror på att utforska världen på ett ansvarsfullt sätt och vill inspirera dig att göra detsamma.
            </motion.p>
            <motion.p 
              className="text-base text-white mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Våra Overland Soul tält är designade för att ge dig friheten att utforska, samtidigt som de minimerar din påverkan på miljön. Med ett hem på biltaket kan du enkelt upptäcka nya platser och skapa minnen som varar livet ut.
            </motion.p>
            <motion.p 
              className="text-base text-white mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Genom att välja Overland Soul tar du ett steg mot en mer hållbar livsstil utan att kompromissa med äventyret. Upplev friheten att resa med gott samvete och vakna upp till naturens skönhet varje morgon.
            </motion.p>
            <motion.p 
              className="text-lg font-semibold text-white mb-8 border-2 border-white p-4 rounded-lg inline-block"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Anmäl dig nu och få 10% rabatt på ditt första Overland Soul tält när vi öppnar webbshoppen. Låt oss tillsammans skapa en hållbar framtid full av äventyr!
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