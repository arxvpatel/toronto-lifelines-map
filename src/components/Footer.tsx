import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Activity, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Interactive Map", path: "/map" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Results & Impact", path: "/results" },
    { name: "Our Team", path: "/team" }
  ];

  const resources = [
    { name: "Research Papers", path: "#" },
    { name: "Data Sources", path: "#" },
    { name: "API Documentation", path: "#" },
    { name: "Open Source Code", path: "#" }
  ];

  return (
    <footer className="bg-card/30 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-data rounded-lg flex items-center justify-center glow-route">
                <Activity className="h-6 w-6 text-background" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Hospital Access Optimizer
                </h3>
                <p className="text-sm text-muted-foreground">Toronto</p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Using artificial intelligence and real-time data to optimize hospital placement 
              and save lives through smarter healthcare infrastructure planning.
            </p>
            
            <div className="flex space-x-4">
              <a
                href="https://github.com/hospital-access-optimizer"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/50 rounded-lg flex items-center justify-center text-muted-foreground hover:text-data-cyan hover:glow-data transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/hospital-access-optimizer"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/50 rounded-lg flex items-center justify-center text-muted-foreground hover:text-route-blue hover:glow-route transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@hospitaloptimizer.ca"
                className="w-10 h-10 bg-background/50 rounded-lg flex items-center justify-center text-muted-foreground hover:text-hospital-green hover:glow-hospital transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center group"
                  >
                    <span>{resource.name}</span>
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Hospital Access Optimizer. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency visualization background */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emergency-red via-hospital-green to-data-cyan opacity-50"></div>
    </footer>
  );
};

export default Footer;