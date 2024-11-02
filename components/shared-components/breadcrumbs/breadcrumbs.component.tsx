import React from 'react';
import classNames from 'classnames';
import classes from './breadcrumbs.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';


interface IProps {
	breadcrumbs: Breadcrumb[];
	className?: string;
}

const Caret = () => <FontAwesomeIcon icon={faCaretRight} />;

const Breadcrumbs = (props: IProps) => {
	return (
		<div className={classNames(props.className, classes.breadcrumbs)}>
			<a href="/">HOME</a>
			{props.breadcrumbs.length ? <Caret /> : null}
			{props.breadcrumbs.map(([label, link], i) => (
				<React.Fragment key={i}>
					{link ? <a href={link}>{label}</a> : <span className={classes.breadcrumbsNotLinked}>{label}</span>}
					{i < props.breadcrumbs.length - 1 ? <Caret /> : null}
				</React.Fragment>
			))}
		</div>
	);
};

export default Breadcrumbs;