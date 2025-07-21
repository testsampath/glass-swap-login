import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRightLeft, Lock, Mail, User } from "lucide-react";

interface LoginCardProps {
  isFlipped: boolean;
  onFlip: () => void;
}

export const LoginCard = ({ isFlipped, onFlip }: LoginCardProps) => {
  const [credentials, setCredentials] = useState({
    userId: "",
    password: "",
    googleId: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setCredentials(prev => ({ ...prev, [field]: value }));
  };

  const InfoPanel = ({ side }: { side: "left" | "right" }) => (
    <div className={`flex flex-col justify-center px-12 py-16 ${
      side === "left" && !isFlipped ? "animate-slide-in-left" : 
      side === "right" && isFlipped ? "animate-slide-in-right" : ""
    }`}>
      <div className="animate-float">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Welcome Back
        </h2>
        <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
          Experience the future of authentication with our seamless, secure login system. 
          Your digital journey begins here.
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-foreground/70">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent"></div>
            <span>Advanced security protocols</span>
          </div>
          <div className="flex items-center gap-3 text-foreground/70">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent"></div>
            <span>Lightning-fast authentication</span>
          </div>
          <div className="flex items-center gap-3 text-foreground/70">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent"></div>
            <span>Seamless user experience</span>
          </div>
        </div>
      </div>
    </div>
  );

  const StandardForm = () => (
    <div className={`flex flex-col justify-center px-12 py-16 ${
      !isFlipped ? "animate-slide-in-right" : ""
    }`}>
      <div className="w-full max-w-sm mx-auto space-y-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold mb-2">Sign In</h3>
          <p className="text-foreground/60">Enter your credentials to continue</p>
        </div>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="userId" className="text-sm font-medium">User ID</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-foreground/50" />
              <Input
                id="userId"
                type="text"
                placeholder="Enter your user ID"
                value={credentials.userId}
                onChange={(e) => handleInputChange("userId", e.target.value)}
                className="pl-10 bg-white/10 border-white/20 backdrop-blur-sm text-foreground placeholder:text-foreground/50 focus:bg-white/15 transition-all duration-300"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-foreground/50" />
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={credentials.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className="pl-10 bg-white/10 border-white/20 backdrop-blur-sm text-foreground placeholder:text-foreground/50 focus:bg-white/15 transition-all duration-300"
              />
            </div>
          </div>
        </div>
        
        <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-medium py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
          Sign In
        </Button>
        
        <div className="text-center pt-4">
          <button 
            onClick={onFlip}
            className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors duration-300"
          >
            <ArrowRightLeft className="h-4 w-4" />
            Switch to Google Sign In
          </button>
        </div>
      </div>
    </div>
  );

  const GoogleForm = () => (
    <div className={`flex flex-col justify-center px-12 py-16 ${
      isFlipped ? "animate-slide-in-left" : ""
    }`}>
      <div className="w-full max-w-sm mx-auto space-y-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold mb-2">Google Sign In</h3>
          <p className="text-foreground/60">Use your Google account to continue</p>
        </div>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="googleId" className="text-sm font-medium">Google ID</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-foreground/50" />
              <Input
                id="googleId"
                type="email"
                placeholder="Enter your Google email"
                value={credentials.googleId}
                onChange={(e) => handleInputChange("googleId", e.target.value)}
                className="pl-10 bg-white/10 border-white/20 backdrop-blur-sm text-foreground placeholder:text-foreground/50 focus:bg-white/15 transition-all duration-300"
              />
            </div>
          </div>
        </div>
        
        <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-medium py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
          Continue with Google
        </Button>
        
        <div className="text-center pt-4">
          <button 
            onClick={onFlip}
            className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors duration-300"
          >
            <ArrowRightLeft className="h-4 w-4" />
            Back to Standard Sign In
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] rounded-3xl overflow-hidden backdrop-blur-2xl bg-white/10 border border-white/20 shadow-2xl animate-glow-pulse">
        {/* Left Side */}
        <div className="relative overflow-hidden">
          {!isFlipped ? <InfoPanel side="left" /> : <GoogleForm />}
        </div>
        
        {/* Right Side */}
        <div className="relative overflow-hidden border-l border-white/10">
          {!isFlipped ? <StandardForm /> : <InfoPanel side="right" />}
        </div>
      </div>
    </div>
  );
};