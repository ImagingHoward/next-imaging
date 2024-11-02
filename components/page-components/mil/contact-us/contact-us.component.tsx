import React from "react";
import classes from "./contact-us.module.sass";

import { FiMapPin } from "react-icons/fi";
import { FaInfoCircle } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { ImPhoneHangUp } from "react-icons/im";

const ContactUs = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.blockHeader}>
        <div>
          <FiMapPin size={25} /> Location
        </div>
      </div>
      <div className={classes.contact}>
        <div className={classes.contactInfo}>
          <div className={classes.info}>
            <div className={classes.infoHeader}>Directions</div>
            <div className={classes.infoContext}>
              The Molecular Imaging Lab offices are located in the Howard
              University Cancer Center. Visitors may access the lab via the
              Hospital Main entrance at: 2041 Georgia Ave NW, Washington DC,
              20060
            </div>
            <div className={classes.infoHeader}>Parking</div>
            <div className={classes.infoContext}>
              There are two paid parking lots in the area, one in front of the
              hospital at 2041 Georgia Ave NW, and one behind the hospital at
              the intersection of 5th St NW and V St NW. Street parking may
              also be available in the area.
            </div>
            <div className={classes.infoHeader}>Public Transportation</div>
            <div className={classes.infoContext}>
              <p>
                The closest Metro stations are Shaw/Howard University (North
                Entrance) and U St/African-Amer Civil War Memorial/Cardozo
                (East Entrance). Both Metro stations are served by the Yellow
                and Green Lines of DC's Metro System.
              </p>
              <p>
                The area is also served by DC Metrobus lines 70/79, which run
                along Georgia Ave/7th St NW, and lines 90/92/96, which run
                along Florida Ave/U St NW.
              </p>
            </div>
          </div>
          <iframe
            src="https://maps.google.com/maps?t=m&amp;output=embed&amp;iwloc=near&amp;z=16&amp;q=520+W+Street+NW%2C+washington%2C+DC+20059"
            aria-label=""
            className={classes.googleMap}
          ></iframe>
        </div>
      </div>
      <div className={classes.blockHeader}>
        <div>
          <FaInfoCircle size={25} /> Primary Contacts
        </div>
      </div>
      <div className={classes.contact}>
        <div className={classes.contactInfo}>
          <div className={classes.info}>
            <div className={classes.infoHeader}>
              Mr. Stephen Lin, Lab Manager
            </div>
            <div className={classes.infoContext}>
              <ImPhoneHangUp size={25} /> (202) 865-3729
            </div>
            <div className={classes.infoContext}>
              <HiOutlineMail size={25} />
              <a href="mailto:stephen.lin@howard.edu">
                stephen.lin@howard.edu
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;