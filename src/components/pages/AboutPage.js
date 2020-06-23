import React from "react";
import Header from "../core/Header";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="page about-page">
      {/* <Header>About me</Header> */}
      <div className="content-container container-about">
        <div className="about-card">
          <h3 className="about-card__title">About me</h3>
          <p className="about-card__description">
            My first experience with programming was creating scripts for Google
            Spreadsheets. That's when I fell the passion for programming and
            decided to become front end developer.
          </p>
        </div>
        <div className="about-card">
          <h3 className="about-card__title">Career goals</h3>
          <p className="about-card__description">
            My goal is to become top shelf React Developer Creating and working
            on well known Web Apps used by large number of people across the
            world.
          </p>
        </div>
        <Link className="btn btn-cta btn-cta__contact" to="/contact">
          Contact me
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
