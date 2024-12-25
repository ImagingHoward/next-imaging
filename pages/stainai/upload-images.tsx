import StainaiHead from '@/components/basic-components/stainai/head/head.component';
import { StainAITemplate } from '../../components/page-templates';

import Hero from '@/components/basic-components/stainai/hero/hero.component';
import useIsWider from '@/hooks/is-wider.hook';
import UploadImages from '@/components/page-components/stainai/upload-images/upload-images.component';

import heroBackgroundMobile from "@/assets/stainai/hero/upload_hero.svg";
import heroBackground from "@/assets/stainai/hero/upload_hero.png";

const UploadImagesPage = () => {
  const isMobile = !useIsWider(960);
  const customStyles = {
    backgroundPosition: '50% 15%',
    minHeight: '950px'
  };
  const customMobileStyles = {
    backgroundPosition: '50% 0%',
    minHeight: '760px'
  };
  
  return (
    <StainAITemplate>
      <StainaiHead />
      <Hero
        background={isMobile? heroBackgroundMobile : heroBackground}
        style={isMobile ? customMobileStyles : customStyles}
      />
      <UploadImages />
    </StainAITemplate>
  );
}

export default UploadImagesPage;