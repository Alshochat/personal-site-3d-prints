import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { FeaturedBuilds } from "@/components/site/FeaturedBuilds";
import { Capabilities } from "@/components/site/Capabilities";
import { ProjectCatalog } from "@/components/site/ProjectCatalog";
import { OpenResources } from "@/components/site/OpenResources";
import { AboutMaker } from "@/components/site/AboutMaker";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0b0c10] text-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedBuilds />
        <Capabilities />
        <ProjectCatalog />
        <OpenResources />
        <AboutMaker />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
