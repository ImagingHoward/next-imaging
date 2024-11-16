import React, { useState } from "react";
import classes from "./nav-bar.module.sass";
import classnames from 'classnames';
import { FaBars } from "react-icons/fa";

import logo from "@/assets/stainai/icons/logo.png";
import hulogo from "@/assets/stainai/icons/hu_log.svg";

interface IProps {
  isNavBGColor?: boolean | undefined;
}

const NavBar = (props: IProps) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={classes.wrapper} style={{ backgroundColor: props.isNavBGColor ? "#0c0f18" : ""}}>
      <div className={classes.logoGroup}>
        <img src={hulogo.src} className={classes.hulogo} onClick={() => window.location.href = 'https://howard.edu/'} />
        <img src={logo.src} className={classes.logo} onClick={() => window.location.href = '/stainai'} />
      </div>
      <div className={classes.desktopMenu}>
        <ul>
          <li>
            <a>ABOUT</a>
            <div className={classes.dropdownContent}>
              <a href="https://imaging.howard.edu/">Molecular Imaging Laboratory</a>
              <a href="/stainai/learn-more">About StainAI</a>
            </div>
          </li>
          <li>
            <a href="#">TRY IT</a>
            <div className={classes.dropdownContent}>
              <a href="/stainai/upload-image">Upload Your Data</a>
              <a href="https://stainaiviewer.azurewebsites.net/" target="_blank">See Your Result</a>
              <a href="https://stainaimicroglia.azurewebsites.net/" target="_blank">Stainai Microglia</a>
            </div>
          </li>
          <li>
            <a href="/stainai/contact-us">CONTACT US</a>
          </li>
          <li>
            <a href="/stainai/user">SIGNIN</a>
          </li>
        </ul>
      </div>
      <div className={classes.mobileMenu}>
        <button onClick={toggleMobileMenu} className={classes.menuButton}>
          <FaBars size={32} />
        </button>
        {isMobileMenuOpen && (
          <div className={classes.mobileDropdown}>
            <ul>
              <li>About
                <ul>
                  <li>
                    <a href="https://imaging.howard.edu/">Molecular Imaging Laboratory</a>
                  </li>
                  <li>
                    <a href="/stainai/learn-more">About StainAI</a>
                  </li>
                </ul>
              </li>
              <li>Try it
                <ul>
                  <li>
                    <a href="/stainai/upload-image">Upload Your Data</a>
                  </li>
                  <li>
                    <a href="https://stainaiviewer.azurewebsites.net/" target="_blank">See Your Result</a>
                  </li>
                  <li>
                    <a href="https://stainaimicroglia.azurewebsites.net/" target="_blank">Stainai Microglia</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/stainai/contact-us">CONTACT US</a>
              </li>
              <li>
                <a href="/stainai/user">SIGNIN</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;