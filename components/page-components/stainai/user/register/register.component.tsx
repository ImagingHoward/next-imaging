import React, { useRef, useState, useContext } from "react";
import classes from "./register.module.sass";


const Register = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.createNav}>
        <a href="/stainai/user/singup"> Register </a>
      </div>

    </div>
  );
};

export default Register;
