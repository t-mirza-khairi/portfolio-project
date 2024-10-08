import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import { navItems } from "@/components/data";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10">
      <div className="max-w-7xl w-full overflow-clip">
        <FloatingNav
          navItems={navItems}
        />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients /> 
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
