import React, { useState } from "react";
import classes from "./learn-more.module.sass";

// import framwork from "../../../assets/framework.png";
// import bottom from "../../../assets/bottom.png";
// import morphotype_Icon from "../../../assets/morphotype_Icon.png";
// import morphotype_Icon_section from "../../../assets/morphotype_Icon_section.png";
// import morphotype_Icon_fig from "../../../assets/morphotype_Icon_fig.png";

// import morphometry_Icon from "../../../assets/morphometry_Icon.png";
// import morphometry_fig from "../../../assets/morphometry_fig.png";
// import morphometry_rainbow from "../../../assets/morphometry_rainbow.png";

// import whole_brain_Icon from "../../../assets/whole_brain_Icon.png";
// import whole_brain_fig from "../../../assets/whole_brain_fig.png";

// import { RiArrowDownSFill } from "react-icons/ri";
// import { RiArrowDropUpFill } from "react-icons/ri";

const LearnMore = () => {
  // const [morphotypeExpand, setMorphotypeExpand] = useState(false);
  // const [morphometryExpand, setMorphometryExpand] = useState(false);
  // const [wholeBrainExpand, setWholeBrainExpand] = useState(false);

  return (
    <div className={classes.wrapper}>
      <div className={classes.intro}>
        <p>OUR EXPERTISE</p>
        <p className={classes.introHeader}>
          StainAI for Microglia Image Analysis
        </p>
        <p className={classes.introContent}>
          The StainAI system tackles the challenge of quantifying microglia images across the entire brain.
        </p>
        <p className={classes.introContent}>
          StainAI empolys multi-stage deep learning techniques to transform widely-used 20X low-magnification immunohistochemistry images of microglia into quantitative maps of morphological phenotypes and morphometrics, providing a surrogate microglial activation score (MA Score) for any selected region through simple ROI drawing.
        </p>
      </div>

      <div className={classes.framework}>
        {/* <img src={framwork} /> */}
        <div className={classes.frameworkContent}>
          <p>StainAI Framwork</p>
          <p className={classes.frameworkContentDetail}>
            StainAI integrates pipelines for Iba1 image
            curation and microglial cell database
            development and multi-stage deep
            learning system for processing
            whole-brain morphological
            maps.
          </p>
        </div>

      </div>

    </div>
  );
};

export default LearnMore;