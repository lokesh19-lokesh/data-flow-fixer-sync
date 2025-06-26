
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering (CGTA)",
      institution: "College Name",
      period: "Aug 2021 - Apr 2025",
      gpa: "8.0",
      location: "India"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Institution Name",
      period: "Jun 2019 - Mar 2021",
      gpa: "86.5",
      location: "India"
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <CardTitle className="text-xl">{edu.degree}</CardTitle>
                        <CardDescription className="text-lg font-medium text-foreground">
                          {edu.institution}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      <Badge variant="secondary" className="w-fit">
                        <Calendar className="w-3 h-3 mr-1" />
                        {edu.period}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">GPA/Percentage:</span>
                    <Badge variant="outline">{edu.gpa}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
