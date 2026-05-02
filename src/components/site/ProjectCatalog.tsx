import { useMemo, useState } from "react";
import { Project, projects } from "@/data/projects";
import { ProjectCard } from "@/components/site/ProjectCard";
import { ProjectDialog } from "@/components/site/ProjectDialog";

const filters = [
  { label: "All", value: "all" },
  { label: "Paid", value: "paid" },
  { label: "Free", value: "free" },
  { label: "Open Source", value: "open-source" },
  { label: "Coming Soon", value: "coming-soon" },
  { label: "In Progress", value: "in-progress" },
] as const;

type FilterValue = (typeof filters)[number]["value"];

export const ProjectCatalog = () => {
  const [active, setActive] = useState<Project | null>(null);
  const [filter, setFilter] = useState<FilterValue>("all");

  const filteredProjects = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((project) => project.status === filter);
  }, [filter]);

  return (
    <section id="projects" className="px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="font-mono text-4xl font-black text-white md:text-5xl">
            Projects & Printables
          </h2>
          <p className="mt-4 text-base leading-7 text-white/65">
            Browse digital downloads, free resources, and documented maker projects from the workshop.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {filters.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => setFilter(item.value)}
              className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wide transition ${
                filter === item.value
                  ? "border-fuchsia-500 bg-fuchsia-500 text-white"
                  : "border-white/10 text-white/60 hover:border-cyan-300 hover:text-cyan-300"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex gap-5 overflow-x-auto rounded-xl bg-white/[0.04] p-4 pb-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setActive} />
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-white/45">
          All products are digital downloads only. No physical items are shipped unless stated otherwise.
        </p>
      </div>

      <ProjectDialog project={active} onClose={() => setActive(null)} />
    </section>
  );
};
