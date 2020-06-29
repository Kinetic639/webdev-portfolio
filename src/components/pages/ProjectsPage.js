import React from "react";
import ProjectCard from "../core/ProjectCard";
import ContactPage from "./ContactPage";

const ProjectsPage = () => {
  return (
    <div className="page page-projects">
      {/* <Header className="header-projects">My Projects</Header> */}
      <div className="content-container container-projects">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ContactPage />
      </div>
    </div>
  );
};

export default ProjectsPage;
