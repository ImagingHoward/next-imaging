import React, { useEffect, useCallback } from "react";
import classes from "./nav-bar.module.sass";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  useEffect(() => {
    const handleResize = () => {
      const milNav = window?.document?.getElementById("milNav") as HTMLElement;
      const clientWidth = document.documentElement.clientWidth;
      if (milNav) {
        milNav.style.display = clientWidth >= 1366 ? "flex" : "none";
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuExpand = useCallback(() => {
    const milNav = window?.document?.getElementById("milNav") as HTMLElement;
    if (milNav) {
      milNav.style.display = milNav.style.display === "flex" ? "none" : "flex";
    }
  }, []);

  return (
    <div className={classes.wrapper}>
      <div className={classes.siteTopHat}>
        <div></div>
      </div>
      <header className={classes.siteHeader}>
        <div className={classes.compartment}>
          <a href="http://www2.howard.edu" className={classes.siteLogo}>
            Howard University
          </a>
          <h3>
            <a href="/">
              Molecular Imaging <br />
              Laboratory
            </a>
          </h3>
        </div>
        <a className={classes.faBars} onClick={menuExpand}>
          <FaBars size={32} />
        </a>
        <nav className={classes.nav} id="milNav">
          <ul>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/research">Research</a>
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
              <a href="/contact_us">Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;