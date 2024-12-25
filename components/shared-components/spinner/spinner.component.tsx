import React from 'react';
import classes from './spinner.module.sass';
import classnames from 'classnames';

interface SpinnerProps {
  className?: string;
}

const Spinner = (props: SpinnerProps) => {
  const { className } = props;
  
  return (
    <div className={classnames(classes.spinner, className)}>
      <span className={classes.hidden}>Loading...</span>
    </div>
  );
};

export default Spinner;