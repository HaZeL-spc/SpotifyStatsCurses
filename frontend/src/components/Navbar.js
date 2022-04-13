import React, { createRef, useState, useEffect } from "react";
import "../App.css";
import "../TopStats.css";
import NavbarMD from "./NavbarMD";

const Navbar = ({ setCurrentPage, currentPage }) => {
  const ulRef = createRef();
  const [mdNavbar, setMDNavbar] = useState();

  const changeActiveLi = (e) => {
    for (let i = 0; i < ulRef.current.children.length; i++) {
      ulRef.current.children[i].classList.remove("active");
    }

    if (e.target.classList.contains("hover")) {
      e.target.classList.remove("hover");
    }
    setCurrentPage(e.target.className);
    e.target.classList.add("active");
    //console.log(ulRef.current.children);
  };

  const onHoverLi = (e) => {
    if (!e.target.classList.contains("active")) {
      e.target.classList.add("hover");
    }
  };

  const onHoverLeaveLi = (e) => {
    if (e.target.classList.contains("hover")) {
      e.target.classList.remove("hover");
    }
  };

  //change if another nav
  const changeTypeNav = () => {
    const nav = document.querySelector(".navbar-site");
    if (window.innerWidth >= 600) {
      nav.style.backgroundColor = "transparent";
      setMDNavbar(true);
    } else {
      nav.style.backgroundColor = "black";
      nav.classList.add("scrolled");
      nav.classList.remove("unscrolled");
      setMDNavbar(false);
    }
  };

  useEffect(() => {
    changeTypeNav();
    window.addEventListener("resize", changeTypeNav);

    return () => {
      window.removeEventListener("resize", changeTypeNav);
    };
  }, [mdNavbar]);

  if (mdNavbar) {
    return (
      <div className="navbar-container">
        <ul className="navbar-site" ref={ulRef}>
          <li
            className="your-top active"
            onClick={(e) => changeActiveLi(e)}
            onMouseEnter={(e) => onHoverLi(e)}
            onMouseLeave={(e) => onHoverLeaveLi(e)}
          >
            Your Top
          </li>
          <li
            className="artists"
            onClick={(e) => changeActiveLi(e)}
            onMouseEnter={(e) => onHoverLi(e)}
            onMouseLeave={(e) => onHoverLeaveLi(e)}
          >
            Artists
          </li>
          <li
            className="albums"
            onClick={(e) => changeActiveLi(e)}
            onMouseEnter={(e) => onHoverLi(e)}
            onMouseLeave={(e) => onHoverLeaveLi(e)}
          >
            Albums
          </li>
        </ul>
      </div>
    );
  }
  return <NavbarMD setCurrentPage={setCurrentPage} />;
};

export default Navbar;
