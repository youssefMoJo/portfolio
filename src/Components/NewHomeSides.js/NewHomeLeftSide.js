import React, { useRef, useEffect, useState } from "react";

import Lottie from "lottie-react";
import rocketAnimation from "../../Assets/animation/rocket.json";
import linkedinAnimation from "../../Assets/animation/linkedin.json";
import { BiDownload } from "react-icons/bi";
import MyResume from "../../Files/resume.pdf";

const NewHomeLeftSide = () => {
  const rocketAnimationRef = useRef();
  const linkedinAnimationRef = useRef();
  const [showRocket, setShowRocket] = useState(false);
  const [showLinkedinAndGithubIcons, setShowLinkedinAndGithubIcons] =
    useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowRocket(true);
      handleAnimationEnd();
      setShowLinkedinAndGithubIcons(true);
    }, 1300);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleAnimationEnd = () => {
    handleColorChange();
    setTimeout(() => {
      setShowRocket(false);
    }, 3000);
  };

  const yAndMStyle = {
    display: "flex",
    alignItems: "center",
    gap: "3rem",
    position: "relative",
    // backgroundColor: "blue",
  };

  const yAndMSplitterStyle = {
    height: "20rem",
    borderRight: "8px solid white",
    borderRadius: "4px",
    animation:
      "expand 0.6s ease, appearFromLeft 1s ease, scaleIn 1s ease, scaleUpY 0.6s ease",
  };

  const nameStyle = {
    fontFamily: "Playfair Display",
    position: "absolute",
    top: "50%",
    left: "57%",
    transform: "translate(-52%, -50%)",
    textAlign: "center",
    backgroundColor: "#101424",
    // fontSize: "2rem",
    letterSpacing: "25px",
    color: "white",
    opacity: 0,
    animation: "fadeInAndScale 1.5s ease forwards",
    animationDelay: "0.9s",
    transition: "color 0.1s ease",
    width: "150%",
  };

  const rocketAnimationStyle = {
    rotate: "45deg",
    position: "absolute",
    width: "7rem",
    animation: showRocket
      ? "moveRight 3s ease forwards, scaleToZero 5s ease forwards"
      : "none",
  };

  const handleColorChange = () => {
    const nameContainer = document.getElementById("name-container");
    if (nameContainer) {
      const characters = nameContainer.getElementsByClassName("name-char");
      for (let i = 0; i < characters.length; i++) {
        setTimeout(() => {
          characters[i].style.color = "#00FF57"; // Set the color to white
        }, i * 100); // Adjust the delay as needed
      }
    }

    const softwareDeveloperContainer = document.getElementById(
      "software-developer-container"
    );
    if (softwareDeveloperContainer) {
      const characters = softwareDeveloperContainer.getElementsByClassName(
        "software-developer-char"
      );
      for (let i = 0; i < characters.length; i++) {
        setTimeout(() => {
          characters[i].style.opacity = 1; // Show the character
        }, i * 100); // Adjust the delay as needed
      }
    }
  };

  const softwareDeveloperStyle = {
    fontFamily: "Playfair Display",
    position: "absolute",
    top: "89%",
    left: "49%",
    fontSize: "2rem",
    color: "#00D0FF",
    width: "max-content",
    letterSpacing: "3px",
  };

  const linkedinAnimationStyle = {
    width: "4rem",
    zIndex: "100",
    animation: showLinkedinAndGithubIcons ? "scaleIn 1s ease" : "",
    opacity: showLinkedinAndGithubIcons ? 1 : 0,
    marginBottom: "-1rem",
  };

  const githubIconStyle = {
    animation: showLinkedinAndGithubIcons ? "scaleIn 1.3s ease" : "",
    opacity: showLinkedinAndGithubIcons ? 1 : 0,
    marginBottom: "-1rem",
  };

  return (
    <div>
      <style>
        {`
        
          @keyframes fadeInAndScale {
            0% {
              opacity: 0;
              transform: translate(-52%, -50%) scale(0.8);
            }
            100% {
              opacity: 1;
              transform: translate(-52%, -50%) scale(1);
            }
          }

          @keyframes expand {
            0% {
              height: 0;
            }
            100% {
              height: 20rem;
            }
          }

          @keyframes appearFromLeft {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes scaleIn {
            0% {
              transform: scaleX(0);
            }
            100% {
              transform: scaleX(1);
            }
          }

          @keyframes scaleUpY {
            0% {
              transform: scaleY(0);
            }
            100% {
              transform: scaleY(1);
            }
          }

          @keyframes moveRight {
            0% {
              left: 0%;
            }
            100% {
              left: calc(100%);
            }
          }

          @keyframes scaleToZero {
            0% {
              transform: scaleX(1) scaleY(1);
            }
            100% {
              transform: scaleX(0) scaleY(0);
            }
          }

          @media (min-width: 1390px) {
            .name-container-wrapper {
              font-size: 2rem; 
            }

            .Y-character  {
              font-size: 18rem; 
            }
            .M-character {
              font-size: 18rem; 
            }
          }

          @media (max-width: 1390px) {
            .name-container-wrapper {
              font-size: 1rem; 
            }
            .Y-character  {
              font-size: 13rem; 
            }
            .M-character {
              font-size: 13rem; 
            }
            .leftSection-container {
              margin-left: 2rem
            }
          }

        `}
      </style>

      <div className="leftSection-container" style={yAndMStyle}>
        <div
          id="name-container"
          className="name-container-wrapper"
          style={{ ...nameStyle, animation: "fadeInAndScale 1s ease forwards" }}
        >
          {[
            "Y",
            "O",
            "U",
            "S",
            "S",
            "E",
            "F",
            " ",
            "M",
            "O",
            "H",
            "A",
            "M",
            "E",
            "D",
          ].map((char, index) => (
            <span
              style={{ fontFamily: "Playfair Display" }}
              key={index}
              className="name-char"
            >
              {char}
            </span>
          ))}
        </div>

        <div style={rocketAnimationStyle}>
          {showRocket && (
            <Lottie
              lottieRef={rocketAnimationRef}
              loop={true}
              animationData={rocketAnimation}
            />
          )}
        </div>

        <span
          className="Y-character"
          style={{
            fontFamily: "Playfair Display",
            animation: "scaleUpY 0.6s ease",
            display: "inline-block",
            // fontSize: "18rem",
          }}
        >
          Y
        </span>

        <span style={yAndMSplitterStyle}></span>
        <span
          className="M-character"
          style={{
            animation: "appearFromLeft 0.6s ease, scaleIn  0.6s ease",
            display: "inline-block",
            fontFamily: "Playfair Display",
            transformOrigin: "left center",
            // fontSize: "18rem",
          }}
        >
          M
        </span>
        <div id="software-developer-container" style={softwareDeveloperStyle}>
          {[
            "F",
            "u",
            "l",
            "l",
            "-",
            "S",
            "t",
            "a",
            "c",
            "k",
            " ",
            "D",
            "e",
            "v",
            "e",
            "l",
            "o",
            "p",
            "e",
            "r",
          ].map((char, index) => (
            <span
              style={{ fontFamily: "Playfair Display", opacity: 0 }}
              key={index}
              className="software-developer-char"
            >
              {char}
            </span>
          ))}
        </div>

        {/* <div id="software-developer-container" style={softwareDeveloperStyle}>
          {[
            "S",
            "o",
            "f",
            "t",
            "w",
            "a",
            "r",
            "e",
            " ",
            "D",
            "e",
            "v",
            "e",
            "l",
            "o",
            "p",
            "e",
            "r",
          ].map((char, index) => (
            <span
              style={{ fontFamily: "Playfair Display", opacity: 0 }}
              key={index}
              className="software-developer-char"
            >
              {char}
            </span>
          ))}
        </div> */}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          position: "absolute",
          top: "80vh",
        }}
      >
        {/* <div className="ResumeButtonContainer">
          <a className="ResumeButton" href={MyResume}>
            Download Resume
          </a>
          <a href={MyResume}>
            <BiDownload className="DownloadIcon" />
          </a>
        </div> */}
        <a
          style={linkedinAnimationStyle}
          href="https://www.linkedin.com/in/youssef-mohamed-812b4b18a/"
          rel="noreferrer"
          target="_blank"
        >
          <Lottie
            lottieRef={linkedinAnimationRef}
            loop={false}
            animationData={linkedinAnimation}
          />
        </a>

        <a
          rel="noreferrer"
          target="_blank"
          href={"https://github.com/youssefMoJo"}
        >
          <img
            style={githubIconStyle}
            className="gitHubButtonInHomeImgForNewHome"
            src={require("../../Assets/github.png")}
            alt={"gitHub"}
          />
        </a>
      </div>
    </div>
  );
};

export default NewHomeLeftSide;
