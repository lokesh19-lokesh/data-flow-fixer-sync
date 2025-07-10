
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const CoachingNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#programs", label: "Programs" },
    { href: "#success-stories", label: "Success Stories" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      {/* Main Navigation - Fixed at Top */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="font-playfair text-2xl font-bold text-secondary">
              Transform Life
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-primary transition-colors font-lato font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="md:hidden pb-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-3 text-foreground hover:text-primary transition-colors font-lato"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Multi-colored Header Banner */}
      <div className="bg-gradient-to-r from-vibrant-teal to-vibrant-mint text-white py-3 px-4 mt-20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="font-lato text-sm md:text-base font-medium">
                Transform Your Life Live In-Person Events for 2025! Applications now open.
              </p>
            </div>
            <Button 
              size="sm"
              className="bg-vibrant-gold hover:bg-vibrant-gold/90 text-secondary font-lato font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              APPLY NOW
            </Button>
          </div>
        </div>
      </div>

      {/* Multi-colored Service Sections */}
      <div className="bg-gradient-to-r from-vibrant-pink via-vibrant-coral to-vibrant-rose text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <h3 className="font-playfair text-lg font-semibold mb-2">FIND A THERAPIST</h3>
              <Button 
                size="sm"
                className="bg-vibrant-teal hover:bg-vibrant-teal/90 text-white font-lato font-medium px-4 py-2 rounded-md"
              >
                BOOK A CONSULTATION
              </Button>
            </div>
            <div className="text-center">
              <h3 className="font-playfair text-lg font-semibold mb-2">START YOUR THERAPY CAREER</h3>
              <Button 
                size="sm"
                className="bg-vibrant-teal hover:bg-vibrant-teal/90 text-white font-lato font-medium px-4 py-2 rounded-md"
              >
                EXPLORE NOW
              </Button>
            </div>
            <div className="text-center">
              <h3 className="font-playfair text-lg font-semibold mb-2">FIND YOUR AUDIO AT THE STORE</h3>
              <Button 
                size="sm"
                className="bg-vibrant-teal hover:bg-vibrant-teal/90 text-white font-lato font-medium px-4 py-2 rounded-md"
              >
                EXPLORE NOW
              </Button>
            </div>
            <div className="text-center">
              <h3 className="font-playfair text-lg font-semibold mb-2">SEE LIVE SESSIONS</h3>
              <Button 
                size="sm"
                className="bg-vibrant-teal hover:bg-vibrant-teal/90 text-white font-lato font-medium px-4 py-2 rounded-md"
              >
                EXPLORE NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoachingNavigation;
