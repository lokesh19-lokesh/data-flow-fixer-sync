
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const InteriorContact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      content: "123 Design Street, Creative District, NY 10001"
    },
    {
      icon: Phone,
      title: "Phone Number",
      content: "+1 (555) 123-4567"
    },
    {
      icon: Mail,
      title: "Email Address",
      content: "hello@interiorstudio.com"
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon - Fri: 9AM - 6PM"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-secondary">
            Get In Touch
          </h2>
          <p className="font-lato text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your space? Contact us today for a consultation and let's bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="font-playfair text-2xl">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Your last name" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="Your phone number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="project">Project Type</Label>
                <Input id="project" placeholder="e.g., Living Room, Full Home, Office" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project and vision..."
                  className="min-h-[120px]"
                />
              </div>
              <Button className="w-full" size="lg">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-2xl font-bold mb-6 text-secondary">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-playfair font-semibold text-secondary mb-1">
                        {info.title}
                      </h4>
                      <p className="font-lato text-muted-foreground">
                        {info.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-primary text-white">
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-bold mb-4">
                  Free Consultation
                </h3>
                <p className="font-lato mb-4">
                  Book a free 30-minute consultation to discuss your project and get expert advice.
                </p>
                <Button variant="secondary" className="w-full">
                  Schedule Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteriorContact;
