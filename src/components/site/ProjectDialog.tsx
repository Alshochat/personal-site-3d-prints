import { Project } from "@/data/projects";

type ProjectDialogProps = {
  project: Project | null;
  onClose: () => void;
};

const getActionUrl = (project: Project) => {
  return project.buyUrl || project.githubUrl || project.docsUrl || "#projects";
};

export const ProjectDialog = ({ project, onClose }: ProjectDialogProps) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-5 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-[#111217] shadow-2xl">
        <div className="grid md:grid-cols-[0.95fr_1.05fr]">
          <div className="bg-white">
            <img
              src={project.image}
              alt={project.title}
              className="h-full min-h-[320px] w-full object-cover"
            />
          </div>

          <div className="p-7 md:p-9">
            <div className="mb-4 flex items-center justify-between gap-4">
              <span className="rounded-full bg-fuchsia-500 px-4 py-1 text-xs font-black uppercase text-white">
                {project.statusLabel}
              </span>
              <button
                type="button"
                onClick={onClose}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/70 transition hover:border-white/30 hover:text-white"
                aria-label="Close dialog"
              >
                ×
              </button>
            </div>

            <h2 className="font-mono text-3xl font-black leading-tight text-white md:text-4xl">
              {project.title}
            </h2>

            <p className="mt-4 text-base leading-8 text-white/65">
              {project.longDescription}
            </p>

            {project.filesIncluded?.length ? (
              <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="font-mono text-lg font-black text-cyan-200">
                  Included
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-white/60">
                  {project.filesIncluded.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {project.separatePartsNote ? (
              <p className="mt-5 rounded-2xl border border-cyan-300/20 bg-cyan-300/5 p-4 text-sm leading-6 text-cyan-100/75">
                {project.separatePartsNote}
              </p>
            ) : null}

            <div className="mt-7 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/55"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={getActionUrl(project)}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-fuchsia-500 px-7 py-3 text-sm font-bold text-white transition hover:bg-fuchsia-400"
              >
                {project.buttonLabel}
              </a>

              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 px-7 py-3 text-sm font-bold text-white/80 transition hover:border-cyan-300 hover:text-cyan-300"
                >
                  GitHub
                </a>
              ) : null}

              {project.docsUrl ? (
                <a
                  href={project.docsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 px-7 py-3 text-sm font-bold text-white/80 transition hover:border-cyan-300 hover:text-cyan-300"
                >
                  Docs
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
