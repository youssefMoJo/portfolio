import React, { useEffect, useRef, useState } from "react";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Fly from "./Components/Fly";
import Rights from "./Components/Rights";
import NewHome from "./Components/NewHome";
import "./App.css";

const App = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      {/* {screenWidth >= 1490 ? <NewHome /> : <Home />} */}
      <NewHome />
      <Fly />
      <Projects />
      <About />
      <Contact />
      <Rights />
    </div>
  );
};
export default App;
