import React from "react";

export default function DrawerToggleButton(props) {
  let getStyle;
  props.isOpen
    ? (getStyle = "toggle-button open")
    : (getStyle = "toggle-button");
  // let firstLine;
  // let secondLine;
  // let thirdLine;
  // if (props.isOpen) {
  //   firstLine = { transform: "rotate(45deg)", transformOrigin: "100% 50%" };
  //   secondLine = { width: "0", transition: "all .1s ease-out" };
  //   thirdLine = { transform: "rotate(-45deg)", transformOrigin: "100% 50%" };
  // }
  return (
    <button className={getStyle} onClick={props.click}>
      <div className="toggle-button__line"></div>
      <div className="toggle-button__line"></div>
      <div className="toggle-button__line"></div>
    </button>
  );
}
