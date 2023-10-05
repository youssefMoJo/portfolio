import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Fly from "./Components/Fly";
import Rights from "./Components/Rights";
import NewProjectCard from "./Components/NewProjectCard";
import "./App.css";

const App = () => {
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
