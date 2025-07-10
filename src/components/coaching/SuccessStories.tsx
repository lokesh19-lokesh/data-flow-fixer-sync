
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const SuccessStories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Executive & Mother",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "This program completely transformed my relationship with myself and my career. I finally found the confidence to pursue my dreams and create the balance I always wanted.",
      result: "Promoted to VP within 6 months"
    },
    {
      name: "Michael Chen",
      role: "Entrepreneur",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "The breakthrough I experienced was incredible. Years of self-doubt melted away, and I launched my dream business with unshakeable confidence.",
      result: "Built 7-figure business in 1 year"
    },
    {
      name: "Emma Rodriguez",
      role: "Artist & Creative",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "I overcame decades of creative blocks and limiting beliefs. Now I'm living my passion and inspiring others through my art every single day.",
      result: "Featured in international galleries"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="success-stories" className="py-20 bg-gradient-to-br from-accent/10 to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-secondary">
              Success Stories
            </h2>
            <p className="font-lato text-xl text-muted-foreground">
              Real transformations from real people
            </p>
          </div>

          <div className="relative">
            <div className="bg-background rounded-2xl shadow-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                  <Quote className="w-12 h-12 text-primary mb-6 mx-auto md:mx-0" />
                  <blockquote className="font-lato text-xl text-foreground mb-6 leading-relaxed italic">
                    "{testimonials[currentSlide].quote}"
                  </blockquote>
                  <div className="mb-4">
                    <h4 className="font-playfair text-2xl font-bold text-secondary">
                      {testimonials[currentSlide].name}
                    </h4>
                    <p className="font-lato text-muted-foreground">
                      {testimonials[currentSlide].role}
                    </p>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-4 inline-block">
                    <p className="font-lato text-sm font-semibold text-primary">
                      Result: {testimonials[currentSlide].result}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative">
                    <img
                      src={testimonials[currentSlide].image}
                      alt={testimonials[currentSlide].name}
                      className="w-80 h-80 rounded-2xl object-cover shadow-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                onClick={prevSlide}
                variant="outline"
                size="icon"
                className="rounded-full border-primary/20 hover:bg-primary/10"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-primary' : 'bg-primary/20'
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={nextSlide}
                variant="outline"
                size="icon"
                className="rounded-full border-primary/20 hover:bg-primary/10"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
