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
      <a className="responsiveLogo" href="#/">
        <img
          className="responsiveLogo"
          src={require("../Assets/Logo.png")}
          alt="Logo"
        />
      </a>

      <nav ref={navRef}>
        {firstPartNavBarContent.map((c, i) => {
          return (
            <a className="NavbarItems" key={i} href={`#${c.toLowerCase()}`}>
              <span className="Hashtag">#</span>
              {c}
            </a>
          );
        })}

        <a className="Logo" href="#/">
          <img
            className="Logo"
            src={require("../Assets/Logo.png")}
            alt="Logo"
          />
        </a>

        {secondPartNavBarContent.map((c, i) => {
          return (
            <a
              className="NavbarItems"
              key={i}
              href={`#${c.toLowerCase().replace(/\s/g, "")}`}
            >
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
