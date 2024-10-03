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
      // Här skulle du vanligtvis integrera med din backend eller Mailchimp API
      // För nu simulerar vi ett API-anrop
      setTimeout(() => {
        toast.success("Tack för att du ansluter dig till vårt äventyr!");
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
        className="w-full sm:w-2/3 bg-white/80 text-black placeholder-gray-500 border-white/30 focus:border-white focus:ring-2 focus:ring-white shadow-md"
        disabled={isLoading}
      />
      <Button type="submit" className="w-full sm:w-1/3 bg-black text-white hover:bg-gray-800" disabled={isLoading}>
        {isLoading ? 'Ansluter...' : 'Anslut till resan'}
      </Button>
    </form>
  );
};

export default EmailSignup;