import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import ImgFrame from "../core/ImgFrame";

export default function HomePage() {
  return (
    <div className="page home-page">
      <div className="content-container container-home">
        <div className="home-page__top">
          <h1 className="home-page__title">
            Michał <span>Stępień</span>
          </h1>
          <h3 className="home-page__subtitle">
            Front end developer / programmer
          </h3>
        </div>
        <p className="home-page__description">
          Specializing in custom theme development. If you're a business seeking
          a web presence or are looking to hire, contact me{" "}
          <span className="link">here</span>.
        </p>
        <Link className="btn btn-cta" to="/projects">
          <FontAwesomeIcon className="btn__icon" icon={faEye} />
          Projects
        </Link>
        <ImgFrame width='380px' classList='home-frame' opacity='.3' />
      </div>
    </div>
  );
}
