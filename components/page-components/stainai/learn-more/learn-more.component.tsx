import classes from "./learn-more.module.sass";

import TopIntro from "./top-intro/top-intro.component";
import Framework from "./framework/framework.component";
import Profolio from "./profolio/profolio.components";
import BottomBanner from "./bottom-banner/bottom-banner.component";

const LearnMore = () => {
  return (
    <div className={classes.wrapper}>
      <TopIntro />
      <Framework />
      <Profolio />
      <BottomBanner />
    </div>
  );
};

export default LearnMore;