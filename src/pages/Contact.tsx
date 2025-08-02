import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Github, 
  Linkedin, 
  Send,
  Building,
  Users,
  MessageSquare
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for your interest. We'll get back to you within 24 hours.",
        className: "bg-hospital-green/20 border-hospital-green text-hospital-green"
      });
      setFormData({
        name: "",
        email: "",
        organization: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "contact@hospitaloptimizer.ca",
      link: "mailto:contact@hospitaloptimizer.ca"
    },
    {
      icon: Phone,
      title: "Phone", 
      details: "+1 (416) 555-0123",
      link: "tel:+14165550123"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Toronto, Ontario, Canada",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      url: "https://github.com/hospital-access-optimizer",
      color: "data-cyan"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      url: "https://linkedin.com/company/hospital-access-optimizer", 
      color: "route-blue"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-night pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get in touch to learn more about our hospital optimization solutions, 
            discuss potential collaborations, or explore how our technology can benefit your community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-card/50 border-border">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-foreground flex items-center">
                  <MessageSquare className="h-6 w-6 mr-3 text-primary" />
                  Send us a Message
                </h2>
                <p className="text-muted-foreground">
                  We'd love to hear from healthcare professionals, city planners, researchers, and community leaders.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-border text-foreground"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-border text-foreground"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organization" className="text-foreground">Organization</Label>
                  <Input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="bg-background/50 border-border text-foreground"
                    placeholder="Your organization or institution"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border text-foreground"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-background/50 border-border text-foreground resize-none"
                    placeholder="Tell us more about your interest in hospital access optimization..."
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-data hover:glow-route transition-all duration-300 text-lg py-6"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-background mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="p-8 bg-card/50 border-border">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground flex items-center">
                  <Building className="h-6 w-6 mr-3 text-primary" />
                  Get in Touch
                </h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={info.title} className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-${index === 0 ? 'hospital' : index === 1 ? 'data' : 'emergency'} rounded-lg flex items-center justify-center glow-${index === 0 ? 'hospital' : index === 1 ? 'route' : 'emergency'}`}>
                        <info.icon className="h-6 w-6 text-background" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-foreground">{info.title}</h3>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.details}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.details}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-8 bg-card/50 border-border">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground flex items-center">
                  <Users className="h-6 w-6 mr-3 text-primary" />
                  Follow Our Work
                </h2>
                
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.title}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-4 p-4 rounded-lg border border-border hover:border-${social.color} hover:text-${social.color} hover:glow-${social.color.split('-')[0]} transition-all duration-300 group`}
                    >
                      <social.icon className="h-6 w-6" />
                      <div>
                        <h3 className="font-semibold">{social.title}</h3>
                        <p className="text-sm text-muted-foreground group-hover:text-current">
                          {social.title === "GitHub" ? "View our open source code" : "Connect with our team"}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Card>

            {/* Collaboration CTA */}
            <Card className="p-8 bg-card/30 border-border">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold text-foreground">
                  Interested in Collaboration?
                </h3>
                <p className="text-muted-foreground">
                  We're always looking to partner with healthcare organizations, 
                  city governments, and research institutions to expand our impact.
                </p>
                <Button 
                  variant="outline" 
                  className="border-hospital-green text-hospital-green hover:bg-hospital-green hover:text-background"
                >
                  Learn About Partnerships
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;