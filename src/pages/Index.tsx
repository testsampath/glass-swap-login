import { useState } from "react";
import { LoginCard } from "@/components/LoginCard";
import glassBg from "@/assets/glass-bg.jpg";

const Index = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden"
      style={{
        backgroundImage: `url(${glassBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better glassmorphism effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20"></div>
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Floating orbs for ambient effect */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-300/30 rounded-full blur-2xl animate-bounce"></div>
      
      {/* Login Card */}
      <div className="relative z-10 w-full">
        <LoginCard isFlipped={isFlipped} onFlip={handleFlip} />
      </div>
    </div>
  );
};

export default Index;
