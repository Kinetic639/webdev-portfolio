import React, { Component } from "react";
import NavItem from "./NavItem";

export class NavList extends Component {
  state = {
    views: [
      {
        page: "Home",
        id: 1
      },
      {
        page: "Skills",
        id: 2
      },
      {
        page: "Projects",
        id: 3
      },
      {
        page: "About",
        id: 4
      },
      {
        page: "Contact",
        id: 5
      }
    ]
  };
  render() {
    const { views } = this.state;
    return (
      <ul className="nav-menu">
        {views.map(e => (
          <NavItem key={e.id}>{e.page}</NavItem>
        ))}
      </ul>
    );
  }
}

export default NavList;
