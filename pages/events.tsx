import { MilTemplate } from '@/components/page-templates';
import MilHead from '@/components/basic-components/mil/head/head.component';
import Hero from "@/components/basic-components/mil/hero/hero.component";
import Events from "@/components/page-components/mil/events/events.component";
import Container from '@/components/basic-components/layout/container/container.component';
import Breadcrumbs from '@/components/shared-components/breadcrumbs/breadcrumbs.component';

import heroBackground from "@/assets/mil/hero/Events.jpg";

const EventsPage = () => {
  const breadcrumbs: Breadcrumb[] = [['EVENTS', '']];

  return (
    <MilTemplate>
      <MilHead />
      <Hero background={heroBackground} />
      <Container>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <Events />
      </Container>
    </MilTemplate>
  );
}

export default EventsPage;