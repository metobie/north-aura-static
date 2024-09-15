import React from 'react';
import EmailSignup from '../components/EmailSignup';
import { Facebook, Instagram, Mail } from 'lucide-react';

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#d5d9c8] to-[#97a09f]">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: 'url(https://i.imgur.com/mTlhsuD.jpeg)' }}
      />
      <div className="absolute top-4 right-4 z-20">
        <img src="https://i.imgur.com/wBONmmz.png" alt="Overland Soul Logo" className="w-24 h-auto" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl">
          <div className="text-center p-8 bg-[#c5cabd]/20 backdrop-blur-sm rounded-lg shadow-xl w-full lg:w-1/2 mb-8 lg:mb-0 animate-float">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-wide">Overland Soul</h1>
            <p className="text-base text-white mb-8">
              Äventyr väntar på taket! Vårt team är just nu utomlands och finslipar de sista detaljerna med designers och ingenjörer inför massproduktion av våra taktält.<br /><br />
              Signa upp nu och få 10% rabatt på din första beställning inom 3 månader efter lansering. Psst... ännu större besparingar väntar för dig som gör en pre-order när vi öppnar webbshoppen och avslöjar våra produkter. Missa inte chansen att bli först med det senaste inom overlanding!
            </p>
            <EmailSignup />
          </div>
          
          <div className="bg-[#b6bcb3]/20 backdrop-blur-sm rounded-lg shadow-xl w-full lg:w-1/2 p-8 text-white">
            <p className="mb-4">Vi är glada att du har hittat till Overland Soul och ser fram emot att välkomna dig till vår gemenskap.</p>
            <p className="mb-4">Overland Soul grundades av två äventyrsälskande familjer som ville dela sin passion med världen. Vår resa började i taktält, som tog oss till nya platser med vårt hem på taket. Nu vill vi dela denna frihet och upplevelse med dig.</p>
            <p className="mb-4">Vi värderar närheten till naturen och friheten att stanna var helst hjärtat leder oss – kanske med en havsutsikt som sällskap. För oss är det en lyx i vardagen, en chans till återhämtning och ett sätt att uppleva världen. Vi hoppas att du också får uppleva detta.</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 flex space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#d5d9c8] transition-colors duration-300">
          <Facebook size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#d5d9c8] transition-colors duration-300">
          <Instagram size={24} />
        </a>
        <a href="mailto:hej@overlandsoul.se" className="text-white hover:text-[#d5d9c8] transition-colors duration-300">
          <Mail size={24} />
        </a>
      </div>
    </div>
  );
};

export default Index;
