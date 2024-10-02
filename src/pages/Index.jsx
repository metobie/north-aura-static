import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail } from 'lucide-react';
import '../styles/custom.css';

const Index = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    let forward = true;

    const handleTimeUpdate = () => {
      if (forward && video.currentTime >= video.duration - 0.1) {
        forward = false;
      } else if (!forward && video.currentTime <= 0.1) {
        forward = true;
      }

      if (forward) {
        video.currentTime += 0.01;
      } else {
        video.currentTime -= 0.01;
      }
    };

    const intervalId = setInterval(handleTimeUpdate, 16); // ~60fps

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <video 
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
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
            className="text-center p-8 bg-black/30 backdrop-blur-sm rounded-lg shadow-xl w-full mb-8 sm:hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex justify-center mb-4">
              <img src="https://i.imgur.com/YFxUVEp.png" alt="North Aura Logo" className="w-32 sm:w-48 h-auto opacity-80" />
            </div>
            <motion.h1 
              className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-wide font-the-seasons opacity-80"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 0.8 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              North Aura
            </motion.h1>
            <motion.div
              className="flex justify-center space-x-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 0.8 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="https://www.instagram.com/northaura.se" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors opacity-80">
                <Instagram size={24} />
              </a>
              <a href="mailto:hey@northaura.se" className="text-white hover:text-gray-300 transition-colors opacity-80">
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;