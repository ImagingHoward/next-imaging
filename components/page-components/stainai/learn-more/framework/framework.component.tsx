import classes from "./framework.module.sass";
import framwork from "@/assets/stainai/images/learn-more/framework.png";

const Framework = () => {
  return (
    <div className={classes.wrapper}>
      <img src={framwork.src} />
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
  );
};

export default Framework;