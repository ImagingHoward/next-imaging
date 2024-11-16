import React, { useRef, useState, useContext } from "react";
import classes from "./signin.module.sass";

import UserHero from "../user-hero/user-hero.component";

const SignIn = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.createNav}>
        <a href="/stainai/user/singup/intro"> Create your STAIN.AI ID</a>
      </div>
      <UserHero />

    </div>
  );
};

export default SignIn;
