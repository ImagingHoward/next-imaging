import React from 'react';

interface IProps {
	children?: React.ReactNode;
}

const StainAITemplate = (props: IProps) => {
	return <div>{props.children}</div>;
};

export default StainAITemplate;