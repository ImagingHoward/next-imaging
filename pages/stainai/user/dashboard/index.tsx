import StainaiHead from '@/components/basic-components/stainai/head/head.component';
import DashBoard from '@/components/page-components/stainai/user/dashboard/dashboard.component';
import { StainAITemplate } from '@/components/page-templates';

import useIsWider from '@/hooks/is-wider.hook';

const DashBoardoPage = () => {
  const isMobile = !useIsWider(600);

  return (
    <StainAITemplate isNavBGColor={true}>
      <StainaiHead />
      <DashBoard />
    </StainAITemplate>
  );
}

export default DashBoardoPage;