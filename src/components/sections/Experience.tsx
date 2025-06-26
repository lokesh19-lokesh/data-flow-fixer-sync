
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "The Patterns Company",
      location: "Phoenix, AZ",
      period: "May 2023 - Present",
      description: [
        "Contributing to the development of internal software tools and web applications",
        "Working on Java, React.js, SQL, and MongoDB to build scalable backend and frontend modules"
      ]
    },
    {
      title: "Full Stack Developer Intern",
      company: "IndiaMeta EdTech",
      location: "Remote",
      period: "Mar 2023 - Apr 2023",
      description: [
        "Developed a fully functional EdTech platform using the MERN stack",
        "Integrated payment gateway, authentication system, and content management system using REST APIs"
      ]
    },
    {
      title: "AWS/Azure Intern",
      company: "V Cube Software Solutions",
      location: "Remote",
      period: "Jan 2023 - Feb 2023",
      description: [
        "Gained hands-on experience working with AWS and Microsoft Azure platforms",
        "Assisted in cloud deployment, automation, and monitoring"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Work Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-foreground">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1">
                      <Badge variant="secondary" className="w-fit">
                        <Calendar className="w-3 h-3 mr-1" />
                        {exp.period}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
