import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Zap, BarChart3, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-night">
      {/* Hero Section */}
      <div className="relative pt-24 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 800"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Animated route lines */}
            <path
              d="M100,400 Q300,200 500,400 T900,400"
              stroke="hsl(var(--route-blue))"
              strokeWidth="2"
              fill="none"
              className="route-line opacity-60"
            />
            <path
              d="M200,500 Q400,300 600,500 T1000,500"
              stroke="hsl(var(--data-cyan))"
              strokeWidth="2"
              fill="none"
              className="route-line opacity-40"
              style={{ animationDelay: "1s" }}
            />
            <path
              d="M50,300 Q250,100 450,300 T850,300"
              stroke="hsl(var(--hospital-green))"
              strokeWidth="2"
              fill="none"
              className="route-line opacity-50"
              style={{ animationDelay: "2s" }}
            />
            
            {/* Pulsing hospital dots */}
            <circle cx="300" cy="200" r="4" fill="hsl(var(--hospital-green))" className="pulse-hospital" />
            <circle cx="700" cy="350" r="4" fill="hsl(var(--hospital-green))" className="pulse-hospital" style={{ animationDelay: "0.5s" }} />
            <circle cx="500" cy="500" r="4" fill="hsl(var(--hospital-green))" className="pulse-hospital" style={{ animationDelay: "1.5s" }} />
            
            {/* Emergency indicators */}
            <circle cx="150" cy="450" r="3" fill="hsl(var(--emergency-red))" className="pulse-emergency" />
            <circle cx="850" cy="250" r="3" fill="hsl(var(--emergency-red))" className="pulse-emergency" style={{ animationDelay: "0.8s" }} />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
                Hospital Access
                <span className="block text-primary glow-route">Optimizer</span>
              </h1>
              <p className="text-xl md:text-2xl text-route-blue font-medium">
                Toronto
              </p>
            </div>

            <p className="text-3xl md:text-4xl font-semibold text-hospital-green max-w-4xl mx-auto leading-tight">
              Saving Lives with Smarter Infrastructure
            </p>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Using machine learning and real-time geographic data to help city planners 
              determine optimal hospital locations in Toronto, improving emergency healthcare 
              access and reducing response times when every second counts.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/map">
                <Button size="lg" className="bg-gradient-data hover:glow-route transition-all duration-300 text-lg px-8 py-6">
                  <MapPin className="mr-2 h-5 w-5" />
                  Explore Map
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link to="/results">
                <Button variant="outline" size="lg" className="border-hospital-green text-hospital-green hover:bg-hospital-green hover:text-background transition-all duration-300 text-lg px-8 py-6">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  See Results
                </Button>
              </Link>
              
              <Link to="/how-it-works">
                <Button variant="ghost" size="lg" className="text-data-cyan hover:text-data-cyan hover:bg-data-cyan/10 transition-all duration-300 text-lg px-8 py-6">
                  <Zap className="mr-2 h-5 w-5" />
                  How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Emergency Response Optimization
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leveraging AI and real-time data to create a smarter, more responsive healthcare infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-card/50 border-border hover:glow-data transition-all duration-300 hover:bg-card/70">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-hospital rounded-lg mx-auto flex items-center justify-center glow-hospital">
                  <Activity className="h-8 w-8 text-background" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Real-Time Analysis</h3>
                <p className="text-muted-foreground">
                  Continuous monitoring of traffic patterns, demographic changes, and emergency response data
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 border-border hover:glow-data transition-all duration-300 hover:bg-card/70">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-data rounded-lg mx-auto flex items-center justify-center glow-route">
                  <MapPin className="h-8 w-8 text-background" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Optimal Placement</h3>
                <p className="text-muted-foreground">
                  AI-powered algorithms identify the most strategic locations for new healthcare facilities
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 border-border hover:glow-data transition-all duration-300 hover:bg-card/70">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-emergency rounded-lg mx-auto flex items-center justify-center glow-emergency">
                  <Zap className="h-8 w-8 text-background" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Life-Saving Impact</h3>
                <p className="text-muted-foreground">
                  Reduced emergency response times and improved healthcare access for underserved communities
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;