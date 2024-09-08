import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const EmailSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Email submitted:', email);
      toast.success("Thank you for joining our dreamy journey!");
      setEmail('');
    } else {
      toast.error("Please enter a valid email address.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full bg-white/20 text-white placeholder-teal-100 border-teal-200 focus:border-teal-300"
      />
      <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-white">
        Join the Dream
      </Button>
    </form>
  );
};

export default EmailSignup;