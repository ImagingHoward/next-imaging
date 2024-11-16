import React from "react";
import classes from "./user-hero.module.sass";

import background from "@/assets/stainai/images/user/signin.png";

const UserHero = () => {
  return (
    <div
      className={classes.logo}
      style={{
        background: `url(${background.src}) center center / cover no-repeat`,
      }}
    >
      STAIN.AI
    </div>
  );
};

export default UserHero;
