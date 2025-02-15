import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Prasad Patil </span>
            from <span className="purple"> Shahada, India.</span>
            <br />
            I am completed a 1 year of intership from SevenMentor, Pune.
            <br />
            I have completed Bachelor of Engineering B.E (Mech) .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Musical Instrument Like Keyboard, Octapad
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Prasad Patil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
