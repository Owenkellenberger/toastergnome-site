import projects from "@/content/projects.json";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/lib/types";

export default function HomePage() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
        {(projects as Project[]).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
