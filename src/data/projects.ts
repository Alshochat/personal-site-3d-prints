export type ProjectStatus =
  | "paid"
  | "free"
  | "coming-soon"
  | "open-source"
  | "in-progress";

export type ProjectCategory =
  | "controller"
  | "keyboard"
  | "home"
  | "games"
  | "electronics"
  | "prototype";

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  gallery?: string[];
  category: ProjectCategory;
  status: ProjectStatus;
  statusLabel: string;
  price?: string;
  buttonLabel: string;
  tags: string[];
  filesIncluded?: string[];
  separatePartsNote?: string;
  buyUrl?: string;
  githubUrl?: string;
  docsUrl?: string;
};

export const projects: Project[] = [
  {
    id: "clone-hero-guitar-controller",
    title: "Clone Hero Guitar Controller",
    subtitle: "STL files for a custom rhythm game controller.",
    description:
      "A custom guitar-style rhythm game controller built with 3D printing, electronics, PCB design, firmware, and hands-on assembly.",
    longDescription:
      "A complete STL file set for 3D printing a custom guitar-style controller for Clone Hero. This is a digital download only. No physical controller is included. PCB files, firmware, Gerbers, assembly notes, and a parts list are available for free on GitHub.",
    image: "/projects/clone-hero-controller.jpg",
    category: "controller",
    status: "paid",
    statusLabel: "$30",
    price: "$30",
    buttonLabel: "Buy STL",
    tags: ["STL", "Electronics", "Open Source", "Controller"],
    filesIncluded: ["STL files for 3D printing", "README.txt", "LICENSE.txt"],
    separatePartsNote:
      "Electronics, hardware, PCB, and other purchased parts are listed in the free assembly documentation with relevant links.",
    buyUrl: "https://cults3d.com/",
    githubUrl:
      "https://github.com/Alshochat/Cloneshochat--Clone-Hero-Controller",
  },
  {
    id: "custom-mechanical-keyboard",
    title: "Custom Mechanical Keyboard",
    subtitle: "A documented custom keyboard build.",
    description:
      "A custom keyboard build focused on layout, enclosure design, switches, electronics, and clean documentation.",
    longDescription:
      "A custom mechanical keyboard project that explores layout, enclosure design, switches, electronics, assembly, and documentation.",
    image: "/projects/custom-keyboard.jpg",
    category: "keyboard",
    status: "coming-soon",
    statusLabel: "COMING SOON",
    buttonLabel: "Preview",
    tags: ["Keyboard", "CAD", "Electronics"],
  },
  {
    id: "bottle-opener-coasters",
    title: "Bottle Opener Coasters",
    subtitle: "Printable coasters with an integrated bottle opener.",
    description:
      "Printable drink coasters with an integrated bottle opener, designed as a useful everyday object with a maker twist.",
    longDescription:
      "A practical 3D printable home object that combines drink coasters with a built-in bottle opener concept.",
    image: "/projects/bottle-opener-coasters.jpg",
    category: "home",
    status: "free",
    statusLabel: "FREE",
    buttonLabel: "Download",
    tags: ["STL", "Home", "Utility"],
  },
  {
    id: "magnetic-fridge-chess",
    title: "Magnetic Fridge Chess",
    subtitle: "A magnetic chess board for the fridge.",
    description:
      "A magnetic chess board designed for the fridge, turning a kitchen surface into a playful ongoing game.",
    longDescription:
      "A playful home project that uses magnets and printable pieces to turn a fridge into a shared chess board.",
    image: "/projects/magnetic-fridge-chess.jpg",
    category: "games",
    status: "in-progress",
    statusLabel: "IN PROGRESS",
    buttonLabel: "Preview",
    tags: ["Games", "Magnets", "3D Printing"],
  },
  {
    id: "pcb-electronics-experiments",
    title: "PCB & Electronics Experiments",
    subtitle: "Small hardware experiments and test builds.",
    description:
      "Small hardware experiments involving PCB design, components, testing, and practical assembly constraints.",
    longDescription:
      "A collection of electronics experiments and prototypes focused on learning, testing, and making small hardware ideas real.",
    image: "/projects/pcb-experiments.jpg",
    category: "electronics",
    status: "open-source",
    statusLabel: "OPEN SOURCE",
    buttonLabel: "View GitHub",
    tags: ["PCB", "Firmware", "Testing"],
    githubUrl: "https://github.com/Alshochat",
  },
  {
    id: "workshop-prototypes",
    title: "Workshop Prototypes",
    subtitle: "Ideas, tests, and one-off builds.",
    description:
      "Ideas, tests, and one-off builds that explore useful objects, mechanisms, and printable forms.",
    longDescription:
      "A place for unfinished ideas, one-off prototypes, design tests, and workshop experiments that may become polished projects later.",
    image: "/projects/workshop-prototypes.jpg",
    category: "prototype",
    status: "in-progress",
    statusLabel: "IN PROGRESS",
    buttonLabel: "View Project",
    tags: ["Prototype", "Workshop", "Experiments"],
  },
];

export const featuredProjects = projects.slice(0, 6);
