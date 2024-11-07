import StainaiHead from '@/components/basic-components/stainai/head/head.component';
import { StainAITemplate } from '../../components/page-templates';

import Hero from '@/components/basic-components/stainai/hero/hero.component';
import useIsWider from '@/hook/is-wider.hook';

import heroBackground from "@/assets/stainai/hero/home_hero.png";
import Home from '@/components/page-components/stainai/home/home.component';

const StainAIHome = () => {
  const isMobile = useIsWider(960);
  const customStyles = {
    backgroundPosition: '50% 38%',
    minHeight: '100vh'
  };
  const customMobileStyles = {
    backgroundPosition: '50% 50%'
  };

  return (
    <StainAITemplate>
      <StainaiHead />
      <Hero
        background={heroBackground}
        logo="STAIN.AI"
        title="AI Stain of Cell Morphology on Whole Brain"
        blur=" STAIN.AI is a website-as-a-service software package that can count & quantify morphological phenotypes of cells, even on low magnification immunohistochemistry images."
        button="Learn more"
        url="/stainai/learn-more"
        style={isMobile ? customStyles : customMobileStyles}
      />
      <Home />
    </StainAITemplate>
  );
}

export default StainAIHome;