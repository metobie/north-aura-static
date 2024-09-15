import React from 'react';
import EmailSignup from '../components/EmailSignup';
import { Facebook, Instagram, Mail } from 'lucide-react';

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-teal-500 to-purple-600">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: 'url(https://i.imgur.com/Pe1ftIK.jpeg)' }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl">
          <div className="text-center p-8 bg-white/10 backdrop-blur-md rounded-lg shadow-xl w-full lg:w-1/2 mb-8 lg:mb-0 animate-float">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-wide">Overland Soul</h1>
            <p className="text-lg sm:text-xl text-teal-50 mb-8">
              Äventyr väntar på taket! Vårt team är just nu utomlands och finsliper de sista detaljerna med designers och ingenjörer inför massproduktion av våra revolutionerande taktält. Signa upp nu och få 10% rabatt på din beställning inom 3 månader efter lansering. Psst... ännu större besparingar väntar för dig som gör en pre-order när vi öppnar webbshoppen och avslöjar våra fantastiska produktbilder. Missa inte chansen att bli först med det senaste inom overlanding!
            </p>
            <EmailSignup />
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-xl w-full lg:w-1/2 p-8 text-white">
            <p className="mb-4">Kära kund,</p>
            <p className="mb-4">Vi är glada att du har hittat till Overland Soul och ser fram emot att välkomna dig till vår gemenskap.</p>
            <p className="mb-4">Overland Soul grundades av två äventyrsälskande familjer som ville dela sin passion med världen. Vår resa började i taktält, som tog oss till nya platser med vårt hem på taket. Nu vill vi dela denna frihet och upplevelse med dig.</p>
            <p className="mb-4">Vi värderar närheten till naturen och friheten att stanna var helst hjärtat leder oss – kanske med en havsutsikt som sällskap. För oss är det en lyx i vardagen, en chans till återhämtning och ett sätt att uppleva världen. Vi hoppas att du också får uppleva detta.</p>
            <p>Med vänliga hälsningar,<br />Overland Soul Familjen</p>
          </div>
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
