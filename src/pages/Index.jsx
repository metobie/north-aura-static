import React from 'react';
import EmailSignup from '../components/EmailSignup';
import { Facebook, Instagram, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-teal-500 to-purple-600">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: 'url(https://i.imgur.com/Pe1ftIK.jpeg)' }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <div className="text-center p-8 bg-white/10 backdrop-blur-md rounded-lg shadow-xl max-w-md w-full mb-8 animate-float">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-wide">Overland Soul</h1>
          <p className="text-lg sm:text-xl text-teal-50 mb-8">Ge dig ut på extraordinära resor genom hisnande landskap med våra taktält. Signa upp nu för ytterligare 10% rabbat när kollektionen släpps. Vi kontaktar dig när vi har lanserat!</p>
          <EmailSignup />
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-xl max-w-2xl w-full p-8 text-white">
          <h2 className="text-2xl font-semibold mb-4">Välkommen till Overland Soul</h2>
          <p className="mb-4">Kära kund,</p>
          <p className="mb-4">Vi är glada att du har hittat till Overland Soul och ser fram emot att välkomna dig till vår gemenskap.</p>
          <p className="mb-4">Overland Soul grundades av två äventyrsälskande familjer som ville dela sin passion med världen. Vår resa började i taktält, som tog oss till nya platser med vårt hem på taket. Nu vill vi dela denna frihet och upplevelse med dig.</p>
          <p className="mb-4">Vi värderar närheten till naturen och friheten att stanna var helst hjärtat leder oss – kanske med en havsutsikt som sällskap. För oss är det en lyx i vardagen, en chans till återhämtning och ett sätt att uppleva världen. Vi hoppas att du också får uppleva detta.</p>
          <p className="mb-4">Varmt välkommen till Overland Soul!</p>
          <p className="mb-4">Med vänliga hälsningar,<br />Overland Soul Familjen</p>
          <Button className="mt-4 bg-teal-500 hover:bg-teal-600 text-white">Läs mer om vår historia</Button>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 flex space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors duration-300">
          <Facebook size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors duration-300">
          <Instagram size={24} />
        </a>
        <a href="mailto:hej@overlandsoul.se" className="text-white/70 hover:text-white transition-colors duration-300">
          <Mail size={24} />
        </a>
      </div>
    </div>
  );
};

export default Index;
