import { MilTemplate } from '@/components/page-templates';
import MilHead from '@/components/basic-components/mil/head/head.component';
import Hero from "@/components/basic-components/mil/hero/hero.component";
import Container from '@/components/basic-components/layout/container/container.component';
import Breadcrumbs from '@/components/shared-components/breadcrumbs/breadcrumbs.component';
import ContactUs from '@/components/page-components/mil/contact-us/contact-us.component';

import heroBackground from "@/assets/mil/hero/Direction.jpg";

const ContactPage = () => {
  const breadcrumbs: Breadcrumb[] = [['CONTACT US', '']];

  return (
    <MilTemplate>
      <MilHead />
      <Hero background={heroBackground} />
      <Container>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <ContactUs />
      </Container>
    </MilTemplate>
  );
}

export default ContactPage;