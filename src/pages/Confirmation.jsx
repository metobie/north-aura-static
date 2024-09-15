import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Confirmation = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#d5d9c8] to-[#97a09f]">
      <div className="text-center p-8 bg-[#c5cabd]/80 rounded-lg shadow-xl max-w-md w-full">
        <h1 className="text-3xl font-bold text-[#97a09f] mb-4">Tack för din registrering!</h1>
        <p className="text-lg text-[#97a09f] mb-6">
          Vi har skickat ett bekräftelsemail till din e-postadress. Kolla din inkorg (och eventuellt skräppostmappen) för mer information.
        </p>
        <Button asChild className="bg-[#97a09f] hover:bg-[#a6aea9] text-[#d5d9c8]">
          <Link to="/">Tillbaka till startsidan</Link>
        </Button>
      </div>
    </div>
  );
};

export default Confirmation;
