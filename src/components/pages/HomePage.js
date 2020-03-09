import React from "react";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className=" container container-main home-page">
      <div>
        <h1 className="home-page__title">
          Michał <span>Stępień</span>
        </h1>
        <h3 className="home-page__subtitle">
          Front end developer / programmer
        </h3>
      </div>
      <p className="home-page__description">
        Specializing in custom theme development. If you're a business seeking a
        web presence or are looking to hire, contact me here.
      </p>
      <Link className=" button" to="/projects">
        Projects
      </Link>
    </div>
  );
}
