import React from "react";
import NavItem from "./NavItem";

export default function NavList(props) {
  const views = [
    {
      id: 1,
      page: "home"
    },
    {
      id: 2,
      page: "about"
    },
    {
      id: 3,
      page: "skills"
    },
    {
      id: 4,
      page: "projects"
    },
    {
      id: 5,
      page: "contact"
    }
  ];

  // let menuClasses ;
  // if (props.show) {
  //   menuClasses = 'gsdfgsdfgsdf'
  //   console.log(props.show);

  // }

 
  return (
    <ul className='nav-menu'>
      {views.map(e => (
        <NavItem key={e.id}>{e.page}</NavItem>
      ))}
    </ul>
  );
}
