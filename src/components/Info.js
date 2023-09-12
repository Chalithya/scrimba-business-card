import React from "react";
import CSPhoto from "../images/chalithya-sangeeth.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Info() {
  return (
    <div className="info">
      <img className="info--photo" src={CSPhoto} alt="Chalithya Sangeeth" />
      <h1 className="info--fullname">Chalithya Sangeeth</h1>
      <h5 className="info--role">Full Stack Developer</h5>
      <div className="info--buttons">
        <address>
          <a href="mailto:schalithya@gmail.com">
            <button className="button button--email">
              <FontAwesomeIcon icon={faEnvelope} className="info--icon" />
              Email
            </button>
          </a>
        </address>
        <a
          href="https://www.linkedin.com/in/chalithya-sangeeth/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button button--linkedin">
            <FontAwesomeIcon icon={faLinkedin} className="info--icon" />
            LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
}
