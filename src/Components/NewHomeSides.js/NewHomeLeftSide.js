import React, { useRef, useEffect, useState } from "react";

import Lottie from "lottie-react";
import rocketAnimation from "../../Assets/animation/rocket.json";

const NewHomeLeftSide = () => {
  const rocketAnimationRef = useRef();
  const [showRocket, setShowRocket] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowRocket(true);
      handleAnimationEnd();
    }, 1300);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleAnimationEnd = () => {
    setTimeout(() => {
      setShowRocket(false);
    }, 3000);
  };

  const yAndMStyle = {
    display: "flex",
    alignItems: "center",
    gap: "3rem",
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
    left: "52%",
    transform: "translate(-52%, -50%)",
    textAlign: "center",
    backgroundColor: "#101424",
    fontSize: "2.5rem",
    letterSpacing: "20px",
    color: "#00FF57",
    opacity: 0,
    animation: "fadeInAndScale 1s ease forwards",
    animationDelay: "0.9s",
  };

  const rocketAnimationStyle = {
    rotate: "45deg",
    position: "absolute",
    width: "7rem",
    animation: showRocket
      ? "moveRight 2.5s ease forwards, scaleToZero 5s ease forwards"
      : "none",
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
              left: 20%;
            }
            100% {
              left: calc(90% ); // Adjust the distance the rocket should move
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
          
        `}
      </style>

      <div style={yAndMStyle}>
        <div style={nameStyle}>YOUSSEF MOHAMED</div>
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
          style={{
            fontFamily: "Playfair Display",
            animation: "scaleUpY 0.6s ease",
            display: "inline-block",
            fontSize: "18rem",
          }}
        >
          Y
        </span>

        <span style={yAndMSplitterStyle}></span>
        <span
          style={{
            animation: "appearFromLeft 0.6s ease, scaleIn  0.6s ease",
            display: "inline-block",
            fontFamily: "Playfair Display",
            transformOrigin: "left center",
            fontSize: "18rem",
          }}
        >
          M
        </span>
      </div>
    </div>
  );
};

export default NewHomeLeftSide;
