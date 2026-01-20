import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-4">
      <div className="text-center">
        {/* Logo */}
        <Link to="/" className="inline-flex items-center gap-3 mb-12">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center shadow-lg">
            <span className="text-accent-foreground font-bold text-xl">AG</span>
          </div>
          <div className="text-left">
            <h2 className="font-display font-bold text-xl text-primary-foreground">AlumGlass Pro</h2>
            <p className="text-primary-foreground/60 text-sm">Premium Solutions</p>
          </div>
        </Link>

        {/* 404 */}
        <h1 className="font-display text-8xl md:text-9xl font-bold text-accent mb-4">404</h1>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
          Page Not Found
        </h2>
        <p className="text-primary-foreground/70 text-lg mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              <Home className="w-5 h-5" />
              Go to Homepage
            </Button>
          </Link>
          <Button 
            variant="heroOutline" 
            size="lg" 
            onClick={() => window.history.back()}
            className="w-full sm:w-auto"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
