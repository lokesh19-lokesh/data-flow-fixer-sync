
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Building End-to-End Web Applications Using AWS Serverless Architecture",
      description: "Developed end-to-end applications using AWS Lambda, API Gateway, DynamoDB, Amplify, S3.",
      technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "Amplify", "S3"],
      github: "#",
      demo: "#"
    },
    {
      title: "Food & Hospitality Solutions",
      description: "Developed a MERN-stack web application for restaurant management. Tech stack: HTML, CSS, React.js, Node.js, MongoDB, WebSocket.",
      technologies: ["React.js", "Node.js", "MongoDB", "WebSocket", "HTML", "CSS"],
      github: "#",
      demo: "#"
    },
    {
      title: "Scale E-Commerce Website for Eagle Spy Vision",
      description: "Tech stack: HTML, CSS, JavaScript",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "#",
      demo: "#"
    },
    {
      title: "TrailBlazerz Student Club - Team Lead",
      description: "Led solutions learning and exploration through projects and workshops.",
      technologies: ["Leadership", "Project Management", "Team Coordination"],
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
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

export default Projects;
