import React from 'react';
import EmailSignup from '../components/EmailSignup';

const Index = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Welcome to Our Fiction Newsletter</h1>
          <EmailSignup />
        </div>
      </div>
    </div>
  );
};

export default Index;