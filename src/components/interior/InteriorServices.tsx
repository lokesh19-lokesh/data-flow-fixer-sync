
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Palette, Layout, Lightbulb, Sofa, TreePine } from "lucide-react";

const InteriorServices = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Design",
      description: "Complete home makeovers from concept to completion, tailored to your lifestyle and preferences."
    },
    {
      icon: Layout,
      title: "Space Planning",
      description: "Optimize your space with intelligent layouts that maximize functionality and flow."
    },
    {
      icon: Palette,
      title: "Color Consultation",
      description: "Expert color schemes that create the perfect mood and atmosphere for every room."
    },
    {
      icon: Lightbulb,
      title: "Lighting Design",
      description: "Strategic lighting solutions that enhance ambiance and highlight your space's best features."
    },
    {
      icon: Sofa,
      title: "Furniture Selection",
      description: "Curated furniture pieces that blend style, comfort, and functionality perfectly."
    },
    {
      icon: TreePine,
      title: "Sustainable Design",
      description: "Eco-friendly design solutions using sustainable materials and energy-efficient elements."
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-secondary">
            Our Services
          </h2>
          <p className="font-lato text-lg text-muted-foreground max-w-2xl mx-auto">
            From concept to completion, we offer comprehensive interior design services 
            to transform your space into a beautiful, functional environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-playfair text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-lato text-center text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteriorServices;
