export const OpenResources = () => {
  return (
    <section id="open-source" className="px-5 py-24">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <img
            src="/projects/open-build-resources.jpg"
            alt="Open build resources"
            className="h-[360px] w-full object-cover"
          />
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-9">
          <h2 className="font-mono text-3xl font-black leading-tight text-white md:text-4xl">
            Open Build
            <br />
            Resources
          </h2>
          <p className="mt-8 text-sm leading-7 text-white/55">
            Some projects include free supporting files like PCB designs, firmware,
            Gerbers, assembly notes, and parts lists, so builders can understand the
            full process.
          </p>
          <a
            href="https://github.com/Alshochat"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-block text-sm font-bold text-fuchsia-400 underline-offset-4 hover:underline"
          >
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
