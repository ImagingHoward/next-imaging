import React from 'react';
import classnames from 'classnames';
import classes from './container.module.sass';

interface IProps {
	lesswide?: boolean;
	className?: string;
	children: React.ReactNode;
	id?: string;
}

const Container = ({className, children, lesswide, ...props}: IProps) => {
	return (
		<div
			{...props}
			className={classnames(className, classes.container, { [classes.lesswide]: lesswide })}
		>
			{children}
		</div>
	);
};

export default Container;