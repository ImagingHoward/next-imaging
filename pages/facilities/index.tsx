import { MilTemplate } from '@/components/page-templates';
import MilHead from '@/components/basic-components/mil/head/head.component';
import Hero from "@/components/basic-components/mil/hero/hero.component";
import Container from '@/components/basic-components/layout/container/container.component';
import Breadcrumbs from '@/components/shared-components/breadcrumbs/breadcrumbs.component';
import Facilities from '@/components/page-components/mil/facilities/page/facilities.component';

import heroBackground from "@/assets/mil/hero/Facilities.jpg";

const FacilitiesPage = () => {
  const breadcrumbs: Breadcrumb[] = [['FACILITIES', '']];

  return (
    <MilTemplate>
      <MilHead />
      <Hero background={heroBackground} title="" />
      <Container>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <Facilities />
      </Container>
    </MilTemplate>
  );
}

export default FacilitiesPage;