import classes from "./bottom-banner.module.sass";
import bottomBanner from "@/assets/stainai/images/learn-more/bottom.png";

const BottomBanner = () => {
  return (
    <div className={classes.warpper}>
    <img src={bottomBanner.src} />
    <div className={classes.bottomContent}>
      <p>Welcome for Partnership and Support</p>
      <div className={classes.button}>
        <a href="./contact-us">Contact</a>
      </div>
    </div>

  </div>
  );
};

export default BottomBanner;