import React from "react";
import NavList from "./NavList";

export default function Navbar(props) {
  let navbarClasses = "container-navbar";
  if (props.show) {
    navbarClasses += " open";
  }
  return (
    <nav className={navbarClasses}>
      <div className="branding">Portfolio </div>
      {/* <div className="spacer"></div> */}
        <NavList show={props.show} views={props.views} click={props.click}/>
             
    </nav>
  );
}
