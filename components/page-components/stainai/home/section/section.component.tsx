import React from "react";
import classes from "./section.module.sass";
import { StaticImageData } from "next/image";

import useIsWider from '@/hooks/is-wider.hook';

interface IProps {
  sectionBackground: StaticImageData,
  sectionBackgroundMobile: StaticImageData,
  icon: StaticImageData,
  heading: string,
  blurb: string,
  button?: string,
  url: string,
  target?: string
}

const Section = (props: IProps) => {
  const { sectionBackground, sectionBackgroundMobile, icon, heading, blurb, button, url, target } = props;
  const isMobile = !useIsWider(690);

  return (
    <div className={classes.wrapper}>
      <div
        className={classes.content}
        style={{
          background: `url(${!isMobile ? sectionBackground.src : ''}) 50% center / cover no-repeat`,
        }}
      >
        <div className={classes.heading}>
          <img src={icon.src} />
          {heading}
        </div>
        <div className={classes.blurb}>
          {blurb}
        </div>
        {
          isMobile
            ? <div><img className={classes.sectionBackground} src={sectionBackgroundMobile.src} /></div>
            : ''
        }
        {
          button &&
          <div className={classes.button}>
            <a href={url} target={target ? target : "_self"}>{button}</a>
          </div>
        }
      </div>
    </div>
  );
};

export default Section;
