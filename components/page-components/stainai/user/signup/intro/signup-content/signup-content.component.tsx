import React from "react";
import classes from "./signup-content.module.sass";
import { StaticImageData } from "next/image";

interface IProps {
	icon?: StaticImageData;
	heading?: string;
  blurb?: string;
}

const SingUpContent = (props: IProps) => {
  return (
    <div className={classes.wrapper}>
        <div className={classes.section}>
          <div className={classes.heading}>
            <img src={props.icon?.src} />
            {props.heading}
          </div>
          <div className={classes.blurb}>{props.blurb}</div>
        </div>
    </div>
  );
};

export default SingUpContent;
