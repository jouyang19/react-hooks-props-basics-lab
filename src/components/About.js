import React from "react";
import Links from "./Links";
import user from "../data/user";

function About(prop) {
  const github = user.links.github;
  const linkedin = user.links.linkedin;

  return (
    <div id="about">
      <h2>About Me</h2>
      {prop.bio && <p>{prop.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;
