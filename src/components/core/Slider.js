import React, { Component } from "react";
import ProjectSlide from "./ProjectSlide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

import Swipe, { SwipeItem } from "swipejs/react";

export class Slider extends Component {
  state = {
    slides: [
      {
        id: 1,
        title: "Project 1",
        description: "description 1",
        imgUrl: "./images/projects/project1.jpg"
      },
      {
        id: 2,
        title: "Project 2",
        description: "description 2",
        imgUrl: "./images/projects/project2.jpg"
      },
      {
        id: 3,
        title: "Project 3",
        description: "description 3",
        imgUrl: "./images/projects/project3.jpg"
      },
      {
        id: 4,
        title: "Project 4",
        description: "description 4",
        imgUrl: "./images/projects/project4.jpg"
      }
    ]
  };
  render() {
    let swipeEl;

    return (
      <div className="slider">
        <Swipe ref={o => (swipeEl = o)} auto={null} continuous={true}>
          {this.state.slides.map(item => {
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
          <ul>
            <li >
              <a href="#">Home</a>
            </li>
            <li className="current">
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Slider;
