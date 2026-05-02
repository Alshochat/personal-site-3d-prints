export const AboutMaker = () => {
  return (
    <section id="about" className="px-5 py-20">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center md:p-12">
        <div className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">
          About
        </div>
        <h2 className="font-mono text-3xl font-black leading-tight text-white md:text-5xl">
          Built by a maker who likes turning ideas into objects.
        </h2>
        <p className="mt-7 text-base leading-8 text-white/60">
          Alshochat 3D is my workshop for practical, playful, and sometimes unusual
          projects. I design and build with 3D printing, CAD, electronics, PCB design,
          firmware, and hands-on prototyping.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/Alshochat"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-fuchsia-500 px-8 py-3 text-sm font-bold text-white transition hover:bg-fuchsia-400"
          >
            View GitHub
          </a>
          <a
            href="mailto:alshochat.assaf@gmail.com"
            className="rounded-full border border-white/15 px-8 py-3 text-sm font-bold text-white/80 transition hover:border-cyan-300 hover:text-cyan-300"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};
