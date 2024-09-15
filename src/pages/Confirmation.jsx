import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Confirmation = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#d5d9c8] to-[#97a09f]">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: 'url(https://i.imgur.com/mTlhsuD.jpeg)' }}
      />
      <div className="relative z-10 text-center p-8 bg-[#c5cabd]/40 backdrop-blur-sm rounded-lg shadow-xl max-w-md w-full">
        <h1 className="text-3xl font-bold text-white mb-4">Tack för din registrering!</h1>
        <p className="text-lg text-white mb-6">
          Vi har skickat ett bekräftelsemail till din e-postadress. Kolla din inkorg (och eventuellt skräppostmappen) för mer information.
        </p>
        <Button asChild className="bg-[#97a09f] hover:bg-[#a6aea9] text-white">
          <Link to="/">Tillbaka till startsidan</Link>
        </Button>
      </div>
    </div>
  );
};

export default Confirmation;
