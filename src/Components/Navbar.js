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

  const removeSideNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header>
      <a className="responsiveLogo" href="#home">
        <img
          className="responsiveLogo"
          src={require("../Assets/Logo.png")}
          alt="Logo"
        />
      </a>

      <nav ref={navRef}>
        {firstPartNavBarContent.map((c, i) => {
          return (
            <a
              onClick={() => removeSideNavbar()}
              className="NavbarItems"
              key={i}
              href={`#${c.toLowerCase()}`}
            >
              <span className="Hashtag">#</span>
              {c}
            </a>
          );
        })}

        <img
          onClick={scrollToTop}
          className="Logo"
          src={require("../Assets/Logo.png")}
          alt="Logo"
        />

        {secondPartNavBarContent.map((c, i) => {
          return (
            <a
              onClick={() => removeSideNavbar()}
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
