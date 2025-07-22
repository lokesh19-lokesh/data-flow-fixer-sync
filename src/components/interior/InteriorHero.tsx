
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const InteriorHero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=1200&h=800&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6">
          Transform Your
          <span className="text-primary block">Living Space</span>
        </h1>
        <p className="font-lato text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Creating beautiful, functional interiors that reflect your personality and enhance your lifestyle
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={() => scrollToSection("#portfolio")}
            className="bg-primary hover:bg-primary/90"
          >
            View Portfolio
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={() => scrollToSection("#contact")}
            className="border-white text-white hover:bg-white hover:text-black"
          >
            Get Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InteriorHero;
