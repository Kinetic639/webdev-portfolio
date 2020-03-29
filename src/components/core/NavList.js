import React from "react";
import NavItem from "./NavItem";

export default function NavList(props) {
  return (
    <ul className="nav-menu">
      {props.views.map(e => (
        <NavItem click={props.click} key={e.id} title={e.title} page={e.page}>
          {e.title}
        </NavItem>
      ))}
    </ul>
  );
}
