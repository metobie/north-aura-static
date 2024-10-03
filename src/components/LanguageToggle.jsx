import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from "@/components/ui/button";

const LanguageToggle = ({ className }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      onClick={toggleLanguage}
      className={`bg-white/20 hover:bg-white/30 text-white ${className}`}
    >
      {language === 'sv' ? 'EN' : 'SV'}
    </Button>
  );
};

export default LanguageToggle;