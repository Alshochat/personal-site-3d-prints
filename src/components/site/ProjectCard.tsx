import { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  onOpen: (project: Project) => void;
};

const statusClasses: Record<Project["status"], string> = {
  paid: "bg-fuchsia-500 text-white",
  free: "bg-cyan-300 text-black",
  "coming-soon": "bg-white/10 text-white",
  "open-source": "bg-emerald-300 text-black",
  "in-progress": "bg-violet-400 text-white",
};

export const ProjectCard = ({ project, onOpen }: ProjectCardProps) => {
  return (
    <article className="group min-w-[210px] overflow-hidden rounded-xl bg-[#17181d]">
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="block w-full text-left"
      >
        <div className="aspect-square overflow-hidden bg-white">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="space-y-3 p-4">
          <div className="flex items-center justify-between gap-3">
            <span className="text-[11px] font-bold text-fuchsia-400">
              {project.statusLabel}
            </span>
            <span
              className={`rounded-full px-3 py-1 text-[10px] font-black uppercase ${statusClasses[project.status]}`}
            >
              {project.buttonLabel}
            </span>
          </div>

          <h3 className="line-clamp-2 text-sm font-bold text-white">
            {project.title}
          </h3>

          <p className="line-clamp-2 text-xs leading-5 text-white/50">
            {project.subtitle}
          </p>

          <div className="flex flex-wrap gap-1">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-2 py-1 text-[10px] text-white/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </button>
    </article>
  );
};
