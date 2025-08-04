import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  image: string;
  category: string;
  status: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="project-card hover-lift">
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} Interface`}
          className="project-image w-full h-48 object-cover"
        />
      </div>

      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <Badge variant="secondary" className="text-xs">
            {project.category}
          </Badge>
          <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'} className="text-xs">
            {project.status}
          </Badge>
        </div>

        <h3 className="text-xl font-bold mb-3">{project.title}</h3>

        <p className="text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="mb-4">
          <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {project.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex space-x-3">
          <Button size="sm" className="flex-1 btn-primary">
            <ExternalLink className="mr-2 h-4 w-4" />
            View Project
          </Button>
          <Button size="sm" variant="outline">
            <Github className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
