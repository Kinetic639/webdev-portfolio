import React from "react";

export default function About() {
  return (
    <section
      id="about-section"
      className="section section-about section2"
      data-title="About"
    >
      <div className="section-about__info">
        {/* <img src="img/portrait.jpg" alt="Michał Stępień" className="bio-image"> */}
        <div className="bio">
          <h3 className="about__title">Bio</h3>
          <p className="about__desc">
            I am 31 years old self tought aspiring developer. My first contact
            with javascript was when i had an office job working mostly with
            google spreadsheets (writing scripts for them using Google App
            Script - javascript framework). That's when i fell in love with
            programing and started to look for ways to do it full time.
          </p>
        </div>
        <div className="about__col about__col-1">
          <h3 className="about__title">Experience</h3>
          <p className="about__desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem nam tempore culpa officiis libero ullam!
          </p>
        </div>
        <div className="about__col about__col-2">
          <h3 className="about__title">Career goals</h3>
          <p className="about__desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem nam tempore culpa officiis libero ullam!
          </p>
        </div>
        <div className="about__col about__col-3">
          <h3 className="about__title">What job I'm looking for</h3>
          <p className="about__desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem nam tempore culpa officiis libero ullam!
          </p>
        </div>
      </div>
    </section>
  );
}
