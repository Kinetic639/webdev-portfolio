import React, { Component } from "react";
import ProjectsItem from "./ProjectsItem";

export class ProjectsList extends Component {
  state = {
    projects: [
      {
        id: "1",
        title: "Portfolio website",
        technologies: ["HTML5", "CSS (SCSS)", "Javascript", "React"],
        description: "This portfolio website...",
        liveLink: "live link",
        githubLink: "github link",
        thumbnail: ''
      },
      {
        id: "2",
        title: "Workout planner",
        technologies: ["HTML5", "CSS (SCSS)", "Javascript", "React", 'Firebase', 'Webpack'],
        description: "PWA made for planning workouts and tracking progress at the gym",
        liveLink: "live link",
        githubLink: "github link"
      }
    ]
  };
  render() {
    return (
      <ul className="projects-list">
        {this.state.projects.map(e => (
  <ProjectsItem key={e.id} project={e} />
        ))}
      </ul>
    );
  }
}

export default ProjectsList;
