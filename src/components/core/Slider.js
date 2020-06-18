import React, { Component } from "react";
import ProjectSlide from "./ProjectSlide";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronLeft,
//   faChevronRight,
// } from "@fortawesome/free-solid-svg-icons";

import ContactPage from "../pages/ContactPage";

import ReactIdSwiperCustom from "react-id-swiper/lib/ReactIdSwiper.custom";
import { Swiper, Navigation, Pagination } from "swiper/js/swiper.esm";

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
    const params = {
      // Provide Swiper class as props
      Swiper,
      // Add modules you need
      modules: [Navigation, Pagination],
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      spaceBetween: 300,
    };
    return (
        <ReactIdSwiperCustom {...params}>
          {this.state.slides.map((item) => {
            return <ProjectSlide key={item.id} item={item} />;
          })}
          {/* <ContactPage /> */}
        </ReactIdSwiperCustom>
    );
  }
}

export default Slider;

// {this.state.slides.map((item) => {
//   return <ProjectSlide key={item.id} item={item} />;
// })}
// <ContactPage />
