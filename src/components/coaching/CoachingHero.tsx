
import { Button } from "@/components/ui/button";

const CoachingHero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative bg-gradient-rainbow"
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 text-white animate-fade-in-up">
            Transform Your Life with Proven Therapy Techniques
          </h1>
          <p className="font-lato text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
            Unlock your potential and create lasting change through personalized coaching and transformative therapy methods.
          </p>
          <div className="animate-fade-in-up animate-delay-400">
            <Button 
              onClick={scrollToContact} 
              size="lg"
              className="bg-white hover:bg-white/90 text-vibrant-purple font-lato font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachingHero;
