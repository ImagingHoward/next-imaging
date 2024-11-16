import React from 'react';
import NavBar from '../basic-components/stainai/navbar/nav-bar.component';

interface IProps {
	children?: React.ReactNode;
  isNavBGColor?: boolean | undefined;
}

const StainAITemplate = (props: IProps) => {
  return (
    <div>
      <NavBar isNavBGColor={props.isNavBGColor} />
      {props.children}
    </div>
  );
};

export default StainAITemplate;