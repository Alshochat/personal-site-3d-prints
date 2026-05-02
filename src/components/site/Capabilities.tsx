const capabilities = [
  {
    title: "CAD & 3D Design",
    text: "Designing printable parts, enclosures, mechanisms, and objects that can be built in the real world.",
  },
  {
    title: "Electronics & PCB",
    text: "Working with circuits, PCB files, Gerbers, components, and practical assembly constraints.",
  },
  {
    title: "Firmware & Prototyping",
    text: "Turning hardware into working devices through testing, iteration, and hands-on debugging.",
  },
  {
    title: "Documentation",
    text: "Writing instructions, organizing files, and making projects understandable for other builders.",
  },
];

export const Capabilities = () => {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-fuchsia-400">
            How I Build
          </div>
          <h2 className="font-mono text-4xl font-black leading-tight text-white md:text-6xl">
            Not just files.
            <br />
            Complete builds.
          </h2>
          <p className="mt-6 text-base leading-8 text-white/60">
            Some projects are simple print-ready objects. Others combine CAD, 3D printing,
            electronics, PCB design, firmware, testing, documentation, and product thinking.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-300/50 hover:bg-cyan-300/[0.04]"
            >
              <h3 className="font-mono text-xl font-black text-cyan-200">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/55">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
