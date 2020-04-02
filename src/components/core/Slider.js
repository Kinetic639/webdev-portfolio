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
      { id: 1, someattr: "a string", anotherattr: "" },
      { id: 2, someattr: "another string", anotherattr: "" },
      { id: 3, someattr: "siusiak", anotherattr: "" },
      { id: 4, someattr: "cycki", anotherattr: "" }
    ]
  };
  render() {
    let swipeEl;

    return (
      <div className="slider">
        <Swipe ref={o => (swipeEl = o)} auto={null}  continuous={true}>
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
      </div>
    );
  }
}

export default Slider;
