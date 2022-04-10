import React, { useEffect, useState } from "react";
import "../navbarMD.scss";

const NavbarMD = () => {
  const [mdNavbar, setMDNavbar] = useState();
  const [firstLoad, setFirstLoad] = useState(true);

  const activateNav = () => {
    const navbarSite = document.querySelector(".navbar-site");
    navbarSite.classList.toggle("change");
  };
  return (
    <div className="navbar-site page-navbar font-garbled scrolled">
      <div className="page-navbar-holder">
        <div className="navbar-logo"></div>
        <div className="navbar-menu">
          <div className="bar-container" onClick={activateNav}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
      </div>
      <div className="falling-nav">
        <ul>
          <li className="border-bottom" onClick={activateNav}>
            <a href="#header-page" className="a-nav-element">
              Menu
            </a>
          </li>
          <li className="border-bottom" onClick={activateNav}>
            <a href="#main-site" className="a-nav-element">
              Latest
            </a>
          </li>
          <li onClick={activateNav}>
            <a href="#score-container " className="a-nav-element">
              Table
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarMD;
