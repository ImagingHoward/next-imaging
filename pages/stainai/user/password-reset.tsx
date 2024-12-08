import StainaiHead from '@/components/basic-components/stainai/head/head.component';
import { StainAITemplate } from '@/components/page-templates';

import useIsWider from '@/hooks/is-wider.hook';

import PasswordResetForm from '@/components/page-components/stainai/user/password-reset-form/password-reset-form.component';

const PasswordResetPage = () => {
  const isMobile = !useIsWider(600);

  return (
    <StainAITemplate  isNavBGColor={true}>
      <StainaiHead />
      <PasswordResetForm />
    </StainAITemplate>
  );
}

export default PasswordResetPage;