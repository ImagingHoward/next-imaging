import { MilTemplate } from '@/components/page-templates';
import MilHead from '@/components/basic-components/mil/head/head.component';
import Hero from "@/components/basic-components/mil/hero/hero.component";
import Container from '@/components/basic-components/layout/container/container.component';
import { Research } from '@/components/page-components/mil/research';
import Breadcrumbs from '@/components/shared-components/breadcrumbs/breadcrumbs.component';

import heroBackground from "@/assets/mil/hero/ResearchPage.jpg";

const ResearchPage = () => {
  const breadcrumbs: Breadcrumb[] = [['RESEARCH', '']];

  return (
    <MilTemplate>
      <MilHead />
      <Hero background={heroBackground} title="" />
      <Container>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <Research />
      </Container>
    </MilTemplate>
  );
}

export default ResearchPage;