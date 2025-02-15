import data from '../../../public/data.json';

import Hero from '../../components/sections/Hero';
import Projects from '../../components/sections/Projects';
import Skills from '../../components/sections/Skills';

export default function Home() {
  return (
    <section>
      <Hero />
      <Projects />
      <Skills />
    </section>
  );
}
