import StainaiHead from '@/components/basic-components/stainai/head/head.component';
import { StainAITemplate } from '@/components/page-templates';
import ForgetPassword from '@/components/page-components/stainai/user/forget-password/forget-password.component';

import useIsWider from '@/hooks/is-wider.hook';

const ForgetPasswordPage = () => {
  const isMobile = !useIsWider(600);

  return (
    <StainAITemplate  isNavBGColor={true}>
      <StainaiHead />
        <ForgetPassword />
    </StainAITemplate>
  );
}

export default ForgetPasswordPage;