import V1Layout from '@/components/v1/layout';
import Hero from '@/components/v1/sections/hero';
import About from '@/components/v1/sections/about';
import Experience from '@/components/v1/sections/experience';
import Project from '@/components/v1/sections/project';
import Contact from '@/components/v1/sections/contact';

export default function V1Page() {
  return (
    <V1Layout>
      <main>
        <Hero />
        <About />
        <Experience />
        <Project />
        <Contact />
      </main>
    </V1Layout>
  );
}
