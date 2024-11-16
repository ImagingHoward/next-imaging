import React, { useRef, useState, useContext } from "react";
import classes from "./forget-password.module.sass";


const ForgetPassword = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.createNav}>
        <a href="/stainai/user/singup"> ForgetPassword </a>
      </div>

    </div>
  );
};

export default ForgetPassword;