import React from "react";
import classes from "./home.module.sass";

import Section from "./section/section.component";

import aqBg from "@/assets/stainai/images/home/1_section.png";
import aqBgSmall from "@/assets/stainai/images/home/Section 1.svg";
import vaBg from "@/assets/stainai/images/home/2_section.png";
import vaBgSmall from "@/assets/stainai/images/home/Section 2.svg";
import fkBgSmall from "@/assets/stainai/images/home/Section 3_2.svg";
import fkBg from "@/assets/stainai/images/home/3_section.png";

import aqIcon from "@/assets/stainai/images/home/1_icon_50x50.png";
import vaIcon from "@/assets/stainai/images/home/2_icon_50x50.png";
import fkIcon from "@/assets/stainai/images/home/3_icon_50x50.png";

const Home = () => {
  return (
    <div className={classes.wrapper}>
      <Section
        sectionBackground={aqBg}
        sectionBackgroundMobile={aqBgSmall}
        icon={aqIcon}
        heading="Automated Quantification"
        blurb="Give it a try on your microglial image!"
        button="UPLOAD YOUR DATA"
        url="/stainai/upload-images"
      />
      <Section
        sectionBackground={vaBg}
        sectionBackgroundMobile={vaBgSmall}
        icon={vaIcon}
        heading="Visualization & Analysis"
        blurb="Interactive data quantification and statistical analysis"
        button="SEE YOUR RESULT"
        url="https://stainaiviewer.azurewebsites.net/"
        target="_blank"
      />
      <Section
        sectionBackground={fkBg}
        sectionBackgroundMobile={fkBgSmall}
        icon={fkIcon}
        heading="Future Work"
        blurb="AI-assisted radiologic-pathologic correlation analysis"
        url="#"
      />
    </div>
  );
};

export default Home;
