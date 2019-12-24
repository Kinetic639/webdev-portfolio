import React, { Component } from "react";
import "./App.scss";
import "normalize.css/normalize.css";
import Navbar from "./core/Navbar";
import Backdrop from "./components/backdrop/Backdrop";
import DrawerToggleButton from "./core/DrawerToggleButton";
import About from "./components/pages/About";
import Skills from "./components/pages/Skills";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";

export class App extends Component {
  state = {
    sideDrawerOpen: false,

    views: [
      {
        id: 1,
        page: "home"
      },
      {
        id: 2,
        page: "about"
      },
      {
        id: 3,
        page: "skills"
      },
      {
        id: 4,
        page: "projects"
      },
      {
        id: 5,
        page: "contact"
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
      <Router>
        <div className="app" style={{ height: "100%" }}>
          <DrawerToggleButton click={this.drawerToggleclickHandler} />
          <Navbar
            show={sideDrawerOpen}
            drawerClickHandler={this.drawerToggleclickHandler}
            views={this.state.views}
          />
          {backdrop}
          <main className="container container-main">
            <Route path='/home' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/skills' component={Skills} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
           
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
