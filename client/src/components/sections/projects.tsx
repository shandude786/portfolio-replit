import { projects } from "@/data/portfolio-data";
import { ProjectCard } from "@/components/ui/project-card";

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 scroll-animate">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto scroll-animate">
            Showcasing my expertise in building scalable web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className="scroll-animate" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
