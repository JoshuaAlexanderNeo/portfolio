import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { ResponsiveNavBar } from "@/components/ResponsiveNavbar";

export default function Home() {
  return (
       <div>
        <ResponsiveNavBar />
        <Hero />
          <div className='bg-gradient-to-b from-white to-blue-50 -z-30 dark:from-slate-900 dark:to-neutral-900 min-h-screen pt-20'>
          <About/>
          <Experience />
          <Projects />
          <Contact />
          <Footer />
      </div>
    </div>
  );
}
