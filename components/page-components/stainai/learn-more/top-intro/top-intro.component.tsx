import classes from "./top-intro.module.sass";

const TopIntro = () => {
  return (
    <div className={classes.warpper}>
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
  );
};

export default TopIntro;