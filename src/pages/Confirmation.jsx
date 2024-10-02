import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Confirmation = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="https://i.imgur.com/Q5ryltB.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />
      <div className="relative z-10 text-center p-8 bg-black/40 backdrop-blur-sm rounded-lg shadow-xl max-w-md w-full">
        <h1 className="text-3xl font-bold text-white mb-4">Tack för din registrering!</h1>
        <p className="text-lg text-white mb-6">
          Vi har skickat ett bekräftelsemail till din e-postadress. Kolla din inkorg (och eventuellt skräppostmappen) för mer information om North Aura och våra Overland Soul tält.
        </p>
        <Button asChild className="bg-white text-black hover:bg-gray-200">
          <Link to="/">Tillbaka till startsidan</Link>
        </Button>
      </div>
    </div>
  );
};

export default Confirmation;