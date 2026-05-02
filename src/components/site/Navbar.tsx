const navItems = [
  { label: "HOME", href: "#home" },
  { label: "GITHUB", href: "https://github.com/Alshochat" },
  { label: "PRINTABLES", href: "#projects" },
  { label: "CULTS3D", href: "https://cults3d.com/" },
  { label: "BLOG", href: "#about" },
  { label: "CONTACT", href: "mailto:alshochat.assaf@gmail.com" },
];

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0b0c10]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
        <a href="#home" className="flex items-center gap-2 text-xs font-semibold tracking-wide">
          <span className="grid h-5 w-5 place-items-center rounded-full bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-violet-600 text-[10px]">
            A
          </span>
          <span>Alshochat 3D</span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[11px] font-semibold tracking-[0.16em] text-white/80 transition hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#projects"
          className="rounded-full border border-fuchsia-500/70 px-6 py-2 text-[11px] font-semibold text-fuchsia-300 transition hover:bg-fuchsia-500 hover:text-white"
        >
          Shop Designs
        </a>
      </nav>
    </header>
  );
};
