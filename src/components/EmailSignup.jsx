import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      setIsLoading(true);
      // Here you would typically integrate with your backend or Mailchimp API
      // For now, we'll simulate an API call
      setTimeout(() => {
        toast.success("Tack för din registrering!");
        setEmail('');
        setIsLoading(false);
      }, 1000);
    } else {
      toast.error("Vänligen ange en giltig e-postadress.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4">
      <Input
        type="email"
        placeholder="Ange din e-postadress"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full sm:w-2/3 bg-white/20 text-white placeholder-white/70 border-white/30 focus:border-white focus:ring-0 focus:outline-none"
        disabled={isLoading}
      />
      <Button type="submit" className="w-full sm:w-1/3 bg-white text-black hover:bg-gray-200" disabled={isLoading}>
        {isLoading ? 'Registrerar...' : 'Anslut till North Aura'}
      </Button>
    </form>
  );
};

export default EmailSignup;