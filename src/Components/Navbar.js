import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/Navbar.css";

const Navbar = () => {
  let navBarContent = ["#Home", "#About Me", "#Projects", "#Contact"];
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3> Logo </h3>
      <nav ref={navRef}>
        {navBarContent.map((c) => (
          <a href="#/"> {c} </a>
        ))}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
