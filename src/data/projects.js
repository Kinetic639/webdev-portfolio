import projectOne from "../images/project1.jpg";
import projectTwo from "../images/project2.jpg";
import projectThree from "../images/project3.jpg";
export const projects = [
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
    stack: ["Html 5", "Javascript", "React", "Sass(SCSS)", "Heroku", "Figma"],
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
];
