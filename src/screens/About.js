import React from "react";
import ParticleAbout from "../components/ParticleAbout";
import "../assets/about.css";

function About() {
  return (
    <>
      <ParticleAbout/>
      <div className="App">
        <div className="App-text about">
          <div className="about-text__title">
            Hello, I'm{" "}
            <span className="about-text__title-big">Karthik Sundar</span>.
          </div>
          <div className="about-text__title">
            I'm looking to work in <span className="about-text__title-big">Amazing</span>{" "}
            projects.
          </div>
          <div className="about-text__body">
            I am a sophomore in NIT Tiruchirapalli, India.
            <br></br>
            I am a Full Stack Web Developer, but that doesn't mean all I do is coding. I do graphic designing and 3D Art.
            <br />

          </div>
          <div className="about-social">
            <div className="about-social__title">Feel free to contact me</div>
            <div className="about-social__links">
              <a
                className="about-social__link"
                href="https://instagram.com/karthiksundar2002"
                rel="noopener noreferrer"
                target="_blank">
                instagram
              </a>
              <a
                className="about-social__link"
                href="https://github.com/KarthikSundar2002"
                rel="noopener noreferrer"
                target="_blank">
                github
              </a>
              <a
                className="about-social__link"
                href="https://www.behance.net/karthiksundar2"
                rel="noopener noreferrer"
                target="_blank">
                Behance
              </a>
              <a
                className="about-social__link"
                href="mailto:geekpathetic@gmail.com"
                rel="noopener noreferrer"
                target="_blank">
                email
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
