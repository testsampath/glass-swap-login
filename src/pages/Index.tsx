import { useState } from "react";
import { LoginCard } from "@/components/LoginCard";

const Index = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
    >
      {/* Overlay for better glassmorphism effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-transparent to-slate-500/10"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Floating orbs for ambient effect */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-slate-400/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl"></div>
      
      {/* Login Card */}
      <div className="relative z-10 w-full">
        <LoginCard isFlipped={isFlipped} onFlip={handleFlip} />
      </div>
    </div>
  );
};

export default Index;
