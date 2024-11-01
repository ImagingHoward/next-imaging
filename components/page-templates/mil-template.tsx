import React from "react";

import NavBar from '@/components/basic-components/mil/navbar/nav-bar.component';
import Footer from '@/components/basic-components/mil/footer/footer.component';

interface IProps {
  children?: React.ReactNode;
}

const MilTemplate = (props: IProps) => {
  return (
    <>
      <NavBar />
      	<div>{props.children}</div>
      <Footer />
    </>
  );
};

export default MilTemplate;
