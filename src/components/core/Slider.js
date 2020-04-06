import React, { Component } from "react";
import ProjectSlide from "./ProjectSlide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import Swipe, { SwipeItem } from "swipejs/react";
import ContactPage from "../pages/ContactPage";

export class Slider extends Component {
  state = {
    slides: [
      {
        id: 1,
        title: "Expenses Menager",
        description:
          "My biggest project so far. It's an App for managing expenses.",
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
        id: 2,
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
        id: 3,
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
    const endTransition = (index, element) => {
      const dotNavigation = document.querySelector(".dot-navigation").children;
      for (let i = 0; i < dotNavigation.length; i++) {
        dotNavigation[i].classList.remove("current");
        dotNavigation[index].classList.add("current");
      }
    };

    const handleSlideChange = (index) => {
      swipeEl.slide(index);
    };

    let swipeEl;
    return (
      <div className="slider">
        <Swipe
          id="mySwipe"
          className="mySwipe"
          ref={(o) => (swipeEl = o)}
          auto={null}
          continuous={true}
          transitionEnd={endTransition}
        >
          {this.state.slides.map((item) => {
            return (
              <SwipeItem key={item.id}>
                <ProjectSlide item={item} />
              </SwipeItem>
            );
          })}
          ;
          <SwipeItem>
           <ContactPage />
          </SwipeItem>
        </Swipe>
        <button id="goLeft" onClick={() => swipeEl.prev()}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button id="goRight" onClick={() => swipeEl.next()}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>

        <div className="dotstyle dotstyle-fillup">
          <ul className="dot-navigation">
            {this.state.slides.map((el, index) => {
              if (index === 0) {
                return (
                  <li key={index} className="current">
                    <button onClick={() => handleSlideChange(index)}></button>
                  </li>
                );
              } else {
                return (
                  <li key={index}>
                    <button onClick={() => handleSlideChange(index)}></button>
                  </li>
                );
              }
            })}
            <li>
              <button onClick={() => swipeEl.slide(this.state.slides.length)}></button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Slider;
