import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useLanguage } from '../contexts/LanguageContext';

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { language } = useLanguage();

  const content = {
    sv: {
      placeholder: 'Ange din e-postadress',
      button: 'Anslut till resan',
      loading: 'Ansluter...',
      success: 'Tack för att du ansluter dig till vårt äventyr!',
      error: 'Vänligen ange en giltig e-postadress.'
    },
    en: {
      placeholder: 'Enter your email address',
      button: 'Join the journey',
      loading: 'Joining...',
      success: 'Thank you for joining our adventure!',
      error: 'Please enter a valid email address.'
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      setIsLoading(true);
      // Här skulle du vanligtvis integrera med din backend eller Mailchimp API
      // För nu simulerar vi ett API-anrop
      setTimeout(() => {
        toast.success(content[language].success);
        setEmail('');
        setIsLoading(false);
      }, 1000);
    } else {
      toast.error(content[language].error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4">
      <Input
        type="email"
        placeholder={content[language].placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full sm:w-2/3 bg-white/80 text-black placeholder-gray-500 border-white/30 focus:border-white focus:ring-2 focus:ring-white shadow-md"
        disabled={isLoading}
      />
      <Button 
        type="submit" 
        className="w-full sm:w-1/3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105" 
        disabled={isLoading}
      >
        {isLoading ? content[language].loading : content[language].button}
      </Button>
    </form>
  );
};

export default EmailSignup;