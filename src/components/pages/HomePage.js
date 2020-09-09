import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="page home-page">
      <div className="content-container container-home">
        <div className="home-page__top">
          <h1 className="page__title">
            {`Michał `}
            <span> Stępień</span>
          </h1>
          <h2 className="page__subtitle">Front end developer / programmer</h2>
        </div>
        <p className="page__description">
          Aspiring self tought programmer looking for first experience as a
          front end developer. If you're a business seeking someone to hire,
          contact me <span className="link">here</span>.
        </p>
        <Link className="btn btn-cta" to="/projects">
          <FontAwesomeIcon className="btn__icon" icon={faEye} />
          Projects
        </Link>
        {/* <ImgFrame width='380px' classList='home-frame' opacity='.3' /> */}
      </div>
    </div>
  );
}
