import { MilTemplate } from '@/components/page-templates';
import MilHead from '@/components/basic-components/mil/head/head.component';
import Hero from "@/components/basic-components/mil/hero/hero.component";
import Home from '@/components/page-components/mil/home/home.component';

import heroBackground from "@/assets/mil/hero/homePage.jpg";

const MilHome = () => {
  return (
    <MilTemplate>
      <MilHead />
      <Hero
        background={heroBackground}
        title="Howard University Molecular Imaging Laboratory"
      />
      <Home />
    </MilTemplate>
  );
}

export default MilHome;