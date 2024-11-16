import StainaiHead from '@/components/basic-components/stainai/head/head.component';
import { StainAITemplate } from '@/components/page-templates';

import Hero from '@/components/basic-components/stainai/hero/hero.component';
import useIsWider from '@/hooks/is-wider.hook';

import heroBackgroundMobile from "@/assets/stainai/hero/contact_hero.svg";
import heroBackground from "@/assets/stainai/hero/contact_hero.png";

import ContactUs from '@/components/page-components/stainai/contact-us/contact-us.component';


const ContactUsPage = () => {
  const isMobile = !useIsWider(600);

  return (
    <StainAITemplate>
      <StainaiHead />
      <Hero 
        background={isMobile ? heroBackgroundMobile : heroBackground}
      />
      <ContactUs />
    </StainAITemplate>
  );
}

export default ContactUsPage;