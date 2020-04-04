import React, { Component } from "react";
import ProjectSlide from "./ProjectSlide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Swipe, { SwipeItem } from "swipejs/react";

export class Slider extends Component {
  state = {
    slides: [
      {
        id: 1,
        title: "Project 1",
        description: "description 1",
        imgUrl: "./images/projects/project1.jpg",
      },
      {
        id: 2,
        title: "Project 2",
        description: "description 2",
        imgUrl: "./images/projects/project2.jpg",
      },
      {
        id: 3,
        title: "Project 3",
        description: "description 3",
        imgUrl: "./images/projects/project3.jpg",
      },
      {
        id: 4,
        title: "Project 4",
        description: "description 4",
        imgUrl: "./images/projects/project4.jpg",
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
          </ul>
        </div>
      </div>
    );
  }
}

export default Slider;
