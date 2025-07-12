import React from "react";
import user from "../data/user"; 
import Links from "./Links";

function About({ bio, github, linkedin }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio ? <p>{bio}</p> : null}
      <img src={user.image} alt="I made this" />
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;
