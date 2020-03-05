import React from 'react';
import {  NavLink } from "react-router-dom";

export default function NavItem(props) {
   
    return (
    <li className='nav-menu__item'>
<NavLink activeClassName='is-active' to={props.children}>{props.children}</NavLink>
    </li>
    )
}
