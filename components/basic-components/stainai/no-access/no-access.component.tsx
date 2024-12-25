import React from "react";
import classes from "./no-access.module.sass";

const NoAccess = () => {
  return (
    <div className={classes.wrapper}>
      <p className={classes.note}>
        You don't access right. Please <a href="/stainai/user">Singin</a> or <a href="/stainai/user/singup">Create your StainAI ID</a>.
      </p>
    </div>
  );
};

export default NoAccess;