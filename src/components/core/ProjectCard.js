import React from "react";

const ProjectCard = ({ id, title, description }) => {
  return (
    <div className="project-card">
      <div className="project-card__number-container">
        {" "}
        <h1 className="project-card__number">{id}</h1>
      </div>
      <div className="project-card__img"></div>
      <div className="project-card__description">
        <h2 className="project-card__description-title">{title}</h2>
        <p className="project-card__description-text">{description}</p>
        <button className="btn btn__project-card">info...</button>
      </div>
    </div>
  );
};

export default ProjectCard;
