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
        className="w-full sm:w-2/3 bg-white/50 text-[#97a09f] placeholder-[#97a09f] border-[#97a09f] focus:border-[#97a09f]"
        disabled={isLoading}
      />
      <Button type="submit" className="w-full sm:w-1/3 bg-[#97a09f] hover:bg-[#a6aea9] text-white" disabled={isLoading}>
        {isLoading ? 'Registrerar...' : 'Anslut till äventyret'}
      </Button>
    </form>
  );
};

export default EmailSignup;
