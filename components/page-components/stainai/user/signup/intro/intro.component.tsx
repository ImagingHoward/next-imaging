import React, { useRef, useState, useContext } from "react";
import classes from "./intro.module.sass";

import UserHero from "../../user-hero/user-hero.component";
import SingUpContent from "./signup-content/signup-content.component";

import SignUpIntroList from "@/constants/stainai/signup-intro-list";

const SignUpIntro = () => {

  return (
    <div className={classes.wrapper}>
      <div className={classes.signup}>
        <UserHero />
        <div className={classes.title}>
          A MorStainAI account grants you access to all AI-Stain services.
        </div>
        <div className={classes.blurb}>
          Sign in now to effortiessly manage our account and take control of
          your MorStainAI experience.
        </div>
        <div className={classes.button}>
          <a href="/stainai/user/singup/register">Sign Up</a>
        </div>
      </div>
      {
        SignUpIntroList.map((item, index) => (
          <SingUpContent
            key={index}
            icon={item.icon}
            heading={item.heading}
            blurb={item.blurb}
          />
        ))
      }
    </div>
  );
};

export default SignUpIntro;
