import React from "react";
import classes from "./hero.module.sass";
import { StaticImageData } from "next/image";

interface IProps {
  background?: StaticImageData;
  title?: string;
  subtitle?: string;
}

const Hero = (props: IProps) => {
  const { background, title, subtitle } = props;

  return (
    <div className={classes.wrapper}>
      <ol>
        <li
          className={classes.hero}
          style={{ background: background && `url(${background.src})` }}
        >
          <div className={classes.compartment}>
            <div className={classes.heroContent}>
              <h2>{title}</h2>
              {subtitle && <h3>{subtitle}</h3>}
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Hero;