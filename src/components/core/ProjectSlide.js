import React from "react";

const ProjectSlide = props => {
  const bgImage = {
    backgroundColor: 'red',
    background: `url(./images/projects/project${props.item.id}.jpg)`
  }
  return (
    <div className="project-card" style={bgImage}>
      <div className="title">{props.item.title}</div>
      <div className="description">{props.item.description}</div>
      <div className="tech-stack">tech stack</div>
    </div>
  );
};

export default ProjectSlide;
