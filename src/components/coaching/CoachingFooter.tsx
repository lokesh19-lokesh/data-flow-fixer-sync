
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const CoachingFooter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail("");
  };

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Success Stories", href: "#success-stories" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-gradient-to-br from-muted/20 to-accent/10 pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            
            {/* Newsletter Signup */}
            <div className="md:col-span-2">
              <h3 className="font-playfair text-2xl font-bold text-secondary mb-4">
                Stay Connected
              </h3>
              <p className="font-lato text-muted-foreground mb-6">
                Get weekly inspiration, transformation tips, and exclusive content delivered to your inbox.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 font-lato"
                />
                <Button 
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-lato font-semibold px-6"
                >
                  Subscribe
                </Button>
              </form>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-playfair text-xl font-bold text-secondary mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="font-lato text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-playfair text-xl font-bold text-secondary mb-4">
                Get in Touch
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="font-lato text-muted-foreground text-sm">
                    hello@transformlife.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="font-lato text-muted-foreground text-sm">
                    +1 (555) 123-4567
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="font-lato text-muted-foreground text-sm">
                    Los Angeles, CA
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links & Copyright */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              
              {/* Social Icons */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="bg-background hover:bg-primary/10 p-3 rounded-full border border-border hover:border-primary/20 transition-all duration-300 text-muted-foreground hover:text-primary"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Copyright */}
              <div className="text-center md:text-right">
                <p className="font-lato text-muted-foreground text-sm">
                  © 2024 Transform Life. All rights reserved.
                </p>
                <p className="font-lato text-muted-foreground text-xs mt-1">
                  Privacy Policy • Terms of Service
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CoachingFooter;
