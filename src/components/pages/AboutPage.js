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
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </p>
        </div>
        <div className="about-card">
          <h3 className="about-card__title">Career goals</h3>
          <p className="about-card__description">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
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
