import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const EmailSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log('E-post skickad:', email);
      toast.success("Tack för att du ansluter dig till vår äventyrliga resa!");
      setEmail('');
    } else {
      toast.error("Vänligen ange en giltig e-postadress.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
      <Input
        type="email"
        placeholder="Ange din e-postadress"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full bg-white/20 text-white placeholder-teal-100 border-teal-200 focus:border-teal-300"
      />
      <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-white">
        Anslut till äventyret
      </Button>
    </form>
  );
};

export default EmailSignup;