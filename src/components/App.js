import React from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import About from "./About";



/*function Home() {
  return (
    <div id="home">
      <h1>Liza is a Web Developer from New York</h1>
    </div>
  );
}
*/
/*function About() {
  return(
    <div id="about">
      <h2>About Me</h2>
      <h3>I made this</h3>
      <img ></img>
    </div>
  )
};
*/
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;

