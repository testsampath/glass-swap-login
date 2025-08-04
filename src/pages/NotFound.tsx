import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shield, ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 via-background to-accent/20 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/15"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/5 via-transparent to-slate-500/10"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center p-8 bg-card/30 backdrop-blur-xl border border-border/50 rounded-3xl shadow-2xl max-w-md mx-4 animate-scale-in">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-destructive/20 rounded-full backdrop-blur-sm">
            <Shield className="w-12 h-12 text-destructive" />
          </div>
        </div>
        
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-2xl font-semibold mb-4 text-foreground">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          The banking service you're looking for has been moved or is temporarily unavailable. 
          Please verify your URL or return to the main banking portal.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button 
            onClick={() => window.history.back()} 
            variant="outline"
            className="backdrop-blur-sm bg-card/50 border-border/50 hover:bg-accent/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
          <Button asChild>
            <a href="/">
              <Home className="w-4 h-4 mr-2" />
              Banking Home
            </a>
          </Button>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border/30">
          <p className="text-xs text-muted-foreground">
            Error Code: 404 | Secure Banking Portal
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
