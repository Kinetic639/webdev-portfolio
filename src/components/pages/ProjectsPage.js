import React from "react";
import Header from "../core/Header";
import Slider from "../core/Slider";

const ProjectsPage = () => {
  return (
    <div className="page projects-page">
      <div className="content-container container-projects">
        <Header className="header-projects">My Projects</Header>
        <Slider />
      </div>
    </div>
  );
};

export default ProjectsPage;
