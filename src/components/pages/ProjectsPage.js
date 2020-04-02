import React from "react";
import Header from "../core/Header";
import ProjectsNavigation from "../core/ProjectsNavigation";
import ProjectCard from "../core/ProjectSlide";
import Slider from "../core/Slider";

const ProjectsPage = () => {
  return (
    <div className="page projects-page">
      <div className="content-container container-projects">
        <Header>My Projects</Header>
        <Slider />
        {/* <ProjectsNavigation /> */}
      </div>
    </div>
  );
};

export default ProjectsPage;
