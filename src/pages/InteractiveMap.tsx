import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Clock, 
  Users, 
  TrendingUp, 
  Zap, 
  AlertTriangle,
  Activity,
  Navigation
} from "lucide-react";

const InteractiveMap = () => {
  const [selectedHospital, setSelectedHospital] = useState<number | null>(null);
  const [showHeatmap, setShowHeatmap] = useState(true);
  const [showRoutes, setShowRoutes] = useState(true);

  // Simulated real-time data
  const [realtimeData, setRealtimeData] = useState({
    avgTravelTime: 8.4,
    populationServed: 1250000,
    emergencyDemand: 847,
    coverageArea: 92.3
  });

  useEffect(() => {
    // Simulate real-time data updates
    const interval = setInterval(() => {
      setRealtimeData(prev => ({
        avgTravelTime: prev.avgTravelTime + (Math.random() - 0.5) * 0.2,
        populationServed: prev.populationServed + Math.floor((Math.random() - 0.5) * 1000),
        emergencyDemand: prev.emergencyDemand + Math.floor((Math.random() - 0.5) * 20),
        coverageArea: prev.coverageArea + (Math.random() - 0.5) * 0.1
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const hospitals = [
    { id: 1, name: "Toronto General Hospital", x: 45, y: 35, type: "existing" },
    { id: 2, name: "St. Michael's Hospital", x: 40, y: 45, type: "existing" },
    { id: 3, name: "Sunnybrook Hospital", x: 65, y: 25, type: "existing" },
    { id: 4, name: "Proposed North York Facility", x: 55, y: 15, type: "proposed" },
    { id: 5, name: "Proposed Scarborough Facility", x: 75, y: 55, type: "proposed" },
    { id: 6, name: "Proposed Etobicoke Facility", x: 25, y: 40, type: "proposed" }
  ];

  const underservedAreas = [
    { x: 20, y: 20, intensity: 80 },
    { x: 80, y: 60, intensity: 75 },
    { x: 60, y: 70, intensity: 65 },
    { x: 15, y: 65, intensity: 70 }
  ];

  return (
    <div className="min-h-screen bg-gradient-night pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Interactive Map
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Explore Toronto's current hospital network and proposed optimizations. 
            Toggle layers to see emergency demand heatmaps, ambulance routes, and real-time analytics.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Map Visualization */}
          <div className="lg:col-span-3">
            <Card className="p-6 bg-card/50 border-border h-[600px] relative overflow-hidden">
              {/* Map Controls */}
              <div className="absolute top-4 left-4 z-10 space-y-2">
                <Button
                  variant={showHeatmap ? "default" : "outline"}
                  size="sm"
                  onClick={() => setShowHeatmap(!showHeatmap)}
                  className="bg-emergency-red/20 border-emergency-red text-emergency-red hover:bg-emergency-red hover:text-background"
                >
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Heat Map
                </Button>
                <Button
                  variant={showRoutes ? "default" : "outline"}
                  size="sm"
                  onClick={() => setShowRoutes(!showRoutes)}
                  className="bg-route-blue/20 border-route-blue text-route-blue hover:bg-route-blue hover:text-background"
                >
                  <Navigation className="h-4 w-4 mr-2" />
                  Routes
                </Button>
              </div>

              {/* Simulated Map */}
              <div className="w-full h-full bg-gradient-to-br from-background to-card rounded-lg relative border border-border">
                {/* Toronto City Outline */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* City boundary */}
                  <path
                    d="M10,20 L90,20 L90,80 L10,80 Z"
                    stroke="hsl(var(--border))"
                    strokeWidth="0.5"
                    fill="none"
                    strokeDasharray="2,2"
                  />
                  
                  {/* Major roads */}
                  <path d="M10,50 L90,50" stroke="hsl(var(--muted-foreground))" strokeWidth="0.3" opacity="0.5" />
                  <path d="M50,20 L50,80" stroke="hsl(var(--muted-foreground))" strokeWidth="0.3" opacity="0.5" />
                  <path d="M30,20 L30,80" stroke="hsl(var(--muted-foreground))" strokeWidth="0.2" opacity="0.3" />
                  <path d="M70,20 L70,80" stroke="hsl(var(--muted-foreground))" strokeWidth="0.2" opacity="0.3" />

                  {/* Underserved areas heatmap */}
                  {showHeatmap && underservedAreas.map((area, index) => (
                    <circle
                      key={index}
                      cx={area.x}
                      cy={area.y}
                      r={area.intensity / 10}
                      fill="hsl(var(--emergency-red))"
                      opacity={area.intensity / 200}
                      className="pulse-emergency"
                      style={{ animationDelay: `${index * 0.5}s` }}
                    />
                  ))}

                  {/* Ambulance routes */}
                  {showRoutes && (
                    <>
                      <path
                        d="M40,45 Q50,30 65,25"
                        stroke="hsl(var(--route-blue))"
                        strokeWidth="2"
                        fill="none"
                        className="route-line"
                      />
                      <path
                        d="M25,40 Q35,35 45,35"
                        stroke="hsl(var(--route-blue))"
                        strokeWidth="2"
                        fill="none"
                        className="route-line"
                        style={{ animationDelay: "1s" }}
                      />
                      <path
                        d="M75,55 Q65,45 55,50"
                        stroke="hsl(var(--data-cyan))"
                        strokeWidth="2"
                        fill="none"
                        className="route-line"
                        style={{ animationDelay: "0.5s" }}
                      />
                    </>
                  )}

                  {/* Hospitals */}
                  {hospitals.map((hospital) => (
                    <g key={hospital.id}>
                      <circle
                        cx={hospital.x}
                        cy={hospital.y}
                        r="3"
                        fill={hospital.type === "existing" ? "hsl(var(--hospital-green))" : "hsl(var(--data-cyan))"}
                        className={hospital.type === "existing" ? "pulse-hospital" : "pulse-route"}
                        style={{ 
                          cursor: "pointer",
                          animationDelay: `${hospital.id * 0.3}s`
                        }}
                        onClick={() => setSelectedHospital(hospital.id)}
                      />
                      {hospital.type === "proposed" && (
                        <circle
                          cx={hospital.x}
                          cy={hospital.y}
                          r="6"
                          fill="none"
                          stroke="hsl(var(--data-cyan))"
                          strokeWidth="1"
                          strokeDasharray="2,2"
                          opacity="0.7"
                        />
                      )}
                    </g>
                  ))}
                </svg>

                {/* Hospital Info Popup */}
                {selectedHospital && (
                  <div className="absolute bottom-4 left-4 right-4 lg:right-auto lg:w-80">
                    <Card className="p-4 bg-card border-border glow-data">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-foreground">
                            {hospitals.find(h => h.id === selectedHospital)?.name}
                          </h3>
                          <Badge 
                            variant={hospitals.find(h => h.id === selectedHospital)?.type === "existing" ? "default" : "secondary"}
                            className={hospitals.find(h => h.id === selectedHospital)?.type === "existing" 
                              ? "bg-hospital-green text-background" 
                              : "bg-data-cyan text-background"
                            }
                          >
                            {hospitals.find(h => h.id === selectedHospital)?.type === "existing" ? "Existing" : "Proposed"}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground">Avg. Response Time</p>
                            <p className="text-foreground font-medium">
                              {hospitals.find(h => h.id === selectedHospital)?.type === "existing" ? "12.3 min" : "8.7 min"}
                            </p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Coverage Radius</p>
                            <p className="text-foreground font-medium">
                              {hospitals.find(h => h.id === selectedHospital)?.type === "existing" ? "5.2 km" : "7.1 km"}
                            </p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedHospital(null)}
                          className="w-full mt-2"
                        >
                          Close
                        </Button>
                      </div>
                    </Card>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Real-time Data Panel */}
          <div className="space-y-6">
            <Card className="p-6 bg-card/50 border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Activity className="h-5 w-5 mr-2 text-primary" />
                Real-Time Analytics
              </h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Avg. Travel Time</span>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="text-2xl font-bold text-primary">
                    {realtimeData.avgTravelTime.toFixed(1)} min
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Population Served</span>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="text-2xl font-bold text-hospital-green">
                    {realtimeData.populationServed.toLocaleString()}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Emergency Demand</span>
                    <Zap className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="text-2xl font-bold text-emergency-red">
                    {realtimeData.emergencyDemand}
                  </p>
                  <p className="text-xs text-muted-foreground">calls/day</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Coverage Area</span>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="text-2xl font-bold text-data-cyan">
                    {realtimeData.coverageArea.toFixed(1)}%
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Legend
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-hospital-green rounded-full glow-hospital"></div>
                  <span className="text-sm text-muted-foreground">Existing Hospitals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-data-cyan rounded-full glow-route"></div>
                  <span className="text-sm text-muted-foreground">Proposed Locations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-emergency-red rounded-full glow-emergency"></div>
                  <span className="text-sm text-muted-foreground">Underserved Areas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-2 bg-route-blue rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Ambulance Routes</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;