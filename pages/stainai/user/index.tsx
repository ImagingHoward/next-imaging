import StainaiHead from '@/components/basic-components/stainai/head/head.component';
import { StainAITemplate } from '@/components/page-templates';

import useIsWider from '@/hooks/is-wider.hook';

import SignIn from '@/components/page-components/stainai/user/signin/signin.component';

const UserPage = () => {
  const isMobile = !useIsWider(600);

  return (
    <StainAITemplate  isNavBGColor={true}>
      <StainaiHead />
        <SignIn />
    </StainAITemplate>
  );
}

export default UserPage;