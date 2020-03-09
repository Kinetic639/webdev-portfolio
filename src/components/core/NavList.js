import React, { Component } from "react";
import NavItem from "./NavItem";

export class NavList extends Component {
  state = {
    views: [
      {
        page: "/",
        title: "Home",
        id: 1
      },
      {
        page: "skills",
        title: "Skills",
        id: 2
      },
      {
        page: "projects",
        title: "Projects",
        id: 3
      },
      {
        page: "about",
        title: "About",
        id: 4
      },
      {
        page: "contact",
        title: "Contact",
        id: 5
      }
    ]
  };
  render() {
    const { views } = this.state;
    return (
      <ul className="nav-menu">
        {views.map(e => (
          <NavItem key={e.id} page={e.page}>
            {e.title}
          </NavItem>
        ))}
      </ul>
    );
  }
}

export default NavList;
