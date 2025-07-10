
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Star, Users, Zap } from "lucide-react";

const ProgramsSection = () => {
  const programs = [
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Rapid Transformation Program",
      description: "Breakthrough limiting beliefs and create lasting change in just 21 days with our intensive one-on-one program.",
      duration: "21 Days",
      type: "1-on-1 Intensive",
      bgColor: "bg-gradient-pink"
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Group Mastery Course",
      description: "Join a supportive community of like-minded individuals on a transformational journey together.",
      duration: "12 Weeks",
      type: "Group Program",
      bgColor: "bg-gradient-purple"
    },
    {
      icon: <Star className="w-8 h-8 text-white" />,
      title: "VIP Elite Coaching",
      description: "Exclusive high-level coaching with unlimited access and personalized strategies for extraordinary results.",
      duration: "6 Months",
      type: "VIP Access",
      bgColor: "bg-gradient-coral"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-secondary">
              Choose Your Transformation Path
            </h2>
            <p className="font-lato text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the perfect program to unlock your potential and create the life you've always dreamed of
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="border-0 hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className={`${program.bgColor} p-6 text-center`}>
                  <div className="flex justify-center mb-4">
                    {program.icon}
                  </div>
                  <div className="flex justify-center gap-4 text-sm text-white/90 font-lato font-medium">
                    <span>{program.duration}</span>
                    <span>•</span>
                    <span>{program.type}</span>
                  </div>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="font-playfair text-2xl text-secondary mb-2">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="font-lato text-muted-foreground mb-6 leading-relaxed">
                    {program.description}
                  </CardDescription>
                  <Button 
                    className={`w-full ${program.bgColor} hover:opacity-90 text-white font-lato font-semibold group-hover:shadow-lg transition-all duration-300 border-0`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
