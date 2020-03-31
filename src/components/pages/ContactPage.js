import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";

import Header from "../core/Header";

export default function ContactPage() {
  return (
    <div className="page contact-page">
      <div className="content-container container-contact">
        <Header>Contact</Header>
        <div className="location">
          <h3>Location: <span>Poznań, Poland</span> </h3>
          <p>(I don't mind relocating if necessary)</p>
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
