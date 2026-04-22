import type { Project } from "@/lib/types";
import StreamingIcons from "./StreamingIcons";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col">
      <div className="relative w-full aspect-square bg-neutral-100 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={`${project.title} artwork`}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="mt-5 text-sm leading-relaxed text-ink">
        {project.description}
      </p>
      <StreamingIcons links={project.links} className="mt-4" />
    </article>
  );
}
