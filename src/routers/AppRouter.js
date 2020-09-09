import React, { Component } from "react";
import { createBrowserHistory } from "history";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import "normalize.css/normalize.css";
import Navbar from "../components/core/Navbar";
import Backdrop from "../components/backdrop/Backdrop";
import DrawerToggleButton from "../components/core/DrawerToggleButton";
import NotFoundPage from "../components/pages/NotFoundPage";
import HomePage from "../components/pages/HomePage";
import ContactPage from "../components/pages/ContactPage";
import ProjectsPage from "../components/pages/ProjectsPage";
import AboutPage from "../components/pages/AboutPage";
import ProjectView from "../components/pages/ProjectView";
import { projects } from "../data/projects";
import projectOne from "../images/project1.jpg";
import projectTwo from "../images/project2.jpg";
import projectThree from "../images/project3.jpg";
import { AnimatePresence } from "framer-motion";

export const history = createBrowserHistory();

export class App extends Component {
  state = {
    sideDrawerOpen: false,
    views: [
      {
        id: 1,
        page: "/",
        title: "Home",
      },
      {
        id: 2,
        page: "projects",
        title: "Projects",
      },
      {
        id: 3,
        page: "about",
        title: "about",
      },
      {
        id: 4,
        page: "contact",
        title: "Contact",
      },
    ],
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
    const navItems = [...document.querySelector(".nav-menu").children];
    navItems.map((e) => e.classList.toggle("show"));
  };

  drawerToggleclickHandler = () => {
    this.setState({ sideDrawerOpen: !this.state.sideDrawerOpen });
    const navItems = [...document.querySelector(".nav-menu").children];
    navItems.map((e) => e.classList.toggle("show"));
  };

  render() {
    const { sideDrawerOpen } = this.state;
    let backdrop;
    if (sideDrawerOpen) {
      backdrop = <Backdrop bdClickHandler={this.backdropClickHandler} />;
    }

    return (
      <Router style={{ height: "100%" }} history={history}>
        <Navbar
          show={sideDrawerOpen}
          click={this.drawerToggleclickHandler}
          views={this.state.views}
        />

        <DrawerToggleButton
          click={this.drawerToggleclickHandler}
          isOpen={this.state.sideDrawerOpen}
        />

        {backdrop}
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch>
            <Route path="/" component={HomePage} exact={true} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route
              path="/projects"
              exact={true}
              render={(props) => (
                <ProjectsPage {...props} projectList={projects} />
              )}
            />
            {/* <Route
            path="/projects/:id"
            render={(props) => <ProjectView {...props} test={projects} />}
          /> */}
            {projects.map((project) => (
              <Route
                path={`/projects/${project.id}`}
                key={project.id}
                render={(props) => <ProjectView {...props} {...project} />}
              />
            ))}
            <Route component={NotFoundPage} />
          </Switch>
        </AnimatePresence>
      </Router>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
