import React from 'react';
import EmailSignup from '../components/EmailSignup';

const Index = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 min-w-full min-h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4" type="video/mp4" />
        Din webbläsare stöder inte videotaggen.
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/40 via-purple-400/30 to-pink-300/40" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center p-8 bg-white/10 backdrop-blur-md rounded-lg shadow-xl max-w-md w-full animate-float">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-wide">Overland Soul</h1>
          <p className="text-lg sm:text-xl text-teal-50 mb-8">Ge dig ut på extraordinära resor genom hisnande landskap</p>
          <EmailSignup />
        </div>
      </div>
      <div className="absolute bottom-2 right-2 text-xs text-white/30 hover:text-white/60 transition-colors duration-300">
        <p>Psst! Vill du viska en hemlighet? <a href="mailto:hej@overlandsoul.se" className="underline">hej@overlandsoul.se</a></p>
      </div>
    </div>
  );
};

export default Index;