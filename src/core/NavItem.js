import React from 'react';
import {  NavLink } from "react-router-dom";

export default function NavItem(props) {
    const isActive = {
        color: 'red'
    }
    return (
    <li className='nav-menu__item'>
<NavLink activeStyle={isActive} to={props.children}>{props.children}</NavLink>
    </li>
    )
}
