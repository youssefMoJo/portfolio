import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Fly from "./Components/Fly";
import Rights from "./Components/Rights";
import "./App.css";
import ReactGA from "react-ga";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    // ReactGA.initialize("TRACKING ID");
    ReactGA.initialize("G-KD8HMKMFZ5");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Fly />
      <Projects />
      <About />
      <Contact />
      <Rights />
    </div>
  );
};
export default App;
