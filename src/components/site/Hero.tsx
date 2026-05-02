export const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden px-5 pt-20 pb-24">
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute right-1/4 top-44 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        <div className="mb-16 w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl shadow-fuchsia-500/10">
          <img
            src="/hero/hero-build.jpg"
            alt="Featured maker project"
            className="h-[260px] w-full object-cover"
          />
        </div>

        <h1 className="font-mono text-5xl font-black uppercase leading-[0.95] tracking-tight text-cyan-300 md:text-7xl">
          Useful, weird,
          <br />
          and buildable.
        </h1>

        <p className="mt-10 max-w-4xl font-mono text-lg uppercase leading-relaxed tracking-[0.28em] text-cyan-100/90 md:text-xl">
          A growing collection of 3D printable files, DIY hardware builds, and maker
          experiments, designed to be built, modified, and made real.
        </p>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-fuchsia-500 px-12 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:bg-fuchsia-400"
          >
            Browse Projects
          </a>
          <a
            href="https://github.com/Alshochat"
            className="rounded-full border border-white/15 px-12 py-3 text-sm font-semibold text-white/90 transition hover:border-cyan-300 hover:text-cyan-300"
          >
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
