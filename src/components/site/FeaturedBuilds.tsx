import { featuredProjects } from "@/data/projects";

export const FeaturedBuilds = () => {
  return (
    <section id="featured" className="px-5 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 font-mono text-5xl font-black tracking-tight text-white/75 md:text-6xl">
          Featured Builds
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <article key={project.id} className="group">
              <div className="overflow-hidden border border-white/10 bg-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-3 flex items-start justify-between gap-4">
                <h3 className="font-mono text-xl font-black text-white/80">
                  {String(index + 1).padStart(2, "0")} {project.title}
                </h3>
                <span className="font-mono text-xl font-black text-white/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-white/55">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
