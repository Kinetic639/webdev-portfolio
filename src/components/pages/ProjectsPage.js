import ProjectCard from "../core/ProjectCard";
import ContactPage from "./ContactPage";

import React, { Component } from 'react'

export class ProjectsPage extends Component {
  state = {
    projects: [
      {
        id: '01',
        title: "Expenses Menager",
        description:
          "My biggest project so far. React and Redux on the front end and firebase database on the backend. ",
        imgUrl: "./images/projects/project1.jpg",
        stack: [
          "Html 5",
          "Sass(SCSS)",
          "Javascript",
          "React",
          "Redux",
          "Jest",
          "Enzyme",

          "Firebase",
          "Heroku",
        ],
        features: [
          "Build with React",
          "Google Authentication",
          "Firebase realtime database",
        ],
        github: "https://github.com/Kinetic639/budget-app",
        live: "https://simple-budget-menager.herokuapp.com/",
      },
      {
        id: '02',
        title: "Portfolio website",
        description: "It's the website you are currently visiting",
        imgUrl: "./images/projects/project2.jpg",
        stack: [
          "Html 5",
          "Javascript",
          "React",
          "Sass(SCSS)",
          "Heroku",
          "Figma",
        ],
        features: [],
        github: "https://github.com/Kinetic639/webdev-portfolio",
        live: "http://www.michal-stepien.eu/",
      },
      {
        id: '03',
        title: "Random value picker",
        description:
          "Simple app, where you create list of values and let the computer pick one of them at random. ",
        imgUrl: "./images/projects/project3.jpg",
        stack: ["Html 5", "React", "Javascript", "Sass(SCSS)", "Heroku"],
        features: ["Forms", "Using local storage"],
        github: "https://github.com/Kinetic639/indecision",
        live: "https://random-value-picker.herokuapp.com/",
      },
    ],
  };

  render() {
    return (
      <div className="page page-projects">
      {/* <Header className="header-projects">My Projects</Header> */}
      <div className="content-container container-projects">
        {this.state.projects.map(project => <ProjectCard {...project}/>)}
        <ContactPage />
      </div>
    </div>
    )
  }
}

export default ProjectsPage

