import React, { useRef, useEffect, useState } from "react";
import Lottie from "lottie-react";
import codingAnimation from "../../Assets/animation/coding.json";
import { BiDownload } from "react-icons/bi";
import MyResume from "../../Files/resume.pdf";
import linkedinAnimation from "../../Assets/animation/linkedin.json";

const NewHomeRightSide = () => {
  const [showLinkedinAndGithubIcons, setShowLinkedinAndGithubIcons] =
    useState(false);
  const linkedinAnimationRef = useRef();

  const codingAnimationRef = useRef();
  const codingAnimationStyle = {
    width: "40rem",
    animation: "scaleIn 1s ease",
  };

  useEffect(() => {
    codingAnimationRef.current.play(); // Start the animation
    setShowLinkedinAndGithubIcons(true);
  }, []);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  // const linkedinAnimationStyle = {
  //   width: "4rem",
  //   // position: "absolute",
  //   zIndex: "100",
  //   animation: showLinkedinAndGithubIcons ? "scaleIn 1s ease" : "",
  //   opacity: showLinkedinAndGithubIcons ? 1 : 0,
  //   marginBottom: "-1rem",
  // };

  // const githubIconStyle = {
  //   animation: showLinkedinAndGithubIcons ? "scaleIn 1.3s ease" : "",
  //   opacity: showLinkedinAndGithubIcons ? 1 : 0,
  //   marginBottom: "-1rem",
  // };

  return (
    <div style={codingAnimationStyle}>
      <style>
        {`
          @keyframes scaleIn {
            0% {
              transform: scale(0);
            }
            100% {
              transform: scale(1);
            }
          }
        `}
      </style>
      <div style={containerStyle}>
        <Lottie
          lottieRef={codingAnimationRef}
          loop={true}
          animationData={codingAnimation}
        />
        {/* <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div className="ResumeButtonContainer">
            <a className="ResumeButton" href={MyResume}>
              Download Resume
            </a>
            <a href={MyResume}>
              <BiDownload className="DownloadIcon" />
            </a>
          </div>
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
        </div> */}
      </div>
    </div>
  );
};

export default NewHomeRightSide;
