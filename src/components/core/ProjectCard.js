import React from "react";

const ProjectCard = () => {
  return (
    <div className="project-card">
      <div className="project-card__number-container"> <h1 className="project-card__number">01</h1></div>
      <div className="project-card__img"></div>
      <div className="project-card__description">
        <h2 className="project-card__description-title">Budget Menager</h2>
        <p className="project-card__description-text">
          My biggest project so far. React and Redux on the front end and
          firebase database on the backend. 
        </p>
        <button className="btn btn__project-card">info...</button>
      </div>
    </div>
  );
};

export default ProjectCard;
