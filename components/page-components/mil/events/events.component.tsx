import React from "react";
import classes from "./events.module.sass";

import { MdOutlineEventAvailable } from "react-icons/md";

const Events = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.blockHeader}>
        <div>
          <MdOutlineEventAvailable size={25} /> Event Announcements
        </div>
      </div>
      <div className={classes.events}>
        Currently, there are no scheduled events planned.
      </div>
    </div>
  );
};

export default Events;
