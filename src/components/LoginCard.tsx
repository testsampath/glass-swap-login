import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRightLeft, Lock, Mail, User, Shield, CreditCard, Banknote } from "lucide-react";

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
            <div className="animate-slide-in-right">
              <InfoPanel />
            </div>
          ) : (
            <div className="animate-slide-in-right">
              <GoogleForm 
                credentials={credentials}
                handleInputChange={handleInputChange}
                onFlip={onFlip}
              />
            </div>
          )}
        </div>
        
        {/* Right Side */}
        <div className="relative overflow-hidden border-l border-white/10">
          {!isFlipped ? (
            <div className="animate-fade-in">
              <StandardForm 
                credentials={credentials}
                handleInputChange={handleInputChange}
                onFlip={onFlip}
              />
            </div>
          ) : (
            <div className="animate-fade-in">
              <InfoPanel />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const InfoPanel = () => (
  <div className="flex flex-col justify-center px-12 py-16 animate-scale-in">
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500/20 to-slate-400/20 backdrop-blur-sm">
          <CreditCard className="h-6 w-6 text-blue-400" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">
          SecureBank
        </h2>
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-white">
        Welcome to Digital Banking
      </h3>
      <p className="text-lg text-white/80 mb-8 leading-relaxed">
        Access your accounts securely with our advanced digital banking platform. 
        Your financial security is our top priority.
      </p>
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-white/70">
          <Shield className="h-5 w-5 text-blue-400" />
          <span>256-bit SSL encryption</span>
        </div>
        <div className="flex items-center gap-3 text-white/70">
          <Lock className="h-5 w-5 text-blue-400" />
          <span>Multi-factor authentication</span>
        </div>
        <div className="flex items-center gap-3 text-white/70">
          <Banknote className="h-5 w-5 text-blue-400" />
          <span>FDIC insured deposits</span>
        </div>
      </div>
      <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10">
        <p className="text-sm text-white/60">
          🔒 Your session is protected by bank-grade security protocols
        </p>
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
  <div className="flex flex-col justify-center px-12 py-16 animate-fade-in">
    <div className="w-full max-w-sm mx-auto space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold mb-2 text-white">Online Banking Login</h3>
        <p className="text-white/60">Access your account securely</p>
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="userId" className="text-sm font-medium text-white/80">Customer ID</Label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-4 w-4 text-white/50" />
            <Input
              id="userId"
              type="text"
              placeholder="Enter your customer ID"
              value={credentials.userId}
              onChange={(e) => handleInputChange("userId", e.target.value)}
              className="pl-10 bg-white/10 border-white/20 backdrop-blur-sm text-white placeholder:text-white/50 focus:bg-white/15 transition-all duration-300"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm font-medium text-white/80">Online Banking Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-white/50" />
            <Input
              id="password"
              type="password"
              placeholder="Enter your banking password"
              value={credentials.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              className="pl-10 bg-white/10 border-white/20 backdrop-blur-sm text-white placeholder:text-white/50 focus:bg-white/15 transition-all duration-300"
            />
          </div>
        </div>
      </div>
      
      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
        Access My Account
      </Button>
      
      <div className="text-center text-xs text-white/50 mt-4">
        <p>Protected by 256-bit SSL encryption</p>
      </div>
      
      <div className="text-center pt-4">
        <button 
          onClick={onFlip}
          className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-blue-300 transition-colors duration-300"
        >
          <ArrowRightLeft className="h-4 w-4" />
          Switch to Business Login
        </button>
      </div>
    </div>
  </div>
);

const GoogleForm = ({ credentials, handleInputChange, onFlip }: FormProps) => (
  <div className="flex flex-col justify-center px-12 py-16 animate-slide-in-right">
    <div className="w-full max-w-sm mx-auto space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold mb-2 text-white">Business Banking</h3>
        <p className="text-white/60">Access your business account</p>
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="googleId" className="text-sm font-medium text-white/80">Business Account ID</Label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-4 w-4 text-white/50" />
            <Input
              id="googleId"
              type="text"
              placeholder="Enter your business account ID"
              value={credentials.googleId}
              onChange={(e) => handleInputChange("googleId", e.target.value)}
              className="pl-10 bg-white/10 border-white/20 backdrop-blur-sm text-white placeholder:text-white/50 focus:bg-white/15 transition-all duration-300"
            />
          </div>
        </div>
      </div>
      
      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
        Access Business Account
      </Button>
      
      <div className="text-center pt-4">
        <button 
          onClick={onFlip}
          className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-blue-300 transition-colors duration-300"
        >
          <ArrowRightLeft className="h-4 w-4" />
          Back to Personal Banking
        </button>
      </div>
    </div>
  </div>
);