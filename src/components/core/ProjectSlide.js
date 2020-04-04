import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faJs,
  faCss3Alt,
  faSass,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
const ProjectSlide = (props) => {
  const bgImage = {
    backgroundColor: "red",
    background: `url(./images/projects/project${props.item.id}.jpg)`,
  };
  return (
    <div className="project-card" id="dupa" style={bgImage}>
      <h3 className="project-card__title">{props.item.title}</h3>
      <p className="project-card__description">{props.item.description}</p>
      <div className="project-card__stack stack-list">
        <h4 className="stack-list__title">technologies used:</h4>
        <ul className="stack-list__list">
          {props.item.stack.map((e, index) => {
            switch (e) {
              case "Html 5":
                return (
                  <li key={index} className="stack-list__item">
                    <FontAwesomeIcon
                      className="stack-icon stack-icon-html5 "
                      icon={faHtml5}
                    />
                  </li>
                );
                break;
              case "Js":
                return (
                  <li key={index} className="stack-list__item">
                    <FontAwesomeIcon
                      className="stack-icon stack-icon-js "
                      icon={faJs}
                    />
                  </li>
                );
                break;
              case "React":
                return (
                  <li key={index} className="stack-list__item">
                    <FontAwesomeIcon
                      className="stack-icon stack-icon-react "
                      icon={faReact}
                    />
                  </li>
                );
                break;
              case "CSS":
                return (
                  <li key={index} className="stack-list__item">
                    <FontAwesomeIcon
                      className="stack-icon stack-icon-css "
                      icon={faCss3Alt}
                    />
                  </li>
                );
                break;
              case "Sass":
                return (
                  <li key={index} className="stack-list__item">
                    <FontAwesomeIcon
                      className="stack-icon stack-icon-sass "
                      icon={faSass}
                    />
                  </li>
                );
                break;
              default:
            }
          })}
        </ul>
      </div>
    <button>Github</button>
    <button>Live</button>
    </div>
  );
};

export default ProjectSlide;
