import { MilTemplate } from '@/components/page-templates';
import { Head, Home }  from '@/components/page-components/mil';

const MilHome = ()  =>{
  return (
    <MilTemplate>
      <Head />
      <Home />
    </MilTemplate>
  );
}

export default MilHome;