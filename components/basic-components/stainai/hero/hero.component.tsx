import React from "react";
import classes from "./hero.module.sass";
import classnames from "classnames";
import { StaticImageData } from "next/image";

import NavBar from "../navbar/nav-bar.component";

interface IProps {
  background?: StaticImageData;
  logo?: string;
  title?: string;
  blur?: string;
  button?: string;
  url?: string;
  style?: React.CSSProperties | undefined;
}

const Hero = (props: IProps) => {
  const { background, logo, title, blur, button, url } = props;

  return (
    <div className={classes.wrapper}>
      {/* <NavBar /> */}
      <ol>
        <li
          className={classnames(classes.hero)}
          style={{ background: background && `url(${background.src})`, ...props.style }}
        >
          <div className={classes.compartment}>
            <div className={classes.heroContent}>
              <h1>{logo}</h1>
              <h2>{title}</h2>
              {blur && <div className={classes.blur} dangerouslySetInnerHTML={{ __html: blur }} />}
            </div>
          </div>
          {button && (
            <div className={classes.learnmore}>
              <a href={url} className={classes.button}>
                {button}
              </a>
            </div>
          )}
        </li>
      </ol>
    </div>
  );
};

export default Hero;