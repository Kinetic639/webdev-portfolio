import React from "react";

export default function ProjectsItem(props) {
  const {
    title,
    technologies,
    description,
    liveLink,
    githubLink
  } = props.project;
  return (
    <li className="projects-list__item">
      <div
        style={{
          backgroundImage: "../../img/portrait.jpg",
          background: 'green',
          height: "auto",
          minHeight: '350px',
          width: "100%"
        }}
      ></div>
      <div className='projects-list__item--info'>
          <button onClick={props}>view more</button>
          <p>{title}</p>
          <p>{description}</p>
      <p>`Technologies used: {technologies.join(", ")}`</p>
      </div>
    </li>
  );
}
