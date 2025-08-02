import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, MapPin, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-night flex items-center justify-center px-4">
      <Card className="p-12 bg-card/50 border-border text-center max-w-md w-full">
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-gradient-emergency rounded-lg flex items-center justify-center glow-emergency">
              <AlertTriangle className="h-10 w-10 text-background" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-emergency-red">404</h1>
            <h2 className="text-2xl font-semibold text-foreground">Route Not Found</h2>
            <p className="text-muted-foreground">
              The emergency route you're looking for doesn't exist. 
              Let's get you back to safety.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/">
              <Button className="bg-gradient-data hover:glow-route transition-all duration-300">
                <Home className="mr-2 h-4 w-4" />
                Return Home
              </Button>
            </Link>
            <Link to="/map">
              <Button variant="outline" className="border-hospital-green text-hospital-green hover:bg-hospital-green hover:text-background">
                <MapPin className="mr-2 h-4 w-4" />
                View Map
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default NotFound;
