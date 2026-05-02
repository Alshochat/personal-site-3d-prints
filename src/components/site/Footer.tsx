export const Footer = () => {
  return (
    <footer className="px-5 pt-20 pb-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <a href="#home" className="flex items-center gap-2 text-xs font-semibold">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-violet-600 text-[10px]">
              A
            </span>
            <span>Alshochat 3D</span>
          </a>

          <a
            href="mailto:alshochat.assaf@gmail.com"
            className="text-xs uppercase tracking-[0.16em] text-white/55 hover:text-cyan-300"
          >
            alshochat.assaf@gmail.com
          </a>

          <div className="flex items-center gap-4 text-xs text-white/55">
            <a href="https://github.com/Alshochat" target="_blank" rel="noreferrer" className="hover:text-cyan-300">
              GitHub
            </a>
            <a href="https://cults3d.com/" target="_blank" rel="noreferrer" className="hover:text-cyan-300">
              Cults3D
            </a>
            <a href="#projects" className="hover:text-cyan-300">
              Printables
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-cyan-300/25 pt-8 text-center">
          <p className="text-[11px] uppercase tracking-[0.14em] text-white/45">
            Digital downloads only. No physical products are shipped unless stated otherwise.
          </p>
          <p className="mt-5 text-[11px] uppercase tracking-[0.14em] text-white/35">
            © 2026 Alshochat 3D. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
