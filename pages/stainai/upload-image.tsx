import StainaiHead from '@/components/basic-components/stainai/head/head.component';
import { StainAITemplate } from '../../components/page-templates';

import Hero from '@/components/basic-components/stainai/hero/hero.component';
import useIsWider from '@/hook/is-wider.hook';

import heroBackgroundMobile from "@/assets/stainai/hero/upload_hero.svg";
import heroBackground from "@/assets/stainai/images/upload_hero.png";

const UploadImagePage = () => {
  const isMobile = !useIsWider(960);
  const customStyles = {
    backgroundPosition: '50% 15%',
    minHeight: '560px'
  };
  const customMobileStyles = {
    backgroundPosition: '0% 0%',
    minHeight: '650px'
  };
  
  return (
    <StainAITemplate>
      <StainaiHead />
      <Hero
        background={isMobile? heroBackgroundMobile : heroBackground}
        style={isMobile ? customMobileStyles : customStyles}
      />
      <h1>StainAI - UploadImagePage</h1>
    </StainAITemplate>
  );
}

export default UploadImagePage;