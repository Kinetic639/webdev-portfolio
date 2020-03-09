import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavList from "./NavList";

export class Header extends Component {
  state = {
    navbarShow: false
  };
  render() {
    return (
      <header className="header">
        <div>
          <Link className="header__link" to="/">
            Portfolio
          </Link>
        </div>
        <nav>
          <NavList />
        </nav>
      </header>
    );
  }
}

export default Header;
