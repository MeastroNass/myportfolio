import { About } from "@/components/sections/About";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { Nav } from "@/components/sections/Nav";
import { Pricing } from "@/components/sections/Pricing";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { VisualStories } from "@/components/sections/VisualStories";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LogoMarquee />
        <Projects />
        <Services />
        <About />
        <VisualStories />
        <Process />
        <Testimonials />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
