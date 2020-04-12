import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEye, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const icons = [faHome, faEye, faUser, faEnvelope]
export default function NavItem(props) {
  // const isActive = {
  //     color: '#9acd32'
  // }
  return (
    <li className="nav-menu__item">
      <NavLink
        exact
        activeClassName={"is-active"}
        to={props.page}
        onClick={props.click}
      >
        <FontAwesomeIcon className='nav-menu__icon' icon= {icons[props.id - 1]} />
       <p> {props.children}</p>
      </NavLink>
    </li>
  );
}
