import { MilTemplate } from '@/components/page-templates';
import MilHead from '@/components/basic-components/mil/head/head.component';
import Container from '@/components/basic-components/layout/container/container.component';
import { FullPublications } from '@/components/page-components/mil/research';
import Breadcrumbs from '@/components/shared-components/breadcrumbs/breadcrumbs.component';

const FullPublicationsPage = () => {
  const breadcrumbs: Breadcrumb[] = [
    ['RESEARCH', '/research'],
    ['FULL PUBLICATIONS', '']
  ];

  return (
    <MilTemplate>
      <MilHead />
      <Container>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <FullPublications />
      </Container>
    </MilTemplate>
  );
}

export default FullPublicationsPage;