import StainaiHead from '@/components/basic-components/stainai/head/head.component';
import { StainAITemplate } from '@/components/page-templates';

import useIsWider from '@/hooks/is-wider.hook';

import Register from '@/components/page-components/stainai/user/register/register.component';

const RegisterPage = () => {
  const isMobile = !useIsWider(600);

  return (
    <StainAITemplate  isNavBGColor={true}>
      <StainaiHead />
        <Register />
    </StainAITemplate>
  );
}

export default RegisterPage;