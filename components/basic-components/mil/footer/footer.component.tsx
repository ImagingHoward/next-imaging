import React from "react";
import classes from "./footer.module.sass";
import classnames from "classnames";

const Footer = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classnames(classes.footer, classes.sole)}>
        <a className={classes.siteLogo} href="http://www2.howard.edu/"></a>
        <nav>
          <ul>
            <li>Copyright &copy; 2021 Howard University</li>
            <li>All Rights Reserved</li>
          </ul>
        </nav>
      </div>
      <div className={classnames(classes.footer, classes.sole)}>
        <ul>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/research" title="">
              Research
            </a>
          </li>
          <li>
            <a href="/facilities">Facilities</a>
          </li>
          <li>
            <a href="/people">People</a>
          </li>
          <li>
            <a href="/events">Events</a>
          </li>
          <li>
            <a href="/positions">Open Positions</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className={classnames(classes.footer, classes.sole)}>
        <strong>
          Howard University
          <br />
          Molecular Imaging Laboratory
        </strong>
        <br />
        <span>2041 Georgia Ave., NW</span>
        <br />
        <span>Cancer Center B112</span>
        <br />
        <span>Washington, D.C. 20060</span>
      </div>

      <div className={classes.footer}>
        <div>
          <strong>Phone</strong>
          <br />
          202.865.3729
        </div>
        <br />
        <div>
          <strong>Fax</strong>
          <br />
          202.865.3722
        </div>
      </div>
    </div>
  );
};

export default Footer;