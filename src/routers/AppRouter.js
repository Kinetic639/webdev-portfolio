import React, { Component } from "react";
import { createBrowserHistory } from "history";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "normalize.css/normalize.css";
//
import Navbar from "../components/core/Navbar";
import Backdrop from "../components/backdrop/Backdrop";
import DrawerToggleButton from "../components/core/DrawerToggleButton";
// import Skills from "../components/pages/Skills";
// import Projects from "../components/pages/Projects";
// import About from "../components/pages/About";
// import Contact from "../components/pages/Contact";
import NotFoundPage from "../components/pages/NotFoundPage";
import HomePage from "../components/pages/HomePage";
import ContactPage from "../components/pages/ContactPage";
import ProjectsPage from "../components/pages/ProjectsPage";

export const history = createBrowserHistory();

export class App extends Component {
  state = {
    sideDrawerOpen: false,
    views: [
      {
        id: 1,
        page: "/",
        title: "Home"
      },
      {
        id: 2,
        page: "about",
        title: "about"
      },
      {
        id: 3,
        page: "skills",
        title: "Skills"
      },
      {
        id: 4,
        page: "projects",
        title: "Projects"
      },
      {
        id: 5,
        page: "contact",
        title: "Contact"
      }
    ]
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  drawerToggleclickHandler = () => {
    this.setState({ sideDrawerOpen: !this.state.sideDrawerOpen });
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
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/Projects" component={ProjectsPage} />
          {/*<Route path="/Skills" component={Skills} />
    <Route path="/About" component={About} />*/}
          <Route path="/Contact" component={ContactPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
