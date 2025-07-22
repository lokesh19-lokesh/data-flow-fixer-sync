
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const InteriorTestimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content: "The team transformed our house into a dream home. Their attention to detail and creative vision exceeded all our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      content: "Professional, creative, and efficient. They redesigned our office space and it's now a place where productivity and creativity flourish.",
      rating: 5
    },
    {
      name: "Emma Williams",
      role: "Homeowner",
      content: "From the initial consultation to the final reveal, the process was seamless. We couldn't be happier with our new living space.",
      rating: 5
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-secondary">
            What Our Clients Say
          </h2>
          <p className="font-lato text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="font-lato text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="font-playfair font-bold text-secondary">{testimonial.name}</h4>
                  <p className="font-lato text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteriorTestimonials;
