import ProjectCard from "../core/ProjectCard";
import ContactPage from "./ContactPage";
import projectOne from "../../images/project1.jpg";
import projectTwo from "../../images/project2.jpg";
import projectThree from "../../images/project3.jpg";

import React, { Component } from "react";

export class ProjectsPage extends Component {
  state = {
    projects: [
      {
        id: "01",
        title: "Expenses Menager",
        description:
          "My biggest project so far. React and Redux on the front end and firebase database on the backend. ",
        imgUrl: projectOne,
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
        selected: false,
      },
      {
        id: "02",
        title: "Portfolio website",
        description: "It's the website you are currently visiting",
        imgUrl: projectTwo,
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
        selected: false,
      },
      {
        id: "03",
        title: "Random value picker",
        description:
          "Simple app, where you create list of values and let the computer pick one of them at random. ",
        imgUrl: projectThree,
        stack: ["Html 5", "React", "Javascript", "Sass(SCSS)", "Heroku"],
        features: ["Forms", "Using local storage"],
        github: "https://github.com/Kinetic639/indecision",
        live: "https://random-value-picker.herokuapp.com/",
        selected: false,
      },
    ],
    showModal: false,
  };

  handleCardClick = (id, card) => {
    console.log(id);

    // let items = [...this.state.projects];

    // items[id].selected = items[id].selected ? false : true;

    // items.forEach((item) => {
    //   if (item.id !== id) {
    //     item.selected = false;
    //   }
    // });

    // this.setState({ projects: items });
  };

  makeItems = (items) => {
    return items.map((item) => (
      <ProjectCard
        {...item}
        click={(e) => this.handleCardClick(item.id, e)}
        key={item.id}
      />
    ));
  };

  render() {
    return (
      <div className="page page-projects">
        <div className="content-container container-projects">
          {this.makeItems(this.state.projects)}
          <ContactPage />
        </div>
      </div>
    );
  }
}

export default ProjectsPage;

/*
handleOpenModal() {
    // this.setState({ showModal: true });
    console.log("dupa");
  }

  handleClick = (e) => {
    console.log(e.target);
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };
  render() {
    return (
      <div className="page page-projects">
        <div className="content-container container-projects">
          <button onClick={this.handleClick}>dupa</button>
          {this.state.projects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
              // click={(e) => this.handleClick(e)}
              onClick={this.handleClick}
            />
          ))}
          <ContactPage onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default ProjectsPage;

*/
