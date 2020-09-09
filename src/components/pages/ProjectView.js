import React from "react";
import Header from "../core/Header";
import { Link } from "react-router-dom";

const AboutPage = (props) => {
  return (
    <div className="page about-page">
      {props.project.title}
      <Link to="/projects">Go Back</Link>
    </div>
  );
};

export default AboutPage;
