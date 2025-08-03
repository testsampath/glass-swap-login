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

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] rounded-3xl overflow-hidden backdrop-blur-2xl bg-white/10 border border-white/20 shadow-2xl">
        {/* Left Side */}
        <div className="relative overflow-hidden">
          {!isFlipped ? (
            <InfoPanel />
          ) : (
            <GoogleForm 
              credentials={credentials}
              handleInputChange={handleInputChange}
              onFlip={onFlip}
            />
          )}
        </div>
        
        {/* Right Side */}
        <div className="relative overflow-hidden border-l border-white/10">
          {!isFlipped ? (
            <StandardForm 
              credentials={credentials}
              handleInputChange={handleInputChange}
              onFlip={onFlip}
            />
          ) : (
            <InfoPanel />
          )}
        </div>
      </div>
    </div>
  );
};

const InfoPanel = () => (
  <div className="flex flex-col justify-center px-12 py-16">
    <div>
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-slate-400 bg-clip-text text-transparent">
        Secure Banking
      </h2>
      <p className="text-lg text-white/80 mb-8 leading-relaxed">
        Your trusted financial partner with advanced security and seamless digital banking experience.
      </p>
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-white/70">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-slate-400"></div>
          <span>Bank-grade security</span>
        </div>
        <div className="flex items-center gap-3 text-white/70">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-slate-400"></div>
          <span>24/7 secure access</span>
        </div>
        <div className="flex items-center gap-3 text-white/70">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-slate-400"></div>
          <span>Protected transactions</span>
        </div>
      </div>
    </div>
  </div>
);

interface FormProps {
  credentials: {
    userId: string;
    password: string;
    googleId: string;
  };
  handleInputChange: (field: string, value: string) => void;
  onFlip: () => void;
}

const StandardForm = ({ credentials, handleInputChange, onFlip }: FormProps) => (
  <div className="flex flex-col justify-center px-12 py-16">
    <div className="w-full max-w-sm mx-auto space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold mb-2 text-white">Sign In</h3>
        <p className="text-white/60">Enter your credentials to continue</p>
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="userId" className="text-sm font-medium text-white/80">User ID</Label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-4 w-4 text-white/50" />
            <Input
              id="userId"
              type="text"
              placeholder="Enter your user ID"
              value={credentials.userId}
              onChange={(e) => handleInputChange("userId", e.target.value)}
              className="pl-10 bg-white/10 border-white/20 backdrop-blur-sm text-white placeholder:text-white/50 focus:bg-white/15 transition-all duration-300"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm font-medium text-white/80">Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-white/50" />
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={credentials.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              className="pl-10 bg-white/10 border-white/20 backdrop-blur-sm text-white placeholder:text-white/50 focus:bg-white/15 transition-all duration-300"
            />
          </div>
        </div>
      </div>
      
      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
        Sign In
      </Button>
      
      <div className="text-center pt-4">
        <button 
          onClick={onFlip}
          className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-blue-300 transition-colors duration-300"
        >
          <ArrowRightLeft className="h-4 w-4" />
          Switch to Google Sign In
        </button>
      </div>
    </div>
  </div>
);

const GoogleForm = ({ credentials, handleInputChange, onFlip }: FormProps) => (
  <div className="flex flex-col justify-center px-12 py-16">
    <div className="w-full max-w-sm mx-auto space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold mb-2 text-white">Google Sign In</h3>
        <p className="text-white/60">Use your Google account to continue</p>
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="googleId" className="text-sm font-medium text-white/80">Google ID</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-white/50" />
            <Input
              id="googleId"
              type="email"
              placeholder="Enter your Google email"
              value={credentials.googleId}
              onChange={(e) => handleInputChange("googleId", e.target.value)}
              className="pl-10 bg-white/10 border-white/20 backdrop-blur-sm text-white placeholder:text-white/50 focus:bg-white/15 transition-all duration-300"
            />
          </div>
        </div>
      </div>
      
      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
        Continue with Google
      </Button>
      
      <div className="text-center pt-4">
        <button 
          onClick={onFlip}
          className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-blue-300 transition-colors duration-300"
        >
          <ArrowRightLeft className="h-4 w-4" />
          Back to Standard Sign In
        </button>
      </div>
    </div>
  </div>
);