import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useNavigate } from 'react-router-dom';

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:3001/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
        
        if (response.ok) {
          toast.success("Tack för din registrering!");
          navigate('/confirmation');
        } else {
          throw new Error('Registrering misslyckades');
        }
      } catch (error) {
        toast.error("Ett fel uppstod. Försök igen senare.");
      } finally {
        setIsLoading(false);
      }
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