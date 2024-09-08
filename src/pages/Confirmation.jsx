import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Confirmation = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-teal-500 to-purple-600">
      <div className="text-center p-8 bg-white rounded-lg shadow-xl max-w-md w-full">
        <h1 className="text-3xl font-bold text-teal-700 mb-4">Tack för din registrering!</h1>
        <p className="text-lg text-gray-600 mb-6">
          Vi har skickat ett bekräftelsemail till din e-postadress. Kolla din inkorg (och eventuellt skräppostmappen) för mer information.
        </p>
        <Button asChild className="bg-teal-500 hover:bg-teal-600 text-white">
          <Link to="/">Tillbaka till startsidan</Link>
        </Button>
      </div>
    </div>
  );
};

export default Confirmation;