import React from "react";
import classes from "./positions.module.sass";

import { BsFillPersonLinesFill } from "react-icons/bs";

const Positions = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.blockHeader}>
        <div>
          <BsFillPersonLinesFill size={25} /> Open Posistions
        </div>
      </div>
      <div className={classes.positions}>
        Currently, there are no scheduled events planned.
      </div>
    </div>
  );
};

export default Positions;
