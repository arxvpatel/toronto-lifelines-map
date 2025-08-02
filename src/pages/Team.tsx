import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Lead Data Scientist & Project Director",
      bio: "PhD in Computer Science with 8+ years in healthcare analytics and machine learning. Previously led emergency response optimization at Toronto Public Health.",
      image: "SC",
      linkedin: "https://linkedin.com/in/sarah-chen",
      github: "https://github.com/sarah-chen",
      email: "sarah.chen@hospitaloptimizer.ca"
    },
    {
      name: "Michael Rodriguez",
      role: "GIS & Spatial Analytics Engineer",
      bio: "Expert in geographic information systems and spatial optimization. Specializes in real-time traffic analysis and emergency routing algorithms.",
      image: "MR",
      linkedin: "https://linkedin.com/in/michael-rodriguez",
      github: "https://github.com/michael-rodriguez",
      email: "michael.rodriguez@hospitaloptimizer.ca"
    },
    {
      name: "Dr. Priya Patel",
      role: "Healthcare Policy Advisor",
      bio: "MD with focus on emergency medicine and public health policy. Provides clinical expertise and ensures real-world applicability of our solutions.",
      image: "PP",
      linkedin: "https://linkedin.com/in/priya-patel-md",
      github: null,
      email: "priya.patel@hospitaloptimizer.ca"
    },
    {
      name: "Alex Thompson",
      role: "Machine Learning Engineer",
      bio: "Develops predictive models for healthcare demand forecasting. Expert in deep learning, time series analysis, and distributed computing systems.",
      image: "AT",
      linkedin: "https://linkedin.com/in/alex-thompson",
      github: "https://github.com/alex-thompson",
      email: "alex.thompson@hospitaloptimizer.ca"
    },
    {
      name: "Jessica Kim",
      role: "Urban Planning Specialist",
      bio: "Masters in Urban Planning with focus on healthcare infrastructure. Ensures our recommendations align with city development and zoning requirements.",
      image: "JK",
      linkedin: "https://linkedin.com/in/jessica-kim-planning",
      github: "https://github.com/jessica-kim",
      email: "jessica.kim@hospitaloptimizer.ca"
    },
    {
      name: "David Wilson",
      role: "Full-Stack Developer",
      bio: "Builds and maintains our web platform and data visualization tools. Expert in React, Node.js, and real-time data processing systems.",
      image: "DW",
      linkedin: "https://linkedin.com/in/david-wilson-dev",
      github: "https://github.com/david-wilson",
      email: "david.wilson@hospitaloptimizer.ca"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-night pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A multidisciplinary team of experts combining healthcare, technology, and urban planning 
            to create life-saving infrastructure solutions for Toronto.
          </p>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 800"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Dotted grid pattern */}
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="20" cy="20" r="1" fill="hsl(var(--primary))" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Team Grid */}
        <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={member.name}
              className="p-6 bg-card/50 border-border hover:glow-data transition-all duration-500 hover:bg-card/70 hover:scale-105 group"
            >
              <div className="space-y-6">
                {/* Avatar */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div className={`w-24 h-24 bg-gradient-${index % 2 === 0 ? 'data' : index % 3 === 0 ? 'hospital' : 'emergency'} rounded-full flex items-center justify-center text-2xl font-bold text-background glow-${index % 2 === 0 ? 'route' : index % 3 === 0 ? 'hospital' : 'emergency'} group-hover:pulse-${index % 2 === 0 ? 'route' : index % 3 === 0 ? 'hospital' : 'emergency'}`}>
                      {member.image}
                    </div>
                    {/* Floating indicator */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-hospital-green rounded-full border-2 border-background flex items-center justify-center">
                      <div className="w-2 h-2 bg-background rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="text-center space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium">
                      {member.role}
                    </p>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:text-route-blue hover:glow-route transition-all duration-300"
                    asChild
                  >
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  
                  {member.github && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hover:text-data-cyan hover:glow-data transition-all duration-300"
                      asChild
                    >
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} GitHub`}
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                  )}
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:text-hospital-green hover:glow-hospital transition-all duration-300"
                    asChild
                  >
                    <a
                      href={`mailto:${member.email}`}
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-20">
          <Card className="p-8 bg-card/30 border-border text-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                We believe that smart urban planning powered by AI and data can directly save lives. 
                Our team combines expertise in healthcare, technology, and urban planning to ensure 
                that every Toronto resident has rapid access to emergency medical care when they need it most.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 pt-8">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-gradient-hospital rounded-lg mx-auto flex items-center justify-center glow-hospital">
                    <ExternalLink className="h-6 w-6 text-background" />
                  </div>
                  <h3 className="font-semibold text-foreground">Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    Pushing the boundaries of what's possible with AI and healthcare infrastructure
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-gradient-data rounded-lg mx-auto flex items-center justify-center glow-route">
                    <ExternalLink className="h-6 w-6 text-background" />
                  </div>
                  <h3 className="font-semibold text-foreground">Collaboration</h3>
                  <p className="text-sm text-muted-foreground">
                    Working closely with city planners, healthcare providers, and community leaders
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-gradient-emergency rounded-lg mx-auto flex items-center justify-center glow-emergency">
                    <ExternalLink className="h-6 w-6 text-background" />
                  </div>
                  <h3 className="font-semibold text-foreground">Impact</h3>
                  <p className="text-sm text-muted-foreground">
                    Measuring success by lives saved and communities better served
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Team;