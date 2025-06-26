
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "C", "SQL", "Python", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "Web Technologies",
      skills: ["React.js", "Node.js", "MongoDB", "WebSocket", "REST APIs"]
    },
    {
      title: "Development Tools",
      skills: ["React.js", "Node.js", "MongoDB", "Windows"]
    },
    {
      title: "Cloud Platforms",
      skills: ["AWS Lambda", "API Gateway", "DynamoDB", "Amplify", "S3"]
    },
    {
      title: "Other Skills",
      skills: ["UIPath", "Power BI", "Figma", "GITK", "PostgreSQL", "MS Office"]
    },
    {
      title: "Certifications",
      skills: [
        "AWS Certified Cloud Practitioner (06/2023 - 06/2027)",
        "Associate Cloud Engineer Certification (09/2023 - 09/2027)",
        "Red Hat Certified Enterprise Application Developer (06/2023 - 06/2026)"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge 
                        key={i} 
                        variant={category.title === "Certifications" ? "default" : "secondary"}
                        className={category.title === "Certifications" ? "text-xs" : ""}
                      >
                        {skill}
                      </Badge>
                    ))}
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

export default Skills;
