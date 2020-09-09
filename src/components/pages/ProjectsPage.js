import ProjectCard from "../core/ProjectCard";
import ContactPage from "./ContactPage";
import ProjectView from "./ProjectView";

import { Link } from "react-router-dom";
import React from "react";



const ProjectsPage = (props) => {
  return (
    <div className="page page-projects">
      <ul>
        {props.projectList.map((project) => (
          <li key={project.id}>
            <Link className='test' to={`/projects/${project.id}`}>
              <ProjectCard {...project}/>
            </Link>
          </li>
        ))}
      </ul>
     
    </div>
  );
};

export default ProjectsPage;
