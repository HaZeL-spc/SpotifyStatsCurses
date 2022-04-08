import React, { createRef } from "react";
import "../TopStats.css";

const Navbar = () => {
  const ulRef = createRef();

  const changeActiveLi = (e) => {
    for (let i = 0; i < ulRef.current.children.length; i++) {
      ulRef.current.children[i].className = "";
    }
    e.target.className = "active";
    console.log(ulRef.current.children);
  };

  const onHoverLi = (e) => {
    if (e.target.className !== "active") {
      e.target.className = "hover";
    }
  };

  const onHoverLeaveLi = (e) => {
    if (e.target.className === "hover") {
      e.target.className = "";
    }
  };

  return (
    <div className="navbar-container">
      <ul className="navbar-site" ref={ulRef}>
        <li
          className="active"
          onClick={(e) => changeActiveLi(e)}
          onMouseEnter={(e) => onHoverLi(e)}
          onMouseLeave={(e) => onHoverLeaveLi(e)}
        >
          Your Top
        </li>
        <li
          onClick={(e) => changeActiveLi(e)}
          onMouseEnter={(e) => onHoverLi(e)}
          onMouseLeave={(e) => onHoverLeaveLi(e)}
        >
          Artists
        </li>
        <li
          onClick={(e) => changeActiveLi(e)}
          onMouseEnter={(e) => onHoverLi(e)}
          onMouseLeave={(e) => onHoverLeaveLi(e)}
        >
          Album
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
