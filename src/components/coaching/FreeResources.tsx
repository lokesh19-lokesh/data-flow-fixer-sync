
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, PlayCircle, FileText } from "lucide-react";

const FreeResources = () => {
  const resources = [
    {
      icon: <Download className="w-6 h-6 text-primary" />,
      title: "Free Transformation Guide",
      description: "Download our comprehensive 30-page guide to start your transformation journey today",
      cta: "Download Free Guide",
      type: "PDF Guide"
    },
    {
      icon: <PlayCircle className="w-6 h-6 text-primary" />,
      title: "Confidence Masterclass",
      description: "Watch this exclusive 45-minute masterclass on building unshakeable confidence",
      cta: "Watch Free Video",
      type: "Video Training"
    },
    {
      icon: <FileText className="w-6 h-6 text-primary" />,
      title: "Life Assessment Quiz",
      description: "Discover your transformation potential with our personalized assessment quiz",
      cta: "Take Free Quiz",
      type: "Interactive Quiz"
    }
  ];

  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Start Your Transformation Today
            </h2>
            <p className="font-lato text-xl opacity-90 max-w-2xl mx-auto">
              Get instant access to powerful resources that will kickstart your journey to a transformed life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="bg-background text-foreground border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                      {resource.icon}
                    </div>
                  </div>
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-lato font-medium mb-4 inline-block">
                    {resource.type}
                  </div>
                  <CardTitle className="font-playfair text-xl text-secondary mb-2">
                    {resource.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="font-lato text-muted-foreground mb-6 leading-relaxed">
                    {resource.description}
                  </CardDescription>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-lato font-semibold group-hover:shadow-lg transition-all duration-300"
                  >
                    {resource.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="font-lato text-lg opacity-90 mb-6">
              Ready for deeper transformation?
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-lato font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book Your Free Discovery Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeResources;
