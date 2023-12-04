import React, { useRef, useEffect } from "react";
import Lottie from "lottie-react";
import codingAnimation from "../../Assets/animation/coding.json";
import { BiDownload } from "react-icons/bi";
import MyResume from "../../Files/resume.pdf";

const NewHomeRightSide = () => {
  const codingAnimationRef = useRef();
  const codingAnimationStyle = {
    width: "40rem",
    animation: "scaleIn 1s ease",
  };

  useEffect(() => {
    codingAnimationRef.current.play(); // Start the animation
  }, []);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "1rem", // Adjust the margin as needed
  };

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
        <div className="ResumeButtonContainer">
          <a className="ResumeButton" href={MyResume}>
            Download Resume
          </a>
          <a href={MyResume}>
            <BiDownload className="DownloadIcon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewHomeRightSide;
