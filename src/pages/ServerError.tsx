import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw, Home, Phone } from "lucide-react";

const ServerError = () => {
  useEffect(() => {
    console.error("505 Error: Internal server error occurred");
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-destructive/20 via-background to-destructive/10 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-destructive/15 via-transparent to-orange-500/10"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-red-500/5 via-transparent to-slate-500/10"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center p-8 bg-card/30 backdrop-blur-xl border border-border/50 rounded-3xl shadow-2xl max-w-lg mx-4 animate-scale-in">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-destructive/20 rounded-full backdrop-blur-sm animate-pulse">
            <AlertTriangle className="w-12 h-12 text-destructive" />
          </div>
        </div>
        
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-destructive to-orange-500 bg-clip-text text-transparent">
          505
        </h1>
        <h2 className="text-2xl font-semibold mb-4 text-foreground">
          Server Error
        </h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Our banking systems are experiencing technical difficulties. 
          Our team has been notified and is working to resolve this issue.
        </p>
        
        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-8">
          <p className="text-sm text-destructive font-medium mb-2">
            Important Security Notice
          </p>
          <p className="text-xs text-muted-foreground">
            Your account remains secure. No unauthorized access has occurred. 
            Please try again in a few minutes.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <Button 
            onClick={handleRefresh}
            variant="outline"
            className="backdrop-blur-sm bg-card/50 border-border/50 hover:bg-accent/20"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
          <Button asChild>
            <a href="/">
              <Home className="w-4 h-4 mr-2" />
              Banking Home
            </a>
          </Button>
        </div>
        
        <div className="border-t border-border/30 pt-6">
          <p className="text-sm text-muted-foreground mb-3">
            Need immediate assistance?
          </p>
          <Button 
            variant="ghost" 
            size="sm"
            className="text-primary hover:text-primary/80"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Banking Support: 1-800-BANK
          </Button>
        </div>
        
        <div className="mt-6 pt-4 border-t border-border/30">
          <p className="text-xs text-muted-foreground">
            Error Code: 505 | Secure Banking Portal | Support Reference: #{Date.now().toString().slice(-6)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServerError;