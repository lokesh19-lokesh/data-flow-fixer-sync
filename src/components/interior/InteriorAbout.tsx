
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const InteriorAbout = () => {
  const achievements = [
    "10+ Years of Experience",
    "200+ Projects Completed",
    "Award-Winning Designs",
    "Certified Interior Designers"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-secondary">
              About Our Studio
            </h2>
            <p className="font-lato text-lg text-muted-foreground mb-6">
              We are a team of passionate interior designers dedicated to creating spaces that 
              tell your story. With over a decade of experience in residential and commercial 
              design, we bring creativity, functionality, and attention to detail to every project.
            </p>
            <p className="font-lato text-lg text-muted-foreground mb-8">
              Our approach combines modern design principles with timeless elegance, ensuring 
              your space not only looks beautiful but also serves your lifestyle perfectly.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-lato text-sm">{achievement}</span>
                </div>
              ))}
            </div>

            <Button size="lg">
              Learn More About Us
            </Button>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=700&fit=crop"
              alt="Interior Design Studio"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg">
              <h3 className="font-playfair text-2xl font-bold">200+</h3>
              <p className="font-lato text-sm">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteriorAbout;
