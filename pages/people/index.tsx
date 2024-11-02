import { MilTemplate } from '@/components/page-templates';
import MilHead from '@/components/basic-components/mil/head/head.component';
import Hero from "@/components/basic-components/mil/hero/hero.component";
import Container from '@/components/basic-components/layout/container/container.component';
import Breadcrumbs from '@/components/shared-components/breadcrumbs/breadcrumbs.component';
import People from '@/components/page-components/mil/people/page/page.component';

import heroBackground from "@/assets/mil/people/hero/People.jpg";

const PeoplePage = () => {
  const breadcrumbs: Breadcrumb[] = [['PEOPLE', '']];

  return (
    <MilTemplate>
      <MilHead />
      <Hero background={heroBackground} />
      <Container>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <People />
      </Container>
    </MilTemplate>
  );
}

export default PeoplePage;