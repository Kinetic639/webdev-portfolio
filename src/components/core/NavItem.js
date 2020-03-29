import React from 'react';
import {  NavLink } from "react-router-dom";

export default function NavItem(props) {
    const isActive = {
        color: '#9acd32'
    }
    return (
    <li className='nav-menu__item'>
<NavLink activeStyle={isActive} to={props.page} onClick={props.click}>{props.children}</NavLink>
    </li>
    )
}
