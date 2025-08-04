import { workExperience } from "@/data/portfolio-data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Users, Briefcase, TrendingUp } from "lucide-react";

const iconMap = {
  code: Code,
  users: Users,
  react: Code,
  "chart-line": TrendingUp,
};

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </div>

        <div className="timeline">
          {workExperience.map((experience, index) => {
            const IconComponent = iconMap[experience.icon as keyof typeof iconMap] || Briefcase;
            
            return (
              <div key={experience.id} className="timeline-item">
                <Card className="timeline-content">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold mb-1">{experience.title}</h3>
                        <p className="text-primary font-medium">{experience.company}, {experience.location}</p>
                        <p className="text-sm text-muted-foreground font-mono">{experience.period}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-3 text-sm">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {experience.achievements.slice(0, 3).map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start text-sm text-muted-foreground">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
