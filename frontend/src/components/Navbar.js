import React, { createRef } from "react";
import "../App.css";
import "../TopStats.css";

const Navbar = ({ setCurrentPage }) => {
  const ulRef = createRef();

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
};

export default Navbar;
