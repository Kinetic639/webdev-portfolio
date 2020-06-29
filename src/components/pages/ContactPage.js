import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { createBrowserHistory } from "history";
import Header from "../core/Header";
export default function ContactPage() {
  return (
    <div className="page contact-page">
      {/* {createBrowserHistory().location.pathname === "/contact" ? (
        // <Header>Contact</Header>
      ) : null} */}
      <div className="content-container container-contact">
        {createBrowserHistory().location.pathname !== "/contact" ? (
          <div className="questions">
            <h3>Contact me</h3>
          </div>
        ) : null}
        <div className="location">
          <h1 className="page__title--contact">
            <span>Location:</span> Poznań, Poland
          </h1>
          <h2 className="page__subtitle--contact">
            (I don't mind relocating if necessary)
          </h2>
        </div>
        <div className="container-social">
          <a
            href="https://github.com/Kinetic639"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            href="https://www.linkedin.com/in/michal-stepien/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=1188347557"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="mailto:michal.stepien36@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </div>
  );
}
