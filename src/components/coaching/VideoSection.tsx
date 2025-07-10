
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-secondary">
            See the Transformation
          </h2>
          <p className="font-lato text-xl text-muted-foreground mb-12">
            Watch how our proven techniques have helped thousands transform their lives
          </p>
          
          <div className="relative bg-gradient-to-br from-accent/20 to-muted/30 rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Play className="w-8 h-8 ml-1" />
              </Button>
            </div>
            <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
          </div>
          
          <p className="font-lato text-muted-foreground mt-6 italic">
            "This approach changed everything for me. I finally found the confidence I was looking for."
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
