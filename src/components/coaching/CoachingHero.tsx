
import { Button } from "@/components/ui/button";

const CoachingHero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-accent/20 to-muted/30"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(250,240,245,0.8) 100%), url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 text-secondary animate-fade-in-up">
            Transform Your Life with Proven Therapy Techniques
          </h1>
          <p className="font-lato text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
            Unlock your potential and create lasting change through personalized coaching and transformative therapy methods.
          </p>
          <div className="animate-fade-in-up animate-delay-400">
            <Button 
              onClick={scrollToContact} 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-lato font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
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
