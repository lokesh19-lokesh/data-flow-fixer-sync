
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
          <Card>
            <CardHeader>
              <CardTitle>Career Objective</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I am excited to start my career using my knowledge and skills to solve real-world problems. 
                With a strong background in computing science and a willingness to learn, I am committed to 
                contributing to innovative technology solutions and making a meaningful impact in the industry.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h3 className="font-semibold mb-2">Education</h3>
                  <p className="text-sm text-muted-foreground">
                    Currently pursuing B.Tech in Computer Science and Engineering at CGTA
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Interests</h3>
                  <p className="text-sm text-muted-foreground">
                    Full-stack development, cloud technologies, and building scalable applications
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
