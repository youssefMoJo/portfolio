import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Navbar.css";

const Navbar = () => {
  let firstPartNavBarContent = ["Home", "Projects"];
  let secondPartNavBarContent = ["About Me", "Contact"];
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <nav ref={navRef}>
        {firstPartNavBarContent.map((c, i) => {
          return (
            <a key={i} href="#/">
              <span className="Hashtag">#</span>
              {c}
            </a>
          );
        })}

        <a href="#/">
          <img
            className="Logo"
            src={require("../Assets/logo.png")}
            alt="Logo"
          />
        </a>

        {secondPartNavBarContent.map((c, i) => {
          return (
            <a key={i} href="#/">
              <span className="Hashtag">#</span>
              {c}
            </a>
          );
        })}

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn nav-open-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
