import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  Users, 
  MapPin, 
  TrendingUp, 
  CheckCircle, 
  AlertTriangle,
  Activity,
  Target
} from "lucide-react";

const Results = () => {
  const metrics = [
    {
      title: "Average Response Time",
      before: "14.2 minutes",
      after: "8.7 minutes", 
      improvement: "38% reduction",
      icon: Clock,
      color: "emergency-red"
    },
    {
      title: "Population Coverage",
      before: "73% of Toronto",
      after: "95% of Toronto",
      improvement: "22% increase",
      icon: Users,
      color: "hospital-green"
    },
    {
      title: "Underserved Areas",
      before: "47 neighborhoods",
      after: "12 neighborhoods",
      improvement: "74% reduction",
      icon: MapPin,
      color: "data-cyan"
    },
    {
      title: "Emergency Capacity", 
      before: "2,400 calls/day",
      after: "3,800 calls/day",
      improvement: "58% increase",
      icon: Activity,
      color: "route-blue"
    }
  ];

  const outcomes = [
    "Time to Nearest Hospital Reduced by 38%",
    "Coverage Increased from 73% to 95%", 
    "Population Newly Covered: 267,000 People",
    "Underserved Areas Reduced by 74%",
    "Emergency Response Capacity Increased by 58%",
    "Projected Annual Lives Saved: 1,200+",
    "Healthcare Equity Index Improved by 45%",
    "Average Ambulance Distance Reduced by 2.1km"
  ];

  return (
    <div className="min-h-screen bg-gradient-night pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Results & Impact
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive analysis showing the projected improvements in emergency healthcare 
            access across Toronto with optimized hospital placement.
          </p>
        </div>

        {/* Before/After Comparison Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <Card key={metric.title} className="p-6 bg-card/50 border-border hover:glow-data transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <metric.icon className={`h-8 w-8 text-${metric.color}`} />
                  <Badge className={`bg-${metric.color}/20 text-${metric.color}`}>
                    {metric.improvement}
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground text-lg">
                    {metric.title}
                  </h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Before:</span>
                      <span className="text-emergency-red font-medium">{metric.before}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">After:</span>
                      <span className="text-hospital-green font-medium">{metric.after}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Side-by-side Maps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            Coverage Comparison
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Before Map */}
            <Card className="p-6 bg-card/50 border-border">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-foreground">Current Network</h3>
                  <Badge variant="destructive" className="bg-emergency-red/20 text-emergency-red border-emergency-red">
                    73% Coverage
                  </Badge>
                </div>
                
                <div className="h-64 bg-gradient-to-br from-background to-card rounded-lg border border-border relative overflow-hidden">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    {/* City boundary */}
                    <rect x="10" y="15" width="80" height="70" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5" strokeDasharray="2,2" />
                    
                    {/* Existing hospitals */}
                    <circle cx="45" cy="35" r="3" fill="hsl(var(--hospital-green))" className="pulse-hospital" />
                    <circle cx="40" cy="50" r="3" fill="hsl(var(--hospital-green))" className="pulse-hospital" />
                    <circle cx="65" cy="30" r="3" fill="hsl(var(--hospital-green))" className="pulse-hospital" />
                    
                    {/* Coverage areas */}
                    <circle cx="45" cy="35" r="12" fill="hsl(var(--hospital-green))" opacity="0.1" />
                    <circle cx="40" cy="50" r="12" fill="hsl(var(--hospital-green))" opacity="0.1" />
                    <circle cx="65" cy="30" r="12" fill="hsl(var(--hospital-green))" opacity="0.1" />
                    
                    {/* Underserved areas */}
                    <circle cx="25" cy="25" r="8" fill="hsl(var(--emergency-red))" opacity="0.3" className="pulse-emergency" />
                    <circle cx="75" cy="60" r="10" fill="hsl(var(--emergency-red))" opacity="0.3" className="pulse-emergency" />
                    <circle cx="20" cy="70" r="6" fill="hsl(var(--emergency-red))" opacity="0.3" className="pulse-emergency" />
                  </svg>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Large gaps in coverage leave many areas underserved
                  </p>
                </div>
              </div>
            </Card>

            {/* After Map */}
            <Card className="p-6 bg-card/50 border-border glow-hospital">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-foreground">Optimized Network</h3>
                  <Badge className="bg-hospital-green/20 text-hospital-green border-hospital-green">
                    95% Coverage
                  </Badge>
                </div>
                
                <div className="h-64 bg-gradient-to-br from-background to-card rounded-lg border border-border relative overflow-hidden">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    {/* City boundary */}
                    <rect x="10" y="15" width="80" height="70" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5" strokeDasharray="2,2" />
                    
                    {/* Existing hospitals */}
                    <circle cx="45" cy="35" r="3" fill="hsl(var(--hospital-green))" className="pulse-hospital" />
                    <circle cx="40" cy="50" r="3" fill="hsl(var(--hospital-green))" className="pulse-hospital" />
                    <circle cx="65" cy="30" r="3" fill="hsl(var(--hospital-green))" className="pulse-hospital" />
                    
                    {/* New hospitals */}
                    <circle cx="25" cy="25" r="3" fill="hsl(var(--data-cyan))" className="pulse-route" />
                    <circle cx="75" cy="60" r="3" fill="hsl(var(--data-cyan))" className="pulse-route" />
                    <circle cx="55" cy="70" r="3" fill="hsl(var(--data-cyan))" className="pulse-route" />
                    
                    {/* Extended coverage */}
                    <circle cx="45" cy="35" r="10" fill="hsl(var(--hospital-green))" opacity="0.15" />
                    <circle cx="40" cy="50" r="10" fill="hsl(var(--hospital-green))" opacity="0.15" />
                    <circle cx="65" cy="30" r="10" fill="hsl(var(--hospital-green))" opacity="0.15" />
                    <circle cx="25" cy="25" r="10" fill="hsl(var(--data-cyan))" opacity="0.15" />
                    <circle cx="75" cy="60" r="10" fill="hsl(var(--data-cyan))" opacity="0.15" />
                    <circle cx="55" cy="70" r="10" fill="hsl(var(--data-cyan))" opacity="0.15" />
                    
                    {/* Remaining small underserved areas */}
                    <circle cx="80" cy="25" r="2" fill="hsl(var(--emergency-red))" opacity="0.2" />
                    <circle cx="20" cy="80" r="1.5" fill="hsl(var(--emergency-red))" opacity="0.2" />
                  </svg>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Nearly complete coverage with strategic new facilities
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Key Outcomes */}
        <div className="mb-16">
          <Card className="p-8 bg-card/30 border-border">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center justify-center">
                <Target className="h-8 w-8 mr-3 text-primary" />
                Key Outcomes
              </h2>
              <p className="text-lg text-muted-foreground">
                Measurable improvements in emergency healthcare access and equity
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <CheckCircle className="h-5 w-5 text-hospital-green flex-shrink-0" />
                  <span className="text-foreground">{outcome}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Impact Dashboard */}
        <div>
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            Emergency Planning Dashboard
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="p-6 bg-card/50 border-border">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">Response Efficiency</h3>
                  <TrendingUp className="h-5 w-5 text-hospital-green" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Success Rate</span>
                    <span className="text-hospital-green font-medium">94.7%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Avg. Response</span>
                    <span className="text-hospital-green font-medium">8.7 min</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Critical Cases</span>
                    <span className="text-hospital-green font-medium">&lt; 5 min</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 border-border">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">Resource Allocation</h3>
                  <Activity className="h-5 w-5 text-data-cyan" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Capacity Utilization</span>
                    <span className="text-data-cyan font-medium">78%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Peak Load</span>
                    <span className="text-data-cyan font-medium">89%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Available Beds</span>
                    <span className="text-data-cyan font-medium">340</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 border-border">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">Risk Assessment</h3>
                  <AlertTriangle className="h-5 w-5 text-route-blue" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">High Risk Areas</span>
                    <span className="text-route-blue font-medium">3</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Coverage Gaps</span>
                    <span className="text-route-blue font-medium">&lt; 5%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Emergency Load</span>
                    <span className="text-route-blue font-medium">Normal</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
