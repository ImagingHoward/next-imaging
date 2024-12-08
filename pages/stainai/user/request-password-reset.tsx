import StainaiHead from '@/components/basic-components/stainai/head/head.component';
import { StainAITemplate } from '@/components/page-templates';
import PasswordResetRequest from '@/components/page-components/stainai/user/request-password-reset/request-password-reset.component';

import useIsWider from '@/hooks/is-wider.hook';

const RequestPasswordResetPage = () => {
  const isMobile = !useIsWider(600);

  return (
    <StainAITemplate  isNavBGColor={true}>
      <StainaiHead />
        <PasswordResetRequest />
    </StainAITemplate>
  );
}

export default RequestPasswordResetPage;