import React from "react";
import NavList from "./NavList";

export default function Navbar(props) {
  let navbarClasses = "container-navbar ";
  if (props.show) {
    navbarClasses += " open";
  }
  return (
    <nav className={navbarClasses}>
      <div className="branding">
        <div className="branding__portrait"></div>{" "}
      </div>
      {/* <div className="spacer"></div> */}
      <NavList
        show={props.show}
        pages={props.pages}
        views={props.views}
        click={props.click}
      />
    </nav>
  );
}
