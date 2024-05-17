import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);
const name = user.name;
const city = user.city;
const color = user.color;
const bio = user.bio;
const github = user.links.github;
const linkedin = user.links.linkedin;

function App() {
  return (
    <div>
      <NavBar />
      <Home name={name} city={city} color={color} />
      <About bio={bio} />
    </div>
  );
}

export default App;
