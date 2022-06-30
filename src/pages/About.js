import React from "react";
import { Link } from "react-router-dom";
// import Main from "../components/Main/Main";

const About = () => {
  return (
    <div className="about">
      <div className="about__container">
        <h1 className="about__title">
          Make your{" "}
          <span>
            <Link to="/todo" className="about__link">
              notes
            </Link>
          </span>{" "}
          !
        </h1>
      </div>
    </div>
  );
};

export default About;
