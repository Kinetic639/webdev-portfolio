import React from "react";

export default function Contact() {
  return (
    <section
      id="contact-section"
      className="section section-contact section5"
      data-title="Contact"
    >
      <div className="address" data-title="Contact">
        <h4 className="address-primary">Current location:&nbsp; </h4>
        <p className="address-secondary">
          Poznań, Poland ( I don't mind relocating if neccessary :) )
        </p>
      </div>
      <ul className=" menu menu-contact">
        <li className="menu-contact__item btn">
          <a href="#" className="menu-contact__link">
            <i className="fab fa-github-square"></i>
            <span className="contact-link">Github</span>
          </a>
        </li>
        <li className="menu-contact__item btn">
          <a href="#" className="menu-contact__link">
            <i className="fab fa-linkedin"></i>
            <span className="contact-link">LinkedIn</span>
          </a>
        </li>
        <li className="menu-contact__item btn">
          <a href="#" className="menu-contact__link">
            <i className="fas fa-envelope"></i>
            <span className="contact-link">Email</span>
          </a>
        </li>
        <li className="menu-contact__item btn">
          <a href="#" className="menu-contact__link">
            <i className="fab fa-facebook-square"></i>
            <span className="contact-link">Facebook</span>
          </a>
        </li>
      </ul>
    </section>
  );
}
