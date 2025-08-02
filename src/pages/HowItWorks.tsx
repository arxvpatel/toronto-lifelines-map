import { Card } from "@/components/ui/card";
import { Database, Brain, MapPin, TrendingUp, Activity, Zap } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Collecting City & Health Data",
      description: "We gather comprehensive datasets including demographic information, traffic patterns, existing hospital locations, emergency response times, and population density across Toronto's neighborhoods.",
      icon: Database,
      details: [
        "Real-time traffic and transportation data",
        "Population demographics and health statistics", 
        "Existing healthcare facility locations and capacity",
        "Historical emergency response patterns",
        "Geographic and infrastructure mapping"
      ],
      color: "data-cyan"
    },
    {
      number: "02", 
      title: "Predicting Demand with AI",
      description: "Our machine learning algorithms analyze patterns in emergency healthcare demand, considering factors like population growth, aging demographics, and seasonal variations to predict future needs.",
      icon: Brain,
      details: [
        "Deep learning models for demand forecasting",
        "Pattern recognition in emergency call data",
        "Demographic trend analysis and projection",
        "Seasonal and temporal demand modeling",
        "Risk factor identification and weighting"
      ],
      color: "route-blue"
    },
    {
      number: "03",
      title: "Optimizing New Facility Locations", 
      description: "Using optimization algorithms, we identify the most strategic locations for new hospitals that minimize travel times, maximize coverage, and ensure equitable access to emergency healthcare.",
      icon: MapPin,
      details: [
        "Multi-objective optimization algorithms",
        "Coverage gap analysis and filling",
        "Travel time minimization calculations",
        "Resource allocation optimization",
        "Equity and accessibility prioritization"
      ],
      color: "hospital-green"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-night pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our AI-powered approach combines multiple data sources and advanced algorithms 
            to identify optimal hospital locations that can save lives and improve healthcare access.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-data-cyan via-route-blue to-hospital-green h-full hidden lg:block"></div>
          
          {/* Steps */}
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div key={step.number} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <Card className="p-8 bg-card/50 border-border hover:glow-data transition-all duration-500 hover:bg-card/70">
                    <div className="space-y-6">
                      {/* Step number and icon */}
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 bg-${step.color} rounded-lg flex items-center justify-center glow-${step.color.split('-')[0]} float`} 
                             style={{ animationDelay: `${index * 0.5}s` }}>
                          <step.icon className="h-8 w-8 text-background" />
                        </div>
                        <div className={`text-6xl font-bold text-${step.color} opacity-20`}>
                          {step.number}
                        </div>
                      </div>

                      {/* Title and description */}
                      <div className="space-y-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                          {step.title}
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Details */}
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-foreground flex items-center">
                          <Zap className="h-5 w-5 mr-2 text-primary" />
                          Key Components:
                        </h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start space-x-3">
                              <div className={`w-2 h-2 bg-${step.color} rounded-full mt-2 flex-shrink-0`}></div>
                              <span className="text-muted-foreground">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Center point */}
                <div className="hidden lg:flex w-2/12 justify-center">
                  <div className={`w-8 h-8 bg-${step.color} rounded-full border-4 border-background glow-${step.color.split('-')[0]} pulse-${step.color.split('-')[0]}`}
                       style={{ animationDelay: `${index * 0.7}s` }}></div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Section */}
        <div className="mt-32 text-center">
          <Card className="p-12 bg-card/30 border-border">
            <div className="space-y-8">
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-gradient-emergency rounded-lg flex items-center justify-center glow-emergency pulse-emergency">
                  <Activity className="h-10 w-10 text-background" />
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  The Result: Lives Saved
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  By strategically placing new hospitals using our AI optimization, we can reduce 
                  emergency response times by up to 40% and provide healthcare access to over 
                  200,000 additional Toronto residents.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 pt-8">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-emergency-red">40%</div>
                  <div className="text-sm text-muted-foreground">Faster Response Times</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-hospital-green">200K+</div>
                  <div className="text-sm text-muted-foreground">Additional People Served</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-data-cyan">95%</div>
                  <div className="text-sm text-muted-foreground">City Coverage</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;