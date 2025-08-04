import { skills } from "@/data/portfolio-data";
import { SkillBar } from "@/components/ui/skill-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiNextdotjs, 
  SiDocker, 
  SiGit
} from "react-icons/si";
import { Database, Cloud } from "lucide-react";

const iconMap = {
  react: SiReact,
  typescript: SiTypescript,
  nodejs: SiNodedotjs,
  nextjs: SiNextdotjs,
  docker: SiDocker,
  git: SiGit,
  database: Database,
  cloud: Cloud,
};

const colorMap = {
  blue: "text-blue-500",
  green: "text-green-500",
  orange: "text-orange-500",
  gray: "text-gray-600 dark:text-gray-400",
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Frontend Skills */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="text-center">Frontend Technologies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {skills.frontend.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={index * 0.1} />
              ))}
            </CardContent>
          </Card>

          {/* Backend & Tools */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="text-center">Backend & Tools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {skills.backend.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={index * 0.1 + 0.3} />
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Technology Icons */}
        <Card className="hover-lift">
          <CardHeader>
            <CardTitle className="text-center">Technologies I Work With</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
              {skills.technologies.map((tech, index) => {
                const IconComponent = iconMap[tech.icon as keyof typeof iconMap] || Database;
                const colorClass = colorMap[tech.color as keyof typeof colorMap] || "text-gray-500";
                
                return (
                  <div key={tech.name} className="text-center group">
                    <div className="tech-icon mb-2 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className={`w-8 h-8 ${colorClass}`} />
                    </div>
                    <span className="text-sm text-muted-foreground">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
