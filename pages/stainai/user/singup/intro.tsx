import StainaiHead from '@/components/basic-components/stainai/head/head.component';
import { StainAITemplate } from '@/components/page-templates';

import useIsWider from '@/hooks/is-wider.hook';

import SignUpIntro from '@/components/page-components/stainai/user/signup/intro/intro.component';

const SignUpIntroPage = () => {
  const isMobile = !useIsWider(600);

  return (
    <StainAITemplate  isNavBGColor={true}>
      <StainaiHead />
        <SignUpIntro />
    </StainAITemplate>
  );
}

export default SignUpIntroPage;