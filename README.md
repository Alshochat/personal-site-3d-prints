# Alshochat site files

These files turn the Wix visual direction into React + TypeScript + Tailwind components.

## Where to put files

Copy the folders into your project:

```txt
src/
  pages/
    Index.tsx
  components/
    site/
      Navbar.tsx
      Hero.tsx
      FeaturedBuilds.tsx
      Capabilities.tsx
      ProjectCatalog.tsx
      ProjectCard.tsx
      ProjectDialog.tsx
      OpenResources.tsx
      AboutMaker.tsx
      Footer.tsx
  data/
    projects.ts
public/
  hero/
    hero-build.jpg
  projects/
    clone-hero-controller.jpg
    custom-keyboard.jpg
    bottle-opener-coasters.jpg
    magnetic-fridge-chess.jpg
    pcb-experiments.jpg
    workshop-prototypes.jpg
    open-build-resources.jpg
```

## Important

Replace all image placeholders with real project photos.

Update these links in `src/data/projects.ts`:
- `buyUrl`
- `githubUrl`
- `docsUrl`

The catalog supports:
- `$30`
- `FREE`
- `COMING SOON`
- `OPEN SOURCE`
- `IN PROGRESS`
