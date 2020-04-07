import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHtml5,
//   faJs,
//   faCss3Alt,
//   faSass,
//   faReact,
// } from "@fortawesome/free-brands-svg-icons";
const ProjectSlide = (props) => {
  const bgImage = {
    background: `url(images/project${props.item.id}.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top",
    backgroundSize: "cover",
  };
  return (
    <div className="project-card" style={bgImage}>
      <h3 className="project-card__title">{props.item.title}</h3>
      <p className="project-card__description">{props.item.description}</p>
      {props.item.features.length > 0 ? (
        <div className="project-card__list-container ">
          <h4 className="project-card__list-title">Some features:</h4>
          <ul className="project-card__list project-card__list--features">
            {props.item.features.map((e, index) => {
              return (
                <li key={index} className="project-card__list-item--features">
                  <p>{e}</p>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
      <div className="project-card__list-container ">
        <h4 className="project-card__list-title">Technologies and Tools:</h4>
        <ul className="project-card__list">
          {props.item.stack.map((e, index) => {
            return (
              <li key={index} className="project-card__list-item">
                <p>{e}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="container-cta">
        <a href={props.item.github} target="_blank" className="btn btn-cta">
          Github
        </a>
        <a href={props.item.live} target="_blank" className="btn btn-cta">
          Live
        </a>
      </div>
    </div>
  );
};

export default ProjectSlide;

// switch (e) {
//   case "Html 5":
//     return (
//       <li key={index} className="stack-list__item">
//         <FontAwesomeIcon
//           className="stack-icon stack-icon-html5 "
//           icon={faHtml5}
//         />
//       </li>
//     );
//     break;
//   case "Js":
//     return (
//       <li key={index} className="stack-list__item">
//         <FontAwesomeIcon
//           className="stack-icon stack-icon-js "
//           icon={faJs}
//         />
//       </li>
//     );
//     break;
//   case "React":
//     return (
//       <li key={index} className="stack-list__item">
//         <FontAwesomeIcon
//           className="stack-icon stack-icon-react "
//           icon={faReact}
//         />
//       </li>
//     );
//     break;
//   case "CSS":
//     return (
//       <li key={index} className="stack-list__item">
//         <FontAwesomeIcon
//           className="stack-icon stack-icon-css "
//           icon={faCss3Alt}
//         />
//       </li>
//     );
//     break;
//   case "Sass":
//     return (
//       <li key={index} className="stack-list__item">
//         <FontAwesomeIcon
//           className="stack-icon stack-icon-sass "
//           icon={faSass}
//         />
//       </li>
//     );
//     break;
//   default:
// }
