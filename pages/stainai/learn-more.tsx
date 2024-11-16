import StainaiHead from '@/components/basic-components/stainai/head/head.component';
import { StainAITemplate } from '@/components/page-templates';
import Hero from '@/components/basic-components/stainai/hero/hero.component';
import LearnMore from '@/components/page-components/stainai/learn-more/learn-more.component';

import useIsWider from '@/hooks/is-wider.hook';

import heroBackground from "@/assets/stainai/hero/learn-more.png";

const LearnMorePage = () => {
  const isMobile = useIsWider(960);
  const customStyles = {
    backgroundPosition: '28%',
    minHeight: '1024px'
  };
  const customMobileStyles = {
    backgroundPosition: '28%'
  };


  return (
    <StainAITemplate>
      <StainaiHead />
      <Hero
        background={heroBackground}
        style={isMobile ? customStyles : customMobileStyles}
      />
      <LearnMore />
    </StainAITemplate>
  );
}

export default LearnMorePage;