import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const EmailSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email);
      toast.success("Thank you for signing up!");
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
        className="w-64 bg-white bg-opacity-20 text-white placeholder-gray-300"
      />
      <Button type="submit" className="w-64">
        Sign Up
      </Button>
    </form>
  );
};

export default EmailSignup;