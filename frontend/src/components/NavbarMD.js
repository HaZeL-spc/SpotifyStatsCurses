import React, { useRef } from "react";
import "../navbarMD.scss";

const NavbarMD = ({ setCurrentPage }) => {
  const ulRef = useRef();

  const activateNav = (e) => {
    const navbarSite = document.querySelector(".navbar-site");
    navbarSite.classList.toggle("change");

    console.log(e.target.tagName);
    if (e.target.tagName === "LI" || e.target.tagName === "A") {
      if (e.target.tagName === "LI") {
        changeActiveLi(e);
        return;
      }
      console.log(e.parentNode);
    }
  };

  const changeActiveLi = (e) => {
    for (let i = 0; i < ulRef.current.children.length; i++) {
      ulRef.current.children[i].classList.remove("active");
    }
    console.log(e.target.classList);
    setCurrentPage(e.target.classList[1]);
    e.target.classList.add("active");
    console.log(ulRef.current.children);
  };

  return (
    <div className="navbar-site page-navbar font-garbled scrolled">
      <div className="page-navbar-holder">
        <div className="navbar-logo"></div>
        <div className="navbar-menu">
          <div className="bar-container" onClick={(e) => activateNav(e)}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
      </div>
      <div className="falling-nav">
        <ul ref={ulRef}>
          <li
            className="border-bottom your-top"
            onClick={(e) => activateNav(e)}
          >
            <a className="a-nav-element">Your Top</a>
          </li>
          <li className="border-bottom artists" onClick={(e) => activateNav(e)}>
            <a className="a-nav-element">Artists</a>
          </li>
          <li className="albums" onClick={(e) => activateNav(e)}>
            <a className="a-nav-element">Albums</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarMD;
