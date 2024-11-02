import { MilTemplate } from '@/components/page-templates';
import MilHead from '@/components/basic-components/mil/head/head.component';
import Hero from "@/components/basic-components/mil/hero/hero.component";
import Container from '@/components/basic-components/layout/container/container.component';
import Breadcrumbs from '@/components/shared-components/breadcrumbs/breadcrumbs.component';
import Positions from '@/components/page-components/mil/positions/positions.component';

import heroBackground from "@/assets/mil/positions/hero/Positions.jpg";

const PositionsPage = () => {
  const breadcrumbs: Breadcrumb[] = [['POSITIONS', '']];

  return (
    <MilTemplate>
      <MilHead />
      <Hero background={heroBackground} />
      <Container>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <Positions />
      </Container>
    </MilTemplate>
  );
}

export default PositionsPage;