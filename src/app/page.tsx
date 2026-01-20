import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import MoreExploration from '@/components/sections/MoreExploration';
import Contact from '@/components/sections/Contact';
import SelectedWork from '@/components/selected-work/SelectedWork';
export default function Home() {
  return (
    <main>
      <Hero />
      <SelectedWork />
      <MoreExploration />
      <Contact />
    </main>
  );
}
