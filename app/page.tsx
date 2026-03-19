import V2Layout from '@/components/v2/layout';
import V2Hero from '@/components/v2/sections/hero';
import V2About from '@/components/v2/sections/about';
import V2Experience from '@/components/v2/sections/experience';
import V2Projects from '@/components/v2/sections/projects';
import V2Contact from '@/components/v2/sections/contact';

export default function Home() {
  return (
    <V2Layout>
      <V2Hero />
      <V2About />
      <V2Experience />
      <V2Projects />
      <V2Contact />
    </V2Layout>
  );
}
